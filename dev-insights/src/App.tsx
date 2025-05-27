import React from 'react';
import Header from './components/Header.tsx';
import PostList from './components/PostList.tsx';

const App: React.FC = () => {
  return (
    <div className="app-container">
      <Header />
      <PostList />
    </div>
  );
};

export default App;
