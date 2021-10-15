import "./styles.css";

function Comment(props) {
  return (
    <div className="comment">
      <strong>{props.userName}</strong>
      {props.message}
    </div>
  );
}

const CommentList = (props) => {
  return (
    <div className="comments-container">
      {props.comments ? (
        props.comments.map((comment) => (
          <Comment message={comment.message} userName={comment.userName} />
        ))
      ) : (
        <span style={{ opacity: 0.4, fontSize: "14px" }}>
          Seja o primeiro a comentar
        </span>
      )}
    </div>
  );
};

export { Comment, CommentList };
