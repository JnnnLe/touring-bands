import React from 'react';

import './Search.css';

const Search = (props) => {
  return (
    <div className="search-bar">
      <form onSubmit={props.handleSubmit}>
        <input required type="text" placeholder="Search your favorite artist here.."
        onChange={props.handleChange} />
      </form>
    </div>
  )
}

export default Search;