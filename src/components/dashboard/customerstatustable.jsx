import React from "react";
import Profile from '../../assets/images/dashboard/john.svg'

const Customerstatustable = () => {

    const tabledata = [
        {
        id : 1,
        name : "Neil Sims",
        email : "neil.sims@flowbite.com",
        position : "React Developer",
        status : "Online",
        profileimage : Profile,
        role : "Edit User"

    },  {
        id : 2,
        name : "Neil Sims",
        email : "neil.sims@flowbite.com",
        position : "React Developer",
        status : "Online",
        profileimage : Profile,
        role : "Edit User"

    },  {
        id : 3,
        name : "Neil Sims",
        email : "neil.sims@flowbite.com",
        position : "React Developer",
        status : "Online",
        profileimage : Profile,
        role : "Edit User"

    },  {
        id : 4,
        name : "Neil Sims",
        email : "neil.sims@flowbite.com",
        position : "React Developer",
        status : "Online",
        profileimage : Profile,
        role : "Edit User"

    },  {
        id : 5,
        name : "Neil Sims",
        email : "neil.sims@flowbite.com",
        position : "React Developer",
        status : "Online",
        profileimage : Profile,
        role : "Edit User"

    },  {
        id : 6,
        name : "Neil Sims",
        email : "neil.sims@flowbite.com",
        position : "React Developer",
        status : "Online",
        profileimage : Profile,
        role : "Edit User"

    },
    ]


  return (
    <div className=" relative overflow-x-auto shadow-md sm:rounded-lg p-5 bg-white">
    <div class="flex items-center justify-between flex-column flex-wrap md:flex-row space-y-4 md:space-y-0 pb-4 bg-white ">
    <div>
        <button id="dropdownActionButton" data-dropdown-toggle="dropdownAction" class="font-rubik inline-flex items-center text-gray-500 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-3 py-1.5 " type="button">
            <span class="sr-only">Action button</span>
            Action
            <svg class="w-2.5 h-2.5 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
            </svg>
        </button>
        <div id="dropdownAction" class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 ">
            <ul class="py-1 text-sm text-[#404040] " aria-labelledby="dropdownActionButton">
                <li>
                    <a href="#" class="font-rubik block px-4 py-2 hover:bg-gray-100 ">Reward</a>
                </li>
                <li>
                    <a href="#" class="font-rubik block px-4 py-2 hover:bg-gray-100 ">Promote</a>
                </li>
                <li>
                    <a href="#" class="font-rubik block px-4 py-2 hover:bg-gray-100 ">Activate account</a>
                </li>
            </ul>
            <div class="py-1">
                <a href="#" class="font-rubik block px-4 py-2 text-sm text-[#404040] hover:bg-gray-100 ">Delete User</a>
            </div>
        </div>
    </div>
    <label for="table-search" class="sr-only font-rubik ">Search</label>
    <div class="relative">
        <div class="absolute inset-y-0 rtl:inset-r-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg class="w-4 h-4 text-gray-500 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
            </svg>
        </div>
        <input type="text" id="table-search-users" class="font-rubik block p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500   " placeholder="Search for users"/>
    </div>
</div>
<table class="w-full text-sm text-left rtl:text-right text-gray-500 ">
    <thead class="text-xs text-gray-700 uppercase bg-gray-50  ">
        <tr>
            <th scope="col" class="p-4">
                <div class="flex items-center">
                    <input id="checkbox-all-search" type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 "/>
                    <label for="checkbox-all-search" class="sr-only">checkbox</label>
                </div>
            </th>
            <th scope="col" class="px-6 py-3 font-rubik ">
                Name
            </th>
            <th scope="col" class="px-6 py-3 font-rubik ">
                Position
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
     {
        tabledata.map((data)=>(
            <tr class="bg-white border-b  hover:bg-gray-50 " key={data.id}>
            <td class="w-4 p-4">
                <div class="flex items-center">
                    <input id="checkbox-table-search-1" type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 "/>
                    <label for="checkbox-table-search-1" class="sr-only">checkbox</label>
                </div>
            </td>
            <th scope="row" class="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap ">
                <img class="w-10 h-10 rounded-full" src={Profile} alt="Jese image"/>
                <div class="ps-3">
                    <div class="text-base font-semibold font-rubik">{data.name}</div>
                    <div class="font-normal text-gray-500 font-rubik">{data.email}</div>
                </div>
            </th>
            <td class="px-6 py-4 font-rubik">
                {data.position}
            </td>
            <td class="px-6 py-4">
                <div class="flex items-center">
                    <div class="h-2.5 w-2.5 rounded-full bg-green-500 me-2 font-rubik "></div> {data.status}
                </div>
            </td>
            <td class="px-6 py-4">
                <a href="#" class="font-rubik font-medium text-blue-600  hover:underline">{data.role}</a>
            </td>
        </tr>
        ))
     }
     
    </tbody>
</table>
</div>
  );
};

export default Customerstatustable;
