import {
  GithubAuthProvider,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { auth } from "../firebase/firebaseConfig";
import { useState } from "react";

function Login() {
  const [user, setUser] = useState(null);

  const googleProvider = new GoogleAuthProvider();
  const gitHubProvidr = new GithubAuthProvider();
  const handleGoogle = () => {
    signInWithPopup(auth, googleProvider)
      .then((res) => {
        console.log(res);
        setUser(res);
      })
      .catch((err) => console.log(err));
  };

  const handleGithub = () => {
    signInWithPopup(auth, gitHubProvidr)
      .then((res) => {
        setUser(res);
      })
      .catch((err) => console.log(err));
  };

  const handleSignOut = () => {
    signOut(auth)
    .then(setUser(null))
    .catch(err => console.log(err))
  }

  return (
    <div className="flex justify-center flex-col gap-5  items-center min-h-screen">
      {user && <img className="max-w-[150px] rounded-xl" src={user.user.photoURL} alt="user-photo" />}
      {user && <h3>Name :{user.user.displayName} </h3>}
      {user && <h3>Email :{user.user.email} </h3>}

      {user ? (
        <button className="btn btn-warning" onClick={handleSignOut}>Sign Out</button>
      ) : (
        <div className="flex f gap-5">
          <button
            className="btn btn-success text-white font-bold"
            onClick={handleGoogle}
          >
            Google sign in
          </button>
          <button
            className="btn btn-success text-white font-bold"
            onClick={handleGithub}
          >
            GitHub sign in
          </button>{" "}
        </div>
      )}
    </div>
  );
}

export default Login;
