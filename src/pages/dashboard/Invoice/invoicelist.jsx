import React from 'react'
import Invoicelistbtnbar from '../../../components/invoices/invoicelist/invoicelistbtnbar'
import Invoicelisttable from '../../../components/invoices/invoicelist/invoicelisttable'




const Invoicelist = () => {
  return (
    <div>
       <div>
      {" "}
      <div class=" sm:ml-14 mt-4 bg-[#ebebeb]">
        
        <div class=" border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-20 ">
        <div class="mb-4">
            <p class="text-2xl text-gray-400 dark:text-gray-500">
              <Invoicelistbtnbar/>
            </p>
          </div>
          <div class="mb-4 px-4">
            <p class="text-2xl text-gray-400 dark:text-gray-500">
              <Invoicelisttable/>
            </p>
          </div>
          {/* <div class="grid grid-cols-1 gap-4 mb-4 px-4">
          
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
          </div> */}
        
        </div>
      </div>
    </div>
    </div>
  )
}

export default Invoicelist
