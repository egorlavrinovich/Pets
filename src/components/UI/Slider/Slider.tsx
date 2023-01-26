import React, { useState, useEffect } from "react";
import Slider from "react-slick";

interface Image {
  id: number;
  url: string;
}

const ImageSlider: React.FC = () => {
  const [images, setImages] = useState<Image[]>([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/photos")
      .then((response) => response.json())
      .then((data) => setImages(data));
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="slider-container">
      <Slider {...settings}>
        {images.map((image) => (
          <div key={image.id}>
            <img src={image.url} alt={`Image ${image.id}`} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ImageSlider;
