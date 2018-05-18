import React, { Component } from 'react';
import axios from 'axios';

import Header from './components/Header/Header';
import Search from './components/Search/Search';
import config from './config';

import './App.css';

//get Artist

class App extends Component {
  constructor(props) {
    super();
    this.state = {
      queryArtist: ''
    }

    this.getArtist = this.getArtist.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
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

  handleChange = (event) => {
    this.setState({ queryArtist : event.target.value})
    console.log('State: ', this.state)
  }

  handleSubmit = (event) => {
    event.preventDefault();

  }
  
  render() {
    console.log(this.getArtist())
    return (
      <div className="App">
      <Header />
      <Search 
      getArtist={this.getArtist}
      handleChange={this.handleChange}
      handleSubmit={this.handleSubmit}
      />
      </div>
    );
  }
}

export default App;

//TODO:
  // fn for cleaning up query for bands with long names
  // formatTourDates = () => {}