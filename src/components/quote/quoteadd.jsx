import React from "react";
import Plus from "../../assets/images/dashboard/plusgoodmorning.svg";
import Totalrevenuecardforotherpage from "../cards/totalrevenuecard";
import Numberofquotes from "../cards/quotes/numberofquotes";

const Quoteadd = () => {
  return (
    <div className='flex flex-col lg:flex-row justify-between border border-[#ebebeb] bg-white   py-8 px-10 items-center'>
      <div className='left flex lg:w-[10%] xl:w-16 flex-col gap-2 relative'>
        <h2 className='font-lexend font-bold text-[#404040] text-4xl leading-9'>
          Quotes
        </h2>
      </div>

      <div className='middle flex lg:w-[80%] xl:w-[100%] flex-col lg:flex-row gap-6 justify-center'>
        <Numberofquotes />
        <Totalrevenuecardforotherpage />
      </div>

      <div className='right lg:w-[20%] xl:w-[23%] mt-6 lg:mt-0'>
        <a href='/quoteform'>
          <button className='flex py-[10px] px-[16px] bg-[#634af9] text-white rounded items-center gap-2'>
            <img src={Plus} className='w-6 h-6  ' alt='' />
            Add Quotes
          </button>
        </a>
      </div>
    </div>
  );
};

export default Quoteadd;
