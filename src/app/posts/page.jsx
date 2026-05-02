import Posts from "@/components/posts/Posts";
import React, { Suspense } from "react";
import Loading from "./loading";

const PostsPage = () => {
  const postPromise = fetch("https://jsonplaceholder.typicode.com/posts").then(
    (res) => res.json(),
  );
  return (
    <div>
      <Suspense fallback={<Loading></Loading>}>
        <Posts postPromise={postPromise}></Posts>
      </Suspense>
    </div>
  );
};

export default PostsPage;
