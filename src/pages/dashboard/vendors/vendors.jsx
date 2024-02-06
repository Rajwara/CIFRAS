import React from 'react'
import Vendortable from '../../../components/vendors/vendorlist/vendortable'
import Vendoradd from '../../../components/vendors/vendoradd'

const Vendors = () => {
  return (
    <div className=''>
        <div class=" mt-20 ml-[60px]">
            <p class="text-2xl text-gray-400 ">
            <Vendoradd/>
            </p>
        </div>
        <div class="p-4 sm:ml-[62px] bg-white">
        <div class="  mt-14">
            <div class="grid grid-cols-1 -mt-10 mb-4">
                <div class=" rounded ">
                    <p class="text-2xl text-gray-400  ">
                        <Vendortable/>
                    </p>
                </div>
            </div>
        </div>
    </div>
 </div>
  )
}

export default Vendors