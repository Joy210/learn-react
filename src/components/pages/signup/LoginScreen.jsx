import React, { useRef, useState } from "react";
import { auth } from "../../../firebase";
import "./login.scss";

function LoginScreen() {
  const [isRegistration, setRegistration] = useState(true);

  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const registration = (e) => {
    e.preventDefault();

    auth
      .createUserWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value
      )
      .then((authUser) => {
        // console.log("User Created: ", authUser);
      })
      .catch((err) => alert(err.message));

    // emailRef = null;
    // passwordRef = null;
  };

  const signIn = (e) => {
    e.preventDefault();

    auth
      .signInWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value
      )
      .then((authUser) => {
        // console.log("User Login Successfully: ", authUser);
      })
      .catch((err) => alert(err.message));
  };

  return (
    <div className="vh-100 w-100 d-flex justify-content-center align-items-center text-center text-uppercase text-white ">
      <div className="content">
        <div className="login-container custom-bg-dark custom-border p-5">
          <form action="">
            <h2>{isRegistration ? "Sign UP" : "Sign In"}</h2>
            <div className="form-group mt-4">
              <input
                ref={emailRef}
                type="email"
                className="form-control"
                placeholder="Email address..."
              />
            </div>
            <div className="form-group">
              <input
                ref={passwordRef}
                type="password"
                className="form-control"
                placeholder="xxxx xxxx xxxx"
              />
            </div>
            <button
              className="btn btn-danger d-block w-100 text-uppercase"
              onClick={isRegistration ? registration : signIn}
            >
              {isRegistration ? "Sign UP" : "Sign In"}
            </button>

            {isRegistration ? (
              <small className="d-block mt-3 text-normal">
                Already have an account?
                <a
                  href=""
                  className="text-danger font-weight-bold ml-2"
                  onClick={(e) => {
                    e.preventDefault();
                    setRegistration(false);
                  }}
                >
                  Sign in
                </a>
              </small>
            ) : (
              <small className="d-block mt-3">
                Don't have any account.
                <a
                  href=""
                  className="text-danger font-weight-bold ml-2"
                  onClick={(e) => {
                    e.preventDefault();
                    setRegistration(true);
                  }}
                >
                  Sign up
                </a>
              </small>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}

export default LoginScreen;
