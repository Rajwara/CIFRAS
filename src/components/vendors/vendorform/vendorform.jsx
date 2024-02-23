import React, { useState } from "react";
import * as Yup from "yup";
import { Formik, Field, Form, ErrorMessage } from "formik";
import Line from "../../../assets/images/vendorformlineblack.svg";
import Detailsandhistorytabs from "../../detailsandhistorytabs/detailsandhistorytabs";
import Phonefield from "../../phonefield/phonefield";

const Vendorform = () => {
  // const [name , setName] = useState("");
  // const [phoneNumber , setPhoneNumber] = useState("");
  // const [alias, setAlias] = useState("");
  // const [ruc, setRuc] = useState("");
  // const [dv , setDv] = useState("");
  // const [address , setAddress] = useState("");

  const initialValues = {
    name: "",
    phonenumber: "",
    alias: "",
    ruc: "",
    dv: "",
    address: "",
  };

  const vendorformSchema = Yup.object().shape({
    name: Yup.string()
      .min(2, "It's too short")
      .max(20, "It's too long")
      .required("Please Enter Your Name"),
    phonenumber: Yup.string()
      .min(9, "Phone Number is too short")
      .required("Phone Number is Required"),
    alias: Yup.string()
      .min(2, "It's too short")
      .max(20, "It's too long")
      .required("Please Enter Your Alias"),
    ruc: Yup.string()
      .min(2, "It's too short")
      .max(20, "It's too long")
      .required("Please Enter Your Ruc"),
    dv: Yup.string()
      .min(2, "It's too short")
      .max(20, "It's too long")
      .required("Please Enter Your Dv"),
    address: Yup.string()
      .min(10, "It's too short")
      .required("Address is Required"),
  });

  const onSubmit = (values, props) => {
    console.log("value", values);
    setTimeout(() => {
      props.resetForm();
      props.setSubmitting(false);
    }, 2000);
  };

  return (
    <div className='bg-white px-4 pt-4 '>
      <div className='grid grid-cols-1 mt-[100px] md:ml-[60px] border border-[#ebebeb] bg-[#fff] px-8 py-16 rounded'>
        <div className=''>
          <h1 className='font-lexend text-2xl mt-[-25px] font-bold leading-tight text-[#404040] mb-8 '>
            Add Vendor
          </h1>
          <Formik
            initialValues={initialValues}
            validationSchema={vendorformSchema}
            onSubmit={onSubmit}
          >
            {(props) => (
              <Form className='flex flex-col items-center justify-center'>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-4 mb-4 w-full'>
                  <div className='w-full'>
                    <label
                      htmlFor='name'
                      className='block mb-2 text-sm font-normal text-[#404040] font-inter leading-7'
                    >
                      Name
                    </label>
                    <Field
                      type='text'
                      id='name'
                      name='name'
                      placeholder='Enter your name'
                      className='border-2 border-[#C0C0C0] text-[#c0c0c0] sm:text-sm  rounded-md leading-5 font-normal font-inter text-sm  block w-full p-2.5'
                    />
                    <ErrorMessage
                      name='name'
                      component='div'
                      className='text-red-500 text-sm mt-1'
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
                      className='border-2 border-[#C0C0C0] text-[#c0c0c0] sm:text-sm  rounded-md leading-5 font-normal font-inter text-sm  block w-full p-2.5'
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
                  <div className='w-full'>
                    <label
                      htmlFor='alias'
                      className='block mb-2 text-sm font-normal text-[#404040] font-inter leading-7'
                    >
                      Alias
                    </label>
                    <Field
                      type='text'
                      id='alias'
                      name='alias'
                      placeholder='Alias'
                      className='border-2 border-[#C0C0C0] text-[#c0c0c0] sm:text-sm  rounded-md leading-5 font-normal font-inter  block w-full p-2.5'
                    />
                    <ErrorMessage
                      name='alias'
                      component='div'
                      className='text-red-500 font-inter text-sm mt-1'
                    />
                  </div>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mb-4 w-full'>
                  <div className='w-full'>
                    <label
                      htmlFor='ruc'
                      className='block mb-2 text-sm font-normal text-[#404040] font-inter leading-7'
                    >
                      Ruc
                    </label>
                    <Field
                      type='text'
                      id='ruc'
                      name='ruc'
                      placeholder='Ruc'
                      className='border-2 border-[#C0C0C0] text-[#c0c0c0] sm:text-sm  rounded-md leading-5 font-normal font-inter  block w-full p-2.5'
                    />
                    <ErrorMessage
                      name='ruc'
                      component='div'
                      className='text-red-500 font-inter text-sm mt-1'
                    />
                  </div>
                  <div className='w-full'>
                    <label
                      htmlFor='dv'
                      className='block mb-2 text-sm font-normal text-[#404040] font-inter leading-7'
                    >
                      DV
                    </label>
                    <Field
                      type='text'
                      id='dv'
                      name='dv'
                      placeholder=' Dv '
                      className='border-2 border-[#C0C0C0] text-[#c0c0c0] sm:text-sm  rounded-md leading-5 font-normal font-inter  block w-full p-2.5'
                    />
                    <ErrorMessage
                      name='dv'
                      component='div'
                      className='text-red-500 font-inter text-sm mt-1'
                    />
                  </div>
                </div>
                <div className='w-full mb-4'>
                  <div className='flex justify-between flex-row'>
                    <label
                      htmlFor='address'
                      className='block mb-2 text-sm font-normal text-[#404040] font-inter leading-7'
                    >
                      Address
                    </label>
                    <img src={Line} className='w-6 h-6' alt='' />
                  </div>
                  <Field
                    as='textarea'
                    id='address'
                    name='address'
                    rows='4'
                    placeholder='Enter your address'
                    className='border border-[#C0C0C0] text-[#c0c0c0] sm:text-sm rounded-md leading-5 font-normal font-inter block w-full p-2.5'
                  />
                  <ErrorMessage
                    name='address'
                    component='div'
                    className='text-red-500 font-inter text-sm mt-1'
                  />
                </div>
                <div className='mt-6'>
                  <button
                    disabled={props.isSubmitting}
                    type='submit'
                    name='submit'
                    value='submit'
                    className='bg-[#634af9] text-[#ffffff] rounded font-lexend font-normal text-sm leading-7 px-10 py-2'
                  >
                    Submit
                  </button>
                </div>
              </Form>
            )}
          </Formik>
        </div>
        <div className='mt-8'>
          <Detailsandhistorytabs />
        </div>
      </div>
    </div>
  );
};

export default Vendorform;
