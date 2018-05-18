import React, { Component } from 'react';
import axios from 'axios';

import config from '../../config';

class Search extends Component {
  constructor(props) {
    super();
    this.state = {
      queryArtist : 'pink'
    }
    this.getArtist = this.getArtist.bind(this);
  }

  getArtist = () => {
    axios.get(`https://rest.bandsintown.com/artists/${this.state.queryArtist}/events?app_id=${config.apiKey}`)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  render() {
    this.getArtist();
    return (
      <div>
        <form>
          <input type="text" />
          <br />
          <input type="submit" value="Submit" />
        </form>
      </div>
    )
  }
}

export default Search;