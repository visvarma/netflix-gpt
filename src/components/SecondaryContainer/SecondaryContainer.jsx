import React from "react";
import MovieList from "../MovieList/MovieList";
import { useSelector } from "react-redux";
import MovieSlider from "../MovieSlides";
import MovieSliderShimmer from "../ShimmerUI/MovieSliderShimmer";

const SecondaryContainer = ({ movieCategories }) => {
  const movies = useSelector((store) => store.movie);

  return (
    movies && (
      <div className="bg-black">
        <div className="mt-0 md:-mt-11 lg:-mt-12 xl:-mt-40  pl-4 sm:pl-6 md:pl-20 relative z-20">
          {movieCategories.map((movieCategory) => (
            <>
              {movies[movieCategory.key] ? (
                <MovieSlider
                  type={movieCategory.type}
                  heading={movieCategory.heading}
                  data={movies[movieCategory.key]}
                />
              ) : (
                <MovieSliderShimmer dimention={"w-28 md:w-36"} />
              )}
            </>
          ))}
        </div>
      </div>
    )
  );
};

export default SecondaryContainer;
