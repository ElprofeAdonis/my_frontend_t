import React from "react";
import "./Post.css";
import axios from "axios";

import ComentariosTweet from "./ComentariosTweet";

import Comentpost from "./Comentpost";
import Like from "./Like";
import Etiquetas from "./Etiquetas";
import Sondeocoment from "./Sondeocoment";

import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import RepeatIcon from "@mui/icons-material/Repeat";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import PublishIcon from "@mui/icons-material/Publish";
import { Avatar, Button } from "@mui/material";

import "./PostTweets.css";

export default class Post extends React.Component {
  state = {
    persons: [],
  };
  componentDidMount() {
    axios.get(`http://localhost:8000/usuario/tweetss`).then((res) => {
      const persons = res.data;
      this.setState({ persons });
    });
  }

  render() {
    return (
      <div className="post">
        <div className="post__body">
          {this.state.persons.map((person) => (
            <div key={person.id}>
              <div style={{ display: "flex" }}>
                <div>
                  <div className="post__avatar">
                    <Avatar
                      style={{ width: "100px", height: "90px" }}
                      src={person.t_foto}
                    />
                  </div>
                </div>
                <div style={{ width: "370px" }}>
                  <div className="post__header">
                    <div className="post__headerText">
                      <h3>
                        Adonis Aleman
                        <span className="post__headerSpecial">
                          <VerifiedUserIcon className="post__badge" /> @
                          {person.s_name}
                        </span>
                      </h3>
                    </div>
                    <div className="post__headerDescription">
                      <p>{person.t_comentario}</p>
                    </div>
                  </div>
                  <img
                    style={{ margin: "8px", width: "350px" }}
                    src={person.t_foto}
                    alt={person.t_foto}
                  />
                </div>
              </div>

              {/* son los botones */}

              <div className="post__footer">
                <Button>
                  <ChatBubbleOutlineIcon fontSize="small" />
                </Button>
                <Sondeocoment />

                <RepeatIcon fontSize="small" />
                <Etiquetas />
                <FavoriteBorderIcon fontSize="small" />
                <Like />
                <PublishIcon fontSize="small" />
              </div>
              <div className="Comentarios" style={{ width: "540px" }}>
                <ComentariosTweet />
              </div>
              <font className="message">
                <Comentpost />
              </font>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
