import React from 'react'
import lang from '../utils/languageConstants'
import { useSelector } from 'react-redux'

const GPTSearchBar = () => {

  const language = useSelector((store)=>store.config.language)
  return (
    <div className='pt-[7%] flex justify-center'>

<form className='w-1/2 bg-black grid grid-cols-12'>

<input type="text" className='p-4 m-4 col-span-9' placeholder={lang?.[language]?.gptSearchPlaceholder}/>
<button className="m-4 py-2 px-4 bg-red-700 text-white rounded-lg col-span-3">{lang?.[language]?.search}</button>
</form>

    </div>
  )
}

export default GPTSearchBar