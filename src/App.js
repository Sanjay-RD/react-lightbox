import React, { useState } from "react";
import "./App.css";

import BackgroundImage from "./components/BackgroundImage";
import ImageListing from "./components/ImageListing";
import MainImage from "./components/MainImage";

function App() {
  const [click, setClick] = useState(false);
  const [image, setImage] = useState("");

  const onClick = (e) => {
    setImage(e.target.currentSrc);
    setClick(!click);
  };

  const onClose = () => {
    setClick(false);
  };

  return (
    <div>
      <MainImage />
      <ImageListing onClick={onClick} />
      <div className={click ? "backgroundimage" : "normal"} onClick={onClose}>
        <BackgroundImage image={image} />
      </div>
    </div>
  );
}

export default App;
