import React from "react";
import ReactToPrint from "react-to-print";
import Print from "../../../assets/images/printicon.svg";
import Logo from "../../../assets/images/sitelogo.svg";
import Download from "../../../assets/images/downloadarrow.svg";
import Whattsup from "../../../assets/images/qrcodeforwhattsup.svg";

class ComponentToPrint extends React.Component {
  render() {
    return (
      <div className="w-full bg-white px-8 py-10   mx-auto rounded border border-[#ebebeb] ">
        <div className="grid grid-cols-1 md:grid-cols-2  justify-between  px-20">
          <div className="left">
            <div className="logo">
              <img src={Logo} alt="" className="w-[222px] h-[49px]" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 justify-between mt-12">
              <div className="">
                <h4 className="font-lexend font-bold text-[#000000] text-base leading-7">
                  From
                </h4>
                <h6 className="font-lexend font-normal text-[#000000] text-base leading-7 mt-2">
                  REDQ, INC
                </h6>
                <p className="font-inter font-normal text-[#404040] text-base leading-5 mt-2">
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
                <h6 className="font-lexend font-normal text-[#000000] text-base leading-7 mt-2">
                  Creation Date
                </h6>
                <p className="font-inter font-normal text-[#404040] text-base leading-7">
                  Jan 02, 2024
                </p>
              </div>
              <div className="flex flex-col justify-end md:ml-[200px]">
                <h4 className="font-lexend font-bold text-[#000000] text-base leading-7">
                  Bill To
                </h4>
                <h6 className="font-lexend font-normal text-[#000000] text-base leading-7 mt-2">
                  TRANSPORT LLC
                </h6>
                <p className="font-inter font-normal text-[#404040] text-base leading-5 mt-2">
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
                <h6 className="font-lexend font-normal text-[#000000] text-base leading-7 mt-2">
                  Due Date
                </h6>
                <p className="font-inter font-normal text-[#404040] text-base leading-7">
                  Jan 02, 2024
                </p>
              </div>
            </div>
          </div>
          <div className="right flex justify-end">
            <div className="flex flex-col gap-1">
              <button className="font-inter text-base leading-7 font-normal text-[#04B076] bg-[#94FEA3] rounded px-2 w-[50%]">
                Paid
              </button>
              <h4 className="font-lexend font-bold text-[#000000] text-base leading-7">
                INV - #246098
              </h4>
              <p className="font-inter font-normal text-[#404040] text-base leading-7">
                Invoice Number
              </p>
              <img src={Whattsup} alt="" className="w-[115px] h-[115px]" />
            </div>
          </div>
        </div>
        <div className="table w-full ml-[60px]  mt-16 border-b border-[#ebebeb]">
          <div className="relative overflow-x-auto ">
            <table className="w-full text-sm text-left  rtl:text-right text-[#404040] font-inter">
              <thead className="text-xs text-gray-700 uppercase bg-[#ECECEC] ">
                <tr>
                  <th scope="col" className="px-6 py-4">
                    #
                  </th>
                  <th scope="col" className="px-6 py-4">
                    ITEM
                  </th>
                  <th scope="col" className="px-6 py-4">
                    QUANTITY
                  </th>
                  <th scope="col" className="px-6 py-4">
                    UNIT PRICE
                  </th>
                  <th scope="col" className="px-6 py-4">
                    TOTAL
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white border-b ">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
                  >
                    1
                  </th>
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
                  >
                    Apple MacBook Pro 17"
                  </th>
                  <td className="px-6 py-4">Silver</td>
                  <td className="px-6 py-4">Laptop</td>
                  <td className="px-6 py-4">$2999</td>
                </tr>
                <tr className="bg-white border-b ">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
                  >
                    2
                  </th>
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
                  >
                    Microsoft Surface Pro
                  </th>
                  <td className="px-6 py-4">White</td>
                  <td className="px-6 py-4">Laptop PC</td>
                  <td className="px-6 py-4">$1999</td>
                </tr>
                <tr className="bg-white ">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
                  >
                    3
                  </th>
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
                  >
                    Magic Mouse 2
                  </th>
                  <td className="px-6 py-4">Black</td>
                  <td className="px-6 py-4">Accessories</td>
                  <td className="px-6 py-4">$99</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="notes flex  ml-[60px]  flex-row justify-between mt-20">
          <div className="left">
            <h4 className="font-lexend font-bold text-[#000000] text-base leading-7">
              NOTES
            </h4>
            <p className="font-inter font-normal text-[#404040] text-base leading-5 mt-2">
              We appreciate your business. Should you need us to <br /> add VAT
              or extra notes let us know!
            </p>
          </div>
          <div className="right flex flex-col gap-4">
            <div className="flex flex-row gap-[200px] justify-between border-b">
              <p className="font-inter font-normal text-[#404040] text-base leading-7">
                Subtotal:
              </p>
              <p className="font-inter font-normal text-[#404040] text-base leading-7">
                {" "}
                $700
              </p>
            </div>
            <div className="flex flex-row gap-[200px] justify-between border-b">
              <p className="font-inter font-normal text-[#404040] text-base leading-7">
                Shipping:
              </p>
              <p className="font-inter font-normal text-[#404040] text-base leading-7">
                {" "}
                $142
              </p>
            </div>
            <div className="flex flex-row gap-[200px] justify-between border-b">
              <p className="font-inter font-normal text-[#404040] text-base leading-7">
                Discount:
              </p>
              <p className="font-inter font-normal text-[#404040] text-base leading-7">
                {" "}
                $250
              </p>
            </div>
            <div className="flex flex-row gap-[200px] justify-between border-b">
              <p className="font-inter font-normal text-[#404040] text-base leading-7">
                Taxes:
              </p>
              <p className="font-inter font-normal text-[#404040] text-base leading-7">
                {" "}
                15%
              </p>
            </div>
            <div className="flex flex-row gap-[200px] justify-between ">
              <p className="font-inter font-bold text-[#404040] text-base leading-7">
                Total:
              </p>
              <p className="font-inter font-normal text-[#404040] text-base leading-7">
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

class Example extends React.Component {
  render() {
    return (
      <div>
        <div className=" flex justify-between  bg-white mt-20 ml-[60px]   py-8 px-10 items-center">
          <div className="left flex flex-col gap-2 relative">
            <h2 className="font-lexend font-bold text-[#404040] text-4xl leading-9">
              Invoice Details
            </h2>
          </div>
          <div className="right flex gap-4">
            <div>
              <ReactToPrint
                trigger={() => (
                  <button className="flex py-[10px] text-[20px] px-[16px] bg-white text-[#404040] border border-[#c0c0c0] rounded items-center gap-2 font-lexend">
                    <img src={Print} className="w-6 h-6  " alt="" />
                    Print
                  </button>
                )}
                content={() => this.componentRef}
              />
            </div>

            <button className="flex py-[10px] px-[16px] bg-[#634af9] text-white rounded items-center gap-2 text-[20px] font-lexend">
              <img src={Download} className="w-6 h-6  " alt="" />
              Download
            </button>
          </div>
        </div>
        <div className="">
          <ComponentToPrint ref={(el) => (this.componentRef = el)} />
        </div>
      </div>
    );
  }
}

export default Example;
