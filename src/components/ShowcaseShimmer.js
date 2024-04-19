const ShowcaseShimmer = () => {
  return (
    <div className={` mt-[-70px] aspect-video z-20`}>
      <div className="w-full h-full w-96F h-96F relative">
        <div className="overlay h-full w-full z-10 relative">
          {/* For Tablet and Desktop */}
          <div className="hidden md:flex w-full h-full items-center">
            <div className="px-4 md:px-20 w-full xl:w-1/2 pt-[0px]">
              <div className="bg-shimmer h-20 w-full mb-4"></div>
              <div className="bg-shimmer h-4 w-4/5 mb-2"></div>
              <div className="bg-shimmer h-4 w-3/4 mb-2"></div>
              <div className="bg-shimmer h-4 w-2/3 mb-2"></div>
              <div className="action flex gap-3 mt-4">
                <button className="bg-shimmer w-44 h-12 rounded"></button>
                <button className="bg-shimmer w-44 h-12 rounded"></button>
              </div>
            </div>
          </div>

          {/* For Mobile Onlye */}
          <div className="md:hidden  h-[40vh] bg-shimmer pb-8 md:pb-0 backdrop-blur-xl md:backdrop-blur-0 w-full flex items-centerF">
            <div className="px-4 md:px-12 w-full">
              <div className="relative h-[415px] max-w-80 m-auto  mt-[140px] rounded-lg overflow-hidden shadow-md"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowcaseShimmer;
