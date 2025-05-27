import React from 'react';
import Post from './Post';

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
    title: 'Getting Started with React: Components & Props',
    author: 'Sarah Amayo',
    content: 'React components are the building blocks of any React application. Learn how to create functional components and pass data using props for reusable UI elements.',
    date: new Date().toISOString(),
  },
  {
    id: 2,
    title: 'State Management Simplified: useState & useEffect',
    author: 'Deng Michael ',
    content: 'Managing state is crucial in React. Discover how useState lets you store values and how useEffect helps you handle side effects like data fetching and subscriptions.',
    date: '2025-05-17',
  },
  {
    id: 3,
    title: 'Styling in React: CSS Modules & Styled Components',
    author: 'Deborah Daniels',
    content: 'Explore different ways to style your React apps, including CSS Modules for scoped styles and Styled Components for dynamic, component-level styling.',
    date: '2025-05-10',
  },
];

const PostList: React.FC = () => {
  return (
    <div className="post-list">
      <h1>Latest Articles</h1>
      {posts.map(post => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
};

export default PostList;
