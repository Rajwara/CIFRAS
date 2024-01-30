import React from 'react';
import Next from "../../assets/images/nextbuttonfortable.svg";
import Prev from "../../assets/images/prevbuttonfortable.svg";
import Edit from "../../assets/images/edittablebutton.svg";
import Delete from "../../assets/images/deletetablebutton.svg";

const Quotetabledata = () => {
  return (
    <div>
  <div class="flex items-center justify-between rounded flex-column p-8 flex-wrap md:flex-row space-y-4 md:space-y-0 pb-4 bg-white dark:bg-gray-900">
        <div>
            <button id="dropdownActionButton" data-dropdown-toggle="dropdownAction" class="inline-flex items-center text-gray-500 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-3 py-1.5 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700" type="button">
                <span class="sr-only">Action button</span>
                Action
                <svg class="w-2.5 h-2.5 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
                </svg>
            </button>
            {/* <!-- Dropdown menu --> */}
            <div id="dropdownAction" class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
                <ul class="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownActionButton">
                    <li>
                        <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Reward</a>
                    </li>
                    <li>
                        <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Promote</a>
                    </li>
                    <li>
                        <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Activate account</a>
                    </li>
                </ul>
                <div class="py-1">
                    <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Delete User</a>
                </div>
            </div>
        </div>
        <label for="table-search" class="sr-only">Search</label>
        <div class="relative">
            <div class="absolute inset-y-0 rtl:inset-r-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                </svg>
            </div>
            <input type="text" id="table-search-users" class="block p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search for users" />
        </div>
    </div>
    <div class="relative overflow-x-auto shadow-md sm:rounded-lg ">
        <table class="w-full text-sm text-left text-[#404040] font-rubik font-normal ">
            <thead class="text-xs text-gray-700 uppercase text-[#404040] bg-[#ECECEC]">
                <tr className=''>
                <th scope="col" class="px-6 py-4">
                       ID
                    </th>
                    <th scope="col" class="px-6 py-4">
                        Quote Number
                    </th>
                    <th scope="col" class="px-6 py-4">
                        Quote Date
                    </th>
                    <th scope="col" class="px-6 py-4">
                        Expiration Date
                    </th>
                    <th scope="col" class="px-6 py-4">
                        Notes
                    </th>
                    <th scope="col" class="px-6 py-4">
                        Notification Date
                    </th>
                    <th scope="col" class="px-6 py-4">
                        Client
                    </th>
                    <th scope="col" class="px-6 py-4">
                        Action
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                    <td scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        001
                    </td>
                    <td scope="row" class="px-6 py-4 ">
                        Q-1
                    </td>
                    <td class="px-6 py-4">
                       Jan 01, 2024
                    </td>
                    <td class="px-6 py-4">
                    Jan 01, 2024
                    </td>
                    <td class="px-6 py-4">
                        $Abc
                    </td>
                    <td class="px-6 py-4">
                    Jan 01, 2024
                    </td>
                    <td class="px-6 py-4">
                        undefined
                    </td>
                    <td class="px-6 py-4 flex gap-4">
                          <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline"><img src={Edit} alt=""  className='w-6 h-6'/></a>
                          <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline"><img src={Delete} alt="" className='w-6 h-6' /></a>
                    </td>
                </tr>
                <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                    <td scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        001
                    </td>
                    <td scope="row" class="px-6 py-4 ">
                        Q-1
                    </td>
                    <td class="px-6 py-4">
                       Jan 01, 2024
                    </td>
                    <td class="px-6 py-4">
                    Jan 01, 2024
                    </td>
                    <td class="px-6 py-4">
                        $Abc
                    </td>
                    <td class="px-6 py-4">
                    Jan 01, 2024
                    </td>
                    <td class="px-6 py-4">
                        undefined
                    </td>
                    <td class="px-6 py-4 flex gap-4">
                          <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline"><img src={Edit} alt=""  className='w-6 h-6'/></a>
                          <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline"><img src={Delete} alt="" className='w-6 h-6' /></a>
                    </td>
                </tr>
                <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                    <td scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        001
                    </td>
                    <td scope="row" class="px-6 py-4 ">
                        Q-1
                    </td>
                    <td class="px-6 py-4">
                       Jan 01, 2024
                    </td>
                    <td class="px-6 py-4">
                    Jan 01, 2024
                    </td>
                    <td class="px-6 py-4">
                        $Abc
                    </td>
                    <td class="px-6 py-4">
                    Jan 01, 2024
                    </td>
                    <td class="px-6 py-4">
                        undefined
                    </td>
                    <td class="px-6 py-4 flex gap-4">
                          <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline"><img src={Edit} alt=""  className='w-6 h-6'/></a>
                          <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline"><img src={Delete} alt="" className='w-6 h-6' /></a>
                    </td>
                </tr>
                <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                    <td scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        001
                    </td>
                    <td scope="row" class="px-6 py-4 ">
                        Q-1
                    </td>
                    <td class="px-6 py-4">
                       Jan 01, 2024
                    </td>
                    <td class="px-6 py-4">
                    Jan 01, 2024
                    </td>
                    <td class="px-6 py-4">
                        $Abc
                    </td>
                    <td class="px-6 py-4">
                    Jan 01, 2024
                    </td>
                    <td class="px-6 py-4">
                        undefined
                    </td>
                    <td class="px-6 py-4 flex gap-4">
                          <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline"><img src={Edit} alt=""  className='w-6 h-6'/></a>
                          <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline"><img src={Delete} alt="" className='w-6 h-6' /></a>
                    </td>
                </tr>
                <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                    <td scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        001
                    </td>
                    <td scope="row" class="px-6 py-4 ">
                        Q-1
                    </td>
                    <td class="px-6 py-4">
                       Jan 01, 2024
                    </td>
                    <td class="px-6 py-4">
                    Jan 01, 2024
                    </td>
                    <td class="px-6 py-4">
                        $Abc
                    </td>
                    <td class="px-6 py-4">
                    Jan 01, 2024
                    </td>
                    <td class="px-6 py-4">
                        undefined
                    </td>
                    <td class="px-6 py-4 flex gap-4">
                          <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline"><img src={Edit} alt=""  className='w-6 h-6'/></a>
                          <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline"><img src={Delete} alt="" className='w-6 h-6' /></a>
                    </td>
                </tr>
                <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                    <td scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        001
                    </td>
                    <td scope="row" class="px-6 py-4 ">
                        Q-1
                    </td>
                    <td class="px-6 py-4">
                       Jan 01, 2024
                    </td>
                    <td class="px-6 py-4">
                    Jan 01, 2024
                    </td>
                    <td class="px-6 py-4">
                        $Abc
                    </td>
                    <td class="px-6 py-4">
                    Jan 01, 2024
                    </td>
                    <td class="px-6 py-4">
                        undefined
                    </td>
                    <td class="px-6 py-4 flex gap-4">
                          <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline"><img src={Edit} alt=""  className='w-6 h-6'/></a>
                          <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline"><img src={Delete} alt="" className='w-6 h-6' /></a>
                    </td>
                </tr>
                <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                    <td scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        001
                    </td>
                    <td scope="row" class="px-6 py-4 ">
                        Q-1
                    </td>
                    <td class="px-6 py-4">
                       Jan 01, 2024
                    </td>
                    <td class="px-6 py-4">
                    Jan 01, 2024
                    </td>
                    <td class="px-6 py-4">
                        $Abc
                    </td>
                    <td class="px-6 py-4">
                    Jan 01, 2024
                    </td>
                    <td class="px-6 py-4">
                        undefined
                    </td>
                    <td class="px-6 py-4 flex gap-4">
                          <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline"><img src={Edit} alt=""  className='w-6 h-6'/></a>
                          <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline"><img src={Delete} alt="" className='w-6 h-6' /></a>
                    </td>
                </tr>
                <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                    <td scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        001
                    </td>
                    <td scope="row" class="px-6 py-4 ">
                        Q-1
                    </td>
                    <td class="px-6 py-4">
                       Jan 01, 2024
                    </td>
                    <td class="px-6 py-4">
                    Jan 01, 2024
                    </td>
                    <td class="px-6 py-4">
                        $Abc
                    </td>
                    <td class="px-6 py-4">
                    Jan 01, 2024
                    </td>
                    <td class="px-6 py-4">
                        undefined
                    </td>
                    <td class="px-6 py-4 flex gap-4">
                          <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline"><img src={Edit} alt=""  className='w-6 h-6'/></a>
                          <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline"><img src={Delete} alt="" className='w-6 h-6' /></a>
                    </td>
                </tr>
                <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                    <td scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        001
                    </td>
                    <td scope="row" class="px-6 py-4 ">
                        Q-1
                    </td>
                    <td class="px-6 py-4">
                       Jan 01, 2024
                    </td>
                    <td class="px-6 py-4">
                    Jan 01, 2024
                    </td>
                    <td class="px-6 py-4">
                        $Abc
                    </td>
                    <td class="px-6 py-4">
                    Jan 01, 2024
                    </td>
                    <td class="px-6 py-4">
                        undefined
                    </td>
                    <td class="px-6 py-4 flex gap-4">
                          <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline"><img src={Edit} alt=""  className='w-6 h-6'/></a>
                          <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline"><img src={Delete} alt="" className='w-6 h-6' /></a>
                    </td>
                </tr>
            </tbody>
        </table>
        <nav class="flex items-center p-8 flex-column flex-wrap md:flex-row justify-between pt-4" aria-label="Table navigation">
            <span class="text-sm font-normal text-gray-500 dark:text-gray-400 mb-4 md:mb-0 block w-full md:inline md:w-auto"><span class="font-semibold text-gray-900 dark:text-white">1 fo 3 </span>  <span class="font-semibold text-gray-900 dark:text-white">pages</span></span>
            <ul class="inline-flex -space-x-px rtl:space-x-reverse text-sm h-8">
                <li>
                    <a href="#" class="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"><img src={Prev} alt=' ' className='w-2 h-6' /></a>
                </li>
                <li>
                    <a href="#" class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">1</a>
                </li>
                <li>
                    <a href="#" class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">2</a>
                </li>
                <li>
                    <a href="#" aria-current="page" class="flex items-center justify-center px-3 h-8 text-blue-600 border border-gray-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white">3</a>
                </li>
                <li>
                    <a href="#" class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">4</a>
                </li>
                <li>
                    <a href="#" class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">5</a>
                </li>
                <li>
            <a href="#" class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"><img src={Next} alt=' ' className='w-2 h-6' /></a>
                </li>
            </ul>
        </nav>
    </div>
    </div>
  )
}

export default Quotetabledata