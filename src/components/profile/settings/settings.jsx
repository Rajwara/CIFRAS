import React from 'react';

import RemoveIcon from "../../../assets/images/invoice/removeicon.svg";
import PlusIcongray from "../../../assets/images/invoice/plusicongray.svg";
import UploadIcon from "../../../assets/images/profile/uploadicon.svg";
import NameFieldIcon from "../../../assets/images/profile/namefieldicon.svg";
import EmailFieldIcon from "../../../assets/images/profile/emailfieldicon.svg";
import { Dropdown } from "flowbite-react";

import { Tabs } from "flowbite-react";
import { HiAdjustments, HiClipboardList, HiUserCircle } from "react-icons/hi";
import { MdDashboard } from "react-icons/md";
import Mydetails from './mydetails/mydetails';
import Myprofile from './myprofile/myprofile';
import Password from './password/password';



const Settings = () => {



  return (
    <div className="  border border-[#ebebeb] bg-white  rounded py-28 pr-24 pl-6 items-center">
      <h2 className="font-rubik font-bold text-[#404040] text-2xl leading-9 ml-16">
        Account Settings
      </h2>

      <div className="mt-10 px-8 font-rubik">
        <Tabs aria-label="Default tabs" style="default">
          <Tabs.Item active title="My Details">
           <Mydetails/>
          </Tabs.Item>
          <Tabs.Item title="Profile" >
         <Myprofile/>
          </Tabs.Item>
          <Tabs.Item title="Password" >
            <Password/>
            
          </Tabs.Item>
      
        </Tabs>
      </div>
    </div>
  );
};

export default Settings;
