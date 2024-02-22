import React, { useState } from "react";
import Chart from "react-apexcharts";

const Salesreportgraph = () => {
  const [chartType, setChartType] = useState("revenue");

  const revenueData = {
    options: {
      chart: {
        id: "revenue-chart",
      },
      xaxis: {
        categories: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec",
        ],
      },
    },
    series: [
      {
        name: "Revenue",
        data: [20, 25, 30, 22, 18, 15, 30, 22, 16, 1, 10, 25],
      },
    ],
  };

  const expenseData = {
    options: {
      chart: {
        id: "expense-chart",
      },
      xaxis: {
        categories: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec",
        ],
      },
    },
    series: [
      {
        name: "Expense",
        data: [20, 25, 30, 22, 18, 15, 30, 22, 16, 1, 10, 25],
      },
    ],
  };

  const chartData = chartType === "revenue" ? revenueData : expenseData;

  return (
    <div>
      <div className=' w-full bg-white font-inter rounded-lg shadow  p-4 md:p-6'>
        {/* <div className="flex justify-between border-gray-200 border-b  pb-3">
          <dl>
            <dt className="text-base font-normal text-[#404040]  pb-1">Profit</dt>
            <dd className="leading-none text-3xl font-bold text-[#404040] ">$5,405</dd>
          </dl>
          <div>
            <span className="bg-green-100 text-green-800 text-xs font-medium inline-flex items-center px-2.5 py-1 rounded-md ">
              <svg className="w-2.5 h-2.5 me-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 14">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13V1m0 0L1 5m4-4 4 4"/>
              </svg>
              Profit rate 23.5%
            </span>
          </div>
        </div> */}

        <div className='flex  flex-col gap-4 py-3'>
          {/* Toggle between Revenue and Expense labels */}
          <h6 className='font-inter font-bold text-xl text-[#404040] leading-9 '>
            {" "}
            Sales Report
          </h6>
          <div className='flex gap-6'>
            <button
              onClick={() => setChartType("revenue")}
              className={`cursor-pointer focus:outline-none ${
                chartType === "revenue"
                  ? "text-green-500 font-bold"
                  : "text-[#404040] "
              }`}
            >
              Revenue
            </button>
            <button
              onClick={() => setChartType("expense")}
              className={`cursor-pointer focus:outline-none ${
                chartType === "expense"
                  ? "text-red-600 font-bold"
                  : "text-[#404040] "
              }`}
            >
              Expense
            </button>
          </div>
        </div>

        {/* Display the ApexCharts bar chart */}
        <div className='py-3'>
          <Chart
            options={chartData.options}
            series={chartData.series}
            type='bar'
            height={350}
          />
        </div>

        <div className='grid grid-cols-1 items-center border-gray-200 border-t justify-between'>
          <div className='flex justify-between items-center pt-5'>
            {/* <!-- Button --> */}
            <button
              id='dropdownDefaultButton'
              data-dropdown-toggle='lastDaysdropdown'
              data-dropdown-placement='bottom'
              className='text-sm font-medium text-gray-500  hover:text-gray-900 text-center inline-flex items-center '
              type='button'
            >
              Last 6 months
              <svg
                className='w-2.5 m-2.5 ms-1.5'
                aria-hidden='true'
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 10 6'
              >
                <path
                  stroke='currentColor'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='m1 1 4 4 4-4'
                />
              </svg>
            </button>

            {/* <!-- Dropdown menu --> */}
            <div
              id='lastDaysdropdown'
              class='z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 '
            >
              <ul
                class='py-2 text-sm text-[#404040]  font-inter'
                aria-labelledby='dropdownDefaultButton'
              >
                <li>
                  <a href='#' class='block px-4 py-2 hover:bg-gray-100 '>
                    Yesterday
                  </a>
                </li>
                <li>
                  <a href='#' class='block px-4 py-2 hover:bg-gray-100 '>
                    Today
                  </a>
                </li>
                <li>
                  <a href='#' class='block px-4 py-2 hover:bg-gray-100 '>
                    Last 7 days
                  </a>
                </li>
                <li>
                  <a href='#' class='block px-4 py-2 hover:bg-gray-100'>
                    Last 30 days
                  </a>
                </li>
                <li>
                  <a href='#' class='block px-4 py-2 hover:bg-gray-100 '>
                    Last 90 days
                  </a>
                </li>
                <li>
                  <a href='#' class='block px-4 py-2 hover:bg-gray-100'>
                    Last 6 months
                  </a>
                </li>
                <li>
                  <a href='#' class='block px-4 py-2 hover:bg-gray-100  '>
                    Last year
                  </a>
                </li>
              </ul>
            </div>

            {/* Revenue Report button */}
            <a
              href='#'
              className='uppercase text-sm font-semibold font-inter text-[#404040] inline-flex items-center rounded-lg   px-3 py-2'
            >
              Revenue Report
              <svg
                className='w-2.5 h-2.5 ms-1.5 rtl:rotate-180'
                aria-hidden='true'
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 6 10'
              >
                <path
                  stroke='currentColor'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='m1 9 4-4-4-4'
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Salesreportgraph;
