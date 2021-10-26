import React from "react";
import Header from "../Header";
import Post from "../Post";

import { api } from "../../utils/api";

export const PostView = (props) => {
  const [singlePost, setSinglePost] = React.useState();

  React.useEffect(() => {
    api.get("/post").then((response) => {
      const post = response.data.find((item) => {
        return item.id === props.match.params.id;
      });
      setSinglePost(post);
    });
  }, [props.match.params.id]);

  return (
    <div>
      <Header />
      {singlePost && <Post data={singlePost} />}
    </div>
  );
};
