import React from "react";

import calender from "../../assets/calender.png";
import { toast } from "react-toastify";

const Card = ({ issue, setData }) => {
  // console.log(issue);
  // console.log(data);

  const handleClick = () => {
    // console.log("card clicked");
    // console.log(issue);

    toast.success("In Progress!");

    setData((element) =>
      element.map((task) =>
        task.id === issue.id && task.status === "Open"
          ? { ...task, status: "In-Progress" }
          : task
      )
    );
  };

  return (
    <div>
      {/* card */}
      <div
        className="bg-[#ffffff] p-4 rounded-sm cursor-pointer"
        onClick={handleClick}
      >
        <div className="flex justify-between items-center mb-2">
          <h3 className="font-medium md:text-lg">{issue.title}</h3>
          <button
            className={`px-3 py-1 rounded-3xl flex justify-between items-center gap-1 ${
              issue.status === "Open"
                ? "bg-[#B9F8CF] text-[#0B5E06]"
                : issue.status === "In-Progress"
                ? "bg-[#F8F3B9] text-[#9C7700]"
                : ""
            }`}
          >
            <span
              className={`h-[16px] w-[16px] rounded-full  ${
                issue.status === "Open"
                  ? "bg-[#02A53B]"
                  : issue.status === "In-Progress"
                  ? "bg-[#FEBB0C]"
                  : ""
              }`}
            ></span>
            {issue.status}
          </button>
        </div>
        <div>
          <p>{issue.description}</p>
        </div>
        <div className="flex justify-between items-center mt-4">
          <div className="font-bold md:font-medium text-xs md:text-sm flex gap-2 md:gap-4 items-center">
            <p className="text-[#627382]">{issue.id}</p>
            <p
              className={`${
                issue.priority === "LOW PRIORITY"
                  ? "text-[#02A53B]"
                  : issue.priority === "MEDIUM PRIORITY"
                  ? "text-[#FEBB0C]"
                  : "text-[#F83044]"
              } `}
            >
              {issue.priority}
            </p>
          </div>
          <div className="flex gap-2 md:gap-4 text-xs md:text-sm items-center font-semibold md:font-normal">
            <p>{issue.customer}</p>
            <p className="flex gap-2 items-center">
              <span>
                <img className="md:-6 md:h-6" src={calender} alt="" />
              </span>
              {issue.createdAt}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
