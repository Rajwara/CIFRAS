import React, { useState,useEffect,useRef } from "react";
import Profile from "../../../assets/images/dashboard/john.svg";
import Next from "../../../assets/images/nextbuttonfortable.svg";
import Prev from "../../../assets/images/prevbuttonfortable.svg";
import Edit from "../../../assets/images/edittablebutton.svg";
import Delete from "../../../assets/images/deletetablebutton.svg";
import * as XLSX from "xlsx";
import ExportXcelIcon from "../../../assets/images/exportexcelicon.svg";
import FilterIcon from "../../../assets/images/filtericon.svg";
import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

const Invoicelisttable = () => {
  const [selectedItems, setSelectedItems] = useState([]);
  const [isFilterOpen, setIsFilterOpen] = useState(false); 


  const handleFilterToggle = () => {
    setIsFilterOpen(!isFilterOpen);
  };

  useEffect(() => {
    const createDateInput = document.querySelector(".date-create input");
    const dueDateInput = document.querySelector(".due-date input");
    if (createDateInput) {
      flatpickr(createDateInput, {
        dateFormat: "Y-m-d",
        // Add other options or customization as needed
      });
    }
    if (dueDateInput) {
      flatpickr(dueDateInput, {
        dateFormat: "Y-m-d",
        // Add other options or customization as needed
      });
    }
  }, []);
  const tabledata = [
    {
      id: 1,
      OrderNum: "#0001",
      name: "Neil Sims",
      email: "neil.sims@flowbite.com",
      itemsnum: "001",
      price: "$111.00",
      CreateDate: "Jan 01, 2024",
      CreateTime: "1:11 PM",
      ModifiedDate: "Jan 08, 2024",
      ModifiedTime: "8:11 PM",
      status: "Online",
      profileimage: Profile,
      role: "Edit User",
    },
    {
      id: 2,
      OrderNum: "#0001",
      name: "Neil Sims",
      email: "neil.sims@flowbite.com",
      itemsnum: "001",
      price: "$111.00",
      CreateDate: "Jan 01, 2024",
      CreateTime: "1:11 PM",
      ModifiedDate: "Jan 08, 2024",
      ModifiedTime: "8:11 PM",
      status: "Online",
      profileimage: Profile,
      role: "Edit User",
    },
    {
      id: 3,
      OrderNum: "#0001",
      name: "Neil Sims",
      email: "neil.sims@flowbite.com",
      itemsnum: "001",
      CreateDate: "Jan 01, 2024",
      CreateTime: "1:11 PM",
      ModifiedDate: "Jan 08, 2024",
      ModifiedTime: "8:11 PM",
      price: "$111.00",
      status: "Online",
      profileimage: Profile,
      role: "Edit User",
    },
    {
      id: 4,
      OrderNum: "#0001",
      name: "Neil Sims",
      email: "neil.sims@flowbite.com",
      itemsnum: "001",
      price: "$111.00",
      CreateDate: "Jan 01, 2024",
      CreateTime: "1:11 PM",
      ModifiedDate: "Jan 08, 2024",
      ModifiedTime: "8:11 PM",
      status: "Online",
      profileimage: Profile,
      role: "Edit User",
    },
    {
      id: 5,
      OrderNum: "#0001",
      name: "Neil Sims",
      email: "neil.sims@flowbite.com",
      itemsnum: "001",
      price: "$111.00",
      CreateDate: "Jan 01, 2024",
      CreateTime: "1:11 PM",
      ModifiedDate: "Jan 08, 2024",
      ModifiedTime: "8:11 PM",
      status: "Online",
      profileimage: Profile,
      role: "Edit User",
    },
    {
      id: 6,
      OrderNum: "#0001",
      name: "Neil Sims",
      email: "neil.sims@flowbite.com",
      itemsnum: "001",
      price: "$111.00",
      CreateDate: "Jan 01, 2024",
      CreateTime: "1:11 PM",
      ModifiedDate: "Jan 01, 2024",
      ModifiedTime: "1:11 PM",
      status: "Online",
      profileimage: Profile,
      role: "Edit User",
    },
  ];

  const handleCheckboxChange = (id) => {
    const isSelected = selectedItems.includes(id);

    if (isSelected) {
      setSelectedItems(selectedItems.filter((itemId) => itemId !== id));
    } else {
      setSelectedItems([...selectedItems, id]);
    }
  };

  const handleSelectAll = () => {
    const allIds = tabledata.map((data) => data.id);

    if (selectedItems.length === allIds.length) {
      // If all are selected, unselect all
      setSelectedItems([]);
    } else {
      // Otherwise, select all
      setSelectedItems(allIds);
    }
  };

  const itemsPerPage = 8;
  const [currentPage, setCurrentPage] = useState(1);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentData = tabledata.slice(indexOfFirstItem, indexOfLastItem);
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const tableRef = useRef(null);

  const generateExcel = () => {
    // Assuming allData is the array containing your table data
    const ws = XLSX.utils.json_to_sheet(tabledata);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Sheet 1");
    XLSX.writeFile(wb, "table.xlsx", {
      bookType: "xlsx",
      mimeType:
        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    });
  };


  return (
    <div className=' relative overflow-x-auto border border-[#ebebeb] sm:rounded-lg  bg-white'>
     <div className='flex items-center justify-between rounded flex-column p-8 flex-wrap md:flex-row space-y-4 md:space-y-0 pb-4 bg-white '>
        <label for='table-search' className='sr-only '>
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
            className='block p-2 ps-10 text-sm font-medium text-gray-900 border border-gray-300 rounded-lg md:w-60 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 '
            placeholder='Search for Products'
          />
        </div>
        <div className='flex flex-col md:flex-row gap-6 text-[#404040] font-inter'>
          <div  className={`inputsopentoclickfilter flex items-center gap-2 ${
              isFilterOpen ? "block" : "hidden"
            }`}>
            <div className='flex items-center'>
              <label htmlFor='' className="mr-2 text-sm font-medium">Amount</label>
              <input
                type='number'
                name='amountto'
                placeholder='$ 0.00'
                className='w-[100px] font-inter border border-gray-300 text-gray-900 text-sm rounded-lg'
              />
              <span className=''>--</span>
              <input
                type='number'
                name='amountfrom'
                placeholder='$ 100.00'
                className='w-[100px] font-inter border border-gray-300 text-gray-900 text-sm rounded-lg'
              />
            </div>
            <div className='flex gap-2'>
              <div class='relative max-w-sm date-create'>
                <div class='absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none'>
                  <svg
                    class='w-4 h-4 text-[#404040] '
                    aria-hidden='true'
                    xmlns='http://www.w3.org/2000/svg'
                    fill='currentColor'
                    viewBox='0 0 20 20'
                  >
                    <path d='M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z' />
                  </svg>
                </div>
                <input
                  datepicker
                  datepicker-autohide
                  type='text'
                  class=' font-inter border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[150px] ps-10 mt-1 '
                  placeholder='Select date'
                />
              </div>
              <div class='relative max-w-sm due-date'>
                <div class='absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none'>
                  <svg
                    class='w-4 h-4 text-[#404040]'
                    aria-hidden='true'
                    xmlns='http://www.w3.org/2000/svg'
                    fill='currentColor'
                    viewBox='0 0 20 20'
                  >
                    <path d='M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z' />
                  </svg>
                </div>
                <input
                  datepicker
                  datepicker-autohide
                  type='text'
                  class=' font-inter border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[150px] ps-10 mt-1 '
                  placeholder='Select date'
                />
              </div>
              <select
                  as='select'
                  id='selectOption'
                  name='selectedOption'
                  className='border border-[#ebebeb] text-[#c0c0c0] font-inter border border-gray-300 text-gray-900 text-sm rounded-lg w-full mt-1'
                >
                  <option className="font-inter font-normal text-[#404040] text-sm leading-5" value='' disabled>
                    Select an option...
                  </option>
                  <option className="font-inter font-normal text-[#404040] text-sm leading-5" value='option1'>Option 1</option>
                  <option className="font-inter font-normal text-[#404040] text-sm leading-5" value='option2'>Option 2</option>
                  <option className="font-inter font-normal text-[#404040] text-sm leading-5" value='option3'>Option 3</option>
                </select>
                </div>
          </div>
          <button
            id='dropdownActionButton'
            data-dropdown-toggle='dropdownAction'
            className='inline-flex text-sm mt-0 md:mt-6 lg:mt-0 border border-[#ebebeb] rounded-md px-2 py-2 gap-2 items-center text-[#404040] font-normal font-inter  bg-white  focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200  '
            type='button'
            onClick={handleFilterToggle}
          >
            <img src={FilterIcon} className='h-4 w-4' alt='' />
            <span className='sr-only'>Action button</span>
            Filters
          </button>
          {/* <!-- Dropdown menu --> */}

          <div className='flex mt-0 md:mt-6 lg:mt-0 border border-[#ebebeb] rounded-md px-2 py-2 gap-2 items-center'>
            <img src={ExportXcelIcon} className='h-4 w-4' alt='' />
            <button
              onClick={generateExcel}
              className='text-[#404040] font-normal font-inter text-sm leading-7 '
            >
              Export to Excel
            </button>
          </div>
        </div>
      </div>
    <table ref={tableRef} class='w-full text-sm text-left rtl:text-right text-[#404040] '>
      <thead class='text-xs text-[#404040]  uppercase bg-gray-50  '>
        <tr>
          <th scope='col' class='p-4'>
            <div class='flex items-center'>
            <input
                    id='checkbox-all-search'
                    type='checkbox'
                    className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 '
                    checked={selectedItems.length === tabledata.length}
                    onChange={handleSelectAll}
                  />
              <label for='checkbox-all-search' class='sr-only'>
                checkbox
              </label>
            </div>
          </th>
          <th scope='col' class='px-6 py-3 font-inter '>
            ORDER ID
          </th>
          <th scope='col' class='px-6 py-3 font-inter '>
            CUSTOMER
          </th>
          <th scope='col' class='px-6 py-3 font-inter '>
            ITEMS
          </th>
          <th scope='col' class='px-6 py-3 font-inter '>
            PRICE
          </th>
          <th scope='col' class='px-6 py-3 font-inter '>
            CREATED
          </th>
          <th scope='col' class='px-6 py-3 font-inter '>
            MODIFIED
          </th>
          <th scope='col' class='px-6 py-3 font-inter '>
            STATUS
          </th>
          <th scope='col' class='px-6 py-3 font-inter '>
            ACTION
          </th>
        </tr>
      </thead>
      <tbody>
        {currentData.map((data) => (
          <tr
            class='bg-white border-b  text-[#404040] hover:bg-gray-50 '
            key={data.id}
          >
            <td class='w-4 p-4'>
              <div class='flex items-center'>
              <input
                    id={`checkbox-table-search-${data.id}`}
                    type='checkbox'
                    className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 '
                    checked={selectedItems.includes(data.id)}
                    onChange={() => handleCheckboxChange(data.id)}
                  />
                    <label
                      htmlFor={`checkbox-table-search-${data.id}`}
                      className='sr-only'
                    >
                  checkbox
                </label>
              </div>
            </td>
            <th className='px-6 py-4 text-[#404040]'>
              <div class='text-[14px] font-normal  font-inter'>
                {data.OrderNum}
              </div>
            </th>
            <th
              scope='row'
              class='flex items-center px-6 py-4 text-[#404040] whitespace-nowrap '
            >
              <img
                class='w-10 h-10 rounded-full'
                src={Profile}
                alt='Jese image'
              />

              <div class='ps-3'>
                <div class='text-[14px] font-semibold font-inter'>
                  {data.name}
                </div>
                <div class='text-[13px] font-medium text-[#404040] font-inter'>
                  {data.email}
                </div>
              </div>
            </th>
            <th className='px-6 py-4 text-[#404040]'>
              <div class='text-[14px] font-normal  font-inter'>
                {data.itemsnum}
              </div>
            </th>
            <th className='px-6 py-4 text-[#404040]'>
              <div class='text-[14px] font-normal  font-inter'>
                {data.price}
              </div>
            </th>
            <th
              scope='row'
              class='flex items-center px-6 py-4 text-[#404040] whitespace-nowrap '
            >
              <div class='ps-3'>
                <div class='text-[14px] font-semibold font-inter'>
                  {data.CreateDate}
                </div>
                <div class='text-[13px] font-normal text-[#404040] font-inter'>
                  {data.CreateTime}
                </div>
              </div>
            </th>

            <td class='px-6 py-4 font-inter'>
              <div class='text-[14px] font-semibold font-inter'>
                {data.CreateDate}
              </div>
              <div class='text-[13px] font-normal text-[#404040] font-inter'>
                {data.CreateTime}
              </div>
            </td>
            <td class='px-6 py-4 '>
              <div class='flex items-center bg-[#B1FFBC] font-inter rounded-full px-4 py-2 border  p-5'>
                <div class='h-2.5 w-2.5 rounded-full bg-green-500 me-2 font-inter  text-[14px]'></div>{" "}
                {data.status}
              </div>
            </td>
            {/* <td class="px-6 py-4">
              <a href="#" class="font-inter font-medium text-blue-600  hover:underline">{data.role}</a>
          </td> */}
            <td className='px-6 py-4 flex gap-4'>
              <a
                href='#'
                className='font-medium text-blue-600  hover:underline'
              >
                <img src={Edit} alt='' classNameName='w-6 h-6' />
              </a>
              <a
                href='#'
                className='font-medium text-blue-600  hover:underline'
              >
                <img src={Delete} alt='' classNameName='w-6 h-6' />
              </a>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
    <nav
      className='flex items-center justify-between pt-4 px-4 pb-4'
      aria-label='Table navigation'
    >
      {/* Show pagination */}
      <span className='text-[14px] font-normal text-[#404040] mb-4 md:mb-0 block w-full md:inline md:w-auto font-inter'>
        Showing{" "}
        <span className='font-semibold text-[#404040] text-[14px] font-inter'>
          {indexOfFirstItem + 1}-{Math.min(indexOfLastItem, tabledata.length)}
        </span>{" "}
        of{" "}
        <span className='font-semibold text-[#404040] text-[14px]  font-inter'>
          {tabledata.length}
        </span>
      </span>
      <ul className='inline-flex -space-x-px rtl:space-x-reverse text-sm h-8 font-inter'>
        <li>
          <button
            onClick={() => paginate(currentPage - 1)}
            disabled={currentPage === 1}
            className='flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-[#404040]  font-inter'
          >
            <img src={Prev} alt='' />
          </button>
        </li>
        {Array.from(
          { length: Math.ceil(tabledata.length / itemsPerPage) },
          (_, index) => (
            <li key={index}>
              <button
                onClick={() => paginate(index + 1)}
                className={`font-inter flex items-center justify-center px-3 h-8 leading-tight text-[#404040] bg-white border border-[#404040]${
                  currentPage === index + 1
                    ? "text-blue-600 bg-blue-50"
                    : "hover:bg-gray-100 hover:text-gray-700"
                } `}
              >
                {index + 1}
              </button>
            </li>
          )
        )}
        <li>
          <button
            onClick={() => paginate(currentPage + 1)}
            disabled={
              currentPage === Math.ceil(tabledata.length / itemsPerPage)
            }
            className=' flex items-center justify-center px-3 h-8 leading-tight text-[#404040] bg-white border border-[#404040] rounded-e-lg hover:[#404040] hover:text-[#404040]  font-inter'
          >
            <img src={Next} alt='' />
          </button>
        </li>
      </ul>
    </nav>
  </div>
  );
};

export default Invoicelisttable;
