import React from "react";
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
                          <div className="relative text-gray-900">
                            <div className=" absolute inset-y-0 start-0 flex items-center  pointer-events-none bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  w-full  p-2.5      ">
                              <img src={EmailFieldIcon} alt="" />
                            </div>
                            <Dropdown label="Dropdown button" className=" w-full text-gray-900">
                              <Dropdown.Header >
                                <span className="block text-sm text-gray-950">
                                  Bonnie Green
                                </span>
                                <span className="block truncate text-sm font-medium text-gray-950">
                                  bonnie@flowbite.com
                                </span>
                              </Dropdown.Header>
                              <Dropdown.Item>Dashboard</Dropdown.Item>
                              <Dropdown.Item>Settings</Dropdown.Item>
                              <Dropdown.Item>Earnings</Dropdown.Item>
                              <Dropdown.Divider />
                              <Dropdown.Item>Sign out</Dropdown.Item>
                            </Dropdown>
                          </div>
                        </div>
                      </div>
                    </div>
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
