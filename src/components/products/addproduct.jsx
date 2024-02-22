import React from "react";
import Plus from "../../assets/images/dashboard/plusgoodmorning.svg";
import Numberofproductcard from "../cards/productcards/numberofproductcard";
import Totalrevenuecardforotherpage from "../cards/totalrevenuecard";

const Addproduct = () => {
  return (
    <div className='flex w-full flex-col lg:flex-row  justify-between  bg-white   py-8 px-10 items-center'>
      <div className='left lg:w-[10%] xl:w-16 flex flex-col gap-2 relative'>
        <h2 className='font-lexend font-bold text-[#404040] text-2xl leading-9'>
          Products
        </h2>
      </div>
      <div className='middle lg:w-[80%] xl:w-[100%] flex flex-col lg:flex-row gap-6 justify-center'>
        <Numberofproductcard />
        <Totalrevenuecardforotherpage />
      </div>
      <div className='right lg:w-[20%] xl:w-[16%]  mt-4 lg:mt-0'>
        <a href='/productform'>
          <button className='flex text-sm py-[10px] px-[16px] bg-[#634af9]  font-inter text-white rounded items-center gap-2'>
            <img src={Plus} className='w-3 h-3  ' alt='' />
            Add Product
          </button>
        </a>
      </div>
    </div>
  );
};

export default Addproduct;
