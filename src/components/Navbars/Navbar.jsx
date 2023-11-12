import React, { useState } from "react";
import refreshIcon from "../../assets/img/refresh@2x.png";
import dots from "../../assets/img/dots.png";
import cross from "../../assets/img/close.png";
import informationIcon from "../../assets/img/information-circle@2x.png";
import search from "../../assets/img/search@2x.png";
import Datepicker from "react-tailwindcss-datepicker";

import { CiMenuBurger } from "react-icons/ci";

export const Navbar = (e) => {
  const [value, setValue] = useState({
    startDate: new Date(),
    endDate: new Date().setMonth(11),
  });
  const handleValueChange = (newValue) => {
    console.log("newValue:", newValue);
    setValue(newValue);
  };
  return (
    <section className="w-full">
      <div className="flex w-full gap-y-2 flex-wrap  bg-[#F2F2F2] py-1 px-2 lg:justify-between ">
        <div className="flex flex-wrap  items-center">
          {/* // side bar launcher button  */}
          <span className="sidebar_launcher" onClick={() => e.setSidebar(true)}>
            <CiMenuBurger className="icon" />
          </span>
          {/* //////////////////////// */}

          <h4 className="text-[#3F3F3F] ps-1.5 text-xl xl:text-[22px] font-bold">
            Ad sets
          </h4>
          <div className="min-[800px]:ps-4">
            <select
              id="countries"
              class=" max-[550px]:max-w-full max-[550px]:w-[100%]   bg-white border border-[#CECECE] text-[#3F3F3F] text-sm rounded-lg focus:outline-none p-2"
            >
              <option selected>Real Estate Clients 1 (1333892298299..)</option>
              <option value="US">
                Real Estate Clients 2 (1333892298299..)
              </option>
              <option value="CA">
                Real Estate Clients 3 (1333892298299..)
              </option>
              <option value="FR">
                Real Estate Clients 4 (1333892298299..)
              </option>
              <option value="DE">
                Real Estate Clients 5 (1333892298299..)
              </option>
            </select>
          </div>
        </div>
        <div className="flex items-center flex-wrap gap-2">
          <p className="text-[#3F3F3F] font-semibold xl:text-[17px]">
            Updated just now
          </p>
          <div className="bg-[#E6E6E6] rounded-lg flex items-center justify-center py-2.5 px-3">
            <img
              src={refreshIcon}
              className="h-[22px] width: [20px] cursor-pointer"
              alt="refresh"
            />
          </div>
          <button className="bg-[#E6E6E6] text-[#3F3F3F] py-2 px-6 rounded-lg font-semibold xl:text-[17px]">
            Discard drafts
          </button>
          <button className="bg-[#1977F1] text-[#3F3F3F] py-2 px-6 rounded-lg text-white font-semibold xl:text-[17px]">
            Review and publish (2)
          </button>
          <div className="bg-[#E6E6E6] rounded-lg flex items-center justify-center py-2.5 px-3">
            <img
              src={dots}
              className="h-[21px] width:[20px] cursor-pointer"
              alt="refesh"
            />
          </div>
          <div className="flex items-center justify-center py-2.5 px-3">
            <img
              src={cross}
              className="h-[22px] width:[22px] cursor-pointer"
              alt="cross"
            />
          </div>
        </div>
      </div>
      <div className="bg-white ms-1 shadow-lg py-1 rounded-lg border-l-4 border-[#1977F1]">
        <div className="flex m-2 mx-3  items-start">
          <img
            src={informationIcon}
            className="h-[21.25px] width: [21.25px] mt-1"
            alt="refesh"
          />
          <div className="ps-4">
            <h6 className="font-bold p-0.5 xl:text-[16px]">
              Additional information
            </h6>
            <p className="2xl:text-[15px] font-semibold py-[10px]">
              Does your business, Conversions Digital Marketing, focus on
              politic or on advocating for issues of national importance? We'll
              use information to improve the quality of ads show to people.
            </p>
            <div className="flex gap-2">
              <button className="bg-[#F2F2F2] text-[#3F3F3F] rounded-lg py-2 px-3 text-[15px]">
                Yes
              </button>
              <button className="bg-[#F2F2F2] text-[#3F3F3F] rounded-lg py-2 px-3 text-[15px]">
                No
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="shadow-md w-full px-2 py-1  flex">
        <div className="flex flex-col items-center md:flex-row w-full gap-2">
          <div className="relative w-full w-[72%]">
            <input
              type="text"
              placeholder="Search and filter"
              className="text-[#707070] px-16 py-2 w-full shadow-lg mt-[1px] rounded-lg placeholder-[#707070] focus:outline-none"
            />
            <div className="absolutue top-0" />
            <img
              src={search}
              className="h-[21px] w-[21px]] absolute top-3 left-4"
              alt="img"
            />
          </div>
          <div className=" w-[28%]  ">
            <Datepicker value={value} onChange={handleValueChange} />
            {/* <select id="countries" class="max-[550px]:max-w-full max-[550px]:w-[100%]   bg-[#E6E6E6] border border-[#CECECE] text-[#3F3F3F] text-sm rounded-lg focus:outline-none p-2 ">
                            <option selected>Maximum: 1 Sep 2023 - 30 Oct 2023</option>
                            <option value="US">Maximum: 1 Sep 2023 - 30 Oct 2023z)</option>
                            <option value="CA">Maximum: 1 Sep 2023 - 30 Oct 2023)</option>
                            <option value="FR">Real Estate Clients 4 (1333892298299..)</option>
                            <option value="DE">Real Estate Clients 5 (1333892298299..)</option>
                        </select> */}
          </div>
        </div>
      </div>
    </section>
  );
};
