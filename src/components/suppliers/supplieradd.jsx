import React from "react";
import Plus from "../../assets/images/dashboard/plusgoodmorning.svg";
import Totalrevenuecardforotherpage from "../cards/totalrevenuecard";
import Numberofordercardsforotherpage from "../cards/numberofordercard";
const Supplieradd = () => {
  return (
    <div className='flex flex-col lg:flex-row justify-between border border-[#ebebeb] bg-white   py-8 px-10 items-center'>
      <div className='left flex flex-col gap-2 relative'>
        <h2 className='font-lexend font-bold text-[#404040] text-3xl leading-9'>
          Suppliers
        </h2>
      </div>
      <div className='middle flex flex-col lg:flex-row gap-6 justify-center'>
        <Numberofordercardsforotherpage />
        <Totalrevenuecardforotherpage />
      </div>

      <div className='right mt-6 lg:mt-0'>
        <a href='/supplierform'>
          <button className='flex py-[10px] px-[16px] bg-[#634af9] text-xl font-inter text-white rounded items-center gap-2'>
            <img src={Plus} className='w-6 h-6  ' alt='' />
            Add Supplier
          </button>
        </a>
      </div>
    </div>
  );
};

export default Supplieradd;
