import React from "react";
import { VscSmiley } from "react-icons/vsc";
import "./styles.css";

export default function ComponentForm(props) {
  return (
    <div className="component-form-container" style={props.style}>
      <VscSmiley size={30} />
      <input className="component-form-input" placeholder={props.placeholder} />
      <button
        className="component-form-button"
        style={props.buttonColor ? { color: props.buttonColor } : {}}
      >
        Publicar
      </button>
    </div>
  );
}
