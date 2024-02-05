import React from 'react'
import Edit from "../../../assets/images/orders/orderformedit.svg";
import Profile from "../../../assets/images/orders/orderprofileimg.svg";
import UnderLine from "../../../assets/images/orders/orderunderline.svg";
import OrderItems from "../../../assets/images/orders/orderitems.svg";
import StarightLine from '../../../assets/images/orders/orderstarightline.svg';
import DashLine from "../../../assets/images/orders/orderdashlines.svg";
import MasterCard from "../../../assets/images/orders/mastercard-logo.svg";
import Paypal from "../../../assets/images/orders/paypal-logo.svg";
import Stripe from "../../../assets/images/orders/stripe_logo.svg";



const Orderdetial = () => {

  return (
    <div className='flex flex-col mt-20 ml-[60px]'>
      <div className='upper'>
      <div className='flex justify-between border border-[#ebebeb] bg-white   py-8 px-10 items-center'>
      <div className='left flex flex-col gap-2 relative'>
          <h2 className='font-rubik font-bold text-[#404040] text-4xl leading-9'>Order #FC67698089043890</h2>
      </div>
      <div className='right flex flex-row gap-4'>
            <button className='flex py-[10px] px-[16px] bg-[#634af9] text-xl font-rubik text-white rounded items-center gap-2'>
            Edit Order 
            </button>
      </div>
    </div>
      </div>
      <div className='p-8'>
      <div className='form px-10 pt-[50px] pb-[50px] flex flex-col w-full border-2 border-[#ebebeb] rounded-md'>
        <div className='grid grid-cols-1 lg:grid-cols-2'>
        <div className='flex flex-row items-center'>
            <h6 className='font-rubik mt-3 font-normal text-[#404040] text-xl leading-7'>January 30, 2024 at 12:33 AM</h6>
            <img src={StarightLine} className=' mx-auto h-8 mt-4' alt="" />
            <h6 className='font-rubik mt-3 font-normal text-[#404040] text-xl leading-7'>0 Items</h6>
            <img src={StarightLine} className=' mx-auto h-8 mt-4' alt="" />
            <h6 className='font-rubik mt-3 font-normal text-[#404040] text-xl leading-7'>Total $0.00</h6>
            <img src={StarightLine} className=' mx-auto h-8 mt-4' alt="" />
            <button className='text-[#04B076] mt-3 text-xl leading-7 font-rubik font-normal rounded-full bg-[#B1FFBC] py-[6px] px-[15px]'>Paid</button>

        </div>
        <div className=''></div>
        </div>
        <div className='dashline mt-8 mb-8'>
            <img src={DashLine} alt="" className='w-full h-full' />
        </div>
        <div className='upperform flex flex-row gap-6 w-full'>
          <div className='left w-3/4'>
            <div class="relative overflow-x-auto border-b border-[#ebebeb]">
                <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead class="text-base font-rubik font-normal leading-5  text-[#404040] uppercase bg-[#ebebeb] ">
                        <tr>
                            <th scope="col" class="px-6 py-4">
                                Product
                            </th>
                            <th scope="col" class="px-6 py-4">
                                Product Price
                            </th>
                            <th scope="col" class="px-6 py-4">
                                Quantity
                            </th>
                            <th scope="col" class="px-6 py-4">
                                Price
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                Apple MacBook Pro 17"
                            </th>
                            <td class="px-6 py-4">
                                Silver
                            </td>
                            <td class="px-6 py-4">
                                Laptop
                            </td>
                            <td class="px-6 py-4">
                                $2999
                            </td>
                        </tr>
                        <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                Microsoft Surface Pro
                            </th>
                            <td class="px-6 py-4">
                                White
                            </td>
                            <td class="px-6 py-4">
                                Laptop PC
                            </td>
                            <td class="px-6 py-4">
                                $1999
                            </td>
                        </tr>
                        <tr class="bg-white dark:bg-gray-800">
                            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                Magic Mouse 2
                            </th>
                            <td class="px-6 py-4">
                                Black
                            </td>
                            <td class="px-6 py-4">
                                Accessories
                            </td>
                            <td class="px-6 py-4">
                                $99
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
          </div>
          <div className='right w-1/4 border border-[#ebebeb] rounded-md px-10 py-8'>
            <ol class="relative text-gray-500 border-s">                  
                <li class="mb-10 ms-6 flex flex-row items-center">            
                    <span class="absolute flex items-center justify-center w-8 h-8 bg-[#634AF9] rounded-full -start-4 ring-4 ring-white dark:ring-gray-900 dark:bg-green-900">
                        <svg class="w-3.5 h-3.5 text-white " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5.917 5.724 10.5 15 1.5"/>
                        </svg>
                    </span>
                    <h3 class="font-medium leading-tight">Order Pending</h3>
                </li>
                <li class="mb-10 ms-6 flex flex-row items-center">
                    <span class="absolute flex items-center justify-center w-8 h-8 bg-[#634AF9] rounded-full -start-4 ring-4 ring-white dark:ring-gray-900 dark:bg-green-900">
                        <svg class="w-3.5 h-3.5 text-white " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5.917 5.724 10.5 15 1.5"/>
                        </svg>
                    </span>
                    <h3 class="font-medium leading-tight">Order Processing</h3>
                </li>
                <li class="mb-10 ms-6 flex flex-row items-center">
                    <span class="absolute flex items-center justify-center w-8 h-8 bg-[#634AF9] rounded-full -start-4 ring-4 ring-white dark:ring-gray-900 dark:bg-green-900">
                        <svg class="w-3.5 h-3.5 text-white " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5.917 5.724 10.5 15 1.5"/>
                        </svg>
                    </span>
                    <h3 class="font-medium leading-tight">Order At Local Facility</h3>
                </li>
                <li class="mb-10 ms-6 flex flex-row items-center">
                    <span class="absolute flex items-center justify-center w-8 h-8 bg-[#634AF9] rounded-full -start-4 ring-4 ring-white dark:ring-gray-900 dark:bg-green-900">
                        <svg class="w-3.5 h-3.5 text-white " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5.917 5.724 10.5 15 1.5"/>
                        </svg>
                    </span>
                    <h3 class="font-medium leading-tight">Order Out For Delivery</h3>
                </li>
                <li class="ms-6 flex flex-row items-center">
                    <span class="absolute flex items-center justify-center w-8 h-8 bg-gray-100 rounded-full -start-4 ring-4 ring-white dark:ring-gray-900 dark:bg-gray-700">
                        <svg class="w-3.5 h-3.5 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 20">
                            <path d="M16 1h-3.278A1.992 1.992 0 0 0 11 0H7a1.993 1.993 0 0 0-1.722 1H2a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2ZM7 2h4v3H7V2Zm5.7 8.289-3.975 3.857a1 1 0 0 1-1.393 0L5.3 12.182a1.002 1.002 0 1 1 1.4-1.436l1.328 1.289 3.28-3.181a1 1 0 1 1 1.392 1.435Z"/>
                        </svg>
                    </span>
                    <h3 class="font-medium leading-tight">Order Completed</h3>
                </li>
            </ol>
          </div>
        </div>
        <div className='flex flex-row gap-6 w-full mt-8'>
            <div className='w-3/4 grid grid-cols-1 lg:grid-cols-2'>
            <div className='left w-full'></div>
            <div className='right w-full flex flex-col justify-end'>
            <div className='flex flex-row justify-between font-rubik font-normal text-[#404040] text-lg leading-7'>
              <p>Subtotal</p>
              <p>$0.00</p>
            </div>
            <div className='flex mt-4 flex-row justify-between font-rubik font-normal text-[#404040] text-lg leading-7'>
              <p>Store Credit</p>
              <p>$0.00</p>
            </div>
            <div className='flex mt-4 flex-row justify-between font-rubik font-normal text-[#404040] text-lg leading-7'>
              <p>Subtotal</p>
              <p>$0.00</p>
            </div>
            <img src={UnderLine} className='w-full mx-auto h-[2px] mt-4' alt="" />
            <div className='flex mt-4 flex-row justify-between font-rubik font-normal text-[#404040] text-lg leading-7'>
              <p className='font-bold'>Total</p>
              <p>$0.00</p>
            </div>
            </div>
            </div>
            <div className='right w-1/4'>
            <h4 className='font-rubik font-bold text-[#404040] text-xl leading-7 mb-4'>Customer Detials</h4>
            <div className='flex gap-4 mt-6 border border-[#ebebeb] p-6 rounded-md'>
             <img src={Profile} alt="" className='w-[50px] h-[50px]' />
              <div className='flex flex-col '>
              <h6 className='font-rubik font-normal text-[#404040] text-lg leading-5'>Mr. Irvin Farrell</h6>
              <p className='font-rubik font-normal text-[#404040] text-sm leading-5'>johnsmith@example.com</p>
              <p className='font-rubik font-normal text-[#404040] text-sm leading-5'>(316) 555-0116</p>
              </div>
            </div>
            </div>
        </div>
        <div className='downform flex flex-row justify-between gap-6 mt-8'>
          <div className='left w-3/4'>
            <h4 className='font-rubik font-bold text-[#404040] text-xl leading-7'>Transactions</h4>
            <div className='mt-6 border border-[#ebebeb] rounded-md flex flex-row items-center flex-wrap justify-between p-6'>
                <div className='cards flex items-center gap-4'>
                    <img src={MasterCard} alt="" className='h-[40px] w-[67.78px]' />
                    <div className='flex flex-col '>
                        <h6 className='text-[#000000] text-lg leading-7 font-rubik font-normal'>Payment</h6>
                        <p className='text-[#404040] text-[14px] leading-7 font-rubik font-normal'>Via MasterCard</p>
                    </div>
                </div>
                <p className='text-[#404040] text-lg font-normal font-rubik leading-7'>$000.00</p>
            </div>
            <div className='mt-6 border border-[#ebebeb] rounded-md flex flex-row items-center flex-wrap justify-between p-6'>
                <div className='cards flex items-center gap-4'>
                    <img src={Paypal} alt="" className='h-[40px] w-[67.78px]' />
                    <div className='flex flex-col '>
                        <h6 className='text-[#000000] text-lg leading-7 font-rubik font-normal'>Payment</h6>
                        <p className='text-[#404040] text-[14px] leading-7 font-rubik font-normal'>Via PayPal</p>
                    </div>
                </div>
                <p className='text-[#404040] text-lg font-normal font-rubik leading-7'>$000.00</p>
            </div>
            <div className='mt-6 border border-[#ebebeb] rounded-md flex flex-row items-center flex-wrap justify-between p-6'>
                <div className='cards flex items-center gap-4'>
                    <img src={Stripe} alt="" className='h-[40px] w-[67.78px]' />
                    <div className='flex flex-col '>
                        <h6 className='text-[#000000] text-lg leading-7 font-rubik font-normal'>Payment</h6>
                        <p className='text-[#404040] text-[14px] leading-7 font-rubik font-normal'>Via Stripe</p>
                    </div>
                </div>
                <p className='text-[#404040] text-lg font-normal font-rubik leading-7'>$000.00</p>
            </div>
          </div>
          <div className='right w-1/4 '>
          <h4 className='font-rubik font-bold text-[#404040] text-xl leading-7'>Shipping Address</h4>
            <div className='flex flex-row justify-between p-6 mt-6 rounded-md border border-[#ebebeb]'>
           <p className='font-rubik font-normal text-[#404040] text-base leading-7'>1111 Armstrong Tunnel Apt.</p>
            </div>
          </div>
        </div>
        <div className='flex flex-row justify-between gap-6 mt-8'>
            <div className='left w-3/4'>
            <h4 className='font-rubik font-bold text-[#404040] text-xl leading-7'>Balance</h4>
            <div className='border border-[#ebebeb] rounded-md p-6 flex flex-col gap-3 mt-6'>
                <div className='flex flex-row flex-wrap justify-between items-center'>
                    <p className='font-rubik font-normal text-[#404040] text-lg leading-7'>Total Order</p>
                    <p className='font-rubik font-normal text-[#404040] text-lg leading-7'>$0.00</p>
                </div>
                <div className='flex flex-row flex-wrap justify-between items-center'>
                    <p className='font-rubik font-normal text-[#404040] text-lg leading-7'>Total Return</p>
                    <p className='font-rubik font-normal text-[#404040] text-lg leading-7'>$0.00</p>
                </div>
                <div className='flex flex-row flex-wrap justify-between items-center'>
                    <p className='font-rubik font-normal text-[#404040] text-lg leading-7'>Paid By Customer</p>
                    <p className='font-rubik font-normal text-[#404040] text-lg leading-7'>$0.00</p>
                </div>
                <div className='flex flex-row flex-wrap justify-between items-center'>
                    <p className='font-rubik font-normal text-[#404040] text-lg leading-7'>Refunded</p>
                    <p className='font-rubik font-normal text-[#404040] text-lg leading-7'>$0.00</p>
                </div>
                <div className='flex flex-row flex-wrap justify-between items-center'>
                    <p className='font-rubik font-normal text-[#404040] text-lg leading-7'>Balance</p>
                    <p className='font-rubik font-normal text-[#404040] text-lg leading-7'>$0.00</p>
                </div>
            </div>
                
            </div>
            <div className='right w-1/4'></div>
        </div>
        </div>
      </div>
    </div>
      
  )
}

export default Orderdetial