import { useEffect, useState } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  useEffect( () => { 
    fetch(
      `https://yts.mx/api/v2/list_movies.json?minimum_rating=8.5&order_by=desc`
    ).then( (response) => response.json() 
    ).then( (json) => { 
      setMovies(json.data.movies);
      setLoading(false);
    } ); 
  }, [] );
  return (
    <div>
      { loading ? <h1>Loading...</h1> : 
        <ul>
          { movies.map( (movie, index) => <li key={index}>{movie.title}</li>) }
        </ul> 
      }
    </div>
  );
}

export default App;
