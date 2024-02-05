import React from "react";
import Profile from "../../../assets/images/dashboard/john.svg";
import Next from "../../../assets/images/nextbuttonfortable.svg";
import Prev from "../../../assets/images/prevbuttonfortable.svg";

const Invoicelisttable = () => {
  return (
    <div className=" relative overflow-x-auto shadow-md border border-[#ebebeb] rounded p-5 bg-white">
      <div class="flex items-center justify-between flex-column flex-wrap md:flex-row space-y-4 md:space-y-0 pb-4 bg-white ">
        <div>
          <button
            id="dropdownActionButton"
            data-dropdown-toggle="dropdownAction"
            class="font-rubik inline-flex items-center text-gray-500 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-3 py-1.5"
            type="button"
          >
            <span class="sr-only">Action button</span>
            Action
            <svg
              class="w-2.5 h-2.5 ms-2.5"
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
            id="dropdownAction"
            class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 "
          >
            <ul
              class="py-1 text-sm text-gray-700 "
              aria-labelledby="dropdownActionButton"
            >
              <li>
                <a
                  href="#"
                  class="font-rubik block px-4 py-2 hover:bg-gray-100 "
                >
                  Reward
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="font-rubik block px-4 py-2 hover:bg-gray-100 "
                >
                  Promote
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="font-rubik block px-4 py-2 hover:bg-gray-100 "
                >
                  Activate account
                </a>
              </li>
            </ul>
            <div class="py-1">
              <a
                href="#"
                class="font-rubik block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 "
              >
                Delete User
              </a>
            </div>
          </div>
        </div>
        <label for="table-search" class="sr-only font-rubik ">
          Search
        </label>
        <div class="relative">
          <div class="absolute inset-y-0 rtl:inset-r-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg
              class="w-4 h-4 text-gray-500 "
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>
          <input
            type="text"
            id="table-search-users"
            class="font-rubik block p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 "
            placeholder="Search for users"
          />
        </div>
      </div>
      <table class="w-full text-sm text-left rtl:text-right text-gray-500 ">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 ">
          <tr>
            <th scope="col" class="p-4">
              <div class="flex items-center">
                <input
                  id="checkbox-all-search"
                  type="checkbox"
                  class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500  "
                />
                <label for="checkbox-all-search" class="sr-only">
                  checkbox
                </label>
              </div>
            </th>
            <th scope="col" class="px-6 py-3 font-rubik ">
              CUSTOMER
            </th>
            <th scope="col" class="px-6 py-3 font-rubik ">
              EMAIL
            </th>
            <th scope="col" class="px-6 py-3 font-rubik ">
              CREATED
            </th>
            <th scope="col" class="px-6 py-3 font-rubik ">
              DUE DATE
            </th>
            <th scope="col" class="px-6 py-3 font-rubik ">
              Amount
            </th>
            <th scope="col" class="px-6 py-3 font-rubik ">
              Status
            </th>
            <th scope="col" class="px-6 py-3 font-rubik ">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          <tr class="bg-white border-b  hover:bg-gray-50 ">
            <td class="w-4 p-4">
              <div class="flex items-center">
                <input
                  id="checkbox-table-search-1"
                  type="checkbox"
                  class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500  focus:ring-2 "
                />
                <label for="checkbox-table-search-1" class="sr-only">
                  checkbox
                </label>
              </div>
            </td>
            <th
              scope="row"
              class="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap "
            >
              <img
                class="w-10 h-10 rounded-full"
                src={Profile}
                alt="Jese image"
              />
              <div class="ps-3">
                <div class="text-base font-semibold font-rubik">Neil Sims</div>
                <div class="font-normal text-gray-500 font-rubik">
                  INV-00001
                </div>
              </div>
            </th>
            <td class="px-6 py-4 font-rubik">neil.sims@flowbite.com</td>
            <td>
              <div class="ps-3">
                <div class="text-base font-semibold font-rubik">
                  Jan 01, 2024
                </div>
                <div class="font-normal text-gray-500 font-rubik">1:11 PM</div>
              </div>
            </td>

            <td>
              <div class="ps-3">
                <div class="text-base font-semibold font-rubik">
                  Jan 01, 2024
                </div>
                <div class="font-normal text-gray-500 font-rubik">1:11 PM</div>
              </div>
            </td>

            <td class="px-6 py-4 font-rubik">$ 111.00</td>

            <td class="px-6 py-4">
              <div class="flex items-center">
                <div class="h-2.5 w-2.5 rounded-full bg-green-500 me-2 font-rubik "></div>{" "}
                Online
              </div>
            </td>
            <td class="px-6 py-4">
              <a
                href="#"
                class="font-rubik font-medium text-blue-600  hover:underline"
              >
                Edit user
              </a>
            </td>
          </tr>
          <tr class="bg-white border-b  hover:bg-gray-50 ">
            <td class="w-4 p-4">
              <div class="flex items-center">
                <input
                  id="checkbox-table-search-2"
                  type="checkbox"
                  class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500  focus:ring-2"
                />
                <label for="checkbox-table-search-2" class="sr-only">
                  checkbox
                </label>
              </div>
            </td>
            <th
              scope="row"
              class="flex items-center px-6 py-4 font-medium text-[#404040] whitespace-nowrap "
            >
              <img
                class="w-10 h-10 rounded-full"
                src={Profile}
                alt="Jese image"
              />
              <div class="ps-3">
                <div class="text-base font-semibold font-rubik">
                  Bonnie Green
                </div>
                <div class="font-normal text-gray-500 font-rubik">
                  INV-00001
                </div>
              </div>
            </th>
            <td class="px-6 py-4 font-rubik">neil.sims@flowbite.com</td>

            <td>
              <div class="ps-3">
                <div class="text-base font-semibold font-rubik">
                  Jan 01, 2024
                </div>
                <div class="font-normal text-gray-500 font-rubik">1:11 PM</div>
              </div>
            </td>

            <td>
              <div class="ps-3">
                <div class="text-base font-semibold font-rubik">
                  Jan 01, 2024
                </div>
                <div class="font-normal text-gray-500 font-rubik">1:11 PM</div>
              </div>
            </td>

            <td class="px-6 py-4 font-rubik">$ 111.00</td>

            <td class="px-6 py-4">
              <div class="flex items-center">
                <div class="h-2.5 w-2.5 rounded-full bg-yellow-500 me-2 font-rubik "></div>{" "}
                Pending
              </div>
            </td>
            <td class="px-6 py-4">
              <a
                href="#"
                class="font-rubik font-medium text-blue-600  hover:underline"
              >
                Edit user
              </a>
            </td>
          </tr>
          <tr class="bg-white border-b  hover:bg-gray-50 ">
            <td class="w-4 p-4">
              <div class="flex items-center">
                <input
                  id="checkbox-table-search-2"
                  type="checkbox"
                  class="font-rubik w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500   focus:ring-2 "
                />
                <label
                  for="checkbox-table-search-2"
                  class="sr-only font-rubik "
                >
                  checkbox
                </label>
              </div>
            </td>
            <th
              scope="row"
              class="flex items-center px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
            >
              <img
                class="w-10 h-10 rounded-full"
                src={Profile}
                alt="Jese image"
              />
              <div class="ps-3">
                <div class="text-base font-semibold font-rubik ">Jese Leos</div>
                <div class="font-normal text-gray-500 font-rubik ">
                  INV-00001
                </div>
              </div>
            </th>
            <td class="px-6 py-4 font-rubik ">neil.sims@flowbite.com</td>
            <td>
              <div class="ps-3">
                <div class="text-base font-semibold font-rubik">
                  Jan 01, 2024
                </div>
                <div class="font-normal text-gray-500 font-rubik">1:11 PM</div>
              </div>
            </td>
            <td>
              <div class="ps-3">
                <div class="text-base font-semibold font-rubik">
                  Jan 01, 2024
                </div>
                <div class="font-normal text-gray-500 font-rubik">1:11 PM</div>
              </div>
            </td>

            <td class="px-6 py-4 font-rubik">$ 111.00</td>

            <td class="px-6 py-4">
              <div class="flex items-center">
                <div class="h-2.5 w-2.5 rounded-full bg-yellow-500 me-2 font-rubik "></div>{" "}
                Pending
              </div>
            </td>
            <td class="px-6 py-4">
              <a
                href="#"
                class="font-rubik font-medium text-blue-600  hover:underline font-rubik "
              >
                Edit user
              </a>
            </td>
          </tr>
          <tr class="bg-white border-b  hover:bg-gray-50 ">
            <td class="w-4 p-4">
              <div class="flex items-center">
                <input
                  id="checkbox-table-search-2"
                  type="checkbox"
                  class="font-rubik w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500  focus:ring-2 "
                />
                <label
                  for="checkbox-table-search-2"
                  class="sr-only font-rubik "
                >
                  checkbox
                </label>
              </div>
            </td>
            <th
              scope="row"
              class="flex items-center px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
            >
              <img
                class="w-10 h-10 rounded-full"
                src={Profile}
                alt="Jese image"
              />
              <div class="ps-3">
                <div class="text-base font-semibold font-rubik ">
                  Thomas Lean
                </div>
                <div class="font-normal text-gray-500c font-rubik ">
                  INV-00001
                </div>
              </div>
            </th>
            <td class="px-6 py-4 font-rubik ">neil.sims@flowbite.com</td>
            <td>
              <div class="ps-3">
                <div class="text-base font-semibold font-rubik">
                  Jan 01, 2024
                </div>
                <div class="font-normal text-gray-500 font-rubik">1:11 PM</div>
              </div>
            </td>
            <td>
              <div class="ps-3">
                <div class="text-base font-semibold font-rubik">
                  Jan 01, 2024
                </div>
                <div class="font-normal text-gray-500 font-rubik">1:11 PM</div>
              </div>
            </td>
            <td class="px-6 py-4 font-rubik">$ 111.00</td>

            <td class="px-6 py-4">
              <div class="flex items-center">
                <div class="h-2.5 w-2.5 rounded-full bg-green-500 me-2 font-rubik "></div>{" "}
                Online
              </div>
            </td>
            <td class="px-6 py-4">
              <a
                href="#"
                class="font-medium text-blue-600  hover:underline font-rubik "
              >
                Edit user
              </a>
            </td>
          </tr>
          <tr class="bg-white  hover:bg-gray-50 0">
            <td class="w-4 p-4">
              <div class="flex items-center">
                <input
                  id="checkbox-table-search-3"
                  type="checkbox"
                  class="font-rubik w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500   focus:ring-2 "
                />
                <label
                  for="checkbox-table-search-3 font-rubik "
                  class="sr-only"
                >
                  checkbox
                </label>
              </div>
            </td>
            <th
              scope="row"
              class="flex items-center px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
            >
              <img
                class="w-10 h-10 rounded-full"
                src={Profile}
                alt="Jese image"
              />
              <div class="ps-3">
                <div class="text-base font-semibold font-rubik ">
                  Leslie Livingston
                </div>
                <div class="font-normal text-gray-500 font-rubik ">
                  INV-00001
                </div>
              </div>
            </th>
            <td class="px-6 py-4 font-rubik ">neil.sims@flowbite.com</td>
            <td>
              <div class="ps-3">
                <div class="text-base font-semibold font-rubik">
                  Jan 01, 2024
                </div>
                <div class="font-normal text-gray-500 font-rubik">1:11 PM</div>
              </div>
            </td>
            <td>
              <div class="ps-3">
                <div class="text-base font-semibold font-rubik">
                  Jan 01, 2024
                </div>
                <div class="font-normal text-gray-500 font-rubik">1:11 PM</div>
              </div>
            </td>
            <td class="px-6 py-4 font-rubik ">$ 111.00</td>

            <td class="px-6 py-4">
              <div class="flex items-center">
                <div class="h-2.5 w-2.5 rounded-full bg-red-500 me-2 font-rubik "></div>{" "}
                Offline
              </div>
            </td>
            <td class="px-6 py-4">
              <a
                href="#"
                class="font-medium text-blue-600  hover:underline font-rubik "
              >
                Edit user
              </a>
            </td>
          </tr>
        </tbody>
      </table>
      <nav
        class="flex items-center flex-column flex-wrap md:flex-row justify-between pt-4 px-4"
        aria-label="Table navigation"
      >
        <span class="text-sm font-normal text-gray-500  mb-4 md:mb-0 block w-full md:inline md:w-auto font-rubik">
          Showing{" "}
          <span class="font-semibold text-gray-900 e font-rubik">
            1-10
          </span>{" "}
          of{" "}
          <span class="font-semibold text-gray-900  font-rubik">
            1000
          </span>
        </span>
        <ul class="inline-flex -space-x-px rtl:space-x-reverse text-sm h-8 font-rubik">
          <li>
            <a
              href="#"
              class="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700   font-rubik"
            >
             <img src={Prev} alt="" />
            </a>
          </li>
          <li>
            <a
              href="#"
              class="font-rubik flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 "
            >
              1
            </a>
          </li>
          <li>
            <a
              href="#"
              class="font-rubik flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 "
            >
              2
            </a>
          </li>
          <li>
            <a
              href="#"
              aria-current="page"
              class="font-rubik flex items-center justify-center px-3 h-8 text-blue-600 border border-gray-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 "
            >
              3
            </a>
          </li>
          <li>
            <a
              href="#"
              class="font-rubik flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 "
            >
              4
            </a>
          </li>
          <li>
            <a
              href="#"
              class="font-rubik flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 "
            >
              5
            </a>
          </li>
          <li>
            <a
              href="#"
              class="font-rubik flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 "
            >
              <img src={Next} alt="" />
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Invoicelisttable;
