// COMPONENTE INICIO SESIÓN

import { Link } from "react-router-dom";


import "./login.css";

export const Login = () => {
  const loginRequest = (event) => {
    event.preventDefault();
    // Lógica para manejar la solicitud de inicio de sesión
  };

  return (
    <section>
      <h1>INICIAR SESIÓN</h1>

      <form onSubmit={loginRequest} className="login">
        <ul>
          <li>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="user_email" />
          </li>
          <li>
            <label htmlFor="password">Contraseña</label>
            <input type="password" id="password" name="user_password" />
          </li>
          <li>
            <button type="submit">Iniciar Sesión</button>
          </li>
          <li>
            <Link to="/registro">Registro</Link>
          </li>
        </ul>
      </form>
    </section>
  );
};
