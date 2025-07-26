import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`${isScrolled ? 'bg-white text-gray-800 shadow-lg' : 'bg-[#061026] text-white'} py-3 sticky top-0 z-[100] transition-all duration-300`} >
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <a href="/" className="flex items-center space-x-2">
            <img
              src={"LOGO.png"}
              alt="logo"
              className="w-12 h-12 object-contain transition-all duration-300  "
            />
            <span className="ha-f text-2xl font-bold italic ">
              <span className="text-[#39C05B] font-bold">Digital</span>{" "}
              <span className="   font-bold">Touch </span>
            </span>
          </a>
        </div>
        <a
          href="#service"
          className="pp-f italic button h-10 w-24 bg-[#39C05B] flex items-center justify-center rounded-3xl cursor-pointer font-bold"
        >
          Services
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
