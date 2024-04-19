import { useState } from "react";
import SwiperCore from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import { MovieCard, WithTrending } from "./../components/MovieCard/MovieCard";
import { Link } from "react-router-dom";

SwiperCore.use([Navigation, Pagination]);

const MovieSlider = ({ type, heading, data }) => {
  const TrendingMovieCard = WithTrending(MovieCard);

  if (!data) return;
  const movies = data;

  return (
    <div className={`mb-8 z-50 ${type == "trending" && "md:my-16"} relative`}>
      <h4 className="mb-3 text-[20px] text-[#e5e5e5] z-50">{heading}</h4>
      <Swiper
        slidesPerView={"auto"}
        spaceBetween={16}
        // slidesPerGroup={1}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Navigation]}
        // onResize={handleResize}
        // className="mySwiper flex overflow-visibleF"
      >
        <div>
          {movies.map(
            (movie, index) =>
              movie?.poster_path && (
                <SwiperSlide
                  key={movie.id}
                  className={`${
                    type === "trending" ? "!w-52" : "!w-28 md:!w-36"
                  } cursor-pointer flex-grow-0 flex-shrink-0 overflow-hidden rounded`}
                >
                  <Link to={`/movieDetail/${movie.id}`}>
                    {type === "trending" ? (
                      <TrendingMovieCard
                        index={index + 1}
                        posterPath={movie.poster_path}
                      />
                    ) : (
                      <MovieCard posterPath={movie.poster_path} />
                    )}
                  </Link>
                </SwiperSlide>
              )
          )}
        </div>
      </Swiper>
    </div>
  );
};

export default MovieSlider;
