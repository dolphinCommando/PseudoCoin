import React from 'react';
import './SearchBar.css';

const SearchBar = props => {
  return (
    <div className="searchBar">
      <label for="search">Search for a coin</label>
      <input aria-invalid="false" aria-required="false" className="searchBar" id="search" placeholder="Search" type="text" aria-label="Search" value=""></input>
      <button className="icon"><i className="glyphicon glyphicon-search"></i></button>
    </div>
  )
}

export default SearchBar;