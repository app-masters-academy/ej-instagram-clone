import Avatar from "./Avatar";

function Comment(props) {
    return <div style={{border: 1, borderColor: "skyblue", borderStyle: "dashed", padding: 3, margin: 2}}>
        <Avatar name={props.userName} />
        {props.message}
    </div>
}

const CommentList = (props) => {
    if (!props.comments){
        return <div><p>Seja o primeiro a comentar</p></div>
    }

    return <div>
        <small>Comentários:</small>
        {
            props.comments.map(
                (comment)=>{
                    return <Comment message={comment.message} userName={comment.userName} />
                }
            )
        }
    </div>
}

export {Comment, CommentList};