import React from 'react';
import { Mail, Linkedin, Twitter, MessageSquare } from 'lucide-react'; // Using Lucide for modern line icons

// --- Data for the Contact Buttons ---
const contactLinks = [
  { 
    name: 'Gmail', 
    icon: Mail, 
    href: 'mailto:nk05661@gmail.com',
    accentColor: 'text-red-400' // Subtle accent
  },
  { 
    name: 'LinkedIn', 
    icon: Linkedin, 
    href: 'https://www.linkedin.com/in/neeraj-kumar1904/',
    accentColor: 'text-sky-400'
  },
  { 
    name: 'Twitter (X)', 
    icon: Twitter, 
    href: 'https://x.com/_19_neeraj',
    accentColor: 'text-gray-400'
  },
  { 
    name: 'WhatsApp', 
    icon: MessageSquare, 
    href: 'https://wa.me/919950117641',
    accentColor: 'text-green-400'
  },
];

// --- Sub-Component for the Premium Button ---
const ContactButton = ({ name, icon: Icon, href, accentColor }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className={`
      flex items-center justify-center gap-3 p-4 md:px-8 md:py-5 rounded-xl cursor-pointer
      transition-all duration-300 ease-in-out transform
      
      /* Glassmorphism Background: Dark blue, translucent */
      bg-white/10 backdrop-blur-sm 
      
      /* Subtle Glow (box-shadow) */
      shadow-lg shadow-cyan-500/10 
      
      /* Hover Effects: Lift, intensify glow */
      hover:-translate-y-1 hover:bg-white/15 
      hover:shadow-2xl hover:shadow-cyan-500/25
    `}
  >
    <Icon 
      className={`
        w-6 h-6 md:w-7 md:h-7 
        ${accentColor} /* Use specific color for icon */
        transition-colors duration-300 ease-in-out
        
        /* Neon effect on hover */
        group-hover:text-white group-hover:drop-shadow-[0_0_5px_rgba(0,255,255,0.7)]
      `} 
    />
    <span className="text-white text-lg font-semibold tracking-wide">
      {name}
    </span>
  </a>
);

// --- Main Contact Section Component ---
const ContactNexus = () => {
  return (
    // Base Section: Dark background with subtle radial gradient and vertical padding
    <section className="bg-[#0C0C1E] py-24 md:py-36 font-sans relative overflow-hidden">
      
      {/* Optional: Ambient Light/Glow Element (for futuristic feel) */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
        <div className="w-1/2 h-full bg-cyan-900/10 blur-3xl rounded-full absolute top-1/2 left-0 transform -translate-y-1/2"></div>
        <div className="w-1/2 h-full bg-indigo-900/10 blur-3xl rounded-full absolute top-1/2 right-0 transform -translate-y-1/2"></div>
      </div>
      
      {/* Content Container with Centering and Padding */}
      <div className="container mx-auto px-6 relative z-10 max-w-6xl">
        
        {/* --- Text Content --- */}
        <div className="text-center mb-16">
          <h2 className="text-white text-5xl md:text-7xl font-extrabold tracking-tight mb-6">
            Let’s Build Something Great.
          </h2>
          <p className="text-[#A0A0C0] text-xl md:text-2xl font-light max-w-4xl mx-auto">
            Currently **open** for new freelance projects and full-time frontend roles. I'm always excited to discuss innovative collaborations. Reach out below!
          </p>
        </div>

        {/* --- Button Grid (Airy and Centered) --- */}
        <div className="flex flex-wrap justify-center gap-6 md:gap-8">
          {contactLinks.map((link) => (
            <ContactButton key={link.name} {...link} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactNexus;