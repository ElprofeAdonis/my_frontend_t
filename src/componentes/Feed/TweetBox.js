import React, { useEffect } from "react";
import { Avatar, Button } from "@mui/material";
import "./TweetBox.css";
import axios from "axios";
import Divider from "@mui/material/Divider";

const TweetBox = () => {
  const [postwitter, setPostwitter] = React.useState(null);
  const [infoApi, setInfoApi] = React.useState([]);
  const [comentetario, setComentarios] = React.useState("");
  const [fot, setFoto] = React.useState("");
  const userId = localStorage.getItem("userId");

  const fetchPostTweet = async (event) => {
    event.preventDefault();
    console.log("tweet");
    try {
      const res = await axios.post(
        "http://localhost:8000/superusuario/tweets",
        {
          t_comentario: comentetario,
          t_foto: fot,
          id: userId,
        }
      );

      console.log("res: ", res);

      const data = await res.data;
      setPostwitter(data);
      setInfoApi(data);
    } catch (error) {
      console.log("Hola creo que funciono" + error);
    } finally {
      console.log("Peticion finalizada del Post tweet");
    }
  };

  return (
    <div
      className="tweetBox"
      style={{
        // border: "1px solid blue",
        width: "550px",
        borderRight: "1px solid #4f4f4f",
        borderLeft: "1px solid #4f4f4f",
      }}
    >
      <form
      // style={{
      //   border: "1px solid red",
      // }}
      >
        <div className="tweetBox_input">
          <div
            style={{
              float: "left",
              // border: "1px solid white",
              padding: "14px 0 0 5px",
              width: "110px",
              height: "100px",
              margin: "16px 4px 32px 8px",
              objectFit: "fill",
            }}
          >
            <Avatar
              style={{ width: "90px", height: "80px" }}
              src="https://randomuser.me/api/portraits/women/21.jpg"
            />
          </div>
          <div
            style={{
              // border: "1px solid white",
              margin: "8px 8px 8px 120px",
              padding: "8px",
            }}
          >
            <input
              type="text"
              onChange={(evento) => setComentarios(evento.target.value)}
              style={{
                backgroundColor: "#4f4f4f",
                border: "none",
                marginLeft: "55px",
                fontSize: "20px",
                flex: 1,
                color: "#9a616d",
                margin: "4px 8px 8px 8px",
              }}
              placeholder="What's happening?"
            />
          </div>
          <div
            style={{
              // border: "1px solid red",
              margin: "8px 8px 8px 120px",
              padding: "8px",
            }}
          >
            <input
              type="text"
              onChange={(evento) => setFoto(evento.target.value)}
              className="tweetBox__imageInput"
              placeholder="Optional: Enter image URL"
            />
          </div>
        </div>
        <Button
          onClick={fetchPostTweet}
          type="button"
          className="tweetBox__tweetButton"
          style={{ border: "1px solid red" }}
        >
          Tweet
        </Button>
      </form>
    </div>
  );
};

export default TweetBox;
