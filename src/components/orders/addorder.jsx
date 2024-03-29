import React from "react";
import Plus from "../../assets/images/dashboard/plusgoodmorning.svg";
import Export from "../../assets/images/orderexporticon.svg";
import Totalrevenuecardforotherpage from "../cards/totalrevenuecard";
import Numberofordercardsforotherpage from "../cards/numberofordercard";
const Addorder = () => {
  return (
    <div className='flex flex-col lg:flex-row justify-between border border-[#ebebeb] bg-white   py-8 px-10 items-center'>
      <div className='left flex lg:w-[10%] xl:w-12 flex-col gap-2 relative'>
        <h2 className='font-lexend font-bold text-[#404040] text-2xl leading-9'>
          Orders
        </h2>
      </div>

      <div className='middle flex lg:w-[80%] xl:w-[100%] flex-col lg:flex-row gap-6 justify-center'>
        <Numberofordercardsforotherpage />
        <Totalrevenuecardforotherpage />
      </div>

      <div className='right flex lg:w-[20%] xl:w-[29%] flex-col items-center xl:flex-row gap-4 lg:w-[21%] xl:w-[22%] mt-4 lg:mt-0'>
        <a href='/vendorform'>
          <button className='flex py-[10px] px-[16px] bg-white text-sm font-lexend text-[#404040] border border-[#c0c0c0] rounded items-center gap-2'>
            <img src={Export} className='w-4 h-4  ' alt='' />
            Export
          </button>
        </a>
        <a href='/orderform'>
          <button className='flex py-[10px] px-[16px] bg-[#634af9] text-sm font-lexend text-white rounded items-center gap-2'>
            <img src={Plus} className='w-3.5 h-3.5  ' alt='' />
            Add Order
          </button>
        </a>
      </div>
    </div>
  );
};

export default Addorder;
