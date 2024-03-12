import React from 'react'
import { IoLibrary } from "react-icons/io5";
import { FaPlus } from "react-icons/fa6";
const LowerSideBar = () => {
  return (
    <div>
      <div className=' border border-slate-500 rounded-xl p-2 flex justify-between '>

        <div className='flex'><IoLibrary style={{color:'white'}}/>
        <p className='text-slate-50 text-[12px] pl-1 '>Your Library</p>
        </div>
        <div className=''>
         <FaPlus style={{color:'white'}}/>
        </div>
      </div>
      <div>Artist Name</div>
    </div>
  )
}

export default LowerSideBar