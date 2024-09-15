import React, { useState, useEffect, useRef } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next'; 

export default function Navbar() {
  const { t, i18n } = useTranslation(); 
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef(null);
  const [scrolling, setScrolling] = useState(false);

  const [isHeight, setIsHeight] = useState(false);
  const containerRef = useRef(null);

  const toggleHeight = () => {
    setIsHeight(!isHeight);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > (navRef.current?.offsetHeight || 0)) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    document.documentElement.lang = i18n.language;
    document.documentElement.dir = i18n.language === 'ar' ? 'rtl' : 'ltr';
  }, [i18n.language]);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <>
    <header>
    <div
        ref={navRef}
        className={`fixed top-0 left-0 w-full z-50 transition duration-1000 ${
          scrolling ? 'backdrop-blur-md shadow-md bg-custom-bg' : 'bg-transparent'
        }`}
      >
        <div className="antialiased">
          <div className="w-full text-gray-700">
            <div className="flex flex-col max-w-screen-xl px-4 mx-auto md:items-center md:justify-between md:flex-row md:px-6 lg:px-8">
              <div className="flex items-center justify-between p-4">
                <Link
                  to="/"
                  className="text-lg font-semibold tracking-widest text-gray-100 uppercase rounded-lg focus:outline-none focus:shadow-outline"
                >
                  <div className=' flex'>
                    <h2 className='px-1'>{t('logo' )}  </h2>
                     <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 24" width="50" height="50">
    <rect width="1.17" height="14" fill="#000"/>
    <rect y="3.11" width="14" height="3.11" fill="#FFF"/>
    <rect y="6.22" width="14" height="3.11" fill="#007A3D"/>
    <polygon points="0,0 5.83,4.67 0,9.33" fill="#CE1126"/>
  </svg>
  </div>


                </Link>
                <button
                  className="rounded-lg md:hidden focus:outline-none focus:shadow-outline"
                  onClick={() => setIsOpen(!isOpen)}
                >
                  <svg className="text-purple-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    className="w-6 h-6"
                  >
                    <path
                      className={`${!isOpen ? 'block' : 'hidden'}`}
                      fillRule="evenodd"
                      d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
                      clipRule="evenodd"
                    ></path>
                    <path
                      className={`${isOpen ? 'block' : 'hidden'}`}
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </button>
              </div>
              <nav
                className={`${
                  isOpen ? 'flex' : 'hidden'
                } flex-col flex-grow md:flex md:justify-end md:flex-row md:pb-0 pb-4`}
              >
         

<NavLink
  to="/"
  className="text-purple-100 transition duration-300 px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg md:mt-0 md:ml-4 hover:text-purple-300 "
  
>
  <i className="fa-solid fa-house me-1 h-[1pc]"></i> {t('navBar.home')}
</NavLink>

<NavLink
  to="about"
  className="text-purple-100 transition duration-300 px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg md:mt-0 md:ml-4 hover:text-purple-300 "
  
>
  <i className="fa-solid fa-user me-1 h-[1pc]"></i> {t('navBar.about')}
</NavLink>

<NavLink
  to="portfolio"
  className="text-purple-100 transition duration-300 px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg md:mt-0 md:ml-4 hover:text-purple-300 "
  
>
  <i className="fa-solid fa-briefcase me-1 h-[1pc]"></i> {t('navBar.portfolio')}
</NavLink>

<NavLink
  to="contact"
  className="text-purple-100 transition duration-300 px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg md:mt-0 md:ml-4 hover:text-purple-300 "
  
>
  <i className="fa-solid fa-address-card me-1 h-[1pc]"></i> {t('navBar.contact')}
</NavLink>


                {/* Language Switcher */}
                <div className="relative">
      <button
        onClick={toggleHeight}
        className="text-slate-50 transition duration-500 px-4 py-2 text-sm font-semibold bg-transparent rounded-lg hover:text-gray-300 focus:text-gray-100"
      >
       <i className="fa-solid fa-globe me-1"></i> {isHeight ? 'Close' : 'Language'}
      </button>
      <div
        ref={containerRef}
        className={`overflow-hidden transition-all duration-500 ease-in-out absolute left-0 rounded-md bg-slate-800 bg-opacity-30 backdrop-blur-lg ${
          isHeight ? `h-32` : `h-0`
        }`}
      >
        <ul className="flex space-x-4 mt-4 md:mt-0 flex-col items-center">
          <li>
            <button
              onClick={() => {
                i18n.changeLanguage('ar');
                toggleHeight(); 
              }}
              className="text-slate-50 transition duration-500 px-4 py-2 text-sm font-semibold bg-transparent rounded-lg hover:text-gray-300 focus:text-gray-100"
            >
<div className="flex items-center">
  <p className='mb-6 me-1'>
    {t('العربية')}
  </p>
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 24" width="50" height="50">
    <rect width="1.17" height="14" fill="#000"/>
    <rect y="3.11" width="14" height="3.11" fill="#FFF"/>
    <rect y="6.22" width="14" height="3.11" fill="#007A3D"/>
    <polygon points="0,0 5.83,4.67 0,9.33" fill="#CE1126"/>
  </svg>
</div>

            </button>
          </li>
          <li>
            <button
              onClick={() => {
                i18n.changeLanguage('en');
                toggleHeight(); 
              }}
              className="text-slate-50 transition duration-500 px-4 py-2 text-sm font-semibold bg-transparent rounded-lg hover:text-gray-300 focus:text-gray-100"
            >
    {t('english')}

            </button>
          </li>
        </ul>
      </div>
    </div>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </header>
    </>
  );
}
