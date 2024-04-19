import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import SwiperCore from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { IMG_CDN_URL } from "../utils/constants";
import MovieSliderShimmer from "./ShimmerUI/MovieSliderShimmer";
import defaulImage from "../assets/DefaultCastImage.png";

const MovieDetailInfo = ({ movieDetails }) => {
  const getCrewNames = (role) => {
    return movieDetails?.credits?.crew
      .filter((crewData) => crewData.job === role)
      .map((crewData) => crewData.name)
      .join(", ");
  };

  const getGenre = () => {
    return movieDetails?.genres?.map((genre) => genre?.name).join(" | ");
  };

  const getCastDetails = () => {
    return movieDetails?.credits?.cast.map((cast, index) => {
      if (index < 12) {
        return (
          <SwiperSlide
            key={cast.id}
            className={`!w-28 md:!w-36 flex-grow-0 flex-shrink-0 overflow-hidden rounded relative`}
          >
            {cast.profile_path ? (
              <LazyLoadImage
                alt="Cast Image Card"
                src={`${IMG_CDN_URL}/w400${cast.profile_path}`}
              />
            ) : (
              <img src={defaulImage} className="h-auto object-contain" />
            )}
            <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black bg-opacity-50 text-white text-center p-2">
              {" "}
              {/* Overlay */}
              {cast.name}
            </div>
          </SwiperSlide>
        );
      }
    });
  };

  return (
    <div className="mt-20">
      <h2 className="text-2xl font-bold">More Details</h2>
      <div className="my-8 ">
        <p className="font-semibold text-xl">Genre</p>
        <p className="my-3 text-lg">{getGenre()} </p>
      </div>
      <div className="my-8">
        <p className="font-semibold text-xl">Directors</p>
        <p className="my-3 text-lg">{getCrewNames("Director")}</p>
      </div>
      {getCrewNames("Producer") && (
        <div className="my-8">
          <p className="font-semibold text-xl">Producers</p>
          <p className="my-3 text-lg">{getCrewNames("Producer")}</p>
        </div>
      )}
      <div className="my-8">
        {movieDetails ? (
          <>
            <p className="font-semibold text-xl">Starring</p>
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
              className="my-3"
            >
              {getCastDetails()}
            </Swiper>
          </>
        ) : (
          <MovieSliderShimmer dimention={"w-28 md:w-36"} />
        )}
      </div>
      {/* <div className="my-8">
        <p className="font-semibold text-xl">Directors</p>
        <p className="my-3 text-lg">{getCrewNames("Director")}</p>
      </div> */}
    </div>
  );
};

export default MovieDetailInfo;
