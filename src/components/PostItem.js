import React from "react";

function PostHeader(props) {
  const { author, date } = props;
  return (
    <div className="post-header">
      <img className="avatar" src={author.avatar} />
      <div className="post-author">
        <span>{author.name}</span>
        <span>{date}</span>
      </div>
    </div>
  );
}

function PostComment(props) {
  const { author, content } = props.comment;
  return (
    <div className="comment">
      <img className="avatar" src={author.avatar} />

      <p>
        <span>{author.name} </span>
        {content}
      </p>
    </div>
  );
}

function PostItem(props) {
  const { author, date, content, comments } = props.post;
  return (
    <div className="post">
      <PostHeader author={author} date={date} />
      <p className="post-content">{content}</p>

      <div className="post-line" />

      <div className="post-comments">
        {comments.map(comment => (
          <PostComment key={comment.id} comment={comment} />
        ))}
      </div>
    </div>
  );
}

export default PostItem;
