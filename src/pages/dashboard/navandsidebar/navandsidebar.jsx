import React, { useState, useEffect, useRef } from "react";
import Logo from "../../../assets/images/sitelogocolored.png";
import profileImg from "../../../assets/images/dashboard/john.svg";
import Isoimg from "../../../assets/images/isoprofile.webp"
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
import Searchbar from "../../../components/searchbar/searchbar";
import LogoOnly from "../../../assets/images/logoonly.png";
import { MdClose } from "react-icons/md";
import SearchButtonIcon from "../../../assets/images/searchbuttonicon.svg"

const Navandsidebar = () => {
  const [isSearchVisible, setSearchVisible] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

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
      <nav class='fixed top-0 left-0  z-[100] w-full bg-white border-b border-gray-200 '>
        <div class='px-3 py-3 flex  lg:px-5 lg:pl-3'>
          <div class='flex items-center justify-between'>
            <div class='flex items-center justify-start rtl:justify-end'>
              <button
                data-drawer-target='logo-sidebar'
                data-drawer-toggle='logo-sidebar'
                aria-controls='logo-sidebar'
                type='button'
                class='inline-flex items-center p-2 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200'
              >
                <span class='sr-only'>Open sidebar</span>
                <svg
                  class='w-6 h-6'
                  aria-hidden='true'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    clip-rule='evenodd'
                    fill-rule='evenodd'
                    d='M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z'
                  ></path>
                </svg>
              </button>
              <div className='flex gap-10 items-center '>
                <img src={Logo} className='w-[60%] md:w-[20%] h-full' alt='Only' />
                <div className='w-full'>
                  <div>
                    <button onClick={openModal} className="block md:hidden ">
                    <svg
                              className='w-4 h-4 text-gray-500 '
                              aria-hidden='true'
                              xmlns='http://www.w3.org/2000/svg'
                              fill='none'
                              viewBox='0 0 20 20'
                            >
                              <path
                                stroke='currentColor'
                                stroke-linecap='round'
                                stroke-linejoin='round'
                                stroke-width='2'
                                d='m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z'
                              />
                            </svg>
                    </button>
                      {/* Trigger Button */}
                      <button onClick={openModal} className='hidden md:block'>
                      <label for='table-search' className='sr-only'>
                          Search
                        </label>
                        <div className='relative'>
                          <div className='absolute inset-y-0 rtl:inset-r-0 start-0 flex items-center ps-3 pointer-events-none'>
                            <svg
                              className='w-4 h-4 text-gray-500 '
                              aria-hidden='true'
                              xmlns='http://www.w3.org/2000/svg'
                              fill='none'
                              viewBox='0 0 20 20'
                            >
                              <path
                                stroke='currentColor'
                                stroke-linecap='round'
                                stroke-linejoin='round'
                                stroke-width='2'
                                d='m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z'
                              />
                            </svg>
                          </div>
                          <input
                            type='text'
                            id='table-search-users'
                            className='block p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg md:w-80 bg-white focus:ring-blue-500 focus:border-blue-500 '
                            placeholder='Search your page...'
                          />
                          <img src={SearchButtonIcon} alt="" className="w-10 h-12 absolute right-[10px] -top-[5px] " />
                        </div>
                      </button>

                      {/* Modal Background */}
                      {isOpen && (
                        <div className='fixed z-10 inset-0 overflow-y-auto bg-gray-900 bg-opacity-50 flex justify-center items-center -mt-[430px]'>
                          {/* Modal Container */}
                         <div className="bg-white flex rounded-md w-[300px] md:w-[450px] py-2">
                            {/* Modal Content */}
                            <Searchbar />
                            {/* Close Button */}
                            <button
                              onClick={closeModal}
                              className='text-[#404040]  text-3xl '
                            >
                             <MdClose />
                            </button>
                         </div>
                        </div>
                      )}
                  </div>
                </div>
              </div>
              </div>
            </div>
            <div class='flex items-center   '>
              <div className='border border-[#ebebeb] rounded-md py-2 '>
                <img src={NotificationIcon} className=" w-[500px] md:w-[200px] lg:w-[100px] xl:w-[50px]  h-4 "  alt='NotificationIcon' />
                {/* <span class="inline-flex items-center justify-center w-4 h-4 ms-2 text-xs font-normal text-[#FF3D00] font-inter ">
                  2*
                </span> */}
              </div>
              <div class='flex items-center  '>
                <div class='relative inline-block text-left '>
                  <button
                    type='button'
                    class='inline-flex w-[100px] justify-center   items-center px-4 text-sm font-semibold text-[#404040]  gap-4  '
                    id='menu-button'
                    aria-expanded={isDropdownOpen}
                    aria-haspopup='true'
                    onClick={toggleDropdown}
                  >
                    <img
                      class='w-[60%] h-[80%]   rounded-full'
                      src={Isoimg}
                      alt='user photo'
                    />
                    {/* <h1 class='w- font-lexend font-semibold text-sm text-[#404040]'>
                      John Doe
                    </h1> */}
                    <img src={DownArrow} alt='' />
                  </button>
                  {isDropdownOpen && (
                    <div
                      class='absolute right-0 z-10 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none'
                      role='menu'
                      aria-orientation='vertical'
                      aria-labelledby='menu-button'
                      tabindex='-1'
                    >
                      <ul class='py-1' role='none'>

                     
                    <li>
                          {/* <a
                            href='/profile'
                            class='block px-4 py-2 font-lexend text-sm text-[#404040] border-[#404040] border-b-2 hover:bg-gray-100 '
                            role='menuitem'
                          >
                           John Doe
                          </a> */}
                          <div className="flex p-2 border-[#404040] border-b-2 align-middle">
                          <img
                      class='w-[15%] h-[80%]   rounded-full'
                      src={Isoimg}
                      alt='user photo'
                    />
                   <div>
                   <a
                            href='/profile'
                            class='block px-4  font-lexend text-base font-semibold text-[#404040]  hover:bg-gray-100 '
                            role='menuitem'
                          >
                           John Doe
                          </a>
                          <a
                            href='/profile'
                            class='block px-4 font-inter text-sm font-medium text-[#404040]  hover:bg-gray-100 '
                            role='menuitem'
                          >
                           johndoe@cifraims.com
                          </a>
                   </div>
                          </div>
                        </li>


                        <li>
                          <a
                            href='/profile'
                            class='block font-inter font-medium px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 '
                            role='menuitem'
                          >
                            Profile
                          </a>
                        </li>
                        <li>
                          <a
                            href='/dashbaord'
                            class='block px-4 font-inter font-medium py-2 text-sm text-gray-700 hover:bg-gray-100 '
                            role='menuitem'
                          >
                            Dashboard
                          </a>
                        </li>
                        <li>
                          <a
                            href='/settings'
                            class='block px-4 py-2 font-inter font-medium text-sm text-gray-700 hover:bg-gray-100 '
                            role='menuitem'
                          >
                            Settings
                          </a>
                        </li>
                    
                        <li>
                          {console.log("Login ", isLogin)}
                          {isLogin ? (
                            <a
                              href='#'
                              className='font-inter font-medium block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 border-[#ebebeb] border-t-2 '
                              role='menuitem'
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
      </nav>

      <aside
        id='logo-sidebar'
        class=' min-h-screen w-[3.7rem] z-50 overflow-hidden hover:w-[50%] md:hover:w-[32%] lg:hover:w-[25%]  xl:hover:w-[18%] hover:bg-white hover:shadow-lg  fixed top-0 left-0 h-full pt-0 transition-transform -translate-x-full bg-white border-r border-gray-200 sm:translate-x-0 '
        aria-label='Sidebar'
      >
        <div class=' h-full px-3 pb-[100px] overflow-y-auto bg-white  mt-20'>
          <ul class='space-y-2 font-medium mt-10'>
            <li>
              <a href='/dashbaord' class='flex items-center py-2 mt-5 group'>
                <img
                  src={DashboardSideIcon}
                  alt='DashboardSideIcon'
                  className='w-7 h-7'
                />
                <span class='ms-6 font-inter text-sm font-medium leading-5'>
                  Dashboard
                </span>
              </a>
            </li>

            <li>
              <button
                type='button'
                class='flex font-inter items-center w-full py-2 text-base text-[#404040] transition duration-75 rounded-lg group hover:bg-gray-100 '
                aria-controls='dropdown-example'
                data-collapse-toggle='dropdown-example'
              >
                <img src={FacturaElectroncia} className='w-7 h-7' alt='' />
                <span class='flex ms-4 text-left rtl:text-right whitespace-nowrap font-inter items-center w-full p-2 text-sm text-[#404040] font-medium'>
                  Factura Electroncia
                </span>
                <svg
                  class='w-3 h-3'
                  aria-hidden='true'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 10 6'
                >
                  <path
                    stroke='currentColor'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    stroke-width='2'
                    d='m1 1 4 4 4-4'
                  />
                </svg>
              </button>
              <ul id='dropdown-example' class='hidden py-2 space-y-2'>
                <li className='flex hover:bg-gray-100 ml-12 items-center py-2 rounded'>
                  <img src={dropdownIcon} className="w-2 h-2" alt='' />
                  <a
                    href='/invoicedetails'
                    class='flex items-center w-full   transition duration-75 rounded-lg pl-2 group font-inter font-medium text-sm'
                  >
                    Electronic Biling
                  </a>
                </li>
              </ul>
            </li>

            <li>
              <a href='/products' class='flex items-center py-2 mt-5 group'>
                <img src={ProductsidebarIcon} alt='' className='w-7 h-7' />
                <span class='flex-1 ms-6 whitespace-nowrap font-inter text-sm font-medium leading-5'>
                  Products
                </span>
              </a>
            </li>

            <li>
              <a href='/invoicelist' class='flex items-center py-2 group mt-5'>
                <img src={InvoiceGenerationIcon} alt='' className='w-7 h-7' />
                <span class='flex-1 ms-7 whitespace-nowrap font-inter text-sm font-medium leading-5'>
                  Invoice
                </span>
              </a>
            </li>

            <li>
              <a href='#'>
                <button
                  type='button'
                  class='flex font-inter items-center w-full py-2 text-base text-[#404040] transition duration-100 rounded-lg group hover:bg-gray-100 '
                  aria-controls='dropdown-examp'
                  data-collapse-toggle='dropdown-examp'
                >
                  <img src={SupplierIcon} className='w-7 h-7' alt='' />
                  <span class='flex ms-4 text-left rtl:text-right whitespace-nowrap font-inter items-center w-full p-2 text-sm text-[#404040] font-medium'>
                    Suppliers
                  </span>
                  <svg
                    class='w-3 h-3'
                    aria-hidden='true'
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 10 6'
                  >
                    <path
                      stroke='currentColor'
                      stroke-linecap='round'
                      stroke-linejoin='round'
                      stroke-width='2'
                      d='m1 1 4 4 4-4'
                    />
                  </svg>
                </button>
              </a>
              <ul id='dropdown-examp' class='hidden py-2 space-y-2'>
                <li className='flex hover:bg-gray-100 ml-12 items-center py-2 rounded'>
                  <img src={dropdownIcon} className="w-2 h-2" alt='' />
                  <a
                    href='/purchaseorder'
                    class='flex items-center w-full   text-sm transition duration-75 rounded-lg pl-2 group font-inter font-medium'
                  >
                    Purchase Orders
                  </a>
                </li>

                <li className='flex hover:bg-gray-100 ml-12 items-center py-2 rounded'>
                  <img src={dropdownIcon} className="w-2 h-2" alt='' />
                  <a
                    href='/suppliers'
                    class='flex items-center w-full  text-sm transition duration-75 rounded-lg pl-2 group font-inter  font-medium'
                  >
                    Suppliers
                  </a>
                </li>
              </ul>
            </li>

            <li>
              <a href='/reports' class='flex items-center py-2 group mt-5'>
                <img src={ReportsIcon} alt='' className='w-7 h-7' />
                <span class='flex-1 ms-5 whitespace-nowrap font-inter text-sm font-medium leading-5'>
                  Reports
                </span>
              </a>
            </li>

            <li>
              <a href='/inventory' class='flex items-center py-2 group mt-5'>
                <img src={InventoryIcon} alt='' className='w-7 h-7' />
                <span class='flex-1 ms-5 whitespace-nowrap font-inter text-sm font-medium leading-5'>
                  Inventory
                </span>
              </a>
            </li>

            <li>
              <a href='/clients' class='flex items-center py-2 group mt-5'>
                <img src={ClientIcon} alt='' className='w-7 h-7' />
                <span class='flex-1 ms-5 whitespace-nowrap font-inter text-sm font-medium leading-5'>
                  Clients
                </span>
              </a>
            </li>

            <li>
              <a href='/orders' class='flex items-center py-2 group mt-5'>
                <img src={OrderIcon} alt='' className='w-7 h-7' />
                <span class='flex-1 ms-5 whitespace-nowrap font-inter text-sm font-medium leading-5'>
                  Orders
                </span>
              </a>
            </li>

            <li>
              <a href='/quotes' class='flex items-center py-2 group mt-5'>
                <img src={QuotesGenerationIcon} alt='' className='w-7 h-7' />
                <span class='flex-1 ms-5 whitespace-nowrap font-inter text-sm font-medium leading-5'>
                  Quotes
                </span>
              </a>
            </li>

            <li>
              <button
                type='button'
                class='flex font-inter items-center w-full py-2 text-base text-[#404040] transition duration-75 rounded-lg group hover:bg-gray-100 '
                aria-controls='dropdown-ex'
                data-collapse-toggle='dropdown-ex'
              >
                <img src={OptionsIcon} className="w-7 h-7" alt='' />
                <span class='flex ms-3 text-left rtl:text-right whitespace-nowrap font-inter items-center w-full p-2 text-sm text-[#404040] font-medium'>
                  Options
                </span>
                <svg
                  class='w-3 h-3'
                  aria-hidden='true'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 10 6'
                >
                  <path
                    stroke='currentColor'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    stroke-width='2'
                    d='m1 1 4 4 4-4'
                  />
                </svg>
              </button>
              <ul id='dropdown-ex' class='hidden py-2 space-y-2'>
                <li className='flex items-center py-2 rounded hover:bg-gray-100 ml-12'>
                  <img src={dropdownIcon} className="w-2 h-2"  alt='' />
                  <a
                    href='/vendor'
                    class='flex items-center w-full   transition duration-75 rounded-lg pl-2 group font-inter font-medium text-sm'
                  >
                    Vendor
                  </a>
                </li>

                <li className='items-center flex py-2 hover:bg-gray-100 ml-12'>
                  <img src={dropdownIcon} className="w-2 h-2" alt='' />
                  <a
                    href='/companydata'
                    class='flex items-center w-full   transition duration-75 rounded-lg pl-2 group font-inter font-medium  text-sm'
                  >
                    Company Data
                  </a>
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
