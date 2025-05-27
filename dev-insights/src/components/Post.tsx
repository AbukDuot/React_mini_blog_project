import React from 'react';
import type { PostType } from './PostList';
import '../styles/Post.css';

interface PostProps {
  post: PostType;
}

const Post: React.FC<PostProps> = React.memo(({ post }) => {
  const isNew = new Date().getTime() - new Date(post.date).getTime() < 86400000;
  const highlight = post.author === 'Sarah Amayo';

  return (
    <div className="post" style={{ backgroundColor: highlight ? '#f0f8ff' : 'white' }}>
      <h2>
        {post.title} {isNew && <span className="new-badge">New!</span>}
      </h2>
      <p><strong>{post.author}</strong> - {new Date(post.date).toLocaleDateString()}</p>
      <p>{post.content.slice(0, 50)}...</p>
    </div>
  );
});

export default Post;


