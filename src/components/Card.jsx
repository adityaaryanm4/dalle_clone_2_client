import React from 'react'
import { download } from '../assets/index'
import FileSaver from 'file-saver'

const Card = ({ _id, name, prompt, photo }) => {
  return (
    <div className='rounded-lg group relative'>
      {/* //shadow-card hover:shadow-cardhover card*/}
      <img
        className='rounded-lg'
        // w-full h-auto object-cover
        src={photo}
        alt={prompt}
      />
      {/* main div */}
      <div className=' bg-[#10131f] hidden group-hover:flex flex-col absolute bottom-0 m-2 p-4 rounded-lg'>
        <p className='text-white text-sm overflow-y-auto '>{prompt}</p> {/* class 'prompt' */}
        {/* div with avatar, name  and dnd btn*/}
        <div className='flex justify-between mt-2 '>
          {/* div with avatar n name */}
          <div className='flex gap-2 items-center '>
            {/* avatar div */}
            <div className='text-white text-xs font-bold bg-green-700 rounded-full w-7 h-7 object-cover flex items-center justify-center'>{name[0]}</div>
            <p className='text-white text-sm'>{name}</p>
          </div>
          <button className='' onClick={() => { FileSaver.saveAs(photo, `${photo}.jpg`) }}>
            <img
              src={download}
              alt='download_button'
              className='w-6 h-6 object-cover invert'
            />
          </button>
        </div>
      </div>
      {/* max-h-[94.5%] left-0 right-0*/}
    </div>
  )
}

export default Card