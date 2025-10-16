import React from "react";
import { useLoaderData, useParams } from "react-router";

const UserDetails = () => {
  const user = useLoaderData();
  // console.log(user);

  const { userId } = useParams();
  console.log(userId);

  // const params = useParams();
  // console.log(params.userId);

  const { website, name } = user;

  return (
    <div>
      <h2>User Details Here</h2>
      <h3>Name: {name}</h3>
      <p>Website: {website}</p>
    </div>
  );
};

export default UserDetails;
