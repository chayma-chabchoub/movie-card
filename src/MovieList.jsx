import React, { useState } from 'react';
import MovieCard from './MovieCard';
import 'bootstrap/dist/css/bootstrap.min.css';
import AddMovie from './AddMovie';
// import of movielist
const MovieList = ({ movies,AddMovie }) => {
  const [show, setShow] = useState(false);
  
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className='grid-container'>
      <button onClick={handleShow} >Add</button>
      <AddMovie AddMovie= {AddMovie} show={show} handleClose={handleClose} />
      {movies.map((el, index) => (
        <MovieCard key={index} movie={el} />
      ))}
    </div>
  );
};

export default MovieList;
