import React from "react";

import one from "../images/one.jpg";
import two from "../images/two.jpeg";

const MainImage = () => {
  return (
    <div className="mainImage-container">
      <img src={one} alt="" className="mainImage" />
    </div>
  );
};

export default MainImage;
