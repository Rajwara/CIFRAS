import React, { useEffect, useState } from "react";
import ReactApexChart from "react-apexcharts";
const Promotionalsalesgraph = () => {
  const [chartOptions, setChartOptions] = useState({
    series: [90, 85, 70],
    colors: ["#2591FA", "#634AF9", "#F092FF"],
    chart: {
      height: "380px",
      width: "100%",
      type: "radialBar",
      sparkline: {
        enabled: true,
      },
    },
    plotOptions: {
      radialBar: {
        track: {
          background: "#E5E7EB",
        },
        dataLabels: {
          show: false,
        },
        hollow: {
          margin: 0,
          size: "32%",
        },
      },
    },
    grid: {
      show: false,
      strokeDashArray: 4,
      padding: {
        left: 2,
        right: 2,
        top: -23,
        bottom: -20,
      },
    },
    labels: ["Fashion", "House Hold", "Electronics"],
    legend: {
      show: true,
      position: "bottom",
      fontFamily: "inter, sans-serif",
      color:"#404040",
    },
    tooltip: {
      enabled: true,
      x: {
        show: false,
      },
    },
    yaxis: {
      show: false,
      labels: {
        formatter: function (value) {
          return value + "%";
        },
      },
    },
  });

  useEffect(() => {
    // Simulate fetching data from an API
    const fetchData = async () => {
      try {
        // Replace this with your actual API call to get chart data
        const response = await fetch("your_api_endpoint");
        const data = await response.json();

        // Update chart options with new data
        setChartOptions((prevOptions) => ({
          ...prevOptions,
          series: data.series,
          labels: data.labels,
          // Update other options as needed based on your data
        }));
      } catch (error) {
        console.error("Error fetching chart data:", error);
      }
    };

    fetchData();
  }, []);
  return (
    <div>
      <div class=" w-full bg-white rounded-lg shadow font-inter  p-4 md:p-6">
        <div class="flex justify-between mb-3">
          <div class="flex items-center">
            <div class="block justify-center items-center ">
              <div className="flex justify-center items-center">
                <h5 class="text-3xl font-bold leading-none text-[#404040]  pe-1 font-lexend">
                  Promotional Sales
                </h5>
              </div>
              <div>
                {/* <!-- Button --> */}
                <button
                  id="dropdownDefaultButton"
                  data-dropdown-toggle="lastDaysdropdown"
                  data-dropdown-placement="bottom"
                  class="text-sm font-medium text-[#404040]  text-center inline-flex items-center  font-inter"
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
              <div
                data-popover
                id="chart-info"
                role="tooltip"
                class="absolute z-10 invisible inline-block text-sm text-gray-500 transition-opacity duration-300 bg-white border border-gray-200 rounded-lg shadow-sm opacity-0 w-72 "
              >
                <div class=" p-3 space-y-2">
                  <h3 class="font-semibold text-[#404040] ">
                    Activity growth - Incremental
                  </h3>
                  <p>
                    Report helps navigate cumulative growth of community
                    activities. Ideally, the chart should have a growing trend,
                    as stagnating chart signifies a significant decrease of
                    community activity.
                  </p>
                  <h3 class="font-semibold text-[#404040] ">Calculation</h3>
                  <p>
                    For each date bucket, the all-time volume of activities is
                    calculated. This means that activities in period n contain
                    all activities up to period n, plus the activities generated
                    by your community in period.
                  </p>
                  <a
                    href="#"
                    class="flex items-center font-medium text-blue-600  hover:text-blue-700 hover:underline"
                  >
                    Read more{" "}
                    <svg
                      class="w-2 h-2 ms-1.5 rtl:rotate-180"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 6 10"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="m1 9 4-4-4-4"
                      />
                    </svg>
                  </a>
                </div>
                <div data-popper-arrow></div>
              </div>
            </div>
          </div>
        </div>

        <div class=" ">
          <div
            id="more-details"
            class="border-gray-200 border-t  pt-3 mt-3 space-y-2 hidden"
          >
            <dl class="flex items-center justify-between">
              <dt class="text-[#404040]  text-sm font-normal">
                Average task completion rate:
              </dt>
              <dd class="bg-green-100 text-green-800 text-xs font-medium inline-flex items-center px-2.5 py-1 rounded-md ">
                <svg
                  class="w-2.5 h-2.5 me-1.5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 14"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 13V1m0 0L1 5m4-4 4 4"
                  />
                </svg>{" "}
                57%
              </dd>
            </dl>
            <dl class="flex items-center justify-between">
              <dt class="text-[#404040]  text-sm font-normal">
                Days until sprint ends:
              </dt>
              <dd class="bg-gray-100 text-[#404040] text-xs font-medium inline-flex items-center px-2.5 py-1 rounded-md ">
                13 days
              </dd>
            </dl>
            <dl class="flex items-center justify-between">
              <dt class="text-[#404040]  text-sm font-normal">Next meeting:</dt>
              <dd class="bg-gray-100 text-[#404040] text-xs font-medium inline-flex items-center px-2.5 py-1 rounded-md ">
                Thursday
              </dd>
            </dl>
          </div>
        </div>

        {/* <!-- Radial Chart --> */}
        <div class="py-6" id="radial-chart">
          <ReactApexChart
            options={chartOptions}
            series={chartOptions.series}
            type="radialBar"
            height="380"
            width="100%"
          />
        </div>

        <div class="grid grid-cols-1 items-center border-gray-200 border-t  justify-between">
          <div class="flex justify-between items-center  pt-5">
            <div
              id="lastDaysdropdown"
              class="z-10 hidden  bg-white divide-y divide-gray-100 rounded-lg shadow w-44 "
            >
              <ul
                class="py-2 text-sm text-[#404040] "
                aria-labelledby="dropdownDefaultButton"
              >
                <li>
                  <a href="#" class="block px-4 py-2 hover:bg-gray-100 ">
                    Yesterday
                  </a>
                </li>
                <li>
                  <a href="#" class="block px-4 py-2 hover:bg-gray-100 ">
                    Today
                  </a>
                </li>
                <li>
                  <a href="#" class="block px-4 py-2 hover:bg-gray-100 ">
                    Last 7 days
                  </a>
                </li>
                <li>
                  <a href="#" class="block px-4 py-2 hover:bg-gray-100 ">
                    Last 30 days
                  </a>
                </li>
                <li>
                  <a href="#" class="block px-4 py-2 hover:bg-gray-100 ">
                    Last 90 days
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Promotionalsalesgraph;
