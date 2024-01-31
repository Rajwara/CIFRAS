import React from "react";
import ProfileBanner from "../../../assets/images/profile/profilebanner.svg";
import MainProfileImg from "../../../assets/images/profile/mainprofileimg.svg";
import MsgIcon from "../../../assets/images/profile/msgicon.svg";
import FollowIcon from "../../../assets/images/profile/followicon.svg";

import { Tabs } from 'flowbite-react';
import { HiAdjustments, HiClipboardList, HiUserCircle } from 'react-icons/hi';
import { MdDashboard } from 'react-icons/md';



const MyProfile = () => {
  return (
    <div className="  bg-white items-center">
      <div className="">
        <img className="w-full h-full" src={ProfileBanner} alt="" />
      </div>
      <div className="grid grid-cols-2 px-8 bg-white items-center  ">
        <div className="flex gap-10  ">
          <div className="mt-[-25px]">
            <img
              className="mt-[-40px] border-white border-4 shadow-lg 	 rounded-full"
              src={MainProfileImg}
              alt=""
            />
          </div>
          <div className="my-20">
            <h4 className="font-rubik font-bold text-[#404040] text-2xl	 leading-9">
              John Doe
            </h4>
            <p className="font-normal font-rubik text-[#404040] text-lg leading-9">
              @john.doe
            </p>

            <div className=" grid grid-cols-2 gap-5 mt-16 ">
              <div className="gap-5 flex ">
                <h4 className="font-rubik font-normal text-[#000] text-xl leading-9">
                  1.52k
                </h4>
                <p className="font-normal font-rubik text-[#404040] text-xl leading-9">
                  Followers
                </p>
              </div>
              <div className="flex gap-5">
                <h4 className="font-rubik font-normal text-[#000] text-xl leading-9">
                  205
                </h4>
                <p className="font-normal font-rubik text-[#404040] text-xl leading-9">
                  Following
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="items-center justify-end flex gap-5">
          <a href="/" className="">
            <button className="font-rubik flex py-[10px] px-[16px] bg-white border-[#C0C0C0] border-2 text-[#404040] rounded items-center gap-5 text-xl">
              <img src={MsgIcon} className="w-6 h-6  " alt="" />
              Message
            </button>
          </a>
          <a href="/">
            <button className="font-rubik  flex py-[10px] px-[16px] bg-[#634af9] border-[#634af9] border-2 text-white rounded items-center gap-5 text-xl">
              <img src={FollowIcon} className="w-6 h-6  " alt="" />
              Follow
            </button>
          </a>
        </div>
      </div>


      <div className='px-8 font-rubik'>
     <Tabs aria-label="Default tabs" style="default">
      <Tabs.Item  active title="Posts"  icon={HiUserCircle}
      
      >
     

<div class="grid grid-cols-2 md:grid-cols-4 gap-4 mt-20 pt-5">
    <div class="grid gap-4">
        <div>
            <img class="h-auto max-w-full rounded-lg mb-5" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg" alt=""/>
        </div>
        <div>
            <img class="h-auto max-w-full rounded-lg my-5" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-1.jpg" alt=""/>
        </div>
        <div>
            <img class="h-auto max-w-full rounded-lg my-5" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-2.jpg" alt=""/>
        </div>
    </div>
    <div class="grid gap-4">
        <div>
            <img class="h-auto max-w-full rounded-lg mb-5" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-3.jpg" alt=""/>
        </div>
        <div>
            <img class="h-auto max-w-full rounded-lg my-5" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-4.jpg" alt=""/>
        </div>
        <div>
            <img class="h-auto max-w-full rounded-lg my-5" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-5.jpg" alt=""/>
        </div>
    </div>
    <div class="grid gap-4">
        <div>
            <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-6.jpg" alt=""/>
        </div>
        <div>
            <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-7.jpg" alt=""/>
        </div>
        <div>
            <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-8.jpg" alt=""/>
        </div>
    </div>
    <div class="grid gap-4">
        <div>
            <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-9.jpg" alt=""/>
        </div>
        <div>
            <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-10.jpg" alt=""/>
        </div>
        <div>
            <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-11.jpg" alt=""/>
        </div>
    </div>
</div>

      </Tabs.Item>
      <Tabs.Item title="Dashboard"  icon={MdDashboard}>
      <h1 className='font-rubik text-xl font-medium text-gray-800 mt-20'>
       Those is Profile tab's associated content.
        Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to
        control the content visibility and styling.
       </h1>
      </Tabs.Item>
      <Tabs.Item title="Settings" icon={HiAdjustments}>
      <h1 className='font-rubik text-xl font-medium text-gray-800 mt-20'>
       I is Profile tab's associated content.
        Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to
        control the content visibility and styling.
       </h1>
      </Tabs.Item>
      <Tabs.Item title="Contacts" icon={HiClipboardList}>
      <h1 className='font-rubik text-xl font-medium text-gray-800 mt-20'>
       Thas is Profile tab's associated content.
        Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to
        control the content visibility and styling.
       </h1>
      </Tabs.Item>
     
    </Tabs>
   </div>

      
    </div>
  );
};

export default MyProfile;
