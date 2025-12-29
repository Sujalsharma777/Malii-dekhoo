import React from 'react'
import { CgAdd } from 'react-icons/cg'
import { MdAdd } from 'react-icons/md'
import { NavLink } from 'react-router-dom'
const CreateApp = () => {
  return (
    <div className='hero p-10'>
        <div>
            <NavLink className="flex items-center gap-2 font-bold btn p-6 btn-accent" to="/CreateServices" ><MdAdd className='text-3xl' /> Create Services</NavLink>
        </div>
    </div>
  )
}

export default CreateApp