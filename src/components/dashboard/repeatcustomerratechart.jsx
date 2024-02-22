import React, { useState } from "react";
import {
  Card,
  CardBody,
  CardHeader,
  Typography,
  Button,
} from "@material-tailwind/react";
import { Square3Stack3DIcon } from "@heroicons/react/24/outline";
import Chart from "react-apexcharts";

const RepeatCustomerRateChart = () => {
  const [customerType, setCustomerType] = useState("new");

  const chartData = {
    new: {
      series: [
        {
          name: "New Customer Sales",
          data: [50, 40, 300, 320, 500, 350, 200, 230, 500, 500, 50, 100],
        },
      ],
      xaxisCategories: [
        "Jun",
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
    old: {
      series: [
        {
          name: "Old Customer Sales",
          data: [30, 60, 200, 240, 400, 250, 150, 180, 400, 500, 50, 100],
        },
      ],
      xaxisCategories: [
        "Jun",
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
  };

  const chartConfig = {
    type: "line",
    height: 240,
    series: chartData[customerType].series,
    options: {
      // ... other options
      xaxis: {
        categories: chartData[customerType].xaxisCategories,
        // ... other x-axis options
      },
    },
  };

  return (
    <Card>
      <CardHeader
        floated={false}
        shadow={false}
        color='transparent'
        className='flex flex-col gap-4 rounded-none md:flex-row md:items-center'
      >
        {/* <div className="w-max rounded-lg bg-gray-900 p-5 text-white">
          <Square3Stack3DIcon className="h-6 w-6" />
        </div> */}
        {/* <div>
          <Typography variant="h6" color="blue-gray">
            Line Chart
          </Typography>
          <Typography
            variant="small"
            color="gray"
            className="max-w-sm font-normal"
          >
            Visualize your data in a simple way using the
            @material-tailwind/react chart plugin.
          </Typography>
        </div> */}
      </CardHeader>
      <CardBody className='px-2 pb-0'>
        <div className='flex flex-col justify-between mb-4'>
          <h6 className='font-inter font-bold text-xl text-[#404040] leading-9 mb-4'>
            Repeat Customer Rate
          </h6>
          <div className='flex gap-6'>
            <Button
              color={customerType === "new" ? "blue" : "gray"}
              onClick={() => setCustomerType("new")}
            >
              New Customer
            </Button>
            <Button
              color={customerType === "old" ? "blue" : "gray"}
              onClick={() => setCustomerType("old")}
            >
              Old Customer
            </Button>
          </div>
        </div>
        <Chart {...chartConfig} />
      </CardBody>
    </Card>
  );
};

export default RepeatCustomerRateChart;
