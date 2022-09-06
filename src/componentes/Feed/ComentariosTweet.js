import React, { useEffect } from "react";

import ModeloComentario from "./ModeloComentario";

const ComentariosTweet = () => {
  const [mostrarDato, setMostrarDato] = React.useState(null);
  const [infoApi, setInfoApi] = React.useState([]);
  const id = localStorage.getItem("userId");

  const fetchEstudiantes = async () => {
    try {
      const res = await fetch(
        `http://localhost:8000/superusuario/tweets-comentario/${id}`
      );
      const data = await res.json();
      console.log(data);
      setMostrarDato(data.data);
      setInfoApi(data);
    } catch (error) {
      console.log("Hola creo que funciono" + error);
    } finally {
      console.log("Peticion finalizada  de mostrar dato");
    }
  };
  useEffect(() => {
    console.log("Peticion inicializada");
    fetchEstudiantes();
  }, []);

  return (
    <div>
      <ul>
        <ModeloComentario infoApi={infoApi} />
      </ul>
    </div>
  );
};

export default ComentariosTweet;
