import React, { useState } from 'react';
import Scroll from './Scroll';
import SearchList from './SearchList';

function Search({ details }) {

  const [searchField, setSearchField] = useState("");
  const [searchShow, setSearchShow] = useState(false);

  const filteredArticles = details.filter(
    blog => {
      return (
        blog
        .article
        .toLowerCase()
        .includes(searchField.toLowerCase()) ||
        blog
        .link
        .toLowerCase()
        .includes(searchField.toLowerCase())
      );
    }
  );

  const handleChange = e => {
    setSearchField(e.target.value);
    if(e.target.value===""){
      setSearchShow(false);
    }
    else {
      setSearchShow(true);
    }
  };

  function searchList() {
  	if (searchShow) {
	  	return (
	  		<Scroll>
	  			<SearchList filteredArticles={filteredArticles} />
	  		</Scroll>
	  	);
	  }
  }

  return (
    <section className="search-component">
			<div className="title">
				<h2 className="f2">Search Articles</h2>
			</div>
			<div className="search-input-div">
				<input 
					className="input-search"
					type = "search" 
					placeholder = "Search Articles" 
					onChange = {handleChange}
				/>
			</div>
			{searchList()}
		</section>
  );
}

export default Search;