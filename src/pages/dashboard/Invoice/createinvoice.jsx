import React from 'react'

import UploadInvoice from '../../../components/invoices/createinvoice/uploadInvoice';
import Invoiceform from '../../../components/invoices/createinvoice/invoiceform';
import Submitinvoice from '../../../components/invoices/createinvoice/submitinvoice';





const Createinvoice = () => {
  return (
    <div>
       <div>
      {" "}
      <div class=" sm:ml-14 mt-4 bg-white">
        
        <div class="  mt-20 ">
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
        
        </div>
      </div>
    </div>
    </div>
  )
}

export default Createinvoice