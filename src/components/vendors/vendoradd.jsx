import React from 'react';
import Plus from "../../assets/images/dashboard/plusgoodmorning.svg";
import Totalrevenuecardforotherpage from "../cards/totalrevenuecard";
import Numberofvendors from '../cards/vendors/numberofvendors';

const Vendoradd = () => {
  return (
    <div className='flex flex-col lg:flex-row justify-between border border-[#ebebeb] bg-white   py-8 px-10 items-center'>
      <div className='left flex flex-col gap-2 relative'>
          <h2 className='font-lexend font-bold text-[#404040] text-4xl leading-9'>Vendors</h2>
      </div>

      <div className='middle flex flex-col lg:flex-row gap-6 justify-center'>
        <Numberofvendors/>
        <Totalrevenuecardforotherpage/>
      </div>

      <div className='right mt-6 lg:mt-0 w-full lg:w-[24%] xl:w-full items-center justify-center flex'>
        <a href='/vendorform'>
            <button className='flex py-[10px] px-[16px] bg-[#634af9] text-xl font-inter text-white rounded items-center gap-2'>
            <img src={Plus} className='w-6 h-6  ' alt=''/>
            Add Vendor
            </button>
        </a>
      </div>
    </div>  
  )
}

export default Vendoradd