import { useCallback, useEffect, useRef, useState } from "react";
import LightGallery from "lightgallery/react";
import lgZoom from "lightgallery/plugins/zoom";
import lgThumbnail from "lightgallery/plugins/thumbnail";
import gallery from "../data/gallery.json"

import React from "react";

export default function Carousel() {
  // const lightGalleryRef = useRef(null);
  // eslint-disable-next-line no-unused-vars
  const [galleryContainer, setGalleryContainer] = useState(null);
  const containerRef = useRef(null);

  const onInit = useCallback((detail) => {
    if (detail) {
      // lightGalleryRef.current = detail.instance;
      detail.instance.openGallery();
    }
  }, []);

  useEffect(() => {
    if (containerRef.current) {
      setGalleryContainer("aaa");
    }
  }, []);

  return (
    <div className="App ">
      <div>
        <h1 className="text-5xl text-black font-bold my-5">Our Clients</h1>
      </div>
      <div
        ref={containerRef}
        className="border-2 border-black rounded-2xl h-168 w-1/2 mx-auto text-right"
      ></div>
      <div>
        <LightGallery
          className="h-40"
          // eslint-disable-next-line react-hooks/refs
          container={containerRef.current}
          onInit={onInit}
          plugins={[lgZoom, lgThumbnail]}
          closable={false}
          showMaximizeIcon={true}
          slideDelay={400}
          thumbWidth={130}
          thumbHeight={"100px"}
          thumbMargin={6}
          appendSubHtmlTo={".lg-item"}
          dynamic={true}
          dynamicEl={gallery}
          hash={false}
          elementClassNames={"inline-gallery-container"}
        ></LightGallery>
      </div>
    </div>
  );
}
