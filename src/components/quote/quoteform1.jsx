import React, { useState } from "react";
import Edit from "../../assets/images/quote/quoteeditbutton.svg";
import Save from "../../assets/images/quote/quotesavebutton.svg";
import Plus from "../../assets/images/dashboard/plusgoodmorning.svg";
import Green from "../../assets/images/quote/quoteplusgreen.svg";
import Delete from "../../assets/images/quote/quotedeleteiconforform.svg";
import SideIcon from "../../assets/images/quote/quotesideiconbuttonfor.svg";
// import Quotesidebar from './quotesidebar';
import Line from "../../assets/images/quote/sidebarlines.svg";
import SubTotal from "../../assets/images/quote/sidebarsubtotal.svg";
import Commision from "../../assets/images/quote/sidebarcommision.svg";
import Discount from "../../assets/images/quote/sidebardiscount.svg";
import Total from "../../assets/images/quote/sidebartotal.svg";
import { IoClose } from "react-icons/io5";
import * as Yup from "yup";
import { Formik, Field, Form, ErrorMessage } from "formik";

const Quoteform1 = () => {
  const [isSideComponentVisible, setIsSideComponentVisible] = useState(false);

  const toggleSideComponent = () => {
    setIsSideComponentVisible((prevIsVisible) => !prevIsVisible);
  };

  const handleMouseLeave = () => {
    setIsSideComponentVisible(false);
  };

  const initialValues = {
    quoteNumber: "",
    quoteDate: "",
    notificationDate: "",
    expirationDate: "",
    client: "",
    item: "",
    quantity: "",
    price: "",
    commission: "",
    rate: "",
    discount: "",
  };

  const quoteSchema = Yup.object().shape({
    quoteNumber: Yup.string()
      .min(1, "It's too short")
      .max(20, "It's too long")
      .required("Please Enter Quote Number"),
    quoteDate: Yup.string().required("Quote Date is Required"),
    notificationDate: Yup.string().required("Unit Price is Required"),
    expirationDate: Yup.string().required("Notification Date is Required"),
    client: Yup.string()
      .min(1, "It's too short")
      .max(20, "It's too long")
      .required("Please Enter Client"),
    item: Yup.string()
      .min(1, "It's too short")
      .max(20, "It's too long")
      .required("Please Enter Item"),
    quantity: Yup.string()
      .min(1, "It's too short")
      .max(20, "It's too long")
      .required("Please Enter Quantity"),
    price: Yup.string()
      .min(1, "It's too short")
      .max(20, "It's too long")
      .required("Please Enter Price"),
    commission: Yup.string()
      .min(1, "It's too short")
      .max(20, "It's too long")
      .required("Please Enter Commission"),
    rate: Yup.string()
      .min(1, "It's too short")
      .max(20, "It's too long")
      .required("Please Enter Rate"),
    discount: Yup.string()
      .min(1, "It's too short")
      .max(20, "It's too long")
      .required("Please Enter Discount"),
  });

  const onSubmit = (values, { resetForm, setSubmitting }) => {
    console.log("value", values);

    setTimeout(() => {
      resetForm();
      setSubmitting(false);
    }, 2000);
  };

  // ... (previous code)
  const HistoryTable = () => {
    return (
      <div>
        <div class='relative overflow-x-auto'>
          <table class='w-full text-sm text-left rtl:text-right text-#404040]'>
            <thead class='text-sm font-bold font-inter leading-7 text-gray-700 uppercase bg-[#F4F4F4] '>
              <tr>
                <th scope='col' class='px-6 py-3'>
                  User
                </th>
                <th scope='col' class='px-6 py-3'>
                  Type
                </th>
                <th scope='col' class='px-6 py-3'>
                  Date
                </th>
              </tr>
            </thead>
            <tbody>
              <tr class='bg-white border-b border-[#EBEBEB] font-inter font-normal text-[#404040] leading-7'>
                <th scope='row' class='px-6 py-4 '>
                  Jamal Saied
                </th>
                <td class='px-6 py-4  uppercase '>INSERT</td>
                <td class='px-6 py-4'>2024-01-01</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  };

  // Tabs code
  const Tabs = ({ data }) => {
    const [activeTab, setActiveTab] = useState(0);
    const [isFormVisible, setIsFormVisible] = useState(false); // Start with form hidden

    const handleTabClick = (index, event) => {
      event.preventDefault(); // Prevent the default action

      if (activeTab === index) {
        // Toggle form visibility if clicking on the active tab
        setIsFormVisible((prevIsFormVisible) => !prevIsFormVisible);
      } else {
        // Set the clicked tab as active and show the form
        setActiveTab(index);
        setIsFormVisible(true);
      }
    };

    return (
      <div>
        <div className='flex'>
          {data.map((tab, index) => (
            <button
              key={index}
              onClick={(event) => handleTabClick(index, event)}
              className={`${
                activeTab === index
                  ? "border-b-2 border-blue-500"
                  : "border-b border-gray-200"
              } py-2 px-4 mx-2`}
            >
              {tab.title}
            </button>
          ))}
        </div>

        <div className='mt-4'>
          {data.map((tab, index) => (
            <div
              key={index}
              className={`${
                activeTab === index ? "block" : "hidden"
              } p-4 border border-[#EBEBEB] rounded`}
            >
              {/* Check if form should be visible */}
              {index === 0 && isFormVisible && <FormComponent />}
              {/* Rest of your content */}
              {/* Show history table for the "History" tab */}
              {index === 1 && <HistoryTable />}
            </div>
          ))}
        </div>
      </div>
    );
  };

  // form for click to detial tabs for
  const FormComponent = () => {
    // Your form logic goes here
    // const handleSubmit = (e) => {
    //   e.preventDefault();
    //   // Handle form submission logic
    // };

    return (
      <Form className='grid grid-cols-1 '>
        <div className='flex flex-row flex-wrap justify-between'>
          <div className='left rounded-full border border-[#04B076] px-4 py-2 text-[#04B076] font-normal font-inter '>
            <span className='rounded-r-lg border h-4 w-4 px-2 mr-2 border-[#04B076]'></span>
            <span className='font-bold text-sm leading-5'># 1</span>
          </div>
          <div className='right mt-6 md:mt-0'>
            <button className='text-[#04b076] font-inter rounded-full px-4 py-2 font-bold text-xl leading-7 border border-[#04B076] bg-[#B9F9CF]'>
              Total $ 0.00
            </button>
          </div>
        </div>
        <div className='form'>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-4 mt-6'>
            <div className='w-full '>
              <label
                htmlFor='item'
                className='block mb-2 text-base font-normal text-[#404040] font-inter leading-7'
              >
                Item
              </label>
              <Field
                type='text'
                name='item'
                id='small-input'
                placeholder='item'
                className='border border-[#EBEBEB] text-[#c0c0c0] sm:text-sm  rounded-md leading-5 font-normal font-inter  block w-full p-2.5'
              />
              <ErrorMessage
                name='item'
                component='div'
                className='text-red-500 text-sm mt-1'
              />
            </div>
            <div className='w-full '>
              <label
                htmlFor='quantity'
                className='block mb-2 text-base font-normal text-[#404040] font-inter leading-7'
              >
                Quantity
              </label>
              <Field
                type='count'
                name='quantity'
                id='small-input'
                placeholder='0'
                className='border border-[#EBEBEB] text-[#c0c0c0] sm:text-sm  rounded-md leading-5 font-normal font-inter  block w-full p-2.5'
              />
              <ErrorMessage
                name='quantity'
                component='div'
                className='text-red-500 text-sm mt-1'
              />
            </div>
            <div className='w-full '>
              <label
                htmlFor='price'
                className='block mb-2 text-base font-normal text-[#404040] font-inter leading-7'
              >
                Price
              </label>
              <Field
                type='number'
                name='price'
                id='small-input'
                placeholder='$ 0.00'
                className='border border-[#EBEBEB] text-[#c0c0c0] sm:text-sm  rounded-md leading-5 font-normal font-inter  block w-full p-2.5'
              />
              <ErrorMessage
                name='price'
                component='div'
                className='text-red-500 text-sm mt-1'
              />
            </div>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-4 mt-6'>
            <div className='w-full '>
              <label
                htmlFor='commission'
                className='block mb-2 text-base font-normal text-[#404040] font-inter leading-7'
              >
                Commission
              </label>
              <Field
                type='number'
                name='commission'
                id='small-input'
                placeholder='$ 0.00'
                className='border border-[#EBEBEB] text-[#c0c0c0] sm:text-sm  rounded-md leading-5 font-normal font-inter  block w-full p-2.5'
              />
              <ErrorMessage
                name='commission'
                component='div'
                className='text-red-500 text-sm mt-1'
              />
            </div>
            <div className='w-full '>
              <label
                htmlFor='rate'
                className='block mb-2 text-base font-normal text-[#404040] font-inter leading-7'
              >
                Rate
              </label>
              <Field
                type='number'
                name='rate'
                id='small-input'
                placeholder='% 0.00'
                className='border border-[#EBEBEB] text-[#c0c0c0] sm:text-sm  rounded-md leading-5 font-normal font-inter  block w-full p-2.5'
              />
              <ErrorMessage
                name='rate'
                component='div'
                className='text-red-500 text-sm mt-1'
              />
            </div>
            <div className='w-full '>
              <label
                htmlFor='discount'
                className='block mb-2 text-base font-normal text-[#404040] font-inter leading-7'
              >
                Discount
              </label>
              <Field
                type='number'
                name='discount'
                id='small-input'
                placeholder='$ 0.00'
                className='border border-[#EBEBEB] text-[#c0c0c0] sm:text-sm  rounded-md leading-5 font-normal font-inter  block w-full p-2.5'
              />
              <ErrorMessage
                name='discount'
                component='div'
                className='text-red-500 text-sm mt-1'
              />
            </div>
          </div>
          <div className='flex flex-row flex-wrap justify-between mt-6'>
            <div className=' w-[32.5%]'></div>
            <div className=' '>
              <button className='flex py-[10px] px-[16px]  text-[#FF3D00] text-base rounded items-center gap-2'>
                <img src={Delete} className='w-6 h-6  ' alt='' />
                Remove
              </button>
            </div>
          </div>
        </div>
      </Form>
    );
  };

  //sidebar code for quote
  const Quotesidebar = ({ onClose }) => {
    return (
      // side bar start
      <div className='sidebar border border-[#ebebeb] rounded'>
        <div className='quotesidebar flex flex-col gap-4 px-6 pt-[150px] pb-[600px]    bg-white'>
          <h2 className='font-lexend font-bold text-[#634AF9] text-2xl leading-9'>
            Quote Summary
          </h2>
          <div className='flex gap-2'>
            <img src={Line} alt='' className='w-6 h-6' />
            <p className='text-[#404040] text-xl font-inter font-normal leading-7'>
              Lines: <span className='text-[#C0C0C0] text-lg'> 00</span>
            </p>
          </div>
          <div className='flex gap-2'>
            <img src={SubTotal} alt='' className='w-6 h-6' />
            <p className='text-[#404040] text-xl font-inter font-normal leading-7'>
              SubTotal: <span className='text-[#C0C0C0] text-lg'> 0.00</span>
            </p>
          </div>
          <div className='flex gap-2'>
            <img src={Commision} alt='' className='w-6 h-6' />
            <p className='text-[#404040] text-xl font-inter font-normal leading-7'>
              Commision: <span className='text-[#C0C0C0] text-lg'> 0.00</span>
            </p>
          </div>
          <div className='flex gap-2'>
            <img src={Discount} alt='' className='w-6 h-6' />
            <p className='text-[#404040] text-xl font-inter font-normal leading-7'>
              Discount %: <span className='text-[#C0C0C0] text-lg'> 0.00</span>
            </p>
          </div>
          <div className='flex gap-2 '>
            <img src={Total} alt='' className='w-6 h-6' />
            <p className='text-[#404040]  text-xl font-inter font-normal leading-7'>
              Total $: <span className='text-[#C0C0C0] text-lg'> 0.00</span>
            </p>
          </div>
          <button onClick={onClose} className='close-btn absolute top-[90px] '>
            <IoClose className='w-10 h-10 text-[#634AF9]' />
          </button>
        </div>
      </div>
      // side end start
    );
  };

  const tabData = [
    { title: "Detail", content: "" },
    { title: "History", content: "" },
  ];

  return (
    <div className='bg-white pl-4 py-4 pb-[0px] flex  flex-row  '>
      <div
        className={`form flex flex-col bg-white py-8 px-10 border border-[#ebebeb] mt-[90px] md:ml-[60px] rounded w-[78%]`}
      >
        <Formik
          initialValues={initialValues}
          validationSchema={quoteSchema}
          onSubmit={onSubmit}
        >
          {(props) => (
            <Form className=''>
              <div className='flex flex-col md:flex-row justify-between  bg-white   items-center'>
                <div className='left flex flex-col gap-2 relative'>
                  <h2 className='font-lexend font-bold text-[#404040] text-xl leading-9'>
                    Quote Information
                  </h2>
                </div>
                <div className='right flex flex-row gap-4 items-center justify-center mt-6'>
                  {/* <button className='flex py-[10px] px-[16px] bg-white text-[#404040] rounded border border-[#c0c0c0] items-center gap-2'>
                    <img src={Edit} className='w-6 h-6  ' alt=''/>
                    Edit
                    </button> */}
                  <button
                    disabled={props.isSubmitting}
                    type='submit'
                    name='submit'
                    value='submit'
                    className='flex py-[10px] px-[16px] bg-[#634af9] text-white rounded items-center gap-2'
                  >
                    <img src={Save} className='w-6 h-6  ' alt='' />
                    Save
                  </button>
                </div>
              </div>
              <div className=''>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12'>
                  <div className='w-full'>
                    <label
                      htmlFor='quoteNumber'
                      className='block mb-2 text-base font-normal text-[#404040] font-inter leading-7'
                    >
                      Quote Number
                    </label>
                    <Field
                      type='number'
                      name='quoteNumber'
                      id='small-input'
                      placeholder='Q - 59'
                      className='border border-[#EBEBEB] text-[#c0c0c0] sm:text-sm  rounded-md leading-5 font-normal font-inter  block w-full p-2.5'
                    />
                    <ErrorMessage
                      name='quoteNumber'
                      component='div'
                      className='text-red-500 text-sm mt-1'
                    />
                  </div>
                  <div class='relative max-w-sm'>
                    <label
                      htmlFor='quoteDate'
                      className='block mb-2 text-base font-normal text-[#404040] font-inter leading-7'
                    >
                      Quote Date
                    </label>
                    <Field
                      datepicker
                      datepicker-autohide
                      type='date'
                      name='quoteDate'
                      class='bg-white border border-[#ebebeb] text-[#c0c0c0] text-sm rounded-lg block w-full ps-10 p-2.5 '
                      placeholder='Select date'
                    />
                    <ErrorMessage
                      name='quoteDate'
                      component='div'
                      className='text-red-500 text-sm mt-1'
                    />
                  </div>
                  <div class='relative max-w-sm'>
                    <label
                      htmlFor='notificationDate'
                      className='block mb-2 text-base font-normal text-[#404040] font-inter leading-7'
                    >
                      Notification Date
                    </label>
                    <Field
                      datepicker
                      datepicker-autohide
                      type='date'
                      name='notificationDate'
                      class='bg-white border border-[#ebebeb] text-[#c0c0c0] text-sm rounded-lg block w-full ps-10 p-2.5 '
                      placeholder='Select date'
                    />
                    <ErrorMessage
                      name='notificationDate'
                      component='div'
                      className='text-red-500 text-sm mt-1'
                    />
                  </div>
                  <div class='relative max-w-sm'>
                    <label
                      htmlFor='expirationDate'
                      className='block mb-2 text-base font-normal text-[#404040] font-inter leading-7'
                    >
                      Expiration Date
                    </label>
                    <Field
                      datepicker
                      datepicker-autohide
                      type='date'
                      name='expirationDate'
                      class='bg-white border border-[#ebebeb] text-[#c0c0c0] text-sm rounded-lg block w-full ps-10 p-2.5 '
                      placeholder='Select date'
                    />
                    <ErrorMessage
                      name='expirationDate'
                      component='div'
                      className='text-red-500 text-sm mt-1'
                    />
                  </div>
                </div>
                <div className='w-full mt-6'>
                  <label
                    htmlFor='client'
                    className='block mb-2 text-base font-normal text-[#404040] font-inter leading-7'
                  >
                    Client
                  </label>
                  <Field
                    type='text'
                    name='client'
                    id='small-input'
                    placeholder='Client'
                    className='border border-[#EBEBEB] text-[#c0c0c0] sm:text-sm  rounded-md leading-5 font-normal font-inter  block w-full p-2.5'
                  />
                  <ErrorMessage
                    name='client'
                    component='div'
                    className='text-red-500 text-sm mt-1'
                  />
                </div>
                <div className='tabs'>
                  <div className='container mx-auto mt-8'>
                    <Tabs data={tabData} />
                  </div>
                </div>
                <div className='buttons flex flex-col  md:flex-row gap-4 mt-6'>
                  <button className='flex py-[10px] px-[16px] bg-[#B9F9CF] text-[#04b076] rounded border border-[#04B076] items-center gap-2'>
                    <img src={Green} className='w-6 h-6 ' alt='' />
                    Add Notes
                  </button>
                  <button className='flex py-[10px] px-[16px] bg-[#634af9] text-white rounded items-center gap-2'>
                    <img src={Plus} className='w-6 h-6  ' alt='' />
                    Add Quote
                  </button>
                </div>
              </div>
            </Form>
          )}
        </Formik>
      </div>

      <div className={` xl:w-[18%] flex justify-end`}>
        {isSideComponentVisible ? (
          <button onClick={toggleSideComponent}>
            <img src={SideIcon} alt='' className='w-[130px] h-[189px]' />
          </button>
        ) : (
          <Quotesidebar onClose={toggleSideComponent} />
        )}
      </div>
    </div>
  );
};

export default Quoteform1;
