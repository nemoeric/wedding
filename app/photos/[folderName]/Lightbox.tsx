"use client";

import CldImage from "../cloudImage";
import * as React from "react";
import Lightbox from "yet-another-react-lightbox";
import Download from "yet-another-react-lightbox/plugins/download";
import Masonry from "react-layout-masonry";

import "yet-another-react-lightbox/styles.css";

export default function LightboxComponent({ result }: { result: any }) {
  const [open, setOpen] = React.useState(false);
  const [currentIndex, setCurrentIndex] = React.useState(0);

  const slides = result.resources.map((image: any) => ({
    src: image.secure_url,
    downloadUrl: image.secure_url,
  }));

  const openLightbox = (index: number) => {
    setCurrentIndex(index);
    setOpen(true);
  };

  return (
    <>
      <Masonry columns={{ 640: 1, 768: 2, 1024: 3, 1280: 5 }} gap={3}>
        {result.resources.map((image: any, index: number) => (
          <div key={image.public_id} className="cursor-pointer">
            <CldImage
              alt="Picture of the author"
              src={image.public_id}
              onClick={() => openLightbox(index)}
              width={800}
              height={800}
            />
          </div>
        ))}
      </Masonry>

      {/* <div className="grid px-2 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
        {result.resources.map((image: any, index: number) => (
          <div key={image.public_id} className=" cursor-pointer">
            <CldImage
              alt="Picture of the author"
              src={image.public_id}
              onClick={() => openLightbox(index)}
              width={800}
              height={800}
            />
          </div>
        ))}
      </div> */}

      <Lightbox
        open={open}
        close={() => setOpen(false)}
        slides={slides}
        index={currentIndex}
        plugins={[Download]}
      />
    </>
  );
}
