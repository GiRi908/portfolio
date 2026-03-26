import React from 'react';

const experiences = [
  {
    year: '2025',
    role: 'Full Stack Web Development Intern',
    company: 'LearnLogicify Technologies LLP',
    description:
      'Developed responsive full-stack web applications using React.js. Successfully delivered project milestones and collaborated with cross-functional teams.',
    side: 'right',
  },
  {
    year: '2024',
    role: 'AI & Data Analytics Intern',
    company: 'Edunet Foundation | AICTE & Shell India',
    description:
      'Gained hands-on experience in AI technologies, data analytics methodologies, and sustainable green skills practices.',
    side: 'left',
  },
];

const Experience = () => {
  return (
    <section id="experience" className="section-padding">
      <div className="container-max">
        {/* Header */}
        <div className="mb-16 reveal">
          <p className="section-label">Career</p>
          <h2 className="section-title">Experience</h2>
        </div>

        {/* Timeline */}
        <div className="max-w-3xl mx-auto relative">
          {/* Vertical line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-[#1F2622] -translate-x-1/2 hidden md:block" />

          <div className="space-y-10">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`reveal reveal-delay-${index + 1} relative flex flex-col md:flex-row items-start gap-6 ${
                  exp.side === 'left' ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Year badge — centered on line */}
                <div className="md:absolute md:left-1/2 md:-translate-x-1/2 z-10 shrink-0">
                  <span className="inline-flex items-center px-4 py-1.5 rounded-full text-xs font-bold tracking-widest bg-[#A3FF12] text-[#0B0F0E]">
                    {exp.year}
                  </span>
                </div>

                {/* Card — takes up half width on desktop */}
                <div
                  className={`w-full md:w-[calc(50%-2.5rem)] card-glass p-7 hover:border-[#A3FF12]/25 hover:-translate-y-1 group ${
                    exp.side === 'left' ? 'md:text-right' : ''
                  }`}
                >
                  <h3 className="text-base font-semibold text-[#EDEDED] mb-1 group-hover:text-[#A3FF12] transition-colors duration-200">
                    {exp.role}
                  </h3>
                  <p className="text-xs font-medium text-[#7C8AFF] mb-3">{exp.company}</p>
                  <p className="text-sm text-[#9CA3AF] leading-relaxed">{exp.description}</p>
                </div>

                {/* Spacer for the other side */}
                <div className="hidden md:block w-[calc(50%-2.5rem)]" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
