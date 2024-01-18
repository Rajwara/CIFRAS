import React,{useState} from "react";
import Logo from "../../assets/images/site-logo.svg";
import DashboardSideImg from "../../assets/images/loginandsignup/dashboard-side.svg";
import GoogleIcon from "../../assets/images/loginandsignup/google-icon.svg";
import AppleIcon from "../../assets/images/loginandsignup/apple-icon.svg";
import LineDivider from "../../assets/images/loginandsignup/line-divider.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { Formik , Field, ErrorMessage, Form } from "formik";
import * as Yup from 'yup'


const Signup = () => {

  const [showPassword, setShowPassword] = useState(false);

  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const toggleShowConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

const initialValues = {
  firstname : '',
  lastname : '',
  email : '',
  password : '',
  confirmpassword : '',

}

const signupSchema = Yup.object().shape({
  firstname : Yup.string().min(2, "It's too short").max(10, "It's too long").required('Please Enter you First Name'),
  lastname : Yup.string().min(2, "It's too short").max(10, "It's too long").required('Please Enter you Second Name'),
  email : Yup.string().email('Enter Valid Email').required('Email is Require'),
  password : Yup.string().min(8, 'Password is to Short').required('Password is require'),
  confirmPassword : Yup.string().oneOf([Yup.ref('password')],'Password not Match ').required('Please confirm Your Password')

})

const onSubmit = (values, props)=>{
  console.log('value', values);
  setTimeout(()=>{
    props.resetForm();
    props.setSubmitting(false);
    
  }, 2000)  
}


  return (
    <section className=" grid grid-cols-1 lg:grid-cols-2 py-12  ">
      <div className="flex flex-col justify-center items-center  w-4/5 pl-32 py-4">
        <div className=" ">
          <div>
            <a
              href="/"
              className="flex  mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
            >
              <img className="w-[290px] h-[110px] mr-2" src={Logo} alt="logo" />
            </a>
          </div>

          <div>
            <h1 className="font-rubik text-4xl font-bold leading-tight text[#000] mb-8 ">
              Join us and never miss a thing - SIGN UP!
            </h1>
            <p className="text-[#000] font-rubik font-normal leading-6 text-base mb-8">
              By signing up, you will gain access to exclusive content, special
              offers, and be the first to hear about exciting news and updates.
            </p>
            <div className="grid grid-cols-2 gap-4 ">
              <div className="flex gap-2 border border-[#C0C0C0] rounded-md px-2 py-2  align-middle items-center ">
                <img className="h-5 w-5" src={AppleIcon} alt="" />
                <p className="font-rubik font-normal text-lg text-[#404040] leading-7">
                  Log in With Apple
                </p>
              </div>
              <div className="flex gap-2 border border-[#C0C0C0] rounded-md px-2 py-2 align-middle items-center ">
                <img className="h-5 w-5 " src={GoogleIcon} alt="" />
                <p className="font-rubik font-normal text-lg text-[#404040] leading-7">
                  Log in With Google
                </p>
              </div>
            </div>
            <div className="flex mt-8 mb-8 items-center justify-center">
              <img className="w-[220px]" src={LineDivider} alt="" />
              <h6 className="text-lg font-rubik text-[#161642] font-bold leading-7 px-4">
                OR
              </h6>
              <img className="w-[220px]" src={LineDivider} alt="" />
            </div>
          </div>
        <Formik
        initialValues={initialValues}
        validationSchema={signupSchema}
        onSubmit={onSubmit}>
          {(props)=>(
              <Form className="space-y-4 md:space-y-6" action="#">
              <div className="flex gap-4">
                <div className=" w-full">
                  <label
                    for="firstname"
                    className="block mb-2 text-base font-normal text-[#404040] font-rubik leading-7"
                  >
                    First Name
                  </label>
                  <Field
                    type="text"
                    name="firstname"
                    id="firstname"
                    className=" border border-[#c0c0c0] text-[#c0c0c0] sm:text-sm  rounded-md leading-5 font-normal font-rubik  block w-full p-2.5"
                    placeholder="Enter your first name"
                    required=""
                  />
                  <ErrorMessage name="firstname" component="div" className="text-red-500 text-xs font-rubik"/>
                </div>
                <div className="w-full">
                  {" "}
                  <label
                    htmlFor="lastname"
                    className="block mb-2 text-base font-normal text-[#404040] font-rubik leading-7"
                  >
                    Last Name
                  </label>
                  <Field
                    type="text"
                    name="lastname"
                    id="lastname"
                    className=" border border-[#c0c0c0] text-[#c0c0c0] sm:text-sm  rounded-md leading-5 font-normal font-rubik  block w-full p-2.5"
                    placeholder="Enter your last name"
                    required=""
                  />
                  <ErrorMessage name="lastname" component="div" className="text-red-500 text-xs font-rubik"/>

                </div>
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-base font-normal text-[#404040] font-rubik leading-7"
                >
                  Email
                </label>
                <Field
                  type="email"
                  name="email"
                  id="email"
                  className=" border border-[#c0c0c0] text-[#c0c0c0] sm:text-sm  rounded-md leading-5 font-normal font-rubik  block w-full p-2.5"
                  placeholder="johnsmith@example.com"
                  required=""
                />
                  <ErrorMessage name="email" component="div" className="text-red-500 text-xs font-rubik"/>

              </div>
              <div className="flex gap-4">
                <div className="w-full">
                  {" "}
                  <label
                    htmlFor="password"
                    className="block mb-2 text-base font-normal text-[#404040] font-rubik leading-7"
                  >
                    Password
                  </label>
                 <div className="relative">
                 <Field
            type={showPassword ? 'text' : 'password'}
            name="password"
            id="password"
            placeholder="Enter your password"
            className="border border-[#C0C0C0] text-[#C0C0C0] sm:text-sm rounded-md leading-5 font-normal font-rubik block w-full p-2.5"
            required=""
          />
                  <ErrorMessage name="password" component="div" className="text-red-500 text-xs font-rubik"/>

          <button
            type="button"
            onClick={toggleShowPassword}
            className="absolute inset-y-0 right-0 flex items-center pr-2 focus:outline-none text-[#404040]"
          >
            <FontAwesomeIcon icon={showPassword ? faEye : faEyeSlash } />
          </button>
                 </div>
  
  
                </div>
                <div className="w-full">
                  <label
                    htmlFor="confirmPassword"
                    className="block mb-2 text-base font-normal text-[#404040] font-rubik leading-7"
                  >
                    Confirm Password
                  </label>
  
                  <div className="relative">
                  <Field
                    type={showConfirmPassword ? "text" : "password"}
                    name="confirmPassword"
                    id="confirmPassword"
                    placeholder="Enter your confirm password"
                    className="border border-[#C0C0C0] text-[#C0C0C0] sm:text-sm rounded-md leading-5 font-normal font-rubik block w-full p-2.5"
                    required=""
                  />
                  <ErrorMessage name="confirmPassword" component="div" className="text-red-500 text-xs font-rubik"/>

                  <button
                    type="button"
                    onClick={toggleShowConfirmPassword}
                    className="absolute inset-y-0 right-0 flex items-center pr-2 focus:outline-none text-[#404040]"
                  >
                    <FontAwesomeIcon
                      icon={showConfirmPassword ? faEye : faEyeSlash}
                    />
                  </button>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="remember"
                      aria-describedby="remember"
                      type="checkbox"
                      className="w-4 h-4 border border-[#c0c0c0] rounded  "
                      required=""
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label
                      htmlFor="remember"
                      className="text-base font-normal text-[#818181] font-rubik leading-7"
                    >
                      Remember me
                    </label>
                  </div>
                </div>
                <a
                  href="#"
                  className="text-sm font-normal text-[#634AF9] font-rubik leading-7 underline "
                >
                  Forgot your password?
                </a>
              </div>
              <button
              disabled = {props.isSubmitting}
                type="submit"
                className="w-full text-white bg-[#634AF9] font-medium rounded-md text-sm px-5 py-2.5 text-center font-rubik "
              >
                Sign up
              </button>
              <p className="text-base font-normal text-[#161642] font-rubik leading-7">
                Don’t have an account?{" "}
                <a
                  href="/"
                  className="text-base font-bold text-[#161642] font-rubik leading-7"
                >
                  Log in
                </a>
              </p>
            </Form>
          )
          }
        </Formik>
        </div>
      </div>
      <div class="flex flex-col  	items-center justify-center bg-[#fafafa] py-8   rounded-l-lg">
        <div className="text-center">
          <div className="w-2/3 mx-auto mb-8 mt-4">
            <h2 className="text-[#000] font-bold font-rubik leading-9 text-3xl mb-6">
              The simplest way to manage your workspace.
            </h2>
            <p className="text-[#000] font-rubik font-normal leading-6 text-base">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint velit officia consequat duis.
            </p>
          </div>
          <div className="pl-12 pt-8">
            <img
              className="w-full h-full"
              src={DashboardSideImg}
              alt="DashboardSideImg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Signup;
