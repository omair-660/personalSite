import React, { useEffect, useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import img from "../../assets/about.png";

import "react-lazy-load-image-component/src/effects/blur.css";
import { useTranslation } from "react-i18next";
import { useScroll } from "../Context/ScrollContext";
import data from "./about.json";

export default function About() {
  const { t } = useTranslation();
  const [selectedSkill, setSelectedSkill] = useState(null);

  const handleClick = (skill) => {
    setSelectedSkill(skill);
  };

  let { scroll } = useScroll();

  useEffect(() => {
    scroll();
  }, [scroll]);

  return (
    <>
     <section id="about">
       <div className="pt-52">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <h2 className="text-slate-50 mb-5 text-4xl text-center w-1/2 font-semibold">
            {t("about.who_me")}{" "}
            <span className="text-purple-500">{t("about.i")}</span>
          </h2>
          <div className="flex flex-wrap items-start left">
            <div className="w-full md:w-1/2 lg:pt-24">
              <div className="text text-white text-xl">
                <p className="leading-10">
                  {t("about.hi1")}
                  <span className="text-purple-500 capitalize">
                    {t("name")}
                  </span>{" "}
                  {t("about.hi2")}
                  <br /> {t("about.hi3")}
                </p>
                <br />
                <h4 className="font-semibold mb-5">{t("about.activities")}</h4>
                <ul className="*:ms-5 *:my-2">
                  <li>
                    <i className={t("about.hand")}></i>{" "}
                    {t("about.playingGames")}
                  </li>
                  <li>
                    <i className={t("about.hand")}></i>{" "}
                    {t("about.sittingQuietly")}
                  </li>
                </ul>
              </div>
              <q className="text-center text-purple-300 mt-7 mx-auto w-3/4 block">
                {t("about.quote")}
              </q>
            </div>
            <div className="w-full md:w-1/2">
              <div className="image right">
                <LazyLoadImage
                  effect="blur"
                  src={img}
                  alt="about-img"
                  className="w-full sm:pt-5"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center px-4 md:px-6 lg:px-8 my-20">
        <h3 className="text-white text-4xl mb-10 left">
          {t("about.professional")}{" "}
          <span className="font-semibold text-purple-500">
            {" "}
            {t("about.skillset")}
          </span>
        </h3>
        <div className="flex flex-wrap justify-center items-center *:text-center *:w-full md:*:w-1/2 lg:*:w-1/5 *:text-white *:my-3 *:text-5xl *:transition *:duration-500 *:bottom">
          {data.map((skill) => (
            <div
              key={skill.id}
              onClick={() => handleClick(skill)}
              className="bottom"
            >
              <div className="hover:scale-110 cursor-pointer group transition duration-500 h-24 w-9/12  rounded-md border border-purple-500 flex justify-center items-center hover:border-purple-300">
                <i className={skill.imagCover}></i>
              </div>
            </div>
          ))}

          <div className="bottom">
            <div className="hover:scale-110 group transition duration-500 h-24 w-9/12  rounded-md border border-purple-500 flex justify-center items-center hover:border-purple-300">
              <svg
                className=" text-gray-800 dark:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="60"
                height="60"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M11.782 5.72a4.773 4.773 0 0 0-4.8 4.173 3.43 3.43 0 0 1 2.741-1.687c1.689 0 2.974 1.972 3.758 2.587a5.733 5.733 0 0 0 5.382.935c2-.638 2.934-2.865 3.137-3.921-.969 1.379-2.44 2.207-4.259 1.231-1.253-.673-2.19-3.438-5.959-3.318ZM6.8 11.979A4.772 4.772 0 0 0 2 16.151a3.431 3.431 0 0 1 2.745-1.687c1.689 0 2.974 1.972 3.758 2.587a5.733 5.733 0 0 0 5.382.935c2-.638 2.933-2.865 3.137-3.921-.97 1.379-2.44 2.208-4.259 1.231-1.253-.673-2.19-3.443-5.963-3.317Z" />
              </svg>
            </div>
          </div>

          <div className="bottom">
            <div className="hover:scale-110 group transition duration-500 h-24 w-9/12  rounded-md border border-purple-500 flex justify-center items-center hover:border-purple-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="100"
                height="100"
                viewBox="0 0 512 116"
              >
                <g fill="none" fill-rule="evenodd">
                  <path
                    fill="#fff"
                    d="m489.718 8.646l21.42.118s-39.824 53.964-43.076 58.362c-1.056 1.424-2.66 2.96-3.474 4.864c-2.057 4.786-4.169 15.285-4.169 15.285l-19.599.098s3.05-10.944 2.924-16.773c-.11-5.092-2.71-10.178-4.168-15.285c-1.474-5.17-3.475-15.286-3.475-15.286h20.15l2.779 11.117z"
                  />
                  <path
                    fill="#fff"
                    d="M449.157 20.027c3.953 2.383 6.379 15.529 6.379 15.529s-20.684.305-31.94.305h-9.727l-11.812 51.414h-18.064s11.242-55.874 13.896-66.004c.86-3.28 5.892-2.717 14.389-2.717h13.569c8.762 0 19.003-1.119 23.31 1.473m-84.097 25.04s.563-3.3-1.91-7.122c-2.113-3.258-4.064-4.016-9.623-4.19c-15.695-.493-15.39 11.138-15.39 11.138zm17.022-13.32c2.3 8.297-2.084 27.792-2.084 27.792s-22.894-.382-35.434 0c-3.899.119-8.566-.424-9.727 1.39c-1.633 2.542.597 6.455 2.487 8.108c2.175 1.903 6.412 2.12 7.935 2.313c10.178 1.293 31.48.334 31.48.334l-3.69 16.34s-30.103 1.51-45.16-2.084c-2.973-.708-5.76-2.139-7.643-4.168c-.514-.555-.96-1.312-1.446-1.966c-.388-.522-1.52-2.237-2.028-3.593c-3.439-9.164.403-26.72 4.169-36.128c.437-1.09.986-2.473 1.564-3.648c.722-1.465 1.333-3.119 1.91-3.995c.388-.604.869-.993 1.272-1.563c.465-.674 1.006-1.327 1.507-1.91c1.39-1.612 2.967-2.752 4.864-4.168c6.273-4.698 17.626-8.345 31.265-6.949c5.135.528 12.89 2.362 16.675 7.643c1.014 1.41 1.515 4.21 2.084 6.253M299.229 18.49l17.516-.103s-9.762 46.307-14.737 68.888h-20.15c-14.082 0-26.623 1.744-31.959-8.338c-5.176-9.789-.236-25.887 2.084-36.824c1.64-7.74 5.094-23.56 5.094-23.56l18.148-.166s-5.128 24.63-7.262 36.928c-.764 4.405-2.34 8.553-.694 11.81c1.563 3.1 3.752 3.322 10.421 3.475c2.113.05 9.033 0 9.033 0zm-81.985 33.35c1.834-6.516 4.509-13.582 4.169-19.454c-.368-6.28-5.634-11.998-9.032-13.2c-10.234-3.613-19.815 1.438-23.623 5.558c-4.926 5.336-6.594 11.569-8.338 20.15c-1.298 6.37-2.362 13.095 0 18.063c4.182 8.783 17.224 6.865 31.266 6.949c2.084-5.586 3.807-11.86 5.558-18.066m24.318-25.706c2 14.548-5.676 30.606-10.964 44.57c5.392.487 10.117-.075 10.457.327c.354.521-3.614 16.668-4.997 16.71c-4.279.111-18.459.229-24.372.229c-19.295 0-37.345 1.257-46.55-8.337c-3.738-3.898-6.323-10.583-6.949-15.286c-1.042-7.851.264-16.495 2.085-23.622c1.647-6.435 3.758-12.507 6.948-18.066C175.328 8.507 189.432-1.998 213.075.427c4.586.472 11.172 2.48 15.286 4.863c.284.167 1.279.959 1.507 1.098c5.559 3.537 10.624 11.978 11.694 19.746m-85.369-7.56c-1.167 5.315-2.334 11.34-3.564 16.592h-19.454c1.507-5.822 2.661-11.61 4.169-16.675c6.225 0 12.013.083 18.85.083M132.48 40.03h18.76c-2.453 13.576-7.31 35.475-11.117 50.719c-2.383 9.54-3.974 16.501-10.422 21.538c-.577.452-.91.237-1.39.695c-1.188 1.133-6.684 2.447-9.726 2.779c-4.947.536-10.54.07-16.62-.055c1.591-5.815 3.391-12.798 4.809-18.01c14.82 1.794 15.195-12.214 18.064-25.706c1.66-7.796 6.691-28.834 7.642-31.96"
                  />
                  <g fill="#fff">
                    <path d="m88.708 75.465l-.402 1.041c-6.85 13.34-18.989 21.525-36.303 21.886c-8.094.166-15.806-1.91-20.844-4.169C20.287 89.34 11.142 80.28 6.148 70.601c-7.164-13.875-8.456-33.177 6.44-47.593c.23 0-1.807 3.126-1.577 3.126l-.41 1.334C-.133 61.075 32.938 89.874 65.086 86.58c7.726-.791 17.578-5.022 23.622-11.115" />
                    <path d="M69.254 61.568c8.088.056 16.536-3.724 21.539-9.032c-4.377 11.11-17.05 18.252-34.044 15.98c-14.23-1.904-27.785-16.223-29.181-30.57c-1.021-10.443 2.618-16.675 8.615-24.234c-2.084 3.953-2.863 7.003-3.057 8.948c-2.278 22.588 18.044 38.79 36.128 38.908" />
                    <path d="M89.98 33.513c-1.257 2.884-8.496 8.33-11.693 9.01c-12.659 2.697-20.766-3.306-25.013-10.136c-.631-1.021-1.798-3.807-2.007-4.516c-1.647-5.6-.89-14.07 4.023-18.454c-1.48 4.17-1.696 9.011-.917 12.159c.472 1.904 1.91 5.226 3.349 7.316C60.34 32.7 62 33.625 65.364 35.646c1.515.91 3.14 1.64 3.842 1.841c3.189.938 9.922 3.412 20.775-3.974" />
                  </g>
                </g>
              </svg>
            </div>
          </div>
        </div>
        {selectedSkill && (
          <div  style={{ backgroundColor: selectedSkill.bg ,transition:'0.5s'}}  className={` w-full h-full fixed top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 text-white backdrop-blur-md z-50 rounded-lg flex flex-col justify-center items-center p-6`}>
            <div className="">
              <h2 className="font-semibold text-2xl capitalize">{selectedSkill.title}</h2>
              <i style={{color: selectedSkill.style}} className={`text-3xl my-2 ${selectedSkill.imagCover}`}></i>
              <p className="w-10/12 mx-auto">{selectedSkill.description}</p>
              <button
                className="text-red-500 absolute w-10 h-10 bg-black rounded-md top-8 right-8 transition duration-500 hover:bg-red-500 hover:text-black"
                onClick={() => setSelectedSkill(null)}
              >
                <i className="fa-solid fa-close text-3xl"></i>
              </button>
            </div>
          </div>
        )}
        

        <h3 className="text-white text-4xl my-10 right">
          <span className="font-semibold text-purple-500">
            {t("about.tool")}{" "}
          </span>{" "}
          {t("about.use")}{" "}
        </h3>
        <div className="flex flex-wrap justify-center items-center *:w-full md:*:w-1/2 lg:*:w-1/5 *:text-white *:my-3 *:text-5xl *:transition *:duration-500 *:bottom">
          <div className="bottom">
            <div className="hover:scale-110 group transition duration-500 h-24 w-9/12  rounded-md border border-purple-500 flex justify-center items-center hover:border-purple-300">
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                role="img"
                viewBox="0 0 24 24"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title></title>
                <path d="M23.15 2.587L18.21.21a1.494 1.494 0 0 0-1.705.29l-9.46 8.63-4.12-3.128a.999.999 0 0 0-1.276.057L.327 7.261A1 1 0 0 0 .326 8.74L3.899 12 .326 15.26a1 1 0 0 0 .001 1.479L1.65 17.94a.999.999 0 0 0 1.276.057l4.12-3.128 9.46 8.63a1.492 1.492 0 0 0 1.704.29l4.942-2.377A1.5 1.5 0 0 0 24 20.06V3.939a1.5 1.5 0 0 0-.85-1.352zm-5.146 14.861L10.826 12l7.178-5.448v10.896z"></path>
              </svg>
            </div>
          </div>
          <div className="bottom">
            <div className="hover:scale-110 group transition duration-500 h-24 w-9/12  rounded-md border border-purple-500 flex justify-center items-center hover:border-purple-300">
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                role="img"
                viewBox="0 0 24 24"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title></title>
                <path d="M13.527.099C6.955-.744.942 3.9.099 10.473c-.843 6.572 3.8 12.584 10.373 13.428 6.573.843 12.587-3.801 13.428-10.374C24.744 6.955 20.101.943 13.527.099zm2.471 7.485a.855.855 0 0 0-.593.25l-4.453 4.453-.307-.307-.643-.643c4.389-4.376 5.18-4.418 5.996-3.753zm-4.863 4.861l4.44-4.44a.62.62 0 1 1 .847.903l-4.699 4.125-.588-.588zm.33.694l-1.1.238a.06.06 0 0 1-.067-.032.06.06 0 0 1 .01-.073l.645-.645.512.512zm-2.803-.459l1.172-1.172.879.878-1.979.426a.074.074 0 0 1-.085-.039.072.072 0 0 1 .013-.093zm-3.646 6.058a.076.076 0 0 1-.069-.083.077.077 0 0 1 .022-.046h.002l.946-.946 1.222 1.222-2.123-.147zm2.425-1.256a.228.228 0 0 0-.117.256l.203.865a.125.125 0 0 1-.211.117h-.003l-.934-.934-.294-.295 3.762-3.758 1.82-.393.874.874c-1.255 1.102-2.971 2.201-5.1 3.268zm5.279-3.428h-.002l-.839-.839 4.699-4.125a.952.952 0 0 0 .119-.127c-.148 1.345-2.029 3.245-3.977 5.091zm3.657-6.46l-.003-.002a1.822 1.822 0 0 1 2.459-2.684l-1.61 1.613a.119.119 0 0 0 0 .169l1.247 1.247a1.817 1.817 0 0 1-2.093-.343zm2.578 0a1.714 1.714 0 0 1-.271.218h-.001l-1.207-1.207 1.533-1.533c.661.72.637 1.832-.054 2.522zM18.855 6.05a.143.143 0 0 0-.053.157.416.416 0 0 1-.053.45.14.14 0 0 0 .023.197.141.141 0 0 0 .084.03.14.14 0 0 0 .106-.05.691.691 0 0 0 .087-.751.138.138 0 0 0-.194-.033z"></path>
              </svg>
            </div>
          </div>
          <div className="bottom">
            <div className="hover:scale-110 group transition duration-500 h-24 w-9/12  rounded-md border border-purple-500 flex justify-center items-center hover:border-purple-300">
              <i className="fa-brands fa-npm"></i>
            </div>
          </div>
        </div>
      </div>
     </section>
    </>
  );
}
