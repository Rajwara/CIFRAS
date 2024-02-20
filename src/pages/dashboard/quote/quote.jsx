import React from "react";
import Quoteadd from "../../../components/quote/quoteadd";
import Quotetabledata from "../../../components/quote/quotetabledata";

const Quote = () => {
  return (
    <div>
      <div class=' mt-20 md:ml-[60px]'>
        <p class='text-2xl text-gray-400 '>
          <Quoteadd />
        </p>
      </div>
      <div class='sm:ml-[62px] bg-white p-4'>
        <div class=' mt-14'>
          <div class='grid grid-cols-1 -mt-10 mb-4 '>
            <div class=' rounded'>
              <p class='text-2xl text-gray-400 '>
                <Quotetabledata />
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quote;
