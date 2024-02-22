import React, { useEffect } from "react";
import Edit from "../../../assets/images/orders/orderformedit.svg";
import Import from "../../../assets/images/orders/orderformimporticon.svg";
import Profile from "../../../assets/images/orders/orderprofileimg.svg";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import UnderLine from "../../../assets/images/orders/orderunderline.svg";
import OrderItems from "../../../assets/images/orders/orderitems.svg";
import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import Phonefield from "../../phonefield/phonefield";

const Orderform = () => {
  const initialValues = {
    customerName: "",
    phonenumber: "",
    country: "",
    state: "",
    city: "",
    zipPostcode: "",
    streetAddress: "",
    // orderNote:'',
  };

  const clentformSchema = Yup.object().shape({
    customerName: Yup.string()
      .min(2, "It's too short")
      .max(20, "It's too long")
      .required("Please Enter Your Name"),
    phonenumber: Yup.string()
      .min(9, "Phone Number is too short")
      .required("Phone Number is Required"),
    country: Yup.string()
      .min(2, "It's too short")
      .max(20, "It's too long")
      .required("Please Enter Your Country"),
    state: Yup.string()
      .min(2, "It's too short")
      .max(20, "It's too long")
      .required("Please Enter Your State"),
    city: Yup.string()
      .min(2, "It's too short")
      .max(20, "It's too long")
      .required("Please Enter Your City"),
    zipPostcode: Yup.string()
      .min(2, "It's too short")
      .max(20, "It's too long")
      .required("Please Enter Your Zip/Postcode"),
    streetAddress: Yup.string()
      .min(2, "It's too short")
      .max(20, "It's too long")
      .required("Please Enter Your Street Address"),
    // orderNote: Yup.string().min(2, "It's too short").max(20, "It's too long").required('Please Enter Your Order Note'),
  });

  const onSubmit = (values, props) => {
    console.log("value", values);
    setTimeout(() => {
      props.resetForm();
      props.setSubmitting(false);
    }, 2000);
  };

  useEffect(() => {
    const orderDateInput = document.querySelector("#orderDate");

    if (orderDateInput) {
      flatpickr(orderDateInput, {
        dateFormat: "Y-m-d",
        // Add other options or customization as needed
      });
    }
  }, []);

  return (
    <div className='flex flex-col mt-20 md:ml-[60px]'>
      <div className='upper'>
        <div className='flex justify-between border border-[#ebebeb] bg-white   py-10 px-10 items-center'>
          <div className='left flex flex-col gap-2 relative'>
            <h2 className='font-lexend font-bold text-[#404040] text-2xl leading-9'>
              Order
            </h2>
          </div>
          <div className='right flex flex-row gap-4'>
            <button className='flex py-[10px] px-[16px] bg-[#634af9] text-sm font-lexend text-white rounded items-center gap-2'>
              {/* <img src={Import} className='w-6 h-6  ' alt=''/> */}
              Save
            </button>
            {/* <button className='flex py-[10px] px-[16px] bg-[#634af9] text-xl font-inter text-white rounded items-center gap-2'>
            <img src={Import} className='w-6 h-6  ' alt=''/>
            Import 
            </button> */}
          </div>
        </div>
      </div>
      <div className='p-8'>
        <div className='form px-10 pt-[100px] pb-[50px] flex flex-col w-full border-2 border-[#ebebeb] rounded-md'>
          <h2 className='font-lexend text-lg mt-[-25px] font-semibold leading-tight text-[#404040] mb-8 '>
            Billing Information
          </h2>
          <div className='upperform flex flex-col lg:flex-row  gap-6 w-full'>
            <div className='left lg:w-3/4'>
              <Formik
                initialValues={initialValues}
                validationSchema={clentformSchema}
                onSubmit={onSubmit}
              >
                {(props) => (
                  <Form className='flex flex-col items-center justify-center'>
                    <div className='flex flex-col md:flex-row gap-4 mb-4 w-full'>
                      <div className='w-full'>
                        <label
                          htmlFor='customerName'
                          className='block mb-2 text-sm font-normal text-[#404040] font-inter leading-7'
                        >
                          Customer Name
                        </label>
                        <Field
                          type='text'
                          id='customerName'
                          name='customerName'
                          placeholder='Customer name'
                          className='border border-[#C0C0C0] text-[#c0c0c0] sm:text-sm  rounded-md leading-5 font-normal font-inter  block w-full p-2.5'
                        />
                        <ErrorMessage
                          name='customerName'
                          component='div'
                          className='text-red-500 font-inter text-sm mt-1'
                        />
                      </div>
                      {/* <div className='w-full'>
                        <label
                          htmlFor='phonenumber'
                          className='block mb-2 text-sm font-normal text-[#404040] font-inter leading-7'
                        >
                          Phone Number
                        </label>
                        <Field
                          type='number'
                          id='phonenumber'
                          name='phonenumber'
                          placeholder=' +1 '
                          className='border border-[#C0C0C0] text-[#c0c0c0] sm:text-sm  rounded-md leading-5 font-normal font-inter  block w-full p-2.5'
                        />
                        <ErrorMessage
                          name='phonenumber'
                          component='div'
                          className='text-red-500 text-sm mt-1'
                        />
                      </div> */}
                          <div className='w-full'>
                    <label
                      for='phone'
                      className='block mb-2 text-sm font-normal text-[#404040] font-inter leading-7'
                    >
                      Phone Number
                    </label>
                    {/* <input
                    type="tel"
                    id="phone"
                    placeholder="Phone Number"
                    class="font-inter bg-gray-50 border border-gray-300 text-[#C0C0C0] text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                  /> */}
                    <Phonefield />
                  </div>
                    </div>
                    <div className='flex flex-col  md:flex-row gap-4 mb-4 w-full'>
                      <div className='w-full'>
                        <label
                          htmlFor='country'
                          className='block mb-2 text-sm font-normal text-[#404040] font-inter leading-7'
                        >
                          Country
                        </label>
                        <Field
                          type='text'
                          id='country'
                          name='country'
                          placeholder='Country'
                          className='border-2 border-[#C0C0C0] text-[#c0c0c0] sm:text-sm  rounded-md leading-5 font-normal font-inter  block w-full p-2.5'
                        />
                        <ErrorMessage
                          name='country'
                          component='div'
                          className='text-red-500 font-inter text-sm mt-1'
                        />
                      </div>
                      <div className='w-full'>
                        <label
                          htmlFor='state'
                          className='block mb-2 text-sm font-normal text-[#404040] font-inter leading-7'
                        >
                          State
                        </label>
                        <Field
                          type='text'
                          id='state'
                          name='state'
                          placeholder='State'
                          className='border-2 border-[#C0C0C0] text-[#c0c0c0] sm:text-sm  rounded-md leading-5 font-normal font-inter  block w-full p-2.5'
                        />
                        <ErrorMessage
                          name='state'
                          component='div'
                          className='text-red-500 font-inter text-sm mt-1'
                        />
                      </div>
                    </div>
                    <div className='flex flex-col md:flex-row gap-4 mb-4 w-full'>
                      <div className='w-full'>
                        <label
                          htmlFor='city'
                          className='block mb-2 text-sm font-normal text-[#404040] font-inter leading-7'
                        >
                          City
                        </label>
                        <Field
                          type='text'
                          id='city'
                          name='city'
                          placeholder='City'
                          className='border-2 border-[#C0C0C0] text-[#c0c0c0] sm:text-sm  rounded-md leading-5 font-normal font-inter  block w-full p-2.5'
                        />
                        <ErrorMessage
                          name='city'
                          component='div'
                          className='text-red-500 text-sm mt-1'
                        />
                      </div>
                      <div className='w-full'>
                        <label
                          htmlFor='zipPostcode'
                          className='block mb-2 text-sm font-normal text-[#404040] font-inter leading-7'
                        >
                          Zip / Postcode
                        </label>
                        <Field
                          type='text'
                          id='zipPostcode'
                          name='zipPostcode'
                          placeholder='Zip / Postcode'
                          className='border-2 border-[#C0C0C0] text-[#c0c0c0] sm:text-sm  rounded-md leading-5 font-normal font-inter  block w-full p-2.5'
                        />
                        <ErrorMessage
                          name='zipPostcode'
                          component='div'
                          className='text-red-500 font-inter text-sm mt-1'
                        />
                      </div>
                    </div>
                    <div className='w-full'>
                      <label
                        htmlFor='streetAddress'
                        className='block mb-2 text-sm font-normal text-[#404040] font-inter leading-7'
                      >
                        Street Address
                      </label>
                      <Field
                        type='text'
                        id='streetAddress'
                        name='streetAddress'
                        placeholder='Street Address'
                        className='border-2 border-[#C0C0C0] text-[#c0c0c0] sm:text-sm  rounded-md leading-5 font-normal font-inter  block w-full p-2.5'
                      />
                      <ErrorMessage
                        name='streetAddress'
                        component='div'
                        className='text-red-500 font-inter text-sm mt-1'
                      />
                    </div>
                    <div className='w-full mt-4 mb-2'>
                      <div className='flex items-center gap-4'>
                        <input
                          id='checkbox-table-search-3'
                          type='checkbox'
                          className='w-4 h-4 text-[#634AF9] bg-gray-100 border-gray-300 rounded focus:ring-blue-500  focus:ring-2 '
                        />
                        <label
                          for='checkbox-table-search-3'
                          className=' font-inter font-normal text-[#404040] text-sm leading-7'
                        >
                          Shipping Address is the same as Billing Address
                        </label>
                      </div>
                    </div>
                    <div className='w-full mb-4'>
                      <label
                        htmlFor='ordernote'
                        className='block mb-2 text-sm font-normal text-[#404040] font-inter leading-7'
                      >
                        Order Note (optional)
                      </label>
                      <Field
                        as='textarea'
                        id='ordernote'
                        rows='4'
                        placeholder='Notes about your order, e.g. special notes for delivery.'
                        className='border border-[#C0C0C0] text-[#c0c0c0] sm:text-sm rounded-md leading-5 font-normal font-inter block w-full p-2.5'
                      />
                      <ErrorMessage
                        name='ordernote'
                        component='div'
                        className='text-red-500 font-inter text-sm mt-1'
                      />
                    </div>
                  </Form>
                )}
              </Formik>
            </div>
            
            <div className='right lg:w-1/4 border border-[#ebebeb] rounded-md p-4'>
              <div className='flex flex-row justify-between'>
                <h4 className='font-lexend font-bold text-[#404040] text-lg leading-7'>
                  Customer Info
                </h4>
                <img src={Edit} alt='' className='h-6 w-6' />
              </div>
              <div className='flex flex-col md:flex-row gap-4 mt-6'>
                <img src={Profile} alt='' className='w-[50px] h-[50px]' />
                <div className='flex flex-col'>
                  <h6 className='font-lexend font-semibold text-[#404040] text-base leading-5'>
                    Mr. Irvin Farrell
                  </h6>
                  <p className='font-inter font-normal text-[#404040] text-sm leading-5'>
                    johnsmith@example.com
                  </p>
                  <p className='font-inter font-normal text-[#404040] text-sm leading-5'>
                    (316) 555-0116
                  </p>
                </div>
              </div>
              <img
                src={UnderLine}
                className='w-full mx-auto h-[2px] mt-4'
                alt=''
              />
              <div className='flex flex-row justify-between mt-4'>
                <h4 className='font-lexend font-bold text-[#404040] text-base leading-7'>
                  Order Detials
                </h4>
                <img src={Edit} alt='' className='h-6 w-6' />
              </div>
              <div className='flex flex-col gap-2 mt-2'>
                <h6 className='font-lexend font-normal text-[#404040] text-xs leading-5'>
                  Order ID
                </h6>
                <h6 className='font-lexend font-normal text-[#404040] text-xs leading-5'>
                  COMP1502
                </h6>
              </div>
              <img
                src={UnderLine}
                className='w-full mx-auto h-[2px] mt-4'
                alt=''
              />
              <div className='w-full mt-4 flex  flex-col gap-2'>
                <label
                  htmlFor='selectOption'
                  className='font-inter font-normal text-[#404040] text-sm leading-5 '
                >
                  Payment Method
                </label>
                <select
                  as='select'
                  id='selectOption'
                  name='selectedOption'
                  className='border border-[#ebebeb] text-[#c0c0c0] sm:text-sm rounded-md leading-5 font-normal font-inter block w-full p-2.5'
                >
                  <option className="font-inter font-normal text-[#404040] text-sm leading-5" value='' disabled>
                    Select an option...
                  </option>
                  <option className="font-inter font-normal text-[#404040] text-sm leading-5" value='option1'>Option 1</option>
                  <option className="font-inter font-normal text-[#404040] text-sm leading-5" value='option2'>Option 2</option>
                  <option className="font-inter font-normal text-[#404040] text-sm leading-5" value='option3'>Option 3</option>
                </select>
              </div>
              <div className='w-full mt-4 flex flex-col gap-2'>
                <label
                  htmlFor='selectOption'
                  className='font-inter font-normal text-[#404040] text-sm leading-5  '
                >
                  Shipping Method
                </label>
                <select
                  as='select'
                  id='selectOption'
                  name='selectedOption'
                  className=' border border-[#ebebeb] text-[#c0c0c0] sm:text-sm rounded-md leading-5 font-normal font-inter block w-full p-2.5'
                >
                  <option className="font-inter font-normal text-[#404040] text-sm leading-5" value='' disabled>
                    Select an option...
                  </option>
                  <option className="font-inter font-normal text-[#404040] text-sm leading-5" value='option1'>Option 1</option>
                  <option className="font-inter font-normal text-[#404040] text-sm leading-5" value='option2'>Option 2</option>
                  <option className="font-inter font-normal text-[#404040] text-sm leading-5" value='option3'>Option 3</option>
                </select>
              </div>
              <div className='w-full mt-4 flex flex-col gap-2'>
                <label
                  htmlFor='orderDate'
                  className='font-inter font-normal text-[#404040] text-sm leading-5 '
                >
                  Order date
                </label>
                <div class='relative max-w-sm'>
                  <div class='absolute text-sm inset-y-0 start-0 flex items-center ps-3 pointer-events-none'>
                    <svg
                      class='w-4 h-4 text-[#404040] '
                      aria-hidden='true'
                      xmlns='http://www.w3.org/2000/svg'
                      fill='currentColor'
                      viewBox='0 0 20 20'
                    >
                      <path d='M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z' />
                    </svg>
                  </div>
                  <input
                    datepicker
                    datepicker-autohide
                    type='text'
                    id='orderDate'
                    class=' font-inter border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5'
                    placeholder='Select date'
                  />
                </div>
              </div>
            </div>
          </div>
          <div className='downform flex flex-row justify-between mt-8'>
            <div className='left w-3/4'></div>
            <div className='right lg:w-1/4 '>
              <h4 className='font-lexend font-bold text-[#404040] text-base leading-7 mb-4'>
                Your Order
              </h4>
              <div className='border border-[#ebebeb] rounded-md p-4 flex flex-col'>
                <div className='flex flex-row justify-between'>
                  <h4 className='font-lexend font-normal text-[#404040] text-sm leading-7'>
                    Ordered items
                  </h4>
                  <a className='font-lexend  font-normal text-[#2591FA] text-sm leading-7'>
                    Edit Cart
                  </a>
                </div>
                <img
                  src={UnderLine}
                  className='w-full mx-auto h-[2px] mt-4'
                  alt=''
                />
                <div className='mt-6 mb-6 mx-auto'>
                  <img src={OrderItems} alt='' className='w-[87px] h-[68px]' />
                </div>
                <div className='flex flex-row justify-between font-inter font-normal text-[#404040] text-sm leading-7'>
                  <p>Subtotal</p>
                  <p>$0.00</p>
                </div>
                <div className='flex mt-4 flex-row justify-between font-inter font-normal text-[#404040] text-sm leading-7'>
                  <p>Tax</p>
                  <p>$0.00</p>
                </div>
                <div className='flex mt-4 flex-row justify-between font-inter font-normal text-[#404040] text-sm leading-7'>
                  <p>Shipping</p>
                  <p>$0.00</p>
                </div>
                <img
                  src={UnderLine}
                  className='w-full mx-auto h-[2px] mt-4'
                  alt=''
                />
                <div className='flex mt-4 flex-row justify-between font-inter font-semibold text-[#404040] text-sm leading-7'>
                  <p className='font-bold'>Total</p>
                  <p>$0.00</p>
                </div>
                <div className='mt-6 mx-auto'>
                  <button className='bg-[#634AF9] rounded-md px-5 py-3 text-white font-inter font-normal text-sm leading-7 '>
                    Back to Store
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Orderform;
