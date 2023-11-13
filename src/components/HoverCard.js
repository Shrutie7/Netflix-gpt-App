import React from 'react'

const HoverCard = ({trailerVideo}) => {
  return (
    <div className='bg-white h-24 w-28'>
     <iframe
       
       className=" aspect-video"
        src={"https://www.youtube.com/embed/" + trailerVideo?.key + "?&autoplay=1&mute=1&loop=1&rel=0&amp&controls=0"}
        
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>

    <button>play</button>
    <button>tick</button>
    <button>thunb</button>


    </div>
  )
}

export default HoverCard