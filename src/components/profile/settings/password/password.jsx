import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import UploadIcon from "../../../../assets/images/profile/uploadicon.svg";

import ProfileBanner from "../../../..//assets/images/profile/profilebanner.svg";
import MainProfileImg from "../../../../assets/images/profile/mainprofileimg.svg";

const Password = () => {
  const [password, setPassword] = useState(false);
  const toggleShowPassword = () => {
    setPassword(!password);
  };

  return (
    <div>
      <div>
        <div className='justify-between'>
          <div className='my-[-18px]'>
            <img className='w-full h-full' src={ProfileBanner} alt='' />
          </div>
          <div className='grid grid-cols-2 px-8 bg-white items-center -mt-[30px]  md:mt-[-80px]'>
            <div className='flex gap-10  '>
              <div class='relative w-64'>
                <img
                  class='w-64 xl:h-64 rounded-full absolute'
                  src={MainProfileImg}
                  alt=''
                />

                <label
                  for='dropzone-file'
                  class='flex flex-col items-center justify-center w-full h-16 md:h-28 lg:h-40 xl:h-64 border-2 border-gray-300  rounded-full cursor-pointer bg-gray-50  hover:bg-gray-100 '
                >
                  <div class='z-10 h-2'>
                    <img src={UploadIcon} alt='' />
                  </div>

                  <div class='w-64 h-64 group hover:bg-gray-200 opacity-60 rounded-full absolute flex justify-center items-center cursor-pointer transition duration-500'>
                    <input id='dropzone-file' type='file' class='hidden' />
                  </div>
                </label>
              </div>
              <div className='my-24 md:my-40'>
                <h4 className='font-lexend font-bold text-[#404040] text-2xl	 leading-9'>
                  Olivia Rhye
                </h4>
                <p className='font-normal font-inter text-[#404040] text-lg leading-9'>
                  Update your photo and personal details.
                </p>
              </div>
            </div>
            <div className='items-center justify-end flex mt-[400px] md:mt-0 gap-5'>
              <a href='/' className=''>
                <button className='font-inter flex py-[10px] px-[16px] bg-white border-[#C0C0C0] border-2 text-[#404040] rounded items-center gap-5 text-xl'>
                  Cancel
                </button>
              </a>
              <a href='/'>
                <button className='font-inter  flex py-[10px] px-[16px] bg-[#634af9] border-[#634af9] border-2 text-white rounded items-center gap-5 text-xl'>
                  Update Password
                </button>
              </a>
            </div>
          </div>
        </div>

        <div className='px-8'>
          {/* Current Password form  */}
          <div className='flex flex-col md:flex-row   justify-between  mb-10'>
            <div className='md:w-[30%]'>
              <h4 className='font-lexend font-bold text-[#404040] text-xl leading-9'>
                Current Password
              </h4>
            </div>
            <div className='md:w-[60%]'>
              <div>
                <div className='relative'>
                  <input
                    type={password ? "text" : "password"}
                    name='password'
                    id='password'
                    placeholder='Enter your Current Password'
                    className=' rounded-e-lg bg-gray-50 border border-gray-300 font-normal font-inter text-[#404040]  focus:ring-blue-500 focus:border-blue-500  flex-1 min-w-0  text-base  border-1  sm:text-sm rounded-md leading-5  block w-full p-2.5'
                    required=''
                  />
                  <button
                    type='button'
                    onClick={toggleShowPassword}
                    className='absolute inset-y-0 right-0 flex items-center pr-2 focus:outline-none text-[#404040]'
                  >
                    <FontAwesomeIcon icon={password ? faEye : faEyeSlash} />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* New Password form  */}
          <div className='flex flex-col md:flex-row justify-between  mb-10'>
            <div className='md:w-[30%]'>
              <h4 className='font-lexend font-bold text-[#404040] text-xl leading-9'>
                New Password
              </h4>
            </div>
            <div className='md:w-[60%]'>
              <div>
                <div className='relative'>
                  <input
                    type={password ? "text" : "password"}
                    name='password'
                    id='password'
                    placeholder='Enter your New Password'
                    className=' rounded-e-lg bg-gray-50 border border-gray-300 font-normal font-inter text-[#404040]  focus:ring-blue-500 focus:border-blue-500  flex-1 min-w-0  text-base  border-1  sm:text-sm rounded-md leading-5  block w-full p-2.5'
                    required=''
                  />
                  <button
                    type='button'
                    onClick={toggleShowPassword}
                    className='absolute inset-y-0 right-0 flex items-center pr-2 focus:outline-none text-[#404040]'
                  >
                    <FontAwesomeIcon icon={password ? faEye : faEyeSlash} />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Confirm Password form  */}
          <div className='flex flex-col md:flex-row justify-between  mb-10'>
            <div className='md:w-[30%]'>
              <h4 className='font-lexend font-bold text-[#404040] text-xl leading-9'>
                Confirm New Password
              </h4>
            </div>
            <div className='md:w-[60%]'>
              <div>
                <div className='relative'>
                  <input
                    type={password ? "text" : "password"}
                    name='password'
                    id='password'
                    placeholder='Confirm New Password '
                    className=' rounded-e-lg bg-gray-50 border border-gray-300 font-normal font-inter text-[#404040]  focus:ring-blue-500 focus:border-blue-500  flex-1 min-w-0  text-base  border-1  sm:text-sm rounded-md leading-5  block w-full p-2.5'
                    required=''
                  />
                  <button
                    type='button'
                    onClick={toggleShowPassword}
                    className='absolute inset-y-0 right-0 flex items-center pr-2 focus:outline-none text-[#404040]'
                  >
                    <FontAwesomeIcon icon={password ? faEye : faEyeSlash} />
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

export default Password;
