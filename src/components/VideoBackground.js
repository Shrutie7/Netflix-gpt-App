import React from "react";
import useMovieTrailer from "../hooks/useMovieTrailer";
import { useSelector } from "react-redux";

const VideoBackground = ({ movieId }) => {
  const trailerVideo = useSelector((store) => store.movies?.trailerVideo);

  useMovieTrailer(movieId);

  // trailer contains youtube video key go to youtube click on share click on embed copy iframe code we are embeding youtube vide on our page
  // jsx follows convention of camel case for all attributes Always
  // put trailer key either in useState or use redux store. keep information of trailer in redux store in moviesSlice and just take key from there using selector.no need of state variable then

  return (
    <div className="w-full">
      <iframe
       
       className="w-full aspect-video"
        src={"https://www.youtube.com/embed/" + trailerVideo?.key + "?&autoplay=1&mute=1&loop=1&rel=0&amp&controls=0"}
        
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};

export default VideoBackground;
