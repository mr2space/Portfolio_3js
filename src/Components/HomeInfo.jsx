import React from 'react'
import { Link } from 'react-router-dom'
import {arrow} from '../assets/assets/icons'

const InfoBox = ({text, link, btnText}) => (
    <div className='info-box'>
        <p className="font-medium sm:text-xl text-center">
        {text}
        </p>
        
        <Link className='neo-brutalism-white  neo-btn' to={link}>
            {btnText}
            <img src={arrow} className='w-4 h-4 object-contain'/>
        </Link>
    </div>
)


const renderContent = {
    1:(
        <h1 className='sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5'>
        Hi, I am <span className='font-semibold'>Rishu 👋</span> <br />
        A software Engineer from India
        
        </h1>
    ),
    2:(
        <InfoBox
            text={"Worked with many companies "}
            link="/about"
            btnText={"learn more"}
        />
    ),
    3:(
        <InfoBox
            text={"Led multipe projects to success"}
            link="/projects"
            btnText={"see project"}
        />
    ),
    4:(
        <InfoBox
            text={"looking for developer ?"}
            link="/contact"
            btnText={"lets talk"}
        />
    ),
}





const HomeInfo = ({currentStage}) => {
  return renderContent[currentStage] || null
}

export default HomeInfo