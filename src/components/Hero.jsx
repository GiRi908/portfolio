import React from 'react';
import { ArrowRight, ExternalLink } from 'lucide-react';
import LightRays from './LightRays';

const Hero = () => {
  const handleHover = (isHover) =>
    window.dispatchEvent(new CustomEvent('cursor-hover', { detail: isHover }));

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-start relative overflow-hidden px-4 sm:px-6 lg:px-8"
    >
      {/* Gradient blob background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[#0B0F0E]" />
        <div className="absolute bottom-[15%] right-[8%] w-[250px] h-[250px] sm:w-[400px] sm:h-[400px] lg:w-[600px] lg:h-[600px] rounded-full bg-[#A3FF12]/8 blur-[100px] sm:blur-[140px] animate-float" />
        <div className="absolute top-[10%] left-[5%] w-[200px] h-[200px] sm:w-[300px] sm:h-[300px] rounded-full bg-[#7C8AFF]/6 blur-[80px] sm:blur-[120px] animate-float" style={{ animationDelay: '5s' }} />
      </div>

      {/* LightRays WebGL */}
      <div style={{ position: 'absolute', inset: 0, zIndex: 2, pointerEvents: 'none' }}>
        <LightRays
          raysOrigin="top-center"
          raysColor="#A3FF12"
          raysSpeed={0.6}
          lightSpread={0.5}
          rayLength={2.5}
          followMouse={true}
          mouseInfluence={0.08}
          noiseAmount={0}
          distortion={0}
          pulsating={false}
          fadeDistance={1}
          saturation={0.8}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 container-max w-full pt-28 sm:pt-24 pb-16">
        {/* Label */}
        <div className="reveal mb-5 sm:mb-6">
          <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#A3FF12]/20 bg-[#A3FF12]/5 text-[#A3FF12] text-xs font-semibold tracking-widest uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-[#A3FF12] animate-pulse" />
            Available for opportunities
          </span>
        </div>

        {/* Main heading */}
        <h1 className="reveal reveal-delay-1 text-[2.6rem] xs:text-5xl sm:text-6xl md:text-7xl lg:text-[88px] xl:text-[100px] font-bold leading-[0.95] tracking-tight mb-6 sm:mb-8">
          <span className="block text-[#EDEDED]">AI &amp; ML</span>
          <span className="block text-[#EDEDED]">Engineer</span>
          <span className="block mt-2">
            <span className="text-[#A3FF12]">Giribalan</span>
            <span className="text-[#EDEDED]">.</span>
          </span>
        </h1>

        {/* Subtitle */}
        <p className="reveal reveal-delay-2 text-sm sm:text-base lg:text-lg text-[#9CA3AF] font-light max-w-xl mb-10 sm:mb-12 leading-relaxed">
          Crafting intelligent AI solutions and modern web applications that solve real-world problems.
          <br className="hidden sm:block" />
          <span className="text-[#EDEDED]/70"> Problem Solver · Developer · Innovator.</span>
        </p>

        {/* CTA Buttons — full width on mobile */}
        <div className="reveal reveal-delay-3 flex flex-col sm:flex-row gap-3 sm:gap-4 items-stretch sm:items-start">
          <button
            onClick={() => scrollTo('contact')}
            onMouseEnter={() => handleHover(true)}
            onMouseLeave={() => handleHover(false)}
            className="group flex items-center justify-center gap-2.5 px-7 py-4 sm:py-3.5 bg-[#A3FF12] text-[#0B0F0E] font-semibold text-sm rounded-full hover:bg-[#b8ff3d] transition-all duration-200 hover:scale-105 active:scale-100"
          >
            Reach Out
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
          </button>

          <button
            onClick={() => scrollTo('projects')}
            onMouseEnter={() => handleHover(true)}
            onMouseLeave={() => handleHover(false)}
            className="group flex items-center justify-center gap-2.5 px-7 py-4 sm:py-3.5 border border-[#1F2622] text-[#EDEDED] font-semibold text-sm rounded-full hover:border-[#A3FF12]/40 hover:bg-[#A3FF12]/5 transition-all duration-200"
          >
            View Work
            <ExternalLink className="w-4 h-4 opacity-60 group-hover:opacity-100 transition-opacity" />
          </button>
        </div>

        {/* Scroll indicator — hide on mobile to save space */}
        <div className="reveal reveal-delay-4 mt-16 sm:mt-20 hidden sm:flex items-center gap-3 text-[#9CA3AF] text-xs">
          <div className="w-6 h-10 border border-[#1F2622] rounded-full flex items-start justify-center pt-2">
            <div className="w-1 h-2 bg-[#A3FF12] rounded-full animate-bounce" />
          </div>
          <span className="tracking-widest uppercase">Scroll</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
