import React from 'react';
import { IMG_URL } from '../utils/constant';

const MovieCards = ({ poster_path }) => {
  return (
    <div className="flex-shrink-0"> {/* Prevents the card from shrinking */}
      <img className='w-[10rem] h-auto' src={IMG_URL + poster_path} alt="" />
    </div>
  );
};

export default MovieCards;
