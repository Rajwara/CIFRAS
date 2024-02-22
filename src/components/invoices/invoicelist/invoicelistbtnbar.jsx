import React from "react";
import ImportIcon from "../../../../src/assets/images/invoice/ImportIcon.svg";
import Plus from "../../../assets/images/dashboard/plusgoodmorning.svg";

import Numberofinvoices from "../../cards/invoicecards/numberofinvoices";
import Totalrevenuecardforotherpage from "../../cards/totalrevenuecard";

const invoicelistbtnbar = () => {
  return (
    <div className='flex flex-col lg:flex-row justify-between  bg-white  rounded py-6 px-8 items-center'>
      <div className=' flex lg:w-[18%] xl:w-[20%] flex-col gap-2 relative'>
        <div className='flex gap-2'>
          <h4 className='Font-lexend text-2xl mt-[-25px] font-extrabold leading-tight text-[#404040] '>
            Create Invoice
          </h4>
        </div>
      </div>

      <div className='middle lg:w-[80%] xl:w-[100%] flex flex-col lg:flex-row gap-6 justify-center'>
        <Numberofinvoices />
        <Totalrevenuecardforotherpage />
      </div>

      <div className='right flex flex-col xl:flex-row justify-center items-center gap-4 mt-4 lg:mt-0 lg:w-[20%] xl:w-[35%]'>
        <button className='flex py-[10px] px-[16px] bg-[#634af9] text-white rounded items-center gap-4 text-sm font-semibold'>
          <img src={ImportIcon} className='w-3.5 h-3.5  ' alt='' />
          Import
        </button>
        <a href='/createinvoiceform '>
          <button className='flex py-[10px] px-[16px] bg-[#634af9] text-sm text-white rounded items-center gap-2 font-semibold'>
            <img src={Plus} className='w-3.5 h-3.5  ' alt='' />
            Add Invoice
          </button>
        </a>
      </div>
    </div>
  );
};

export default invoicelistbtnbar;
