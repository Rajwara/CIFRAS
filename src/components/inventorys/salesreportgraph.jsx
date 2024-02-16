import React, { useState } from 'react';
import Chart from 'react-apexcharts';
import Circle from "../../assets/images/salescircle.svg";

const Salesreportgraph = () => {
  const [chartType, setChartType] = useState('revenue');

  const revenueData = {
    options: {
      chart: {
        id: 'revenue-chart',
      },
      xaxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',"Jul","Aug","Sep","Oct","Nov","Dec"],
      },
    },
    series: [
      {
        name: 'Revenue',
        data:  [0, 3000, 3000, 2000,2000, 1000,300,100,1500,2500,1200,200],
      },
    ],
  };

  const expenseData = {
    options: {
      chart: {
        id: 'expense-chart',
      },
      xaxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',"Jul","Aug","Sep","Oct","Nov","Dec"],
      },
    },
    series: [
      {
        name: 'Expense',
        data: [0, 3000, 3000, 2000,2000, 1000,300,100,1500,2500,1200,200],
      },
    ],
  };

  const chartData = chartType === 'revenue' ? revenueData : expenseData;

  return (
    <div>
      <div className=" w-full bg-white font-inter rounded-lg shadow p-4 md:p-6">
        {/* <div className="flex justify-between border-gray-200 border-b dark:border-gray-700 pb-3">
          <dl>
            <dt className="text-base font-normal text-gray-500 dark:text-gray-400 pb-1">Profit</dt>
            <dd className="leading-none text-3xl font-bold text-gray-900 dark:text-white">$5,405</dd>
          </dl>
          <div>
            <span className="bg-green-100 text-green-800 text-xs font-medium inline-flex items-center px-2.5 py-1 rounded-md dark:bg-green-900 dark:text-green-300">
              <svg className="w-2.5 h-2.5 me-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 14">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13V1m0 0L1 5m4-4 4 4"/>
              </svg>
              Profit rate 23.5%
            </span>
          </div>
        </div> */}

        <div className="flex flex-col gap-4 py-3">
          {/* Toggle between Revenue and Expense labels */}
          <h2 className='font-inter font-bold text-[#404040] text-xl leading-9'>Sales Report</h2>
          <div className='flex flex-row gap-6'>
          <button
            onClick={() => setChartType('revenue')}
            className={`flex items-center font-inter text-lg cursor-pointer focus:outline-none ${chartType === 'revenue' ? 'text-green-500 font-bold' : 'text-[#404040] '}`}
          >
            <img src={Circle} alt='' className='h-4 w-4 mr-2' />
            Revenue
          </button>
          <button
            onClick={() => setChartType('expense')}
            className={`flex items-center font-inter text-lg  cursor-pointer focus:outline-none ${chartType === 'expense' ? 'text-red-600 font-bold' : 'text-[#404040]'}`}
          >
            <img src={Circle} alt='' className='h-4 w-4 mr-2' />
            Expense
          </button>
          
          </div>
        </div>

        {/* Display the ApexCharts bar chart */}
        <div className="py-3">
          <Chart
            options={chartData.options}
            series={chartData.series}
            type="bar"
            height={350}
            className="text-[#2591FA]"
          />
        </div>
      </div>
    </div>
  );
};

export default Salesreportgraph;
