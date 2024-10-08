import React from 'react'
import VideoTitle from './VideoTitle'
import VideoBackground from './VideoBackground'
import { useSelector } from 'react-redux'

const MainContainer = () => {

    const Movies = useSelector((store) => store.movies.nowPlayingMovies);
    if (!Movies) return;

    const mainMovie = Movies[0];
    console.log(mainMovie);

    const { original_title, overview, id } = mainMovie;


    return (
        <div>
            <VideoTitle title={original_title} overview={overview} />
            <VideoBackground movieId={id} />
        </div>
    )
}

export default MainContainer
