"use client";

import Image from "next/image";
import { FaStar } from "react-icons/fa";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { testimonials } from "@/utils/siteData";
import styles from "@/styles/Slider.module.css";

export default function TestimonialSlider() {
  return (
    <div className={styles.sliderWrap}>
      <Swiper
        modules={[Autoplay, Navigation, Pagination]}
        autoplay={{ delay: 3600, disableOnInteraction: false }}
        navigation
        pagination={{ clickable: true }}
        spaceBetween={24}
        slidesPerView={1}
        breakpoints={{
          760: { slidesPerView: 2 },
          1180: { slidesPerView: 2 }
        }}
      >
        {testimonials.map((item) => (
          <SwiperSlide key={item.name}>
            <article className={styles.testimonial}>
              <div className={styles.avatar}>
                <Image src="/images/customer.webp" alt={item.name} fill sizes="88px" />
              </div>
              <div className={styles.stars} aria-label="5 star rating">
                {Array.from({ length: 5 }, (_, index) => (
                  <FaStar key={index} />
                ))}
              </div>
              <p className={styles.review}>{item.review}</p>
              <h3 className={styles.name}>{item.name}</h3>
            </article>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
