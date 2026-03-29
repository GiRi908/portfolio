import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const projects = [
  {
    name: 'Disaster Relief Map',
    subtitle: 'Emergency Management Platform',
    description:
      'A full-stack emergency management system with real-time disaster tracking using Leaflet.js interactive maps and Firebase backend.',
    link: 'https://github.com/GiRi908',
    tags: ['React', 'Firebase', 'Leaflet.js'],
    accent: '#A3FF12',
    featured: true,
  },
  {
    name: 'Oral Cancer Detection',
    subtitle: 'Deep Learning Diagnostics',
    description:
      'Deep learning-based oral cancer detection system using a CNN model trained on medically annotated images. Connected via Flask API to a React frontend.',
    link: 'https://github.com/GiRi908',
    tags: ['Python', 'TensorFlow', 'Flask', 'React'],
    accent: '#7C8AFF',
    featured: false,
  },
  {
    name: 'Travel & Tourism Website',
    subtitle: 'Interactive Web Experience',
    description:
      'Fully responsive travel and tourism website featuring destination showcases, tour packages, and user guides with interactive elements.',
    link: 'https://github.com/GiRi908',
    tags: ['HTML5', 'CSS3', 'JavaScript'],
    accent: '#A3FF12',
    featured: false,
  },
];

const Projects = () => {
  const handleHover = (isHover) =>
    window.dispatchEvent(new CustomEvent('cursor-hover', { detail: isHover }));

  return (
    <section id="projects" className="section-padding bg-[#0B0F0E]">
      <div className="container-max">
        {/* Header */}
        <div className="mb-12 reveal">
          <p className="section-label">Portfolio</p>
          <h2 className="section-title">Featured Projects</h2>
          <p className="text-[#9CA3AF] text-sm max-w-md leading-relaxed mt-1">
            A selection of projects that showcase my engineering and design capabilities.
          </p>
        </div>

        {/* Asymmetric grid — featured card spans 2 cols on large screens */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {projects.map((project, index) => (
            <a
              key={index}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`reveal reveal-delay-${index + 1} card-glass group flex flex-col p-5 sm:p-7 transition-all duration-300 ${
                project.featured ? 'md:col-span-2 lg:col-span-2' : ''
              }`}
              style={{ '--accent': project.accent }}
              onMouseEnter={(e) => {
                handleHover(true);
                e.currentTarget.style.boxShadow = `0 12px 36px ${project.accent}12`;
                e.currentTarget.style.borderColor = `${project.accent}30`;
                e.currentTarget.style.transform = 'translateY(-3px)';
              }}
              onMouseLeave={(e) => {
                handleHover(false);
                e.currentTarget.style.boxShadow = '';
                e.currentTarget.style.borderColor = '';
                e.currentTarget.style.transform = '';
              }}
            >
              {/* Top row */}
              <div className="flex items-start justify-between mb-5">
                <div
                  className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg flex items-center justify-center text-xs font-bold font-display"
                  style={{
                    backgroundColor: `${project.accent}14`,
                    color: project.accent,
                    border: `1px solid ${project.accent}22`,
                  }}
                >
                  {String(index + 1).padStart(2, '0')}
                </div>
                <ArrowUpRight
                  className="w-4 h-4 text-[#9CA3AF]/50 group-hover:text-[#A3FF12] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200"
                  strokeWidth={1.5}
                />
              </div>

              {/* Content */}
              <div className="flex-1">
                <p className="text-[10px] sm:text-xs font-medium text-[#9CA3AF]/70 mb-1 tracking-wide uppercase">
                  {project.subtitle}
                </p>
                <h3
                  className="text-base sm:text-lg font-semibold text-[#EDEDED] mb-3 transition-colors duration-200 font-display"
                  style={{ '--tw-text-opacity': 1 }}
                >
                  <span className="group-hover:text-[color:var(--accent)] transition-colors duration-200">
                    {project.name}
                  </span>
                </h3>
                <p className={`text-sm text-[#9CA3AF] leading-relaxed mb-5 ${project.featured ? 'sm:max-w-lg' : ''}`}>
                  {project.description}
                </p>
              </div>

              {/* Footer — tags */}
              <div className="flex flex-wrap gap-1.5 pt-4 border-t border-[#1F2622]">
                {project.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="px-2.5 py-1 text-[10px] font-medium rounded-full border"
                    style={{
                      color: `${project.accent}90`,
                      backgroundColor: `${project.accent}0D`,
                      borderColor: `${project.accent}20`,
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </a>
          ))}
        </div>

        {/* View all CTA — left-aligned for slight asymmetry */}
        <div className="reveal mt-10">
          <a
            href="https://github.com/GiRi908"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 border border-[#1F2622] text-[#9CA3AF] text-sm font-medium rounded-full hover:border-[#A3FF12]/30 hover:text-[#EDEDED] transition-all duration-200"
            onMouseEnter={() => handleHover(true)}
            onMouseLeave={() => handleHover(false)}
          >
            View all on GitHub
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
