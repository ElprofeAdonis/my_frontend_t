import React from "react";
import { Button } from "@mui/material";
import axios from "axios";
import "./TweetBox.css";

const Comentpost = () => {
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
        `http://localhost:8000/superusuario/comentario/${userId}`,
        {
          c_comentario: comentetario,
          c_foto: fot,
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
    <div>
      <di>
        <input
          type="text"
          onChange={(evento) => setComentarios(evento.target.value)}
          style={{
            backgroundColor: "#d6d9db",
            border: "none",
            marginLeft: "60px",
            fontSize: "11px",
            flex: 1,
            color: "black",
            margin: "8px",
          }}
          id="form2Example27"
          className="form-control form-control-lg"
          placeholder="Please comentame"
        />
      </di>
      <div>
        <input
          type="text"
          onChange={(evento) => setFoto(evento.target.value)}
          style={{
            backgroundColor: "#d6d9db",
            border: "none",
            marginLeft: "70px",
            fontSize: "11px",
            flex: 1,
            color: "black",
            margin: "8px",
          }}
          id="form2Example27"
          className="form-control form-control-lg"
          placeholder="Please URL"
        />
      </div>
      <div>
        <Button
          onClick={fetchPostTweet}
          type="button"
          className="tweetBox__tweetButtonn"
        >
          Enviar
        </Button>
      </div>
    </div>
  );
};

export default Comentpost;
