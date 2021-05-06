/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useHistory, Link } from "react-router-dom";
import { selectUser } from "../../features/userSlice";
import { auth } from "../../firebase";
import "./Nav.css";

const logo = "https://bit.ly/3aBYy1P";
const avatar = "https://bit.ly/2QS8b5M";

function Nav() {
  const [show, handleShow] = useState(false);
  const history = useHistory();
  const user = useSelector(selectUser);

  const transitionNavbar = () => {
    if (window.scrollY > 100) {
      handleShow(true);
    } else {
      handleShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", transitionNavbar);

    return () => window.removeEventListener("scroll", transitionNavbar);
  }, []);

  return (
    <nav
      className={`navbar fixed-top navbar-expand-lg ${show && "navbar-dark"}`}
    >
      <a className="nav-logo" href="" onClick={() => history.push("/")}>
        <img src={logo} alt="" />
      </a>
      <ul className="navbar-nav ml-auto">
        <li className="nav-item active">
          <Link to="/" className="nav-link text-white  ">
            Home
          </Link>
        </li>
        <li className="nav-item active">
          <Link to="/profile" className="nav-link text-white ">
            Profile
          </Link>
        </li>
        <li className="nav-item active">
          <a
            className="nav-link text-white  nav-avatar"
            href=""
            onClick={() => auth.signOut()}
          >
            Logout
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
