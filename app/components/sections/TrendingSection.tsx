"use client";
// Data
import data from "../../data.json";
import Movie from "../types/movies.types";
// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import TrendingMovieCard from "../ui/TrendingMovieCard";
import { useEffect, useState } from "react";
import SkeletonBox from "../SkeletonBox";
export default function TrendingSection({ title }: any) {
  const Movies: Movie[] = data;
  const trending = Movies.filter((movie) => movie.isTrending);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setInterval(() => {
      setIsLoading(false);
    }, 500);
  }, [title]);

  return (
    <section className="space-y-6 mb-10">
      <h2 className="text-[32px] tracking-[-0.5px] leading-[125%] font-light">
        Trending
      </h2>
      <Swiper
        slidesPerView={1.3}
        spaceBetween={20}
        breakpoints={{
          640: {
            slidesPerView: 2.3,
          },

          1024: {
            spaceBetween: 40,
          },
          1280: {
            slidesPerView: 2.6,
          },
        }}
        navigation={true}
        modules={[Navigation]}
      >
        {isLoading ? (
          <>
            {new Array(12).fill(0).map((_, id) => (
              <SwiperSlide key={id}>
                <SkeletonBox width={"100%"} height={'h-50'} borderRadius={10} />
              </SwiperSlide>
            ))}
          </>
        ) : (
          <>
            {trending.map((movie) => (
              <SwiperSlide key={movie.title}>
                <TrendingMovieCard
                  thumbnail={movie.thumbnail}
                  title={movie.title}
                  year={movie.year}
                  category={movie.category}
                  rating={movie.rating}
                />
              </SwiperSlide>
            ))}
          </>
        )}
      </Swiper>
    </section>
  );
}
