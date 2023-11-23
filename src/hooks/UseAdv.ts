import { useState, useEffect } from "react";

export function UseAdv(images: Array<string>, className = "") {
  const [activeImage, setActiveImage] = useState<number>(0);
  const domElement = document.getElementsByClassName(className)[0];

  useEffect(() => {
    const timer = setInterval(() => {
      domElement?.classList.remove("anim");
      setActiveImage((prev) => prev + 1);
    }, 7000);

    domElement?.classList.add("anim");

    return () => {
      clearTimeout(timer);
    };
  }, [activeImage]);

  useEffect(() => {
    activeImage > images.length - 1
      ? setActiveImage(0)
      : 0 > activeImage
      ? setActiveImage(images.length - 1)
      : void 0;
  }, [activeImage, images]);

  const generateActiveImageMap = {
    right: () => setActiveImage((prev) => prev + 1),
    left: () => setActiveImage((prev) => prev - 1),
  };

  return { activeImage, generateActiveImageMap };
}
