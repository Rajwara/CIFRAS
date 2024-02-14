import React from 'react'
import Print from "../../../assets/images/printicon.svg"
import Download from "../../../assets/images/downloadarrow.svg"

const Firstinvoice = () => {
  return (
    <div className='flex justify-between border border-[#ebebeb] bg-white   py-8 px-10 items-center'>
    <div className='left flex flex-col gap-2 relative'>
        <h2 className='font-lexend font-bold text-[#404040] text-4xl leading-9'>Invoice Details</h2>
    </div>
    <div className='right flex gap-4'>
     
          <button className='flex py-[10px] text-[20px] px-[16px] bg-white text-[#404040] border border-[#c0c0c0] rounded items-center gap-2 font-lexend'>
          <img src={Print} className='w-6 h-6  ' alt=''/>
          Print
          </button>
          <button className='flex py-[10px] px-[16px] bg-[#634af9] text-white rounded items-center gap-2 text-[20px] font-lexend'>
          <img src={Download} className='w-6 h-6  ' alt=''/>
          Download
          </button>

    </div>
</div> 
  )
}

export default Firstinvoice