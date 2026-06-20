import React from "react";

import { BrandLogos } from "./TechLogos";


interface TechItem {
  name: string;
  LogoComponent: React.ComponentType;
}

const technologies: TechItem[] = [
  { name: "AWS", LogoComponent: BrandLogos.AWS },
  { name: "Docker", LogoComponent: BrandLogos.Docker },
  { name: "React.js", LogoComponent: BrandLogos.React },
  { name: "Vue.js", LogoComponent: BrandLogos.Vue },
  { name: "Node.js", LogoComponent: BrandLogos.Node },
  { name: "WordPress", LogoComponent: BrandLogos.WordPress },
  { name: "Laravel", LogoComponent: BrandLogos.Laravel },
  { name: "Shopify", LogoComponent: BrandLogos.Shopify },
  { name: "Figma", LogoComponent: BrandLogos.Figma },
  { name: "HTML5", LogoComponent: BrandLogos.HTML5 },
  { name: "CSS3", LogoComponent: BrandLogos.CSS3 },
  { name: "JavaScript", LogoComponent: BrandLogos.JavaScript },
];

export default function TechMarquee() {
  const marqueeItems = [...technologies, ...technologies];

  return (
    <section className="py-8 bg-slate-50 border-b border-slate-200/40 overflow-hidden relative">
      {/* Decorative side fades */}
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-slate-50 to-transparent z-10 pointer-events-none"></div>
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-slate-50 to-transparent z-10 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-4 flex flex-col items-center sm:flex-row justify-center gap-2">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-white border border-slate-200 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400">
          ⚙️ Technologies & Tools We Use
        </span>
      </div>

      <div className="flex w-full overflow-hidden">
        <div className="animate-marquee py-2 gap-5">
          {marqueeItems.map((tech, index) => {
            const Logo = tech.LogoComponent;
            return (
              <div
                key={`${tech.name}-${index}`}
                className="inline-flex items-center gap-2.5 px-4.5 py-2.5 bg-white border border-slate-200 rounded-2xl text-xs font-bold text-brand-navy shadow-3xs font-sans hover:border-brand-orange hover:-translate-y-0.5 transition-all duration-300"
              >
                <Logo />
                <span>{tech.name}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
