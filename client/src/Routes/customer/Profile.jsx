import React from 'react'
import { NavLink } from 'react-router-dom'
import {useSelector } from "react-redux"
import Logout from "../../component/btnlogout.jsx"
const Profile = () => {
    const { userInfo } = useSelector((state) => state.auth);
  return (
    <>
  { userInfo ? (<Logout/>) : (
    <div className='h-screen flex justify-center items-center '>
        <div className='bg-blue-500 p-5 btn'>
            <NavLink to="/profile/login">Login User</NavLink>
        </div>
    </div>)}
    </>
  )
}

export default Profile