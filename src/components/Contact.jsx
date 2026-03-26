import React, { useState } from 'react';
import { Mail, Linkedin, Github, Send } from 'lucide-react';

const socials = [
  {
    icon: Linkedin,
    label: 'LinkedIn',
    handle: 'giribalank',
    url: 'https://www.linkedin.com/in/giribalank/',
  },
  {
    icon: Github,
    label: 'GitHub',
    handle: 'GiRi908',
    url: 'https://github.com/GiRi908',
  },
];

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleHover = (isHover) =>
    window.dispatchEvent(new CustomEvent('cursor-hover', { detail: isHover }));

  const handleChange = (e) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    // Opens mail client pre-filled
    const subject = encodeURIComponent(`Portfolio Contact from ${form.name}`);
    const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`);
    window.open(`mailto:kit27.am20@gmail.com?subject=${subject}&body=${body}`);
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <section id="contact" className="section-padding bg-[#0B0F0E]">
      <div className="container-max">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left — CTA */}
          <div>
            <div className="reveal mb-10">
              <p className="section-label">Get In Touch</p>
              <h2 className="text-4xl sm:text-5xl font-bold text-[#EDEDED] leading-tight mb-6">
                Let's <span className="text-[#A3FF12]">Connect</span>
              </h2>
              <p className="text-[#9CA3AF] text-sm leading-relaxed max-w-md">
                I'm open to new opportunities, collaborations, or just a good conversation. Drop me a message and I'll get back to you.
              </p>
            </div>

            {/* Email */}
            <div className="reveal reveal-delay-1 mb-10">
              <a
                href="mailto:kit27.am20@gmail.com"
                className="group inline-flex items-center gap-3 text-[#EDEDED] hover:text-[#A3FF12] transition-colors duration-200"
                onMouseEnter={() => handleHover(true)}
                onMouseLeave={() => handleHover(false)}
              >
                <div className="w-10 h-10 rounded-xl bg-[#A3FF12]/10 border border-[#A3FF12]/20 flex items-center justify-center shrink-0 group-hover:bg-[#A3FF12]/15 transition-colors">
                  <Mail className="w-4 h-4 text-[#A3FF12]" strokeWidth={1.5} />
                </div>
                <span className="text-sm font-medium">kit27.am20@gmail.com</span>
              </a>
            </div>

            {/* Socials */}
            <div className="reveal reveal-delay-2 flex flex-col gap-4">
              {socials.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-3 text-[#9CA3AF] hover:text-[#EDEDED] transition-colors duration-200 w-fit"
                    onMouseEnter={() => handleHover(true)}
                    onMouseLeave={() => handleHover(false)}
                  >
                    <div className="w-10 h-10 rounded-xl bg-[#141918] border border-[#1F2622] flex items-center justify-center shrink-0 group-hover:border-[#7C8AFF]/40 transition-colors">
                      <Icon className="w-4 h-4" strokeWidth={1.5} />
                    </div>
                    <div>
                      <div className="text-xs text-[#9CA3AF]/50">{social.label}</div>
                      <div className="text-sm font-medium text-[#EDEDED]">@{social.handle}</div>
                    </div>
                  </a>
                );
              })}
            </div>
          </div>

          {/* Right — Contact form */}
          <div className="reveal reveal-delay-2">
            <form onSubmit={handleSubmit} className="card-glass p-8 space-y-5">
              <div>
                <label className="text-xs font-medium text-[#9CA3AF] mb-2 block">Your Name</label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  placeholder="John Doe"
                  className="w-full bg-[#0B0F0E] border border-[#1F2622] rounded-xl px-4 py-3 text-sm text-[#EDEDED] placeholder-[#9CA3AF]/40 focus:outline-none focus:border-[#A3FF12]/40 transition-colors duration-200"
                />
              </div>
              <div>
                <label className="text-xs font-medium text-[#9CA3AF] mb-2 block">Email Address</label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  placeholder="john@example.com"
                  className="w-full bg-[#0B0F0E] border border-[#1F2622] rounded-xl px-4 py-3 text-sm text-[#EDEDED] placeholder-[#9CA3AF]/40 focus:outline-none focus:border-[#A3FF12]/40 transition-colors duration-200"
                />
              </div>
              <div>
                <label className="text-xs font-medium text-[#9CA3AF] mb-2 block">Message</label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  placeholder="Tell me about your project or opportunity..."
                  className="w-full bg-[#0B0F0E] border border-[#1F2622] rounded-xl px-4 py-3 text-sm text-[#EDEDED] placeholder-[#9CA3AF]/40 focus:outline-none focus:border-[#A3FF12]/40 transition-colors duration-200 resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 py-3.5 bg-[#A3FF12] text-[#0B0F0E] font-semibold text-sm rounded-xl hover:bg-[#b8ff3d] transition-all duration-200 hover:scale-[1.02] active:scale-100"
                onMouseEnter={() => handleHover(true)}
                onMouseLeave={() => handleHover(false)}
              >
                {sent ? (
                  'Opening mail client...'
                ) : (
                  <>
                    Send Message
                    <Send className="w-4 h-4" strokeWidth={1.5} />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
