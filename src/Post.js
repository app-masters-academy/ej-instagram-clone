import Avatar from "./Avatar";
import {CommentList} from "./Comments";
import CommentForm from "./CommentForm";

function Post(props) {
    // console.log("Post >>> props", props);
    // if (props!==null && props.data!==null)

    return <div
        style={{
            border: 1,
            borderColor: "black",
            borderStyle: "solid",
            margin: 20,
            padding: 10,
            backgroundColor: "white"
        }}>
        {Avatar({"name": props.data.userName})}
        {/*<Avatar name={props.data ? props.data.userName : "No user"}/>*/}
        <p style={{border: 1, borderColor: "silver", borderStyle: "solid", padding: 10}}>
            {props && props.data ? props.data.message : "No message"}
        </p>
        <CommentList comments={props.data.comments}/>
        <CommentForm/>
    </div>
}

export default Post;