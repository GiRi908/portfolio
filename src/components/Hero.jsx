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
      {/* Gradient blob background — toned down, more natural */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[#0B0F0E]" />
        {/* Main blob — slightly offset from corner */}
        <div className="absolute bottom-[12%] right-[5%] w-[220px] h-[220px] sm:w-[360px] sm:h-[360px] lg:w-[500px] lg:h-[500px] rounded-full bg-[#A3FF12]/6 blur-[90px] sm:blur-[120px] animate-float" />
        {/* Secondary blob — top left, softer */}
        <div className="absolute top-[8%] left-[2%] w-[160px] h-[160px] sm:w-[260px] sm:h-[260px] rounded-full bg-[#7C8AFF]/5 blur-[70px] sm:blur-[100px] animate-float" style={{ animationDelay: '7s' }} />
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

      {/* Content — left-aligned with slight intentional top offset */}
      <div className="relative z-10 container-max w-full pt-32 sm:pt-28 pb-20">
        {/* Main heading — SplitText: each word fades in with stagger */}
        <h1 className="font-display text-[2.8rem] xs:text-5xl sm:text-6xl md:text-7xl lg:text-[86px] xl:text-[98px] font-bold leading-[0.93] mb-7 sm:mb-9">
          <span className="block text-[#EDEDED]">
            {'AI & ML'.split(' ').map((word, i) => (
              <span key={i} className="split-word mr-[0.25em]" style={{ animationDelay: `${i * 120}ms` }}>{word}</span>
            ))}
          </span>
          <span className="block text-[#EDEDED] pl-px sm:pl-1">
            {'Engineer'.split(' ').map((word, i) => (
              <span key={i} className="split-word" style={{ animationDelay: `${240 + i * 120}ms` }}>{word}</span>
            ))}
          </span>
          <span className="block mt-2.5">
            <span className="split-word text-[#A3FF12]" style={{ animationDelay: '360ms' }}>Giribalan</span>
            <span className="split-word text-[#EDEDED]" style={{ animationDelay: '440ms' }}>.</span>
          </span>
        </h1>

        {/* Subtitle — slightly nudged left for natural feel */}
        <p className="reveal reveal-delay-2 text-sm sm:text-[15px] lg:text-base text-[#9CA3AF] font-light max-w-[420px] mb-11 sm:mb-13 leading-[1.75] -ml-px">
          Crafting intelligent AI solutions and modern web applications that solve real-world problems.
          <br className="hidden sm:block" />
          <span className="text-[#EDEDED]/65 mt-1 block sm:inline">Problem Solver · Developer · Innovator.</span>
        </p>

        {/* CTA Buttons */}
        <div className="reveal reveal-delay-3 flex flex-col sm:flex-row gap-3 sm:gap-4 items-stretch sm:items-start">
          <button
            onClick={() => scrollTo('contact')}
            onMouseEnter={() => handleHover(true)}
            onMouseLeave={() => handleHover(false)}
            className="glow-btn group flex items-center justify-center gap-2.5 px-7 py-4 sm:py-3.5 bg-[#A3FF12] text-[#0B0F0E] font-semibold text-sm rounded-full hover:bg-[#b3ff40] hover:-translate-y-0.5 active:translate-y-0"
          >
            Reach Out
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
          </button>

          <button
            onClick={() => scrollTo('projects')}
            onMouseEnter={() => handleHover(true)}
            onMouseLeave={() => handleHover(false)}
            className="group flex items-center justify-center gap-2.5 px-7 py-4 sm:py-3.5 border border-[#1F2622] text-[#EDEDED] font-semibold text-sm rounded-full hover:border-[#A3FF12]/35 hover:bg-[#A3FF12]/5 transition-all duration-250"
          >
            View Work
            <ExternalLink className="w-4 h-4 opacity-50 group-hover:opacity-90 transition-opacity" />
          </button>
        </div>

        {/* Scroll indicator */}
        <div className="reveal reveal-delay-4 mt-16 sm:mt-20 hidden sm:flex items-center gap-3 text-[#9CA3AF]/60 text-xs">
          <div className="w-5 h-9 border border-[#1F2622] rounded-full flex items-start justify-center pt-1.5">
            <div className="w-0.5 h-2 bg-[#A3FF12] rounded-full animate-bounce" />
          </div>
          <span className="tracking-[0.2em] uppercase text-[10px]">Scroll</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
