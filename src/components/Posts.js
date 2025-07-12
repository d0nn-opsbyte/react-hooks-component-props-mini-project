// Posts.js
import React from "react";
import posts from "./postsData";

function Posts() {
  return (
    <section>
      {posts.map(post => (
        <article key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.date ? post.date : "No date available"}</p>
          <p>{post.preview}</p>
          <p>{post.minutes} minute read</p>
        </article>
      ))}
    </section>
  );
}

export default Posts;
