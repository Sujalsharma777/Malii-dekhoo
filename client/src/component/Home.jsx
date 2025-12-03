import React from 'react'
import { CgUser } from 'react-icons/cg'
import { NavLink } from 'react-router-dom'
import Img_Provider from  "../assets/5124556.jpg"
import Img_Consumer from "../assets/20943930.jpg"
const Home = () => {
  return (
    <div className='flex justify-center items-center  overflow-hidden     '>
    <div className='absolute top-1/4 min-w-4xl h-96  shadow-lg rounded-2xl bg-base-200 shadow-gray-800'>
    <h1 className='text-center p-10 text-2xl font-semibold '>How you are </h1>
    <div className='flex justify-center items-center gap-20'>
        <NavLink className="hover:scale-110" to="/signup">
          <img src={Img_Provider} alt="Image" className='max-w-50 h-auto object-contain rounded-2xl ' />
          <h1 className='text-center p-2 text-lg font-bold'>Provider</h1>
        </NavLink>
        <NavLink className="hover:scale-110" to="/signup">
 <img src={Img_Consumer} alt="Image" className='max-w-50 h-auto object-contain rounded-2xl ' />
 <h1 className='text-center p-2 text-lg font-bold'>Consumer</h1>
        </NavLink>
        </div>
    </div>
    </div>
  )
}

export default Home