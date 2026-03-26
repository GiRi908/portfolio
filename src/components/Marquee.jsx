import React from 'react';

const skills = [
  'Python', 'JavaScript', 'Java', 'C', 'SQL',
  'React.js', 'TensorFlow', 'Keras', 'Flask',
  'MySQL', 'MongoDB', 'Git', 'GitHub',
  'Jupyter Notebook', 'VS Code', 'HTML', 'CSS',
];

const Marquee = () => {
  return (
    <section className="py-10 border-y border-[#1F2622] overflow-hidden marquee-mask">
      <div className="flex whitespace-nowrap will-change-transform" style={{ animation: 'scroll 35s linear infinite' }}>
        {[...Array(2)].map((_, i) => (
          <div key={i} className="flex items-center gap-10 px-10 shrink-0">
            {skills.map((skill, idx) => (
              <React.Fragment key={`${i}-${idx}`}>
                <span className="text-sm font-medium tracking-widest uppercase text-[#9CA3AF]/60">
                  {skill}
                </span>
                <span className="text-[#A3FF12]/30 text-lg">✦</span>
              </React.Fragment>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Marquee;
