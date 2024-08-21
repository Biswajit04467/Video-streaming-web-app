import React from 'react';
import MovieList from './MovieList';
import { useSelector } from 'react-redux';

const SecondaryContainer = () => {
  const movies = useSelector((state) => state.movies);

  // Check if movies or nowPlayingMovies is undefined
  if (!movies || !movies.nowPlayingMovies) {
    return <div>Loading...</div>; // Display a loading state or fallback UI
  }

  return (
    <div className=' bg-black -mt-4 '>
      <div className=' relative -top-80 z-20 ml-12'>
      <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
      <MovieList title={"Trending Movies"} movies={movies.nowPlayingMovies} />
      <MovieList title={"Upcoming Movies"} movies={movies.nowPlayingMovies} />
      <MovieList title={"Horro Movies"} movies={movies.nowPlayingMovies} />
      </div>
    </div>
  );
}

export default SecondaryContainer;
