import React from 'react';

const MovieTabs = (props) => {
  const { sort_by, updateSortBy } = props;
  const handleClick = value => {
    return () => {
      updateSortBy(value)
    }
  }

  const getClassActive = value => {
    return `nav-link ${sort_by === value ? "active" : ""}`
  }

  return (
    <ul className="tabs nav nav-pills">
      <li className="nav-item">
        <div
          className={getClassActive("popularity.desc")}
          onClick={handleClick("popularity.desc")}
        >
          Popularity desc
        </div>
      </li>
      <li className="nav-item">
        <div
          className={getClassActive("revenue.desc")}
          onClick={handleClick("revenue.desc")}
        >
          Revenue desc
        </div>
      </li>
      <li className="nav-item">
        <div
          className={getClassActive("vote_average.desc")}
          onClick={handleClick("vote_average.desc")}
        >
          Vote Average desc
        </div>
      </li>
    </ul>
  )
}

export default MovieTabs