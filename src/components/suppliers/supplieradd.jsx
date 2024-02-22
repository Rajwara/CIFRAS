import React from "react";
import Plus from "../../assets/images/dashboard/plusgoodmorning.svg";
import Totalrevenuecardforotherpage from "../cards/totalrevenuecard";
import Numberofsuppliers from "../cards/suppliers/numberofsuppliers";
const Supplieradd = () => {
  return (
    <div className='flex flex-col lg:flex-row justify-between border border-[#ebebeb] bg-white   py-8 px-10 items-center'>
      <div className='left lg:w-[10%] xl:w-16 flex flex-col gap-2 relative'>
        <h2 className='font-lexend font-bold text-[#404040] text-2xl leading-9'>
          Suppliers
        </h2>
      </div>
      <div className='middle lg:w-[80%] xl:w-[100%] flex flex-col lg:flex-row gap-6 justify-center'>
        <Numberofsuppliers />
        <Totalrevenuecardforotherpage />
      </div>

      <div className='right lg:w-[20%] xl:w-[15%] mt-6 lg:mt-0'>
        <a href='/supplierform'>
          <button className='flex py-[10px] px-[16px] bg-[#634af9] text-sm font-lexend text-white rounded items-center gap-2'>
            <img src={Plus} className='w-3.5 h-3.5  ' alt='' />
            Add Supplier
          </button>
        </a>
      </div>
    </div>
  );
};

export default Supplieradd;
