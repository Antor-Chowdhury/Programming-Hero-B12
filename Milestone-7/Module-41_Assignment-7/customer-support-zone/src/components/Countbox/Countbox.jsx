import React from "react";
import vector1 from "../../assets/vector1.png";

const Countbox = ({ data, resolvedTask }) => {
  // console.log(data);

  const inProgressData = data.filter(
    (element) => element.status === "In-Progress"
  );

  const resolvedData = resolvedTask;

  return (
    <div className="w-11/12 mx-auto grid md:grid-cols-2 gap-6 my-20">
      <div
        className={`md:h-[250px] px-10 py-10 md:py-16 border-2 flex justify-center items-center flex-col rounded-lg  bg-gradient-to-br from-[#632ee3] to-[#9f62f2] text-white  relative`}
      >
        <div>
          <img
            className="absolute object-cover left-0 top-0 bottom-0 h-full"
            src={vector1}
            alt=""
          />
        </div>
        <div className="flex flex-col justify-center items-center">
          <h2 className="text-2xl">In-Progress</h2>
          <p className="font-semibold text-5xl md:text-6xl">
            {inProgressData.length}
          </p>
        </div>
        <div>
          <img
            className="absolute right-0 top-0 bottom-0 h-full object-cover transform scale-x-[-1]"
            src={vector1}
            alt=""
          />
        </div>
      </div>
      <div
        className={`md:h-[250px] px-10 py-10 md:py-16 border-2 flex justify-center items-center flex-col rounded-lg  bg-gradient-to-br from-[#54cf68] to-[#00827a] text-white  relative`}
      >
        <div>
          <img
            className="absolute object-cover left-0 top-0 bottom-0 h-full"
            src={vector1}
            alt=""
          />
        </div>
        <div className="flex flex-col justify-center items-center">
          <h2 className="text-2xl">Resolved</h2>
          <p className="font-semibold text-5xl md:text-6xl">
            {resolvedData.length}
          </p>
        </div>
        <div>
          <img
            className="absolute right-0 top-0 bottom-0 h-full object-cover transform scale-x-[-1]"
            src={vector1}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Countbox;
