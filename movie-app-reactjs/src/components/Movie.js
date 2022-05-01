import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Movie ({movie}) {
  return (
  <div>
    <h2><Link to={`/movie/${movie.id}`}>Title: {movie.title}</Link></h2>
    <img src={movie.medium_cover_image} alt={movie.title} />
    <p>Summary: {movie.summary}</p>
    <ul>Genres: {movie.genres.map( (g, i) => <li key={i}>{g}</li>)}</ul>
  </div>
  );
}

Movie.propTypes = {
  // id: PropTypes.number.isRequired,
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired,
    medium_cover_image: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
  })
}

export default Movie;