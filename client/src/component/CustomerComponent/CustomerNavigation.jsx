import React from 'react'
import { NavLink } from 'react-router-dom'
import { IoIosHome } from "react-icons/io";
import { MdMessage } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { useSelector } from 'react-redux';
const Navigation = () => {
  const {UserInfo} = useSelector((state)=>state.auth)
  return (
  <>
     
    <div className="dock ">
   
  <button>
     <NavLink to="/">
<IoIosHome className='text-3xl hover:text-blue-500 dock-label'  />
        </NavLink  >
  </button>
  
  <button className="">
    <NavLink to="/Status-Appointment">
<MdMessage className='text-3xl hover:text-blue-500  dock-label ' />
        </NavLink>
  </button>
  
  <button>
  <NavLink to="/Profile">
<CgProfile className='text-3xl hover:text-blue-500 dock-label' />
        </NavLink>
  </button>
</div>
    
</>
  )

}

export default Navigation