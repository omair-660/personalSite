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
              href="https://github.com/omair-660"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2"
            >
              <i className="text-slate-50 fab fa-github"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/omair-mohammed-%F0%9F%87%B5%F0%9F%87%B8-4120b2283?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app "
              target="_blank"
              rel="noopener noreferrer"
              className="p-2"
            >
              <i className="text-slate-50 fab fa-linkedin-in"></i>
            </a>
            <a
              href="https://www.facebook.com/omair.rajeh?mibextid=ZbWKwL"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2"
            >
              <i className="text-slate-50 fab fa-facebook-f"></i>
            </a>
            <a
              href="https://instagram.com/omair_660"
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
