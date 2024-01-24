import React from 'react'
import Arrow from "../../assets/images/dashboard/productcardarrow.svg";
import Icons from "../../assets/images/dashboard/productcardicon.svg";
import Graph from "../../assets/images/dashboard/productcardgraph.svg";
import UnderLine from "../../assets/images/dashboard/underlinecards.svg";

const Mostsoldproductscard = () => {
  return (
    <div className=' bg-white py-6 px-16 rounded'>
    <div className='top flex justify-between mb-4'>
        <div className='left  flex items-center gap-4'>
          <div className=''>
          <img src={Icons} className='' alt='' />
        </div>
            <div className=''>
                <h6 className='font-normal font-rubik text-[#000000] text-xl leading-9'>Most Sold Products</h6>
                <h6 className='font-bold font-rubik text-[#f092ff] text-xl leading-9'>1,200</h6>

            </div>
        </div>
        <div className='right'>
          <img src={Graph} className='w-full h-full' alt='' />
        </div>
    </div>
    <img src={UnderLine} className='items-center justify-center mx-auto' alt='' />
    <div className='down flex items-center mt-6 gap-2' >
      <img src={Arrow} className='h-4 w-4' alt='' />
      <p className='font-medium font-rubik text-[#ff3d00] text-xl leading-7'>-15.20%</p>
      <p className='font-normal font-rubik text-[#404040] text-xl leading-7'>Decreased last month</p>
    </div>

</div>
  )
}

export default Mostsoldproductscard