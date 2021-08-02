import Amplify, {API, graphqlOperation} from "aws-amplify";
import {timeline} from "./graphql/queries";
import "./App.css";
import awsconfig from "./aws-exports";
import {useEffect, useState} from "react";
Amplify.configure(awsconfig);

function App() {
  const [posts, setTimeline] = useState();
  useEffect(() => {
    const setupState = async () => {
      const result = await API.graphql(graphqlOperation(timeline));
      console.log("res", result);
      setTimeline(result.data.timeline);
    };
    setupState();
  }, []);

  if (!posts) return <>loading...</>
  return (
    <div className="App">
      <p> Here are posts from the people you follow:</p>
      {posts.map((post) => (
        <p key={post.id}>{post.content}</p>
      ))}
    </div>
  );
}

export default App;
