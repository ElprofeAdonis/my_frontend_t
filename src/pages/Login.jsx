import React from "react";
import axios from "axios";
import { useNavigate } from "react-router";

import Radio from "@mui/material/Radio";
import FormControlLabel from "@mui/material/FormControlLabel";
import RadioGroup from "@mui/material/RadioGroup";

import "./login.css";
import { Hidden } from "@mui/material";
import { WindowSharp } from "@mui/icons-material";

function Login() {
  let navigate = useNavigate();

  const [postLogin, setPostLogin] = React.useState("null");
  const [infoLogin, setInfoLogin] = React.useState([]);

  // variantes de post

  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [role, setRole] = React.useState("");

  const datosLogin = async (event) => {
    event.preventDefault();

    try {
      const res = await axios.post("http://localhost:8000/signin", {
        email: email,
        password: password,
        role: role,
      });

      const data = await res.data;
      saveData(data);
      setPostLogin(data);
      setInfoLogin(data);
      navigate("/home");
    } catch (error) {
      console.log("Hola creo que funciono" + error);
    } finally {
      console.log("Peticion finalizada del login post");
      // alert("Usuario creado con exito");
    }
  };

  //Una forma de ver que lo que estas asiendo esta bien (prueba con localStorage) y todo funciona nice
  const saveData = (data) => {
    localStorage.setItem("userId", data.id);
    localStorage.setItem("email", data.email);
    localStorage.setItem("name", data.name);
    localStorage.setItem("role", data.role);
  };

  return (
    <>
      <section className="vh-100" style={{ backgroundColor: "#000000" }}>
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col col-xl-10">
              <div className="card" style={{ borderRadius: "1rem" }}>
                <div className="row g-0">
                  <div className="col-md-6 col-lg-5 d-none d-md-block">
                    <img
                      src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/img1.webp"
                      alt="login form"
                      className="img-fluid"
                      style={{ borderRadius: "1rem 0 0 1rem" }}
                    />
                  </div>
                  <div className="col-md-6 col-lg-7 d-flex align-items-center">
                    <div className="card-body p-4 p-lg-5 text-black">
                      <form>
                        <div className="d-flex align-items-center mb-3 pb-1">
                          <i
                            className="fas fa-cubes fa-2x me-3"
                            style={{ color: "#ff6219" }}
                          ></i>
                          <span className="h1 fw-bold mb-0">Adoview</span>
                        </div>

                        <h5
                          className="fw-normal mb-3 pb-3"
                          style={{ letterSpacing: "1px" }}
                        >
                          Sign into your account
                        </h5>

                        <input
                          type="text"
                          onChange={(evento) => setEmail(evento.target.value)}
                          style={{
                            backgroundColor: "#d6d9db",
                            border: "none",
                            marginLeft: "70px",
                            fontSize: "17px",
                            flex: 1,
                            color: "black",
                            margin: "8px",
                          }}
                          id="form2Example17"
                          class="form-control form-control-lg"
                          placeholder="Please Email"
                        />
                        {/* <h2>{email}</h2> */}

                        <input
                          type="text"
                          onChange={(evento) =>
                            setPassword(evento.target.value)
                          }
                          style={{
                            backgroundColor: "#d6d9db",
                            border: "none",
                            marginLeft: "70px",
                            fontSize: "15px",
                            flex: 1,
                            color: "black",
                            margin: "8px",
                          }}
                          id="form2Example27"
                          class="form-control form-control-lg"
                          placeholder="Please Password"
                        />
                        <RadioGroup
                          aria-labelledby="demo-radio-buttons-group-label"
                          defaultValue="female"
                          name="radio-buttons-group"
                        >
                          <div
                            onChange={(evento) => setRole(evento.target.value)}
                          >
                            <FormControlLabel
                              value="superusuario"
                              control={<Radio />}
                              label="SuperUsuario"
                            />
                            <FormControlLabel
                              value="usuario"
                              control={<Radio />}
                              label="Usuario"
                            />
                          </div>
                        </RadioGroup>

                        <div className="pt-1 mb-4">
                          <button
                            className="btn"
                            type="button"
                            // onClick={saveData}
                            onClick={datosLogin}
                          >
                            Login
                          </button>
                        </div>

                        <div className="small text-muted" href="#!">
                          Forgot password?
                        </div>
                        <p className="mb-5 pb-lg-2">
                          Don't have an account?{" "}
                          <a href="/register">Register here</a>
                        </p>
                        <a href="#!" className="small text-muted">
                          Terms of use.
                        </a>
                        <a href="#!" className="small text-muted">
                          Privacy policy
                        </a>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Login;
