import React from 'react'
import Forminvoice from './forminvoice'
import Firstinvoice from './firstinvoice'
const invoicedetails = () => {
  return (
    <div className=''>
    <div class=" mt-20 ml-[60px]">
     <p class="text-2xl text-gray-400 dark:text-gray-500">
       <Firstinvoice/>
     </p>
   </div>
    <div class="p-4 sm:ml-[62px] bg-white">

 <div class="  mt-14">
  
   <div class="grid grid-cols-1 -mt-10 mb-4">
     <div class=" rounded ">
       <p class="text-2xl text-gray-400 dark:text-gray-500 ">
         <Forminvoice />
       </p>
     </div>
   
   </div>

 </div>
</div>
 </div>
  )
}

export default invoicedetails
