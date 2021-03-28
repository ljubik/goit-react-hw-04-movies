import React, { Component } from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import tvApi from '../Service/themoviedbApi';
import styles from './MovieDetailsCard.module.css';
import Cast from './Cast';
import Review from './Reviews';
import propTypes from 'prop-types';
import noPoster from '../components/MovieGallery/no_poster.png';

class MovieDetailsPage extends Component {
    state = {
        show: null,
        poster_path: noPoster,
        pathname: "/"
    }

    componentDidMount() {
        console.log('movieId: ', this.props.match.params.movieId);
        console.log('id: ', this.props);
        tvApi.getFilmById(this.props.match.params.movieId)
            .then(show => this.setState({ show }))
    }

    handleGoBack = () => {
        console.log("location.state", this.props.location.state)
        console.log("location.from", this.props.location.state.from)
        if (this.props.location.state && this.props.location.state.from) {
            this.props.history.push(this.state.pathname);
        }
        
    }

    render() {
        const imgBasePath = tvApi.imgBasePath;
        // const posterPath = imgBasePath +this.state.show.poster_path;
        // console.log("show.poster_path", imgBasePath + this.state.show.poster_path)
        
        return (
            <>
                <button onClick={this.handleGoBack}> Назад</button>

                {this.state.show && (
                    <div>
                        <div className={styles.wrapPage}>
                            <div className={styles.posterWrap}>
                                <img className={styles.posterImg}
                                    src={imgBasePath + this.state.show.poster_path}
                                    alt={this.state.show.title}>
                                </img>
                            </div>

                            <div className={styles.description}>
                                <h2>
                                    {this.state.show.title}
                                    {this.state.show.release_date &&
                                        ` (${this.state.show.release_date.substring(0, 4)})`}
                                </h2>

                                <p>vote_average: {this.state.show.vote_average}</p>
                                <h3>Genres</h3>
                                <p>{this.state.show.genres && this.state.show.genres.map(genre => genre.name + ' ')}</p>
                            </div>

                        </div>
                        <h3>Additional information</h3>
                        <ul>
                            <li>
                                <Link to={{
                                    pathname: `/movies/${this.props.match.params.movieId}/cast`,
                                    state: { from: this.props.location }
                                }}>Cast</Link>
                            </li>
                            <li>
                                <Link to={{
                                    pathname: `/movies/${this.props.match.params.movieId}/review`,
                                    state: { from: this.props.location }
                                }}>Reviews</Link>
                            </li>
                        </ul>
                        <Switch>
                            <Route
                                path={`/movies/${this.props.match.params.movieId}/cast`}
                                render={props => <Cast {...props}
                                id={this.props.match.params.movieId}
                                />}
                            />
                            <Route
                                path={`/movies/${this.props.match.params.movieId}/review`}
                                render={props => <Review {...props} id={this.props.match.params.movieId} />}
                            />
                        </Switch>
                    </div>

                )
                }
            </>
        )
    }
}


MovieDetailsPage.defaultProps = {
    poster_path: noPoster,
    original_title: 'Film title',
    vote_average: 'Vote average',
    vote_count: 'Vote count',
    popularity: 'Popularity',
    release_date: 'Release date'
};

MovieDetailsPage.propTypes = {
    movies: propTypes.arrayOf(
        propTypes.shape({
            id: propTypes.number.isRequired,
            poster_path: propTypes.string,
            title: propTypes.string.isRequired,
            genre_ids: propTypes.arrayOf(
                propTypes.number.isRequired
            ),
            release_date: propTypes.string.isRequired
        })
    ),
    onChangePath: propTypes.func
};


export default MovieDetailsPage;

