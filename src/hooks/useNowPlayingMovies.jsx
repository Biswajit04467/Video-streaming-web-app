import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../components/redux/movieSlice";
import { API_OPTIONS } from "../utils/constant";
import { useEffect } from "react";

const useNowPlayingMovies = () => {

    const dispatch = useDispatch();
    const getNowPlayingMovie = async () => {
        try {
            const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', API_OPTIONS);
            const JSON = await data.json();
            console.log(JSON.results)
            dispatch(addNowPlayingMovies(JSON.results));
        } catch (error) {
            console.log("Error Fetching data:+", error);
        }
    }
    useEffect(() => {
        getNowPlayingMovie();
    }, [])
}

export default useNowPlayingMovies; 