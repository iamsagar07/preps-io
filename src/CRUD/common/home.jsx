import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className='flex justify-center items-center flex-col min-h-screen'>Home & React Crud Operations..
    <div className=" flex items-center justify-center h-16 gap-7">
       <Link to={'/create'}>
       <button className="rounded p-3 bg-blue-600 text-white hover:bg-blue-900" >
          Create +
        </button>
       </Link>
       <Link to={'/products'}>
       <button className="rounded p-3 bg-blue-600 text-white hover:bg-blue-900" >
          View Products
        </button>
       </Link>
      </div>
    </div>
    
  )
}

export default Home