import React from "react";
import "./Feed.css";
import TweetBox from "./TweetBox";
import Post from "./Post";

const Feed = () => {
  const [userId, setUserId] = React.useState("");
  const [name, setName] = React.useState("");

  const getData = () => {
    return {
      userId: localStorage.getItem("userId"),

      name: localStorage.getItem("name"),
    };
  };
  React.useEffect(() => {
    const { userId, name } = getData();
    setUserId(userId);
    setName(name);
  }, []);
  return (
    <div className="feed">
      <div className="feed__header">
        <h4 style={{ fontSize: "l-large" }}>Home Bienvenido {name}</h4>
      </div>
      <TweetBox />
      <Post />
    </div>
  );
};

export default Feed;
