import React, { Component } from 'react';
import './search.css';

class Search extends Component {
  render() {
    return (
    <div className="Search-bar">
        <h1>Search: </h1>
        <form>
          <input type="text"
          name="search">
          </input>
          <button
          type="submit">
          Search  
          </button>   
        </form>
    </div>   
    );
  }
}

export default Search;