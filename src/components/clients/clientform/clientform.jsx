import React, { useState } from 'react';
import * as Yup from 'yup';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import Detailsandhistorytabs from '../../detailsandhistorytabs/detailsandhistorytabs';
// import { useDispatch, useSelector } from "react-redux";

const Clientform = () => {
  // const clients = useSelector((state) => state);
  // console.log("CCCCCCCCCcc", clients);
  // const dispatch = useDispatch();
  const [clientName , setClientName] = useState("");
  const [phoneNumber , setPhoneNumber] = useState("");
  const [alias, setAlias] = useState("");
  const [description , setDescription] = useState("");

  const initialValues = {
    clientName: '',
    phoneNumber: '',
    alias: '',
    description: '',
  };

  const clentformSchema = Yup.object().shape({
    name: Yup.string().min(2, "It's too short").max(20, "It's too long").required('Please Enter Your Name'),
    phonenumber: Yup.string().min(9, 'Phone Number is too short').required('Phone Number is Required'),
    alias: Yup.string().min(2, "It's too short").max(10, "It's too long").required('Please Enter Your Alias'),
    description: Yup.string().min(10, 'It\'s too short').required('Description is Required'),
  });

  const onSubmit = (values, props) => {
    console.log('value', values);
    setTimeout(() => {
      props.resetForm();
      props.setSubmitting(false);
    }, 2000);
  };

  return (
    <div className='bg-white  px-4 pt-4 pb-[300px]'>
      <div className='grid grid-cols-1 border border-[#ebebeb] mt-[100px] ml-[60px] bg-[#fff] px-8 py-16 rounded'>
        <div className=''>
          <h1 className="font-lexend text-3xl mt-[-25px] font-bold leading-tight text-[#404040] mb-8 ">
            Add Client
          </h1>
          <Formik
            initialValues={initialValues}
            validationSchema={clentformSchema}
            onSubmit={onSubmit}
          >
            {(props) => (
              <Form className='flex flex-col items-center justify-center'>
                <div className='flex flex-row gap-4 mb-4 w-full'>
                  <div className='w-full'>
                    <label htmlFor="name" className="block mb-2 text-base font-normal text-[#404040] font-inter leading-7">Name</label>
                    <Field type="text" id="name" name="name" placeholder='Item Number' value={clientName} onChange={(e)=>{setClientName(e.target.value);}} className="border border-[#C0C0C0] text-[#c0c0c0] sm:text-sm  rounded-md leading-5 font-normal font-inter  block w-full p-2.5" />
                    <ErrorMessage name="name" component="div" className="text-red-500 text-sm mt-1" />
                  </div>
                  <div className='w-full'>
                    <label htmlFor="phonenumber" className="block mb-2 text-base font-normal text-[#404040] font-inter leading-7">Phone Number</label>
                    <Field type="number" id="phonenumber" name="phonenumber" value={phoneNumber} onChange={(e)=>{setPhoneNumber(e.target.value);}} placeholder=' +1 ' className="border border-[#C0C0C0] text-[#c0c0c0] sm:text-sm  rounded-md leading-5 font-normal font-inter  block w-full p-2.5" /> 
                    <ErrorMessage name="phonenumber" component="div" className="text-red-500 text-sm mt-1" />
                  </div>
                  <div className='w-full'>
                    <label htmlFor="alias" className="block mb-2 text-base font-normal text-[#404040] font-inter leading-7">Alias</label>
                    <Field type="text" id="alias" name="alias" value={alias} onChange={(e)=>{setAlias(e.target.value);}} placeholder='Alias' className="border border-[#C0C0C0] text-[#c0c0c0] sm:text-sm  rounded-md leading-5 font-normal font-inter  block w-full p-2.5" />
                    <ErrorMessage name="alias" component="div" className="text-red-500 text-sm mt-1" />
                  </div>
                </div>
                <div className="w-full mb-4">
                  <label htmlFor="description" className="block mb-2 text-base font-normal text-[#404040] font-inter leading-7">Description</label>
                  <Field as="textarea" id="description" value={description} name="description" onChange={(e)=>{setDescription(e.target.value);}} rows="4" placeholder="Description" className="border border-[#C0C0C0] text-[#c0c0c0] sm:text-sm rounded-md leading-5 font-normal font-inter block w-full p-2.5" />
                  <ErrorMessage name="description" component="div" className="text-red-500 text-sm mt-1" />
                </div>
                <div className='mt-6'>
                  <button disabled = {props.isSubmitting} type='submit' name='submit' value="submit" className='bg-[#634af9] text-[#ffffff] rounded font-inter font-normal text-lg leading-7 px-10 py-2'>
                    Submit
                  </button>
                </div>
              </Form>
            )}
          </Formik>
        </div>
        <div>
          <Detailsandhistorytabs/>
        </div>
      </div>
    </div>
  );
};

export default Clientform;
