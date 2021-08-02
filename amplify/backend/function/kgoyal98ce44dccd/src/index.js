var AWS = require("aws-sdk");
var ddb = new AWS.DynamoDB({apiVersion: "2012-08-10"});

exports.handler = async () => {
  const params = {
    TableName: "UserFollow-zpo2msntt5dwxcwmrlugsec7ye-dev",
    FilterExpression: "userFollowUserId = :user_id",
    ExpressionAttributeValues: {
      ":user_id": {
        S: "1f081f2f-b2b0-4204-b363-7f2bfba8493b",
      },
    },
  };
  const userFollowObjects = await ddb.scan(params).promise();
  const ids = userFollowObjects.Items.map(
    (userFollowObject) => userFollowObject.userFollowFolloweeId.S
  );

  let idObject = {};
  let index = 0;
  ids.forEach(function (value) {
    index++;
    let idKey = ":idvalue" + index;
    idObject[idKey.toString()] = {S: value};
  });

  const postParams = {
    TableName: "Post-zpo2msntt5dwxcwmrlugsec7ye-dev",
    FilterExpression:
      "postUserId IN (" + Object.keys(idObject).toString() + ")",
    ExpressionAttributeValues: idObject,
  };
  const posts = await ddb.scan(postParams).promise();
  const promises = posts.Items.map(async (post) => {
    const params = {
      TableName: "User-zpo2msntt5dwxcwmrlugsec7ye-dev",
      Key: {
        id: {
          S: post.postUserId.S,
        },
      },
    };
    const author = await ddb.getItem(params).promise();
    return {
      id: post.id.S,
      content: post.content.S,
      user: {
        id: author.Item.id.S,
        name: author.Item.name.S,
      },
    };
  });

  const result = await Promise.all(promises);
  return result;
};
