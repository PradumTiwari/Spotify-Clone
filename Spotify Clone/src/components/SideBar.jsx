import React from 'react'
import UpperSideBar from './UpperSideBar';
import LowerSideBar from './LowerSideBar';
const SideBar = () => {
  return (
    <div className='flex flex-col bg-slate-900 '>
      <div className='my-2'>
         <UpperSideBar/> 
      </div>
      <div>
        <LowerSideBar/>
      </div>
    </div>
  )
}

export default SideBar