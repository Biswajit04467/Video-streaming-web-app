import { useSelector } from 'react-redux';
import useMovieTrailer from '../hooks/useMovieTrailer';

const VideoBackground = ({ movieId }) => {

    //extracting trailer detailds from redux 
    const Trailer = useSelector((state) => state.movies?.trailer);

    //custom hook for fetching the trailer
    useMovieTrailer(movieId);

    return (
        <div>
            <iframe
                className=' w-screen aspect-video'
                src={`https://www.youtube.com/embed/${Trailer?.key}?&autoplay=1&mute=1`}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen
                
            >

            </iframe>
        </div>
    )
}

export default VideoBackground


