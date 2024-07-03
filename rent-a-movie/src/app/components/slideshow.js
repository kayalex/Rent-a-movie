import React, { useState, useEffect } from "react";
import Image from "next/image";
import one from "../../../public/one.jpg";
import two from "../../../public/two.jpg";
import three from "../../../public/three.jpg";

const images = [one, two, three];

const Slideshow = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className='slideshowContainer mx-auto '>
      {images.map((image, index) => (
        <div
          key={index}
          className={`slide ${index === currentIndex ? "active" : ""}`}
        >
          <Image
            src={image}
            alt={`Slide ${index}`}
            width={5000}
            height={5000}
            className='image'
          />
        </div>
      ))}
    </div>
  );
};

export default Slideshow;
