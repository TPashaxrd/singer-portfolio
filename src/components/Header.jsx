import React, { useEffect, useRef } from 'react';

const Header = () => {
  const headerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
          }
        });
      },
      { threshold: 0.5 }
    );

    if (headerRef.current) {
      observer.observe(headerRef.current);
    }

    return () => {
      if (headerRef.current) {
        observer.unobserve(headerRef.current);
      }
    };
  }, []);

  return (
    <header
      ref={headerRef}
      className="flex justify-between items-center p-6 bg-black shadow-md transition-all duration-500"
    >
      <div className="flex items-center">
        <img
          src="http://www.yalinonline.com/assets/images/logo/logo.png"
          alt="Logo"
          className="h-12 mr-4"
        />  
      </div>
      <div className="flex items-center space-x-4">
        <a
          href="/"
          className="text-white px-4 py-2 rounded-lg transition duration-300 hover:bg-gray-800 hover:scale-105"
        >
          TR
        </a>
        <a
          href="/"
          className="text-white px-4 py-2 rounded-lg transition duration-300 hover:bg-gray-800 hover:scale-105"
        >
          EN
        </a>
      </div>
    </header>
  );
};

export default Header;
