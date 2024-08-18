import { useDispatch} from "react-redux";
import { API_OPTIONS } from "../utils/constant";
import { addTrailer } from "../components/redux/movieSlice";
import { useEffect } from "react";


const useMovieTrailer = (movieId) => {

    const dispatch = useDispatch();

    const getMovieVideo = async () => {
        const data = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`, API_OPTIONS);
        const json = await data.json();
        console.log(json.results)

        // Filtering out the trailer
        const filteredVideo = json.results.filter((video) => video.type === "Trailer");
        const trailer = filteredVideo[0];
        console.log(trailer);

        //dispatch an action to add the trailor in the redux 
        dispatch(addTrailer(trailer));



    }

    useEffect(() => {
        getMovieVideo();
    }, []);
}

export default useMovieTrailer
