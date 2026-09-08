"use client";

import { useEffect, useState } from "react";

const featured = [
  ["01", "DealerOS", "A dealership operating system connecting CRM, sales workflows and service operations in one product experience.", "LIVE / MVP", "Full Stack · Product", "https://dealeros-mvp.vercel.app/dashboard"],
  ["02", "Econexus", "A commercial economics intelligence platform for research, surveys, analytics, datasets and monetizable insight.", "LIVE / MVP", "Data · Product", "https://econexus-data-research-platform.vercel.app/"],
  ["03", "EconNext Lagos", "A flagship conference platform designed around responsive product architecture, editorial storytelling, motion and integrations.", "LIVE / PUBLIC", "Frontend · Product", "https://econnext-lagos-platform-version-2.vercel.app/"],
  ["04", "Career Authority", "An interactive assessment experience translating executive presence, visibility and communication into a personalized digital result.", "LIVE / MVP", "UX · Web App", "https://ornella-career-authority-assessment.vercel.app/"],
  ["05", "MODE", "A creative technology company site built around strong brand expression, editorial composition and modern web interaction.", "LIVE / PUBLIC", "Brand · Web", "https://mode-site-alpha.vercel.app/"],
  ["06", "Femi Portfolio", "The portfolio system itself: a living showcase for software engineering, product building and UI/UX work.", "LIVE / PUBLIC", "Next.js · Motion", "https://oluwafemi-ayansola-portfolio-rho.vercel.app/"],
] as const;

const archive = ["LifeSaver MedConnect", "CapitalLink", "Medilens AI", "Digital Fitness Wellness", "Shoppers", "RoomieConnect", "CargoLink", "MODE Store", "LuxeStay", "BuildTrack", "PlayNaija", "TasteNG", "ChopNow", "SwiftLogistics", "TrackNG", "MediCare", "DocBook", "GreenHarvest", "AgroMarket", "NovaBank Dashboard", "PrimeEstate", "PropMarket", "PetroCorp", "PetroOps", "SolarEdge", "SolarQuote"];

const stack = [
  ["01", "FRONTEND", "React / Next.js / TypeScript / JavaScript / Tailwind / HTML / CSS"],
  ["02", "BACKEND", "Python / Django / Node.js / REST APIs / SQL / PostgreSQL"],
  ["03", "PRODUCT", "Product discovery / UX / prototyping / user flows / usability testing"],
  ["04", "DESIGN", "Figma / Adobe XD / Sketch / InVision / Behance"],
  ["05", "MOBILE", "React Native / mobile application development"],
  ["06", "ENGINEERING", "Git / Docker / Vercel / Agile / architecture / deployment"],
  ["07", "DATA + AI", "Data products / analytics / AI product concepts / economic intelligence"],
  ["08", "LANGUAGES", "Python / TypeScript / JavaScript / SQL / Java / Swift / PHP"],
];

export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 30);
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? (window.scrollY / max) * 100 : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <main id="top">
      <div className="progress" style={{ width: `${progress}%` }} />
      <div className="grain" aria-hidden="true" />
      <nav className={`nav ${scrolled ? "nav-scrolled" : ""}`}>
        <div className="wrap navin">
          <a className="logo" href="#top" aria-label="Back to top">OA<span>.</span></a>
          <div className="links"><a href="#work">Work</a><a href="#about">About</a><a href="#experience">Experience</a><a href="#stack">Stack</a><a href="#contact">Contact</a></div>
          <a className="availability" href="#contact"><i /> Available for select work</a>
        </div>
      </nav>

      <header className="hero">
        <div className="hero-orbit orbit-one" /><div className="hero-orbit orbit-two" />
        <div className="wrap hero-wrap">
          <div className="hero-top"><p className="eyebrow mono">Lagos, Nigeria <span>—</span> 2026</p><p className="hero-index mono">SCROLL TO EXPLORE <span>↓</span></p></div>
          <div className="hero-title-wrap"><p className="hero-kicker mono">SOFTWARE ENGINEER · PRODUCT BUILDER · UI/UX DESIGNER</p><h1>Oluwafemi<br /><em>Ayansola.</em></h1></div>
          <div className="hero-bottom"><p className="hero-statement">I design and engineer <strong>digital products with a point of view.</strong> From the first idea to the deployed interface, I care about making complex things feel clear, useful and considered.</p><div className="hero-side"><div className="portrait-placeholder"><span>PORTRAIT<br />COMING SOON</span><b>OA</b></div><p className="mono">01 / 04<br />DESIGN · BUILD · SHIP</p></div></div>
        </div>
      </header>

      <section className="marquee" aria-label="Areas of work"><div className="marquee-track mono">SOFTWARE ENGINEERING <b>✳</b> PRODUCT DESIGN <b>✳</b> DIGITAL PRODUCTS <b>✳</b> SOFTWARE ENGINEERING <b>✳</b> PRODUCT DESIGN <b>✳</b> DIGITAL PRODUCTS <b>✳</b></div></section>

      <section className="section work-section" id="work"><div className="wrap"><div className="section-intro"><div><span className="section-no mono">01 — SELECTED WORK</span><h2>Built for<br /><i>real problems.</i></h2></div><p>Products, platforms and experiments across commerce, economics, healthcare, education and creative technology. I prefer shipping useful things over making empty case studies.</p></div><div className="projects">{featured.map(([n, title, description, status, category, url]) => <a className="project" href={url} target="_blank" rel="noreferrer" key={title}><div className="project-no mono">{n}</div><div className="project-main"><div className="project-label mono">{status}</div><h3>{title}<span>↗</span></h3><p>{description}</p></div><div className="project-meta mono">{category}<br /><small>VIEW LIVE ↗</small></div></a>)}</div><div className="archive"><span className="mono">ARCHIVE / EXPERIMENTS</span><p>{archive.map((item, i) => <span key={item}>{item}{i < archive.length - 1 ? "  ·  " : ""}</span>)}</p><small className="mono">Prototype and template builds are presented honestly as works in progress, not production-ready products.</small></div></div></section>

      <section className="statement-section"><div className="wrap statement-grid"><span className="section-no mono">02 — APPROACH</span><div><h2>Good software is<br /><i>felt before it is explained.</i></h2><p>I sit at the intersection of engineering, design and product thinking. That means caring about architecture and interaction with the same intensity.</p></div></div></section>

      <section className="section about-section" id="about"><div className="wrap"><div className="section-intro"><div><span className="section-no mono">03 — ABOUT</span><h2>Engineer<br /><i>with designer instincts.</i></h2></div><p>My path moved from business and marketing into UI/UX, frontend development and software engineering. Today I study Computer Science alongside Economics while building practical digital products.</p></div><div className="about-detail"><div className="about-copy"><p>I care about the whole product: understanding the problem, shaping the experience, engineering the system and getting it into users&apos; hands.</p><p>My interests sit around AI and data products, fintech, commerce, economic intelligence and human-centered interfaces.</p></div><div className="facts"><div><span className="mono">EDUCATION</span><b>B.Sc. Computer Science</b><small>University of the People · 2024—2028</small></div><div><span className="mono">ALSO STUDYING</span><b>B.Sc. Economics</b><small>Caleb University · 2024—2028</small></div><div><span className="mono">DESIGN</span><b>UI/UX Training</b><small>Torilo Academy · 2021</small></div></div></div></div></section>

      <section className="section experience-section" id="experience"><div className="wrap"><div className="section-title-row"><span className="section-no mono">04 — EXPERIENCE</span><h2>A growing<br /><i>body of work.</i></h2></div><div className="timeline"><div className="timeline-row"><span className="mono date">2022 — NOW</span><div><h3>M.O.D.E <small>FULL STACK DEVELOPER</small></h3><p>Full-stack product development across Python, Django, SQL, CMS workflows, code reviews and agile delivery.</p></div><span className="mono place">LAGOS</span></div><div className="timeline-row"><span className="mono date">2026</span><div><h3>EconNext Lagos <small>FRONTEND DEVELOPER</small></h3><p>Frontend implementation, responsive interfaces and deployment workflows for a conference product.</p></div><span className="mono place">LAGOS</span></div><div className="timeline-row"><span className="mono date">2025</span><div><h3>Caleb GDG <small>MOBILE DEVELOPER</small></h3><p>React Native accommodation product exploring graph-based room matching and student housing workflows.</p></div><span className="mono place">LAGOS</span></div><div className="timeline-row"><span className="mono date">2021 — NOW</span><div><h3>Freelance <small>UI/UX DESIGNER</small></h3><p>Product design, research, prototyping and frontend collaboration for clients across different markets.</p></div><span className="mono place">REMOTE</span></div></div></div></section>

      <section className="section stack-section" id="stack"><div className="wrap"><div className="section-title-row"><span className="section-no mono">05 — TOOLKIT</span><h2>Tools I use<br /><i>to make things real.</i></h2></div><div className="stack-grid">{stack.map(([n, title, tools]) => <div className="stack-card" key={title}><span className="mono">{n}</span><b>{title}</b><p>{tools}</p></div>)}</div></div></section>

      <section className="contact-section" id="contact"><div className="wrap contact-wrap"><div><span className="section-no mono">06 — CONTACT</span><h2>Have a problem<br /><i>worth solving?</i></h2></div><div className="contact-right"><p>For software engineering, product design, collaboration or an ambitious digital product, let&apos;s talk.</p><a className="email" href="mailto:ayansolaoluwafemi62@gmail.com">ayansolaoluwafemi62@gmail.com <span>↗</span></a><div className="socials"><a href="https://github.com/OluwafemiAyansola62" target="_blank" rel="noreferrer">GitHub ↗</a><a href="https://www.linkedin.com/in/oluwafemi-ayansola-7b005b1b2/" target="_blank" rel="noreferrer">LinkedIn ↗</a><a href="https://www.behance.net/ayansola" target="_blank" rel="noreferrer">Behance ↗</a></div></div></div></section>
      <footer className="footer wrap"><span>© 2026 Oluwafemi Ayansola</span><span className="mono">LAGOS / NIGERIA</span><a href="#top">BACK TO TOP ↑</a></footer>
    </main>
  );
}
