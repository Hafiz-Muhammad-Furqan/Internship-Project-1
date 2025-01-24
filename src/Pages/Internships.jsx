import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Autoplay,
  EffectCoverflow,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import internships from "../Data/InternshipData";
import { Element } from "react-scroll";

const Internships = () => {
  const [filters, setFilters] = useState(false);
  const [selectedFilters, setSelectedFilters] = useState({
    company: "",
    location: "",
    duration: "",
    title: "",
  });

  const [filteredInternships, setFilteredInternships] = useState(internships);
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 1024);

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 1024);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  useEffect(() => {
    applyFilters();
  }, [selectedFilters]);

  const handleFilterChange = (e) => {
    setSelectedFilters({
      ...selectedFilters,
      [e.target.name]: e.target.value,
    });
  };

  const handleResetFilters = () => {
    setSelectedFilters({
      company: "",
      location: "",
      duration: "",
      title: "",
    });
  };

  const applyFilters = () => {
    let filteredData = internships.filter((internship) => {
      return (
        (selectedFilters.company === "" ||
          internship.company === selectedFilters.company) &&
        (selectedFilters.location === "" ||
          internship.location === selectedFilters.location) &&
        (selectedFilters.duration === "" ||
          internship.duration === selectedFilters.duration) &&
        (selectedFilters.title === "" ||
          internship.title === selectedFilters.title)
      );
    });

    setFilteredInternships(filteredData);
  };

  return (
    <Element name="internships">
      <div className="w-full h-[100dvh] flex items-center justify-center">
        <div className="w-full h-full max-w-[1000px] flex flex-col items-center justify-center gap-2 px-4 lg:px-0">
          <h1 className="text-black text-4xl lg:text-5xl font-bold text-center">
            Discover Amazing Internships
          </h1>
          <h5 className="text-gray-600 lg:text-xl font-semibold tracking-tight text-center">
            Explore various internship opportunities to kickstart your career.
          </h5>
          <button
            className="bg-[#1C6F33] p-2 text-white rounded-lg hover:bg-[#227b3b] my-4"
            onClick={() => setFilters(!filters)}
          >
            {filters ? "Hide Filters" : "Show Filters"}
          </button>

          <div
            className={`w-full flex-col lg:flex-row gap-3 items-start lg:items-center justify-center  transition-all duration-500 ease-in-out ${
              filters
                ? "flex opacity-100 scale-100 "
                : "opacity-0 scale-0  hidden"
            }`}
          >
            <select
              name="company"
              onChange={handleFilterChange}
              className="py-2 rounded-lg border-2 border-black font-semibold px-2 w-full"
            >
              <option value="">Company</option>
              {[...new Set(internships.map((item) => item.company))].map(
                (company, index) => (
                  <option key={index} value={company} className="font-semibold">
                    {company}
                  </option>
                )
              )}
            </select>
            <select
              name="location"
              onChange={handleFilterChange}
              className="py-2 rounded-lg border-2 border-black font-semibold px-2 w-full"
            >
              <option value="">Location</option>
              {[...new Set(internships.map((item) => item.location))].map(
                (location, index) => (
                  <option
                    key={index}
                    value={location}
                    className="font-semibold"
                  >
                    {location}
                  </option>
                )
              )}
            </select>
            <select
              name="duration"
              onChange={handleFilterChange}
              className="py-2 rounded-lg border-2 border-black font-semibold px-2 w-full"
            >
              <option value="">Duration</option>
              {[...new Set(internships.map((item) => item.duration))].map(
                (duration, index) => (
                  <option
                    key={index}
                    value={duration}
                    className="font-semibold"
                  >
                    {duration}
                  </option>
                )
              )}
            </select>
            <select
              name="title"
              onChange={handleFilterChange}
              className="py-2 rounded-lg border-2 border-black font-semibold px-2 w-full"
            >
              <option value="">Title</option>
              {[...new Set(internships.map((item) => item.title))].map(
                (title, index) => (
                  <option key={index} value={title} className="font-semibold">
                    {title}
                  </option>
                )
              )}
            </select>
            <button
              onClick={handleResetFilters}
              className="p-2 bg-green-800 rounded-xl text-white hover:bg-green-700 w-full"
            >
              Reset Filters
            </button>
          </div>

          <div className="w-full py-5">
            {filteredInternships.length > 0 ? (
              <Swiper
                modules={[Navigation, Pagination, Autoplay, EffectCoverflow]}
                effect="coverflow"
                grabCursor={true}
                centeredSlides={true}
                slidesPerView="auto"
                coverflowEffect={{
                  rotate: 50,
                  stretch: 0,
                  depth: 100,
                  modifier: 1,
                  slideShadows: true,
                }}
                autoplay={{ delay: 3000 }}
                navigation={isLargeScreen}
                className="w-full"
              >
                {filteredInternships.map((internship, index) => (
                  <SwiperSlide key={index} className="max-w-[350px]">
                    <div className="bg-white rounded-xl overflow-hidden shadow-lg border border-gray-300">
                      <div className="p-4">
                        <h3 className="text-2xl font-bold text-black">
                          {internship.title}
                        </h3>
                        <p className="text-gray-600 text-lg font-semibold">
                          {internship.company}
                        </p>
                        <p className="text-gray-600 font-medium">
                          {internship.duration} | {internship.location}
                        </p>
                        <p className="text-base text-gray-900 mt-2 tracking-tight leading-5 font-medium">
                          {internship.description}
                        </p>
                        <button className="p-2 bg-[#1C6F33] rounded-lg text-white mt-2 text-sm">
                          Apply Now
                        </button>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            ) : (
              <p className="text-center text-lg font-semibold text-red-600">
                No internships match your filters.
              </p>
            )}
          </div>
        </div>
      </div>
    </Element>
  );
};

export default Internships;
