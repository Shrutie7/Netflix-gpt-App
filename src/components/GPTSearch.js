import React from 'react'
import GPTMovieSuggestions from './GPTMovieSuggestions'
import GPTSearchBar from './GPTSearchBar'
import { BG_URL } from '../utils/constant'

const GPTSearch = () => {
  return (
    <>
      <div className="fixed -z-10">
        <img
        alt = "backgroundimg"
        className="h-screen sm:object-cover md:w-screen"
          src={BG_URL}
        />
      </div>

      <div className=''>


<GPTSearchBar/>
<GPTMovieSuggestions/>

    </div>
    </>

  )
}

export default GPTSearch