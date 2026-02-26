import { useState, useEffect } from "react";
import { FiBookmark } from "react-icons/fi";
import { IoArrowUpCircle } from "react-icons/io5";
import { LuShoppingBag } from "react-icons/lu";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";

const Header = () => {
  const [isFixed, setIsFixed] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsFixed(window.scrollY >= 650);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { label: "Bosh sahifa", href: "#" },
    { label: "Mahsulotlar", href: "#furniture" },
    { label: "Biz haqimizda", href: "#features" },
    { label: "Aloqa", href: "#footer" },
  ];

  return (
    <>
      <header
        data-aos="zoom-out-down"
        className={`fixed top-0 left-0 right-0 w-full z-40 transition-all duration-500 ${
          isFixed ? "shadow-lg top-0" : "bg-transparent"
        } backdrop-blur-md`}
      >
        <div className="container mx-auto px-4 md:px-6 py-0">
          <nav className="flex items-center justify-between rounded-full px-4 md:px-6 py-4 text-white border border-white/20 bg-[#2e4936] shadow-[0px_5px_10px_rgba(46,73,54,0.50)]">
            <div className="border border-white rounded-xl px-3 py-2 bg-white/10 hover:bg-white/15 transition-colors">
              <a href="/" className="flex items-center gap-1">
                <span className="font-bold text-[#f39c12]">Sof</span>
                <span className="font-bold text-white">Mebel</span>
              </a>
            </div>
            <ul className="hidden md:flex items-center gap-6 font-bold">
              {menuItems.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="relative inline-block transition-colors duration-300 text-white hover:text-[#f39c12] after:absolute after:bottom-[-8px] after:left-0 after:w-0 after:h-0.5 after:bg-[#f39c12] after:transition-all after:duration-300 hover:after:w-full"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="flex items-center gap-2 md:gap-4">
              <button className="relative p-2 transition-all duration-300 hover:scale-110 hover:text-[#f39c12]">
                <LuShoppingBag className="text-xl md:text-2xl" />
                <span className="absolute top-1 right-1 w-4 h-4 rounded-full bg-[#c41e3a] flex items-center justify-center text-white font-bold text-xs">
                  0
                </span>
              </button>
              <button className="relative p-2 transition-all duration-300 hover:scale-110 hover:text-[#f39c12]">
                <FiBookmark className="text-xl md:text-2xl" />
                <span className="absolute top-1 right-1 w-4 h-4 rounded-full bg-[#c41e3a] flex items-center justify-center text-white font-bold text-xs">
                  0
                </span>
              </button>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden flex items-center justify-center p-2 transition-all duration-300 hover:scale-110 hover:text-[#f39c12]"
                aria-label="Menyu"
              >
                {mobileMenuOpen ? (
                  <RiCloseLine className="text-2xl transition-transform duration-300 rotate-180" />
                ) : (
                  <RiMenu3Line className="text-2xl transition-transform duration-300" />
                )}
              </button>
            </div>
          </nav>
        </div>
      </header>
      {mobileMenuOpen && (
        <div
          className="fixed md:hidden bg-black/50 backdrop-blur-lg z-30 transition-opacity duration-300"
          onClick={() => setMobileMenuOpen(false)}
          style={{
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
          }}
        />
      )}
      {mobileMenuOpen && (
        <nav
          className="fixed md:hidden left-0 right-0 z-40 transition-all duration-300 ease-out w-full"
          style={{
            top: 80,
          }}
        >
          <div className="bg-[#2e4936]/98 backdrop-blur-xl border-b-2 border-[#f39c12]/30 shadow-2xl">
            <div className="container mx-auto px-4">
              <ul className="flex flex-col divide-y divide-white/10">
                {menuItems.map((item, index) => (
                  <li
                    key={item.label}
                    className={`transform transition-all duration-500 ease-out ${
                      mobileMenuOpen
                        ? "translate-y-0 opacity-100"
                        : "-translate-y-2 opacity-0"
                    }`}
                    style={{
                      transitionDelay: mobileMenuOpen
                        ? `${index * 60}ms`
                        : "0ms",
                    }}
                  >
                    <a
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="flex items-center gap-3 py-4 px-4 font-bold text-base text-white transition-all duration-300 hover:bg-white/10 hover:pl-6 group"
                    >
                      <span className="w-2 h-2 rounded-full bg-[#f39c12] transition-all duration-300 group-hover:scale-150 group-hover:bg-[#c41e3a]" />
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </nav>
      )}
      {isFixed && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed right-4 md:right-[5%] bottom-6 md:bottom-[2%] z-30 p-0 transition-all duration-300 hover:scale-110 active:scale-95 max-[920px]:right-4"
          aria-label="Yuqoriga"
        >
          <div className="bg-[#2e4936] rounded-full p-1 shadow-lg hover:shadow-xl transition-shadow border border-[#f39c12]/30">
            <IoArrowUpCircle className="text-3xl md:text-4xl text-[#f39c12]" />
          </div>
        </button>
      )}
      {isFixed && <div className="h-20" />}
    </>
  );
};

export default Header;
