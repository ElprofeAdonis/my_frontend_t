import React from "react";
import Feed from "../componentes/Feed/Feed";
import Sidebar from "../componentes/Sidebar/Sidebar";
import Widgets from "../componentes/Widgets/Widgets";

const Home = () => {
  return (
    <div
      style={{
        display: "flex",
        height: "100vh",
        maxWidth: "1300px",
        marginLeft: "auto",
        marginRight: "auto",
        padding: "0 10px",
      }}
    >
      <Sidebar />
      <Feed />
      <Widgets />
    </div>
  );
};

export default Home;
