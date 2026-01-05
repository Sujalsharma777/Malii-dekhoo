import React from 'react'
import { CgUser } from 'react-icons/cg'
import { NavLink } from 'react-router-dom'
import Img_Provider from  "../assets/5124556.jpg"
import Img_Consumer from "../assets/20943930.jpg"
const Home = () => {
  return (
    <div className='flex justify-center items-center  overflow-hidden     '>
    <div className='sm:absolute sm:top-1/4 min-w-4xl sm:h-96 h-full  shadow-lg rounded-2xl sm:bg-base-200 shadow-gray-800'>
    <h1 className='text-center p-10 text-2xl font-semibold '>How you are </h1>
    <div className='flex justify-center items-center sm:gap-20 gap-10 flex-col sm:flex-row'>
        <NavLink className="hover:scale-110" to="/signup">
          <img src={Img_Provider} alt="Image" className='max-w-50 h-auto object-contain rounded-2xl ' />
          <h1 className='text-center p-2 text-lg font-bold'>Malii</h1>
        </NavLink>
        <NavLink className="hover:scale-110" to="/signup">
 <img src={Img_Consumer} alt="Image" className='max-w-50 h-auto object-contain rounded-2xl ' />
 <h1 className='text-center p-2 text-lg font-bold'>Gardener</h1>
        </NavLink>
        </div>
    </div>
    </div>
  )
}

export default Home