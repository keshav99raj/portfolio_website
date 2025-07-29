import React, { useState } from "react";
import grocery from "../../assets/groceryapp.jpg";
import weather from "../../assets/weatherapp.jpg";

const NewCard = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const projects = [
    {
      image: grocery,
      title: "Grocery Delivery Website",
      description: "Built an MERN stack grocery app with auth & online payment integeration using stripe ",
      link: "https://green-cart-blond.vercel.app/",
    },
    {
      image: weather,
      title: "Weather App",
      description: "Simple weather app using JS ,html and css",
      link: "https://weather-app-seven-zeta-80.vercel.app/",
    },
    // Add more projects as needed
  ];

  return (
    <div className="relative py-16 px-4 sm:px-6 lg:px-8 flex flex-col justify-center items-center"> {/* Increased py-16 for more space */}
      {/* Header with more margin and responsive sizing */}
      <div className="mb-16 sm:mb-24"> {/* Increased mb-16 to mb-24 for more space */}
       
      </div>

      {/* Project Grid - Adjusted for better mobile visibility */}
      <div className="grid grid-cols-1 md:grid-cols-2  lg:flex lg:flex-row lg:justify-center gap-8 px-4 -mt-8 sm:mt-0"> {/* Added negative margin on mobile */}
        {projects.map((proj, idx) => (
          <div
            key={idx}
            onClick={() => setExpandedIndex(idx)}
            className={`relative rounded-xl overflow-hidden shadow-lg transition-all duration-300 ${
              expandedIndex === null ? "hover:scale-105" : ""
            } ${expandedIndex === idx ? "xl:scale-110" : "xl:scale-95"}`}
          >
            <div className="aspect-w-4 aspect-h-3 w-full">
              <img
                src={proj.image}
                alt={proj.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-4">
              <div>
                <h3 className="text-white text-xl font-bold">{proj.title}</h3>
                <p className="text-gray-300 text-sm">{proj.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Expanded View (Overlay) */}
      {expandedIndex !== null && (
        <div
          className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex justify-center items-center p-4"
          onClick={() => setExpandedIndex(null)}
        >
          <div
            className="w-full max-w-6xl h-auto max-h-[90vh] relative rounded-xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={projects[expandedIndex].image}
              alt="expanded"
              onClick={() => window.open(projects[expandedIndex].link, "_blank")}
              className="w-full h-full object-contain cursor-pointer"
            />
            <div className="absolute bottom-0 left-3 right-0 bg-gradient-to-t from-black/90 to-transparent p-6 text-white">
              <h2 className="text-2xl sm:text-3xl font-bold mb-2">
                {projects[expandedIndex].title}
              </h2>
              <p className="text-sm sm:text-base opacity-90">
                {projects[expandedIndex].description}
              </p>
               
            </div>
            <button
              onClick={() => setExpandedIndex(null)}
              className="absolute top-4 right-4 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default NewCard;