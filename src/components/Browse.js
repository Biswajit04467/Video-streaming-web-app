
import useNowPlayingMovies from '../hooks/useNowPlayingMovies';
import Header from './Header';
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';

const Browse = () => {

    //custom hook for fetching nowPlaying Movies
    useNowPlayingMovies();
    return (
        <div>
            <Header />
            <div>
                <MainContainer />
                <SecondaryContainer />
            </div>

        </div>
    )
}

export default Browse
