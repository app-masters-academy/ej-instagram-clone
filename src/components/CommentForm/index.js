import React from "react";
import { VscSmiley } from "react-icons/vsc";
import { api } from "../../utils/api";
import "./styles.css";

export default function CommentForm(props) {
  const [photoUrl, setPhotoUrl] = React.useState("");

  const submitPost = async () => {
    const data = {
      photoUrl: photoUrl,
      description: "Apenas um post",
    };
    console.log("Vou postar!");
    const response = await api.post("/post", data);
    console.log(response);
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
