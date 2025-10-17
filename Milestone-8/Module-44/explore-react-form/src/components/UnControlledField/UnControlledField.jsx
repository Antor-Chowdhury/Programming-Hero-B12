import React, { useRef } from "react";

const UnControlledField = () => {
  const emailRef = useRef("");
  const passwordRef = useRef("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(emailRef.current.value);
    console.log(passwordRef.current.value);
    // console.log(e.target.email.value);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input ref={emailRef} type="email" name="email" placeholder="email" />
        <br />
        <input
          ref={passwordRef}
          type="password"
          name=""
          placeholder="password"
        />
        <br />
        <input type="submit" value="Submit " />
      </form>
    </div>
  );
};

export default UnControlledField;
