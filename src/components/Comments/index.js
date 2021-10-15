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
    <div style={styles.commentList}>
      {props.comments ? (
        props.comments.map((comment) => (
          <Comment message={comment.message} userName={comment.userName} />
        ))
      ) : (
        <span style={styles.noComment}>Seja o primeiro a comentar</span>
      )}
    </div>
  );
};

const styles = {
  noComment: {
    opacity: 0.4,
    fontSize: "14px",
  },
  commentList: {
    padding: "10px",
  },
};

export { Comment, CommentList };
