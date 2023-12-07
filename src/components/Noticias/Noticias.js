import { useState, useEffect } from "react";
import axios from "axios";
import './Noticias.css';


const Noticias  = () => {
  const [films, setFilms] = useState([]);
  const [series, setSeries] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);

  const fetchDetails = async (id, isMovie) => {
    const type = isMovie ? "movie" : "tv";
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/${type}/${id}?api_key=04b13acbfc1d95f3118398d9fe408110&language=en-US`
      );
      const videoResponse = await axios.get(
        `https://api.themoviedb.org/3/${type}/${id}/videos?api_key=04b13acbfc1d95f3118398d9fe408110&language=en-US`
      );

      const videoKey = videoResponse.data.results[0]?.key;
      setSelectedItem({ ...response.data, video: videoKey });
    } catch (error) {
      console.error("Error fetching details:", error);
    }
  };

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get(
          "https://api.themoviedb.org/3/movie/now_playing?api_key=04b13acbfc1d95f3118398d9fe408110&language=en-US&page=1"
        );
        setFilms(response.data.results.slice(0, 5)); // Ajusta el número de películas mostradas aquí
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    };

    const fetchSeries = async () => {
      try {
        const response = await axios.get(
          "https://api.themoviedb.org/3/tv/on_the_air?api_key=04b13acbfc1d95f3118398d9fe408110&language=en-US&page=1"
        );
        setSeries(response.data.results.slice(0, 5)); // Ajusta el número de series mostradas aquí
      } catch (error) {
        console.error("Error fetching series:", error);
      }
    };

    fetchMovies();
    fetchSeries();
  }, []);

  return (
    <div className="container">
      {selectedItem && (
        <div className="selected-item">
          <h2>{selectedItem.title || selectedItem.name}</h2>
          <p>{selectedItem.overview}</p>
          {selectedItem.video && (
            <div className="video-container">
              <iframe
                width="660"
                height="355"
                src={`https://www.youtube.com/embed/${selectedItem.video}?autoplay=0`}
                title="video"
                frameBorder="0"
                allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          )}
          <button onClick={() => setSelectedItem(null)}>Cerrar</button>
        </div>
      )}
      <div className="movies">
        <h2>Películas</h2>
        <ul>
          {films.map((movie, index) => (
            <li key={index} onClick={() => fetchDetails(movie.id, true)}>
              <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
              <h3>{movie.title}</h3>
            </li>
          ))}
        </ul>
      </div>
      <div className="series">
        <h2>Series</h2>
        <ul>
          {series.map((serie, index) => (
            <li key={index} onClick={() => fetchDetails(serie.id, false)}>
              <img src={`https://image.tmdb.org/t/p/w500${serie.poster_path}`} alt={serie.name} />
              <h3>{serie.name}</h3>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Noticias;

