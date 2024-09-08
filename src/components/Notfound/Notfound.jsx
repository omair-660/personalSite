<<<<<<< HEAD
import React from "react";
import style from "./style.module.css";
import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';

export default function Notfound() {
  const { t } = useTranslation();

  return (
    <>
      <section id="notFound" className={`h-lvh w-full not-found flex justify-center items-center flex-col relative overflow-hidden ${style.R}`} >
        <div className={style.botm}></div>
        
        <div className={style.top}></div>
        <div className={style.br}></div>
        <p className="font-semibold text-2xl text-white"> {t('notFound.ops')}</p>
        <h1 className={`text-9xl font-bold bg-clip-text text-transparent animate-gradient bg-gradient-to-r from-purple-600 via-pink-400 to-red-400 ${style.gradient}`}>404</h1>


        <p className="uppercase xl text-white"> {t('notFound.pageNot')}</p>
        <Link to="/">
          <button className={`text-slate-50 font-semibold bg-gradient-to-r from-purple-600 via-blue-500 to-purple-400 px-4 py-2 rounded-md mt-3 ${style.btnH}`}>
          {t('notFound.goHome')}
          </button>
        </Link>
      </section>
    </>
  );
=======
import React from "react";
import style from "./style.module.css";
import { Link } from "react-router-dom";

export default function Notfound() {
  return (
    <>
      <div className={`h-lvh w-full not-found flex justify-center items-center flex-col relative overflow-hidden ${style.R}`} >
        <div className={style.botm}></div>
        
        <div className={style.top}></div>
        <div className={style.br}></div>
        <p className="font-semibold text-2xl text-white">Oopps...</p>
        <h1 className={`text-9xl font-bold bg-clip-text text-transparent animate-gradient bg-gradient-to-r from-purple-600 via-pink-400 to-red-400 ${style.gradient}`}>404</h1>


        <p className="uppercase xl text-white">page not found!</p>
        <Link to="/">
          <button className={`text-slate-50 font-semibold bg-gradient-to-r from-purple-600 via-blue-500 to-purple-400 px-4 py-2 rounded-md mt-3 ${style.btnH}`}>
            Go to Home
          </button>
        </Link>
      </div>
    </>
  );
>>>>>>> 57fada63e1816b1d7ea26550443d78104df38eff
}