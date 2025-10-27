import {
  GithubAuthProvider,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import React, { useState } from "react";
import { auth } from "../firebase/firebase.config";

const googleProvider = new GoogleAuthProvider();

const githubProvider = new GithubAuthProvider();
githubProvider.addScope("user:email");

const Login = () => {
  const [user, setUser] = useState(null);

  //   Sign In
  const handleGoogleSignIn = () => {
    // console.log("Google button clicked");
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        console.log(result.user);
        setUser(result.user);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  //   GitHub Sign In
  const handleGithubSignIn = () => {
    signInWithPopup(auth, githubProvider)
      .then((result) => {
        console.log(result.user);
        setUser(result.user);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  //   Sign Out
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        console.log("sing out done");
        setUser(null);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <h2>Please Login</h2>
      {/* <button onClick={handleGoogleSignIn}>Sign In With Google</button>
      <button onClick={handleSignOut}>Sign Out</button> */}

      {user ? (
        <button onClick={handleSignOut}>Sign Out</button>
      ) : (
        <>
          <button onClick={handleGoogleSignIn}>Sign In With Google</button>

          <button onClick={handleGithubSignIn}>Sign In with GitHub</button>
        </>
      )}

      {user && (
        <div>
          <h3>{user?.displayName}</h3>
          <h4>Email: {user.email}</h4>
          <img src={user.photoURL} alt="" />
        </div>
      )}
    </div>
  );
};

export default Login;
