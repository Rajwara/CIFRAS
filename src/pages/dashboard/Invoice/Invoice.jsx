import React from 'react'
import Goodmorning from "../../../components/dashboard/goodmorning";
import Numberofordercards from "../../../components/dashboard/numberofordercards";
import Mostsoldproductscard from "../../../components/dashboard/mostsoldproductscard";
import Numberofinvoicescard from "../../../components/dashboard/numberofinvoicescard";
import Totalrevenuecard from "../../../components/dashboard/totalrevenuecard";
import Totalprofitgraph from "../../../components/dashboard/totalprofitgraph";
import Promotionalsalesgraph from "../../../components/dashboard/promotionalsalesgraph";
import Customerstatustable from "../../../components/dashboard/customerstatustable";
import UploadInvoice from '../../../components/invoices/uploadInvoice';
import Invoiceform from '../../../components/invoices/invoiceform';
import Submitinvoice from '../../../components/invoices/submitinvoice';





const Invoice = () => {
  return (
    <div>
       <div>
      {" "}
      <div class=" sm:ml-14 mt-4 bg-[#ebebeb]">
        
        <div class=" border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-20 ">
        <div class="mb-4">
            <p class="text-2xl text-gray-400 dark:text-gray-500">
              <UploadInvoice />
            </p>
          </div>
          <div class="grid grid-cols-1 gap-4 mb-4 px-4">
          
            <div class="rounded">
              <p class="text-2xl text-gray-400 dark:text-gray-500">
                <Invoiceform />
              </p>
            </div>
          </div>
          <div class="mb-4">
            <p class="text-2xl text-gray-400 dark:text-gray-500">
              <Submitinvoice />
            </p>
          </div>
          {/* <div class="grid grid-cols-2 gap-4 mb-4">
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
                <Customerstatustable />
              </p>
            </div>
          </div> */}
        </div>
      </div>
    </div>
    </div>
  )
}

export default Invoice