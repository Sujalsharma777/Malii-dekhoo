import React, { useState } from 'react'
import Appointment from '../../component/CustomerComponent/Appointment.jsx'

const BookApp = () => {
  const [searchTerm , SetsearchTerm] = useState('')
    
  const handleSearch = (e)=>{
       e.preventDefault();
    return  searchTerm
    
  }
  
  return (
    <div>
       <div className='p-10   flex justify-center    '>
    
    <form className='flex flex-col sm:w-3xl' onSubmit={handleSearch}  >

      
        <input type="text" name='Location' placeholder='Indore' className='border p-2 rounded-2xl my-2' onChange={(e) => SetsearchTerm(e.target.value)} value={searchTerm} />
        <button type='submit' className=' btn btn-neutral'>Find</button>
    </form>
   </div>
   <Appointment  name={searchTerm}/>
    </div>
  )
}

export default BookApp