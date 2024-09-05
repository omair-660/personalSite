import React from 'react';
import { useTranslation } from 'react-i18next';

export default function Footer() {
  const { t } = useTranslation();

  return (
    <>
    <footer>
        {/* part 1 */}
        <div className="flex flex-wrap text-center text-white justify-between items-center px-4 md:px-6 lg:px-8 backdrop-blur bg-[] bg-opacity-40 text-lg">
      <div className="w-full md:w-1/2 lg:w-1/3">
        <div>
          <p>{t('footer.designer')}</p>
        </div>
      </div>
        {/* part 2 */}
      <div className="w-full md:w-1/2 lg:w-1/3">
        <div>
          <h3>{t('footer.copyright')}</h3>
        </div>
      </div>
      {/* part 3 */}
      <div className="w-full lg:w-1/3">
        <div className='my-4'>
          <div className="icons flex justify-center text-white space-x-1 items-center rounded-full h-9 ">
            <a
              href="https://github.com/your-username"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2"
            >
              <i className="text-slate-50 fab fa-github"></i>
            </a>
            <a
              href="https://linkedin.com/in/your-profile"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2"
            >
              <i className="text-slate-50 fab fa-linkedin-in"></i>
            </a>
            <a
              href="https://facebook.com/your-profile"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2"
            >
              <i className="text-slate-50 fab fa-facebook-f"></i>
            </a>
            <a
              href="https://instagram.com/your-profile"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2"
            >
              <i className="text-slate-50 fab fa-instagram"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
    </footer>
    </>
  );
}
