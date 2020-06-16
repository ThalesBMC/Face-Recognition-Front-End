import React from "react";
import Tilt from "react-tilt";
import "./Logo.css";
import edit from "./edit.png";
const Logo = () => {
  return (
    <div className="ma4 mt0">
      <Tilt
        className="Tilt br2 shadow-2"
        options={{ max: 35, perspective: 450 }}
        style={{ height: 250, width: 250 }}
      >
        <div className="Tilt-inner pa3">
          <img style={{ paddingTop: "5px" }} alt="logo" src={edit} />
        </div>
      </Tilt>
    </div>
  );
};
export default Logo;
