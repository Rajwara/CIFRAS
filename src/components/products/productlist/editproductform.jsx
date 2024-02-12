import React from 'react';
import * as Yup from 'yup';
import { Formik, Field, Form, ErrorMessage } from 'formik';

const Editproductform = () => {
  const initialValues = {
    itemnumber: '',
    description: '',
    unitprice: '',
    unitofmeasure: '',
    vendor: '',
    file: null, // Add a field for file
  };

  const productformSchema = Yup.object().shape({
    itemnumber: Yup.string().min(2, "It's too short").max(20, "It's too long").required('Please Enter Item Number'),
    description: Yup.string().min(10, 'It\'s too short').required('Description is Required'),
    unitprice: Yup.string().min(9, 'Unit Price is too short').required('Unit Price is Required'),
    unitofmeasure: Yup.string().min(9, 'Unit of Measure is too short').required('Unit of Measure is Required'),
    vendor: Yup.string().min(2, "It's too short").max(20, "It's too long").required('Please Enter Your Vendor'),
    file: Yup.mixed().required('File is required'), // Add file validation
  });

  const onSubmit = (values, props) => {
    console.log('value', values);
    setTimeout(() => {
      props.resetForm();
      props.setSubmitting(false);
    }, 2000);
  };

  return (
    <div className='bg-white p-4'>
      <div className='grid grid-cols-1 mt-[100px] ml-[60px] border border-[#ebebeb] bg-[#fff] px-8 py-16 rounded'>
        <div className=''>
          <h1 className="font-lexend text-3xl mt-[-25px] font-bold leading-tight text-[#404040] mb-8 ">
            Create Products
          </h1>
          <Formik
            initialValues={initialValues}
            validationSchema={productformSchema}
            onSubmit={onSubmit}
          >
            {(props) => (
              <Form className='flex flex-col items-center justify-center'>
                <div className='w-full mb-4'>
                   <label htmlFor="itemnumber"  className="block mb-2 text-base font-normal text-[#404040] font-inter leading-7">Item Number</label>
                   <Field type="number" name="itemnumber" id="small-input" placeholder='Item Number' className="border border-[#C0C0C0] text-[#c0c0c0] sm:text-sm  rounded-md leading-5 font-normal font-inter  block w-full p-2.5" />
                   <ErrorMessage name="itemnumber" component="div" className="text-red-500 text-sm mt-1" />
              </div>
              <div className="w-full mb-4">
                  <label htmlFor="description" className="block mb-2 text-base font-normal text-[#404040] font-inter leading-7">Description</label>
                  <Field as="textarea" id="description" name="description" rows="4" placeholder="Description" className="border border-[#C0C0C0] text-[#c0c0c0] sm:text-sm rounded-md leading-5 font-normal font-inter block w-full p-2.5" />
                  <ErrorMessage name="description" component="div" className="text-red-500 text-sm mt-1" />
                </div>
                  <div className='flex flex-row gap-4 w-full mb-4'>
                      <div className='w-full'>
                          <label htmlFor="unitprice"  className="block mb-2 text-base font-normal text-[#404040] font-inter leading-7">Unit Price </label>
                          <Field type="number" name="unitprice" id="small-input" placeholder='$0.00' className="border border-[#C0C0C0] text-[#c0c0c0] sm:text-sm  rounded-md leading-5 font-normal font-inter  block w-full p-2.5" />
                          <ErrorMessage name="unitprice" component="div" className="text-red-500 text-sm mt-1" />
                      </div>
                      <div className='w-full'>
                          <label htmlFor="unitofmeasure"  className="block mb-2 text-base font-normal text-[#404040] font-inter leading-7" >Unit of Measure</label>
                          <Field type="number" name="unitofmeasure" id="small-input" placeholder='Unit of Measure' className="border border-[#C0C0C0] text-[#c0c0c0] sm:text-sm  rounded-md leading-5 font-normal font-inter  block w-full p-2.5" />
                          <ErrorMessage name="unitofmeasure" component="div" className="text-red-500 text-sm mt-1" />
                      </div>
                  </div>
                  <div className='w-full mb-4'>
                      <label htmlFor="vendor"  className="block mb-2 text-base font-normal text-[#404040] font-inter leading-7">Vendor</label>
                      <Field type="text" name="vendor" id="small-input" placeholder='Vendor' className="border border-[#C0C0C0] text-[#c0c0c0] sm:text-sm  rounded-md leading-5 font-normal font-inter  block w-full p-2.5" />
                      <ErrorMessage name="vendor" component="div" className="text-red-500 text-sm mt-1" />
                  </div>
                <div className='mt-6 w-full'>
                  <label htmlFor="file" className="block mb-2 text-base font-normal text-[#404040] font-inter leading-7">Upload Product Images</label>
                  <div className="flex items-center justify-center w-full">
                    <label htmlFor="file" className="border flex justify-center items-center border-[#C0C0C0] text-[#c0c0c0] sm:text-sm h-40 rounded-md leading-5 font-normal font-inter block w-full p-2.5">
                      <div className="flex flex-row gap-4 items-center justify-center align-middle">
                        <svg className="w-8 h-8 mb-4 text-gray-500 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2" />
                        </svg>
                        <p className="mb-2 text-sm text-gray-500 ">{props.values.file ? props.values.file.name : 'Drop or Select File'}</p>
                      </div>
                      <input
                        id="file"
                        type="file"
                        accept=".jpg, .jpeg, .png"
                        onChange={(event) => {
                          props.setFieldValue('file', event.currentTarget.files[0]);
                        }}
                        className="hidden"
                      />
                    </label>
                  </div>
                  <ErrorMessage name="file" component="div" className="text-red-500 text-sm mt-1" />
                </div>
                <div className='mt-6'>
                  <button
                    disabled={props.isSubmitting}
                    type='submit'
                    name='submit'
                    value="submit"
                    className='bg-[#634af9] text-[#ffffff] rounded font-inter font-normal text-lg leading-7 px-10 py-2'
                  >
                    {props.isSubmitting ? 'Submitting...' : 'Submit'}
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

export default Editproductform;
