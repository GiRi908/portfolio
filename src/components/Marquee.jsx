import React from 'react';

const skills = [
  'Python', 'JavaScript', 'Java', 'C', 'SQL',
  'React.js', 'TensorFlow', 'Keras', 'Flask',
  'MySQL', 'MongoDB', 'Git', 'GitHub',
  'Jupyter Notebook', 'VS Code', 'HTML', 'CSS',
];

const SkillChip = ({ skill }) => (
  <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border border-[#1F2622] bg-[#141918] text-[#9CA3AF] text-xs font-medium whitespace-nowrap hover:border-[#A3FF12]/30 hover:text-[#EDEDED] transition-colors duration-200 cursor-default select-none">
    <span className="w-1 h-1 rounded-full bg-[#A3FF12]/40 shrink-0" />
    {skill}
  </span>
);

const Marquee = () => {
  return (
    <section className="py-8 border-y border-[#1F2622]">

      {/* ── MOBILE & TABLET (< md): horizontal snap-scroll chip strip ── */}
      <div className="md:hidden relative">
        {/* Left/right fade hints */}
        <div
          className="pointer-events-none absolute left-0 top-0 bottom-0 w-8 z-10"
          style={{ background: 'linear-gradient(to right, #0B0F0E, transparent)' }}
        />
        <div
          className="pointer-events-none absolute right-0 top-0 bottom-0 w-8 z-10"
          style={{ background: 'linear-gradient(to left, #0B0F0E, transparent)' }}
        />
        <div className="skills-scroll px-4">
          {skills.map((skill, idx) => (
            <SkillChip key={idx} skill={skill} />
          ))}
          <span className="w-4 shrink-0" aria-hidden="true" />
        </div>
      </div>

      {/* ── DESKTOP (md+): continuous marquee ── */}
      {/*  overflow-hidden must be on THIS wrapper, not body, for animation to work */}
      <div
        className="hidden md:block"
        style={{
          overflow: 'hidden',
          WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)',
          maskImage: 'linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)',
        }}
      >
        {/* The track holds 2 copies — animation moves it left by exactly 50% */}
        <div
          style={{
            display: 'flex',
            whiteSpace: 'nowrap',
            willChange: 'transform',
            animation: 'marqueeScroll 35s linear infinite',
          }}
          onMouseEnter={(e) => (e.currentTarget.style.animationPlayState = 'paused')}
          onMouseLeave={(e) => (e.currentTarget.style.animationPlayState = 'running')}
        >
          {[0, 1].map((copy) => (
            <div
              key={copy}
              style={{ display: 'flex', alignItems: 'center', gap: '2.5rem', padding: '0 2.5rem', flexShrink: 0 }}
            >
              {skills.map((skill, idx) => (
                <React.Fragment key={`${copy}-${idx}`}>
                  <span style={{ fontSize: '0.875rem', fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(156,163,175,0.55)' }}>
                    {skill}
                  </span>
                  <span style={{ color: 'rgba(163,255,18,0.25)', fontSize: '1rem' }}>✦</span>
                </React.Fragment>
              ))}
            </div>
          ))}
        </div>
      </div>

    </section>
  );
};

export default Marquee;
