import React from 'react'
import { HeaderBG, Photo, Mail, Telephone } from '../../Assets'

function Header() {
  return (
    
    <div className='flex flex-row justify-between'>
        <img src={HeaderBG} alt="" className="absolute h-[270px] w-full"/>
        <div className='relative mt-[36px] ml-[80px] flex flex-row'>
            <img src={Photo} alt="/" className='h-[150px] rounded-full' />
            <div className='ml-[20px]'>
                <p className='text-[25px] font-roboto text-[#ede8dd] mb-[10px] '>Producer Music</p>
                <p className='text-[38px] font-roboto font-bold w-[50%] text-[#222222]'>Gretio Valantino Tengker Rumuat</p>
            </div>
        </div>
        
        <div className='relative mt-[36px] mr-[80px]'>
            <div className='flex flex-row items-center mb-[10px] '>
                <img src={Mail} alt="/" className='h-[20px] mr-[10px]'/>
                <p className=' underline text-[20px]'>gretio14@gmail.com</p>
            </div>
            <div className='flex flex-row items-center '>
                <img src={Telephone} alt="/" className='h-[20px] mr-[10px]'/>
                <p className=' underline text-[20px]'>+6285399904556</p>
            </div>
        </div>
    </div>
  )
}

export default Header