import React from 'react'

const Home = () => {
  return (
   <>
   <div className='p-10  h-screen flex justify-center    '>
    
    <div className='flex flex-col sm:w-3xl'>

        <input type="text" name='Search' placeholder='Landscap' className='border p-2 rounded-2xl my-2' />
        <input type="text" name='Location' placeholder='Indore' className='border p-2 rounded-2xl my-2'  />
        <button type='submit' className=' bg-blue-500 p-2  text-2xl m-5 font-semibold  rounded-lg'>Find</button>
    </div>
   </div>
   </>
  )
}

export default Home