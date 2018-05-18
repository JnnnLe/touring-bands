import React, { Component } from 'react';
import axios from 'axios';

import config from '../../config';

class Search extends Component {
  constructor(props) {
    super();
    this.state = {
      queryArtist : ''
    }
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" value={this.state.queryArtist} onChange={this.handleChange} />
          <br />
          <input type="submit" value="Submit" />
        </form>
      </div>
    )
  }
}

export default Search;