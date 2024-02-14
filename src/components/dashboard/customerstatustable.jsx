import React,{useState} from "react";
import Profile from '../../assets/images/dashboard/john.svg'
import Next from "../../assets/images/nextbuttonfortable.svg";
import Prev from "../../assets/images/prevbuttonfortable.svg";
import Edit from "../../assets/images/edittablebutton.svg";
import Delete from "../../assets/images/deletetablebutton.svg";

const Customerstatustable = () => {
  

    const tabledata = [
        {
        id : 1,
        OrderNum : "#0001",
        name : "Neil Sims",
        email : "neil.sims@flowbite.com",
        itemsnum : "001",
        price : "$111.00",
        CreateDate : "Jan 01, 2024",
        CreateTime : "1:11 PM",
        ModifiedDate : "Jan 08, 2024",
        ModifiedTime : "8:11 PM",
        status : "Online",
        profileimage : Profile,
        role : "Edit User"

    },  {
        id : 2,
        OrderNum : "#0001",
        name : "Neil Sims",
        email : "neil.sims@flowbite.com",
        itemsnum : "001",
        price : "$111.00",
        CreateDate : "Jan 01, 2024",
        CreateTime : "1:11 PM",
        ModifiedDate : "Jan 08, 2024",
        ModifiedTime : "8:11 PM",
        status : "Online",
        profileimage : Profile,
        role : "Edit User"

    },  {
        id : 3,
        OrderNum : "#0001",
        name : "Neil Sims",
        email : "neil.sims@flowbite.com",
        itemsnum : "001",
        CreateDate : "Jan 01, 2024",
        CreateTime : "1:11 PM",
        ModifiedDate : "Jan 08, 2024",
        ModifiedTime : "8:11 PM",
        price : "$111.00",
        status : "Online",
        profileimage : Profile,
        role : "Edit User"

    },  {
        id : 4,
        OrderNum : "#0001",
        name : "Neil Sims",
        email : "neil.sims@flowbite.com",
        itemsnum : "001",
        price : "$111.00",
        CreateDate : "Jan 01, 2024",
        CreateTime : "1:11 PM",
        ModifiedDate : "Jan 08, 2024",
        ModifiedTime : "8:11 PM",
        status : "Online",
        profileimage : Profile,
        role : "Edit User"

    },  {
        id : 5,
        OrderNum : "#0001",
        name : "Neil Sims",
        email : "neil.sims@flowbite.com",
        itemsnum : "001",
        price : "$111.00",
        CreateDate : "Jan 01, 2024",
        CreateTime : "1:11 PM",
        ModifiedDate : "Jan 08, 2024",
        ModifiedTime : "8:11 PM",
        status : "Online",
        profileimage : Profile,
        role : "Edit User"

    },  {
        id : 6,
        OrderNum : "#0001",
        name : "Neil Sims",
        email : "neil.sims@flowbite.com",
        itemsnum : "001",
        price : "$111.00",
        CreateDate : "Jan 01, 2024",
        CreateTime : "1:11 PM",
        ModifiedDate : "Jan 01, 2024",
        ModifiedTime : "1:11 PM",
        status : "Online",
        profileimage : Profile,
        role : "Edit User"

    },
    ]
    const itemsPerPage = 8;
    const [currentPage, setCurrentPage] = useState(1);
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentData = tabledata.slice(indexOfFirstItem, indexOfLastItem);
    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber);
      };


  return (
    <div className=" relative overflow-x-auto border border-[#ebebeb] sm:rounded-lg p-5 bg-white">
    <div class="flex items-center justify-between flex-column flex-wrap md:flex-row space-y-4 md:space-y-0 pb-4 bg-white ">
    <div>
        {/* <button id="dropdownActionButton" data-dropdown-toggle="dropdownAction" class="font-inter inline-flex items-center text-gray-500 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-3 py-1.5 " type="button">
            <span class="sr-only">Action button</span>
            Action
            <svg class="w-2.5 h-2.5 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
            </svg>
        </button> */}
        <h3 className="font-lexend text-[#404040] font-bold">Recent Order</h3>
        <div id="dropdownAction" class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 ">
            <ul class="py-1 text-sm text-[#404040] " aria-labelledby="dropdownActionButton">
                <li>
                    <a href="#" class="font-inter block px-4 py-2 hover:bg-gray-100 ">Reward</a>
                </li>
                <li>
                    <a href="#" class="font-inter block px-4 py-2 hover:bg-gray-100 ">Promote</a>
                </li>
                <li>
                    <a href="#" class="font-inter block px-4 py-2 hover:bg-gray-100 ">Activate account</a>
                </li>
            </ul>
            <div class="py-1">
                <a href="#" class="font-inter block px-4 py-2 text-sm text-[#404040] hover:bg-gray-100 ">Delete User</a>
            </div>
        </div>
    </div>
    <label for="table-search" class="sr-only font-inter ">Search</label>
    <div class="relative">
        <div class="absolute inset-y-0 rtl:inset-r-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg class="w-4 h-4 text-gray-500 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
            </svg>
        </div>
        <input type="text" id="table-search-users" class="font-inter block p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500   " placeholder="Search for users"/>
    </div>
</div>
<table class="w-full text-sm text-left rtl:text-right text-[#404040] ">
    <thead class="text-xs text-[#404040]  uppercase bg-gray-50  ">
        <tr>
            <th scope="col" class="p-4">
                <div class="flex items-center">
                    <input id="checkbox-all-search" type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 "/>
                    <label for="checkbox-all-search" class="sr-only">checkbox</label>
                </div>
            </th>
            <th scope="col" class="px-6 py-3 font-inter ">
            ORDER ID
            </th>
            <th scope="col" class="px-6 py-3 font-inter ">
            CUSTOMER
            </th>
            <th scope="col" class="px-6 py-3 font-inter ">
            ITEMS
            </th>
            <th scope="col" class="px-6 py-3 font-inter ">
            PRICE
            </th>
            <th scope="col" class="px-6 py-3 font-inter ">
            CREATED
            </th>
            <th scope="col" class="px-6 py-3 font-inter ">
            MODIFIED
            </th>
            <th scope="col" class="px-6 py-3 font-inter ">
            STATUS
            </th>
            <th scope="col" class="px-6 py-3 font-inter ">
            ACTION
            </th>
        </tr>
    </thead>
    <tbody>
     {
        currentData.map((data)=>(
            <tr class="bg-white border-b  text-[#404040] hover:bg-gray-50 " key={data.id}>
            <td class="w-4 p-4">
                <div class="flex items-center">
                    <input id="checkbox-table-search-1" type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 "/>
                    <label for="checkbox-table-search-1" class="sr-only">checkbox</label>
                </div>
            </td>
            <th className="px-6 py-4 text-[#404040]"><div class="text-base font-normal  font-inter">{data.OrderNum}</div></th>
            <th scope="row" class="flex items-center px-6 py-4 text-[#404040] whitespace-nowrap ">
                <img class="w-10 h-10 rounded-full" src={Profile} alt="Jese image"/>
                
                <div class="ps-3">
                

                    <div class="text-base font-semibold font-inter">{data.name}</div>
                    <div class="font-normal text-[#404040] font-inter">{data.email}</div>
                </div>
            </th>
            <th className="px-6 py-4 text-[#404040]"><div class="text-base font-normal  font-inter">{data.itemsnum}</div></th>
            <th className="px-6 py-4 text-[#404040]"><div class="text-base font-normal  font-inter">{data.price}</div></th>
            <th scope="row" class="flex items-center px-6 py-4 text-[#404040] whitespace-nowrap ">
               
                
                <div class="ps-3">
                

                    <div class="text-base font-semibold font-inter">{data.CreateDate}</div>
                    <div class="font-normal text-[#404040] font-inter">{data.CreateTime}</div>
                </div>
            </th>
 

            <td class="px-6 py-4 font-inter">
            <div class="text-base font-semibold font-inter">{data.CreateDate}</div>
                    <div class="font-normal text-[#404040] font-inter">{data.CreateTime}</div>
            </td>
            <td class="px-6 py-4 ">
                <div class="flex items-center bg-[#B1FFBC] font-inter rounded-full px-4 py-2 border  p-5">
                    <div class="h-2.5 w-2.5 rounded-full bg-green-500 me-2 font-inter "></div> {data.status}
                </div>
            </td>
            {/* <td class="px-6 py-4">
                <a href="#" class="font-inter font-medium text-blue-600  hover:underline">{data.role}</a>
            </td> */}
            <td className="px-6 py-4 flex gap-4">
                        <a href="#" className="font-medium text-blue-600  hover:underline"><img src={Edit} alt=""  classNameName='w-6 h-6'/></a>
                        <a href="#" className="font-medium text-blue-600  hover:underline"><img src={Delete} alt="" classNameName='w-6 h-6' /></a>
                  </td>
        </tr>
        ))
     }
     
    </tbody>
</table>
<nav className="flex items-center justify-between pt-4 px-4 pb-4" aria-label="Table navigation">
        {/* Show pagination */}
        <span className="text-sm font-normal text-[#404040] mb-4 md:mb-0 block w-full md:inline md:w-auto font-inter">
          Showing{" "}
          <span className="font-semibold text-[#404040]  font-inter">
            {indexOfFirstItem + 1}-{Math.min(indexOfLastItem, tabledata.length)}
          </span>{" "}
          of{" "}
          <span className="font-semibold text-[#404040]  font-inter">{tabledata.length}</span>
        </span>
        <ul className="inline-flex -space-x-px rtl:space-x-reverse text-sm h-8 font-inter">
          <li>
            <button
              onClick={() => paginate(currentPage - 1)}
              disabled={currentPage === 1}
              className="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-[#404040]  font-inter"
            >
              <img src={Prev} alt="" />
            </button>
          </li>
          {Array.from({ length: Math.ceil(tabledata.length / itemsPerPage) }, (_, index) => (
            <li key={index}>
              <button
                onClick={() => paginate(index + 1)}
                className={`font-inter flex items-center justify-center px-3 h-8 leading-tight text-[#404040] bg-white border border-[#404040]${
                  currentPage === index + 1 ? "text-blue-600 bg-blue-50" : "hover:bg-gray-100 hover:text-gray-700"
                } `}
              >
                {index + 1}
              </button>
            </li>
          ))}
          <li>
            <button
              onClick={() => paginate(currentPage + 1)}
              disabled={currentPage === Math.ceil(tabledata.length / itemsPerPage)}
              className=" flex items-center justify-center px-3 h-8 leading-tight text-[#404040] bg-white border border-[#404040] rounded-e-lg hover:[#404040] hover:text-[#404040]  font-inter"
            >
              <img src={Next} alt="" />
            </button>
          </li>
        </ul>
      </nav>
</div>
  );
};

export default Customerstatustable;
