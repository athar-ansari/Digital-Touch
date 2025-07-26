import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#001021] pt-16 pb-8 ">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between mb-12">
          <div className="w-full md:w-1/2 px-4 mb-8 md:mb-0">
            <h3 className="pp-f text-xl font-bold mb-4 text-white italic">Head Office</h3>
            <div className="space-y-3 text-[#99a8b4]">
              <p className="pp-f flex items-start italic">
                <i className="fas fa-map-marker-alt text-[#4aadc4] mr-3 mt-1"></i>
                <span>
                  Shop No. 1, Yousuf Mahal, Rahmat Nagar, <br />
                  Near Diamond Club, <br />
                  Burnpur - 713325
                </span>
              </p>
              <p className="pp-f flex items-center italic">
                <i className="fas fa-phone text-[#4aadc4] mr-3"></i>
                <a href="tel:8759243934" className="hover:text-[#4aadc4]">
                  8759243934
                </a>
              </p>
              <p className="pp-f flex items-center italic">
                <i className="fas fa-envelope text-[#4aadc4] mr-3"></i>
                <a
                  href="mailto:care.digitaltouch@gmail.com"
                  className="hover:text-[#4aadc4]"
                >
                  care.digitaltouch@gmail.com
                </a>
              </p>
            </div>
          </div>

          <div className="w-full md:w-1/2 px-4 mb-8 md:mb-0 flex md:justify-end">
            <div>
              <h3 className="pp-f text-xl font-bold mb-4 text-white italic">Helpdesk</h3>
              <div className="space-y-3 text-[#99a8b4]">
                <p className="pp-f flex items-center italic">
                  <i className="fas fa-envelope text-[#4aadc4] mr-3"></i>
                  <a
                    href="mailto:care.digitaltouch@gmail.com"
                    className="hover:text-[#4aadc4]"
                  >
                    care.digitaltouch@gmail.com
                  </a>
                </p>
                <p className="pp-f flex items-center italic">
                  <i className="fas fa-phone text-[#4aadc4] mr-3"></i>
                  <a href="tel:8759243934" className="hover:text-[#4aadc4]">
                    8759243934
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-between pt-8 border-t border-gray-200">
          <div className="w-full md:w-auto mb-4 md:mb-0">
            <p className="pp-f text-[#99a8b4] text-sm italic">
              © 2025 <span className="font-bold">Digital Touch </span>Services
              Limited . All Rights Reserved.
            </p>
          </div>

          <div className="w-full md:w-auto">
            <div className="flex space-x-4">
              <p className="pp-f text-[#99a8b4] text-sm mr-2 font-semibold italic mt-1">
                Follow me
              </p>
              <a
                href="https://www.facebook.com/zeyauddinnn/"
                className="text-white hover:text-[#4aadc4] transition-colors"
              >
                <i className="fab fa-facebook-f "></i>
              </a>

              <a
                href="https://www.instagram.com/zeyauddinnn"
                className="text-white hover:text-[#4aadc4] transition-colors"
              >
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
