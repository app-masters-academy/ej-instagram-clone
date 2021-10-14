import React from "react";

class CommentForm extends React.Component{
    render(){
        return <>
            <input placeholder={"Escreva um comentário"}  /><br/>
            <button>
                Comentar
            </button>
        </>
    }
}

export default CommentForm;