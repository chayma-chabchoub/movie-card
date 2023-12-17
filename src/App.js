import React, { useState } from 'react'
import MovieList from './MovieList'
import MovieCard from './MovieCard'
import 'bootstrap/dist/css/bootstrap.min.css';
import Search from './Search';
import AddMovie from './AddMovie';



// the list of movie
function App  ()  {
  const [movies,setMovies]=useState ([
    {
      title:'Doctor strange',
      year:'2016',
      genre :'Action/fantasy' ,
      description :' Doctor Strange suit lhistoire du Docteur Stephen Strange, un monde caché de mysticisme et de dimensions alternatives.',
      time:'2h',
      rating:4,
      posterUrl:'https://upload.wikimedia.org/wikipedia/en/1/17/Doctor_Strange_in_the_Multiverse_of_Madness_poster.jpg',
      
    },
    {
      title:'Venom',
      year:'2018',
      genre :'Action/SFy' ,
      description :'Après avoir fusionné avec un symbiote extraterrestre qui lui confère dincroyables super-pouvoirs. ',
      time:'1h52m',
      rating:4,
      posterUrl:'https://upload.wikimedia.org/wikipedia/en/1/10/Venom_%282018_film%29_poster.png',
      },
    {
      title:'Spider-man: No way home',
      year:'2021',
      time:'2h28m',
      genre :'Action/SF' ,
      description :'Pour la première fois dans son histoire cinématographique, Spider-Man. ',
      rating:5,
      posterUrl:'https://upload.wikimedia.org/wikipedia/en/thumb/7/70/Spider-Man_No_Way_Home_%E2%80%93_The_More_Fun_Stuff_Version_poster.jpeg/210px-Spider-Man_No_Way_Home_%E2%80%93_The_More_Fun_Stuff_Version_poster.jpeg',
      },
      {
      title:'Iron-man ',
      year:'2008',
      time:'2h',
      genre :'Action/fantasy' ,
      description :'Tony Stark, inventeur de génie, vendeur darmes et playboy milliardaire.',
      rating:4,
      posterUrl:'https://upload.wikimedia.org/wikipedia/en/0/02/Iron_Man_%282008_film%29_poster.jpg', 
      },
    // {
    //   title:'joker',
    //   year:'2019',
    //   time:'1h40m',
    //   genre :'Action/fantasy' ,
    //   description :'En 1981 à Gotham City, un clown atteint de troubles mentaux et en mal de reconnaissance .',
    //   rating:4,
    //   posterUrl:'https://upload.wikimedia.org/wikipedia/en/thumb/e/e1/Joker_%282019_film%29_poster.jpg/220px-Joker_%282019_film%29_poster.jpg' ,
    //   },
    
    
    
  ])
  const addMovie=(movie)=> {
    setMovies(movies.concat(movie))
  }
  return (
    <div className='App'>
      <Search />
      <MovieList AddMovie={AddMovie} movies={movies}/>
      <AddMovie />  
    </div>
  )
}


export default App
