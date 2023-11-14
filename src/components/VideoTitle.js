import React from "react";
import play from "../icons/play_icon_134504.png";
import moreinfo from "../icons/PngItem_3406810.png";

const VideoTitle = ({ title, overview ,poster_path,backdrop_path}) => {
  return (
    <div className="pt-[15%] aspect-video absolute text-white bg-gradient-to-r from-black px-6 md:px-20">
      <h1 className="text-3xl md:text-6xl font-bold">{title}</h1>

      {/* <img src={"https://image.tmdb.org/t/p/w185"+poster_path} className="h-44 w-80"></img> */}
      <p className="hidden md:inline-block py-6 text-lg w-2/4">{overview}</p>

      <div className="flex my-4 md:m-0">
      <div className="flex ">
      <button className="bg-white text-black text-xl flex rounded-md hover:bg-opacity-80 py-2 md:py-3 px-9">
      <img src ={play} className="h-6 w-7 mt-1 mr-2" alt="play"/>
       Play
        </button>
      </div>
   
        <div className="hidden md:inline-block flex">
        <button className="mx-2 bg-gray-500  bg-opacity-50 px-10 flex p-3 text-xl hover:bg-opacity-80 rounded-md text-white">
          <img src={moreinfo} className="h-5 w-6 mt-1 mr-2" alt="moreInfo"/>
          More Info
        </button>
        </div>
    
      </div>
    </div>
  );
};

export default VideoTitle;
