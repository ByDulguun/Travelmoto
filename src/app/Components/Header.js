"use client";

import React, { useState, useEffect } from "react";

export const Header = () => {
  const images = [
    { src: "HeaderImg1.jpg" },
    { src: "HeaderImg2.jpg" },
    { src: "HeaderImg3.jpg" },
  ];
  const [currentImage, setCurrentImage] = useState(images[0]);

  useEffect(() => {
    const interval = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * images.length);
      setCurrentImage(images[randomIndex]);
    }, 1500);

    return () => clearInterval(interval);
  }, [images]);
  return (
    <header className="w-fit h-fit   ">
      <img src={currentImage.src} id="image" />

      <div className="h-full w-full absolute z-10 top-0 grid justify-center content-center gap-36">
        <div className="list-none flex w-full h-full  text-white text-sm font-normal justify-center gap-20">
          <li>HOME</li>
          <li>ABOUT US</li>
          <li>CONTUCT US</li>
          <li>HELP CENTER</li>
          
        </div>
        <div>
          <h1 className="text-6xl font-semibold text-white text-center">
            Sands of Gobi <br /> Gobi Desert, Mongolia
          </h1>
        </div>
        <div className="text-white text-center grid gap-6">
          <p className="text-2xl">FROM</p>
          <p className="text-2xl">€2.390</p>
        </div>
      </div>
    </header>
  );
};
