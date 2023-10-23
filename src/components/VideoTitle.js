import React from "react";
import play from "../icons/play_icon_134504.png";
import moreinfo from "../icons/PngItem_3406810.png";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="pt-[20%] px-24 w-screen aspect-video absolute text-white bg-gradient-to-r from-black">
      <h1 className="text-6xl font-bold">{title}</h1>
      <p className="py-6 text-lg w-2/4">{overview}</p>

      <div className="flex">
      <div className="flex ">
      <button className="bg-white text-black p-3 px-9 text-xl flex rounded-md hover:bg-opacity-80">
      <img src ={play} className="h-6 w-7 mt-1 mr-2" />
       Play
        </button>
      </div>
   
        <div className="flex">
        <button className=" mx-2 bg-gray-500  bg-opacity-50 px-10 flex p-3 text-xl hover:bg-opacity-80 rounded-md text-white">
          <img src={moreinfo} className="h-5 w-6 mt-1 mr-2"/>
          More Info
        </button>
        </div>
    
      </div>
    </div>
  );
};

export default VideoTitle;
