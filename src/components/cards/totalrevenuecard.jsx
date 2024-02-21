import React from "react";
import Icons from "../../assets/images/dashboard/totalrevenueicon.svg";
import Graph from "../../assets/images/dashboard/totalrevenuegraph.svg";
import Arrow from "../../assets/images/dashboard/arrowgreenup.svg";
import UnderLine from "../../assets/images/dashboard/underlinecards.svg";

const Totalrevenuecardforotherpage = () => {
  return (
    <div className=' bg-white py-4 mt-4 lg:mt-0 w-full lg:w-1/3 px-2 rounded border border-[#ebebeb]'>
      <div className='top flex justify-between '>
        <div className='left flex  items-center gap-4'>
          <div className=''>
            <img src={Icons} className='' alt='' />
          </div>
          <div className=''>
            <h6 className='font-medium font-lexend text-[#000000] text-sm leading-9'>
              Total Revenue
            </h6>
            <h6 className='font-semibold font-lexend text-[#04b076] text-xl leading-9'>
              13,200
            </h6>
          </div>
        </div>
        <div className='right'>
          <img src={Graph} className='w-full h-full' alt='' />
        </div>
      </div>
      <img
        src={UnderLine}
        className='items-center justify-center mx-auto'
        alt=''
      />
      <div className='down flex lg:flex-col xl:flex-row items-center mt-2 gap-2'>
      <div className="flex gap-2 items-center">
        <img src={Arrow} className='h-4 w-4' alt='' />
        <p className='font-medium font-inter text-[#04B076] text-sm leading-7'>
          +55.45%
        </p>
        </div>
        <div>
        <p className='font-normal text-start lg:text-center xl:text-start font-inter text-[#404040] text-sm leading-7'>
          Increased last month
        </p>
        </div>
      </div>
    </div>
  );
};

export default Totalrevenuecardforotherpage;
