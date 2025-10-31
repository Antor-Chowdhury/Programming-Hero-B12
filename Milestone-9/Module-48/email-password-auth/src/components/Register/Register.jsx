import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "../../firebase/firebase.init";

const Register = () => {
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleRegister = (event) => {
    event.preventDefault();

    const email = event.target.email.value;
    const password = event.target.password.value;
    console.log("register clicked", email, password);

    // RegEx password checking one by one
    // const length6Pattern = /^.{6,}$/;
    // const casePattern = /^(?=.*[a-z])(?=.*[A-Z]).+$/;
    // const specialCharPattern = /^(?=.*[!@#$%^&*(),.?":{}|<>]).+$/;

    // if (!length6Pattern.test(password)) {
    //   console.log("password did not match.");
    //   setError("Password need to 6 character or more.");
    //   return;
    // } else if (!casePattern.test(password)) {
    //   setError("Password must have one uppercase and one lowercase character.");
    //   return;
    // } else if (!specialCharPattern.test(password)) {
    //   setError("Password must contain at least one special character.");
    //   return;
    // }

    // regEx pattern check with one string

    const passwordPattern =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*(),.?":{}|<>]).{6,}$/;

    if (!passwordPattern.test(password)) {
      setError(
        "Password must be at least 6 characters long, include one uppercase letter, one lowercase letter, and one special character."
      );
      return;
    }

    // reset status: success or error
    setError("");
    setSuccess(false);

    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        console.log("after creating a new user", result.user);
        setSuccess(true);
        event.target.reset();
      })
      .catch((error) => {
        console.log(error.message);
        setError(error.message);
      });
  };

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Register now!</h1>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <div className="card-body">
            <form onSubmit={handleRegister}>
              <fieldset className="fieldset">
                <label className="label">Email</label>
                <input
                  name="email"
                  type="email"
                  className="input"
                  placeholder="Email"
                />
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
              {success && (
                <p className="text-green-500 text-center">
                  Account created successfully
                </p>
              )}
              {error && <p className="text-red-500 text-center">{error}</p>}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
