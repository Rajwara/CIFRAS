import React from 'react'
import Supplieradd from '../../../components/suppliers/supplieradd'
import Suppliertable from '../../../components/suppliers/supplierlist/suppliertable'


const Suppliers = () => {
  return (
    <div className=''>
        <div class=" mt-20 ml-[60px]">
            <p class="text-2xl text-gray-400 ">
                <Supplieradd/>
            </p>
        </div>
        <div class="p-4 sm:ml-[62px] bg-white">
        <div class="  mt-14">
            <div class="grid grid-cols-1 -mt-10 mb-4">
                <div class=" rounded ">
                    <p class="text-2xl text-gray-400  ">
                        <Suppliertable/>
                    </p>
                </div>
            </div>
        </div>
    </div>
 </div>
  )
}

export default Suppliers