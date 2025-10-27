import { GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "../firebase/firebase.config";

const googleProvider = new GoogleAuthProvider();

const AnotherLogin = () => {
  const [user, setUser] = useState(null);

  const handleSignIn = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        console.log(result.user);
        setUser(result.user);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        console.log("sign out successful");
        setUser(null);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <h2>Login Recap</h2>
      {user ? (
        <button onClick={handleSignOut}>Sign Out</button>
      ) : (
        <button onClick={handleSignIn}>Sign In</button>
      )}

      {user && (
        <div>
          <h3>{user.displayName}</h3>
          <h4>{user.email}</h4>
        </div>
      )}
    </div>
  );
};

export default AnotherLogin;
