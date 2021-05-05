/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from "react";
import "./Nav.css";

const logo = "https://bit.ly/3aBYy1P";
const avatar = "https://bit.ly/2QS8b5M";

function Nav() {
  const [show, handleShow] = useState(false);

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
    <nav className={`navbar fixed-top ${show && "navbar-dark"}`}>
      <a className="nav-logo" href="#">
        <img src={logo} alt="" />
      </a>
      <a className="nav-avatar ml-auto" href="#">
        <img src={avatar} alt="" />
      </a>
    </nav>
  );
}

export default Nav;
