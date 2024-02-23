import React, { useRef, useState } from "react";
import Next from "../../assets/images/nextbuttonfortable.svg";
import Prev from "../../assets/images/prevbuttonfortable.svg";
import Edit from "../../assets/images/edittablebutton.svg";
import Delete from "../../assets/images/deletetablebutton.svg";
import * as XLSX from "xlsx";
import ExportXcelIcon from "../../assets/images/exportexcelicon.svg";
import FilterIcon from "../../assets/images/filtericon.svg";


const Quotetabledata = () => {
  const [selectedItems, setSelectedItems] = useState([]);
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
      qouteid: "99",
      quotenumber: "Q-01",
      quotedate: "Jan 01,2024	",
      expirationdate: "Jan 01,2024	",
      notes: "$Abc",
      notificationdata: "Jan 01,2024	",
      client: "undefined",
    },
    {
      id: 2,
      qouteid: "99",
      quotenumber: "Q-01",
      quotedate: "Jan 01,2024	",
      expirationdate: "Jan 01,2024	",
      notes: "$Abc",
      notificationdata: "Jan 01,2024	",
      client: "undefined",
    },
    {
      id: 3,
      qouteid: "99",
      quotenumber: "Q-01",
      quotedate: "Jan 01,2024	",
      expirationdate: "Jan 01,2024	",
      notes: "$Abc",
      notificationdata: "Jan 01,2024	",
      client: "undefined",
    },
    {
      id: 4,
      qouteid: "99",
      quotenumber: "Q-01",
      quotedate: "Jan 01,2024	",
      expirationdate: "Jan 01,2024	",
      notes: "$Abc",
      notificationdata: "Jan 01,2024	",
      client: "undefined",
    },
    {
      id: 5,
      qouteid: "99",
      quotenumber: "Q-01",
      quotedate: "Jan 01,2024	",
      expirationdate: "Jan 01,2024	",
      notes: "$Abc",
      notificationdata: "Jan 01,2024	",
      client: "undefined",
    },
    {
      id: 6,
      qouteid: "99",
      quotenumber: "Q-01",
      quotedate: "Jan 01,2024	",
      expirationdate: "Jan 01,2024	",
      notes: "$Abc",
      notificationdata: "Jan 01,2024	",
      client: "undefined",
    },
    {
      id: 7,
      qouteid: "99",
      quotenumber: "Q-01",
      quotedate: "Jan 01,2024	",
      expirationdate: "Jan 01,2024	",
      notes: "$Abc",
      notificationdata: "Jan 01,2024	",
      client: "undefined",
    },
    {
      id: 8,
      qouteid: "99",
      quotenumber: "Q-01",
      quotedate: "Jan 01,2024	",
      expirationdate: "Jan 01,2024	",
      notes: "$Abc",
      notificationdata: "Jan 01,2024	",
      client: "undefined",
    },
    {
      id: 9,
      qouteid: "99",
      quotenumber: "Q-01",
      quotedate: "Jan 01,2024	",
      expirationdate: "Jan 01,2024	",
      notes: "$Abc",
      notificationdata: "Jan 01,2024	",
      client: "undefined",
    },
    {
      id: 10,
      qouteid: "99",
      quotenumber: "Q-01",
      quotedate: "Jan 01,2024	",
      expirationdate: "Jan 01,2024	",
      notes: "$Abc",
      notificationdata: "Jan 01,2024	",
      client: "undefined",
    },
    {
      id: 11,
      qouteid: "99",
      quotenumber: "Q-01",
      quotedate: "Jan 01,2024	",
      expirationdate: "Jan 01,2024	",
      notes: "$Abc",
      notificationdata: "Jan 01,2024	",
      client: "undefined",
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
    <div className='border border-[#ebebeb] rounded'>
      <div className='flex items-center justify-between rounded flex-column p-8 flex-wrap md:flex-row space-y-4 md:space-y-0 pb-4 bg-white '>
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
            className='block p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg md:w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 '
            placeholder='Search for users'
          />
        </div>
        <div className='flex flex-col md:flex-row  gap-6'>
          <div className='flex border mt-0 md:mt-6 lg:mt-0 border-[#ebebeb] rounded-md px-4 py-2 gap-2 items-center'>
            <img src={ExportXcelIcon} className="h-4 w-4" alt='' />
            <button
              onClick={generateExcel}
              className='text-[#404040] font-normal font-inter text-sm leading-7'
            >
              Export to Excel
            </button>
          </div>
          <button
            id='dropdownActionButton'
            data-dropdown-toggle='dropdownAction'
            className='inline-flex mt-0 md:mt-6 lg:mt-0 text-sm  border border-[#ebebeb] rounded-md px-4 py-2 gap-2 items-center text-[#404040] font-normal font-inter  bg-white  focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200  '
            type='button'
          >
            <img src={FilterIcon} className="h-4 w-4" alt='' />
            <span className='sr-only'>Action button</span>
            Action
          </button>
          {/* <!-- Dropdown menu --> */}
          <div
            id='dropdownAction'
            className='z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 '
          >
            <ul
              className='py-1  text-[#404040] font-inter text-[12px] '
              aria-labelledby='dropdownActionButton'
            >
              <li>
                <a href='#' className='block px-4 py-2 hover:bg-gray-100 '>
                  Reward
                </a>
              </li>
              <li>
                <a href='#' className='block px-4 py-2 hover:bg-gray-100 '>
                  Promote
                </a>
              </li>
              <li>
                <a href='#' className='block px-4 py-2 hover:bg-gray-100 '>
                  Activate account
                </a>
              </li>
            </ul>
            <div className='py-1'>
              <a
                href='#'
                className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 '
              >
                Delete User
              </a>
            </div>
          </div>
        </div>
      </div>
      <div class='relative overflow-x-auto shadow-md sm:rounded-lg '>
        <table
          ref={tableRef}
          class='w-full text-sm text-left text-[#404040] font-inter font-normal '
        >
          <thead class='text-xs  uppercase text-[#404040] bg-[#ECECEC]'>
            <tr className=''>
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
              <th scope='col' class='px-6 py-4'>
                ID
              </th>
              <th scope='col' class='px-6 py-4'>
                Quote Number
              </th>
              <th scope='col' class='px-6 py-4'>
                Quote Date
              </th>
              <th scope='col' class='px-6 py-4'>
                Expiration Date
              </th>
              <th scope='col' class='px-6 py-4'>
                Notes
              </th>
              <th scope='col' class='px-6 py-4'>
                Notification Date
              </th>
              <th scope='col' class='px-6 py-4'>
                Client
              </th>
              <th scope='col' class='px-6 py-4'>
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {currentData.map((data) => (
              <tr key={data.id} class='bg-white border-b '>
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
                <td
                  scope='row'
                  class='px-6 py-4 font-medium text-[#404040] whitespace-nowrap '
                >
                  {data.qouteid}
                </td>
                <td scope='row' class='px-6 py-4 '>
                  {data.quotenumber}
                </td>
                <td class='px-6 py-4'>{data.quotedate}</td>
                <td class='px-6 py-4'>{data.expirationdate}</td>
                <td class='px-6 py-4'>{data.notes}</td>
                <td class='px-6 py-4'>{data.notificationdata}</td>
                <td class='px-6 py-4'>{data.client}</td>
                <td class='px-6 py-4 flex gap-4'>
                  <a
                    href='#'
                    class='font-medium text-blue-600  hover:underline'
                  >
                    <img src={Edit} alt='' className='w-6 h-6' />
                  </a>
                  <a
                    href='#'
                    class='font-medium text-blue-600  hover:underline'
                  >
                    <img src={Delete} alt='' className='w-6 h-6' />
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

export default Quotetabledata;
