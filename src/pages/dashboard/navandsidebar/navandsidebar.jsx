import React, { useState, useEffect, useRef } from "react";
import Logo from "../../../assets/images/sitelogocolored.png";
import profileImg from "../../../assets/images/dashboard/john.svg";
import DashboardSideIcon from "../../../assets/images/dashboard/dashboard.svg";
import QuotesGenerationIcon from "../../../assets/images/dashboard/quotesgeneration.svg";
import InvoiceGenerationIcon from "../../../assets/images/dashboard/invoicegeneration.svg";
import NotificationIcon from "../../../assets/images/notificationicon.svg";
import DownArrow from "../../../assets/images/downarrow.svg";

import FacturaElectroncia from "../../../assets/images/dashboard/FacturaElectroncia.svg";
import dropdownIcon from "../../../assets/images/dashboard/dropdownIcon.svg";
import ProductsidebarIcon from "../../../assets/images/dashboard/ProductsidebarIcon.svg";
import SupplierIcon from "../../../assets/images/dashboard/SupplierIcon.svg";
import ReportsIcon from "../../../assets/images/dashboard/ReportsIcon.svg";
import InventoryIcon from "../../../assets/images/dashboard/InventoryIcon.svg";
import ClientIcon from "../../../assets/images/dashboard/ClientIconside.svg";
import OrderIcon from "../../../assets/images/dashboard/OrderIcon.svg";
import OptionsIcon from "../../../assets/images/dashboard/OptionsIcon.svg";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../../redux/reducers/UserSlice";
import Searchbar from "../../../components/searchbar/searchbar"
import LogoOnly from "../../../assets/images/logoonly.png"







const Navandsidebar = () => {
  const [isSearchVisible, setSearchVisible] = useState(false);

  const toggleSearch = () => {
    setSearchVisible(!isSearchVisible);
  };
 
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isLogin = useSelector((state) => state.auth.isLogin);
  const user = useSelector((state) => state.auth.user);

  //for side logo code
  const [isHovered, setIsHovered] = useState(false);
  useEffect(() => {
    const handleHover = () => {
      setIsHovered(true);
    };
    const handleLeave = () => {
      setIsHovered(false);
    };
    const logoSidebar = document.getElementById("logo-sidebar");
    if (logoSidebar) {
      logoSidebar.addEventListener("mouseenter", handleHover);
      logoSidebar.addEventListener("mouseleave", handleLeave);
    }
    return () => {
      if (logoSidebar) {
        logoSidebar.removeEventListener("mouseenter", handleHover);
        logoSidebar.removeEventListener("mouseleave", handleLeave);
      }
    };
  }, []);


  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const closeDropdown = () => {
    setIsDropdownOpen(false);
  };

  const logouthandle = () => {
    navigate("/");
    dispatch(logout());
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      // Close dropdown if clicked outside
      const dropdown = document.getElementById("menu-button");
      if (dropdown && !dropdown.contains(event.target)) {
        closeDropdown();
      }
    };

    // Attach the event listener
    document.addEventListener("click", handleClickOutside);

    // Cleanup the event listener on component unmount
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);


  

  return (
    <div>
      <nav class="fixed top-0 left-0  z-[100] w-full bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
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
              <div className="w-full mr-10">
                <label
                  for="default-search"
                  class="leading-4 text-base font-medium text-gray-900 sr-only dark:text-white font-inter"
                >
                  Search
                </label>
                <div class="relative items-center">
                  <div class="absolute inset-y-0 start-0 flex items-center ps-3 ml-2 pointer-events-none">
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
                  {/* <input
                    type="search"
                    id="default-search"
                    class="font-inter font-normal block w-full p-3 ps-10 text-base text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Search Your Page..."
                    required
                    onClick={toggleSearch}
                  /> */}

{/* <input
                    type="search"
                    id="default-search"
                    class="font-inter font-normal block w-full p-3 ps-10 text-base text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Search Your Page..."
                    required
                    onClick={toggleSearch}
                  /> */}

                        {/* <input
              type="text"
              name
              id
              placeholder="Search"
              className="focus:outline-none"
              onClick={toggleSearch}
            /> */}
                  <Searchbar/>

                </div>
              </div>
            </div>

            <div class="flex items-center  gap-6 ">
             
              <div className=" ">
                <img src={NotificationIcon} alt="NotificationIcon" />
                {/* <span class="inline-flex items-center justify-center w-4 h-4 ms-2 text-xs font-normal text-[#FF3D00] font-inter ">
                  2*
                </span> */}
              </div>
              <div class="flex items-center ms-3 ">
             
              <div class="relative inline-block text-left ">
                <button
                    type="button"
                    class="inline-flex w-[220px] justify-center   items-center px-4 text-sm font-semibold text-[#404040]  gap-4  "
                    id="menu-button"
                    aria-expanded={isDropdownOpen}
                    aria-haspopup="true"
                    onClick={toggleDropdown}

                  >
                      <img
                      class="w-[30%] h-[80%]   rounded-full"
                      src={profileImg}
                      alt="user photo"
                    />
                   <h1 class="w- font-lexend font-normal text-base text-[#404040]">
                    John Doe
                  </h1>
                  <img src={DownArrow} alt="" />

                  </button>
                  {isDropdownOpen && (
                    <div
                      class="absolute right-0 z-10 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                      role="menu"
                      aria-orientation="vertical"
                      aria-labelledby="menu-button"
                      tabindex="-1"
                    >
                  <ul class="py-1" role="none">
                    <li>
                      <a
                        href="/profile"
                        class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white font-inter"
                        role="menuitem"
                      >
                        Profile
                      </a>
                    </li>
                    <li>
                      <a
                        href="/dashbaord"
                        class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white font-inter"
                        role="menuitem"
                      >
                        Dashboard
                      </a>
                    </li>
                    <li>
                      <a
                        href="/settings"
                        class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white font-inter"
                        role="menuitem"
                      >
                        Settings
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white font-inter"
                        role="menuitem"
                      >
                        Earnings
                      </a>
                    </li>
                    <li>
                      {console.log("Login ", isLogin)}
                      {isLogin ? (
                        <a
                          href="#"
                          class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white font-inter"
                          role="menuitem"
                          onClick={logouthandle}
                        >
                          Sign out
                        </a>
                      ) : null}
                    </li>

                    </ul>
    
  </div>
      )}
</div>




              </div>
            </div>
          </div>
        </div>
      </nav>

      <aside
        id="logo-sidebar"
        class=" min-h-screen w-[4rem] z-50 overflow-hidden hover:w-[50%] md:hover:w-[32%] lg:hover:w-[25%]  xl:hover:w-1/6 hover:bg-white hover:shadow-lg  fixed top-0 left-0 h-full pt-0 transition-transform -translate-x-full bg-white border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700
  "
        aria-label="Sidebar"
      >
        <div class=" h-full px-3 pb-4 overflow-y-auto bg-white  mt-20">
          <ul class="space-y-2 font-medium mt-10">
            <li>
     {isHovered ? (
            <img src={Logo} className="w-full h-full" alt="Logo" />
          ) : (
            <img src={LogoOnly} className="w-full h-full" alt="LogoOnly" />
          )}
            </li>
            <li>
              <a href="/dashbaord" class="flex items-center p-2 mt-5 group">
                <img
                  src={DashboardSideIcon}
                  alt="DashboardSideIcon"
                  className="w-7 h-7"
                />
                <span class="ms-5 font-inter text-base font-normal leading-5">
                  Dashboard
                </span>
              </a>
            </li>


            <li>
            <button type="button" class="flex font-inter items-center w-full p-2 text-base text-[#404040] transition duration-75 rounded-lg group hover:bg-gray-100 " aria-controls="dropdown-example" data-collapse-toggle="dropdown-example">

                  <img src={FacturaElectroncia} alt="" />
                  <span class="flex-1 ms-3 text-left rtl:text-right whitespace-nowrap font-inter items-center w-full p-2 text-base text-[#404040] font-normal">Factura Electroncia</span>
                  <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                     <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
                  </svg>
            </button>
            <ul id="dropdown-example" class="hidden py-2 space-y-2">




                  <li className="flex hover:bg-gray-100 ml-12">
                <img src={dropdownIcon} alt="" />
                     <a href="/invoicedetails" class="flex items-center w-full p-2  transition duration-75 rounded-lg pl-6 group font-inter font-normal">Electronic Biling</a>
                  </li>
               
            </ul>
         </li>


         

            <li>
              <a href="/products" class="flex items-center p-2 mt-5 group">
                <img src={ProductsidebarIcon} alt="" className="w-7 h-7" />
                <span class="flex-1 ms-5 whitespace-nowrap font-inter text-base font-normal leading-5">
                  Products
                </span>
              </a>
            </li>

            <li>
              <a href="/invoicelist" class="flex items-center p-2 group mt-5">
                <img src={InvoiceGenerationIcon} alt="" className="w-7 h-7" />
                <span class="flex-1 ms-6 whitespace-nowrap font-inter text-base font-normal leading-5">
                  Invoice 
                </span>
              </a>
            </li>

            

         
            
            <li>
           <a href="#">
           <button type="button" class="flex font-inter items-center w-full p-2 text-base text-[#404040] transition duration-100 rounded-lg group hover:bg-gray-100 " aria-controls="dropdown-examp" data-collapse-toggle="dropdown-examp">

<img src={SupplierIcon} alt="" />
<span class="flex-1 ms-3 text-left rtl:text-right whitespace-nowrap font-inter items-center w-full p-2 text-base text-[#404040] font-normal">Suppliers</span>
<svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
   <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
</svg>
</button>
           </a>
            <ul id="dropdown-examp" class="hidden py-2 space-y-2">




                  <li className="flex hover:bg-gray-100 ml-12">
                <img src={dropdownIcon} alt="" />
                     <a href="/purchaseorder" class="flex items-center w-full p-2  transition duration-75 rounded-lg pl-6 group font-inter font-normal">Purchase Orders</a>
                  </li>

                  <li className="flex hover:bg-gray-100 ml-12">
                <img src={dropdownIcon} alt="" />
                     <a href="/suppliers" class="flex items-center w-full p-2  transition duration-75 rounded-lg pl-6 group font-inter font-normal">Suppliers</a>
                  </li>
               
            </ul>
         </li>
       


          <li>
              <a href="/reports" class="flex items-center p-2 group mt-5">
                <img src={ReportsIcon} alt="" className="w-7 h-7" />
                <span class="flex-1 ms-5 whitespace-nowrap font-inter text-base font-normal leading-5">
                Reports
                </span>
              </a>
            </li>

            <li>
              <a href="/inventory" class="flex items-center p-2 group mt-5">
                <img src={InventoryIcon} alt="" className="w-7 h-7" />
                <span class="flex-1 ms-5 whitespace-nowrap font-inter text-base font-normal leading-5">
                Inventory
                </span>
              </a>
            </li>



            <li>
              <a href="/clients" class="flex items-center p-2 group mt-5">
                <img src={ClientIcon} alt="" className="w-7 h-7" />
                <span class="flex-1 ms-5 whitespace-nowrap font-inter text-base font-normal leading-5">
                Clients
                </span>
              </a>
            </li>

            
            <li>
              <a href="/orders" class="flex items-center p-2 group mt-5">
                <img src={OrderIcon} alt="" className="w-7 h-7" />
                <span class="flex-1 ms-5 whitespace-nowrap font-inter text-base font-normal leading-5">
                  Orders
                </span>
              </a>
            </li>

            <li>
              <a href="/quotes" class="flex items-center p-2 group mt-5">
                <img src={QuotesGenerationIcon} alt="" className="w-7 h-7" />
                <span class="flex-1 ms-5 whitespace-nowrap font-inter text-base font-normal leading-5">
                Quotes
                </span>
              </a>
            </li>

       


            <li>
            <button type="button" class="flex font-inter items-center w-full p-2 text-base text-[#404040] transition duration-75 rounded-lg group hover:bg-gray-100 " aria-controls="dropdown-ex" data-collapse-toggle="dropdown-ex">

                  <img src={OptionsIcon} alt="" />
                  <span class="flex-1 ms-3 text-left rtl:text-right whitespace-nowrap font-inter items-center w-full p-2 text-base text-[#404040] font-normal">Options</span>
                  <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                     <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
                  </svg>
            </button>
            <ul id="dropdown-ex" class="hidden py-2 space-y-2">




                  <li className="flex hover:bg-gray-100 ml-12">
                <img src={dropdownIcon} alt="" />
                     <a href="/vendor" class="flex items-center w-full p-2  transition duration-75 rounded-lg pl-6 group font-inter font-normal">Vendor</a>
                  </li>

                  <li className="flex hover:bg-gray-100 ml-12">
                <img src={dropdownIcon} alt="" />
                     <a href="/companydata" class="flex items-center w-full p-2  transition duration-75 rounded-lg pl-6 group font-inter font-normal">Company Data</a>
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
