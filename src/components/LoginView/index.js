import "./styles.css";

export const LoginView = (props) => {
  return (
    <div className="form-background">
      <div className="form-card">
        <h3>Bem vindo</h3>
        <input placeholder="Nome" />
        <input placeholder="E-mail" />
        <input placeholder="Senha" type="password" />
        <button className="form-submit">Entrar</button>
      </div>
    </div>
  );
};
