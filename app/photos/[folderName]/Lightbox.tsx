"use client";

import CldImage from "../cloudImage";
import * as React from "react";
import Lightbox from "yet-another-react-lightbox";
import Download from "yet-another-react-lightbox/plugins/download";
import Masonry from "react-layout-masonry";
import Image from "next/image";

import "yet-another-react-lightbox/styles.css";

export default function LightboxComponent({
  result,
  imageUrls,
}: {
  result?: any;
  imageUrls?: string[];
}) {
  const [open, setOpen] = React.useState(false);
  const [currentIndex, setCurrentIndex] = React.useState(0);

  const slides = imageUrls?.map((imageUrl: string) => ({
    src: imageUrl,
    downloadUrl: imageUrl,
  }));

  const openLightbox = (index: number) => {
    setCurrentIndex(index);
    setOpen(true);
  };

  return (
    <>
      <Masonry columns={{ 640: 1, 768: 2, 1024: 3, 1280: 4 }} gap={4}>
        {imageUrls?.map((imageUrl: string, index: number) => (
          <div key={index} className="cursor-pointer">
            {/* <Image
              className=""
              alt={"test"}
              src={imageUrl}
              onClick={() => openLightbox(index)}
              width={600}
              height={600}
            /> */}

            <img
              className=""
              alt={"test"}
              src={imageUrl}
              onClick={() => openLightbox(index)}
              width={600}
              height={600}
            />
          </div>
        ))}
      </Masonry>
      <Lightbox
        open={open}
        close={() => setOpen(false)}
        slides={slides}
        index={currentIndex}
        plugins={[Download]}
        animation={{
          fade: 250,
          swipe: 200,
          navigation: 200,
          easing: {
            fade: "linear",
          },
        }}
      />
    </>
  );
}
