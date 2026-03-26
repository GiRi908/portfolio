import React, { useState, useRef, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
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
  const [menuOpen, setMenuOpen] = useState(false);
  const navRefs = useRef([]);

  const handleHover = (isHover) =>
    window.dispatchEvent(new CustomEvent('cursor-hover', { detail: isHover }));

  const scrollToSection = (sectionId) => {
    setMenuOpen(false);
    const element = document.getElementById(sectionId);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close menu on resize to desktop
  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 768) setMenuOpen(false); };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  // Prevent body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

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
      {/* Logo — top left (always visible) */}
      <div className="fixed top-5 left-4 sm:left-6 z-50 md:top-7 md:left-8">
        <a
          href="#home"
          onClick={(e) => { e.preventDefault(); scrollToSection('home'); }}
          className="hover:opacity-80 transition-opacity block"
          aria-label="Go to top"
        >
          <img src={logo} alt="Giribalan K" className="h-8 sm:h-9 lg:h-10 w-auto" />
        </a>
      </div>

      {/* ─── MOBILE: Hamburger button ─── */}
      <button
        className="fixed top-4 right-4 z-50 md:hidden flex items-center justify-center w-9 h-9 rounded-xl bg-[#141918] border border-[#1F2622] text-[#EDEDED] hover:border-[#A3FF12]/40 transition-colors"
        onClick={() => setMenuOpen((prev) => !prev)}
        aria-label="Toggle menu"
      >
        {menuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
      </button>

      {/* ─── MOBILE: Full-screen slide-down menu ─── */}
      <div
        className={`fixed inset-0 z-40 md:hidden transition-all duration-300 ${
          menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-[#0B0F0E]/95 backdrop-blur-xl"
          onClick={() => setMenuOpen(false)}
        />
        {/* Menu panel */}
        <div
          className={`absolute top-0 left-0 right-0 bg-[#0B0F0E]/98 border-b border-[#1F2622] transition-transform duration-300 ${
            menuOpen ? 'translate-y-0' : '-translate-y-full'
          }`}
        >
          <div className="px-6 pt-20 pb-8 flex flex-col gap-1">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`flex items-center justify-between w-full px-4 py-4 rounded-xl text-left text-base font-medium transition-all duration-200 ${
                    isActive
                      ? 'bg-[#A3FF12]/10 text-[#A3FF12] border border-[#A3FF12]/20'
                      : 'text-[#9CA3AF] hover:text-[#EDEDED] hover:bg-[#141918]'
                  }`}
                >
                  {item.label}
                  {isActive && <span className="w-1.5 h-1.5 rounded-full bg-[#A3FF12]" />}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* ─── DESKTOP: Centered pill nav (md+) ─── */}
      <nav className="hidden md:block fixed top-5 left-1/2 -translate-x-1/2 z-50 px-4">
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
                className={`relative z-10 px-3.5 py-2 text-sm font-medium transition-colors duration-200 rounded-full select-none ${
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
