import React from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../../../features/userSlice";
import Nav, { avatar } from "../../partials/Nav";
import "./profile.scss";

function Profile() {
  const user = useSelector(selectUser);
  console.log(user);

  const avatarStyle = {
    width: "46px",
    heigth: "46px",
  };

  return (
    <div className="vh-100 w-100 d-flex justify-content-center align-items-center text-white">
      <Nav />

      <div className="content">
        <div className="login-container custom-bg-dark custom-border p-5">
          <h2>Profile</h2>
          <hr />
          <div className="header d-flex align-items-center">
            <img src={avatar} alt="" style={avatarStyle} />
            <div className="box ml-3">
              <small className="text-uppercase">User Email</small>
              <p>{user.email}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
