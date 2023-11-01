import React from 'react'
import GPTMovieSuggestions from './GPTMovieSuggestions'
import GPTSearchBar from './GPTSearchBar'
import { BG_URL } from '../utils/constant'

const GPTSearch = () => {
  return (
    <div>

<div className="absolute -z-10">
        <img
        alt = "backgroundimg"
          className="h-screen w-screen"
          src={BG_URL}
        />
      </div>
<GPTSearchBar/>
<GPTMovieSuggestions/>

    </div>
  )
}

export default GPTSearch