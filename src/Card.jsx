import React from 'react'
import { LuArrowUpRight } from "react-icons/lu";

function Card({ img , link , h1  }) {
  return (
    <div className='Card m-7 h-72 w-96 flex hover:border-[#B923E0] hover:bg-custom-gradient2 flex-col gap-4 border-2 p-4 border-white rounded-xl hover:scale-105 ease-in duration-100'>
      <h1 className='  uppercase font-bold md:text-lg '>{h1}</h1>
      <img className=' h-[156px] rounded-lg' src={img} alt="" />
      <a className='w-24 flex  h-10 ' href={link}>
        <button className='w-24 flex justify-evenly items-center h-10 border-2 border-white rounded-3xl' >
            Visit
            <LuArrowUpRight className='font-bold' />
        </button>
      </a>
    </div>
  )
}

export default Card 
