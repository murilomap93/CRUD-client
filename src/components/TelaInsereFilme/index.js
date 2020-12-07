
import React, { useState, useEffect } from 'react';
import './index.css';
import Axios from 'axios';

export default props => {
  const [movieName, setMovieName] = useState('');
  const [movieReview, setMovieReview] = useState('');

  const submitReview = () => {
    Axios.post('http://localhost:3003/api/insert', { movieName: movieName, movieReview: movieReview })
      .then((response) => {
        // props.setMovieList([...props.movieList, { fil_codigo: response.data.rows[0].fil_codigo, fil_nome: movieName, fil_descricao: movieReview }]);
        props.getMovieList();
      });

  };
//comentariooo

  return (
    <>
      <div className="TelaInsereFilme">
        <h1>CRUD</h1>
        <div className='form--app'>
          <label>Filme:</label>
          <input type='text' name='movieName' value={movieName} onChange={e => setMovieName(e.target.value)}></input>

          <label>Descrição:</label>
          <input type='text' name='movieReview' value={movieReview} onChange={e => setMovieReview(e.target.value)}></input>
          <button onClick={submitReview}>Submit</button>
        </div>
      </div>
    </>
  )
}