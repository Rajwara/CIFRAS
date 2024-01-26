import React, { useState, useEffect } from "react";
import ApexCharts from "react-apexcharts";

const TotalProfitGraph = () => {
  const [chartOptions, setChartOptions] = useState({
    xaxis: {
      show: true,
      categories: [
        "01 Feb",
        "02 Feb",
        "03 Feb",
        "04 Feb",
        "05 Feb",
        "06 Feb",
        "07 Feb",
      ],
      labels: {
        show: true,
        style: {
          fontFamily: "rubik, sans-serif",
          cssClass: "text-xs font-normal fill-gray-500 dark:fill-gray-400",
        },
      },
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
    },
    yaxis: {
      show: true,
      labels: {
        show: true,
        style: {
          fontFamily: "rubik, sans-serif",
          cssClass: "text-xs font-normal fill-gray-500 dark:fill-gray-400",
        },
        formatter: function (value) {
          return "$" + value;
        },
      },
    },
    series: [
      {
        name: "Developer Edition",
        data: [150, 141, 145, 152, 135, 125],
        color: "#1A56DB",
      },
      {
        name: "Designer Edition",
        data: [43, 13, 65, 12, 42, 73],
        color: "#7E3BF2",
      },
    ],
    chart: {
      sparkline: {
        enabled: false,
      },
      height: "100%",
      width: "100%",
      type: "area",
      fontFamily: "Inter, sans-serif",
      dropShadow: {
        enabled: false,
      },
      toolbar: {
        show: false,
      },
    },
    tooltip: {
      enabled: true,
      x: {
        show: false,
      },
    },
    fill: {
      type: "gradient",
      gradient: {
        opacityFrom: 0.55,
        opacityTo: 0,
        shade: "#1C64F2",
        gradientToColors: ["#1C64F2"],
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      width: 6,
    },
    legend: {
      show: false,
    },
    grid: {
      show: false,
    },
  });

  useEffect(() => {
    // Clean up the chart when the component unmounts
    return () => {
      // If you want to destroy the chart on unmount, uncomment the next line
      // chartInstance && chartInstance.destroy();
    };
  }, []);

  return (
    <div className="w-full bg-white rounded-lg shadow dark:bg-gray-800">
      <div className="flex justify-between p-4 md:p-6 pb-0 md:pb-0">
        <div>
          <div className=" justify-between items-center grid grid-cols-2">
            <h5 className="leading-none text-3xl font-bold text-gray-900 dark:text-white pb-2 font-rubik">
              $12,423
            </h5>
            <h5 className="leading-none text-xl font-bold  pb-2 font-rubik text-[#000] m">
         Total profit without tax included.
            </h5>
              <button
              id="dropdownDefaultButton"
              data-dropdown-toggle="lastDaysdropdown"
              data-dropdown-placement="bottom"
              class="text-sm font-medium text-gray-500 dark:text-gray-400 hover:text-gray-900 text-center inline-flex items-center dark:hover:text-white font-rubik"
              type="button"
            >
              Last 7 days
              <svg
                class="w-2.5 m-2.5 ms-1.5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 6"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m1 1 4 4 4-4"
                />
              </svg>
            </button>
          </div>
          <div>
            {/* <!-- Button --> */}
          
          </div>
        </div>
      
      </div>
      <div id="labels-chart" class="px-2.5">
        <ApexCharts
          options={chartOptions}
          series={chartOptions.series}
          type="area"
          height="350"
        />
      </div>
      <div className="grid grid-cols-1 items-center border-gray-200 border-t dark:border-gray-700 justify-between mt-14 p-4 md:p-6 pt-0 md:pt-0">
       
      </div>
    </div>
  );
};

export default TotalProfitGraph;