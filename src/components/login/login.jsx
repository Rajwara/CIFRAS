import React, { useState } from "react";
import Logo from "../../assets/images/sitelogo.svg";
import DashboardSideImg from "../../assets/images/loginandsignup/dashboardside.svg";
import GoogleIcon from "../../assets/images/loginandsignup/google-icon.svg";
import AppleIcon from "../../assets/images/loginandsignup/apple-icon.svg";
import LineDivider from "../../assets/images/loginandsignup/line-divider.svg";
import MainBg from "../../assets/images/loginandsignup/main_screen_bg.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../../redux/reducers/UserSlice";

const Login = () => {

  const [password, setPassword] = useState(false);
  const toggleShowPassword = () => {
    setPassword(!password);
  };
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const initialValues = {
    email: "",
    password: "",
    remember: false,
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email("Please Enter Valid Email")
      .required("Email is required"),
    password: Yup.string()
      .min(8, "Password too Short use Character 8-14")
      .max(15, "Password too Long use Character 8-14")
      .required("password is required"),
  });

  const onSubmit = (values, props) => {
    console.log("Value", values);
   

    dispatch(
      login({
        email: values.email,
        showpassword: values.password,
      })
    );
    navigate("/dashbaord");
    setTimeout(() => {
      props?.resetForm();
      props?.setSubmitting(false);
    }, 2000);
  };

  return (
    <section
      className=' grid grid-cols-1 lg:grid-cols-2 py-12 bg-no-repeat bg-cover	'
      style={{ backgroundImage: `url(${MainBg})` }}
    >
      <div className='flex flex-col justify-center items-center  w-4/5 ml-32   '>
        <div className=' '>
          <div>
            <a
              href='/'
              class='flex  mb-6 text-2xl font-semibold text-gray-900 dark:text-white'
            >
              <img
                className='w-[290px] h-[110px] mr-2 '
                src={Logo}
                alt='logo'
              />
            </a>
          </div>
          <div>
            <h1 className='font-lexend text-4xl mt-[-25px] font-bold leading-tight text-[#fff] mb-3 '>
              Welcome back! Please log in to continue.
            </h1>
            <p className='text-[#fff] font-inter font-normal leading-6 text-base mb-7'>
              By signing up, you will gain access to exclusive content, special
              offers, and be the first to hear about exciting news and updates.
            </p>
            <div className='bg-white py-10 rounded shadow px-8'>
              <div className='grid grid-cols-2 gap-4 '>
                <div className='flex gap-2 border border-[#634AF9] rounded-md px-2 py-2  align-middle items-center '>
                  <img className='h-5 w-5' src={AppleIcon} alt='' />
                  <p className='font-inter font-normal text-lg text-[#404040] leading-7'>
                    Log in With Apple
                  </p>
                </div>
                <div className='flex gap-2 border border-[#634AF9] rounded-md px-2 py-2 align-middle items-center '>
                  <img className='h-5 w-5 ' src={GoogleIcon} alt='' />
                  <p className='font-inter font-normal text-lg text-[#404040] leading-7'>
                    Log in With Google
                  </p>
                </div>
              </div>
              <div className='flex mt-8 mb-8 items-center justify-center '>
                <img className='w-[220px]' src={LineDivider} alt='' />
                <h6 className='text-lg font-lexend text-[#161642] font-bold leading-7 px-4'>
                  OR
                </h6>
                <img className='w-[220px]' src={LineDivider} alt='' />
              </div>
              <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={onSubmit}
              >
                {(props) => (
                  <Form className='space-y-4 md:space-y-6' action='#'>
                    <div>
                      <label
                        for='email'
                        className='block mb-2 text-base font-normal text-[#404040] font-inter leading-7'
                      >
                        Email
                      </label>
                      <Field
                        type='email'
                        name='email'
                        id='email'
                        className=' border-1 border-[#634AF9] text-[#c0c0c0] sm:text-sm  rounded-md leading-5 font-normal font-inter  block w-full p-2.5'
                        placeholder='johnsmith@example.com'
                        required=''
                        // value={email}
                        // onChange={(e) => {
                        //   setEmail(e.target.value);
                        // }}
                      />
                      <ErrorMessage
                        name='email'
                        component='div'
                        className='text-red-500 text-xs font-inter'
                      />
                    </div>
                    <div>
                      <label
                        for='password'
                        className='block mb-2 text-base font-normal text-[#404040] font-inter leading-7  '
                      >
                        Password
                      </label>

                      <div className='relative'>
                        <Field
                          type={password ? "text" : "password"}
                          name='password'
                          id='password'
                          placeholder='Enter your password'
                          className='border-1 border-[#634AF9]  text-[#C0C0C0] sm:text-sm rounded-md leading-5 font-normal font-inter block w-full p-2.5'
                          required=''
                          // value={showpassword}
                          // onChange={(e) => {
                          //   setShowpassword(e.target.value);
                          // }}
                        />
                        <ErrorMessage
                          name='password'
                          component='div'
                          className='text-red-500 text-xs font-inter'
                        />
                        <button
                          type='button'
                          onClick={toggleShowPassword}
                          className='absolute inset-y-0 right-0 flex items-center pr-2 focus:outline-none text-[#404040]'
                        >
                          <FontAwesomeIcon
                            icon={password ? faEye : faEyeSlash}
                          />
                        </button>
                      </div>
                    </div>
                    <div className='flex items-center justify-between'>
                      <div className='flex items-start'>
                        <div className='flex items-center h-5'>
                          <input
                            id='remember'
                            aria-describedby='remember'
                            type='checkbox'
                            className='w-4 h-4 border border-[#c0c0c0] rounded '
                            required=''
                          />
                        </div>
                        <div class='ml-3 text-sm'>
                          <label
                            for='remember'
                            className='text-base font-normal text-[#818181] font-inter leading-7'
                          >
                            Remember me
                          </label>
                        </div>
                      </div>
                      <a
                        href='/forgetpassword'
                        className='text-sm font-normal text-[#634AF9] font-inter leading-7 underline '
                      >
                        Forgot your password?
                      </a>
                    </div>
                    <button
                      type='submit'
                      disabled={props.isSubmitting}
                      className='w-full text-white bg-[#634AF9] font-medium rounded-md text-sm px-5 py-2.5 text-center font-inter'
                    >
                      Log In
                    </button>
                    <p className='text-base font-normal text-[#161642] font-inter leading-7'>
                      Don’t have an account?{" "}
                      <a
                        href='/signup'
                        className='text-base font-bold text-[#161642] font-inter leading-7'
                      >
                        Sign Up
                      </a>
                    </p>
                  </Form>
                )}
              </Formik>
            </div>
          </div>
        </div>
      </div>
      <div className='flex flex-col 	items-center justify-center  py-8   rounded-l-lg'>
        <div className='text-center'>
          <div className='w-2/3 mx-auto mb-8 mt-4'>
            <h2 className='text-[#fff] font-bold font-lexend leading-9 text-3xl mb-6'>
              The simplest way to manage your workspace.
            </h2>
            <p className='text-[#fff] font-inter font-normal leading-6 text-base'>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint velit officia consequat duis.
            </p>
          </div>
          <div className='pl-12 pt-8'>
            <img
              className='w-full h-full'
              src={DashboardSideImg}
              alt='DashboardSideImg'
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
