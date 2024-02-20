import React from "react";
import Plus from "../../assets/images/dashboard/plusgoodmorning.svg";
import Totalrevenuecardforotherpage from "../cards/totalrevenuecard";
import Numberofclients from "../cards/clients/numberofclients";
const Addclients = () => {
  return (
    <div className='flex flex-col lg:flex-row  justify-between border border-[#ebebeb] bg-white   py-8 px-10 items-center'>
      <div className='left flex flex-col gap-2 relative'>
        <h2 className='font-lexend font-bold text-[#404040] text-2xl md:text-3xl lg:text-4xl leading-9'>
          Clients
        </h2>
      </div>

      <div className='middle flex flex-col lg:flex-row gap-6 justify-center'>
        <Numberofclients />
        <Totalrevenuecardforotherpage />
      </div>

      <div className='right mt-4 lg:mt-0 lg:w-[20%] xl:w-[13%]'>
        <a href='/clientform'>
          <button className='flex  py-[10px] px-[16px] bg-[#634af9] text-xl font-inter text-white rounded items-center gap-2'>
            <img src={Plus} className='w-6 h-6  ' alt='' />
            Add Client
          </button>
        </a>
      </div>
    </div>
  );
};

export default Addclients;
