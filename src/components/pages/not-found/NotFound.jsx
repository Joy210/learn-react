import React from "react";
import { Link } from "react-router-dom";

const fontStyle = {
  fontSize: "150px",
  fontWeight: "bold",
};

function NotFound() {
  return (
    <div className="vh-100 w-100 d-flex justify-content-center align-items-center text-white text-center">
      <div className="content">
        <h1 className="text-warning" style={fontStyle}>
          404
        </h1>
        <h1>Opps! Page Not Found</h1>
        <Link to="/" className="btn text-dar mt-4 text-muted btn-warnin">
          Back To Home
        </Link>
      </div>
    </div>
  );
}

export default NotFound;
