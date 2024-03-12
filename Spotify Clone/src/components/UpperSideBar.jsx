import React from 'react'
import { FaSpotify } from "react-icons/fa6";
import { IoHome } from "react-icons/io5";
import { FaSearch } from "react-icons/fa";
const UpperSideBar = () => {
  return (
    <div className='border border-slate-700 rounded-xl p-2 bg-slate-900'>
      <div className='flex my-3'>
     <FaSpotify style={{color: 'white',backgroundColor:'black'}} />
     <p className='text-[10px] font-medium font-serif pl-1 text-slate-200'>Spotify</p>
      </div>
      <div className='flex pl-2  mb-3'>
      <IoHome style={{color:'white'}}/>
       <p className='text-[10px] text-slate-200 fill-slate-100'>Home</p>
      </div>
      <div className='flex pl-2 '>
      <FaSearch style={{color:'white'}}/>
       <p className='text-[10px] text-slate-200 fill-slate-100'>Search</p>
      </div>
    </div>
  )
}

export default UpperSideBar