import React from "react";
import axios from "axios";
import { useNavigate } from "react-router";

import Radio from "@mui/material/Radio";
import FormControlLabel from "@mui/material/FormControlLabel";
import RadioGroup from "@mui/material/RadioGroup";

const Register = () => {
  let navigate = useNavigate();
  const [postLogin, setPostLogin] = React.useState("null");
  const [infoLogin, setInfoLogin] = React.useState([]);

  // variantes de post
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [role, setRole] = React.useState("");

  const datosRegister = async (event) => {
    event.preventDefault();
    try {
      const res = await axios.post("http://localhost:8000/signup", {
        name: name,
        email: email,
        password: password,
        role: role,
      });
      console.log(res);

      const data = await res.data;

      console.log(data);
      saveData(data);
      setPostLogin(data);
      setInfoLogin(data);
      navigate("/login");
    } catch (error) {
      console.log("Hola creo que funciono" + error);
    } finally {
      console.log("Peticion finalizada del login post");
      // alert("Usuario creado con exito");
    }
  };

  //Una forma de ver que lo que estas asiendo esta bien (prueba con localStorage) y todo funciona nice
  const saveData = () => {
    localStorage.setItem("name", name);
    localStorage.setItem("email", email);
    localStorage.setItem("password", password);
    localStorage.setItem("role", role);
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
                      <form id="formaulario">
                        <div className="d-flex align-items-center mb-2 pb-1">
                          <i
                            className="fas fa-cubes fa-2x me-3"
                            style={{ color: "#ff6219" }}
                          ></i>
                          <span className="h1 fw-bold mb-0">Adoview</span>
                        </div>

                        <h5
                          className="fw-normal mb-2 pb-3"
                          style={{ letterSpacing: "1px" }}
                        >
                          Sign into your account
                        </h5>

                        <input
                          name="email"
                          type="text"
                          onChange={(evento) => setName(evento.target.value)}
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
                          className="form-control form-control-lg"
                          placeholder="User Name"
                        />

                        <input
                          name="nombre"
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
                          id="form2Example27"
                          className="form-control form-control-lg"
                          placeholder="Please Email"
                        />

                        <input
                          name="password"
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
                          className="form-control form-control-lg"
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

                        <div className="pt-1 mb-2">
                          <button
                            className="btn btn-dark btn-lg btn-block"
                            type="button"
                            // onClick={saveData}
                            onClick={datosRegister}
                          >
                            Registrar
                          </button>
                        </div>

                        <a className="small text-muted" href="#!">
                          Forgot password?
                        </a>
                        <p
                          className="mb-2 pb-lg-2"
                          style={{ color: "#393f81" }}
                        >
                          Don't have an account?{" "}
                          <a href="/login" style={{ color: "#393f81" }}>
                            Login
                          </a>
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
};

export default Register;
