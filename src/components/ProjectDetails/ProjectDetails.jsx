import React from "react";
import { useParams } from "react-router-dom";
import data from "../Portfolio/Portfolio.json";
import { LazyLoadImage } from "react-lazy-load-image-component";
import Slider from "react-slick";

export default function ProjectDetails() {
    
  let { id } = useParams();

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const project = data.find((project) => project.id === id);

  if (!project) {
    return (
      <div className="py-52 text-red-400 text-3xl text-center font-semibold">
        Project not found..!
      </div>
    );
  }

  return (
    <>
      <div className="py-52">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-white">{project.title}</h1>
          <div className="flex flex-wrap items-center">
            <div className="w-full md:w-1/3">
              <div className="mx-3">
              {project.images ? (
  <Slider {...settings}>
    {project.images.map((src, index) => (
      <LazyLoadImage
        key={index}
        effect="blur"
        src={src}
        className="w-full rounded-lg mt-4"
      />
    ))}
  </Slider>
) : (
  <p>No images available</p>
)}


              </div>
            </div>
            <div className="w-full md:w-8/12">
              <div className="md:px-6">
                <p className="text-gray-400 mt-4">{project.description}</p>
                <div className="flex gap-3 mt-4 flex-wrap">
                  {project.tools.map((tool, index) => (
                    <div
                      key={index}
                      className="bg-yellow-400 text-gray-800 px-3 py-1 rounded-lg shadow-sm text-sm font-medium capitalize"
                    >
                      {tool}
                    </div>
                  ))}
                </div>
                <a
                  href={project.link}
                  className="text-blue-500 hover:underline mt-4 inline-block"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Project
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
