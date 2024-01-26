import React from "react";
import Logo from "../../../assets/images/sitelogocolored.png";
import profileImg from "../../../assets/images/dashboard/john.svg";
import DashboardSideIcon from "../../../assets/images/dashboard/dashboard.svg";
import ProductManagementIcon from "../../../assets/images/dashboard/productManagement.svg";
import QuotesGenerationIcon from "../../../assets/images/dashboard/quotesgeneration.svg";
import InvoiceGenerationIcon from "../../../assets/images/dashboard/invoicegeneration.svg";
import ElectronicBillingIcon from "../../../assets/images/dashboard/electronicbilling.svg";
import NotificationIcon from "../../../assets/images/dashboard/notification_icon.svg";


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
              <div class="flex items-center ms-3 w-[40%]">
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
                        href="#"
                        class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white font-rubik"
                        role="menuitem"
                      >
                        Dashboard
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
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
        class=" min-h-screen w-[3.85rem] overflow-hidden  hover:w-1/6 hover:bg-white hover:shadow-lg  fixed top-0 left-0 z-40 h-screen pt-24 transition-transform -translate-x-full bg-white border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700"
        aria-label="Sidebar"
      >
        <div class=" h-full px-3 pb-4 overflow-y-auto bg-white dark:bg-gray-800">
          <ul class="space-y-2 font-medium">
            <li>
              <a href="/dashbaord" class="flex items-center p-2 mt-5 group">
                <img src={DashboardSideIcon} alt="DashboardSideIcon" className="w-7 h-7" />
                <span class="ms-5 font-rubik text-base font-normal leading-5">
                  Dashboard
                </span>
              </a>
            </li>
            <li>
              <a href="/productmanger" class="flex items-center p-2 mt-5 group">
                <img src={ProductManagementIcon} alt="" className="w-7 h-7"/>
                <span class="flex-1 ms-5 whitespace-nowrap font-rubik text-base font-normal leading-5">
                  Product Management
                </span>
              </a>
            </li>
            <li>
              <a href="#" class="flex items-center p-2 group mt-5">
                <img src={QuotesGenerationIcon} alt="" className="w-7 h-7"/>
                <span class="flex-1 ms-5 whitespace-nowrap font-rubik text-base font-normal leading-5">
                  Quotes Generation
                </span>
              </a>
            </li>
            <li>
              <a href="/invoice" class="flex items-center p-2 group mt-5">
                <img src={InvoiceGenerationIcon} alt="" className="w-7 h-7"/>
                <span class="flex-1 ms-5 whitespace-nowrap font-rubik text-base font-normal leading-5">
                  Invoice Generation
                </span>
              </a>
            </li>
            <li>
              <a href="#" class="flex items-center p-2 group mt-5">
                <img src={ElectronicBillingIcon} alt="" className="w-7 h-7"/>
                <span class="flex-1 ms-5 whitespace-nowrap font-rubik text-base font-normal leading-5">
                  Electronic Billing
                </span>
              </a>
            </li>
          </ul>
        </div>

      </aside>

     
    </div>
  );
};

export default Navandsidebar;
