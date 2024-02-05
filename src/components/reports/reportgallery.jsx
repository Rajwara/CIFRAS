import React from "react";
import AllIcon from "../../assets/images/reports/reportallicon.svg";
import FavouriteIcon from "../../assets/images/reports/reportfavouriteicon.svg";
import WhiteFavouriteIcon from "../../assets/images/reports/reportwhitestar.svg"; 
import Sales from "../../assets/images/reports/salesreports.svg";
import AdministrativeIcon from "../../assets/images/reports/administrativereports.svg";
import AccountingIcon from "../../assets/images/reports/accountingreportsicon.svg";
import AccountingReport1Icon from "../../assets/images/reports/accountingreport1icon.svg";

const Reportgallery = () => {
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
    const administrativeReport =[
        {
            id: 1,
            icon: AdministrativeIcon,
            name: "Accounts Receivable",
            star: FavouriteIcon,
            bg: "#04B076",
        },  
        {
            id: 2,
            icon: AdministrativeIcon,
            name: "Accounts Payable",
            star: WhiteFavouriteIcon,
            bg: "#FFB300",
        }, 
        {
            id: 3,
            icon: AdministrativeIcon,
            name: "Income & Expenses",
            star: WhiteFavouriteIcon,
            bg: "#F092FF",
        },  
        {
            id: 4,
            icon: AdministrativeIcon,
            name: "Inventory Value",
            star: WhiteFavouriteIcon,
            bg: "#2591FA",
        }, 
        {
            id: 5,
            icon: AdministrativeIcon,
            name: "Transactions",
            star: WhiteFavouriteIcon,
            bg: "#634AF9",
        }, 
        {
            id: 6,
            icon: AdministrativeIcon,
            name: "Purchases",
            star: WhiteFavouriteIcon,
            bg: "#FF3D00",
        }, 
        {
            id: 7,
            icon: AdministrativeIcon,
            name: "Annual Report",
            star: WhiteFavouriteIcon,
            bg: "#9F54CE",
        }, 
    
    ]
    const accountingReport =[
        {
            id: 1,
            icon: AccountingIcon,
            name: "Income Statement",
            star: WhiteFavouriteIcon,
            bg: "#2591FA",
        }, 
        {
            id: 2,
            icon: AccountingIcon,
            name: "Statement of Financial Position",
            star: WhiteFavouriteIcon,
            bg: "#04B076",
        },
        {
            id: 3,
            icon: AccountingIcon,
            name: "Taxes & Withholding",
            star: WhiteFavouriteIcon,
            bg: "#FF3D00",
        },
        {
            id: 4,
            icon: AccountingIcon,
            name: "Movements Per Account",
            star: WhiteFavouriteIcon,
            bg: "#F092FF",
        },
        {
            id: 5,
            icon: AccountingIcon,
            name: "Accounting Journal Report",
            star: WhiteFavouriteIcon,
            bg: "#FFB300",
        },
        {
            id: 6,
            icon: AccountingIcon,
            name: "Auxiliary Per Third Parties",
            star: WhiteFavouriteIcon,
            bg: "#9F54CE",
        },
        {
            id:7 ,
            icon: AccountingIcon,
            name: "General Ledger Report",
            star: WhiteFavouriteIcon,
            bg: "#634AF9",
        },
        {
            id: 8,
            icon: AccountingIcon,
            name: "Trial Balance",
            star: WhiteFavouriteIcon,
            bg: "#73F686",
        },
        {
            id: 9,
            icon: AccountingIcon,
            name: "Detailed Tax Report",
            star: WhiteFavouriteIcon,
            bg: "#161642",
        },
    ]
    const accountingreport1 =[
        {
            id: 1,
            icon: AccountingIcon,
            name: "Export Invoices",
            star: WhiteFavouriteIcon,
            bg: "#04B076",
        },
        {
            id: 2,
            icon: AccountingIcon,
            name: "Accountant Report",
            star: WhiteFavouriteIcon,
            bg: "#FFB300",
        },
    ]
  
    return (
      <div className="flex flex-col px-6 py-10 border border-[#ebebeb] rounded">
        <ul className="flex flex-row justify-between text-sm font-medium text-gray-500  md:me-4 mb-4 md:mb-0">
          <div className="flex">
            <li className="mb-4 mr-4">
              <a
                href="#"
                className="inline-flex items-center px-4 py-3 text-white bg-blue-700 rounded-lg active w-full "
                aria-current="page"
              >
                <img src={AllIcon} alt="" className="w-6 h-6 mr-2" />
                All
              </a>
            </li>
            <li className="mb-4">
              <a
                href="#"
                className="inline-flex items-center px-4 py-3 rounded-lg hover:text-gray-900 bg-gray-50 hover:bg-gray-100 w-full "
              >
                <img src={FavouriteIcon} alt="" className="w-6 h-6 mr-2" />
                Favourites
              </a>
            </li>
          </div>
          <div className="flex">
            <div className="w-full mr-10">
              <label
                htmlFor="default-search"
                className="leading-4 text-base font-medium text-gray-900 sr-only  font-rubik"
              >
                Search
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                  <svg
                    className="w-4 h-4 text-gray-500 "
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 20"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                    />
                  </svg>
                </div>
                <input
                  type="search"
                  id="default-search"
                  className="font-rubik font-normal block w-full p-3 ps-10 text-base text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 "
                  placeholder="Search Your Page..."
                  required
                />
              </div>
            </div>
          </div>
        </ul>
        <div className="flex flex-col mt-6">
          <h3 className="text-lg font-bold text-gray-900  mb-4">Sales Reports</h3>
          <div className="card grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {salesreports.map((data, value) => (
              <div className="innercard relative border border-[#ebebeb] flex items-center rounded" key={data.id}>
                <img src={data.star} alt="" className="relative -top-[30px] left-[320px] " />
                <div className="flex flex-row gap-6 items-center px-4 py-8" >
                  <img src={data.icon} className="p-2 rounded" style={{ backgroundColor: data.bg }} alt="" />
                  <p className="text-[#404040] text-xl font-rubik font-normal leading-7">{data.name}</p>
                </div>
                
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col mt-6">
          <h3 className="text-lg font-bold text-gray-900  mb-4">Administrative Reports</h3>
          <div className="card grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {administrativeReport.map((data, value) => (
              <div className="innercard relative border border-[#ebebeb] flex items-center rounded" key={data.id}>
                <img src={data.star} alt="" className="relative -top-[30px] left-[320px] " />
                <div className="flex flex-row gap-6 items-center px-4 py-8" >
                  <img src={data.icon} className="p-2 rounded" style={{ backgroundColor: data.bg }} alt="" />
                  <p className="text-[#404040] text-xl font-rubik font-normal leading-7">{data.name}</p>
                </div>
                
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col mt-6">
          <h3 className="text-lg font-bold text-gray-900  mb-4">Accounting Reports</h3>
          <div className="card grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {accountingReport.map((data, value) => (
              <div className="innercard relative border border-[#ebebeb] flex items-center rounded" key={data.id}>
                <img src={data.star} alt="" className="relative -top-[30px] left-[320px] " />
                <div className="flex flex-row gap-6 items-center px-4 py-8" >
                  <img src={data.icon} className="p-2 rounded" style={{ backgroundColor: data.bg }} alt="" />
                  <p className="text-[#404040] text-xl font-rubik font-normal leading-7">{data.name}</p>
                </div>
                
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col mt-6">
          <h3 className="text-lg font-bold text-gray-900  mb-4">Accounting Reports</h3>
          <div className="card grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {    accountingreport1.map((data, value) => (
              <div className="innercard relative border border-[#ebebeb] flex items-center rounded" key={data.id}>
                <img src={data.star} alt="" className="relative -top-[30px] left-[320px] " />
                <div className="flex flex-row gap-6 items-center px-4 py-8" >
                  <img src={data.icon} className="p-2 rounded" style={{ backgroundColor: data.bg }} alt="" />
                  <p className="text-[#404040] text-xl font-rubik font-normal leading-7">{data.name}</p>
                </div>
                
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };
  
  export default Reportgallery;