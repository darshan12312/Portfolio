import React from 'react'
import Design from './assets/Design.svg'
import Card from './Card'
import Siege from './assets/Siege-web.png'
import RedBus from './assets/Red-Bus.png'
import Kalamkaar from './assets/Kalamkaar.png'
import Portfolio from './assets/Portfolio.png'

function Projects() {
  return (
    <div id='Project' className='min-h-fit Project-screen md:p-5 w-full  text-white' >
      <div className='Projects flex flex-col items-center '>
            <div className='relative Div1 h-28 w-80 ' >
                
            <h1 className='absolute  text-[60px] font-semibold z-[1] ' >Projects</h1>
            <img className=' absolute  w-40 right-12 bottom-6  ' src={Design}  alt="" />
                </div> 
                <div className="Project-Cards flex flex-wrap ">
                    <Card 
                    img ={Siege}
                    h1="The Siege"
                    link="https://darshan12312.github.io/The-Seige/"
                    />
                    <Card
                     img ={Kalamkaar}
                     h1="Kalamkaar"
                     link="https://darshan12312.github.io/KALAMKAAR/"/>
                </div>
                <div className="Project-Cards flex flex-wrap ">
                    <Card
                    img ={RedBus}
                    h1="Red-Bus Clone"
                    link="https://darshan12312.github.io/Red-Bus-Clone/"/>
                    <Card
                    img ={Portfolio}
                    h1="Portfolio"
                    link="# "/>
                </div>
      </div>
    </div>
  )
}

export default Projects
