import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constant";
import { addTrailerVideo } from "../utils/movieSlice";
import { useEffect } from "react";

const useMovieTrailer = (movieId) => {
  const dispatch = useDispatch();

  const trailerVideo = useSelector((store)=>store.movies.trailerVideo)
  //fetch trailer video make api call we need movie id to make api call && update store with trailer video data

  const getMovieVideos = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" +
        movieId +
        "/videos?language=en-US",
      API_OPTIONS
    );

    const jsondata = await data?.json();


    // if filterdata is empty i.e it didnt find any trailer type of video then handle that case also take 1st video in jsondata.results
    let filterData = jsondata?.results?.filter(
      (ele) => ele?.type === "Trailer"
    );
    // let trailer =
    //   filterData.length > 0
    //     ? filterData?.filter((ele) => ele.name === "Official Trailer")
    //     : jsondata?.results[0];
    let trailer = filterData?.length > 0 ? filterData?.[0] : jsondata?.results?.[0];
    // console.log(filterData);
    // console.log(trailer);

    // put trailer in redux store
    dispatch(addTrailerVideo(trailer));

    // trailer contains youtube video key go to youtube click on share click on embed copy iframe code we are embeding youtube vide on our page
    // jsx follows convention of camel case for all attributes Always
    // put trailer key either in useState or use redux store. keep information of trailer in redux store in moviesSlice and just take key from there using selector.no need of state variable then
  };

  useEffect(() => {
    !trailerVideo && getMovieVideos();
  }, []);
};

export default useMovieTrailer;
