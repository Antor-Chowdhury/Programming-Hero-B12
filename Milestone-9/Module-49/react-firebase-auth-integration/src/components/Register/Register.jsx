// import { createUserWithEmailAndPassword } from "firebase/auth";

import React, { use } from "react";
import { Link } from "react-router";
import { AuthContext } from "../../contexts/AuthContext/AuthContext";

// import { auth } from "../../firebase/firebase.init";

const Register = () => {
  const { createUser } = use(AuthContext);

  const handleRegister = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    const name = event.target.name.value;
    console.log(email, password, name);

    createUser(email, password)
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  //   const handleRegister = (event) => {
  //     event.preventDefault();
  //     const name = event.target.name.value;
  //     const email = event.target.email.value;
  //     const password = event.target.password.value;

  //     console.log("form submitted", name, email, password);

  //     createUserWithEmailAndPassword(auth, email, password)
  //       .then((result) => {
  //         console.log(result.user);
  //       })
  //       .catch((error) => {
  //         console.log(error.message);
  //       });
  //   };

  return (
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl mx-auto mt-20">
      <div className="card-body">
        <h1 className="text-4xl font-bold">Please Register!</h1>
        <form onSubmit={handleRegister}>
          <fieldset className="fieldset">
            {/* name field */}
            <label className="label">Name</label>
            <input
              name="name"
              type="text"
              className="input"
              placeholder="Name"
            />

            {/* email field */}
            <label className="label">Email</label>
            <input
              name="email"
              type="email"
              className="input"
              placeholder="Email"
            />

            {/* password filed */}
            <label className="label">Password</label>
            <input
              name="password"
              type="password"
              className="input"
              placeholder="Password"
            />
            <div>
              <a className="link link-hover">Forgot password?</a>
            </div>
            <button className="btn btn-neutral mt-4">Register</button>
          </fieldset>
        </form>
        <p>
          Already have an account? Please{" "}
          <Link
            className="text-blue-500 font-medium hover:text-purple-600 underline"
            to={"/login"}
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
