import { Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
import "./App.css";
import Login from "./components/login/login";
import Signup from "./components/signup/signup";
import Forgetpassword from "./components/forgetpassword/forgetpassword";
import Navandsidebar from "./pages/dashboard/navandsidebar/navandsidebar";
import Maindashbaord from "./pages/dashboard/maindashboard/maindashbaord";
import Products from "./pages/dashboard/products/products";
import Quote from "./pages/dashboard/quote/quote";
import Client from "./pages/dashboard/clients/clients";
import Productform from "./components/products/productform/productform";
import Clientform from "./components/clients/clientform/clientform";
import Quoteform1 from "./components/quote/quoteform1";
import Invoicelist from "./pages/dashboard/Invoice/invoicelist";
import Invoicedetails from "./components/invoices/invoicedetails/invoicedetails";
import Profile from "./pages/dashboard/profile/profile";
import Settings from "./components/profile/settings/settings";
import Suppliers from "./pages/dashboard/suppliers/suppliers";
import SupplierForm from "./components/suppliers/supplierform/supplierform";
import Reports from "./pages/dashboard/reports/reports";
import Orders from "./pages/dashboard/orders/orders";
import OrderForm from "./components/orders/orderform/orderform";
import Vendor from "./pages/dashboard/vendors/vendors";
import VendorForm from "./components/vendors/vendorform/vendorform";
import CompanyData from "./components/companydata/companydata";
import { useSelector } from "react-redux";
import ScrollToTop from "./components/ScrollForTop/ScrollForTop";
import Inventory from "./pages/dashboard/inventorys/inventory";
import Inventoryform from './components/inventorys/inventoryform';
import Purchaseorder from './pages/dashboard/purchaseorder/purchaseorder';
import Purchaseorderform from './components/purchaseorder/purchaseorderform';

import Errorpage from "./components/errorpage/errorpage";
import Invoiceform from "./components/invoices/createinvoice/invoiceform";

function App() {
  const [currPath, setCurrPath] = useState(window.location.pathname);

  useEffect(() => {
    setCurrPath(window.location.pathname);
  }, []);
  

  const { isLogin, user } = useSelector((state) => state.auth) || {};
  console.log("userLogined :", user);
  return (
    <div className="App">
      <ScrollToTop /> {isLogin && <Navandsidebar />}{" "}
      <Routes>
        <Route path="/" element={<Login />} />{" "}
        <Route path="/signup" element={<Signup />} />{" "}
        <Route path="/forgetpassword" element={<Forgetpassword />} />{" "}
        <Route path="/dashbaord" element={<Maindashbaord />} />{" "}
        <Route path="/products" element={<Products />} />{" "}
        <Route path="/productform" element={<Productform />} />{" "}
        <Route path="/quotes" element={<Quote />} />{" "}
        <Route path="/quoteform" element={<Quoteform1 />} />{" "}
        <Route path="/clients" element={<Client />} />{" "}
        <Route path="/clientform" element={<Clientform />} />{" "}
        <Route path="/createinvoiceform" element={<Invoiceform/>} />{" "}
        <Route path="/invoicelist" element={<Invoicelist />} />{" "}
        <Route path="/invoicedetails" element={<Invoicedetails />} />{" "}
        <Route path="/profile" element={<Profile />} />{" "}
        <Route path="/settings" element={<Settings />} />{" "}
        <Route path="/suppliers" element={<Suppliers />} />{" "}
        <Route path="/supplierform" element={<SupplierForm />} />{" "}
        <Route path="/reports" element={<Reports />} />{" "}
        <Route path="/orders" element={<Orders />} />{" "}
        <Route path="/orderform" element={<OrderForm />} />{" "}
        <Route path="/vendor" element={<Vendor />} />{" "}
        <Route path="/vendorform" element={<VendorForm />} />{" "}
        <Route path="/companydata" element={<CompanyData />} />{" "}
        <Route path="/inventory" element={<Inventory />} />{" "}
        <Route path="*" element={<Errorpage />} />{" "}
        <Route path="/inventory" element={<Inventory/>} />
      <Route path='/inventoryform' element={<Inventoryform/>} />
    <Route path="/purchaseorder" element={<Purchaseorder/>} />
    <Route path="/purchaseform" element={<Purchaseorderform/>} />
      </Routes>{" "}
    </div>
  );
}

export default App;

// import React from "react";
// import ReactToPrint from "react-to-print";
// import Logo from "../src/assets/images/sitelogo.svg"
// import Whattsup from '../src/assets/images/qrcodeforwhattsup.svg';
// import Button from "./components/button/button";
// import Print from "../src/assets/images/printicon.svg"
// import Download from "../src/assets/images/downloadarrow.svg"
// class ComponentToPrint extends React.Component {
//   render() {
//     return (
//       <div className='w-full bg-white px-8 py-10 rounded border border-[#ebebeb]'>
//       <div className='grid grid-cols-1 md:grid-cols-2 justify-between  '>
//           <div className='left'>
//   <div className='logo'>
//       <img src={Logo} alt="" className='w-[222px] h-[49px]'/>

//   </div>
//   <div className='grid grid-cols-1 md:grid-cols-2 justify-between mt-12'>
//   <div className=''>
//       <h4 className='font-lexend font-bold text-[#000000] text-base leading-7'>From</h4>
//       <h6 className='font-lexend font-normal text-[#000000] text-base leading-7 mt-2'>REDQ, INC</h6>
//       <p className='font-inter font-normal text-[#404040] text-base leading-5 mt-2'>
//       <span>Jerome Bell</span><br/>
//       <span>4140 Parker Rd. Allentown,<br/>
//       New Mexico 31134</span><br/>
//       <span>(302) 555-0107</span>
//       </p>
//       <h6 className='font-lexend font-normal text-[#000000] text-base leading-7 mt-2'>Creation Date</h6>
//       <p className='font-inter font-normal text-[#404040] text-base leading-7'>Jan 02, 2024</p>
//   </div>
//   <div className='flex flex-col justify-end md:ml-[200px]'>
//   <h4 className='font-lexend font-bold text-[#000000] text-base leading-7'>Bill To</h4>
//       <h6 className='font-lexend font-normal text-[#000000] text-base leading-7 mt-2'>TRANSPORT LLC</h6>
//       <p className='font-inter font-normal text-[#404040] text-base leading-5 mt-2'>
//       <span>Albert Flores</span><br/>
//       <span>2715 Ash Dr. San Jose,<br/>
//       South Dakota 83475</span><br/>
//       <span>(671) 555-0110</span>
//       </p>
//       <h6 className='font-lexend font-normal text-[#000000] text-base leading-7 mt-2'>Due Date</h6>
//       <p className='font-inter font-normal text-[#404040] text-base leading-7'>Jan 02, 2024</p>

//   </div>
//   </div>
//   </div>
//       <div className='right flex justify-end'>
//           <div className='flex flex-col gap-1'>
//               <button className='font-inter text-base leading-7 font-normal text-[#04B076] bg-[#94FEA3] rounded px-2 w-[50%]'>Paid</button>
//               <h4 className='font-lexend font-bold text-[#000000] text-base leading-7'>INV - #246098</h4>
//               <p className='font-inter font-normal text-[#404040] text-base leading-7'>Invoice Number</p>
//               <img src={Whattsup} alt=""  className='w-[115px] h-[115px]'/>
//           </div>
//       </div>
//       </div>
//       <div className='table w-full mt-16 border-b border-[#ebebeb]'>
//           <div className="relative overflow-x-auto ">
//               <table className="w-full text-sm text-left  rtl:text-right text-[#404040] font-inter">
//                   <thead className="text-xs text-gray-700 uppercase bg-[#ECECEC] ">
//                       <tr>
//                       <th scope="col" className="px-6 py-4">
//                           #
//                           </th>
//                           <th scope="col" className="px-6 py-4">
//                               ITEM
//                           </th>
//                           <th scope="col" className="px-6 py-4">
//                               QUANTITY
//                           </th>
//                           <th scope="col" className="px-6 py-4">
//                               UNIT PRICE
//                           </th>
//                           <th scope="col" className="px-6 py-4">
//                               TOTAL
//                           </th>
//                       </tr>
//                   </thead>
//                   <tbody>
//                       <tr className="bg-white border-b ">
//                       <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
//                               1
//                           </th>
//                           <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
//                               Apple MacBook Pro 17"
//                           </th>
//                           <td className="px-6 py-4">
//                               Silver
//                           </td>
//                           <td className="px-6 py-4">
//                               Laptop
//                           </td>
//                           <td className="px-6 py-4">
//                               $2999
//                           </td>
//                       </tr>
//                       <tr className="bg-white border-b ">
//                       <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
//                               2
//                           </th>
//                           <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
//                               Microsoft Surface Pro
//                           </th>
//                           <td className="px-6 py-4">
//                               White
//                           </td>
//                           <td className="px-6 py-4">
//                               Laptop PC
//                           </td>
//                           <td className="px-6 py-4">
//                               $1999
//                           </td>
//                       </tr>
//                       <tr className="bg-white ">
//                       <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
//                               3
//                           </th>
//                           <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
//                               Magic Mouse 2
//                           </th>
//                           <td className="px-6 py-4">
//                               Black
//                           </td>
//                           <td className="px-6 py-4">
//                               Accessories
//                           </td>
//                           <td className="px-6 py-4">
//                               $99
//                           </td>
//                       </tr>
//                   </tbody>
//               </table>
//           </div>

//       </div>
//       <div className='notes flex flex-row justify-between mt-20'>
//           <div className='left'>
//           <h4 className='font-lexend font-bold text-[#000000] text-base leading-7'>NOTES</h4>
//               <p className='font-inter font-normal text-[#404040] text-base leading-5 mt-2'>We appreciate your business. Should you need us to <br/> add VAT or extra notes let us know!</p>

//           </div>
//           <div className='right flex flex-col gap-4'>
//               <div className='flex flex-row gap-[200px] justify-between border-b'>
//                   <p className='font-inter font-normal text-[#404040] text-base leading-7'>Subtotal:</p>
//                   <p className='font-inter font-normal text-[#404040] text-base leading-7'> $700</p>
//               </div>
//               <div className='flex flex-row gap-[200px] justify-between border-b'>
//                   <p className='font-inter font-normal text-[#404040] text-base leading-7'>Shipping:</p>
//                   <p className='font-inter font-normal text-[#404040] text-base leading-7'> $142</p>
//               </div>
//               <div className='flex flex-row gap-[200px] justify-between border-b'>
//                   <p className='font-inter font-normal text-[#404040] text-base leading-7'>Discount:</p>
//                   <p className='font-inter font-normal text-[#404040] text-base leading-7'> $250</p>
//               </div>
//               <div className='flex flex-row gap-[200px] justify-between border-b'>
//                   <p className='font-inter font-normal text-[#404040] text-base leading-7'>Taxes:</p>
//                   <p className='font-inter font-normal text-[#404040] text-base leading-7'> 15%</p>
//               </div>
//               <div className='flex flex-row gap-[200px] justify-between '>
//                   <p className='font-inter font-bold text-[#404040] text-base leading-7'>Total:</p>
//                   <p className='font-inter font-normal text-[#404040] text-base leading-7'> $659.5</p>
//               </div>
//           </div>
//       </div>
//       </div>
//     );
//   }
// }

// class Example extends React.Component {
//   render() {
//     return (
//       <div >
//         <div className=" flex justify-between border border-[#ebebeb] bg-white   py-8 px-10 items-center">
//         <div className='left flex flex-col gap-2 relative'>
//         <h2 className='font-lexend font-bold text-[#404040] text-3xl leading-9'>Invoice Details</h2>
//     </div>
//     <div className='right flex gap-4'>

//           <button className='flex py-[10px] text-[20px] px-[16px] bg-white text-[#404040] border border-[#c0c0c0] rounded items-center gap-2 font-lexend'>
//           <img src={Print} className='w-6 h-6  ' alt=''/>
//           Print
//           </button>
//           <button className='flex py-[10px] px-[16px] bg-[#634af9] text-white rounded items-center gap-2 text-[20px] font-lexend'>
//           <img src={Download} className='w-6 h-6  ' alt=''/>
//           Download
//           </button>

//     </div>
//         </div>
//         <ReactToPrint
//           trigger={() => <a href="#">Print this out!</a>}
//           content={() => this.componentRef}
//         />
//         <ComponentToPrint ref={el => (this.componentRef = el)} />
//       </div>
//     );
//   }
// }

// export default Example;
