import React from 'react'
import Invoicelistbtnbar from '../../../components/invoices/invoicelist/invoicelistbtnbar'
import Invoicelisttable from '../../../components/invoices/invoicelist/invoicelisttable'




const Invoicelist = () => {
  return (
    <div>
       <div>
      {" "}
      <div class=" sm:ml-14 mt-4 bg-white">
        
        <div class=" mt-20 ">
        <div class="mb-4">
            <p class="text-2xl text-gray-400 ">
              <Invoicelistbtnbar/>
            </p>
          </div>
          
          <div class="mb-4 px-4">
            <p class="text-2xl text-gray-400 ">
              <Invoicelisttable/>
            </p>
          </div>
     
        
        </div>
      </div>
    </div>
    </div>
  )
}

export default Invoicelist
