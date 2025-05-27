import React from 'react';
import Post from './Post';
import withLogger from '../hoc/withLogger';

export type PostType = {
  id: number;
  title: string;
  author: string;
  content: string;
  date: string;
};

const posts: PostType[] = [
  {
    id: 1,
    title: 'Understanding useEffect',
    author: 'David',
    content: 'The useEffect hook lets you perform side effects in function components...',
    date: new Date().toISOString(), // today's date
  },
  {
    id: 2,
    title: 'Tips for TypeScript in React',
    author: 'Deborah',
    content: 'Using TypeScript helps catch bugs early and improves code quality...',
    date: '2025-05-17T10:00:00Z',
  },
];


// eslint-disable-next-line react-refresh/only-export-components
const PostList: React.FC = () => {
  return (
    <div className="post-list">
      {posts.map(post => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export default withLogger(PostList);
