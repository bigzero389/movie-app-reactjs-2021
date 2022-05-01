import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

function Detail() {
  const {id} = useParams(); // javascript 값을 jsx 에서 사용하려면 중괄호로 감싸주어야 한다.
  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState(null);

  const getMovie = async () => {
    const json = await (await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)).json();
    console.log(json);
    setMovie(json.data.movie);
    setLoading(false);
  };

  useEffect( () => {
    getMovie();
  }, []);

  return (
    <div>
      { loading ?  <h2>Loading...</h2> :
      <div> 
        <h2>Title: {movie.title}</h2>
        <img src={movie.medium_cover_image} alt={movie.title} />
        <p>Summary: {movie.summary}</p>
        <ul>Genres: {movie.genres.map( (g, i) => <li key={i}>{g}</li>)}</ul>
      </div>
      }
    </div>
  );
}

export default Detail;