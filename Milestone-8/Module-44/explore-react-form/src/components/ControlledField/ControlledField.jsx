import React, { useState } from "react";

const ControlledField = () => {
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handlePasswordOnChange = (e) => {
    console.log(e.target.value);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="email" name="email" id="" placeholder="Email" required />
        <br />
        <input
          type="password"
          defaultValue={password}
          onChange={handlePasswordOnChange}
          name="password"
          id=""
          placeholder="Password"
          required
        />
        <br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default ControlledField;
