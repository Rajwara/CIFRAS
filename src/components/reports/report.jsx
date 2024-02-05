import React from 'react'
import HistoryIcon from "../../assets/images/reports/reporthistoryicon.svg";

const Report = () => {
  return (
    <div className='flex justify-between bg-white   py-8 px-10 items-center'>
    <div className='left flex flex-col gap-2 relative'>
        <h2 className='font-rubik font-bold text-[#404040] text-4xl leading-9'>Reports</h2>
        <p className='font-rubik font-normal text-[#404040] text-lg leading-7'>Get a complete view of your company's accounting, administrative and tax information.</p>
    </div>
    <div className='right'>
      <a href='/clientform'>
          <button className='flex py-[10px] px-[16px] bg-white border border-[#ebebeb] text-xl font-rubik text-[#404040] rounded items-center gap-2'>
          <img src={HistoryIcon} className='w-6 h-6  ' alt=''/>
          History of Exportables
          </button>
      </a>
    </div>
</div>
  )
}

export default Report