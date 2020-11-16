import React from 'react';
// import { movieData } from "../movieData.js";
import { API_URL, API_KEY } from '../utils/api';
import MovieItem from './MovieItem';

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      movies: [],
      moviesWillWatch: []
    }
  }

  componentDidMount() {
    fetch(`${API_URL}/discover/movie?api_key=${API_KEY}`)
    .then((response) => {
      return response.json()
    })
    .then((data) => {
      this.setState({
        movies: data.results
      })
    })
  }
  

  removeMovie = movie => {
    const updateMovies = this.state.movies.filter(item => {
      return item.id !== movie.id;
    })
    this.setState({
      movies: updateMovies
    })
  }

  addToWillWatch = movie => {
    const updateMoviesWillWatch = [...this.state.moviesWillWatch, movie];
    this.setState({
      moviesWillWatch: updateMoviesWillWatch
    })
  }

  removeFromWillWatch = movie => {
    const updateMoviesWillWatch = this.state.moviesWillWatch.filter(item => {
      return item.id !== movie.id;
    })

    this.setState({
      moviesWillWatch: updateMoviesWillWatch
    })
  }

  render() {
    return (  
      <div className="container">
        <div className="row">
          <div className="col-9">
            <div className="row">
              {this.state.movies.map(movie => {
                return (
                  <div className="col-6 mb-4">
                    <MovieItem
                      key={movie.id}
                      movie={movie}
                      removeMovie={this.removeMovie}
                      addToWillWatch={this.addToWillWatch}
                      removeFromWillWatch={this.removeFromWillWatch}
                    />
                  </div>
                  );
                })}
            </div>
          </div>
          <div className="col-3">Will Watch Movie: {this.state.moviesWillWatch.length} movies</div>
        </div>
      </div>
    )
  }

}

export default App;
