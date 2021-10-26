import "./styles.css";
import { AiOutlineUser } from "react-icons/ai";

function Avatar(props) {
  const date = new Date(props.createdAt);

  return (
    <div className="avatar-container">
      <div className="avatar-picture">
        <AiOutlineUser color="white" size={20} />
      </div>
      <div className="avatar-info">
        <span style={{ fontSize: 14, fontWeight: 600 }}>{props.name}</span>
        <small style={{ fontSize: 12 }}>
          {date.getHours() +
            ":" +
            date.getMinutes() +
            " - " +
            date.getDate() +
            "/" +
            (date.getMonth() + 1)}
        </small>
      </div>
    </div>
  );
}

export default Avatar;
