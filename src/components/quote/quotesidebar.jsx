import React from 'react'
import Line from "../../assets/images/quote/sidebarlines.svg";
import SubTotal from "../../assets/images/quote/sidebarsubtotal.svg";
import Commision from '../../assets/images/quote/sidebarcommision.svg';
import Discount from "../../assets/images/quote/sidebardiscount.svg";
import Total from '../../assets/images/quote/sidebartotal.svg';

const Quotesidebar = () => {
  return (
    <div className='quotesidebar flex flex-col gap-4 px-6 pt-24    bg-white'>
        <h2 className='font-lexend font-bold text-[#634AF9] text-2xl leading-9'>Quote Summary</h2>
        <div className='flex gap-2'>
        <img src={Line} alt=""  className='w-6 h-6'/>
        <p className='text-[#404040] text-xl font-inter font-normal leading-7'>Lines: <span className='text-[#C0C0C0] text-lg'> 00</span></p>
        </div>
        <div className='flex gap-2'>
        <img src={SubTotal} alt=""  className='w-6 h-6'/>
        <p className='text-[#404040] text-xl font-inter font-normal leading-7'>SubTotal: <span className='text-[#C0C0C0] text-lg'> 0.00</span></p>
        </div>
        <div className='flex gap-2'>
        <img src={Commision} alt=""  className='w-6 h-6'/>
        <p className='text-[#404040] text-xl font-inter font-normal leading-7'>Commision: <span className='text-[#C0C0C0] text-lg'> 0.00</span></p>
        </div>
        <div className='flex gap-2'>
        <img src={Discount} alt=""  className='w-6 h-6'/>
        <p className='text-[#404040] text-xl font-inter font-normal leading-7'>Discount %: <span className='text-[#C0C0C0] text-lg'> 0.00</span></p>
        </div>
        <div className='flex gap-2'>
        <img src={Total} alt=""  className='w-6 h-6'/>
        <p className='text-[#404040] text-xl font-inter font-normal leading-7'>Total $: <span className='text-[#C0C0C0] text-lg'> 0.00</span></p>
        </div>
    </div>
  )
}

export default Quotesidebar