import React from "react";
import { api } from "../../utils/api";

import "./styles.css";

export const LoginView = (props) => {
  console.log("Render do LoginView");
  // Estados
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [error, setError] = React.useState(null);
  const [loading, setLoading] = React.useState(false);

  // Funções
  const loginUser = () => {
    const data = {
      name: name,
      email: email,
      password: password,
    };
    setLoading(true);
    api
      .post("/login", data)
      .then((response) => {
        // SUCESSO!!!
        setLoading(false);
        props.onLogin(response.data);
        localStorage.setItem("accessToken", response.data.accessToken);
        api.defaults.headers.common["user-token"] = response.data.accessToken;
      })
      .catch((error) => {
        // FALHA
        setLoading(false);
      });
  };

  return (
    <div className="form-background">
      <div className="form-card">
        <h3>Bem vindo</h3>
        <input
          placeholder="Nome"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
        <input
          placeholder="E-mail"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <input
          placeholder="Senha"
          type="password"
          value={password}
          onChange={(event) => {
            setPassword(event.target.value);
          }}
        />
        <button
          className={
            loading || email.indexOf("@") < 0
              ? "form-submit disabled"
              : "form-submit"
          }
          disabled={loading || email.indexOf("@") < 0}
          onClick={() => loginUser()}
        >
          {!loading ? "Entrar" : "Carregando..."}
        </button>
      </div>
    </div>
  );
};
