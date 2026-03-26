import React from 'react';

const About = () => {
  return (
    <section id="about" className="section-padding bg-[#0B0F0E]">
      <div className="container-max">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
          {/* Left — Text */}
          <div>
            <div className="reveal mb-8 md:mb-10">
              <p className="section-label">About Me</p>
              <h2 className="text-3xl sm:text-4xl sm:text-5xl font-bold text-[#EDEDED] leading-tight mb-0">
                Building the future,<br />
                <span className="text-[#A3FF12]">one model at a time.</span>
              </h2>
            </div>

            <div className="space-y-4 sm:space-y-5 text-[#9CA3AF] text-sm leading-[1.85] reveal reveal-delay-1">
              <p>
                Hi! I'm <span className="text-[#EDEDED] font-semibold">Giribalan K</span>, a Computer Science &amp;
                Engineering student specializing in{' '}
                <span className="text-[#A3FF12] font-medium">Artificial Intelligence and Machine Learning</span> at
                KIT — Kalaignarkarunanidhi Institute of Technology.
              </p>
              <p>
                I'm passionate about building{' '}
                <span className="text-[#EDEDED] font-medium">AI-powered solutions</span> and modern web applications
                that solve real-world problems. My stack spans deep learning pipelines, REST APIs, and interactive
                React frontends.
              </p>
              <p>
                My goal is to become a strong{' '}
                <span className="text-[#7C8AFF] font-medium">AI Engineer and Full-Stack Developer</span>, blending
                functionality and innovation to create impactful digital products.
              </p>
            </div>

            {/* Quick stats */}
            <div className="reveal reveal-delay-2 mt-8 md:mt-10 grid grid-cols-3 gap-4 sm:gap-6">
              {[
                { value: '2+', label: 'Years Learning' },
                { value: '5+', label: 'Projects Built' },
                { value: '2', label: 'Internships' },
              ].map((stat, i) => (
                <div key={i} className="text-center md:text-left">
                  <div className="text-xl sm:text-2xl font-bold text-[#A3FF12]">{stat.value}</div>
                  <div className="text-xs text-[#9CA3AF] mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Terminal block (shown on md+) */}
          <div className="reveal reveal-delay-1 hidden md:block">
            <div className="card-glass rounded-2xl overflow-hidden border-[#1F2622]">
              {/* Terminal header */}
              <div className="flex items-center gap-2 px-4 sm:px-5 py-3 sm:py-3.5 border-b border-[#1F2622] bg-[#141918]">
                <span className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
                <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
                <span className="w-2.5 h-2.5 rounded-full bg-green-500/70" />
                <span className="ml-3 text-xs text-[#9CA3AF]/50 font-mono">giribalan@dev ~ %</span>
              </div>

              {/* Terminal body */}
              <div className="p-5 sm:p-6 font-mono text-xs sm:text-sm space-y-3">
                <div>
                  <span className="text-[#A3FF12]">$ </span>
                  <span className="text-[#EDEDED]">whoami</span>
                </div>
                <div className="text-[#9CA3AF] pl-4">Giribalan K — AI &amp; ML Engineer</div>

                <div className="mt-2">
                  <span className="text-[#A3FF12]">$ </span>
                  <span className="text-[#EDEDED]">cat skills.json</span>
                </div>
                <div className="pl-4 text-xs leading-6">
                  <span className="text-[#1F2622]">{'{'}</span><br />
                  <span className="pl-4 text-[#7C8AFF]">"languages"</span>
                  <span className="text-[#9CA3AF]">: </span>
                  <span className="text-[#A3FF12]/80">["Python", "JavaScript", "Java"]</span>
                  <span className="text-[#9CA3AF]">,</span><br />
                  <span className="pl-4 text-[#7C8AFF]">"ml_stack"</span>
                  <span className="text-[#9CA3AF]">: </span>
                  <span className="text-[#A3FF12]/80">["TensorFlow", "Keras"]</span>
                  <span className="text-[#9CA3AF]">,</span><br />
                  <span className="pl-4 text-[#7C8AFF]">"web"</span>
                  <span className="text-[#9CA3AF]">: </span>
                  <span className="text-[#A3FF12]/80">["React", "Flask"]</span><br />
                  <span className="text-[#1F2622]">{'}'}</span>
                </div>

                <div className="mt-2">
                  <span className="text-[#A3FF12]">$ </span>
                  <span className="text-[#EDEDED]">echo $STATUS</span>
                </div>
                <div className="pl-4 text-[#A3FF12] flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#A3FF12] animate-pulse" />
                  Open to opportunities
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
