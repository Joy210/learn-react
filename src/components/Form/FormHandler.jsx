import React, { useState } from "react";
import ReactColor from "../../ReactColor";

function FormHandler() {
  const [bgColor, setBgColor] = useState("#ffffff");
  const [textColor, setTextColor] = useState("#444444");

  const bgColorChange = (e) => {
    setBgColor(e.target.value);
  };

  const textColorChange = (e) => {
    setTextColor(e.target.value);
  };

  const handleChange = (e) => {};

  const submitHadnler = (e) => {
    e.preventDefault();
    console.log(e.target);
  };

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-5">
          <form
            action=""
            className="card card-body shadow-sm"
            onSubmit={submitHadnler}
          >
            <div className="form-group">
              <ReactColor
                title="Base Color"
                color={bgColor}
                onChange={bgColorChange}
                name="baseC"
              />
            </div>
            <div className="form-group">
              <ReactColor
                title="Text Color"
                color={textColor}
                onChange={textColorChange}
                name="baseT"
              />
            </div>

            <button className="btn btn-dark w-100">Save</button>
          </form>
        </div>
        <div className="col-7">
          <div style={{ background: bgColor, transition: "all 0.3s" }}>
            <div className="p-5">
              <h4 style={{ color: textColor, transition: "all 0.3s" }}>
                Lorem ipsum dolor sit amet.
              </h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FormHandler;
