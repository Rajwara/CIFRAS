import React from 'react'
import Icons from "../../assets/images/dashboard/totalrevenueicon.svg";
import Graph from "../../assets/images/dashboard/totalrevenuegraph.svg";
import Arrow from "../../assets/images/dashboard/arrowgreenup.svg";
import UnderLine from "../../assets/images/dashboard/underlinecards.svg";

const Totalrevenuecard = () => {
  return (
    <div className=' bg-white py-6 px-16 rounded'>
    <div className='top flex justify-between mb-4'>
        <div className='left flex  items-center gap-4'>
          <div className=''>
          <img src={Icons} className='' alt='' />
        </div>
            <div className=''>
                <h6 className='font-normal font-lexend text-[#000000] text-xl leading-9'>Total Revenue</h6>
                <h6 className='font-bold font-lexend text-[#04b076] text-xl leading-9'>13,200</h6>

            </div>
        </div>
        <div className='right'>
          <img src={Graph} className='w-full h-full' alt='' />
        </div>
    </div>
    <img src={UnderLine} className='items-center justify-center mx-auto' alt='' />
    <div className='down flex items-center mt-6 gap-2' >
      <img src={Arrow} className='h-4 w-4' alt='' />
      <p className='font-medium font-inter text-[#04B076] text-xl leading-7'>+55.45%</p>
      <p className='font-normal font-inter text-[#404040] text-xl leading-7'>Increased last month</p>
    </div>

</div>
  )
}

export default Totalrevenuecard