import React, { useEffect, useState } from "react";
import Arrow from "../../assets/images/Arrow.svg";
import Document from "../../assets/images/File.svg";
import SearchtheDocs from "../../assets/images/Searchthedocument.svg";


function Index() {
  const [isSearchVisible, setSearchVisible] = useState(true);


  const toggleSearch = () => {
    setSearchVisible(!isSearchVisible);
  };

 

  useEffect(() => {});
  const show_search_4 = (el) => {
    document
      .getElementById("div1_search_4")
      .classList.toggle("translate-x-full");
    const setting_search_4 = document.getElementById("setting_search_4");
    if (setting_search_4.classList.contains("block")) {
      setting_search_4.classList.remove("block");
      setting_search_4.classList.add("hidden");
    } else {
      setting_search_4.classList.remove("hidden");
      setting_search_4.classList.add("block");
    }
    const close_search_4 = document.getElementById("close_search_4");
    console.log(close_search_4.classList.contains("hidden"));
    if (!close_search_4.classList.contains("hidden")) {
      close_search_4.classList.remove("block");
      close_search_4.classList.add("hidden");
    } else {
      close_search_4.classList.remove("hidden");
      close_search_4.classList.add("block");
    }
  };
  return (
    <>
      <div className='py-0 px-0 '>
        <div>
          <div className='flex bg-white w-full md:w-[400px] justify-between items-center align-middle  px-3   '>
            <div className='flex items-center align-middle  gap-2'>
              <input
                type='text'
                name
                id
                placeholder='Search page here'
                className='font-inter align-middle mb-4 mt-2 font-normal block w-full md:w-[380px] p-3 ps-10 text-base text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500  '
                onClick={toggleSearch}
              />
            </div>
            <div className id='target_search_4'>
              <div className='relative w-full'>
                <button onClick={show_search_4}>
                  <div id='close_search_4' className='hidden'></div>
                </button>
                <div className='' id='div1_search_4'></div>
              </div>
            </div>
          </div>

          {/* marked */}
          <div
            className='overflow-y-scroll h-[500px] hidden absolute w-[300px] md:w-[450px] bg-white p-4 rounded border-t boder-[#ebebeb]'
            style={{ display: isSearchVisible ? "block" : "none" }}
          >
            <div className='px-3 pt-4'>
              <div>
                <a href='/dashbaord' className='flex gap-2 my-2 items-center '>
                  <img
                    src={SearchtheDocs}
                    className='h-8 w-8 bg-[#B9F9CF] rounded  p-2 mt-1'
                    alt=''
                  />
                  <p className='text-md  text-[#404040] font-inter font-bold'>
                    Dashboard
                  </p>
                </a>
                <div>
                  <a href='/products' className='flex gap-2 items-center my-2'>
                    <img
                      src={Document}
                      className='h-8 w-8 bg-[#B9F9CF] rounded  p-2 mt-1'
                      alt=''
                    />
                    <p className='text-md  text-[#404040] font-inter font-bold'>
                      Products
                    </p>
                  </a>

                  <a
                    href='/productform'
                    className='flex gap-2 items-center my-2 ml-4'
                  >
                    <img
                      src={Arrow}
                      className='h-5 w-7  rounded  p-1 mt-1'
                      alt=''
                    />
                    <p className='text-sm  text-[#404040] font-inter font-medium'>
                      Add Products
                    </p>
                  </a>
                </div>

                <div>
                  <a href='/invoicelist' className='flex gap-2 items-center my-2'>
                    <img
                      src={Document}
                      className='h-8 w-8 bg-[#B9F9CF] rounded  p-2 mt-1'
                      alt=''
                    />
                    <p className='text-md  text-[#404040] font-inter font-bold'>
                      Invoice
                    </p>
                  </a>

                  <a
                    href='/createinvoiceform'
                    className='flex gap-2 items-center my-2 ml-4'
                  >
                    <img
                      src={Arrow}
                      className='h-5 w-7  rounded  p-1 mt-1'
                      alt=''
                    />
                    <p className='text-sm  text-[#404040] font-inter font-medium'>
                      Add Invoice
                    </p>
                  </a>
                </div>

                <div>
                  <a href='/suppliers' className='flex gap-2 items-center my-2'>
                    <img
                      src={Document}
                      className='h-8 w-8 bg-[#B9F9CF] rounded  p-2 mt-1'
                      alt=''
                    />
                    <p className='text-md  text-[#404040] font-inter font-bold'>
                      Suppliers
                    </p>
                  </a>

                  <a
                    href='/supplierform'
                    className='flex gap-2 items-center my-2 ml-4'
                  >
                    <img
                      src={Arrow}
                      className='h-5 w-7  rounded  p-1 mt-1'
                      alt=''
                    />
                    <p className='text-sm  text-[#404040] font-inter font-medium'>
                      Add Supplier
                    </p>
                  </a>

                  <a
                    href='/purchaseorder'
                    className='flex gap-2 items-center my-2 ml-4'
                  >
                    <img
                      src={Arrow}
                      className='h-5 w-7  rounded  p-1 mt-1'
                      alt=''
                    />
                    <p className='text-sm  text-[#404040] font-inter font-medium'>
                      Purchase Orders
                    </p>
                  </a>
                </div>

                <div>
                  <a href='/reports' className='flex gap-2 items-center my-2'>
                    <img
                      src={Document}
                      className='h-8 w-8 bg-[#B9F9CF] rounded  p-2 mt-1'
                      alt=''
                    />
                    <p className='text-md  text-[#404040] font-inter font-bold'>
                      Reports
                    </p>
                  </a>
                </div>
                <div>
                  <a href='/inventory' className='flex gap-2 items-center my-2'>
                    <img
                      src={Document}
                      className='h-8 w-8 bg-[#B9F9CF] rounded  p-2 mt-1'
                      alt=''
                    />
                    <p className='text-md  text-[#404040] font-inter font-bold'>
                      Inventory
                    </p>
                  </a>
                  <a
                    href='/inventoryform'
                    className='flex gap-2 items-center my-2 ml-4'
                  >
                    <img
                      src={Arrow}
                      className='h-5 w-7  rounded  p-1 mt-1'
                      alt=''
                    />
                    <p className='text-sm  text-[#404040] font-inter font-medium'>
                      Add Inventory
                    </p>
                  </a>
                </div>

                <div>
                  <a href='/clients' className='flex gap-2 items-center my-2'>
                    <img
                      src={Document}
                      className='h-8 w-8 bg-[#B9F9CF] rounded  p-2 mt-1'
                      alt=''
                    />
                    <p className='text-md  text-[#404040] font-inter font-bold'>
                      Clients
                    </p>
                  </a>

                  <a
                    href='/clientform'
                    className='flex gap-2 items-center my-2 ml-4'
                  >
                    <img
                      src={Arrow}
                      className='h-5 w-7  rounded  p-1 mt-1'
                      alt=''
                    />
                    <p className='text-sm  text-[#404040] font-inter font-medium'>
                      Add Clients
                    </p>
                  </a>
                </div>

                <div>
                  <a href='/orders' className='flex gap-2 items-center my-2'>
                    <img
                      src={Document}
                      className='h-8 w-8 bg-[#B9F9CF] rounded  p-2 mt-1'
                      alt=''
                    />
                    <p className='text-md  text-[#404040] font-inter font-bold'>
                      Orders
                    </p>
                  </a>

                  <a
                    href='/orderform'
                    className='flex gap-2 items-center my-2 ml-4'
                  >
                    <img
                      src={Arrow}
                      className='h-5 w-7  rounded  p-1 mt-1'
                      alt=''
                    />
                    <p className='text-sm  text-[#404040] font-inter font-medium'>
                      Add Orders
                    </p>
                  </a>
                </div>

                <div>
                  <a href='/quotes' className='flex gap-2 items-center my-2'>
                    <img
                      src={Document}
                      className='h-8 w-8 bg-[#B9F9CF] rounded  p-2 mt-1'
                      alt=''
                    />
                    <p className='text-md  text-[#404040] font-inter font-bold'>
                      Quotes
                    </p>
                  </a>

                  <a
                    href='/quoteform'
                    className='flex gap-2 items-center my-2 ml-4'
                  >
                    <img
                      src={Arrow}
                      className='h-5 w-7  rounded  p-1 mt-1'
                      alt=''
                    />
                    <p className='text-sm  text-[#404040] font-inter font-medium'>
                      Add Quotes
                    </p>
                  </a>
                </div>

                <div>
                  <a href='#' className='flex gap-2 items-center my-2'>
                    <img
                      src={Document}
                      className='h-8 w-8 bg-[#B9F9CF] rounded  p-2 mt-1'
                      alt=''
                    />
                    <p className='text-md  text-[#404040] font-inter font-bold'>
                      Options
                    </p>
                  </a>

                  <a
                    href='/vendor'
                    className='flex gap-2 items-center my-2 ml-4'
                  >
                    <img
                      src={Arrow}
                      className='h-5 w-7  rounded  p-1 mt-1'
                      alt=''
                    />
                    <p className='text-sm  text-[#404040] font-inter font-medium'>
                      Vendor
                    </p>
                  </a>
                  <a
                    href='/companydata'
                    className='flex gap-2 items-center my-2 ml-4'
                  >
                    <img
                      src={Arrow}
                      className='h-5 w-7  rounded  p-1 mt-1'
                      alt=''
                    />
                    <p className='text-sm  text-[#404040] font-inter font-medium'>
                      Company data
                    </p>
                  </a>
                </div>

                <a href='/profile' className='flex gap-2 items-center my-2'>
                  <img
                    src={Document}
                    className='h-8 w-8 bg-[#B9F9CF] rounded  p-2 mt-1'
                    alt=''
                  />
                  <p className='text-md  text-[#404040] font-inter font-bold'>
                    Profile
                  </p>
                </a>
                <div className='flex pt-5 gap-3'>
                  <div className='items-center'>
                    <img
                      src='https://tuk-cdn.s3.amazonaws.com/can-uploader/Mask%20Group.png'
                      alt
                    />
                  </div>
                  <div>
                    <p className='text-xs font-medium text-gray-800 font-inter'>
                      Anglisa
                    </p>
                    <p className='text-xs text-gray-600 pt-0.5 w-[150px] font-inter'>
                      anglisa@cirfas.com
                    </p>
                  </div>
                </div>
                <div className='flex pt-5 gap-3'>
                  <div className>
                    <img
                      src='https://tuk-cdn.s3.amazonaws.com/can-uploader/2.png'
                      alt
                    />
                  </div>
                  <div>
                    <p className='text-xs font-medium text-gray-800 font-inter'>
                      Frankie Streich
                    </p>
                    <p className='text-xs text-gray-600 pt-0.5  w-[150px] font-inter'>
                      Global Research Designer
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>
        {`
  ::-webkit-scrollbar {
    width: 5px;
  }
  ::-webkit-scrollbar-track {
    background: #f1f1f1;
    border-radius: 20px;
  }
  ::-webkit-scrollbar-thumb {
    background: #e0e7ff;
    border-radius: 20px;
  }
  input:checked ~ .dot_search_4{
    transform: translateX(100%);
    background-color: #ffffff;
  }
  input:checked ~ .bg_search_4 {
    background-color: #4338ca;
  }

  input:checked ~ .dot1_search_4 {
    transform: translateX(100%);
    background-color: #ffffff;
  }
  input:checked ~ .bg1 {
    background-color: #4338ca;
  }

  input:checked ~ .dot2_search_4 {
    transform: translateX(100%);
    background-color: #ffffff;
  }
  input:checked ~ .bg2_search_4 {
    background-color: #4338ca;
  }

  input:checked ~ .dot3_search_4 {
    transform: translateX(100%);
    background-color: #ffffff;
  }
  input:checked ~ .bg3_search_4 {
    background-color: #4338ca;
  }

  input:checked ~ .dot4_search_4 {
    transform: translateX(100%);
    background-color: #ffffff;
  }
  input:checked ~ .bg4_search_4 {
    background-color: #4338ca;
  }
  input:checked ~ .dot5_search_4 {
    transform: translateX(100%);
    background-color: #ffffff;
  }
  input:checked ~ .bg5_search_4 {
    background-color: #4338ca;
  }
`}
      </style>
    </>
  );
}

export default Index;
