import React, { useState, useRef, useEffect } from 'react';
import logo from './assets/logo.png';

const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'contact', label: 'Contact' },
];

const Navbar = ({ activeSection }) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [indicatorStyle, setIndicatorStyle] = useState({});
  const [scrolled, setScrolled] = useState(false);
  const navRefs = useRef([]);

  const handleHover = (isHover) =>
    window.dispatchEvent(new CustomEvent('cursor-hover', { detail: isHover }));

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const targetIndex =
      hoveredIndex !== null
        ? hoveredIndex
        : navItems.findIndex((i) => i.id === activeSection);
    if (targetIndex !== -1 && navRefs.current[targetIndex]) {
      const el = navRefs.current[targetIndex];
      setIndicatorStyle({ left: el.offsetLeft, width: el.offsetWidth, opacity: 1 });
    } else {
      setIndicatorStyle({ opacity: 0 });
    }
  }, [hoveredIndex, activeSection]);

  return (
    <>
      {/* Logo — top left */}
      <div className="fixed top-6 left-6 z-50 md:top-7 md:left-8">
        <a
          href="#home"
          onClick={(e) => { e.preventDefault(); scrollToSection('home'); }}
          className="hover:opacity-80 transition-opacity block"
          onMouseEnter={() => handleHover(true)}
          onMouseLeave={() => handleHover(false)}
          aria-label="Go to top"
        >
          <img src={logo} alt="Giribalan K" className="h-9 lg:h-10 w-auto" />
        </a>
      </div>

      {/* Pill nav — centered */}
      <nav className="fixed top-5 left-1/2 -translate-x-1/2 z-50 px-4">
        <div
          className={`relative flex items-center p-1.5 rounded-full border transition-all duration-300 ${
            scrolled
              ? 'bg-[#0B0F0E]/90 backdrop-blur-xl border-[#1F2622] shadow-lg shadow-black/40'
              : 'bg-[#141918]/70 backdrop-blur-lg border-[#1F2622]'
          }`}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          {/* Sliding indicator */}
          <div
            className="absolute top-1.5 bottom-1.5 bg-[#A3FF12] rounded-full transition-all duration-300 ease-[cubic-bezier(0.25,1,0.5,1)] z-0"
            style={indicatorStyle}
          />

          {navItems.map((item, index) => {
            const isActive = activeSection === item.id;
            const isHighlighted = hoveredIndex !== null ? hoveredIndex === index : isActive;

            return (
              <button
                key={item.id}
                ref={(el) => (navRefs.current[index] = el)}
                onClick={() => scrollToSection(item.id)}
                onMouseEnter={() => { setHoveredIndex(index); handleHover(true); }}
                onMouseLeave={() => handleHover(false)}
                className={`relative z-10 px-4 py-2 text-sm font-medium transition-colors duration-200 rounded-full select-none ${
                  isHighlighted ? 'text-[#0B0F0E]' : 'text-[#9CA3AF] hover:text-[#EDEDED]'
                }`}
                aria-label={`Go to ${item.label}`}
              >
                {item.label}
              </button>
            );
          })}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
