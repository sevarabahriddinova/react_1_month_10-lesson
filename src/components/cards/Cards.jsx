import React from 'react'
import Container from '../../utils'
import cardImg from "../../assets/cardImg.png"
import { Link } from 'react-router-dom'

const Cards = () => {
  return (
    <div>
      <Container>
      <div className='grid grid-cols-2 gap-5 mt-32 mb-16'>
      <div className='card flex flex-col gap-2  overflow-hidden'>
              <img className='w-[590px] h-[415px] object-cover' src={cardImg} alt="" />
              <span className='text-[14px] font-semibold'>NOV 23 2020</span>
              <h3 className='text-pink-700 font-semibold text-[24px]'>This way is wrong about UI Design.</h3>
              <p className='w-["100%] text-[16px] '>A quick guide to assisting users in the challenging steps from learning 
                  about your podcast on the web.  A quick guide to assisting users in the  challenging steps from learning about your podcast on the web. 
              </p>
              <Link to={"/about"} className='text-pink-700 font-semibold text-[24px] mt-4'>READ MORE</Link>
          </div>
          <div className='card flex flex-col gap-2 overflow-hidden'>
              <img className='w-[590px] h-[415px] object-cover' src={cardImg} alt="" />
              <span className='text-[14px] font-semibold'>NOV 23 2020</span>
              <h3 className='text-pink-700 font-semibold text-[24px]'>This way is wrong about UI Design.</h3>
              <p className='w-["100%"] text-[16px]'>A quick guide to assisting users in the challenging steps from learning 
                  about your podcast on the web.  A quick guide to assisting users in the  challenging steps from learning about your podcast on the web. 
              </p>
              <Link to={"/about"} className='text-pink-700 font-semibold text-[24px] mt-4'>READ MORE</Link>
          </div>
      </div>

          
      </Container>
    </div>
  )
}

export default Cards
