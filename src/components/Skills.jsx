import React from 'react';
import TiltCard from './TiltCard';

// Slight variation by card index — breaks identical card pattern
const cardOffsets = ['pt-7 pb-8', 'pt-8 pb-7', 'pt-7 pb-8', 'pt-9 pb-7'];

const skillGroups = [
  {
    category: 'Languages',
    color: '#A3FF12',
    items: ['Python', 'JavaScript', 'Java', 'C', 'SQL', 'HTML', 'CSS'],
  },
  {
    category: 'Frameworks & Libraries',
    color: '#7C8AFF',
    items: ['React.js', 'TensorFlow', 'Keras', 'Flask'],
  },
  {
    category: 'Databases',
    color: '#A3FF12',
    items: ['MySQL', 'MongoDB'],
  },
  {
    category: 'Tools & Platforms',
    color: '#7C8AFF',
    items: ['Git', 'GitHub', 'VS Code', 'Jupyter Notebook'],
  },
];

const Skills = () => {
  const handleHover = (isHover) =>
    window.dispatchEvent(new CustomEvent('cursor-hover', { detail: isHover }));

  return (
    <section id="skills" className="section-padding">
      <div className="container-max">
        {/* Header */}
        <div className="mb-12 reveal">
          <p className="section-label">Technical Skills</p>
          <h2 className="section-title">My Stack</h2>
          <p className="text-[#9CA3AF] text-sm max-w-md leading-relaxed mt-1">
            Technologies and tools I use to build intelligent, scalable applications.
          </p>
        </div>

        {/* Cards — slightly varied padding per card for human rhythm */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {skillGroups.map((group, index) => (
            <TiltCard
              key={index}
              className={`reveal reveal-delay-${index + 1} card-glass px-6 group hover:border-[#A3FF12]/20 transition-colors duration-300 ${cardOffsets[index]}`}
            >
              <div
                onMouseEnter={() => handleHover(true)}
                onMouseLeave={() => handleHover(false)}
              >
              {/* Category label */}
              <div className="flex items-center gap-2 mb-5">
                <span
                  className="w-1.5 h-1.5 rounded-full shrink-0"
                  style={{ backgroundColor: group.color }}
                />
                <h3
                  className="text-[10px] font-semibold tracking-[0.18em] uppercase"
                  style={{ color: group.color }}
                >
                  {group.category}
                </h3>
              </div>

              {/* Pills — each with a tiny staggered transition delay */}
              <div className="flex flex-wrap gap-2">
                {group.items.map((item, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 text-xs font-medium rounded-full border transition-colors duration-200"
                    style={{
                      transitionDelay: `${i * 30}ms`,
                      color: `${group.color}CC`,
                      backgroundColor: `${group.color}0D`,
                      borderColor: `${group.color}20`,
                    }}
                  >
                    {item}
                  </span>
                ))}
              </div>
              </div>
            </TiltCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
