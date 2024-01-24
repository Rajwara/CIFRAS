import React from 'react'
import Goodmorning from "../../../components/dashboard/goodmorning";
import Numberofordercards from "../../../components/dashboard/numberofordercards";
import Mostsoldproductscard from "../../../components/dashboard/mostsoldproductscard";
import Numberofinvoicescard from "../../../components/dashboard/numberofinvoicescard";
import Totalrevenuecard from "../../../components/dashboard/totalrevenuecard";
import Totalprofitgraph from "../../../components/dashboard/totalprofitgraph";
import Promotionalsalesgraph from "../../../components/dashboard/promotionalsalesgraph";
import Customerstatustable from '../../../components/dashboard/customerstatustable';







const Maindashbaord = () => {
  return (
    <div> <div class="p-4 sm:ml-14 mt-4 bg-[#ebebeb]">
    <div class=" border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-14">
      <div class="mb-4">
        <p class="text-2xl text-gray-400 dark:text-gray-500">
          <Goodmorning />
        </p>
      </div>
      <div class="grid grid-cols-2 gap-4 mb-4">
        <div class=" rounded ">
          <p class="text-2xl text-gray-400 dark:text-gray-500">
            <Numberofordercards />
          </p>
        </div>
        <div class="rounded">
          <p class="text-2xl text-gray-400 dark:text-gray-500">
            <Mostsoldproductscard />
          </p>
        </div>
      </div>
      <div class="grid grid-cols-2 gap-4 mb-4">
        <div class="rounded">
          <p class="text-2xl text-gray-400 dark:text-gray-500">
            <Numberofinvoicescard />
          </p>
        </div>
        <div class="rounded">
          <p class="text-2xl text-gray-400 dark:text-gray-500">
            <Totalrevenuecard />
          </p>
        </div>
      </div>
      <div class="grid grid-cols-2 gap-4 mb-4">
        <div class="rounded">
          <p class="text-2xl text-gray-400 dark:text-gray-500"></p>
        </div>
        <div class="rounded">
          <p class="text-2xl text-gray-400 dark:text-gray-500"></p>
        </div>
      </div>
      
      <div class="grid grid-cols-2 gap-4">
        <div class=" w-full">
          <p class="text-2xl text-gray-400 dark:text-gray-500">
            <Totalprofitgraph />
          </p>
        </div>
        <div class=" ">
          <p class="text-2xl text-gray-400 dark:text-gray-500">
            <Promotionalsalesgraph />
          </p>
        </div>
       
       
      </div>
      <div class="grid grid-cols-1 mt-10">
        <div class=" w-full">
          <p class="text-2xl text-gray-400 dark:text-gray-500">
          <Customerstatustable/>
          </p>
        </div>
      
       
       
      </div>
     
    </div>
  </div></div>
  )
}

export default Maindashbaord