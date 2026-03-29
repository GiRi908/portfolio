import React from 'react';
import { Brain, Globe, Puzzle } from 'lucide-react';

// Each card gets a unique icon accent — breaks the monotone pattern
const services = [
  {
    icon: Brain,
    title: 'AI & Machine Learning',
    description:
      'Building intelligent systems using deep learning, computer vision, and NLP. From model training to production deployment.',
    tags: ['TensorFlow', 'Keras', 'Python'],
    iconBg: '#A3FF12',
    iconBorder: 'rgba(163,255,18,0.2)',
    hoverBorder: 'rgba(163,255,18,0.3)',
  },
  {
    icon: Globe,
    title: 'Full Stack Development',
    description:
      'Creating responsive, high-performance web applications with modern React frontends and robust backend APIs.',
    tags: ['React.js', 'Flask', 'MongoDB'],
    iconBg: '#7C8AFF',
    iconBorder: 'rgba(124,138,255,0.2)',
    hoverBorder: 'rgba(124,138,255,0.35)',
  },
  {
    icon: Puzzle,
    title: 'Problem Solving',
    description:
      'Designing elegant solutions to complex real-world problems, blending data-driven insight with clean engineering.',
    tags: ['Data Analytics', 'Algorithm Design'],
    iconBg: '#EDEDED',
    iconBorder: 'rgba(237,237,237,0.12)',
    hoverBorder: 'rgba(237,237,237,0.2)',
  },
];

const Expertise = () => {
  const handleHover = (isHover) =>
    window.dispatchEvent(new CustomEvent('cursor-hover', { detail: isHover }));

  return (
    <section id="expertise" className="section-padding">
      <div className="container-max">
        {/* Header */}
        <div className="mb-12 reveal">
          <p className="section-label">What I Do</p>
          <h2 className="section-title">Services</h2>
          <p className="text-[#9CA3AF] max-w-lg text-sm leading-relaxed mt-1">
            I specialize in building AI-powered products and modern web experiences that are fast, functional, and impactful.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className={`reveal reveal-delay-${index + 1} card-glass p-7 sm:p-8 group hover:-translate-y-1.5 transition-all duration-300`}
                onMouseEnter={(e) => {
                  handleHover(true);
                  e.currentTarget.style.borderColor = service.hoverBorder;
                }}
                onMouseLeave={(e) => {
                  handleHover(false);
                  e.currentTarget.style.borderColor = '';
                }}
              >
                {/* Icon — unique color per card */}
                <div
                  className="mb-5 w-10 h-10 flex items-center justify-center rounded-xl transition-all duration-300"
                  style={{
                    backgroundColor: `${service.iconBg}12`,
                    border: `1px solid ${service.iconBorder}`,
                  }}
                >
                  <Icon
                    className="w-4.5 h-4.5"
                    style={{ color: service.iconBg }}
                    strokeWidth={1.5}
                  />
                </div>

                {/* Title */}
                <h3 className="text-base font-semibold text-[#EDEDED] mb-2.5 group-hover:text-[#A3FF12] transition-colors duration-250">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-[#9CA3AF] text-sm leading-relaxed mb-5">
                  {service.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {service.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-1 text-[10px] font-medium rounded-full border"
                      style={{
                        color: `${service.iconBg}99`,
                        backgroundColor: `${service.iconBg}0D`,
                        borderColor: `${service.iconBg}20`,
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Expertise;
