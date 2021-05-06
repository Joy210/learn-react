import React from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../../../features/userSlice";
import Nav from "../../partials/Nav";
import "./profile.scss";

function Profile() {
  const user = useSelector(selectUser);
  console.log(user);

  return (
    <div className="vh-100 w-100 d-flex justify-content-center align-items-center text-white text-center">
      <Nav />

      <div className="content">
        <div className="login-container custom-bg-dark custom-border p-5">
          <div className="header d-flex align-items-center">
            <img src="" alt="" />
            <p>{user.email}</p>
          </div>
          <form action="">
            <h2>Edit Profile</h2>
            <div className="form-group mt-4">
              <input
                // ref={emailRef}
                type="email"
                className="form-control"
                placeholder="Email address..."
              />
            </div>
            <div className="form-group">
              <input
                // ref={passwordRef}
                type="password"
                className="form-control"
                placeholder="xxxx xxxx xxxx"
              />
            </div>
            <button className="btn btn-danger d-block w-100 text-uppercase">
              Update
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Profile;
