import React from 'react';

import './Search.css';

const Search = (props) => {
  return (
    <div>
      <form onSubmit={props.handleSubmit}>
        <input type="text" onChange={props.handleChange} />
        <br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  )
}

export default Search;