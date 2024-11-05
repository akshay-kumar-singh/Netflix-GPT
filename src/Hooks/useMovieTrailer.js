import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTrailerVideo } from "../Components/movieSlice";
import { API_OPTIONS } from "../utils/constant";

const useMovieTrailer = (movieID) => {
    const dispatch = useDispatch();
    const trailerVideo = useSelector(store => store.movies.trailerVideo);

    useEffect(() => {
        const getMoviesVideo = async (id) => {
            try {
                const response = await fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, API_OPTIONS);
                const json = await response.json();
                const filteredData = json.results.filter(video => video.type === "Trailer");
                const trailer = filteredData.length ? filteredData[0] : json.results[0];
                dispatch(addTrailerVideo(trailer));
            } catch (error) {
                console.error("Failed to fetch movie trailer:", error);
            }
        };

        if (!trailerVideo && movieID) {
            getMoviesVideo(movieID);
        }
    }, [trailerVideo, movieID, dispatch]);

    return trailerVideo;
};

export default useMovieTrailer;
