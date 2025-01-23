// import React from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/effect-coverflow";
// import "swiper/css/pagination";
// import {
//   EffectCoverflow,
//   Pagination,
//   Navigation,
//   Autoplay,
// } from "swiper/modules";

// const internships = [
//   {
//     title: "Web Developer Intern",
//     company: "Internship Pakistan",
//     duration: "3 Months",
//     location: "Karachi, Pakistan",
//     tag: "Success Stories",
//     description:
//       "Work on real-world web applications, learn modern frameworks, and gain experience in frontend and backend development.",
//   },
//   {
//     title: "Graphic Design Intern",
//     company: "Internship Pakistan",
//     duration: "6 Months",
//     location: "Lahore, Pakistan",
//     tag: "Reports",
//     description:
//       "Create visually stunning designs, work on branding, and enhance your creative skills in digital design tools.",
//   },
//   {
//     title: "Marketing Intern",
//     company: "Internship Pakistan",
//     duration: "3 Months",
//     location: "Islamabad, Pakistan",
//     tag: "Guides",
//     description:
//       "Develop marketing strategies, manage campaigns, and work on social media promotions to enhance brand awareness.",
//   },
//   {
//     title: "UI/UX Design Intern",
//     company: "Internship Pakistan",
//     duration: "4 Months",
//     location: "Karachi, Pakistan",
//     tag: "Design",
//     description:
//       "Design intuitive user experiences, conduct user research, and create engaging UI designs for digital products.",
//   },
//   {
//     title: "Software Engineering Intern",
//     company: "Internship Pakistan",
//     duration: "5 Months",
//     location: "Lahore, Pakistan",
//     tag: "Technology",
//     description:
//       "Develop scalable software solutions, work with databases, and improve coding skills with best practices.",
//   },
//   {
//     title: "Content Writing Intern",
//     company: "Internship Pakistan",
//     duration: "2 Months",
//     location: "Islamabad, Pakistan",
//     tag: "Creative",
//     description:
//       "Enhance writing skills, create engaging content, and learn SEO techniques to optimize web content.",
//   },
//   {
//     title: "AI & Machine Learning Intern",
//     company: "Internship Pakistan",
//     duration: "4 Months",
//     location: "Lahore, Pakistan",
//     tag: "AI",
//     description:
//       "Work on AI models, build intelligent applications, and explore deep learning frameworks.",
//   },
//   {
//     title: "SEO Intern",
//     company: "Internship Pakistan",
//     duration: "3 Months",
//     location: "Karachi, Pakistan",
//     tag: "Marketing",
//     description:
//       "Optimize websites for search engines, analyze performance, and implement SEO strategies.",
//   },
//   {
//     title: "Mobile App Development Intern",
//     company: "Internship Pakistan",
//     duration: "6 Months",
//     location: "Lahore, Pakistan",
//     tag: "Development",
//     description:
//       "Learn to build cross-platform mobile applications using modern frameworks like React Native or Flutter.",
//   },
//   {
//     title: "Network Administration Intern",
//     company: "Internship Pakistan",
//     duration: "4 Months",
//     location: "Islamabad, Pakistan",
//     tag: "IT",
//     description:
//       "Manage network security, configure hardware, and troubleshoot network-related issues.",
//   },
//   {
//     title: "Project Management Intern",
//     company: "Internship Pakistan",
//     duration: "5 Months",
//     location: "Karachi, Pakistan",
//     tag: "Management",
//     description:
//       "Plan, execute, and monitor projects while working with cross-functional teams.",
//   },
//   {
//     title: "Digital Marketing Intern",
//     company: "Internship Pakistan",
//     duration: "3 Months",
//     location: "Lahore, Pakistan",
//     tag: "Marketing",
//     description:
//       "Create marketing campaigns, analyze performance metrics, and boost brand visibility online.",
//   },
//   {
//     title: "Video Editing Intern",
//     company: "Internship Pakistan",
//     duration: "4 Months",
//     location: "Islamabad, Pakistan",
//     tag: "Media",
//     description:
//       "Edit and produce high-quality videos for social media, advertisements, and digital platforms.",
//   },
//   {
//     title: "Product Design Intern",
//     company: "Internship Pakistan",
//     duration: "6 Months",
//     location: "Karachi, Pakistan",
//     tag: "Design",
//     description:
//       "Design user-friendly products, conduct usability tests, and create prototypes for development.",
//   },
//   {
//     title: "Cloud Computing Intern",
//     company: "Internship Pakistan",
//     duration: "5 Months",
//     location: "Lahore, Pakistan",
//     tag: "Technology",
//     description:
//       "Work with cloud platforms like AWS, Azure, and Google Cloud to build and manage cloud-based solutions.",
//   },
//   {
//     title: "Business Development Intern",
//     company: "Internship Pakistan",
//     duration: "3 Months",
//     location: "Islamabad, Pakistan",
//     tag: "Business",
//     description:
//       "Identify business opportunities, develop partnerships, and help in company growth strategies.",
//   },
//   {
//     title: "Blockchain Intern",
//     company: "Internship Pakistan",
//     duration: "4 Months",
//     location: "Karachi, Pakistan",
//     tag: "Technology",
//     description:
//       "Explore blockchain development, work on smart contracts, and build decentralized applications.",
//   },
//   {
//     title: "Game Development Intern",
//     company: "Internship Pakistan",
//     duration: "6 Months",
//     location: "Lahore, Pakistan",
//     tag: "Development",
//     description:
//       "Create interactive games, work with Unity or Unreal Engine, and enhance game mechanics.",
//   },
//   {
//     title: "Cybersecurity Intern",
//     company: "Internship Pakistan",
//     duration: "5 Months",
//     location: "Islamabad, Pakistan",
//     tag: "Security",
//     description:
//       "Enhance security measures, conduct penetration testing, and protect digital assets from cyber threats.",
//   },
// ];

// const Internships = () => {
//   return (
//     <div className="min-h-screen w-full flex items-center justify-center bg-gray-100">
//       <div className="w-full max-w-4xl flex flex-col items-center justify-center gap-8 py-10 px-4 lg:px-0">
//         <h1 className="lg:text-5xl font-bold text-3xl text-gray-800 text-center">
//           Discover Amazing Internships
//         </h1>
//         <p className="lg:text-xl text-lg font-medium text-gray-600 text-center max-w-2xl">
//           Explore various internship opportunities to kickstart your career in
//           different fields.
//         </p>

//         {/* Swiper Enhanced Slider */}
//         <Swiper
//           effect="coverflow"
//           grabCursor={true}
//           centeredSlides={true}
//           slidesPerView={"auto"}
//           coverflowEffect={{ rotate: 30, stretch: 0, depth: 100, modifier: 1 }}
//           pagination={{ clickable: true }}
//           navigation
//           autoplay={{ delay: 3000, disableOnInteraction: false }}
//           modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
//           className="w-full"
//         >
//           {internships.map((internship, index) => (
//             <SwiperSlide
//               key={index}
//               className="max-w-sm min-h-60 bg-black border border-gray-200 rounded-lg shadow-md p-6 transition-transform duration-300 transform hover:scale-105"
//             >
//               <p className="mb-2 text-xs font-semibold text-white bg-green-500 px-2 py-1 rounded-full inline-block">
//                 {internship.tag}
//               </p>
//               <h5 className="mb-2 text-2xl font-bold text-white">
//                 {internship.title}
//               </h5>
//               <p className="mb-1 font-medium text-gray-200">
//                 {internship.company}
//               </p>
//               <p className="mb-1 font-medium text-gray-200">
//                 {internship.duration}
//               </p>
//               <p className="text-sm text-gray-200">{internship.location}</p>
//               <p className="text-base text-white mt-2">
//                 {internship.description}
//               </p>
//             </SwiperSlide>
//           ))}
//         </Swiper>
//       </div>
//     </div>
//   );
// };

// export default Internships;

import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import Select from "react-select";
import {
  EffectCoverflow,
  Pagination,
  Navigation,
  Autoplay,
} from "swiper/modules";

const internships = [
  {
    title: "Web Developer Intern",
    company: "Internship Pakistan",
    duration: "3 Months",
    location: "Karachi, Pakistan",
    tag: "Success Stories",
    description:
      "Work on real-world web applications, learn modern frameworks, and gain experience in frontend and backend development.",
  },
  {
    title: "Graphic Design Intern",
    company: "Internship Pakistan",
    duration: "6 Months",
    location: "Lahore, Pakistan",
    tag: "Reports",
    description:
      "Create visually stunning designs, work on branding, and enhance your creative skills in digital design tools.",
  },
  {
    title: "Marketing Intern",
    company: "Internship Pakistan",
    duration: "3 Months",
    location: "Islamabad, Pakistan",
    tag: "Guides",
    description:
      "Develop marketing strategies, manage campaigns, and work on social media promotions to enhance brand awareness.",
  },
];

const getUniqueOptions = (key) => {
  return [...new Set(internships.map((item) => item[key]))].map((value) => ({
    value: value.toLowerCase(),
    label: value,
  }));
};

const Internships = () => {
  const [toggle, setToggle] = useState(false);
  const [filters, setFilters] = useState({
    company: "",
    location: "",
    duration: "",
    title: "",
  });
  const [filteredInternships, setFilteredInternships] = useState(internships);

  const applyFilters = () => {
    setToggle(false);
    setFilteredInternships(
      internships.filter((internship) => {
        return (
          (!filters.company ||
            internship.company.toLowerCase().includes(filters.company)) &&
          (!filters.location ||
            internship.location.toLowerCase().includes(filters.location)) &&
          (!filters.duration ||
            internship.duration.toLowerCase().includes(filters.duration)) &&
          (!filters.title ||
            internship.title.toLowerCase().includes(filters.title))
        );
      })
    );
  };

  const handleChange = (selectedOption, field) => {
    setFilters({
      ...filters,
      [field]: selectedOption ? selectedOption.value : "",
    });
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-4xl flex flex-col items-center justify-center gap-8 py-10 px-4 lg:px-0 relative overflow-x-hidden">
        <h1 className="lg:text-5xl font-bold text-3xl text-gray-800 text-center">
          Discover Amazing Internships
        </h1>
        <p className="lg:text-xl text-lg font-medium text-gray-600 text-center max-w-2xl">
          Explore various internship opportunities to kickstart your career in
          different fields.
        </p>
        <div
          className="absolute  left-0 top-44 flex items-center justify-center gap-1 text-xl font-bold cursor-pointer"
          onClick={() => setToggle(!toggle)}
        >
          <i clasName="ri-equalizer-2-line"></i>
          <p>Filters</p>
        </div>
        {/* Modern Filter Section */}
        <div
          className={`flex gap-4  mb-6 flex-col absolute bg-black rounded-xl p-4 z-20 left-0 bottom-0 -translate-x-full transition-transform duration- ease-in-out ${
            toggle ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <Select
            options={getUniqueOptions("company")}
            placeholder=" Company"
            isClearable
            onChange={(selected) => handleChange(selected, "company")}
            className="w-48"
          />
          <Select
            options={getUniqueOptions("location")}
            placeholder=" Location"
            isClearable
            onChange={(selected) => handleChange(selected, "location")}
            className="w-48"
          />
          <Select
            options={getUniqueOptions("duration")}
            placeholder=" Duration"
            isClearable
            onChange={(selected) => handleChange(selected, "duration")}
            className="w-48"
          />
          <Select
            options={getUniqueOptions("title")}
            placeholder=" Title"
            isClearable
            onChange={(selected) => handleChange(selected, "title")}
            className="w-48"
          />
          <button
            onClick={applyFilters}
            className="bg-blue-500 text-white px-4 py-2 rounded-md"
          >
            Apply Filters
          </button>
        </div>

        {/* Swiper Enhanced Slider */}
        <Swiper
          effect="coverflow"
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          coverflowEffect={{ rotate: 30, stretch: 0, depth: 100, modifier: 1 }}
          pagination={{ clickable: true }}
          navigation
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
          className="w-full"
        >
          {filteredInternships.map((internship, index) => (
            <SwiperSlide
              key={index}
              className="max-w-sm min-h-60 bg-black border border-gray-200 rounded-lg shadow-md p-6 transition-transform duration-300 transform hover:scale-105"
            >
              <p className="mb-2 text-xs font-semibold text-white bg-green-500 px-2 py-1 rounded-full inline-block">
                {internship.tag}
              </p>
              <h5 className="mb-2 text-2xl font-bold text-white">
                {internship.title}
              </h5>
              <p className="mb-1 font-medium text-gray-200">
                {internship.company}
              </p>
              <p className="mb-1 font-medium text-gray-200">
                {internship.duration}
              </p>
              <p className="text-sm text-gray-200">{internship.location}</p>
              <p className="text-base text-white mt-2">
                {internship.description}
              </p>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Internships;
