import React from "react";
import Data from "./Portfolio.json";
import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";

export default function Portfolio() {
  return (
    <>
      <section id="portfolio">
        <div className="pt-52">
          <div className="container mx-auto px-4 md:px-6 lg:px-8">
            <div className="flex flex-wrap">
              {Data.map((project) => (
                <div
                  className="w-full md:w-1/2 lg:w-1/4  my-2"
                  key={project.id}
                >
                  <div className=" px-2 ">
                    <div
                      className={`px-3 border border-purple-600 py-3 rounded-lg overflow-hidden transition-transform duration-500 hover:scale-105 group`}
                    >
                      <Link to={`/projectdetails/${project.id}`}>
                        <div className="image overflow-hidden">
                          <LazyLoadImage
                            effect="blur"
                            src={project?.imagCover}
                            alt={project.title}
                            className="w-full h-full  transition-all duration-700 group-hover:scale-125"
                          />
                        </div>
                        <div className="text mt-3">
                          <h2 className="text-purple-400 text-center font-semibold text-xl pt-1">
                            {project?.title}
                          </h2>
                          <p className="text-slate-200 mt-2">
                            {project.description
                              .split(" ")
                              .slice(0, 15)
                              .join(" ")}
                            ...
                          </p>
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
