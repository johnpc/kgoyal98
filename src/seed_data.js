import {API, graphqlOperation} from "aws-amplify";
import {createUser, createUserFollow, createPost} from "./graphql/mutations";

export const seedData = async () => {
  const userResponse = await API.graphql(graphqlOperation(createUser, {
    input: {
      name: 'User'
    }
  }));
  const user = userResponse.data.createUser;
  const follow1Response = await API.graphql(graphqlOperation(createUser, {
    input: {
      name: 'Follow1'
    }
  }));
  const follow1 = follow1Response.data.createUser;
  const follow2Response = await API.graphql(graphqlOperation(createUser, {
    input: {
      name: 'Follow2'
    }
  }));
  const follow2 = follow2Response.data.createUser;

  await API.graphql(graphqlOperation(createUserFollow, {
    input: {
      userFollowUserId: user.id,
      userFollowFolloweeId: follow1.id,
    }
  }));
  await API.graphql(graphqlOperation(createUserFollow, {
    input: {
      userFollowUserId: user.id,
      userFollowFolloweeId: follow1.id,
    }
  }));

  await API.graphql(graphqlOperation(createPost, {
    input: {
      postUserId: follow1.id,
      content: "Post by follow1",
    }
  }));

  await API.graphql(graphqlOperation(createPost, {
    input: {
      postUserId: follow2.id,
      content: "Post by follow2",
    }
  }));
}

seedData();