import Amplify, {API, graphqlOperation} from "aws-amplify";
import {getUser} from "./graphql/queries";
import "./App.css";
import awsconfig from "./aws-exports";
import {useEffect, useState} from "react";
Amplify.configure(awsconfig);

function App() {
  const [user, setUser] = useState();
  useEffect(() => {
    const setupState = async () => {
      const result = await API.graphql(
        graphqlOperation(getUser, {
          id: "1f081f2f-b2b0-4204-b363-7f2bfba8493b",
        })
      );
      setUser(result.data.getUser);
    };
    setupState();
  }, []);

  if (!user) return <>loading...</>;
  return (
    <div className="App">
      <p>hello {user.name}.</p>
      <p> Here are posts from the people you follow:</p>
      {user.following.items.map((follow) => {
        const contents = follow.followee.posts.items.map((post) => (
          <p key={post.id}>{post.content}</p>
        ));
        return (
          <>
            {" "}
            <h2>{follow.followee.name}</h2>{contents}
          </>
        );
      })}
    </div>
  );
}

export default App;
