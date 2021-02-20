import React, { useState } from "react";
import one from "../images/one.jpg";
import two from "../images/two.jpeg";
import three from "../images/three.jpg";
import four from "../images/four.jpeg";

const ImageListing = ({ onClick }) => {
  return (
    <div className="flex">
      <div className="box-img">
        <img
          src={one}
          alt=""
          className="lightbox hover-shadow"
          onClick={(e) => onClick(e)}
        />
      </div>
      <div className="box-img">
        <img
          src={three}
          alt=""
          className="lightbox hover-shadow"
          onClick={(e) => onClick(e)}
        />
      </div>
      <div className="box-img">
        <img
          src={two}
          alt=""
          className="lightbox hover-shadow"
          onClick={(e) => onClick(e)}
        />
      </div>
      <div className="box-img">
        <img
          src={four}
          alt=""
          className="lightbox hover-shadow"
          onClick={(e) => onClick(e)}
        />
      </div>
      <div className="box-img">
        <img
          src={one}
          alt=""
          className="lightbox hover-shadow"
          onClick={(e) => onClick(e)}
        />
      </div>
      <div className="box-img">
        <img
          src={three}
          alt=""
          className="lightbox hover-shadow"
          onClick={(e) => onClick(e)}
        />
      </div>
    </div>
  );
};

export default ImageListing;
