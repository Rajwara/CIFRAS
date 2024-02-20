import React from "react";
import ImportIcon from "../../../../src/assets/images/invoice/ImportIcon.svg";
import Plus from "../../../assets/images/dashboard/plusgoodmorning.svg";

import Numberofinvoices from "../../cards/invoicecards/numberofinvoices";
import Totalrevenuecardforotherpage from "../../cards/totalrevenuecard";

const invoicelistbtnbar = () => {
  return (
    <div className='flex flex-col lg:flex-row justify-between  bg-white  rounded py-6 px-8 items-center'>
      <div className='left flex flex-col gap-2 relative'>
        <div className='flex gap-2'>
          <h4 className='Font-lexend text-4xl mt-[-25px] font-extrabold leading-tight text-[#404040] '>
            Create Invoice
          </h4>
        </div>
      </div>

      <div className='middle flex flex-col lg:flex-row gap-6 justify-center'>
        <Numberofinvoices />
        <Totalrevenuecardforotherpage />
      </div>

      <div className='right flex flex-col xl:flex-row gap-8 mt-4 lg:mt-0 lg:w-[30%] xl:w-[30%] '>
        <button className='flex py-[10px] px-[16px] bg-[#634af9] text-white rounded items-center gap-4'>
          <img src={ImportIcon} className='w-6 h-6  ' alt='' />
          Import
        </button>
        <a href='/createinvoiceform'>
          <button className='flex py-[10px] px-[16px] bg-[#634af9] text-white rounded items-center gap-2'>
            <img src={Plus} className='w-6 h-6  ' alt='' />
            Add Invoice
          </button>
        </a>
      </div>
    </div>
  );
};

export default invoicelistbtnbar;
