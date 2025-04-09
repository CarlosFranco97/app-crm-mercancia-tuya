import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  alertaGenerica,
  alertaRedireccion,
  generarToken,
} from "../../helpers/generarToken";
import "./Login.css";

const Login = () => {
  const [usuarios, setUsuarios] = useState([]);

  // const getUsuarios = () => {
  //     fetch('http://localhost:3001/usuarios')
  //     .then(response => response.json)
  //     .then(data => setUsuarios(data))
  //     .catch(error => console.error(error));
  // }

  const redireccion = useNavigate();

  const [formState, setFormState] = useState({
    email: "",
    password: "",
  });

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = formState;
    // const users = getUsuarios();
    if (email === "admin" && password === "123456") {
      const tokenAcceso = generarToken();
      localStorage.setItem('token', tokenAcceso);
      alertaRedireccion(
        redireccion,
        "Bienvenido",
        "Será redireccionado al home",
        "success",
        "/home"
      );
    } else {
      alertaGenerica("Error", "Usuario y/o contraseña incorrecto", "error");
    }
  };

  return (
    <form onSubmit={(e) => handleSubmit(e)} className="login wrap">
      <div className="h1">Login</div>

      <input
        onChange={handleChange}
        placeholder="Email"
        id="email"
        name="email"
        type="text"
      />

      <input
        onChange={handleChange}
        placeholder="Password"
        id="password"
        name="password"
        type="password"
      />

      <input value="Login" className="btn" type="submit" />
    </form>
  );
};

export default Login;
