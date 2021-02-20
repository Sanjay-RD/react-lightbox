import React from "react";

import one from "../images/one.jpg";
import two from "../images/two.jpeg";

const MainImage = () => {
  return (
    <div style={container}>
      <img src={one} alt="" style={mainImage} />
    </div>
  );
};

const container = {
  width: "510px",
};

const mainImage = {
  width: "100%",
  height: "345px",
  objectFit: "cover",
  borderRadius: "3px",
};

export default MainImage;
