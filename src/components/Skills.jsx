import React from 'react';

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
        <div className="mb-14 reveal">
          <p className="section-label">Technical Skills</p>
          <h2 className="section-title">My Stack</h2>
          <p className="text-[#9CA3AF] text-sm max-w-md leading-relaxed">
            Technologies and tools I use to build intelligent, scalable applications.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {skillGroups.map((group, index) => (
            <div
              key={index}
              className={`reveal reveal-delay-${index + 1} card-glass p-7 group hover:-translate-y-1.5 hover:border-[#A3FF12]/25 transition-all duration-200`}
              onMouseEnter={() => handleHover(true)}
              onMouseLeave={() => handleHover(false)}
            >
              {/* Category label */}
              <div className="flex items-center gap-2.5 mb-6">
                <span
                  className="w-2 h-2 rounded-full shrink-0"
                  style={{ backgroundColor: group.color }}
                />
                <h3
                  className="text-xs font-semibold tracking-widest uppercase"
                  style={{ color: group.color }}
                >
                  {group.category}
                </h3>
              </div>

              {/* Pills */}
              <div className="flex flex-wrap gap-2">
                {group.items.map((item, i) => (
                  <span
                    key={i}
                    className={`px-3 py-1 text-xs font-medium rounded-full border transition-colors duration-200 ${
                      group.color === '#A3FF12'
                        ? 'bg-[#A3FF12]/8 text-[#A3FF12]/80 border-[#A3FF12]/15 group-hover:bg-[#A3FF12]/12'
                        : 'bg-[#7C8AFF]/8 text-[#7C8AFF]/80 border-[#7C8AFF]/15 group-hover:bg-[#7C8AFF]/12'
                    }`}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
