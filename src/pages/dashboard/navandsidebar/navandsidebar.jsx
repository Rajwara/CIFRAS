import React from "react";
import Logo from "../../../assets/images/sitelogocolored.png";
import profileImg from "../../../assets/images/dashboard/john.svg";
import DashboardSideIcon from "../../../assets/images/dashboard/dashboard.svg";
import QuotesGenerationIcon from "../../../assets/images/dashboard/quotesgeneration.svg";
import InvoiceGenerationIcon from "../../../assets/images/dashboard/invoicegeneration.svg";
import NotificationIcon from "../../../assets/images/dashboard/notification_icon.svg";
import FacturaElectroncia from "../../../assets/images/dashboard/FacturaElectroncia.svg";
import dropdownIcon from "../../../assets/images/dashboard/dropdownIcon.svg";
import ProductsidebarIcon from "../../../assets/images/dashboard/ProductsidebarIcon.svg";
import SupplierIcon from "../../../assets/images/dashboard/SupplierIcon.svg";
import ReportsIcon from "../../../assets/images/dashboard/ReportsIcon.svg";
import InventoryIcon from "../../../assets/images/dashboard/InventoryIcon.svg";
import ClientIcon from "../../../assets/images/dashboard/ClientIconside.svg";
import OrderIcon from "../../../assets/images/dashboard/OrderIcon.svg";
import OptionsIcon from "../../../assets/images/dashboard/OptionsIcon.svg";






const Navandsidebar = () => {
  document.addEventListener("DOMContentLoaded", function () {
    const dropdownToggle = document.querySelector("[data-dropdown-toggle]");
    const dropdownTarget = document.querySelector("[data-drawer-target]");

    dropdownToggle.addEventListener("click", function () {
      dropdownTarget.classList.toggle("hidden");
    });
  });

  return (
    <div>
      <nav class="fixed top-0 z-50 w-full bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
        <div class="px-3 py-3 lg:px-5 lg:pl-3">
          <div class="flex items-center justify-between">
            <div class="flex items-center justify-start rtl:justify-end">
              <button
                data-drawer-target="logo-sidebar"
                data-drawer-toggle="logo-sidebar"
                aria-controls="logo-sidebar"
                type="button"
                class="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              >
                <span class="sr-only">Open sidebar</span>
                <svg
                  class="w-6 h-6"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    clip-rule="evenodd"
                    fill-rule="evenodd"
                    d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
                  ></path>
                </svg>
              </button>
              <a href="/" class="flex ms-2 md:me-24">
                <img src={Logo} class="w-[25%]" alt="Logo" />
              </a>
            </div>

            <div class="flex items-center w-[30%] gap-6 ">
              <div className="w-full mr-10">
                <label
                  for="default-search"
                  class="leading-4 text-base font-medium text-gray-900 sr-only dark:text-white font-rubik"
                >
                  Search
                </label>
                <div class="relative">
                  <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                    <svg
                      class="w-4 h-4 text-gray-500 dark:text-gray-400"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 20 20"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                      />
                    </svg>
                  </div>
                  <input
                    type="search"
                    id="default-search"
                    class="font-rubik font-normal block w-full p-3 ps-10 text-base text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Search Your Page..."
                    required
                  />
                  {/* <button type="submit" class=" leading-4 text-base font-medium text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg px-4 py-2  dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button> */}
                </div>
              </div>
              <div className="flex ">
                <img src={NotificationIcon} alt="NotificationIcon" />
                <span class="inline-flex items-center justify-center w-4 h-4 ms-2 text-xs font-normal text-[#FF3D00] font-rubik ">
                  2*
                </span>
              </div>
              <div class="flex items-center ms-3 w-[60%]">
                <div className="flex gap-2 items-center">
                  <button
                    type="button"
                    class="flex text-sm rounded-full focus:ring-4 "
                    aria-expanded="false"
                    data-dropdown-toggle="dropdown-user"
                  >
                    {/* <span class="sr-only font-rubik">Open user menu</span> */}
                    <img
                      class="w-full h-[100%]   rounded-full"
                      src={profileImg}
                      alt="user photo"
                    />
                  </button>
                  <h1 class=" font-rubik font-normal text-base text-[#404040]">
                    John Doe
                  </h1>
                </div>
                <div
                  class="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded shadow dark:bg-gray-700 dark:divide-gray-600"
                  id="dropdown-user"
                >
                  <div class="px-4 py-3" role="none">
                    <p
                      class="text-sm text-gray-900 dark:text-white font-rubik"
                      role="none"
                    >
                      Neil Sims
                    </p>
                    <p
                      class="text-sm font-medium text-gray-900 truncate dark:text-gray-300 font-rubik"
                      role="none"
                    >
                      neil.sims@flowbite.com
                    </p>
                  </div>
                  <ul class="py-1" role="none">
                    <li>
                      <a
                        href="/profile"
                        class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white font-rubik"
                        role="menuitem"
                      >
                        Profile
                      </a>
                    </li>
                    <li>
                      <a
                        href="/dashbaord"
                        class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white font-rubik"
                        role="menuitem"
                      >
                        Dashboard
                      </a>
                    </li>
                    <li>
                      <a
                        href="/settings"
                        class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white font-rubik"
                        role="menuitem"
                      >
                        Settings
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white font-rubik"
                        role="menuitem"
                      >
                        Earnings
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white font-rubik"
                        role="menuitem"
                      >
                        Sign out
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <aside
        id="logo-sidebar"
        class=" min-h-screen w-[3.85rem] overflow-hidden hover:w-[50%] md:hover:w-[32%] lg:hover:w-[25%]  xl:hover:w-1/6 hover:bg-white hover:shadow-lg  fixed top-0 left-0 z-40 h-full pt-24 transition-transform -translate-x-full bg-white border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700
  "
        aria-label="Sidebar"
      >
        <div class=" h-full px-3 pb-4 overflow-y-auto bg-white dark:bg-gray-800">
          <ul class="space-y-2 font-medium">
            <li>
              <a href="/dashbaord" class="flex items-center p-2 mt-5 group">
                <img
                  src={DashboardSideIcon}
                  alt="DashboardSideIcon"
                  className="w-7 h-7"
                />
                <span class="ms-5 font-rubik text-base font-normal leading-5">
                  Dashboard
                </span>
              </a>
            </li>


            <li>
            <button type="button" class="flex font-rubik items-center w-full p-2 text-base text-[#404040] transition duration-75 rounded-lg group hover:bg-gray-100 " aria-controls="dropdown-example" data-collapse-toggle="dropdown-example">

                  <img src={FacturaElectroncia} alt="" />
                  <span class="flex-1 ms-3 text-left rtl:text-right whitespace-nowrap font-rubik items-center w-full p-2 text-base text-[#404040] font-normal">Factura Electroncia</span>
                  <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                     <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
                  </svg>
            </button>
            <ul id="dropdown-example" class="hidden py-2 space-y-2">




                  <li className="flex hover:bg-gray-100 ml-12">
                <img src={dropdownIcon} alt="" />
                     <a href="/invoicedetails" class="flex items-center w-full p-2  transition duration-75 rounded-lg pl-6 group font-rubik font-normal">Electronic Biling</a>
                  </li>
               
            </ul>
         </li>


         

            <li>
              <a href="/products" class="flex items-center p-2 mt-5 group">
                <img src={ProductsidebarIcon} alt="" className="w-7 h-7" />
                <span class="flex-1 ms-5 whitespace-nowrap font-rubik text-base font-normal leading-5">
                  Products
                </span>
              </a>
            </li>

            <li>
              <a href="/invoicelist" class="flex items-center p-2 group mt-5">
                <img src={InvoiceGenerationIcon} alt="" className="w-7 h-7" />
                <span class="flex-1 ms-5 whitespace-nowrap font-rubik text-base font-normal leading-5">
                  Invoice 
                </span>
              </a>
            </li>

            

         
            
            <li>
           <a href="/suppliers">
           <button type="button" class="flex font-rubik items-center w-full p-2 text-base text-[#404040] transition duration-100 rounded-lg group hover:bg-gray-100 " aria-controls="dropdown-examp" data-collapse-toggle="dropdown-examp">

<img src={SupplierIcon} alt="" />
<span class="flex-1 ms-3 text-left rtl:text-right whitespace-nowrap font-rubik items-center w-full p-2 text-base text-[#404040] font-normal">Suppliers</span>
<svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
   <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
</svg>
</button>
           </a>
            <ul id="dropdown-examp" class="hidden py-2 space-y-2">




                  <li className="flex hover:bg-gray-100 ml-12">
                <img src={dropdownIcon} alt="" />
                     <a href="#" class="flex items-center w-full p-2  transition duration-75 rounded-lg pl-6 group font-rubik font-normal">Purchase Orders</a>
                  </li>

                  <li className="flex hover:bg-gray-100 ml-12">
                <img src={dropdownIcon} alt="" />
                     <a href="#" class="flex items-center w-full p-2  transition duration-75 rounded-lg pl-6 group font-rubik font-normal">Quotes</a>
                  </li>
               
            </ul>
         </li>
       


          <li>
              <a href="/reports" class="flex items-center p-2 group mt-5">
                <img src={ReportsIcon} alt="" className="w-7 h-7" />
                <span class="flex-1 ms-5 whitespace-nowrap font-rubik text-base font-normal leading-5">
                Reports
                </span>
              </a>
            </li>

            <li>
              <a href="/quote" class="flex items-center p-2 group mt-5">
                <img src={InventoryIcon} alt="" className="w-7 h-7" />
                <span class="flex-1 ms-5 whitespace-nowrap font-rubik text-base font-normal leading-5">
                Inventory
                </span>
              </a>
            </li>



            <li>
              <a href="/clients" class="flex items-center p-2 group mt-5">
                <img src={ClientIcon} alt="" className="w-7 h-7" />
                <span class="flex-1 ms-5 whitespace-nowrap font-rubik text-base font-normal leading-5">
                Clients
                </span>
              </a>
            </li>

            
            <li>
              <a href="/orders" class="flex items-center p-2 group mt-5">
                <img src={OrderIcon} alt="" className="w-7 h-7" />
                <span class="flex-1 ms-5 whitespace-nowrap font-rubik text-base font-normal leading-5">
                  Orders
                </span>
              </a>
            </li>

            <li>
              <a href="/quotes" class="flex items-center p-2 group mt-5">
                <img src={QuotesGenerationIcon} alt="" className="w-7 h-7" />
                <span class="flex-1 ms-5 whitespace-nowrap font-rubik text-base font-normal leading-5">
                Quotes
                </span>
              </a>
            </li>

       


            <li>
            <button type="button" class="flex font-rubik items-center w-full p-2 text-base text-[#404040] transition duration-75 rounded-lg group hover:bg-gray-100 " aria-controls="dropdown-ex" data-collapse-toggle="dropdown-ex">

                  <img src={OptionsIcon} alt="" />
                  <span class="flex-1 ms-3 text-left rtl:text-right whitespace-nowrap font-rubik items-center w-full p-2 text-base text-[#404040] font-normal">Options</span>
                  <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                     <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
                  </svg>
            </button>
            <ul id="dropdown-ex" class="hidden py-2 space-y-2">




                  <li className="flex hover:bg-gray-100 ml-12">
                <img src={dropdownIcon} alt="" />
                     <a href="/vendor" class="flex items-center w-full p-2  transition duration-75 rounded-lg pl-6 group font-rubik font-normal">Vendor</a>
                  </li>

                  <li className="flex hover:bg-gray-100 ml-12">
                <img src={dropdownIcon} alt="" />
                     <a href="/companydata" class="flex items-center w-full p-2  transition duration-75 rounded-lg pl-6 group font-rubik font-normal">Company Data</a>
                  </li>
               
            </ul>
         </li>


            
            
          </ul>
        </div>
      </aside>
    </div>
  );
};

export default Navandsidebar;
