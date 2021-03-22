import React, { Component, lazy, Suspense } from 'react';
import { Route } from 'react-router';
import LoaderSpinner from './components/Loader/Loader';


import ApiService from './Service/ApiService';
import './App.css';

const apiService = new ApiService();
const HomePage = lazy(() => import('./Page/HomePage'));
const Movies = lazy(() => import('./Page/Movies'));
const MovieDetailsPage = lazy(() => import('./Page/MovieDetailsPage'));

class MovieFind extends Component {
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
        <Suspense fallback={<LoaderSpinner />}>
          <Route exact path="/" render={props => 
            <HomePage 
              {...props} 
              movies={this.state.movies}
              onChangePath={this.onChangePath}
            />}
          />
          <Route exact path="/movies" render={props =>
            <Movies 
              {...props}
              onChangePath={this.onChangePath} 
            />} 
          />
          <Route path="/movies/:movieId" render={props =>
            <MovieDetailsPage 
              {...props} 
              prevLocation={this.state.location}
            />}
          />
        </Suspense>
      </>
    );
  };
};

export default MovieFind;