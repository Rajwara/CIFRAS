import React,{useRef, useState} from "react";
import Profile from "../../../assets/images/dashboard/john.svg";
import Next from "../../../assets/images/nextbuttonfortable.svg";
import Prev from "../../../assets/images/prevbuttonfortable.svg";
import { saveAs } from 'file-saver';
import * as XLSX from 'xlsx';
import Edit from "../../../assets/images/edittablebutton.svg";
import Delete from "../../../assets/images/deletetablebutton.svg";

import ExportXcelIcon from "../../../assets/images/exportexcelicon.svg"
import FilterIcon from "../../../assets/images/filtericon.svg"


const Invoicelisttable = () => {


  

 
 

  const allData = [
    {
      id: 1,
      name: "Neil Sims",
      email: "neil.sims@flowbite.com",
      created: "Jan 01, 2024 1:11 PM",
      dueDate: "Jan 01, 2024 1:11 PM",
      amount: "$111.00",
      status: "Online",
    },
    {
      id: 2,
      name: "Neil Sims",
      email: "neil.sims@flowbite.com",
      created: "Jan 01, 2024 1:11 PM",
      dueDate: "Jan 01, 2024 1:11 PM",
      amount: "$111.00",
      status: "Online",
    },
    {
      id: 3,
      name: "Neil Sims",
      email: "neil.sims@flowbite.com",
      created: "Jan 01, 2024 1:11 PM",
      dueDate: "Jan 01, 2024 1:11 PM",
      amount: "$111.00",
      status: "Online",
    },
    {
      id: 4,
      name: "Neil Sims",
      email: "neil.sims@flowbite.com",
      created: "Jan 01, 2024 1:11 PM",
      dueDate: "Jan 01, 2024 1:11 PM",
      amount: "$111.00",
      status: "Online",
    },
    {
      id: 5,
      name: "Neil Sims",
      email: "neil.sims@flowbite.com",
      created: "Jan 01, 2024 1:11 PM",
      dueDate: "Jan 01, 2024 1:11 PM",
      amount: "$111.00",
      status: "Online",
    },
    {
      id: 6,
      name: "Neil Sims",
      email: "neil.sims@flowbite.com",
      created: "Jan 01, 2024 1:11 PM",
      dueDate: "Jan 01, 2024 1:11 PM",
      amount: "$111.00",
      status: "Online",
    },
    {
      id: 7,
      name: "Neil Sims",
      email: "neil.sims@flowbite.com",
      created: "Jan 01, 2024 1:11 PM",
      dueDate: "Jan 01, 2024 1:11 PM",
      amount: "$111.00",
      status: "Online",
    },
    {
      id: 8,
      name: "Neil Sims",
      email: "neil.sims@flowbite.com",
      created: "Jan 01, 2024 1:11 PM",
      dueDate: "Jan 01, 2024 1:11 PM",
      amount: "$111.00",
      status: "Online",
    },
    {
      id: 9,
      name: "Neil Sims",
      email: "neil.sims@flowbite.com",
      created: "Jan 01, 2024 1:11 PM",
      dueDate: "Jan 01, 2024 1:11 PM",
      amount: "$111.00",
      status: "Online",
    },
    {
      id: 10,
      name: "Neil Sims",
      email: "neil.sims@flowbite.com",
      created: "Jan 01, 2024 1:11 PM",
      dueDate: "Jan 01, 2024 1:11 PM",
      amount: "$111.00",
      status: "Online",
    },
    {
      id: 11,
      name: "Neil Sims",
      email: "neil.sims@flowbite.com",
      created: "Jan 01, 2024 1:11 PM",
      dueDate: "Jan 01, 2024 1:11 PM",
      amount: "$111.00",
      status: "Online",
    },
    // Add more data as needed
  ];

  const itemsPerPage = 8;
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentData = allData.slice(indexOfFirstItem, indexOfLastItem);


  const tableRef = useRef(null);

  const generateExcel = () => {
    // Assuming allData is the array containing your table data
    const ws = XLSX.utils.json_to_sheet(allData);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Sheet 1");
    XLSX.writeFile(wb, 'table.xlsx', { bookType: "xlsx", mimeType: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" });
  };

 

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div  className=" relative overflow-x-auto shadow-md border border-[#ebebeb] rounded bg-white pb-4">
      <div class="flex items-center justify-between flex-column flex-wrap md:flex-row space-y-4 md:space-y-0 pb-4 bg-white dark:bg-gray-900  p-5">
       
        <label for="table-search" class="sr-only font-inter ">
          Search
        </label>
        <div class="relative">
          <div class="absolute inset-y-0 rtl:inset-r-0 start-0 flex items-center ps-3 pointer-events-none">
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
            type="text"
            id="table-search-users"
            class="font-inter block p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Search for users"
          />
        </div>
        <div className="flex flex-row gap-6">
        <div className="flex border border-[#ebebeb] rounded-md px-4 py-2 gap-2 items-center">
          <img src={ExportXcelIcon} alt="" />
          <button  onClick={generateExcel} className="text-[#404040] font-normal font-inter text-base leading-7 ">
         Export to Excel
          </button>
          </div>
            <button id="dropdownActionButton" data-dropdown-toggle="dropdownAction" className="inline-flex border border-[#ebebeb] rounded-md px-4 py-2 gap-2 items-center text-[#404040] font-normal font-inter text-base bg-white  focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200  " type="button">
              <img src={FilterIcon} alt="" />
                <span className="sr-only">Action button</span>
                Action
               
            </button>
            {/* <!-- Dropdown menu --> */}
            <div id="dropdownAction" className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 ">
                <ul className="py-1 text-sm text-[#404040] " aria-labelledby="dropdownActionButton">
                    <li>
                        <a href="#" className="block px-4 py-2 hover:bg-gray-100 ">Reward</a>
                    </li>
                    <li>
                        <a href="#" className="block px-4 py-2 hover:bg-gray-100 ">Promote</a>
                    </li>
                    <li>
                        <a href="#" className="block px-4 py-2 hover:bg-gray-100 ">Activate account</a>
                    </li>
                </ul>
                <div className="py-1">
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 ">Delete User</a>
                </div>
            </div>
        </div>
      </div>
      <table ref={tableRef} className="w-full text-sm text-left rtl:text-right text-[#404040] ">
        <thead className="text-xs text-[#404040] uppercase bg-[#ececec]">
          <tr>
            <th scope="col" className="p-4">
              <div className="flex items-center">
                <input
                  id="checkbox-all-search"
                  type="checkbox"
                  className="w-4 h-4  bg-[#ebebeb]-100 border-[#ebebeb]-300 rounded focus:ring-blue-500  focus:ring-2"
                />
                <label htmlFor="checkbox-all-search" className="sr-only">
                  checkbox
                </label>
              </div>
            </th>
            <th scope="col" className="px-6 py-3 font-inter">
              CUSTOMER
            </th>
            <th scope="col" className="px-6 py-3 font-inter">
              EMAIL
            </th>
            <th scope="col" className="px-6 py-3 font-inter">
              CREATED
            </th>
            <th scope="col" className="px-6 py-3 font-inter">
              DUE DATE
            </th>
            <th scope="col" className="px-6 py-3 font-inter">
              Amount
            </th>
            <th scope="col" className="px-6 py-3 font-inter">
              Status
            </th>
            <th scope="col" className="px-6 py-3 font-inter">
              Action
            </th>
          </tr>
        </thead>
        <tbody className="text-[#404040]">
          {currentData.map((item) => (
            <tr
              key={item.id}
              className="bg-white border-b  hover:bg-gray-50"
            >
              <td className="w-4 p-4">
                <div className="flex items-center">
                  <input
                    id={`checkbox-table-${item.id}`}
                    type="checkbox"
                    className="w-4 h-4  bg-[#ebebeb]-100 border-[#ebebeb]-300 rounded focus:ring-blue-500 "
                  />
                  <label htmlFor={`checkbox-table-${item.id}`} className="sr-only">
                    checkbox
                  </label>
                </div>
              </td>
              <th
                scope="row"
                className="flex items-center px-6 py-4  whitespace-nowrap "
              >
                <img
                  className="w-10 h-10 rounded-full"
                  src={Profile}
                  alt={`${item.name} image`}
                />
                <div className="ps-3">
                  <div className="text-base font-semibold font-inter">{item.name}</div>
                  <div className="font-normal  font-inter">{item.email}</div>
                </div>
              </th>
              <td className="px-6 py-4 font-inter">{item.email}</td>
              <td>
                <div className="ps-3">
                  <div className="text-base font-medium font-inter">{item.created}</div>
                  <div className="font-medium font-inter">{item.createdTime}</div>
                </div>
              </td>

              <td>
                <div className="ps-3">
                  <div className="text-base font-medium font-inter">{item.dueDate}</div>
                  <div className="font-medium  font-inter">{item.dueDateTime}</div>
                </div>
              </td>

              <td className="px-6 py-4 font-inter">{item.amount}</td>

              <td className="px-6 py-4">
                <div className="flex items-center bg-[#B1FFBC] font-inter rounded-full px-4 py-2 border  p-5">
                  <div className="h-2.5 w-2.5 rounded-full bg-green-500 me-2 font-inter "></div>{" "}
                  {item.status}
                </div>
              </td>
              <td className="px-6 py-4 flex gap-4">
                        <a href="#" className="font-medium text-blue-600  hover:underline"><img src={Edit} alt=""  classNameName='w-6 h-6'/></a>
                        <a href="#" className="font-medium text-blue-600  hover:underline"><img src={Delete} alt="" classNameName='w-6 h-6' /></a>
                  </td>
            </tr>
          ))}
        </tbody>
      </table>
      <nav className="flex items-center justify-between pt-4 px-4" aria-label="Table navigation">
        {/* Show pagination */}
        <span className="text-sm font-normal text-gray-500 dark:text-gray-400 mb-4 md:mb-0 block w-full md:inline md:w-auto font-inter">
          Showing{" "}
          <span className="font-semibold text-gray-900 dark:text-white font-inter">
            {indexOfFirstItem + 1}-{Math.min(indexOfLastItem, allData.length)}
          </span>{" "}
          of{" "}
          <span className="font-semibold text-gray-900 dark:text-white font-inter">{allData.length}</span>
        </span>
        <ul className="inline-flex -space-x-px rtl:space-x-reverse text-sm h-8 font-inter">
          <li>
            <button
              onClick={() => paginate(currentPage - 1)}
              disabled={currentPage === 1}
              className="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white font-inter"
            >
              <img src={Prev} alt="" />
            </button>
          </li>
          {Array.from({ length: Math.ceil(allData.length / itemsPerPage) }, (_, index) => (
            <li key={index}>
              <button
                onClick={() => paginate(index + 1)}
                className={`font-inter flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 ${
                  currentPage === index + 1 ? "text-blue-600 bg-blue-50" : "hover:bg-gray-100 hover:text-gray-700"
                } dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white`}
              >
                {index + 1}
              </button>
            </li>
          ))}
          <li>
            <button
              onClick={() => paginate(currentPage + 1)}
              disabled={currentPage === Math.ceil(allData.length / itemsPerPage)}
              className="font-inter flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white font-inter"
            >
              <img src={Next} alt="" />
            </button>
          </li>
        </ul>
      </nav>
   
    </div>
  );
};

export default Invoicelisttable;
