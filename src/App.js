
import React, { useState, useEffect } from 'react';
import './App.css';
import ListCards from './components/ListCards';
import TelaInsereFilme from './components/TelaInsereFilme';
import Axios from 'axios';
export default props => {
  const [movieList, setMovieList] = useState([]);
  const getMovieList = async () => {
    console.log('chamou')
    Axios.get('http://localhost:3003/api/get').then((response) => {
      setMovieList(response.data.rows);
    })
  };
  useEffect(() => {
    getMovieList();
  }, [])
  return (
    <>
      <TelaInsereFilme movieList={movieList} getMovieList={getMovieList}></TelaInsereFilme>
      <ListCards movieList={movieList} getMovieList={getMovieList}></ListCards>
    </>
  )
}