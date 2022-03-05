import React from 'react';
import Search from './components/Search';

import blogData from "./data/blogData"

function App() {
  return (
    <div className="search">
      <Search details={blogData}/>

    </div>
  );
}

export default App;
