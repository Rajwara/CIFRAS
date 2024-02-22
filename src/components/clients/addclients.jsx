import React from "react";
import Plus from "../../assets/images/dashboard/plusgoodmorning.svg";
import Totalrevenuecardforotherpage from "../cards/totalrevenuecard";
import Numberofclients from "../cards/clients/numberofclients";

const Addclients = () => {
  return (
    <div className='flex flex-col lg:flex-row  justify-between border border-[#ebebeb] bg-white   py-8 px-10 items-center'>
      <div className='left flex lg:w-[10%] xl:w-16 flex-col gap-2 relative'>
        <h2 className='font-lexend font-bold text-[#404040] text-2xl leading-9'>
          Clients
        </h2>
      </div>

      <div className='middle lg:w-[80%] xl:w-[100%] flex flex-col lg:flex-row gap-6 justify-center'>
        <Numberofclients />
        <Totalrevenuecardforotherpage />
      </div>

      <div className='right mt-4 lg:mt-0 lg:w-[22%] xl:w-[14%]'>
        <a href='/clientform'>
          <button className='flex  py-[10px] px-[16px] bg-[#634af9] text-sm font-inter text-white rounded items-center gap-2'>
            <img src={Plus} className='w-3.5 h-3.5  ' alt='' />
            Add Client
          </button>
        </a>
      </div>
    </div>
  );
};

export default Addclients;
