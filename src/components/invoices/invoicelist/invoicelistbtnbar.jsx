import React from "react";
import ImportIcon from "../../../../src/assets/images/invoice/ImportIcon.svg";
import Plus from "../../../assets/images/dashboard/plusgoodmorning.svg";

const invoicelistbtnbar = () => {
  return (
    <div className="flex justify-between border border-[#ebebeb] bg-white  rounded py-6 px-8 items-center">
      <div className="left flex flex-col gap-2 relative">
        <div className="flex gap-2">
          <h4 className="font-rubik font-normal text-[#404040] text-4xl leading-9">
            Create Invoice
          </h4>
        </div>
      </div>
      <div className="right flex gap-8">
        <button className="flex py-[10px] px-[16px] bg-[#634af9] text-white rounded items-center gap-4">
          <img src={ImportIcon} className="w-6 h-6  " alt="" />
          Import
        </button>
       <a href="/createinvoice">
       <button className="flex py-[10px] px-[16px] bg-[#634af9] text-white rounded items-center gap-2">
          <img src={Plus} className="w-6 h-6  " alt="" />
          Add Invoice
        </button>
       </a>
      </div>
    </div>
  );
};

export default invoicelistbtnbar;
