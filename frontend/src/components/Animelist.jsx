import { useState, useEffect } from "react";
import axios from "axios";

function AnimeList() {
  const [animes, setAnimes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/animes/")
      .then((response) => {
        setAnimes(response.data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []); // El array vacío significa que este useEffect se ejecutará una vez, similar a componentDidMount

  if (loading) return <div>Cargando...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      <h1>Lista de Animes</h1>
      <ul>
        {animes.map((anime) => (
          <li key={anime.id}>{anime.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default AnimeList;
