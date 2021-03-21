import React, { Component } from 'react';
import { Route } from 'react-router';
import ApiService from './Service/ApiService';
import './App.css';

const apiService = new ApiService();

class MovieFinder extends Component {
  state = {
    movies: [],
    location: '/'
  };

  componentDidMount() {
    apiService.fetchPopularFilms().then(movies => {
      this.setState({movies})
    });
  };

  onChangePath = (path) => {
    this.setState({location: path});
  };

  render() {
    return (
      <>
        
          <Route exact path="/" 
            
          />
          <Route exact path="/movies" 

          />
          <Route path="/movies/:movieId" 

          />
  
      </>
    );
  };
};

export default MovieFinder;