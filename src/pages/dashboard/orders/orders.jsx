import React from "react";
import Addorder from "../../../components/orders/addorder";
import Ordertable from "../../../components/orders/orderlist/ordertable";

const Orders = () => {
  return (
    <div className=''>
      <div class=' mt-20 md:ml-[60px]'>
        <p class='text-2xl text-gray-400 '>
          <Addorder />
        </p>
      </div>
      <div class='p-4 sm:ml-[62px] bg-white'>
        <div class=' mt-14'>
          <div class='grid grid-cols-1 -mt-10 mb-4'>
            <div class=' rounded '>
              <p class='text-2xl text-gray-400  '>
                <Ordertable />
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Orders;
