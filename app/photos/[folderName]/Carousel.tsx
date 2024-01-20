"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { CldImage } from "next-cloudinary";

export default function Carousel({ result }: { result: any }) {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={3}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
    >
      {result.resources.map((image: any) => (
        <SwiperSlide key={image.public_id}>
          <CldImage
            alt="Picture of the author"
            src={image.public_id}
            width={800}
            height={800}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
