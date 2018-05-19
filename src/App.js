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
      queryArtist: '',
      formattedArtistName: ''
    }

    this.getArtist = this.getArtist.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  getArtist = () => {
    axios.get(`https://rest.bandsintown.com/artists/${this.state.queryArtist}/events?app_id=${config.apiKey}`)
      .then(function (response) {

        if (response.data.length === 0) {
          alert('Sorry, it looks like your artist is not touring at this time.');
        }

        //TODO:
          //Commit if alert
          //Fn for jsx formatting of return 
          //Style Search and Return
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
        alert('The name you entered is incorrect, please revise.')
      });
  }

  handleChange = (event) => {
    this.setState({
      queryArtist: event.target.value,
      formattedArtistName: (event.target.value).replace(/ /g, '%20')
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.getArtist();
  }
  
  render() {
    console.log('State: ', this.state);
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