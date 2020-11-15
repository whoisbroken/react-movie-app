import React from 'react';
import { moviesData } from '../moviesData';
import MovieItem from './MovieItem';

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      movies: moviesData,
      moviesWillWatch: []
    }
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
    const updateMoviesWillWatch = [...this.state.moviesWillWatch];
    updateMoviesWillWatch.push(movie)
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
                    />
                  </div>
                  );
                })}
            </div>
          </div>
          <div className="col-3">Will Watch Movie: {this.state.moviesWillWatch.length}</div>
        </div>
      </div>
    )
  }

}

export default App;
