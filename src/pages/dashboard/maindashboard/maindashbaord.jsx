import React from "react";
import Goodmorning from "../../../components/dashboard/goodmorning";
import Numberofordercards from "../../../components/dashboard/numberofordercards";
import Mostsoldproductscard from "../../../components/dashboard/mostsoldproductscard";
import Numberofinvoicescard from "../../../components/dashboard/numberofinvoicescard";
import Totalrevenuecard from "../../../components/dashboard/totalrevenuecard";
import Totalprofitgraph from "../../../components/dashboard/totalprofitgraph";
import Promotionalsalesgraph from "../../../components/dashboard/promotionalsalesgraph";
import Customerstatustable from "../../../components/dashboard/customerstatustable";

const Maindashbaord = () => {
  return (
    <div>
      {" "}
      <div class='p-4 sm:ml-[60px] mt-20 bg-white'>
        <div class=' '>
          <div class='mb-4'>
            <p class='text-2xl text-gray-400 '>
              <Goodmorning />
            </p>
          </div>
          <div class='grid gird-cols-1 md:grid-cols-2 gap-4 mb-4  '>
            <div class='  rounded border border-[#ebebeb]'>
              <p class='text-2xl text-gray-400 '>
                <Numberofordercards />
              </p>
            </div>
            <div class=' rounded border border-[#ebebeb]'>
              <p class='text-2xl text-gray-400 '>
                <Mostsoldproductscard />
              </p>
            </div>
          </div>
          <div class='grid gird-cols-1 md:grid-cols-2 gap-4 mb-4'>
            <div class='rounded border border-[#ebebeb]'>
              <p class='text-2xl text-gray-400 '>
                <Numberofinvoicescard />
              </p>
            </div>
            <div class='rounded border border-[#ebebeb]'>
              <p class='text-2xl text-gray-400 '>
                <Totalrevenuecard />
              </p>
            </div>
          </div>
          <div class='grid grid-cols-2 gap-4 mb-4'>
            <div class='rounded'>
              <p class='text-2xl text-gray-400 '></p>
            </div>
            <div class='rounded'>
              <p class='text-2xl text-gray-400 '></p>
            </div>
          </div>

          <div class='grid gird-cols-1 md:grid-cols-2 gap-4'>
            <div class=' w-full'>
              <p class='text-2xl text-gray-400 '>
                <Totalprofitgraph />
              </p>
            </div>
            <div class=' '>
              <p class='text-2xl text-gray-400 '>
                <Promotionalsalesgraph />
              </p>
            </div>
          </div>
          <div class='grid grid-cols-1 mt-10'>
            <div class=' w-full'>
              <p class='text-2xl text-gray-400 '>
                <Customerstatustable />
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Maindashbaord;
