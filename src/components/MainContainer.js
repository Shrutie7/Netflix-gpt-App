import React from "react";
import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";

// this component will need movie title,movie trailer,movie description this data will come from redux store

const MainContainer = () => {
  // subscribe to movies store
  const movies = useSelector((store) => store.movies?.nowPlayingmovies);
  //if movies list is null then return simply so we dont get error known as EARLY RETURN 
  if(!movies) return ; 
// lets say that mainContainer will have the first movie in the movies List
  const mainMovie = movies[7];
//   will throw error because initially store has no movies i.e movies list is null



//   pass as props the extracted data original_title,overview in VideoTitle component and movie id to VideoBackground Component
const{original_title,overview,id,poster_path,backdrop_path} = mainMovie
 

  return (
    <div className="pt-[30%] bg-black md:pt-0 ">
      <VideoTitle title={original_title} overview ={overview} poster_path={poster_path} backdrop_path={backdrop_path}/>
      <VideoBackground movieId={id} />









      {/* we get 20 movies from nowplaying movies that is present in movies store but we just need 1 movie data, 1movie title,1 movie desc ,1movie trailer */}
      {/* -video title
          -video background
    ...video title should overlap on video background
 */}
    </div>
  );
};

export default MainContainer;
