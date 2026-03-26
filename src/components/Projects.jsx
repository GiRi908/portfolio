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
  },
  {
    name: 'Oral Cancer Detection',
    subtitle: 'Deep Learning Diagnostics',
    description:
      'Deep learning-based oral cancer detection system using a CNN model trained on medically annotated images. Connected via Flask API to a React frontend.',
    link: 'https://github.com/GiRi908',
    tags: ['Python', 'TensorFlow', 'Flask', 'React'],
    accent: '#7C8AFF',
  },
  {
    name: 'Travel & Tourism Website',
    subtitle: 'Interactive Web Experience',
    description:
      'Fully responsive travel and tourism website featuring destination showcases, tour packages, and user guides with interactive elements.',
    link: 'https://github.com/GiRi908',
    tags: ['HTML5', 'CSS3', 'JavaScript'],
    accent: '#A3FF12',
  },
];

const Projects = () => {
  const handleHover = (isHover) =>
    window.dispatchEvent(new CustomEvent('cursor-hover', { detail: isHover }));

  return (
    <section id="projects" className="section-padding bg-[#0B0F0E]">
      <div className="container-max">
        {/* Header */}
        <div className="mb-14 reveal">
          <p className="section-label">Portfolio</p>
          <h2 className="section-title">Featured Projects</h2>
          <p className="text-[#9CA3AF] text-sm max-w-md leading-relaxed">
            A selection of projects that showcase my engineering and design capabilities.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((project, index) => (
            <a
              key={index}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`reveal reveal-delay-${index + 1} card-glass group flex flex-col p-7 hover:-translate-y-2 hover:border-[${project.accent}]/30 hover:shadow-lg`}
              style={{ '--hover-shadow': `0 20px 40px ${project.accent}10` }}
              onMouseEnter={() => handleHover(true)}
              onMouseLeave={() => handleHover(false)}
            >
              {/* Top row */}
              <div className="flex items-start justify-between mb-6">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center text-xs font-bold"
                  style={{
                    backgroundColor: `${project.accent}15`,
                    color: project.accent,
                    border: `1px solid ${project.accent}25`,
                  }}
                >
                  {String(index + 1).padStart(2, '0')}
                </div>
                <ArrowUpRight
                  className="w-4 h-4 text-[#9CA3AF] group-hover:text-[#A3FF12] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200"
                  strokeWidth={1.5}
                />
              </div>

              {/* Content */}
              <div className="flex-1">
                <p className="text-xs font-medium text-[#9CA3AF] mb-1">{project.subtitle}</p>
                <h3 className="text-lg font-semibold text-[#EDEDED] mb-3 group-hover:text-[#A3FF12] transition-colors duration-200">
                  {project.name}
                </h3>
                <p className="text-sm text-[#9CA3AF] leading-relaxed mb-6">
                  {project.description}
                </p>
              </div>

              {/* Footer — tags */}
              <div className="flex flex-wrap gap-2 pt-5 border-t border-[#1F2622]">
                {project.tags.map((tag, i) => (
                  <span key={i} className="skill-tag text-[10px]">
                    {tag}
                  </span>
                ))}
              </div>
            </a>
          ))}
        </div>

        {/* View all CTA */}
        <div className="reveal mt-10 text-center">
          <a
            href="https://github.com/GiRi908"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 border border-[#1F2622] text-[#9CA3AF] text-sm font-medium rounded-full hover:border-[#A3FF12]/30 hover:text-[#EDEDED] transition-all duration-200"
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
