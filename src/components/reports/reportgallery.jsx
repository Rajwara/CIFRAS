import React, { useState, useEffect, useRef } from "react";
import AllIcon from "../../assets/images/reports/reportallicon.svg";
import FavouriteIcon from "../../assets/images/reports/reportfavouriteicon.svg";
import WhiteFavouriteIcon from "../../assets/images/reports/reportwhitestar.svg";
import Sales from "../../assets/images/reports/salesreports.svg";
import AdministrativeIcon from "../../assets/images/reports/administrativereports.svg";
import AccountingIcon from "../../assets/images/reports/accountingreportsicon.svg";
import AccountingReport1Icon from "../../assets/images/reports/accountingreport1icon.svg";

const Reportgallery = () => {
  const [showFavourites, setShowFavourites] = useState(false);
  const [openDropdownId, setOpenDropdownId] = useState(null);
  const dropdownRef = useRef(null);
 
  // Inside the useEffect hook, add a console log to monitor the value of openDropdownId
useEffect(() => {
  console.log("openDropdownId:", openDropdownId);
  // Function to handle clicks outside of the dropdown
  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      // Clicked outside the dropdown, so close the open dropdown
      setOpenDropdownId(null);
    }
  };

  // Add event listener when the component mount
  window.addEventListener("click", handleClickOutside);

  // Remove event listener when the component unmounts
  return () => {
    window.removeEventListener("click", handleClickOutside);
  };
}, [openDropdownId]); 

 // Inside the handleDropdownToggle function, add a console log to check if it's being triggered
 const handleDropdownToggle = (id, event) => {
  event.stopPropagation(); // Stop the propagation of the click event
  setOpenDropdownId((prevId) => (prevId === salesreports.id ||  administrativeReport.id || accountingReport.id || accountingreport1.id  ? null : id));
};
  const handleTabClick = (isFavouriteTab) => {
    setShowFavourites(isFavouriteTab);
    // Close the open dropdown when switching tabs
    setOpenDropdownId(null);
  };

  const handleFavouriteClick = (report) => {
    report.star =
      report.star === FavouriteIcon ? WhiteFavouriteIcon : FavouriteIcon;
    // This will not change the original data objects
  };
  // const handleFavouriteClick = (report) => {
  //   const updatedReports = reports.map((r) =>
  //     r.id === report.id ? { ...r, star: r.star === FavouriteIcon ? WhiteFavouriteIcon : FavouriteIcon } : r
  //   );
  //   setReports(updatedReports);
  // };

  const filterReports = (reports) => {
    if (showFavourites) {
      return reports.filter((report) => report.star === FavouriteIcon);
    } else {
      return reports;
    }
  };

  const renderReportCards = (reports) => {
    return (
      <div className="card grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {reports.map((data) => (
          <div
            className="innercard relative border border-[#ebebeb] flex items-center rounded"
            key={data.id}
          >
            <div className="p-4 flex items-center justify-center">
              <img
                src={data.star}
                alt=""
                className="absolute top-[30px] right-[60px] cursor-pointer"
                onClick={() => handleFavouriteClick(data)}
              />
              <div className="absolute top-[20px] right-[20px]">
                <button
                  id={`dropdownMenuIconButton-${data.id}`} // Unique ID for each dropdown button
                  data-dropdown-toggle={`dropdownDots-${data.id}`} // Unique ID for each dropdown
                  className="inline-flex items-center p-2 text-sm font-medium text-center text-gray-900 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none dark:text-white focus:ring-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                  type="button"
                  onClick={(event) => handleDropdownToggle(data.id, event)} // Pass the ID to handleDropdownToggle
                >
                  <svg
                    className="w-5 h-5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 4 15"
                  >
                    <path d="M3.5 1.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm0 6.041a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm0 5.959a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" />
                  </svg>
                </button>

                {/* Dropdown menu */}
                {openDropdownId === data.id && ( // Render dropdown only if the dropdown is open for this card
                  <div
                    ref={dropdownRef} // Reference to the dropdown element
                    id={`dropdownDots-${data.id}`} // Use the same ID as the button for accessibility
                    className="z-10 absolute bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600"
                  >
                    <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby={`dropdownMenuIconButton-${data.id}`}>
                      <li>
                        <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                          Dashboard
                        </a>
                      </li>
                      <li>
                        <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                          Settings
                        </a>
                      </li>
                      <li>
                        <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                          Earnings
                        </a>
                      </li>
                    </ul>
                    <div className="py-2">
                      <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">
                        Separated link
                      </a>
                    </div>
                  </div>
                )}
              </div>
            </div>
            <div className="flex flex-col gap-4  px-4 py-8">
              <span className="bg-[#ebebeb] p-2 rounded-md w-[56px]">
                <img
                  src={data.icon}
                  className="p-2 rounded h-auto w-auto max-h-12 max-w-12"
                  style={{ backgroundColor: data.bg }}
                  alt=""
                />
              </span>
              <p className="text-[#404040] text-xl font-inter font-semibold leading-7">
                {data.name}
              </p>
              <span className="-mt-2">
                <p className="text-lg font-inter font-normal text-[#404040] leasding-7">
                  2.4 GB . 135 files
                </p>
              </span>
            </div>
          </div>
        ))}
      </div>
    );
  };

  const salesreports = [
    {
      id: 1,
      icon: Sales,
      name: "General Sales",
      star: FavouriteIcon,
      bg: "#2591FA",
    },
    {
      id: 2,
      icon: Sales,
      name: "Sales Per Item",
      star: WhiteFavouriteIcon,
      bg: "#F092FF",
    },
    {
      id: 3,
      icon: Sales,
      name: "Sales Per Client",
      star: WhiteFavouriteIcon,
      bg: "#04B076",
    },
    {
      id: 4,
      icon: Sales,
      name: "Profitability Per Item",
      star: WhiteFavouriteIcon,
      bg: "#FFB300",
    },
    {
      id: 5,
      icon: Sales,
      name: "Sales PEr Vendor",
      star: WhiteFavouriteIcon,
      bg: "#9F54CE",
    },
    {
      id: 6,
      icon: Sales,
      name: "Account Status",
      star: WhiteFavouriteIcon,
      bg: "#FF3D00",
    },
  ];
  const administrativeReport = [
    {
      id: 7,
      icon: AdministrativeIcon,
      name: "Accounts Receivable",
      star: FavouriteIcon,
      bg: "#04B076",
    },
    {
      id: 8,
      icon: AdministrativeIcon,
      name: "Accounts Payable",
      star: WhiteFavouriteIcon,
      bg: "#FFB300",
    },
    {
      id: 9,
      icon: AdministrativeIcon,
      name: "Income & Expenses",
      star: WhiteFavouriteIcon,
      bg: "#F092FF",
    },
    {
      id: 10,
      icon: AdministrativeIcon,
      name: "Inventory Value",
      star: WhiteFavouriteIcon,
      bg: "#2591FA",
    },
    {
      id: 11,
      icon: AdministrativeIcon,
      name: "Transactions",
      star: WhiteFavouriteIcon,
      bg: "#634AF9",
    },
    {
      id: 12,
      icon: AdministrativeIcon,
      name: "Purchases",
      star: WhiteFavouriteIcon,
      bg: "#FF3D00",
    },
    {
      id: 13,
      icon: AdministrativeIcon,
      name: "Annual Report",
      star: WhiteFavouriteIcon,
      bg: "#9F54CE",
    },
  ];
  const accountingReport = [
    {
      id: 14,
      icon: AccountingIcon,
      name: "Income Statement",
      star: WhiteFavouriteIcon,
      bg: "#2591FA",
    },
    {
      id:15,
      icon: AccountingIcon,
      name: "Statement of Financial Position",
      star: WhiteFavouriteIcon,
      bg: "#04B076",
    },
    {
      id: 16,
      icon: AccountingIcon,
      name: "Taxes & Withholding",
      star: WhiteFavouriteIcon,
      bg: "#FF3D00",
    },
    {
      id: 17,
      icon: AccountingIcon,
      name: "Movements Per Account",
      star: WhiteFavouriteIcon,
      bg: "#F092FF",
    },
    {
      id: 18,
      icon: AccountingIcon,
      name: "Accounting Journal Report",
      star: WhiteFavouriteIcon,
      bg: "#FFB300",
    },
    {
      id: 19,
      icon: AccountingIcon,
      name: "Auxiliary Per Third Parties",
      star: WhiteFavouriteIcon,
      bg: "#9F54CE",
    },
    {
      id: 20,
      icon: AccountingIcon,
      name: "General Ledger Report",
      star: WhiteFavouriteIcon,
      bg: "#634AF9",
    },
    {
      id: 21,
      icon: AccountingIcon,
      name: "Trial Balance",
      star: WhiteFavouriteIcon,
      bg: "#73F686",
    },
    {
      id: 22,
      icon: AccountingIcon,
      name: "Detailed Tax Report",
      star: WhiteFavouriteIcon,
      bg: "#161642",
    },
  ];
  const accountingreport1 = [
    {
      id: 23,
      icon: AccountingIcon,
      name: "Export Invoices",
      star: WhiteFavouriteIcon,
      bg: "#04B076",
    },
    {
      id: 24,
      icon: AccountingIcon,
      name: "Accountant Report",
      star: WhiteFavouriteIcon,
      bg: "#FFB300",
    },
  ];

  const tabStyle = (isFavouriteTab) => {
    return `inline-flex items-center px-4 py-3 rounded-lg  ${
      showFavourites === isFavouriteTab
        ? "text-white bg-blue-700"
        : "text-[#404040] bg-gray-50 "
    }`;
  };

  return (
    <div className='flex flex-col px-6 py-10 border border-[#ebebeb] rounded'>
      <ul className='flex flex-row justify-between text-sm font-medium text-[#ffffff] md:me-4 mb-4 md:mb-0'>
        <div className='flex flex-row gap-6'>
          <li className='mb-4'>
            <a
              href='#'
              className={tabStyle(false)}
              onClick={() => handleTabClick(false)}
            >
              <img src={AllIcon} alt='' className='w-6 h-6 mr-2' />
              <span className='font-lexend'>All</span>
            </a>
          </li>
          <li className='mb-4 mr-4'>
            <a
              href='#'
              className={tabStyle(true)}
              onClick={() => handleTabClick(true)}
            >
              <img
                src={FavouriteIcon}
                alt=''
                className='w-6 h-6 font-lexend mr-2'
              />
              <span className='font-lexend'>Favourites</span>
            </a>
          </li>
        </div>
        <div className='flex'>
          <div className='w-full mr-10'>
            <label
              htmlFor='default-search'
              className='leading-4 text-base font-medium text-gray-900 sr-only dark:text-white font-inter'
            >
              Search
            </label>
            <div className='relative'>
              <div className='absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none'>
                <svg
                  className='w-4 h-4 text-gray-500 dark:text-gray-400'
                  aria-hidden='true'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 20 20'
                >
                  <path
                    stroke='currentColor'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z'
                  />
                </svg>
              </div>
              <input
                type='search'
                id='default-search'
                className='font-inter font-normal block w-full p-3 ps-10 text-base text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                placeholder='Search Your Page...'
                required
              />
            </div>
          </div>
        </div>
      </ul>
      <div className='flex flex-col mt-6'>
        <h3 className='text-lg font-bold text-gray-900 font-lexend mb-4'>
          Sales Reports
        </h3>
        {renderReportCards(filterReports(salesreports))}
      </div>
      <div className='flex flex-col mt-6'>
        <h3 className='text-lg font-bold text-gray-900 font-lexend mb-4'>
          Administrative Reports
        </h3>
        {renderReportCards(filterReports(administrativeReport))}
      </div>
      <div className='flex flex-col mt-6'>
        <h3 className='text-lg font-bold text-gray-900 font-lexend mb-4'>
          Accounting Reports
        </h3>
        {renderReportCards(filterReports(accountingReport))}
      </div>
      <div className='flex flex-col mt-6'>
        <h3 className='text-lg font-bold text-gray-900 font-lexend mb-4'>
          Accounting Report1
        </h3>
        {renderReportCards(filterReports(accountingreport1))}
      </div>
    </div>
  );
};

export default Reportgallery;
