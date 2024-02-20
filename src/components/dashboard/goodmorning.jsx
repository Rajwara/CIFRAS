import React from "react";
import Hand from "../../assets/images/dashboard/handgoodmorning.svg";
import Plus from "../../assets/images/dashboard/plusgoodmorning.svg";

const Goodmorning = () => {
  return (
    <div className='flex flex-wrap  justify-between font-inter border border-[#ebebeb] bg-white  rounded py-6 px-8 items-center'>
      <div className='left flex flex-col gap-2 relative'>
        <h2 className='font-lexend font-bold text-[#634AF9] text-3xl leading-9'>
          Good Morning,
        </h2>
        <div className='flex gap-2'>
          <h4 className='font-lexend font-normal text-[#404040] text-3xl leading-9'>
            John Deo
          </h4>
          <img src={Hand} className='w-8 h-8' alt='' />
        </div>
      </div>
      <div className='right mt-4 md:mt-0'>
        <a href='/productform'>
          <button className='font-lexend flex py-[10px] px-[16px] bg-[#634af9] text-xl font-normal leading-7 text-white rounded items-center gap-2'>
            <img src={Plus} className='w-6 h-6  ' alt='' />
            Add Product
          </button>
        </a>
      </div>
    </div>
  );
};

export default Goodmorning;
