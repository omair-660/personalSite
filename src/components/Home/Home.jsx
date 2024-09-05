import React, { useContext, useEffect } from "react";
import style from "../Home/style.module.css";
import homeImage from "../../assets/home-main.svg";
import myImg from "../../assets/avatar.svg";
import Typewriter from "typewriter-effect";
import Tilt from "react-parallax-tilt";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { useTranslation } from 'react-i18next';
import { useScroll } from "../Context/ScrollContext";


export default function Home() {

  const { t } = useTranslation();

let {scroll} = useScroll()

  useEffect(()=>{
    scroll()
  },[scroll])

  return (
    <>
  <section id="home">
    
      {/* home section 1 */}
      <div className={`${style.bgimage} `}>
        <div className="container mx-auto pt-52 px-4 md:px-6 lg:px-8">
          <div className="flex flex-wrap items-start">
            <div className="w-full md:w-1/2 pt-24">
              <div className="text left">
                <h2 className="text-slate-50 text-4xl">
                  &#39;{t('hello')}&#33;{" "}
                  <span className="animate inline-block">👋🏻</span>
                </h2>
                <h3 className="text-slate-50 uppercase font-semibold text-5xl my-8">
                  {t('im')}{" "}
                  <span className="text-purple-400"> {t('name')}</span>
                </h3>
                <h2 className="text-purple-400 pb-4 text-4xl mt-20 font-semibold capitalize bg-gradient-to-r from-purple-400 via-pink-400 to-red-600 bg-clip-text text-transparent">
                  <Typewriter
                    options={{
                      strings: [
                        t('front_end_developer'),
                        t('frontend_designer'),
                        t('freelancer'),
                      ],
                      autoStart: true,
                      loop: true,
                      delay: 100,
                      deleteSpeed: 50,
                    }}
                  />
                </h2>
              </div>
            </div>
            <div className="w-full md:w-1/2 ">
              <div className="image right">
                <LazyLoadImage effect="blur" src={homeImage} alt="home-main" className="w-full" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* home section 2 */}
      <h2 className="text-center my-28 w-3/4 text-white text-5xl mb-8 font-semibold ">
        {t('let_me_introduce')} <span className="text-purple-500">{t('intro')}</span>
      </h2>
      <div className="flex flex-wrap w-full  px-4 md:px-6 lg:px-8 left">
        <div className="w-full md:w-3/4">
          <div className="text w-full md:w-11/12">
            <ul>
              <li className="text-white py-3 text-xl first-letter:text-5xl first-letter:text-slate-200 first-letter:font-serif">
                {t('fall_in_love')}
              </li>
              <li className="text-white py-3 text-2xl">
                {t('fluent_in_js')}
              </li>
              <li className="text-white py-3 text-2xl">
                {t('passionate_about')} <span className="text-purple-500"> React.js</span>
              </li>
              <li className="text-white py-3 text-2xl">
                {t('interested_in')} <span className="text-purple-500"> {t('technology')}</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="w-full md:w-1/4 text-center right">
          <div className="image">
            <Tilt>
              <LazyLoadImage effect="blur" src={myImg} className="mx-auto" alt="avatar" />
            </Tilt>
          </div>
        </div>
      </div>

      {/* home section 3 */}
      <div className="text-center my-14">
        <h3 className="text-white text-5xl bottom">{t('find_me_on')}</h3>
        <p className="text-white text-lg mt-3 bottom">Feel free to <span className="text-purple-500">{t('connect')}</span> with me</p>
        <div className="icons flex justify-center bottom text-white my-4 *:mx-2 *:items-center *:justify-center *:flex *:bg-slate-50 *:rounded-full *:h-9 *:w-9 *:transition *:duration-500">
          <a
            className="group hover:bg-purple-600"
            href="https://github.com/omair-660"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="transition duration-500 group-hover:text-white text-purple-600 fab fa-github"></i>
          </a>
          <a
            className="group hover:bg-purple-600"
            href="https://www.linkedin.com/in/omair-mohammed-%F0%9F%87%B5%F0%9F%87%B8-4120b2283?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app "
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="transition duration-500 group-hover:text-white text-purple-600 fab fa-linkedin-in"></i>
          </a>
          <a
            className="group hover:bg-purple-600"
            href="https://www.facebook.com/omair.rajeh?mibextid=ZbWKwL"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="transition duration-500 group-hover:text-white text-purple-600 fab fa-facebook-f"></i>
          </a>
          <a
            className="group hover:bg-purple-600"
            href="https://instagram.com/omair_660"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="transition duration-500 group-hover:text-white text-purple-600 fab fa-instagram"></i>
          </a>
        </div>
      </div>
  </section>
    </>
  );
}
