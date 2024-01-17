import React from "react";
import Logo from "../../assets/images/site-logo.svg";
import DashboardSideImg from "../../assets/images/loginandsignup/dashboard-side.svg";
import GoogleIcon from "../../assets/images/loginandsignup/google-icon.svg"
import AppleIcon from "../../assets/images/loginandsignup/apple-icon.svg"
import LineDivider from '../../assets/images/loginandsignup/line-divider.svg'

const login = () => {
  return (
    <section className=" grid grid-cols-1 lg:grid-cols-2 py-12  ">
      <div className="flex flex-col justify-center items-center  w-4/5 pl-32 py-4">
        <div className=" ">
          <div>
            <a
              href="#"
              class="flex  mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
            >
              <img className="w-[290px] h-[110px] mr-2" src={Logo} alt="logo" />
            </a>
          </div>
          
          <div>
          <h1 className="font-rubik text-4xl font-bold leading-tight text[#000] mb-8 ">
              Welcome back! Please log in to continue.
            </h1>
            <p className="text-[#000] font-rubik font-normal leading-6 text-base mb-8">
              By signing up, you will gain access to exclusive content, special
              offers, and be the first to hear about exciting news and updates.
            </p>
            <div className="grid grid-cols-2 gap-4 ">
              <div className="flex gap-2 border border-[#C0C0C0] rounded-md px-2 py-2  align-middle items-center " >
                <img className="h-5 w-5" src={AppleIcon} alt="" />
                <p className="font-rubik font-normal text-lg text-[#404040] leading-7">Log in With Apple</p>
              </div>
              <div className="flex gap-2 border border-[#C0C0C0] rounded-md px-2 py-2 align-middle items-center " >
                <img className="h-5 w-5 " src={GoogleIcon} alt="" />
                <p className="font-rubik font-normal text-lg text-[#404040] leading-7">Log in With Google</p>
              </div>
            </div>
            <div className="flex mt-8 mb-8 items-center justify-center ">
              <img className="w-[220px]" src={LineDivider} alt="" />
              <h6 className="text-lg font-rubik text-[#161642] font-bold leading-7 px-4">OR</h6>
              <img className="w-[220px]" src={LineDivider} alt="" />

            </div>
          </div>
            <form className="space-y-4 md:space-y-6" action="#">
              <div>
                <label
                  for="email"
                  className="block mb-2 text-base font-normal text-[#404040] font-rubik leading-7"
                >
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className=" border border-[#c0c0c0] text-[#c0c0c0] sm:text-sm  rounded-md leading-5 font-normal font-rubik  block w-full p-2.5"  
               placeholder="johnsmith@example.com"
                  required=""
                />
              </div>
              <div>
                <label
                  for="password"
                  className="block mb-2 text-base font-normal text-[#404040] font-rubik leading-7"
                >
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="•••••••••••"
                  className=" border border-[#c0c0c0] text-[#c0c0c0] sm:text-sm  rounded-md leading-5 font-normal font-rubik  block w-full p-2.5"  
               required=""
                />
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="remember"
                      aria-describedby="remember"
                      type="checkbox"
                      className="w-4 h-4 border border-[#c0c0c0] rounded "
                      required=""
                    />
                  </div>
                  <div class="ml-3 text-sm">
                    <label
                      for="remember"
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
                type="submit"
                className="w-full text-white bg-[#634AF9] font-medium rounded-md text-sm px-5 py-2.5 text-center "
              >
                Log In
              </button>
              <p className="text-base font-normal text-[#161642] font-rubik leading-7">
                Don’t have an account?{" "}
                <a
                  href="#"
                  className="text-base font-bold text-[#161642] font-rubik leading-7"
                >
                  Sign Up
                </a>
              </p>
            </form>
          </div>
        
      </div>
      <div className="flex flex-col  	items-center justify-center bg-[#fafafa] py-8   rounded-l-lg">
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

export default login;
