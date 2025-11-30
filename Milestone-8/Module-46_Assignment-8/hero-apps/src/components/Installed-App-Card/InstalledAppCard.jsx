import React from "react";
import { FaRegTrashAlt } from "react-icons/fa";
import { HiOutlineDownload } from "react-icons/hi";
import { IoStar } from "react-icons/io5";

const InstalledAppCard = ({ app, handleRemoveApp }) => {
  const { id, image, title, downloads, ratingAvg } = app;

  return (
    <div className="flex justify-between items-center bg-white p-4 rounded-sm">
      <div className="flex gap-2 sm:gap-4">
        <figure className="min-w-14 w-14 sm:w-20 sm:h-20 rounded-sm">
          <img className="w-full h-full rounded-sm" src={image} alt="App" />
        </figure>
        <div className="flex flex-col flex-wrap justify-around">
          <h4 className="dark font-medium text-sm sm:text-xl">{title}</h4>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1.5 text-[#00D390] text-sm">
              <HiOutlineDownload className="text-xl"></HiOutlineDownload>
              <span>{downloads / 100000}M</span>
            </div>
            <div className="flex items-center gap-1.5 text-[#FF8811] text-sm">
              <IoStar className="text-xl"></IoStar>
              <span>{ratingAvg}</span>
            </div>
          </div>
        </div>
      </div>
      <button
        onClick={() => handleRemoveApp(id)}
        className="cursor-pointer bg-[#00D390] text-lg font-medium p-2 sm:py-2.5 sm:px-4 rounded-lg text-white"
      >
        <FaRegTrashAlt className="sm:hidden"></FaRegTrashAlt>
        <span className="hidden sm:block">Uninstall</span>
      </button>
    </div>
  );
};

export default InstalledAppCard;
