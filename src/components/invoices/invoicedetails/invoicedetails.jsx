import React from "react";
import ReactToPrint from "react-to-print";
import Print from "../../../assets/images/printicon.svg";
import Logo from "../../../assets/images/sitelogo.svg";
import Download from "../../../assets/images/downloadarrow.svg";
import Whattsup from "../../../assets/images/qrcodeforwhattsup.svg";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

class ComponentToPrint extends React.Component {
  render() {
    return (
      <div
        className='w-full bg-white px-8 py-10   mx-auto rounded border border-[#ebebeb] '
        id='pdf-content'
      >
        <div className='grid grid-cols-1  md:grid-cols-2  justify-between  md:px-20'>
          <div className='left'>
            <div className='logo'>
              <img src={Logo} alt='' className='w-[222px] h-[49px]' />
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 justify-between mt-12'>
              <div className=''>
                <h4 className='font-lexend font-bold text-[#000000] text-base leading-7'>
                  From
                </h4>
                <h6 className='font-lexend font-normal text-[#000000] text-base leading-7 mt-2'>
                  REDQ, INC
                </h6>
                <p className='font-inter font-normal text-[#404040] text-base leading-5 mt-2'>
                  <span>Jerome Bell</span>
                  <br />
                  <span>
                    4140 Parker Rd. Allentown,
                    <br />
                    New Mexico 31134
                  </span>
                  <br />
                  <span>(302) 555-0107</span>
                </p>
                <h6 className='font-lexend font-normal text-[#000000] text-base leading-7 mt-2'>
                  Creation Date
                </h6>
                <p className='font-inter font-normal text-[#404040] text-base leading-7'>
                  Jan 02, 2024
                </p>
              </div>
              <div className='flex flex-col mt-6 md:mt-0 justify-end ml-0 md:ml-[10px] lg:ml-[50px] xl:ml-[200px]'>
                <h4 className='font-lexend font-bold text-[#000000] text-base leading-7'>
                  Bill To
                </h4>
                <h6 className='font-lexend font-normal text-[#000000] text-base leading-7 mt-2'>
                  TRANSPORT LLC
                </h6>
                <p className='font-inter font-normal text-[#404040] text-base leading-5 mt-2'>
                  <span>Albert Flores</span>
                  <br />
                  <span>
                    2715 Ash Dr. San Jose,
                    <br />
                    South Dakota 83475
                  </span>
                  <br />
                  <span>(671) 555-0110</span>
                </p>
                <h6 className='font-lexend font-normal text-[#000000] text-base leading-7 mt-2'>
                  Due Date
                </h6>
                <p className='font-inter font-normal text-[#404040] text-base leading-7'>
                  Jan 02, 2024
                </p>
              </div>
            </div>
          </div>
          <div className='right flex justify-end mt-6 md:mt-0'>
            <div className='flex flex-col gap-1'>
              <button className='font-inter text-base leading-7 font-normal text-[#04B076] bg-[#94FEA3] rounded px-2 w-[50%]'>
                Paid
              </button>
              <h4 className='font-lexend font-bold text-[#000000] text-base leading-7'>
                INV - #246098
              </h4>
              <p className='font-inter font-normal text-[#404040] text-base leading-7'>
                Invoice Number
              </p>
              <img src={Whattsup} alt='' className='w-[115px] h-[115px]' />
            </div>
          </div>
        </div>
     

<div class="relative overflow-x-auto shadow-md sm:rounded-lg md:ml-[60px] mt-12">
    <table class="w-full text-sm text-left rtl:text-right text-[#404040] font-inter">
        <thead class="text-xs text-[#404040]  uppercase bg-[#ececec] ">
            <tr>
                <th scope="col" class="px-6 py-4">
                    #
                </th>
                <th scope="col" class="px-6 py-4">
                  Item
                </th>
                <th scope="col" class="px-6 py-4">
                    Quantity
                </th>
                <th scope="col" class="px-6 py-4">
                   Unit Price
                </th>
                <th scope="col" class="px-6 py-4">
                  Total
                </th>
            </tr>
        </thead>
        <tbody>
            <tr class="odd:bg-white  even:bg-gray-50  border-b font-inter">
                <th scope="row" class="px-6 py-4 font-medium text-[#404040] whitespace-nowrap ">
                    1
                </th>
                <td class="px-6 py-4 flex flex-col gap-1">
                  <span className="">
                ChawkBazar Laravel Flutter Mobile App
                </span>
                <span className="text-[#a3a3a3]">
                Along With Wordpress Themes & Plug...
                </span>
                </td>
                <td class="px-6 py-4">
                    2
                </td>
                <td class="px-6 py-4">
                    $2999
                </td>
                <td class="px-6 py-4">
                    $20000
                </td>
            </tr>
            <tr class="odd:bg-white  even:bg-gray-50  border-b font-inter">
                <th scope="row" class="px-6 py-4 font-medium text-[#404040] whitespace-nowrap ">
                    1
                </th>
                <td class="px-6 py-4 flex flex-col gap-1">
                  <span className="">
                ChawkBazar Laravel Flutter Mobile App
                </span>
                <span className="text-[#a3a3a3]">
                Along With Wordpress Themes & Plug...
                </span>
                </td>
                <td class="px-6 py-4">
                    2
                </td>
                <td class="px-6 py-4">
                    $2999
                </td>
                <td class="px-6 py-4">
                    $20000
                </td>
            </tr>
            <tr class="odd:bg-white  even:bg-gray-50  border-b font-inter">
                <th scope="row" class="px-6 py-4 font-medium text-[#404040] whitespace-nowrap ">
                    1
                </th>
                <td class="px-6 py-4 flex flex-col gap-1">
                  <span className="">
                ChawkBazar Laravel Flutter Mobile App
                </span>
                <span className="text-[#a3a3a3]">
                Along With Wordpress Themes & Plug...
                </span>
                </td>
                <td class="px-6 py-4">
                    2
                </td>
                <td class="px-6 py-4">
                    $2999
                </td>
                <td class="px-6 py-4">
                    $20000
                </td>
            </tr>
            <tr class="odd:bg-white  even:bg-gray-50  border-b font-inter">
                <th scope="row" class="px-6 py-4 font-medium text-[#404040] whitespace-nowrap ">
                    1
                </th>
                <td class="px-6 py-4 flex flex-col gap-1">
                  <span className="">
                ChawkBazar Laravel Flutter Mobile App
                </span>
                <span className="text-[#a3a3a3]">
                Along With Wordpress Themes & Plug...
                </span>
                </td>
                <td class="px-6 py-4">
                    2
                </td>
                <td class="px-6 py-4">
                    $2999
                </td>
                <td class="px-6 py-4">
                    $20000
                </td>
            </tr>

        </tbody>
    </table>
</div>

        <div className='notes flex  md:ml-[60px]  flex-col md:flex-row justify-between mt-20'>
          <div className='left'>
            <h4 className='font-lexend font-bold text-[#000000] text-base leading-7'>
              NOTES
            </h4>
            <p className='font-inter font-normal text-[#404040] text-base leading-5 mt-2'>
              We appreciate your business. Should you need us to <br /> add VAT
              or extra notes let us know!
            </p>
          </div>
          <div className='right flex flex-col gap-4 mt-6 md:mt-0'>
            <div className='flex flex-row gap-[100px] md:gap-[200px] justify-between border-b'>
              <p className='font-inter font-normal text-[#404040] text-base leading-7'>
                Subtotal:
              </p>
              <p className='font-inter font-normal text-[#404040] text-base leading-7'>
                {" "}
                $700
              </p>
            </div>
            <div className='flex flex-row gap-[100px] md:gap-[200px] justify-between border-b'>
              <p className='font-inter font-normal text-[#404040] text-base leading-7'>
                Shipping:
              </p>
              <p className='font-inter font-normal text-[#404040] text-base leading-7'>
                {" "}
                $142
              </p>
            </div>
            <div className='flex flex-row gap-[100px] md:gap-[200px] justify-between border-b'>
              <p className='font-inter font-normal text-[#404040] text-base leading-7'>
                Discount:
              </p>
              <p className='font-inter font-normal text-[#404040] text-base leading-7'>
                {" "}
                $250
              </p>
            </div>
            <div className='flex flex-row gap-[100px] md:gap-[200px] justify-between border-b'>
              <p className='font-inter font-normal text-[#404040] text-base leading-7'>
                Taxes:
              </p>
              <p className='font-inter font-normal text-[#404040] text-base leading-7'>
                {" "}
                15%
              </p>
            </div>
            <div className='flex flex-row gap-[100px] md:gap-[200px] justify-between '>
              <p className='font-inter font-bold text-[#404040] text-base leading-7'>
                Total:
              </p>
              <p className='font-inter font-normal text-[#404040] text-base leading-7'>
                {" "}
                $659.5
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const handleDownloadPDF = () => {
  const input = document.getElementById("pdf-content");
  // Specify the id of the element you want to convert to PDF
  html2canvas(input, {
    scrollY: -window.scrollY,
    windowWidth: document.documentElement.offsetWidth,
    windowHeight: document.documentElement.offsetHeight,
  }).then((canvas) => {
    const imgData = canvas.toDataURL("image/png");
    const pdf = new jsPDF("p", "mm", "a4");
    const imgWidth = 210;
    const imgHeight = (canvas.height * imgWidth) / canvas.width;
    pdf.addImage(imgData, "PNG", 0, 0, imgWidth, imgHeight);
    pdf.save("downloaded-file.pdf");
    // Specify the name of the downloaded PDF file
  });
};

class Example extends React.Component {
  render() {
    return (
      <div>
        <div className=' flex flex-col md:flex-row justify-between  bg-white mt-20 md:ml-[60px]   py-8 px-10 items-center'>
          <div className='left flex flex-col gap-2 relative'>
            <h2 className='font-lexend font-bold text-[#404040] text-4xl leading-9'>
              Invoice Details
            </h2>
          </div>
          <div className='right flex flex-col md:flex-row gap-4 mt-4 md:mt-0'>
            <div>
              <ReactToPrint
                trigger={() => (
                  <button className='flex py-[10px] text-[20px] px-[16px] bg-white text-[#404040] border border-[#c0c0c0] rounded items-center gap-2 font-lexend'>
                    <img src={Print} className='w-6 h-6  ' alt='' />
                    Print
                  </button>
                )}
                content={() => this.componentRef}
              />
            </div>

            <button
              onClick={handleDownloadPDF}
              className='flex py-[10px] px-[16px] bg-[#634af9] text-white rounded items-center gap-2 text-[20px] font-lexend'
            >
              <img src={Download} className='w-6 h-6  ' alt='' />
              Download
            </button>
          </div>
        </div>
        <div className=''>
          <ComponentToPrint ref={(el) => (this.componentRef = el)} />
        </div>
      </div>
    );
  }
}

export default Example;
