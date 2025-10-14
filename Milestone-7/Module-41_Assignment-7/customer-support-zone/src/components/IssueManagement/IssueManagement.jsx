import React, { use, useState } from "react";
import Card from "../Card/Card";
import Countbox from "../Countbox/Countbox";
import CardStatus from "../CardStatus/CardStatus";

const IssueManagement = ({ fetchPromise }) => {
  const initialData = use(fetchPromise);
  // console.log(initialData);

  const [data, setData] = useState(initialData);
  // console.log(data);

  const [resolvedTask, setResolvedTask] = useState([]);

  return (
    <>
      <Countbox data={data} resolvedTask={resolvedTask}></Countbox>

      <div className="flex flex-col md:flex-row w-11/12 mx-auto gap-8">
        <div className="md:w-[75%]">
          {/* Customer Issues */}
          <h2 className="font-semibold text-3xl md:text-2xl text-[#34485A] mb-4">
            Customer Tickets
          </h2>

          {/* Card Grid */}
          <div className="grid md:grid-cols-2 gap-3 md:gap-6">
            {data.map((issue) => (
              <Card
                key={issue.id}
                issue={issue}
                data={data}
                setData={setData}
              />
            ))}
          </div>
        </div>

        {/* card status */}
        <CardStatus
          taskStatus={data.filter((task) => task.status === "In-Progress")}
          resolvedTask={resolvedTask}
          setData={setData}
          setResolvedTask={setResolvedTask}
        ></CardStatus>
      </div>
    </>
  );
};

export default IssueManagement;
