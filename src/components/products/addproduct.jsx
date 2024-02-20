import React from "react";
import Plus from "../../assets/images/dashboard/plusgoodmorning.svg";
import Numberofproductcard from "../cards/productcards/numberofproductcard";
import Totalrevenuecardforotherpage from "../cards/totalrevenuecard";

const Addproduct = () => {
  return (
    <div className='flex flex-col lg:flex-row  justify-between  bg-white   py-8 px-10 items-center'>
      <div className='left flex flex-col gap-2 relative'>
        <h2 className='font-lexend font-bold text-[#404040] text-4xl leading-9'>
          Products
        </h2>
      </div>
      <div className='middle flex flex-col lg:flex-row gap-6 justify-center'>
        <Numberofproductcard />
        <Totalrevenuecardforotherpage />
      </div>
      <div className='right mt-4 lg:mt-0'>
        <a href='/productform'>
          <button className='flex py-[10px] px-[16px] bg-[#634af9] text-xl font-inter text-white rounded items-center gap-2'>
            <img src={Plus} className='w-6 h-6  ' alt='' />
            Add Product
          </button>
        </a>
      </div>
    </div>
  );
};

export default Addproduct;
