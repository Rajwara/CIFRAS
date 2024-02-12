import React from 'react';
import Next from "../../../assets/images/nextbuttonfortable.svg";
import Prev from "../../../assets/images/prevbuttonfortable.svg";
import Edit from "../../../assets/images/edittablebutton.svg";
import Delete from "../../../assets/images/deletetablebutton.svg";

const Clienttabledata = () => {
  return (
    <div className='border border-[#ebebeb] rounded'>
    <div className="flex items-center justify-between rounded flex-column p-8 flex-wrap md:flex-row space-y-4 md:space-y-0 pb-4 bg-white ">
          <div>
              <button id="dropdownActionButton" data-dropdown-toggle="dropdownAction" className="inline-flex items-center text-gray-500 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-3 py-1.5 " type="button">
                  <span className="sr-only">Action button</span>
                  Action
                  <svg className="w-2.5 h-2.5 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
                  </svg>
              </button>
              {/* <!-- Dropdown menu --> */}
              <div id="dropdownAction" className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 ">
                  <ul className="py-1 text-sm text-[#404040] " aria-labelledby="dropdownActionButton">
                      <li>
                          <a href="#" className="block px-4 py-2 hover:bg-gray-100 font-inter text-[#404040]">Reward</a>
                      </li>
                      <li>
                          <a href="#" className="block px-4 py-2 hover:bg-gray-100 font-inter text-[#404040]">Promote</a>
                      </li>
                      <li>
                          <a href="#" className="block px-4 py-2 hover:bg-gray-100 font-inter text-[#404040]">Activate account</a>
                      </li>
                  </ul>
                  <div className="py-1">
                      <a href="#" className="block px-4 py-2 text-sm text-[#404040] hover:bg-gray-100 font-inter">Delete User</a>
                  </div>
              </div>
          </div>
          <label for="table-search" className="sr-only">Search</label>
          <div className="relative">
              <div className="absolute inset-y-0 rtl:inset-r-0 start-0 flex items-center ps-3 pointer-events-none">
                  <svg className="w-4 h-4 text-gray-500 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                  </svg>
              </div>
              <input type="text" id="table-search-users" className="block p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 " placeholder="Search for users" />
          </div>
      </div>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg ">
          <table className="w-full text-sm text-left  text-[#404040] font-inter font-normal">
              <thead className="text-xs uppercase text-[#404040] bg-[#ECECEC]">
                  <tr>
                      <th scope="col" className="p-4">
                          <div className="flex items-center">
                              <input id="checkbox-all-search" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 " />
                              <label for="checkbox-all-search" className="sr-only">checkbox</label>
                          </div>
                      </th>
                      <th scope="col" className="px-6 py-3">
                          Name
                      </th>
                      <th scope="col" className="px-6 py-3">
                          Alias
                      </th>
                      <th scope="col" className="px-6 py-3">
                          Address
                      </th>
                      <th scope="col" className="px-6 py-3">
                          Phone Number
                      </th>
                      <th scope="col" className="px-6 py-3">
                          Created By
                      </th>
                      <th scope="col" className="px-6 py-3">
                          Action
                      </th>
                  </tr>
              </thead>
              <tbody>
                  <tr className="bg-white border-b  hover:bg-gray-50 ">
                      <td className="w-4 p-4">
                          <div className="flex items-center">
                              <input id="checkbox-table-search-1" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 " />
                              <label for="checkbox-table-search-1" className="sr-only">checkbox</label>
                          </div>
                      </td>
                      <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                          Apple MacBook Pro 17"
                      </th>
                      <td className="px-6 py-4">
                          Silver
                      </td>
                      <td className="px-6 py-4">
                          Laptop
                      </td>
                      <td className="px-6 py-4">
                          $2999
                      </td>
                      <td className="px-6 py-4">
                      Jamal Saied
                      </td>
                      <td className="px-6 py-4 flex gap-4">
                          <a href="#" className="font-medium text-blue-600 "><img src={Edit} alt=""  classNameName='w-6 h-6'/></a>
                          <a href="#" className="font-medium text-blue-600 "><img src={Delete} alt="" classNameName='w-6 h-6' /></a>
                      </td>
                  </tr>
                  <tr className="bg-white border-b ">
                      <td className="w-4 p-4">
                          <div className="flex items-center">
                              <input id="checkbox-table-search-2" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 " />
                              <label for="checkbox-table-search-2" className="sr-only">checkbox</label>
                          </div>
                      </td>
                      <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                          Microsoft Surface Pro
                      </th>
                      <td className="px-6 py-4">
                          White
                      </td>
                      <td className="px-6 py-4">
                          Laptop PC
                      </td>
                      <td className="px-6 py-4">
                          $1999
                      </td>
                      <td className="px-6 py-4">
                      Jamal Saied
                      </td>
                      <td className="px-6 py-4 flex gap-4">
                          <a href="#" className="font-medium text-blue-600  hover:underline"><img src={Edit} alt=""  classNameName='w-6 h-6'/></a>
                          <a href="#" className="font-medium text-blue-600 hover:underline"><img src={Delete} alt="" classNameName='w-6 h-6' /></a>
                      </td>
                  </tr>
                  <tr className="bg-white border-b  hover:bg-gray-50 ">
                      <td className="w-4 p-4">
                          <div className="flex items-center">
                              <input id="checkbox-table-search-3" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 " />
                              <label for="checkbox-table-search-3" className="sr-only">checkbox</label>
                          </div>
                      </td>
                      <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                          Magic Mouse 2
                      </th>
                      <td className="px-6 py-4">
                          Black
                      </td>
                      <td className="px-6 py-4">
                          Accessories
                      </td>
                      <td className="px-6 py-4">
                          $99
                      </td>
                      <td className="px-6 py-4">
                      Jamal Saied
                      </td>
                      <td className="px-6 py-4 flex gap-4">
                          <a href="#" className="font-medium text-blue-600  hover:underline"><img src={Edit} alt=""  classNameName='w-6 h-6'/></a>
                          <a href="#" className="font-medium text-blue-600  hover:underline"><img src={Delete} alt="" classNameName='w-6 h-6' /></a>
                      </td>
                  </tr>
                  <tr className="bg-white border-b ">
                      <td className="w-4 p-4">
                          <div className="flex items-center">
                              <input id="checkbox-table-search-3" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 " />
                              <label for="checkbox-table-search-3" className="sr-only">checkbox</label>
                          </div>
                      </td>
                      <th scope="row" className="px-6 py-4 font-medium text-[#404040] whitespace-nowrap ">
                          Apple Watch
                      </th>
                      <td className="px-6 py-4">
                          Black
                      </td>
                      <td className="px-6 py-4">
                          Watches
                      </td>
                      <td className="px-6 py-4">
                          $199
                      </td>
                      <td className="px-6 py-4">
                      Jamal Saied
                      </td>
                      <td className="px-6 py-4 flex gap-4">
                          <a href="#" className="font-medium text-blue-600  hover:underline"><img src={Edit} alt=""  classNameName='w-6 h-6'/></a>
                          <a href="#" className="font-medium text-blue-600  hover:underline"><img src={Delete} alt="" classNameName='w-6 h-6' /></a>
                      </td>
                  </tr>
                  <tr className="bg-white border-b  hover:bg-gray-50 ">
                      <td className="w-4 p-4">
                          <div className="flex items-center">
                              <input id="checkbox-table-search-3" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 " />
                              <label for="checkbox-table-search-3" className="sr-only">checkbox</label>
                          </div>
                      </td>
                      <th scope="row" className="px-6 py-4 font-medium text-[#404040] whitespace-nowrap ">
                          Apple iMac
                      </th>
                      <td className="px-6 py-4">
                          Silver
                      </td>
                      <td className="px-6 py-4">
                          PC
                      </td>
                      <td className="px-6 py-4">
                          $2999
                      </td>
                      <td className="px-6 py-4">
                      Jamal Saied
                      </td>
                      <td className="px-6 py-4 flex gap-4">
                          <a href="#" className="font-medium text-blue-600  hover:underline"><img src={Edit} alt=""  classNameName='w-6 h-6'/></a>
                          <a href="#" className="font-medium text-blue-600 hover:underline"><img src={Delete} alt="" classNameName='w-6 h-6' /></a>
                      </td>
                  </tr>
                  <tr className="bg-white border-b  hover:bg-gray-50 ">
                      <td className="w-4 p-4">
                          <div className="flex items-center">
                              <input id="checkbox-table-search-3" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 " />
                              <label for="checkbox-table-search-3" className="sr-only">checkbox</label>
                          </div>
                      </td>
                      <th scope="row" className="px-6 py-4 font-medium text-[#404040] whitespace-nowrap ">
                          Apple AirPods
                      </th>
                      <td className="px-6 py-4">
                          White
                      </td>
                      <td className="px-6 py-4">
                          Accessories
                      </td>
                      <td className="px-6 py-4">
                          $399
                      </td>
                      <td className="px-6 py-4">
                      Jamal Saied
                      </td>
                      <td className="px-6 py-4 flex gap-4">
                          <a href="#" className="font-medium text-blue-600  hover:underline"><img src={Edit} alt=""  classNameName='w-6 h-6'/></a>
                          <a href="#" className="font-medium text-blue-600  hover:underline"><img src={Delete} alt="" classNameName='w-6 h-6' /></a>
                      </td>
                  </tr>
                  <tr className="bg-white border-b ">
                      <td className="w-4 p-4">
                          <div className="flex items-center">
                              <input id="checkbox-table-search-3" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 " />
                              <label for="checkbox-table-search-3" className="sr-only">checkbox</label>
                          </div>
                      </td>
                      <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                          iPad Pro
                      </th>
                      <td className="px-6 py-4">
                          Gold
                      </td>
                      <td className="px-6 py-4">
                          Tablet
                      </td>
                      <td className="px-6 py-4">
                          $699
                      </td>
                      <td className="px-6 py-4">
                      Jamal Saied
                      </td>
                      <td className="px-6 py-4 flex gap-4">
                          <a href="#" className="font-medium text-blue-600 hover:underline"><img src={Edit} alt=""  classNameName='w-6 h-6'/></a>
                          <a href="#" className="font-medium text-blue-600  hover:underline"><img src={Delete} alt="" classNameName='w-6 h-6' /></a>
                      </td>
                  </tr>
                  <tr className="bg-white border-b  hover:bg-gray-50 ">
                      <td className="w-4 p-4">
                          <div className="flex items-center">
                              <input id="checkbox-table-search-3" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 " />
                              <label for="checkbox-table-search-3" className="sr-only">checkbox</label>
                          </div>
                      </td>
                      <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                          Magic Keyboard
                      </th>
                      <td className="px-6 py-4">
                          Black
                      </td>
                      <td className="px-6 py-4">
                          Accessories
                      </td>
                      <td className="px-6 py-4">
                          $99
                      </td>
                      <td className="px-6 py-4">
                      Jamal Saied
                      </td>
                      <td className="px-6 py-4 flex gap-4">
                          <a href="#" className="font-medium text-blue-600  hover:underline"><img src={Edit} alt=""  classNameName='w-6 h-6'/></a>
                          <a href="#" className="font-medium text-blue-600  hover:underline"><img src={Delete} alt="" classNameName='w-6 h-6' /></a>
                      </td>
                  </tr>
                  
                  <tr className="bg-white border-b ">
                      <td className="w-4 p-4">
                          <div className="flex items-center">
                              <input id="checkbox-table-search-3" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 " />
                              <label for="checkbox-table-search-3" className="sr-only">checkbox</label>
                          </div>
                      </td>
                      <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                          Smart Folio iPad Air
                      </th>
                      <td className="px-6 py-4">
                          Blue
                      </td>
                      <td className="px-6 py-4">
                          Accessories
                      </td>
                      <td className="px-6 py-4">
                          $79
                      </td>
                      <td className="px-6 py-4">
                      Jamal Saied
                      </td>
                      <td className="px-6 py-4 flex gap-4">
                          <a href="#" className="font-medium text-blue-600  hover:underline"><img src={Edit} alt=""  classNameName='w-6 h-6'/></a>
                          <a href="#" className="font-medium text-blue-600  hover:underline"><img src={Delete} alt="" classNameName='w-6 h-6' /></a>
                      </td>
                  </tr>
                  <tr className="bg-white border-b  hover:bg-gray-50 ">
                      <td className="w-4 p-4">
                          <div className="flex items-center">
                              <input id="checkbox-table-search-3" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 " />
                              <label for="checkbox-table-search-3" className="sr-only">checkbox</label>
                          </div>
                      </td>
                      <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                          AirTag
                      </th>
                      <td className="px-6 py-4">
                          Silver
                      </td>
                      <td className="px-6 py-4">
                          Accessories
                      </td>
                      <td className="px-6 py-4">
                          $29
                      </td>
                      <td className="px-6 py-4">
                      Jamal Saied
                      </td>
                      <td className="px-6 py-4 flex gap-4">
                          <a href="#" className="font-medium text-blue-600  hover:underline"><img src={Edit} alt=""  classNameName='w-6 h-6'/></a>
                          <a href="#" className="font-medium text-blue-600  hover:underline"><img src={Delete} alt="" classNameName='w-6 h-6' /></a>
                      </td>
                  </tr>
              </tbody>
          </table>
          <nav className="flex items-center p-8 flex-column flex-wrap md:flex-row justify-between pt-4" aria-label="Table navigation">
              <span className="text-sm font-normal text-gray-500  mb-4 md:mb-0 block w-full md:inline md:w-auto"><span className="font-semibold text-gray-900 ">1 fo 3 </span>  <span className="font-semibold text-gray-900 ">pages</span></span>
              <ul className="inline-flex -space-x-px rtl:space-x-reverse text-sm h-8">
                  <li>
                      <a href="#" className="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 "><img src={Prev} alt=' ' classNameName='w-2 h-6' /></a>
                  </li>
                  <li>
                      <a href="#" className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 ">1</a>
                  </li>
                  <li>
                      <a href="#" className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 ">2</a>
                  </li>
                  <li>
                      <a href="#" aria-current="page" className="flex items-center justify-center px-3 h-8 text-blue-600 border border-gray-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 ">3</a>
                  </li>
                  <li>
                      <a href="#" className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 ">4</a>
                  </li>
                  <li>
                      <a href="#" className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 ">5</a>
                  </li>
                  <li>
              <a href="#" className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 "><img src={Next} alt=' ' classNameName='w-2 h-6' /></a>
                  </li>
              </ul>
          </nav>
      </div>
      </div>
  )
}

export default Clienttabledata