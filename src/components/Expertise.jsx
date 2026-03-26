import React from 'react';
import { Brain, Globe, Puzzle } from 'lucide-react';

const services = [
  {
    icon: Brain,
    title: 'AI & Machine Learning',
    description:
      'Building intelligent systems using deep learning, computer vision, and NLP. From model training to production deployment.',
    tags: ['TensorFlow', 'Keras', 'Python'],
  },
  {
    icon: Globe,
    title: 'Full Stack Development',
    description:
      'Creating responsive, high-performance web applications with modern React frontends and robust backend APIs.',
    tags: ['React.js', 'Flask', 'MongoDB'],
  },
  {
    icon: Puzzle,
    title: 'Problem Solving',
    description:
      'Designing elegant solutions to complex real-world problems, blending data-driven insight with clean engineering.',
    tags: ['Data Analytics', 'Algorithm Design'],
  },
];

const Expertise = () => {
  const handleHover = (isHover) =>
    window.dispatchEvent(new CustomEvent('cursor-hover', { detail: isHover }));

  return (
    <section id="expertise" className="section-padding">
      <div className="container-max">
        {/* Header */}
        <div className="mb-14 reveal">
          <p className="section-label">What I Do</p>
          <h2 className="section-title">Services</h2>
          <p className="text-[#9CA3AF] max-w-lg text-sm leading-relaxed">
            I specialize in building AI-powered products and modern web experiences that are fast, functional, and impactful.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className={`reveal reveal-delay-${index + 1} card-glass p-8 group hover:-translate-y-2 hover:border-[#7C8AFF]/40 hover:bg-[#141918]`}
                onMouseEnter={() => handleHover(true)}
                onMouseLeave={() => handleHover(false)}
              >
                {/* Icon */}
                <div className="mb-6 w-11 h-11 flex items-center justify-center rounded-xl bg-[#A3FF12]/10 border border-[#A3FF12]/20 group-hover:bg-[#A3FF12]/15 transition-colors duration-200">
                  <Icon className="w-5 h-5 text-[#A3FF12]" strokeWidth={1.5} />
                </div>

                {/* Title */}
                <h3 className="text-lg font-semibold text-[#EDEDED] mb-3 group-hover:text-[#A3FF12] transition-colors duration-200">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-[#9CA3AF] text-sm leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {service.tags.map((tag, i) => (
                    <span key={i} className="skill-tag">
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
