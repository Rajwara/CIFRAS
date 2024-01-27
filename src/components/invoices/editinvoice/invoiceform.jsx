import React from "react";
import RemoveIcon from "../../../assets/images/invoice/removeicon.svg";
import PlusIcongray from "../../../assets/images/invoice/plusicongray.svg";

const Invoiceform = () => {
  // const [isDropdownOpen, setDropdownOpen] = useState(false);

  // const handleHover = () => {
  //   setDropdownOpen(true);
  // };

  // const handleLeave = () => {
  //   setDropdownOpen(false);
  // };

  // const handleClick = () => {
  //   setDropdownOpen(!isDropdownOpen);
  // };

  return (
    <div className="  border border-[#ebebeb] bg-white  rounded py-6 px-8 items-center">
      {/* From form start  */}
      <div className="flex  justify-between">
        <div className="w-[30%]">
          <h4 className="font-rubik font-normal text-[#404040] text-4xl leading-9">
            From:
          </h4>
          <p className="font-normal font-rubik text-[#404040] text-xl leading-9">
            From he who sending this invoice
          </p>
        </div>
        <div className="w-[60%]">
          <form class="">
            <div>
              <div className="grid grid-cols-2 gap-4">
                <div class="mb-5">
                  <label
                    for="name"
                    class="font-rubik block mb-2 text-sm font-medium text-[#404040]"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    placeholder="Enter your name"
                    class="font-rubik bg-gray-50 border border-gray-300 text-[#C0C0C0] text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                  />
                </div>

                <div class="mb-5">
                  <label
                    for="phone"
                    class="font-rubik block mb-2 text-sm font-medium text-[#404040]"
                  >
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    placeholder="Phone Number"
                    class="font-rubik bg-gray-50 border border-gray-300 text-[#C0C0C0] text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                  />
                </div>
              </div>

              <div>
                <label
                  for="message"
                  class="block mb-2 font-rubik text-[#404040] text-xl leading-9"
                >
                  Address
                </label>
                <textarea
                  id="message"
                  rows="2"
                  class="block p-2.5 w-full text-sm font-rubik text-[#C0C0C0]  leading-9 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 "
                  placeholder="Enter your address"
                ></textarea>
              </div>
            </div>
          </form>
        </div>
      </div>
      {/* From form ENd  */}

      {/* to form start  */}
      <div className="flex  justify-between mt-6">
        <div className="w-[30%]">
          <h4 className="font-rubik font-normal text-[#404040] text-4xl leading-9">
            To:
          </h4>
          <p className="font-normal font-rubik text-[#404040] text-xl leading-9">
            To he who will receive this invoice
          </p>
        </div>
        <div className="w-[60%]">
          <form class="">
            <div>
              <div className="grid grid-cols-2 gap-4">
                <div class="mb-5">
                  <label
                    for="name"
                    class="font-rubik block mb-2 text-sm font-medium text-[#404040]"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    placeholder="Enter your name"
                    class="font-rubik bg-gray-50 border border-gray-300 text-[#C0C0C0] text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                  />
                </div>

                <div class="mb-5">
                  <label
                    for="phone"
                    class="font-rubik block mb-2 text-sm font-medium text-[#404040]"
                  >
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    placeholder="Phone Number"
                    class="font-rubik bg-gray-50 border border-gray-300 text-[#C0C0C0] text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                  />
                </div>
              </div>

              <div>
                <label
                  for="message"
                  class="block mb-2 font-rubik text-[#404040] text-xl leading-9"
                >
                  Address
                </label>
                <textarea
                  id="message"
                  rows="2 "
                  class="block p-2.5 w-full text-sm font-rubik text-[#C0C0C0]  leading-9 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 "
                  placeholder="Enter your address"
                ></textarea>
              </div>
            </div>
          </form>
        </div>
      </div>
      {/* to form ENd  */}

      {/* Schedule form start  */}
      <div className="flex  justify-between mt-6">
        <div className="w-[30%]">
          <h4 className="font-rubik font-normal text-[#404040] text-4xl leading-9">
            Schedule:
          </h4>
          <p className="font-normal font-rubik text-[#404040] text-xl leading-9">
            To he who will receive this invoice
          </p>
        </div>
        <div className="w-[60%]">
          <form class="">
            <div>
              <div className="grid grid-cols-4 gap-4 justify-center items-center">
                <div class="mb-5">
                  <label
                    for="Invoicenumber
                    "
                    class="font-rubik block mb-2 text-sm font-medium text-[#404040]"
                  >
                    Invoice Number
                  </label>
                  <input
                    type="number"
                    id="base-input"
                    placeholder="INV-0071"
                    class="font-rubik bg-gray-50 border border-gray-300 text-[#C0C0C0] text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                  />
                </div>

                <div class="mb-5 date-create">
                  <label
                    for="base-input"
                    class="font-rubik block mb-2 text-sm font-medium text-[#404040]"
                  >
                    Date Create
                  </label>
                  <input
                    name="start"
                    type="date"
                    id="startdate"
                    class="font-rubik bg-gray-50 border border-gray-300 text-[#C0C0C0] text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                  />
                </div>

                <div class="mb-5 due-date">
                  <label
                    for="due date"
                    class="font-rubik block mb-2 text-sm font-medium text-[#404040]"
                  >
                    Due Date
                  </label>
                  <input
                    name="start"
                    type="date"
                    id="startdate"
                    class="font-rubik bg-gray-50 border border-gray-300 text-[#C0C0C0] text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                  />
                </div>

                <div class="mb-5">
                  <label
                    for="base-input"
                    class="font-rubik block mb-2 text-sm font-medium text-[#404040]"
                  >
                    Status
                  </label>
                  <button
                    id="dropdownHoverButton"
                    data-dropdown-toggle="dropdownHover"
                    data-dropdown-trigger="hover"
                    className="font-rubik bg-gray-50 border border-gray-300 text-[#C0C0C0] text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500  font-normal px-5 py-2.5 text-center inline-flex items-center w-full"
                    type="button"
                  >
                    Select...{" "}
                    <svg
                      class="w-2.5 h-2.5 ms-3"
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

                  <div
                    id="dropdownHover"
                    class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
                  >
                    <ul
                      class="py-2 text-sm text-gray-700 dark:text-gray-200"
                      aria-labelledby="dropdownHoverButton"
                    >
                      <li>
                        <div className="flex items-center ml-2">
                          <div class="h-2.5 w-2.5 rounded-full bg-green-500 me-2 font-rubik "></div>
                          <a href="#" class="block  py-2 font-rubik">
                            Online
                          </a>
                        </div>
                      </li>

                      <li>
                        <div className="flex items-center ml-2">
                          <div class="h-2.5 w-2.5 rounded-full bg-red-500 me-2 font-rubik "></div>
                          <a href="#" class="block  py-2 font-rubik">
                            Offline
                          </a>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
      {/* Schedule form End  */}

      {/* Item Details form start  */}

      <div className="flex  justify-between mt-6 items-center">
        <div className="w-[30%]">
          <h4 className="font-rubik font-normal text-[#404040] text-4xl leading-9">
            Item Details:
          </h4>
          <p className="font-normal font-rubik text-[#404040] text-xl leading-9">
            Add one or multiple item
          </p>
        </div>
        <div className="w-[60%] ">
          <div className="border rounded-sm border-[EBEBEB] bg-white p-5">
            <form class="">
              <div>
                <div className="grid grid-cols-3 gap-4 justify-center items-center">
                  <div class="mb-5">
                    <label
                      for="Itemname
                    "
                      class="font-rubik block mb-2 text-sm font-medium text-[#404040]"
                    >
                      Item
                    </label>
                    <input
                      type="text"
                      id="Itemname"
                      placeholder="Enter item name"
                      class="font-rubik bg-gray-50 border border-gray-300 text-[#C0C0C0] text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                    />
                  </div>

                  <div class="mb-5 date-create">
                    <label
                      for="bedrooms-input"
                      class="block mb-2 text-sm font-medium text-[#404040] font-rubik"
                    >
                      Quantity
                    </label>
                    <div class="relative flex items-center w-full">
                      <button
                        type="button"
                        id="decrement-button"
                        data-input-counter-decrement="bedrooms-input"
                        class="bg-gray-100  hover:bg-gray-200 border border-gray-300 rounded-s-lg p-3 h-11 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none"
                      >
                        <svg
                          class="w-3 h-3 text-gray-900 dark:text-white"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 18 2"
                        >
                          <path
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M1 1h16"
                          />
                        </svg>
                      </button>
                      <input
                        type="text"
                        id="bedrooms-input"
                        data-input-counter
                        data-input-counter-min="1"
                        data-input-counter-max="50"
                        aria-describedby="helper-text-explanation"
                        class="align-middle justify-center bg-gray-50 border-x-0 border-gray-300 h-11 font-medium text-center text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full font-rubik"
                        placeholder=""
                        value="1"
                        required
                      />
                      <div class="absolute bottom-1 start-1/2 -translate-x-1/2 rtl:translate-x-1/2 flex items-center text-xs text-gray-400 space-x-1 rtl:space-x-reverse justify-center"></div>
                      <button
                        type="button"
                        id="increment-button"
                        data-input-counter-increment="bedrooms-input"
                        class="bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 border border-gray-300 rounded-e-lg p-3 h-11 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none"
                      >
                        <svg
                          class="w-3 h-3 text-gray-900 dark:text-white"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 18 18"
                        >
                          <path
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M9 1v16M1 9h16"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>

                  <div class="mb-5 grid grid-cols-2 justify-center items-center gap-2">
                    <div>
                      <label
                        for="base-input"
                        class="font-rubik block mb-2 text-sm font-medium text-[#404040]"
                      >
                        Price
                      </label>
                      <input
                        type="text"
                        id="base-input"
                        placeholder="$"
                        class="font-rubik bg-gray-50 border border-gray-300 text-[#C0C0C0] text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                      />
                    </div>
                    <div className="justify-center items-center">
                      <p className="font-rubik text-[#404040] text-sm mt-0">
                        Total $800
                      </p>
                    </div>
                  </div>
                </div>
                <div>
                  <label
                    for="message"
                    class="block mb-2 font-rubik text-[#404040] text-xl leading-9"
                  >
                    Description
                  </label>
                  <textarea
                    id="description"
                    rows="2"
                    class="block p-2.5 w-full text-sm font-rubik text-[#C0C0C0]  leading-9 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 "
                    placeholder="Please describe..."
                  ></textarea>
                </div>
                <div
                  className="flex gap-2 justify-end mt-4
              
              "
                >
                  <img src={RemoveIcon} alt="" />
                  <p className="font-rubik text-[#FF3D00] font-normal text-[16px]">
                    Remove
                  </p>
                </div>
              </div>
            </form>
          </div>
          <div className="">
            <button className="bg-[#CCCCCC] w-full p-3 text-center justify-center align-middle mt-5 rounded">
              <span className="flex gap-2 justify-center">
                <img src={PlusIcongray} alt="" />
                <p className="text-[#404040] font-rubik font-normal text-[16px]">
                  Add Item
                </p>
              </span>
            </button>
          </div>
          <div className="grid grid-cols-3 justify-center items-center gap-6 mt-5">
            <div class="mb-5  ">
              <label
                for="base-input"
                class="font-rubik block mb-2 text-sm font-medium text-[#404040]"
              >
                Shipping
              </label>
              <input
                type="text"
                id="base-input"
                placeholder="$"
                class="font-rubik bg-gray-50 border border-gray-300 text-[#C0C0C0] text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
              />
            </div>
            <div class="mb-5  ">
              <label
                for="base-input"
                class="font-rubik block mb-2 text-sm font-medium text-[#404040]"
              >
                Discount
              </label>
              <input
                type="text"
                id="base-input"
                placeholder="$"
                class="font-rubik bg-gray-50 border border-gray-300 text-[#C0C0C0] text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
              />
            </div>
            <div class="mb-5  ">
              <label
                for="base-input"
                class="font-rubik block mb-2 text-sm font-medium text-[#404040] "
              >
                Taxes
              </label>
              <input
                type="text"
                id="base-input"
                placeholder="%  "
                class="font-rubik bg-gray-50 border border-gray-300 text-[#C0C0C0] text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 text-end"
              />
            </div>
          </div>
          <div className="grid grid-cols-3 justify-center items-center gap-6 mt-5">
            <div className="flex justify-end mb-5 gap-10"></div>
            <div className="flex justify-end mb-5 gap-10"></div>
            <div className="flex justify-between mb-5 ">
              <div className="justify-start">
                <p className="font-rubik font-normal text-[16px] text-[#404040]">
                  Subtotal:
                </p>
                <p className="font-rubik font-normal text-[16px] text-[#404040]">
                  Shipping:
                </p>
                <p className="font-rubik font-normal text-[16px] text-[#404040]">
                  {" "}
                  Discount:
                </p>
                <p className="font-rubik font-normal text-[16px] text-[#404040]">
                  Taxes:
                </p>
                <p className="font-rubik font-bold text-[16px] text-[#404040]">
                  Total:{" "}
                </p>
              </div>
              <div className="">
                <p className="font-rubik font-normal text-[16px] text-[#404040]">
                  $800
                </p>
                <p className="font-rubik font-normal text-[16px] text-[#FF3D00]">
                  $10
                </p>
                <p className="font-rubik font-normal text-[16px] text-[#404040]">
                  $20
                </p>
                <p className="font-rubik font-normal text-[16px] text-[#FF3D00]">
                  30%
                </p>
                <p className="font-rubik font-normal text-[16px] text-[#404040]">
                  $840.3
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Item Details form end  */}
    </div>
  );
};

export default Invoiceform;
