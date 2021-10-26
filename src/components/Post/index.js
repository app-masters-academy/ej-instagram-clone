import Avatar from "../Avatar";
import { CommentList } from "../Comments";
import CommentForm from "../CommentForm";
import "./styles.css";

function Post(props) {
  return (
    <div className="post-container" onClick={() => props.onClick()}>
      <Avatar name={props.data.user?.name} createdAt={props.data.createdAt} />

      {props && props.data && props.data.photoUrl ? (
        <img
          style={{ marginTop: 10 }}
          src={props.data.photoUrl}
          width="100%"
          alt="Imagem exemplo"
        />
      ) : (
        <p className="post-message">
          {props && props.data ? props.data.message : "No message"}
        </p>
      )}
      <CommentList comments={props.data.comments} />
      <CommentForm buttonText="Comentar" placeholder="Escreva um comentário" />
    </div>
  );
}

export default Post;
