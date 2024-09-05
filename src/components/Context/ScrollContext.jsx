import React, { createContext, useContext, useEffect } from 'react';
import ScrollReveal from 'scrollreveal';

const ScrollContext = createContext();

export const ScrollProvider = ({ children }) => {
  const scroll = () => {
    ScrollReveal().reveal('.left', {
      duration: 1000,
      delay: 200,
      origin: 'left',
      distance: '50px',
      easing: 'ease-in-out',
      reset: true,
    });

    ScrollReveal().reveal('.right', {
      duration: 1000,
      delay: 200,
      origin: 'right',
      distance: '50px',
      easing: 'ease-in-out',
      reset: true,
    });

    ScrollReveal().reveal('.bottom', {
      duration: 1000,
      delay: 300,
      origin: 'bottom',
      distance: '50px',
      easing: 'ease-in-out',
      reset: true,
    });
  };

  return (
    <ScrollContext.Provider value={{ scroll }}>
      {children}
    </ScrollContext.Provider>
  );
};

export const useScroll = () => {
  return useContext(ScrollContext);
};
