import React, { Component, lazy, Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';
import routes from './routes';
import Shows from './Page/Shows';
import NotFound from './Page/NotFound';
import Header from './components/Header/Header';
import Layout from './components/Layout/Layout';
import MoviesPage from './Page/MoviesPage';
import MovieDetailsCard from './Page/MovieDetailsCard';
import Footer from './components/Footer/Footer';
import './App.css';
import LoaderSpinner from "./components/Loader/Loader";
const HomePage = lazy(() => import('./Page/Shows'));
// const MoviesPage = lazy(() => import('./Page/MoviesPage'));



class App extends Component {
    state = {
      name: "",
      location: ""
    };
   
    onChangePath = (path) => {
      this.setState({location: path});
    };
  
    render() {
      
      return (
        <>
        <Layout>
           
            <Header />
            <Suspense fallback={"Waiting..."}>
            <Switch>
                <Route exact path="/" render={props => 
                    <HomePage 
                    {...props} 
                    
                    />}
                />
                {/* <Route exact path={routes.movies} render={props => 
                    <MoviesPage 
                    {...props} 
                    onChangePath={this.onChangePath}
                    />}
                /> */}
                <Route path={routes.home} exact component={Shows} />
        <Route path={routes.movies} exact component={MoviesPage} />
        <Route path={routes.MovieDetailsPage} component={MovieDetailsCard} />
        <Route component={NotFound} />
                <Route exact path={routes.movies} component={MoviesPage} />
                <Route exact path={routes.MovieDetailsPage} component={MovieDetailsCard} />
                <Route component={NotFound} />
                {/* <Redirect to="/" /> */}
            </Switch>
            </Suspense>
            <Footer />
        </Layout>
      </>
      );
    }
  }
  
  export default App;