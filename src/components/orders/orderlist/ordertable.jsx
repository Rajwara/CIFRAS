import React, { useRef, useEffect,useState } from "react";
import Next from "../../../assets/images/nextbuttonfortable.svg";
import Prev from "../../../assets/images/prevbuttonfortable.svg";
import Edit from "../../../assets/images/edittablebutton.svg";
import Delete from "../../../assets/images/deletetablebutton.svg";
import * as XLSX from "xlsx";
import ExportXcelIcon from "../../../assets/images/exportexcelicon.svg";
import FilterIcon from "../../../assets/images/filtericon.svg";
import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

const Ordertable = () => {
  const [selectedItems, setSelectedItems] = useState([]);
  const [isFilterOpen, setIsFilterOpen] = useState(false); 

//fiter date button in table
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

  const handleCheckboxChange = (id) => {
    const isSelected = selectedItems.includes(id);

    if (isSelected) {
      setSelectedItems(selectedItems.filter((itemId) => itemId !== id));
    } else {
      setSelectedItems([...selectedItems, id]);
    }
  };

  const handleSelectAll = () => {
    const allIds = allData.map((data) => data.id);

    if (selectedItems.length === allIds.length) {
      // If all are selected, unselect all
      setSelectedItems([]);
    } else {
      // Otherwise, select all
      setSelectedItems(allIds);
    }
  };

  const allData = [
    {
      id: 1,
      orderid: "#0023",
      items: "38",
      price: "Jan 01,2024",
      created: "Jan 01,2024	",
      modified: "Jan 01,2024	",
      status: "refunded",
    },
    {
      id: 2,
      orderid: "#0023",
      items: "38",
      price: "Jan 01,2024",
      created: "Jan 01,2024	",
      modified: "Jan 01,2024	",
      status: "refunded",
    },
    {
      id: 3,
      orderid: "#0023",
      items: "38",
      price: "Jan 01,2024",
      created: "Jan 01,2024	",
      modified: "Jan 01,2024	",
      status: "refunded",
    },
    {
      id: 4,
      orderid: "#0023",
      items: "38",
      price: "Jan 01,2024",
      created: "Jan 01,2024	",
      modified: "Jan 01,2024	",
      status: "refunded",
    },
    {
      id: 5,
      orderid: "#0023",
      items: "38",
      price: "Jan 01,2024",
      created: "Jan 01,2024	",
      modified: "Jan 01,2024	",
      status: "refunded",
    },
    {
      id: 6,
      orderid: "#0023",
      items: "38",
      price: "Jan 01,2024",
      created: "Jan 01,2024	",
      modified: "Jan 01,2024	",
      status: "refunded",
    },
    {
      id: 7,
      orderid: "#0023",
      items: "38",
      price: "Jan 01,2024",
      created: "Jan 01,2024	",
      modified: "Jan 01,2024	",
      status: "refunded",
    },
    {
      id: 8,
      orderid: "#0023",
      items: "38",
      price: "Jan 01,2024",
      created: "Jan 01,2024	",
      modified: "Jan 01,2024	",
      status: "refunded",
    },
    {
      id: 9,
      orderid: "#0023",
      items: "38",
      price: "Jan 01,2024",
      created: "Jan 01,2024	",
      modified: "Jan 01,2024	",
      status: "refunded",
    },
    {
      id: 10,
      orderid: "#0023",
      items: "38",
      price: "Jan 01,2024",
      created: "Jan 01,2024	",
      modified: "Jan 01,2024	",
      status: "refunded",
    },
    {
      id: 11,
      orderid: "#0023",
      items: "38",
      price: "Jan 01,2024",
      created: "Jan 01,2024	",
      modified: "Jan 01,2024	",
      status: "refunded",
    },
  ];

  const itemsPerPage = 8;
  const [currentPage, setCurrentPage] = useState(1);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentData = allData.slice(indexOfFirstItem, indexOfLastItem);
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const tableRef = useRef(null);

  const generateExcel = () => {
    // Assuming allData is the array containing your table data
    const ws = XLSX.utils.json_to_sheet(allData);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Sheet 1");
    XLSX.writeFile(wb, "table.xlsx", {
      bookType: "xlsx",
      mimeType:
        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    });
  };

  return (
    <div className='border border-[#ebebeb] rounded '>
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
      <div className='relative overflow-x-auto shadow-md sm:rounded-lg '>
        <table
          ref={tableRef}
          className='w-full text-sm text-left text-[#404040] font-inter font-normal'
        >
          <thead className='text-xs  uppercase text-[#404040] bg-[#ECECEC]'>
            <tr>
              <th scope='col' className='p-4'>
                <div className='flex items-center'>
                  <input
                    id='checkbox-all-search'
                    type='checkbox'
                    className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 '
                    checked={selectedItems.length === allData.length}
                    onChange={handleSelectAll}
                  />
                  <label for='checkbox-all-search' className='sr-only'>
                    checkbox
                  </label>
                </div>
              </th>
              <th scope='col' className='px-6 py-3'>
                Order id
              </th>
              <th scope='col' className='px-6 py-3'>
                items
              </th>
              <th scope='col' className='px-6 py-3'>
                price
              </th>
              <th scope='col' className='px-6 py-3'>
                created
              </th>
              <th scope='col' className='px-6 py-3'>
                modified
              </th>
              <th scope='col' className='px-6 py-3'>
                status
              </th>
              <th scope='col' className='px-6 py-3'>
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {currentData.map((data) => (
              <tr
                key={data.id}
                className='bg-white border-b   hover:bg-gray-50 '
              >
                <td className='w-4 p-4'>
                  <div className='flex items-center'>
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
                <th
                  scope='row'
                  className='px-6 uppercase py-4 font-medium text-gray-900 whitespace-nowrap '
                >
                  {data.orderid}
                </th>
                <td className='px-6 uppercase py-4'>{data.items}</td>
                <td className='px-6 py-4'>{data.price}</td>
                <td className='px-6 py-4'>{data.created}</td>
                <td className='px-6 py-4'>{data.modified}</td>
                <td className='px-6 py-4'>{data.status}</td>
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
          <span className='text-sm font-normal text-gray-500 dark:text-gray-400 mb-4 md:mb-0 block w-full md:inline md:w-auto font-inter'>
            Showing{" "}
            <span className='font-semibold text-gray-900 dark:text-white font-inter'>
              {indexOfFirstItem + 1}-{Math.min(indexOfLastItem, allData.length)}
            </span>{" "}
            of{" "}
            <span className='font-semibold text-gray-900 dark:text-white font-inter'>
              {allData.length}
            </span>
          </span>
          <ul className='inline-flex -space-x-px rtl:space-x-reverse text-sm h-8 font-inter'>
            <li>
              <button
                onClick={() => paginate(currentPage - 1)}
                disabled={currentPage === 1}
                className='flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white font-inter'
              >
                <img src={Prev} alt='' />
              </button>
            </li>
            {Array.from(
              { length: Math.ceil(allData.length / itemsPerPage) },
              (_, index) => (
                <li key={index}>
                  <button
                    onClick={() => paginate(index + 1)}
                    className={`font-inter flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 ${
                      currentPage === index + 1
                        ? "text-blue-600 bg-blue-50"
                        : "hover:bg-gray-100 hover:text-gray-700"
                    } dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white`}
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
                  currentPage === Math.ceil(allData.length / itemsPerPage)
                }
                className='font-inter flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white font-inter'
              >
                <img src={Next} alt='' />
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Ordertable;
