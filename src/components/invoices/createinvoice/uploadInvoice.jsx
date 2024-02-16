import React from 'react'

import ImportIcon from '../../../../src/assets/images/invoice/ImportIcon.svg'
const UploadInvoice = () => {
  return (
    <div className='flex justify-between border border-[#ebebeb] bg-white  rounded py-6 px-8 items-center'>
    <div className='left flex flex-col gap-2 relative'>

<div className='flex gap-2'>
<h4 className='font-lexend text-3xl mt-[-25px] font-bold leading-tight text-[#404040] mb-8'>Create Invoice</h4>
</div>
    </div>
    <div className='right'>
<button className='flex py-[10px] px-[16px] bg-[#634af9] text-white rounded items-center gap-4'>
<img src={ImportIcon} className='w-6 h-6  ' alt=''/>
Import
</button>
    </div>
</div>
  )
}

export default UploadInvoice
