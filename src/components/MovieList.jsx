import React from 'react';
import MovieCards from './MovieCards';

const MovieList = ({ title, movies }) => {

    return (
        <div className=' px-6 '>
            <h1 className=' font-bold text-2xl my-4 text-white'>{title}</h1>
            <div className='flex overflow-x-scroll no-scrollbar space-x-4'> {/* space-x-4 adds spacing between cards */}
                {
                    movies.map((movie) => (
                        <MovieCards key={movie.id} poster_path={movie.poster_path} />
                    ))
                }
            </div>
        </div>
    );
};

export default MovieList;
