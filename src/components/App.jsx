import React from 'react';
import MovieItem from './MovieItem';
import MovieTabs from './MovieTabs';
// import { movieData } from "../movieData.js";
import { API_URL, API_KEY } from '../utils/api';

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      movies: [],
      moviesWillWatch: [],
      sort_by: "popularity.desc"
    }

  }

  componentDidMount() {
    this.getMovie()
  }
  
  componentDidUpdate(prevProps, prevState) {
    if(prevState.sort_by !== this.state.sort_by) {
      this.getMovie()
    }
    
    console.log()
  }

  getMovie() {
    fetch(`${API_URL}/discover/movie?api_key=${API_KEY}&sort_by=${this.state.sort_by}`)
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

  updateSortBy = value => {
    this.setState({
      sort_by: value
    })
  }

  render() {
    return (  
      <div className="container">
        <div className="row mt-4">
          <div className="col-9">
            <div className="row">
              <div className="col-12 mb-4">
                <MovieTabs
                  sort_by={this.state.sort_by} 
                  updateSortBy={this.updateSortBy}
                />
              </div>
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
          </div>
          <div className="col-3">Will Watch Movie: {this.state.moviesWillWatch.length} movies</div>
        </div>
      </div>
    )
  }

}

export default App;
