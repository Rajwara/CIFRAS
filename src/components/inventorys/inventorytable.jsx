import React, { useRef, useState, useEffect } from "react";
import Next from "../../assets/images/nextbuttonfortable.svg";
import Prev from "../../assets/images/prevbuttonfortable.svg";
import Edit from "../../assets/images/edittablebutton.svg";
import Delete from "../../assets/images/deletetablebutton.svg";
import Image from "../../assets/images/inventoryimagefortable.svg";
import * as XLSX from "xlsx";
import ExportXcelIcon from "../../assets/images/exportexcelicon.svg";
import FilterIcon from "../../assets/images/filtericon.svg";

const Inventorytable = () => {
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
      itemnumber: "Apple Iphone",
      image: Image,
      description: "Black",
      unitprice: "Laptop",
      unitofmeasure: "$8990",
      vendor: "undefined",
    },
    {
      id: 2,
      itemnumber: "Apple Iphone",
      image: Image,
      description: "Black",
      unitprice: "Laptop",
      unitofmeasure: "$8990",
      vendor: "undefined",
    },
    {
      id: 3,
      itemnumber: "Apple Iphone",
      image: Image,
      description: "Black",
      unitprice: "Laptop",
      unitofmeasure: "$8990",
      vendor: "undefined",
    },
    {
      id: 4,
      itemnumber: "Apple Iphone",
      image: Image,
      description: "Black",
      unitprice: "Laptop",
      unitofmeasure: "$8990",
      vendor: "undefined",
    },
    {
      id: 5,
      itemnumber: "Apple Iphone",
      image: Image,
      description: "Black",
      unitprice: "Laptop",
      unitofmeasure: "$8990",
      vendor: "undefined",
    },
    {
      id: 6,
      itemnumber: "Apple Iphone",
      image: Image,
      description: "Black",
      unitprice: "Laptop",
      unitofmeasure: "$8990",
      vendor: "undefined",
    },
    {
      id: 7,
      itemnumber: "Apple Iphone",
      image: Image,
      description: "Black",
      unitprice: "Laptop",
      unitofmeasure: "$8990",
      vendor: "undefined",
    },
    {
      id: 8,
      itemnumber: "Apple Iphone",
      image: Image,
      description: "Black",
      unitprice: "Laptop",
      unitofmeasure: "$8990",
      vendor: "undefined",
    },
    {
      id: 9,
      itemnumber: "Apple Iphone",
      image: Image,
      description: "Black",
      unitprice: "Laptop",
      unitofmeasure: "$8990",
      vendor: "undefined",
    },
    {
      id: 10,
      itemnumber: "Apple ",
      image: Image,
      description: "Black",
      unitprice: "Laptop",
      unitofmeasure: "$8990",
      vendor: "undefined",
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

  useEffect(() => {
    // Handle any side effects related to products or pagination
  }, [allData, currentPage]);

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
        <div className='flex flex-col md:flex-row gap-6 mt-6  lg:mt-0'>
          <div className='flex mt-0 md:mt-6 lg:mt-0 border border-[#ebebeb] rounded-md px-4 py-2 gap-2 items-center'>
            <img src={ExportXcelIcon} className="w-4 h-4" alt='' />
            <button
              onClick={generateExcel}
              className='text-[#404040] mt-0 font-normal font-inter text-sm leading-7 '
            >
              Export to Excel
            </button>
          </div>
          <button
            id='dropdownActionButton'
            data-dropdown-toggle='dropdownAction'
            className='inline-flex mt-0 md:mt-6 text-sm lg:mt-0 border border-[#ebebeb] rounded-md px-4 py-2 gap-2 items-center text-[#404040] font-normal font-inter  bg-white  focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200  '
            type='button'
          >
            <img src={FilterIcon} className="w-4 h-4" alt='' />
            <span className='sr-only'>Action button</span>
            Filters
          </button>
          {/* <!-- Dropdown menu --> */}
          <div
            id='dropdownAction'
            className='z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 '
          >
            <ul
              className='py-1 text-sm text-[#404040] font-inter '
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
                className='block px-4 py-2  text-sm text-[#404040] font-inter '
              >
                Delete User
              </a>
            </div>
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
              <th scope='col' className='font-lexend px-6 py-3'>
                Item Number
              </th>
              <th scope='col' className='font-lexend px-6 py-3'>
                Image
              </th>
              <th scope='col' className='font-lexend px-6 py-3'>
                Description
              </th>
              <th scope='col' className='font-lexend px-6 py-3'>
                Unit Price
              </th>
              <th scope='col' className='font-lexend px-6 py-3'>
                Unit of Measure
              </th>
              <th scope='col' className='font-lexend px-6 py-3'>
                Vendor
              </th>
              <th scope='col' className='font-lexend px-6 py-3'>
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {currentData.map((data) => (
              <tr key={data.id} className='bg-white border-b  hover:bg-gray-50'>
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
                  className='px-6 py-4 font-medium text-[#404040] font-inter  whitespace-nowrap '
                >
                  {data.itemnumber}
                </th>
                <td className='px-6 py-4  '>
                  <img src={data.image} alt='' className='' />
                </td>
                <td className='px-6 py-4'>{data.description}</td>
                <td className='px-6 py-4'>{data.unitprice}</td>
                <td className='px-6 py-4'>{data.unitofmeasure}</td>
                <td className='px-6 py-4'>{data.vendor}</td>
                <td className='px-6 py-4 font-inter flex gap-4'>
                  <a
                    href='#'
                    className='font-medium text-blue-600  hover:underline'
                  >
                    {/* Trigger Button */}
                    <button className=''>
                      <img src={Edit} alt='' classNameName='w-6 h-6' />
                    </button>
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
          className='flex items-center justify-between pt-4 px-8 pb-4'
          aria-label='Table navigation'
        >
          {/* Show pagination */}
          <span className='text-sm font-normal text-[#404040] mb-4 md:mb-0 block w-full md:inline md:w-auto font-inter'>
            Showing{" "}
            <span className='font-semibold text-gray-900  font-inter'>
              {indexOfFirstItem + 1}-{Math.min(indexOfLastItem, allData.length)}
            </span>{" "}
            of{" "}
            <span className='font-semibold text-[#404040] font-inter'>
              {allData.length}
            </span>
          </span>
          <ul className='inline-flex -space-x-px rtl:space-x-reverse text-sm h-8 font-inter'>
            <li>
              <button
                onClick={() => paginate(currentPage - 1)}
                disabled={currentPage === 1}
                className='flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700  font-inter'
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
                        : "hover:bg-gray-100 hover:text-[#404040]"
                    }  `}
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
                className='font-inter flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700  font-inter'
              >
                <img src={Next} alt='' />
              </button>
            </li>
          </ul>
        </nav>
      </div>
      <div></div>
    </div>
  );
};

export default Inventorytable;
