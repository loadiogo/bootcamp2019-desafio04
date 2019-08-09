import React from "react";

function PostHeader(props) {}

function PostComment(props) {}

function PostItem(props) {
  const { author, date, content, comments } = props.post;
  return (
    <div className="post">
      <p className="post-content">{content}</p>
    </div>
  );
}

export default PostItem;
