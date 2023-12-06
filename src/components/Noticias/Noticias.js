import React, { useState, useEffect } from 'react';
import './Noticias.css';

const Noticias = () => {
  const [articles, setArticles] = useState([]);
  const [page, setPage] = useState(1);
  const [temaActual, setTemaActual] = useState('Tecnología');
  const cantidadNoticias = 12;

  useEffect(() => {
    fetchNoticias(temaActual);
  }, [temaActual]);

  const fetchNoticias = (categoria) => {
    fetch(
      `https://newsapi.org/v2/everything?q=${categoria}&languaje=es&
    )
      .then((response) => response.json())
      .then((data) => {
        if (page === 1) {
          setArticles(data.articles.slice(0, cantidadNoticias));
        } else {
          setArticles([...articles, ...data.articles.slice((page - 1) * cantidadNoticias, page * cantidadNoticias)]);
        }
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  };


  return (
    <div className="container-noticias">
      {articles.map((article, index) => (
        <div className="item" key={index} onClick={() => window.open(article.url, '_blank')}>
          <h2>{article.title}</h2>
          <img src={article.urlToImage} alt={article.title} />
          <div className="info_item">
            <span className="fecha">{new Date(article.publishedAt).toLocaleDateString()}</span>
            <span className="fuente">{article.source.name}</span>
          </div>
        </div>
      ))}
    
    </div>
  );
};

export default Noticias;
