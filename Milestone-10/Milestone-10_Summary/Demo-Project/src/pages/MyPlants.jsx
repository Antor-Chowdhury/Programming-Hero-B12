import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Link } from "react-router";

const MyPlants = () => {
  const [myPlants, setMyPlants] = useState([]);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    fetch(`http://localhost:3000/my-plants?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => setMyPlants(data))
      .catch((err) => console.log(err));
  }, [user?.email]);

  console.log(myPlants);

  return (
    <div className=" bg-[#e3f7da]  py-10">
      <div className="w-full md:w-[80%] mx-auto my-10">
        <div className="text-center">
          <h2 className="font-bold text-3xl text-green-700 mb-5  border-b-2 inline-block pb-1">
            My Plants
          </h2>
        </div>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>Name</th>
                <th>Description</th>
                <th>Price</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {myPlants?.map((plant) => (
                <tr>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle h-12 w-12">
                          <img
                            src={plant?.image}
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">{plant?.plantName}</div>
                      </div>
                    </div>
                  </td>
                  <td>
                    <p>{plant?.description}</p>
                  </td>
                  <td>{plant?.price}$</td>
                  <td>
                    <div className="flex items-center gap-3">
                      <button className="btn btn-error btn-xs">Delete</button>
                      <Link to={`/update-plants/${plant?._id}`}>
                        <button className="btn btn-primary btn-xs">Edit</button>
                      </Link>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyPlants;
