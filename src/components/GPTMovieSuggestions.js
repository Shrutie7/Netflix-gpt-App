import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const GPTMovieSuggestions = () => {
  // subscribing to gptslice store

  const { movieNames, movieResults } = useSelector((store) => store.gpt);
  console.log(movieNames, movieResults);

  // initially movieNames will be null until user has clicked on search button hence error handling

  if (!movieNames) return null;

  return (
    <div className="bg-black text-white bg-opacity-90 mt-4">
      <div>
        {movieNames?.map((movieName,index) => (
          <MovieList key={movieName} title={movieName} movies={movieResults[index]} rowId={index}/>
        ))}

        <div></div>
      </div>
    </div>
  );
};

export default GPTMovieSuggestions;
