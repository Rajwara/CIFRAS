import React from 'react';

import RemoveIcon from "../../../assets/images/invoice/removeicon.svg";
import PlusIcongray from "../../../assets/images/invoice/plusicongray.svg";
import UploadIcon from "../../../assets/images/profile/uploadicon.svg";
import NameFieldIcon from "../../../assets/images/profile/namefieldicon.svg";
import EmailFieldIcon from "../../../assets/images/profile/emailfieldicon.svg";
import { Dropdown } from "flowbite-react";

import { Tabs } from "flowbite-react";
import { HiAdjustments, HiClipboardList, HiUserCircle } from "react-icons/hi";
import { MdDashboard } from "react-icons/md";

const Settings = () => {



  return (
    <div className="  border border-[#ebebeb] bg-white  rounded py-28 px-24 items-center">
      <h2 className="font-rubik font-bold text-[#404040] text-2xl leading-9">
        Account Settings
      </h2>

      <div className="mt-10 px-8 font-rubik">
        <Tabs aria-label="Default tabs" style="default">
          <Tabs.Item active title="My Details">
            <div>
              <div className="flex justify-between">
                <div className="w-[30%]">
                  <div className="flex  justify-between w-full ">
                    <div className="">
                      <h3 className="font-rubik font-bold text-[#404040] text-xl leading-9">
                        Personal Info
                      </h3>
                      <p className="font-normal font-rubik text-[#404040] text-base leading-9">
                        Update your photo and personal details here
                      </p>
                      <div className="mx-auto  text-center justify-center my-10">
                        <div class="relative w-64">
                          <img
                            class="w-64 h-64 rounded-full absolute"
                            src="https://images.pexels.com/photos/2690323/pexels-photo-2690323.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                            alt=""
                          />

                          <label
                            for="dropzone-file"
                            class="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300  rounded-full cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
                          >
                            <div class="z-10 h-2">
                              <img src={UploadIcon} alt="" />
                            </div>

                            <div class="w-64 h-64 group hover:bg-gray-200 opacity-60 rounded-full absolute flex justify-center items-center cursor-pointer transition duration-500">
                              <input
                                id="dropzone-file"
                                type="file"
                                class="hidden"
                              />
                            </div>
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-[70%]">
                  <div className="items-center justify-end flex gap-5">
                    <a href="/" className="">
                      <button className="font-rubik  py-[10px] px-[16px] bg-white border-[#C0C0C0] border-2 text-[#404040] rounded items-center gap-5 text-xl">
                        Cancel
                      </button>
                    </a>
                    <a href="/">
                      <button className="font-rubik   py-[10px] px-[16px] bg-[#634af9] border-[#634af9] border-2 text-white rounded items-center gap-5 text-xl">
                        Save
                      </button>
                    </a>
                  </div>
                </div>
              </div>

              {/* name form  */}
              <div className="flex  justify-between  mb-10">
                <div className="w-[30%]">
                  <h4 className="font-rubik font-bold text-[#404040] text-xl leading-9">
                    Name
                  </h4>
                </div>
                <div className="w-[60%]">
                  <form class="">
                    <div>
                      <div className="grid grid-cols-2 gap-4">
                        <div class="mb-5">
                          <div class="relative">
                            <div class="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                              <img src={NameFieldIcon} alt="" />
                            </div>
                            <input
                              type="text"
                              id="firstname"
                              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                              placeholder="First name"
                            />
                          </div>
                        </div>

                        <div class="mb-5">
                          <div class="relative">
                            <div class="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                              <img src={NameFieldIcon} alt="" />
                            </div>
                            <input
                              type="text"
                              id="lasttname"
                              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                              placeholder="Last name"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              {/* Email form  */}

              <div className="flex justify-between my-20">
                <div className="w-[30%]">
                  <h4 className="font-rubik font-bold text-[#404040] text-xl leading-9">
                    Email Address
                  </h4>
                </div>
                <div className="w-[60%]">
                  <form class="">
                    <div>
                      <div className="w-full">
                        <div class="mb-5">
                          <div class="relative">
                            <div class="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                              <img src={EmailFieldIcon} alt="" />
                            </div>
                            <input
                              type="text"
                              id="email-address-icon"
                              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                              placeholder="johnsmith@example.com"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>

              {/* role form  */}

              <div className="flex justify-between my-20">
                <div className="w-[30%]">
                  <h4 className="font-rubik font-bold text-[#404040] text-xl leading-9">
                    Role
                  </h4>
                </div>
                <div className="w-[60%]">
                  <form className="">
                    <div>
                      <div className="w-full">
                        <div className="mb-5 ">
                          <button
                            id="dropdownDelayButton"
                            data-dropdown-toggle="dropdownDelay"
                            data-dropdown-delay="500"
                            data-dropdown-trigger="hover"
                            class="text-[#404040] font-rubik font-normal bg-gray-50 border border-gray-300  focus:ring-4 focus:outline-none focus:ring-blue-300  rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center w-full"
                            type="button"
                          >
                            Select Role{" "}
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
                            id="dropdownDelay"
                            class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-96 dark:bg-gray-700 "
                          >
                            <ul
                              class="py-2 text-sm text-gray-700 dark:text-gray-200"
                              aria-labelledby="dropdownDelayButton"
                            >
                              <li>
                                <a
                                  href="#"
                                  class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                >
                                 Online
                                </a>
                              </li>
                              <li>
                                <a
                                  href="#"
                                  class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                >
                                  Offline
                                </a>
                              </li>
                              <li>
                                <a
                                  href="#"
                                  class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                >
                                  Pending
                                </a>
                              </li>
                              <li>
                                <a
                                  href="#"
                                  class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                >
                                  Active
                                </a>
                              </li>
                              <li>
                                <a
                                  href="#"
                                  class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                >
                                  Deactive
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>


              {/* Country form  */}
              <div className="flex justify-between my-20">
                <div className="w-[30%]">
                  <h4 className="font-rubik font-bold text-[#404040] text-xl leading-9">
                    Country
                  </h4>
                </div>
                <div className="w-[60%]">
                  <form className="">
                    <div>
                      <div className="w-full">
                        <div className="mb-5 ">
                          <button
                            id="dropdownDelayButton"
                            data-dropdown-toggle="dropdownDelay"
                            data-dropdown-delay="500"
                            data-dropdown-trigger="hover"
                            class="text-[#404040] font-rubik font-normal bg-gray-50 border border-gray-300  focus:ring-4 focus:outline-none focus:ring-blue-300  rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center w-full"
                            type="button"
                          >
                            Select Country{" "}
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
                            id="dropdownDelay"
                            class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-96 dark:bg-gray-700 "
                          >
                            <ul
                              class="py-2 text-sm text-gray-700 dark:text-gray-200"
                              aria-labelledby="dropdownDelayButton"
                            >
                              <li>
                                <a
                                  href="#"
                                  class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                >
                                 Brazil
                                </a>
                              </li>
                              <li>
                                <a
                                  href="#"
                                  class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                >
                                  Indonasia
                                </a>
                              </li>
                              <li>
                                <a
                                  href="#"
                                  class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                >
                                  Australia
                                </a>
                              </li>
                              <li>
                                <a
                                  href="#"
                                  class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                >
                                  America
                                </a>
                              </li>
                              <li>
                                <a
                                  href="#"
                                  class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                >
                                  Dubai
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>


              {/* Time zone form  */}

              <div className="flex justify-between my-20">
                <div className="w-[30%]">
                  <h4 className="font-rubik font-bold text-[#404040] text-xl leading-9">
                    Timezone
                  </h4>
                </div>
                <div className="w-[60%]">
                  <form className="">
                    <div>
                      <div className="w-full">
                        <div className="mb-5 ">
                          <button
                            id="dropdownDelayButton"
                            data-dropdown-toggle="dropdownDelay"
                            data-dropdown-delay="500"
                            data-dropdown-trigger="hover"
                            class="text-[#404040] font-rubik font-normal bg-gray-50 border border-gray-300  focus:ring-4 focus:outline-none focus:ring-blue-300  rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center w-full"
                            type="button"
                          >
                            Select Timezone{" "}
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
                            id="dropdownDelay"
                            class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-96 dark:bg-gray-700 "
                          >
                            <ul
                              class="py-2 text-sm text-gray-700 dark:text-gray-200"
                              aria-labelledby="dropdownDelayButton"
                            >
                              <li>
                                <a
                                  href="#"
                                  class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                >
                                 Brazil
                                </a>
                              </li>
                              <li>
                                <a
                                  href="#"
                                  class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                >
                                  Indonasia
                                </a>
                              </li>
                              <li>
                                <a
                                  href="#"
                                  class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                >
                                  Australia
                                </a>
                              </li>
                              <li>
                                <a
                                  href="#"
                                  class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                >
                                  America
                                </a>
                              </li>
                              <li>
                                <a
                                  href="#"
                                  class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                >
                                  Dubai
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>

              {/* Bio form  */}


              <div className="flex justify-between my-20">
                <div className="w-[30%]">
                  <h4 className="font-rubik font-bold text-[#404040] text-xl leading-9">
                    Bio
                  </h4>
                </div>
                <div className="w-[60%]">
                 
<form>
   <div class="w-full mb-4 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600">
       <div class="flex items-center justify-between px-3 py-2 border-b dark:border-gray-600">
           <div class="flex flex-wrap items-center divide-gray-200 sm:divide-x sm:rtl:divide-x-reverse dark:divide-gray-600">
               <div class="flex items-center space-x-1 rtl:space-x-reverse sm:pe-4">
                   <button type="button" class="p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600">
                       <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 12 20">
                            <path stroke="currentColor" stroke-linejoin="round" stroke-width="2" d="M1 6v8a5 5 0 1 0 10 0V4.5a3.5 3.5 0 1 0-7 0V13a2 2 0 0 0 4 0V6"/>
                        </svg>
                       <span class="sr-only">Attach file</span>
                   </button>
                   <button type="button" class="p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600">
                       <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 20">
                            <path d="M8 0a7.992 7.992 0 0 0-6.583 12.535 1 1 0 0 0 .12.183l.12.146c.112.145.227.285.326.4l5.245 6.374a1 1 0 0 0 1.545-.003l5.092-6.205c.206-.222.4-.455.578-.7l.127-.155a.934.934 0 0 0 .122-.192A8.001 8.001 0 0 0 8 0Zm0 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6Z"/>
                        </svg>
                       <span class="sr-only">Embed map</span>
                   </button>
                   <button type="button" class="p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600">
                       <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 20">
                            <path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM10.5 6a1.5 1.5 0 1 1 0 2.999A1.5 1.5 0 0 1 10.5 6Zm2.221 10.515a1 1 0 0 1-.858.485h-8a1 1 0 0 1-.9-1.43L5.6 10.039a.978.978 0 0 1 .936-.57 1 1 0 0 1 .9.632l1.181 2.981.541-1a.945.945 0 0 1 .883-.522 1 1 0 0 1 .879.529l1.832 3.438a1 1 0 0 1-.031.988Z"/>
                            <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z"/>
                        </svg>
                       <span class="sr-only">Upload image</span>
                   </button>
                   <button type="button" class="p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600">
                       <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 20">
                            <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.96 2.96 0 0 0 .13 5H5Z"/>
                            <path d="M14.067 0H7v5a2 2 0 0 1-2 2H0v11a1.969 1.969 0 0 0 1.933 2h12.134A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.933-2ZM6.709 13.809a1 1 0 1 1-1.418 1.409l-2-2.013a1 1 0 0 1 0-1.412l2-2a1 1 0 0 1 1.414 1.414L5.412 12.5l1.297 1.309Zm6-.6-2 2.013a1 1 0 1 1-1.418-1.409l1.3-1.307-1.295-1.295a1 1 0 0 1 1.414-1.414l2 2a1 1 0 0 1-.001 1.408v.004Z"/>
                        </svg>
                        <span class="sr-only">Format code</span>
                   </button>
                   <button type="button" class="p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600">
                       <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM13.5 6a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm-7 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm3.5 9.5A5.5 5.5 0 0 1 4.6 11h10.81A5.5 5.5 0 0 1 10 15.5Z"/>
                        </svg>
                       <span class="sr-only">Add emoji</span>
                   </button>
               </div>
               <div class="flex flex-wrap items-center space-x-1 rtl:space-x-reverse sm:ps-4">
                   <button type="button" class="p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600">
                       <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 21 18">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.5 3h9.563M9.5 9h9.563M9.5 15h9.563M1.5 13a2 2 0 1 1 3.321 1.5L1.5 17h5m-5-15 2-1v6m-2 0h4"/>
                        </svg>
                       <span class="sr-only">Add list</span>
                   </button>
                   <button type="button" class="p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600">
                       <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M18 7.5h-.423l-.452-1.09.3-.3a1.5 1.5 0 0 0 0-2.121L16.01 2.575a1.5 1.5 0 0 0-2.121 0l-.3.3-1.089-.452V2A1.5 1.5 0 0 0 11 .5H9A1.5 1.5 0 0 0 7.5 2v.423l-1.09.452-.3-.3a1.5 1.5 0 0 0-2.121 0L2.576 3.99a1.5 1.5 0 0 0 0 2.121l.3.3L2.423 7.5H2A1.5 1.5 0 0 0 .5 9v2A1.5 1.5 0 0 0 2 12.5h.423l.452 1.09-.3.3a1.5 1.5 0 0 0 0 2.121l1.415 1.413a1.5 1.5 0 0 0 2.121 0l.3-.3 1.09.452V18A1.5 1.5 0 0 0 9 19.5h2a1.5 1.5 0 0 0 1.5-1.5v-.423l1.09-.452.3.3a1.5 1.5 0 0 0 2.121 0l1.415-1.414a1.5 1.5 0 0 0 0-2.121l-.3-.3.452-1.09H18a1.5 1.5 0 0 0 1.5-1.5V9A1.5 1.5 0 0 0 18 7.5Zm-8 6a3.5 3.5 0 1 1 0-7 3.5 3.5 0 0 1 0 7Z"/>
                        </svg>
                       <span class="sr-only">Settings</span>
                   </button>
                   <button type="button" class="p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600">
                       <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M18 2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2ZM2 18V7h6.7l.4-.409A4.309 4.309 0 0 1 15.753 7H18v11H2Z"/>
                            <path d="M8.139 10.411 5.289 13.3A1 1 0 0 0 5 14v2a1 1 0 0 0 1 1h2a1 1 0 0 0 .7-.288l2.886-2.851-3.447-3.45ZM14 8a2.463 2.463 0 0 0-3.484 0l-.971.983 3.468 3.468.987-.971A2.463 2.463 0 0 0 14 8Z"/>
                        </svg>
                       <span class="sr-only">Timeline</span>
                   </button>
                   <button type="button" class="p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600">
                       <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M14.707 7.793a1 1 0 0 0-1.414 0L11 10.086V1.5a1 1 0 0 0-2 0v8.586L6.707 7.793a1 1 0 1 0-1.414 1.414l4 4a1 1 0 0 0 1.416 0l4-4a1 1 0 0 0-.002-1.414Z"/>
                            <path d="M18 12h-2.55l-2.975 2.975a3.5 3.5 0 0 1-4.95 0L4.55 12H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2Zm-3 5a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"/>
                        </svg>
                       <span class="sr-only">Download</span>
                   </button>
               </div>
           </div>
           <button type="button" data-tooltip-target="tooltip-fullscreen" class="p-2 text-gray-500 rounded cursor-pointer sm:ms-auto hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600">
               <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 19 19">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 1h5m0 0v5m0-5-5 5M1.979 6V1H7m0 16.042H1.979V12M18 12v5.042h-5M13 12l5 5M2 1l5 5m0 6-5 5"/>
                </svg>
               <span class="sr-only">Full screen</span>
           </button>
           <div id="tooltip-fullscreen" role="tooltip" class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
               Show full screen
               <div class="tooltip-arrow" data-popper-arrow></div>
           </div>
       </div>
       <div class="px-4 py-2 bg-white rounded-b-lg dark:bg-gray-800">
           <label for="editor" class="sr-only">Publish post</label>
           <textarea id="editor" rows="8" class="block w-full px-0 text-sm text-gray-800 bg-white border-0 dark:bg-gray-800 focus:ring-0 dark:text-white dark:placeholder-gray-400" placeholder="Write an article..." required></textarea>
       </div>
   </div>
   <button type="submit" class="inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800">
       Publish post
   </button>
</form>

                </div>
              </div>


            </div>
          </Tabs.Item>
          <Tabs.Item title="Dashboard" icon={MdDashboard}>
            <h1 className="font-rubik text-xl font-medium text-gray-800 mt-20">
              Those is Profile tab's associated content. Clicking another tab
              will toggle the visibility of this one for the next. The tab
              JavaScript swaps classes to control the content visibility and
              styling.
            </h1>
          </Tabs.Item>
          <Tabs.Item title="Settings" icon={HiAdjustments}>
            <h1 className="font-rubik text-xl font-medium text-gray-800 mt-20">
              I is Profile tab's associated content. Clicking another tab will
              toggle the visibility of this one for the next. The tab JavaScript
              swaps classes to control the content visibility and styling.
            </h1>
          </Tabs.Item>
          <Tabs.Item title="Contacts" icon={HiClipboardList}>
            <h1 className="font-rubik text-xl font-medium text-gray-800 mt-20">
              Thas is Profile tab's associated content. Clicking another tab
              will toggle the visibility of this one for the next. The tab
              JavaScript swaps classes to control the content visibility and
              styling.
            </h1>
          </Tabs.Item>
        </Tabs>
      </div>
    </div>
  );
};

export default Settings;
