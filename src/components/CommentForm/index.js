import React from "react";
import { VscSmiley } from "react-icons/vsc";
import { api } from "../../utils/api";
import "./styles.css";

export default function CommentForm(props) {
  const [photoUrl, setPhotoUrl] = React.useState("");

  const submitPost = async () => {
    try {
      // Objeto que vai ser enviado pra API (post)
      const data = {
        photoUrl: photoUrl,
        description: "Apenas um post",
      };
      // Enviando post para a API
      const response = await api.post("/post", data);

      props.onPublish(response.data);
      setPhotoUrl("");
    } catch (error) {
      console.log("DEU ERRADO");
      console.error(error);
    }
  };

  return (
    <div className="component-form-container" style={props.style}>
      <VscSmiley size={30} />
      <input
        value={photoUrl}
        onChange={(event) => setPhotoUrl(event.target.value)}
        className="component-form-input"
        placeholder={props.placeholder}
      />
      <button
        onClick={() => submitPost()}
        style={props.buttonColor ? { color: props.buttonColor } : {}}
        className="component-form-button"
      >
        {props.buttonText}
      </button>
    </div>
  );
}
