import React from 'react';
import Plus from "../../assets/images/dashboard/plusgoodmorning.svg";
import Export from "../../assets/images/orderexporticon.svg";
import Totalrevenuecardforotherpage from "../cards/totalrevenuecard";
import Numberofordercardsforotherpage from '../cards/numberofordercard';
const Addorder = () => {
  return (
    <div className='flex justify-between border border-[#ebebeb] bg-white   py-8 px-10 items-center'>
    <div className='left flex flex-col gap-2 relative'>
        <h2 className='font-lexend font-bold text-[#404040] text-4xl leading-9'>Orders</h2>
    </div>

    <div className='middle flex flex-row gap-6 justify-center'>
        <Numberofordercardsforotherpage/>
        <Totalrevenuecardforotherpage/>
      </div>

    <div className='right flex flex-row gap-4'>
    <a href='/vendorform'>
          <button className='flex py-[10px] px-[16px] bg-white text-xl font-inter text-[#404040] border border-[#c0c0c0] rounded items-center gap-2'>
          <img src={Export} className='w-6 h-6  ' alt=''/>
          Export
          </button>
      </a>
      <a href='/orderform'>
          <button className='flex py-[10px] px-[16px] bg-[#634af9] text-xl font-inter text-white rounded items-center gap-2'>
          <img src={Plus} className='w-6 h-6  ' alt=''/>
          Add Order
          </button>
      </a>
    </div>
  </div>
  )
}

export default Addorder