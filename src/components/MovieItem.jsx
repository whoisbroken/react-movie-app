import React from 'react';


class MovieItem extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      willWatch: false
    }
  }

  render() {
    const { movie, removeMovie, addToWillWatch, removeFromWillWatch } = this.props;
    return (
      <div className="card">
        <img
          className="card-img-top"
          src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path ||
            movie.poster_path}`}
          alt=""
        />
        <div className="card-body">
          <h6 className="card-title">{movie.title}</h6>
          <div className="d-flex justify-content-between align-items-center">
            <p className="mb-0">Rating: {movie.vote_average}</p>
            {this.state.willWatch ?
              <button type="button"
                className="btn btn-danger"
                onClick={() => {
                  this.setState({
                    willWatch: false
                  })
                  removeFromWillWatch(movie)
                }}>
                Remove Will Watch
              </button> :
              <button type="button"
                className="btn btn-success"
                onClick={() => {
                  this.setState({
                    willWatch: true
                  })

                  addToWillWatch(movie)
                }}>
                Add Will Watch
              </button>
            }

          </div>
        </div>
        <button className="btn btn-info"onClick={removeMovie.bind(this, movie)}>Delete movie</button>
      </div>
    )
  }
}


export default MovieItem;