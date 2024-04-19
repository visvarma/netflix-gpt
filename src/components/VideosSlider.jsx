import React from "react";
import SwiperCore from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const VideosSlider = ({ movieVideos, movieTitle }) => {
  if (!movieVideos?.length) return null;
  return (
    <div className="!mb-12 sm:-mt-14 xl:-mt-52 relative z-20 ">
      <h2 className="mt-10 mb-5 text-2xl font-bold">
        Videos | <span className="text-slate-300 text-lg">{movieTitle}</span>
      </h2>
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
        {movieVideos?.slice(0, 5).map((video) => {
          return (
            <SwiperSlide
              key={video.id}
              className={`sm:!w-[50%] md:!w-[40%] xl:!w-[30%] cursor-pointer flex-grow-0 flex-shrink-0 overflow-hidden rounded`}
            >
              <div key={video.key} className="snap-item shrink-0 aspect-video">
                <iframe
                  frameborder="0"
                  className="w-full h-full object-cover "
                  src={
                    "https://www.youtube.com/embed/" +
                    video?.key +
                    "?controls=0&rel=0&autoplay=0&mute=1&controls=0&modestbranding"
                  }
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                ></iframe>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default VideosSlider;
