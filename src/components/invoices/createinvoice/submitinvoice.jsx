import React from 'react'

const Submitinvoice = () => {
  return (
    <div className=' justify-between border border-[#ebebeb] bg-white  rounded py-6 px-8 items-center'>
      <div className='flex gap-6 justify-end'>
        <button className=' font-normal text-xl bg-[#fff] text-[#404040] border border-[#ebebeb] rounded-md font-inter py-3 px-5'>Save as Draft</button>
        <button className='font-normal text-xl bg-[#634AF9] text-[#fff] rounded-md font-inter py-3 px-5'>Create Invoice</button>
      </div>
    </div>
  )
}

export default Submitinvoice
