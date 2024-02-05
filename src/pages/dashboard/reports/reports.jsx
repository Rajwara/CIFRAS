import React from 'react'
import Report from '../../../components/reports/report'
import Reportgallery from '../../../components/reports/reportgallery'

const Reports = () => {
  return (
    <div>
    <div class=" mt-20 ml-[60px]">
     <p class="">
        <Report/>
     </p>
   </div>
    <div class="p-4 sm:ml-[62px] bg-white">

 <div class="  mt-10">
  
   <div class="grid grid-cols-1 -mt-10 mb-4 ">
     <div class=" rounded">
       <p class="text-2xl text-gray-400 dark:text-gray-500">
     <Reportgallery/>
       </p>
     </div>
   
   </div>
 </div>
</div>
 </div>
  )
}

export default Reports