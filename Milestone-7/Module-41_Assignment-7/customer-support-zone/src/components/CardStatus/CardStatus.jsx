import React from "react";
import { toast } from "react-toastify";

const CardStatus = ({ taskStatus, resolvedTask, setData, setResolvedTask }) => {
  const handleTaskComplete = (tasks) => {
    setData((element) => element.filter((task) => task.id !== tasks.id));

    toast.success("Completed!");

    setResolvedTask((element) => [tasks, ...element]);
  };

  return (
    <div className="md:w-[20%]">
      <div>
        <h2 className="font-semibold text-3xl md:text-2xl text-[#34485A] mb-4">
          Task Status
        </h2>

        {taskStatus.length === 0 ? (
          <p className="text-[#627382]">
            Select a ticket to add to Task Status
          </p>
        ) : (
          taskStatus.map((task) => (
            <div key={task.id} className="bg-[#FFFFFF] p-4 rounded-sm mb-4">
              <h2 className="font-medium text-lg mb-4">{task.title}</h2>
              <button
                onClick={() => handleTaskComplete(task)}
                className="py-3 px-[125px] text-white bg-[#02a53b] rounded-sm w-full"
              >
                Complete
              </button>
            </div>
          ))
        )}
      </div>
      <div>
        <h2 className="font-semibold text-3xl md:text-2xl text-[#34485A] mt-9 mb-4">
          Resolved Task
        </h2>

        {resolvedTask.length === 0 ? (
          <p className="text-[#627382]">No resolved tasks yet.</p>
        ) : (
          resolvedTask.map((task) => (
            <div key={task.id} className="bg-[#FFFFFF] p-4 rounded-sm mb-4">
              <h2 className="font-medium text-lg mb-4">{task.title}</h2>
              <p className=" text-[#02a53b] text-xs ">Completed</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default CardStatus;
