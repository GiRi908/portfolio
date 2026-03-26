import React from 'react';
import { Linkedin, Github, Mail } from 'lucide-react';

const links = [
  { icon: Linkedin, label: 'LinkedIn', url: 'https://www.linkedin.com/in/giribalank/' },
  { icon: Github, label: 'GitHub', url: 'https://github.com/GiRi908' },
  { icon: Mail, label: 'Email', url: 'mailto:kit27.am20@gmail.com' },
];

const Footer = () => {
  const handleHover = (isHover) =>
    window.dispatchEvent(new CustomEvent('cursor-hover', { detail: isHover }));

  return (
    <footer className="border-t border-[#1F2622] bg-[#0B0F0E]">
      <div className="container-max mx-auto px-4 sm:px-6 lg:px-8 py-10 flex flex-col sm:flex-row items-center justify-between gap-6">
        {/* Branding */}
        <div>
          <span className="text-sm font-semibold text-[#EDEDED]">Giribalan K</span>
          <span className="ml-2 text-xs text-[#9CA3AF]">— AI &amp; ML Engineer</span>
        </div>

        {/* Social links */}
        <div className="flex items-center gap-5">
          {links.map(({ icon: Icon, label, url }) => (
            <a
              key={label}
              href={url}
              target={url.startsWith('mailto') ? undefined : '_blank'}
              rel="noopener noreferrer"
              aria-label={label}
              className="text-[#9CA3AF] hover:text-[#A3FF12] transition-colors duration-200"
              onMouseEnter={() => handleHover(true)}
              onMouseLeave={() => handleHover(false)}
            >
              <Icon className="w-4 h-4" strokeWidth={1.5} />
            </a>
          ))}
        </div>

        {/* Copyright */}
        <p className="text-xs text-[#9CA3AF]/50">
          © {new Date().getFullYear()} Giribalan K. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
