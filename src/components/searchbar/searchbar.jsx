import React, { useEffect,useState  } from "react";

function Index() {
    const [isSearchVisible, setSearchVisible] = useState(false);

    const toggleSearch = () => {
      setSearchVisible(!isSearchVisible);
    };
  

  useEffect(() => {});
  const show_search_4 = (el) => {
    document
      .getElementById("div1_search_4")
      .classList.toggle("translate-x-full");
    const setting_search_4 = document.getElementById("setting_search_4");
    if (setting_search_4.classList.contains("block")) {
      setting_search_4.classList.remove("block");
      setting_search_4.classList.add("hidden");
    } else {
      setting_search_4.classList.remove("hidden");
      setting_search_4.classList.add("block");
    }
    const close_search_4 = document.getElementById("close_search_4");
    console.log(close_search_4.classList.contains("hidden"));
    if (!close_search_4.classList.contains("hidden")) {
      close_search_4.classList.remove("block");
      close_search_4.classList.add("hidden");
    } else {
      close_search_4.classList.remove("hidden");
      close_search_4.classList.add("block");
    }
  };
  return (
    <>
      <div className="py-0 px-0">
        <div>
        <div className="flex justify-between px-3 pb-5 border-b border-gray-100">
            <div className="flex items-center gap-2">
              
              <input
        type="text"
        name
        id
        placeholder="Search"
        className="font-inter font-normal block w-full p-3 ps-10 text-base text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"

        onClick={toggleSearch}
      />
            </div>
            <div className id="target_search_4">
              <div className="relative w-full">
                <button onClick={show_search_4}>
                 
                  <div id="close_search_4" className="hidden"></div>
                </button>
                <div
                  className=""
                  id="div1_search_4"
                >
                
                  
                
                </div>
              </div>
            </div>
          </div>


           {/* marked */}
          <div className="overflow-y-scroll h-[500px] hidden absolute w-[400px] bg-white p-4 rounded shadow-sm" style={{ display: isSearchVisible ? "block" : "none" }}>
           
          <div className="px-3 pt-4">
              <div>
                <p className="text-sm font-medium text-gray-800 font-inter">Users</p>
                <div className="flex pt-5 gap-3">
                  <div className>
                    <img
                      src="https://tuk-cdn.s3.amazonaws.com/can-uploader/Mask%20Group.png"
                      alt
                    />
                  </div>
                  <div>
                    <p className="text-xs font-medium text-gray-800 font-inter">
                      CNN News Report
                    </p>
                    <p className="text-xs text-gray-600 pt-0.5 w-[150px] font-inter">
                      News and communications
                    </p>
                  </div>
                </div>
                <div className="flex pt-5 gap-3">
                  <div className>
                    <img
                      src="https://tuk-cdn.s3.amazonaws.com/can-uploader/2.png"
                      alt
                    />
                  </div>
                  <div>
                    <p className="text-xs font-medium text-gray-800 font-inter">
                      Frankie Streich
                    </p>
                    <p className="text-xs text-gray-600 pt-0.5  w-[150px] font-inter">
                      Global Research Designer
                    </p>
                  </div>
                </div>
                <div className="flex pt-5 gap-3">
                  <div className>
                    <img
                      src="https://tuk-cdn.s3.amazonaws.com/can-uploader/4.png"
                      alt
                    />
                  </div>
                  <div>
                    <p className="text-xs font-medium text-gray-800 font-inter">
                      Jenny Wilson
                    </p>
                    <p className="text-xs text-gray-600 pt-0.5  w-[150px] font-inter">
                      Lead Quality Analyst
                    </p>
                  </div>
                </div>
                <div className="flex pt-5 gap-3">
                  <div className>
                    <img
                      src="https://tuk-cdn.s3.amazonaws.com/can-uploader/5.png"
                      alt
                    />
                  </div>
                  <div>
                    <p className="text-xs font-medium text-gray-800 font-inter" >
                      Arlene McCoy
                    </p>
                    <p className="text-xs text-gray-600 pt-0.5  w-[150px] font-inter">
                      Legacy Group Officer
                    </p>
                  </div>
                </div>
                <div className="flex pt-5 gap-3">
                  <div className>
                    <img
                      src="https://tuk-cdn.s3.amazonaws.com/can-uploader/3.png"
                      alt
                    />
                  </div>
                  <div>
                    <p className="text-xs font-medium text-gray-800 font-inter">
                      Sherri Gottlieb
                    </p>
                    <p className="text-xs text-gray-600 pt-0.5  w-[150px] font-inter">
                      Product Operations Manager
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>
        {`
  ::-webkit-scrollbar {
    width: 5px;
  }
  ::-webkit-scrollbar-track {
    background: #f1f1f1;
    border-radius: 20px;
  }
  ::-webkit-scrollbar-thumb {
    background: #e0e7ff;
    border-radius: 20px;
  }
  input:checked ~ .dot_search_4{
    transform: translateX(100%);
    background-color: #ffffff;
  }
  input:checked ~ .bg_search_4 {
    background-color: #4338ca;
  }

  input:checked ~ .dot1_search_4 {
    transform: translateX(100%);
    background-color: #ffffff;
  }
  input:checked ~ .bg1 {
    background-color: #4338ca;
  }

  input:checked ~ .dot2_search_4 {
    transform: translateX(100%);
    background-color: #ffffff;
  }
  input:checked ~ .bg2_search_4 {
    background-color: #4338ca;
  }

  input:checked ~ .dot3_search_4 {
    transform: translateX(100%);
    background-color: #ffffff;
  }
  input:checked ~ .bg3_search_4 {
    background-color: #4338ca;
  }

  input:checked ~ .dot4_search_4 {
    transform: translateX(100%);
    background-color: #ffffff;
  }
  input:checked ~ .bg4_search_4 {
    background-color: #4338ca;
  }
  input:checked ~ .dot5_search_4 {
    transform: translateX(100%);
    background-color: #ffffff;
  }
  input:checked ~ .bg5_search_4 {
    background-color: #4338ca;
  }
`}
      </style>
    </>
  );
}

export default Index;
