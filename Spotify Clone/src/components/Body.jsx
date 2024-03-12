import React from 'react'
import SideBar from './SideBar';
import MainContainer from './MainContainer';
const Body = () => {
  return (
    <div className='flex w-full bg-slate-950'>
     <div className='w-[30%]'> <SideBar/></div>
    <div className='w-[70%]'>  <MainContainer/></div>
    </div>
  )
}

export default Body