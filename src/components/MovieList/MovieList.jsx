import React from "react";
import { MovieCard } from "../MovieCard/MovieCard";
import { Link } from "react-router-dom";
import SwiperCore from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const MovieList = ({ moviesType, movies }) => {
  return (
    <div className="px-6 py-3">
      <h1 className="text-lg md:text-xl py-4 text-white">{moviesType}</h1>
      <Swiper
        slidesPerView={"auto"}
        spaceBetween={50}
        // slidesPerGroup={1}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Navigation]}
        // onResize={handleResize}
        // className="mySwiper flex overflow-visibleF"
      >
        {movies?.map((movie) => {
          return (
            <Link to={`/movieDetail/${movie.id}`}>
              <SwiperSlide
                key={movie.id}
                className={`sm:!w-[50%] md:!w-[40%] xl:!w-[30%] cursor-pointer flex-grow-0 flex-shrink-0 overflow-hidden rounded`}
              >
                <Link to={`/movieDetail/${movie.id}`}>
                  <MovieCard posterPath={movie.poster_path} />
                </Link>
              </SwiperSlide>
            </Link>
          );
        })}
      </Swiper>
    </div>
  );
};

export default MovieList;
