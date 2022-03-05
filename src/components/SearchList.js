import React from 'react';
import Card from './Card';

function SearchList({ filteredArticles }) {
  const filtered = filteredArticles.map( blog =>  <Card key={blog.id} blog={blog} />); 
  return (
    <div>
      {filtered}
    </div>
  );
}

export default SearchList;