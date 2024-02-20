import React from "react";
import * as Yup from "yup";
import { Formik, Field, Form, ErrorMessage } from "formik";

const Purchaseorderform = () => {
  const initialValues = {
    purchaseorderId: "",
    description: "",
    unitprice: "",
    unitofmeasure: "",
    availablestock: "",
    dateofpurchasing: "",
    vendor: "",
    file: null, // Add a field for file
  };

  const productformSchema = Yup.object().shape({
    purchaseorderId: Yup.string()
      .min(1, "It's too short")
      .max(20, "It's too long")
      .required("Please Enter Item Number"),
    description: Yup.string()
      .min(10, "It's too short")
      .required("Description is Required"),
    unitprice: Yup.string()
      .min(1, "Unit Price is too short")
      .required("Unit Price is Required"),
    unitofmeasure: Yup.string()
      .min(1, "Unit of Measure is too short")
      .required("Unit of Measure is Required"),
    availablestock: Yup.string()
      .min(1, "Available Stock is too short")
      .required("Available Stock is Required"),
    dateofpurchasing: Yup.string()
      .min(1, "Date of Purchasing is too short")
      .required("Date of Purchasing is Required"),
    vendor: Yup.string()
      .min(1, "It's too short")
      .max(200, "It's too long")
      .required("Please Enter Your Vendor"),
    file: Yup.mixed().required("File is required"), // Add file validation
  });

  const onSubmit = (values, props) => {
    console.log("value", values);
    setTimeout(() => {
      props.resetForm();
      props.setSubmitting(false);
    }, 2000);
  };

  return (
    <div className=' p-4'>
      <div className='grid grid-cols-1 mt-[100px] md:ml-[60px] bg-white border border-[#ebebeb] py-10 px-10 rounded'>
        <div className=''>
          <h1 className='font-inter text-2xl mt-[-25px] font-bold leading-tight text-[#404040] mb-8 '>
            Add New Purchase Order
          </h1>
          <Formik
            initialValues={initialValues}
            validationSchema={productformSchema}
            onSubmit={onSubmit}
          >
            {(props) => (
              <Form className='flex flex-col items-center justify-center'>
                <div className='w-full mb-4'>
                  <label
                    htmlFor='purchaseorderId'
                    className='block mb-2 text-base font-normal text-[#404040] font-inter leading-7'
                  >
                    Purchase Order ID
                  </label>
                  <Field
                    type='number'
                    name='purchaseorderId'
                    id='small-input'
                    placeholder='Item Number'
                    className='border border-[#ebebeb] text-[#c0c0c0] sm:text-sm  rounded-md leading-5 font-normal font-inter  block w-full p-2.5'
                  />
                  <ErrorMessage
                    name='purchaseorderId'
                    component='div'
                    className='text-red-500 text-sm mt-1'
                  />
                </div>
                <div className='w-full mb-4'>
                  <label
                    htmlFor='description'
                    className='block mb-2 text-base font-normal text-[#404040] font-inter leading-7'
                  >
                    Description
                  </label>
                  <div class='w-full mb-4 border border-gray-200 rounded-lg bg-gray-50 '>
                    <div class='flex items-center justify-between px-3 py-2 border-b '>
                      <div class='flex flex-wrap items-center divide-gray-200 sm:divide-x sm:rtl:divide-x-reverse '>
                        <div class='flex items-center space-x-1 rtl:space-x-reverse sm:pe-4'>
                          <button
                            type='button'
                            class='p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 '
                          >
                            <svg
                              class='w-4 h-4'
                              aria-hidden='true'
                              xmlns='http://www.w3.org/2000/svg'
                              fill='none'
                              viewBox='0 0 12 20'
                            >
                              <path
                                stroke='currentColor'
                                stroke-linejoin='round'
                                stroke-width='2'
                                d='M1 6v8a5 5 0 1 0 10 0V4.5a3.5 3.5 0 1 0-7 0V13a2 2 0 0 0 4 0V6'
                              />
                            </svg>
                            <span class='sr-only'>Attach file</span>
                          </button>
                          <button
                            type='button'
                            class='p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 '
                          >
                            <svg
                              class='w-4 h-4'
                              aria-hidden='true'
                              xmlns='http://www.w3.org/2000/svg'
                              fill='currentColor'
                              viewBox='0 0 16 20'
                            >
                              <path d='M8 0a7.992 7.992 0 0 0-6.583 12.535 1 1 0 0 0 .12.183l.12.146c.112.145.227.285.326.4l5.245 6.374a1 1 0 0 0 1.545-.003l5.092-6.205c.206-.222.4-.455.578-.7l.127-.155a.934.934 0 0 0 .122-.192A8.001 8.001 0 0 0 8 0Zm0 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6Z' />
                            </svg>
                            <span class='sr-only'>Embed map</span>
                          </button>
                          <button
                            type='button'
                            class='p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 '
                          >
                            <svg
                              class='w-4 h-4'
                              aria-hidden='true'
                              xmlns='http://www.w3.org/2000/svg'
                              fill='currentColor'
                              viewBox='0 0 16 20'
                            >
                              <path d='M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM10.5 6a1.5 1.5 0 1 1 0 2.999A1.5 1.5 0 0 1 10.5 6Zm2.221 10.515a1 1 0 0 1-.858.485h-8a1 1 0 0 1-.9-1.43L5.6 10.039a.978.978 0 0 1 .936-.57 1 1 0 0 1 .9.632l1.181 2.981.541-1a.945.945 0 0 1 .883-.522 1 1 0 0 1 .879.529l1.832 3.438a1 1 0 0 1-.031.988Z' />
                              <path d='M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z' />
                            </svg>
                            <span class='sr-only'>Upload image</span>
                          </button>
                          <button
                            type='button'
                            class='p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 '
                          >
                            <svg
                              class='w-4 h-4'
                              aria-hidden='true'
                              xmlns='http://www.w3.org/2000/svg'
                              fill='currentColor'
                              viewBox='0 0 16 20'
                            >
                              <path d='M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.96 2.96 0 0 0 .13 5H5Z' />
                              <path d='M14.067 0H7v5a2 2 0 0 1-2 2H0v11a1.969 1.969 0 0 0 1.933 2h12.134A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.933-2ZM6.709 13.809a1 1 0 1 1-1.418 1.409l-2-2.013a1 1 0 0 1 0-1.412l2-2a1 1 0 0 1 1.414 1.414L5.412 12.5l1.297 1.309Zm6-.6-2 2.013a1 1 0 1 1-1.418-1.409l1.3-1.307-1.295-1.295a1 1 0 0 1 1.414-1.414l2 2a1 1 0 0 1-.001 1.408v.004Z' />
                            </svg>
                            <span class='sr-only'>Format code</span>
                          </button>
                          <button
                            type='button'
                            class='p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 '
                          >
                            <svg
                              class='w-4 h-4'
                              aria-hidden='true'
                              xmlns='http://www.w3.org/2000/svg'
                              fill='currentColor'
                              viewBox='0 0 20 20'
                            >
                              <path d='M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM13.5 6a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm-7 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm3.5 9.5A5.5 5.5 0 0 1 4.6 11h10.81A5.5 5.5 0 0 1 10 15.5Z' />
                            </svg>
                            <span class='sr-only'>Add emoji</span>
                          </button>
                        </div>
                        <div class='flex flex-wrap items-center space-x-1 rtl:space-x-reverse sm:ps-4'>
                          <button
                            type='button'
                            class='p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 '
                          >
                            <svg
                              class='w-4 h-4'
                              aria-hidden='true'
                              xmlns='http://www.w3.org/2000/svg'
                              fill='none'
                              viewBox='0 0 21 18'
                            >
                              <path
                                stroke='currentColor'
                                stroke-linecap='round'
                                stroke-linejoin='round'
                                stroke-width='2'
                                d='M9.5 3h9.563M9.5 9h9.563M9.5 15h9.563M1.5 13a2 2 0 1 1 3.321 1.5L1.5 17h5m-5-15 2-1v6m-2 0h4'
                              />
                            </svg>
                            <span class='sr-only'>Add list</span>
                          </button>
                          <button
                            type='button'
                            class='p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 '
                          >
                            <svg
                              class='w-4 h-4'
                              aria-hidden='true'
                              xmlns='http://www.w3.org/2000/svg'
                              fill='currentColor'
                              viewBox='0 0 20 20'
                            >
                              <path d='M18 7.5h-.423l-.452-1.09.3-.3a1.5 1.5 0 0 0 0-2.121L16.01 2.575a1.5 1.5 0 0 0-2.121 0l-.3.3-1.089-.452V2A1.5 1.5 0 0 0 11 .5H9A1.5 1.5 0 0 0 7.5 2v.423l-1.09.452-.3-.3a1.5 1.5 0 0 0-2.121 0L2.576 3.99a1.5 1.5 0 0 0 0 2.121l.3.3L2.423 7.5H2A1.5 1.5 0 0 0 .5 9v2A1.5 1.5 0 0 0 2 12.5h.423l.452 1.09-.3.3a1.5 1.5 0 0 0 0 2.121l1.415 1.413a1.5 1.5 0 0 0 2.121 0l.3-.3 1.09.452V18A1.5 1.5 0 0 0 9 19.5h2a1.5 1.5 0 0 0 1.5-1.5v-.423l1.09-.452.3.3a1.5 1.5 0 0 0 2.121 0l1.415-1.414a1.5 1.5 0 0 0 0-2.121l-.3-.3.452-1.09H18a1.5 1.5 0 0 0 1.5-1.5V9A1.5 1.5 0 0 0 18 7.5Zm-8 6a3.5 3.5 0 1 1 0-7 3.5 3.5 0 0 1 0 7Z' />
                            </svg>
                            <span class='sr-only'>Settings</span>
                          </button>
                          <button
                            type='button'
                            class='p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 '
                          >
                            <svg
                              class='w-4 h-4'
                              aria-hidden='true'
                              xmlns='http://www.w3.org/2000/svg'
                              fill='currentColor'
                              viewBox='0 0 20 20'
                            >
                              <path d='M18 2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2ZM2 18V7h6.7l.4-.409A4.309 4.309 0 0 1 15.753 7H18v11H2Z' />
                              <path d='M8.139 10.411 5.289 13.3A1 1 0 0 0 5 14v2a1 1 0 0 0 1 1h2a1 1 0 0 0 .7-.288l2.886-2.851-3.447-3.45ZM14 8a2.463 2.463 0 0 0-3.484 0l-.971.983 3.468 3.468.987-.971A2.463 2.463 0 0 0 14 8Z' />
                            </svg>
                            <span class='sr-only'>Timeline</span>
                          </button>
                          <button
                            type='button'
                            class='p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 '
                          >
                            <svg
                              class='w-4 h-4'
                              aria-hidden='true'
                              xmlns='http://www.w3.org/2000/svg'
                              fill='currentColor'
                              viewBox='0 0 20 20'
                            >
                              <path d='M14.707 7.793a1 1 0 0 0-1.414 0L11 10.086V1.5a1 1 0 0 0-2 0v8.586L6.707 7.793a1 1 0 1 0-1.414 1.414l4 4a1 1 0 0 0 1.416 0l4-4a1 1 0 0 0-.002-1.414Z' />
                              <path d='M18 12h-2.55l-2.975 2.975a3.5 3.5 0 0 1-4.95 0L4.55 12H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2Zm-3 5a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z' />
                            </svg>
                            <span class='sr-only'>Download</span>
                          </button>
                        </div>
                      </div>
                      <button
                        type='button'
                        data-tooltip-target='tooltip-fullscreen'
                        class='p-2 text-gray-500 rounded cursor-pointer sm:ms-auto hover:text-gray-900 hover:bg-gray-100 '
                      >
                        <svg
                          class='w-4 h-4'
                          aria-hidden='true'
                          xmlns='http://www.w3.org/2000/svg'
                          fill='none'
                          viewBox='0 0 19 19'
                        >
                          <path
                            stroke='currentColor'
                            stroke-linecap='round'
                            stroke-linejoin='round'
                            stroke-width='2'
                            d='M13 1h5m0 0v5m0-5-5 5M1.979 6V1H7m0 16.042H1.979V12M18 12v5.042h-5M13 12l5 5M2 1l5 5m0 6-5 5'
                          />
                        </svg>
                        <span class='sr-only'>Full screen</span>
                      </button>
                      <div
                        id='tooltip-fullscreen'
                        role='tooltip'
                        class='absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip '
                      >
                        Show full screen
                        <div class='tooltip-arrow' data-popper-arrow></div>
                      </div>
                    </div>
                    <div class='px-4 py-2 bg-white rounded-b-lg '>
                      <label for='editor' class='sr-only'>
                        Publish post
                      </label>
                      {/* <textarea id="editor" rows="8" class="block w-full px-0 text-sm text-gray-800 bg-white border-0  focus:ring-0 " placeholder="Write an article..." required></textarea> */}
                      <Field
                        as='textarea'
                        id='description'
                        name='description'
                        rows='8'
                        placeholder='Description'
                        class=' block w-full px-0 text-sm text-gray-800 bg-white border-0  focus:ring-0  font-inter'
                      />
                    </div>
                  </div>
                  <ErrorMessage
                    name='description'
                    component='div'
                    className='text-red-500 text-sm mt-1'
                  />
                </div>
                <div className='flex flex-col md:flex-row gap-4 w-full mb-4'>
                  <div className='w-full'>
                    <label
                      htmlFor='unitprice'
                      className='block mb-2 text-base font-normal text-[#404040] font-inter leading-7'
                    >
                      Unit Price{" "}
                    </label>
                    <Field
                      type='number'
                      name='unitprice'
                      id='small-input'
                      placeholder='$0.00'
                      className='border border-[#ebebeb] text-[#c0c0c0] sm:text-sm  rounded-md leading-5 font-normal font-inter  block w-full p-2.5'
                    />
                    <ErrorMessage
                      name='unitprice'
                      component='div'
                      className='text-red-500 text-sm mt-1'
                    />
                  </div>
                  <div className='w-full'>
                    <label
                      htmlFor='unitofmeasure'
                      className='block mb-2 text-base font-normal text-[#404040] font-inter leading-7'
                    >
                      Unit of Measure
                    </label>
                    <Field
                      type='number'
                      name='unitofmeasure'
                      id='small-input'
                      placeholder='Unit of Measure'
                      className='border border-[#C0C0C0] text-[#c0c0c0] sm:text-sm  rounded-md leading-5 font-normal font-inter  block w-full p-2.5'
                    />
                    <ErrorMessage
                      name='unitofmeasure'
                      component='div'
                      className='text-red-500 text-sm mt-1'
                    />
                  </div>
                </div>
                <div className='flex flex-col md:flex-row gap-4 w-full mb-4'>
                  <div className='w-full'>
                    <label
                      htmlFor='availablestock'
                      className='block mb-2 text-base font-normal text-[#404040] font-inter leading-7'
                    >
                      Available Stock
                    </label>
                    <Field
                      type='number'
                      name='availablestock'
                      id='small-input'
                      placeholder='items left'
                      className='border border-[#ebebeb] text-[#c0c0c0] sm:text-sm  rounded-md leading-5 font-normal font-inter  block w-full p-2.5'
                    />
                    <ErrorMessage
                      name='availablestock'
                      component='div'
                      className='text-red-500 text-sm mt-1'
                    />
                  </div>
                  <div className='w-full'>
                    <label
                      htmlFor='dateofpurchasing'
                      className='block mb-2 text-base font-normal text-[#404040] font-inter leading-7'
                    >
                      Date of Purchasing
                    </label>
                    <Field
                      type='number'
                      name='dateofpurchasing'
                      id='small-input'
                      placeholder='1 Jan, 2014'
                      className='border border-[#C0C0C0] text-[#c0c0c0] sm:text-sm  rounded-md leading-5 font-normal font-inter  block w-full p-2.5'
                    />
                    <ErrorMessage
                      name='dateofpurchasing'
                      component='div'
                      className='text-red-500 text-sm mt-1'
                    />
                  </div>
                </div>
                <div className='w-full mb-4'>
                  <label
                    htmlFor='vendor'
                    className='block mb-2 text-base font-normal text-[#404040] font-inter leading-7'
                  >
                    Vendor
                  </label>
                  <Field
                    type='text'
                    name='vendor'
                    id='small-input'
                    placeholder='Vendor'
                    className='border border-[#ebebeb] text-[#c0c0c0] sm:text-sm  rounded-md leading-5 font-normal font-inter  block w-full p-2.5'
                  />
                  <ErrorMessage
                    name='vendor'
                    component='div'
                    className='text-red-500 text-sm mt-1'
                  />
                </div>
                <div className='mt-6 w-full mb-4'>
                  <label
                    htmlFor='file'
                    className='block mb-2 text-base font-normal text-[#404040] font-inter leading-7'
                  >
                    Upload Product Images
                  </label>
                  <div className='flex items-center justify-center w-full'>
                    <label
                      htmlFor='file'
                      className='border flex justify-center items-center border-[#ebebeb] text-[#c0c0c0] sm:text-sm h-40 rounded-md leading-5 font-normal font-inter block w-full p-2.5'
                    >
                      <div className='flex flex-row gap-4 items-center justify-center align-middle'>
                        <svg
                          className='w-8 h-8 mb-4 text-[#404040] '
                          aria-hidden='true'
                          xmlns='http://www.w3.org/2000/svg'
                          fill='none'
                          viewBox='0 0 20 16'
                        >
                          <path
                            stroke='currentColor'
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth='2'
                            d='M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2'
                          />
                        </svg>
                        <p className='mb-2 text-sm text-[#404040] '>
                          {props.values.file
                            ? props.values.file.name
                            : "Drop or Select File"}
                        </p>
                      </div>
                      <input
                        id='file'
                        type='file'
                        accept='.jpg, .jpeg, .png'
                        onChange={(event) => {
                          props.setFieldValue(
                            "file",
                            event.currentTarget.files[0]
                          );
                        }}
                        className='hidden'
                      />
                    </label>
                  </div>
                  <ErrorMessage
                    name='file'
                    component='div'
                    className='text-red-500 text-sm mt-1'
                  />
                </div>
                <div className='mt-6'>
                  <button
                    disabled={props.isSubmitting}
                    type='submit'
                    name='submit'
                    value='submit'
                    className='bg-[#634af9] text-[#ffffff] rounded font-inter font-normal text-lg leading-7 px-10 py-2'
                  >
                    {props.isSubmitting ? "Submitting..." : "Submit"}
                  </button>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default Purchaseorderform;
