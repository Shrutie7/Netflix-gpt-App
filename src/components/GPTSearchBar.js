import React, { useRef, useState } from "react";
import lang from "../utils/languageConstants";
import { useDispatch, useSelector } from "react-redux";
import openai from "../utils/openai";
import { API_OPTIONS } from "../utils/constant";
import { addGptMovieResults } from "../utils/gptSlice";
import Spinner from "react-bootstrap/Spinner";
import { Modal } from "react-bootstrap";
const GPTSearchBar = () => {
  const searchText = useRef(null);
  const [searchspin,setsearchspin]=useState(true)

  const dispatch = useDispatch();

  // This function will search movie in TMDB api
  const searchMovieTMDB = async (movie) => {
    console.log(movie);
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      API_OPTIONS
    );

    const json = await data.json();

    return json?.results;
  };

  const handleGptSearchClick = async () => {
    setsearchspin(true);
    console.log(searchText.current.value);
    // use this searchtext to make api call
    // Make an API call to GPT API to get Movie Results
    const gptQuery =
      "Act as a Movie Recommendation system and suggest some movies for the query : " +
      searchText.current.value +
      ". only give me names of 5 movies, comma separated like the example result given ahead. Example Result: Gadar, Sholay, Don, Golmaal, Koi Mil Gaya";

    const gptResults = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: gptQuery }],
    });

    console.log(gptResults.choices?.[0]?.message?.content);

    // if gptResults.choices is not present/if it is empty then

    if (!gptResults.choices) {
      // Write error handling
    }

    // Shaun of the Dead, Zombieland, Cabin in the woods,Tucker and Dale vs Evil,What we do in the Shadows
    // from these string extract movies into array using split;

    const gptMovies = gptResults.choices?.[0]?.message?.content.split(",");
    // ["Shaun of the Dead", "Zombieland", "Cabin in the woods","Tucker and Dale vs Evil","What we do in the Shadows"]
    console.log(gptMovies);

    // For each movie search that movie in tmdb API

    const promiseArray = gptMovies.map((movie) => searchMovieTMDB(movie));
    // for 5 movies it will call tmdb api in searchMovieTMDB 5 times but it will not give u results bcoz searchMovieTMDB is async function it will take some time for results to come up as it is async function it will not return results immediately..
    // here map function will call 5 apis immediately will not wait for one api call to finish but the searchMovieTMDB will not have completed the api call it will take some time to return the results
    // hence we will get 5 promises we will get promise from the searchMovieTMDB not the result
    // we get array of promises - [Promise,Promise,Promise,Promise,Promise] - for each movie new promsie and promise will take some time to resolve it will take time for json.results to come

    // to get actual data from promiseArray for that we use promise.all function. promsie.All take array of promises and await for promise.All to resolve
    const tmdbResults = await Promise.all(promiseArray);
    // once all 5 promises is resolved then only promise.All will finish and get me the results

    console.log(tmdbResults);
    dispatch(addGptMovieResults({movieNames:gptMovies ,movieResults:tmdbResults}));

    // if(tmdbResults.length>0)
    // {
    //   setsearchspin(false);
    // }
    
    // This api call will throw an error ... It looks like you're running in a browser-like environment bcoz we are making api call from client side not server side as a result your api key may get leaked . best practice is to make api call from backend/node. but if you still wan tto make api call like this then you need to set dangerouslyAllowBrowser flag to true in openai file in utils/openAi.js file
    //by default openai doesnt allow u to make api call from browser , if we set dangerouslyAllowBrowser flag to true then openai allow us to make call from browser also
  };

  const language = useSelector((store) => store.config.language);
  return (
    <div className="pt-[35%] md:p-0 md:pt-[10%] flex justify-center">
      <form
        className="w-full md:w-1/2 bg-black grid grid-cols-12 rounded-lg"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          type="text"
          className="p-4 m-4 col-span-9 rounded-md outline-none"
          placeholder={lang?.[language]?.gptSearchPlaceholder}
          ref={searchText}
        />
        <button
          className="m-4 py-2 px-4 bg-red-700 text-white rounded-lg col-span-3"
          onClick={() => handleGptSearchClick()}
        >
          {lang?.[language]?.search}
          

       
        </button>

        {/* onclick of search button it will submit the form and refresh the page hence use e.prevent default() on submit of form to prevent refresh of page*/}
      </form>
    </div>
  );
};

export default GPTSearchBar;
