import React from "react";
import "./Profile.css";
import axios from "axios";

const Prifile = () => {
  const [userId, setUserId] = React.useState("");
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [role, setRole] = React.useState("");
  const getData = () => {
    return {
      userId: localStorage.getItem("userId"),
      email: localStorage.getItem("email"),
      name: localStorage.getItem("name"),
      role: localStorage.getItem("role"),
    };
  };
  React.useEffect(() => {
    const { userId, email, name, role } = getData();
    setUserId(userId);
    setName(name);
    setEmail(email);
    setRole(role);
  }, []);

  return (
    <section class="seccion-perfil-usuario">
      <div class="perfil-usuario-header">
        <div class="perfil-usuario-portada">
          <div class="perfil-usuario-avatar">
            <img
              src="https://randomuser.me/api/portraits/women/21.jpg"
              alt="img-avatar"
            />
            <button type="button" class="boton-avatar">
              <i class="far fa-image"></i>
            </button>
          </div>
          <a href="/home">
            <button type="button" class="boton-portada">
              <i class="far fa-image"></i> Ir a la home
            </button>
          </a>
        </div>
      </div>
      <div class="perfil-usuario-body">
        <div class="perfil-usuario-bio">
          <h3 class="titulo">usuario: @{name}</h3>
          <h4 class="titulo">Corro electronico: {email}</h4>
          <h5 class="titulo">Funion: @{role}</h5>
          <p class="texto">
            Las funciones de un programador front-end van dirigidas al cuidado
            de la parte visual del desarrollo, o de forma sencilla, de hacer que
            la aplicación se pueda ver atractiva para los clientes (su trabajo
            se diferencia mucho del que realizan los desarrolladores back-end).
            Así, vemos que el trabajo de los mismos está en poder darle una
            mayor accesibilidad a los usuarios y que la experiencia de los
            mismos durante el uso del programa pueda ser bastante positiva. El
            papel de este tipo de trabajadores es fundamental dentro del
            desarrollo web, ya que en este campo también es muy valioso lo que
            pueden llegar a aportar como en el desarrollo de aplicaciones. Dicho
            esto, vemos que estos profesionales tienen que dominar diversos
            lenguajes de programación como HTML, CSS y JavaScript. Asimismo,
            deben saber qué es un framework (un esquema que ayuda a las
            funciones de un programador para estructurar el código de forma
            sencilla)
          </p>
        </div>
        <div class="perfil-usuario-footer">
          <ul class="lista-datos">
            <li>
              <i class="icono fas fa-map-signs"></i> Direccion de usuario:
              Alajuela
            </li>
            <li>
              <i class="icono fas fa-phone-alt"></i> Telefono: +000225863521
            </li>
            <li>
              <i class="icono fas fa-briefcase"></i> Trabaja en. Remote
            </li>
            <li>
              <i class="icono fas fa-building"></i> Cargo: Frontend
            </li>
          </ul>
          <ul class="lista-datos">
            <li>
              <i class="icono fas fa-map-marker-alt"></i> Ubicacion. Alajuela
            </li>
            <li>
              <i class="icono fas fa-calendar-alt"></i> Fecha nacimiento.
              25/25/2020
            </li>
            <li>
              <i class="icono fas fa-user-check"></i> Registro. Nice
            </li>
            <li>
              <i class="icono fas fa-share-alt"></i> Redes sociales. Todas
            </li>
          </ul>
        </div>
        <div class="redes-sociales">
          <a href="" class="boton-redes facebook fab fa-facebook-f">
            <i class="icon-facebook"></i>
          </a>
          <a href="" class="boton-redes twitter fab fa-twitter">
            <i class="icon-twitter"></i>
          </a>
          <a href="" class="boton-redes instagram fab fa-instagram">
            <i class="icon-instagram"></i>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Prifile;
