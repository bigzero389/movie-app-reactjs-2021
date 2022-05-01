import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styles from "./Movie.module.css";

function Movie ({movie}) {
  return (
  <div className={styles.movie}>
    <img className={styles.movie__img} src={movie.medium_cover_image} alt={movie.title} />
    <div>
      <h2 className={styles.movie__title}><Link to={`/movie/${movie.id}`}>{movie.title}</Link></h2>
      <h3 className={styles.movie__year}>{movie.year}</h3>
      <p>
        {movie.summary.length > 235 ? 
          `${movie.summary.slice(0, 235)}...` :
          movie.summary}
      </p>
      <ul className={styles.movie__genres}>{movie.genres.map( (g, i) => <li key={i}>{g}</li>)}</ul>
    </div>
  </div>
  );
}

Movie.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired,
    medium_cover_image: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
  })
}

export default Movie;