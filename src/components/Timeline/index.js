import React from "react";
import Header from "../Header";
import Post from "../Post";
import CommentForm from "../CommentForm";
import Colors from "../../styles/colors";
import { api } from "../../utils/api";

import "./styles.css";

export const Timeline = (props) => {
  console.log("Render da timeline");
  const [postList, setPostList] = React.useState([]);

  console.log("PostList: ", postList);

  React.useEffect(() => {
    console.log("UseEffect da timeline");
    api.get("/post", { headers: { "all-clients": true } }).then((response) => {
      console.log("Retornou a chamada");
      setPostList(response.data);
    });
  }, []);

  return (
    <div>
      <div
        style={{
          width: "100vw",
          backgroundColor: "white",
          borderBottom: `1px solid ${Colors.darkBorder}`,
          marginBottom: "40px",
        }}
      >
        <Header />
      </div>
      <div style={{ maxWidth: "614px", margin: "auto" }}>
        <CommentForm
          style={{
            border: `1px solid ${Colors.darkBorder}`,
            backgroundColor: "white",
          }}
          buttonColor={Colors.red}
          placeholder="Faça uma publicação"
          buttonText="Publicar"
          onPublish={(post) => setPostList([post, ...postList])}
        />
        {postList.length === 0 ? (
          <p>Carregando...</p>
        ) : (
          postList.map((post) => (
            <Post
              onClick={() => props.history.push(`/post/${post.id}`)}
              data={post}
              key={post.id}
            />
          ))
        )}
      </div>
    </div>
  );
};
