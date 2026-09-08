"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { ArrowUpRight, CircleDot } from "lucide-react";
import { useEffect, useState } from "react";
import { projects } from "@/lib/projects";

function Magnetic({ children, strength = 0.18 }: { children: React.ReactNode; strength?: number }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 180, damping: 18 });
  const sy = useSpring(y, { stiffness: 180, damping: 18 });
  return <motion.div style={{ x: sx, y: sy }} onMouseMove={(e) => { const r = e.currentTarget.getBoundingClientRect(); x.set((e.clientX - r.left - r.width / 2) * strength); y.set((e.clientY - r.top - r.height / 2) * strength); }} onMouseLeave={() => { x.set(0); y.set(0); }}>{children}</motion.div>;
}

function ProjectVisual({ kind }: { kind: string }) {
  return <div className={`project-visual visual-${kind}`} aria-hidden="true">
    <div className="visual-window"><div className="window-bar"><i /><i /><i /></div><div className="visual-content">
      {kind === "dealer" && <><div className="metric-row"><b>₦12.8M</b><span>REVENUE</span></div><div className="bars"><i /><i /><i /><i /><i /></div><div className="mini-lines"><i /><i /><i /><i /></div></>}
      {kind === "data" && <><div className="metric-row"><b>2,481</b><span>DATA POINTS</span></div><div className="data-orbit"><span /><span /><span /><span /></div><div className="mini-lines"><i /><i /><i /></div></>}
      {kind === "conference" && <><div className="conference-type">ECON<br />NEXT</div><div className="date-chip">LAGOS · 2026</div><div className="mini-lines"><i /><i /><i /></div></>}
      {kind === "assessment" && <><div className="assessment-ring">78%</div><div className="score-line"><b>AUTHORITY</b><span>HIGH</span></div><div className="mini-lines"><i /><i /><i /></div></>}
      {kind === "mode" && <><div className="mode-type">M<br />O<br />D<br />E</div><div className="mode-grid"><i /><i /><i /><i /></div></>}
      {kind === "roomie" && <><div className="room-map"><i /><i /><i /><i /><i /></div><div className="score-line"><b>MATCH</b><span>94%</span></div></>}
    </div></div>
    <span className="visual-index mono">INTERFACE STUDY / 0{projects.findIndex((p) => p.hero === kind) + 1}</span>
  </div>;
}

export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);
  useEffect(() => { const onScroll = () => { setScrolled(window.scrollY > 30); const max = document.documentElement.scrollHeight - window.innerHeight; setProgress(max > 0 ? (window.scrollY / max) * 100 : 0); }; onScroll(); window.addEventListener("scroll", onScroll, { passive: true }); return () => window.removeEventListener("scroll", onScroll); }, []);

  return <main id="top">
    <div className="progress" style={{ width: `${progress}%` }} /><div className="grain" aria-hidden="true" />
    <nav className={`nav ${scrolled ? "nav-scrolled" : ""}`}><div className="wrap navin"><Magnetic><a className="logo" href="#top" aria-label="Back to top">OA<span>.</span></a></Magnetic><div className="links"><a href="#work">Work</a><a href="#about">About</a><a href="#experience">Experience</a><a href="#stack">Stack</a><a href="#contact">Contact</a></div><a className="availability" href="#contact"><CircleDot size={9} /> Available for select work</a></div></nav>

    <header className="hero"><div className="hero-orbit orbit-one" /><div className="hero-orbit orbit-two" /><motion.div className="hero-scanline" animate={{ y: [0, 700, 0] }} transition={{ duration: 10, repeat: Infinity, ease: "linear" }} />
      <div className="wrap hero-wrap"><div className="hero-top"><p className="eyebrow mono">Lagos, Nigeria <span>—</span> 2026</p><p className="hero-index mono">PORTFOLIO / 001 <span>↓</span></p></div>
        <motion.div className="hero-title-wrap" initial={{ opacity: 0, y: 35 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .9, ease: [.16, 1, .3, 1] }}><p className="hero-kicker mono">SOFTWARE ENGINEER · PRODUCT BUILDER · UI/UX DESIGNER</p><h1>Oluwafemi<br /><em>Ayansola.</em></h1></motion.div>
        <div className="hero-bottom"><p className="hero-statement">I design and engineer <strong>digital products with a point of view.</strong> From the first idea to the deployed interface, I care about making complex things feel clear, useful and considered.</p><div className="hero-side"><div className="portrait-placeholder"><span>PORTRAIT<br />COMING SOON</span><b>OA</b></div><p className="mono">01 / 04<br />DESIGN · BUILD · SHIP</p></div></div>
      </div>
    </header>

    <section className="marquee"><div className="marquee-track mono">SOFTWARE ENGINEERING <b>✳</b> PRODUCT DESIGN <b>✳</b> DIGITAL PRODUCTS <b>✳</b> AI + DATA <b>✳</b> SOFTWARE ENGINEERING <b>✳</b> PRODUCT DESIGN <b>✳</b> DIGITAL PRODUCTS <b>✳</b> AI + DATA <b>✳</b></div></section>

    <section className="section work-section" id="work"><div className="wrap"><div className="section-intro"><div><span className="section-no mono">01 — SELECTED WORK</span><h2>Products with<br /><i>a point of view.</i></h2></div><p>Not a gallery of screenshots. These are interfaces, systems and product decisions made around real problems. Open a project to enter the thinking behind it.</p></div>
      <div className="projects">{projects.map((project) => <motion.a className="project project-rich" href={`/work/${project.slug}`} key={project.slug} whileHover="hover"><div className="project-no mono">{project.number}</div><div className="project-main"><div className="project-label mono">{project.status}</div><div className="project-heading"><h3>{project.title}<span>↗</span></h3><ProjectVisual kind={project.hero} /></div><p>{project.summary}</p></div><div className="project-meta mono">{project.type}<br /><small>{project.year} · CASE STUDY ↗</small></div></motion.a>)}</div>
      <div className="archive"><span className="mono">ARCHIVE / EXPERIMENTS</span><p>LifeSaver MedConnect · CapitalLink · Medilens AI · Digital Fitness Wellness · Shoppers · CargoLink · MODE Store · LuxeStay · BuildTrack · PlayNaija · TasteNG · ChopNow · SwiftLogistics · TrackNG · MediCare · DocBook · GreenHarvest · AgroMarket · NovaBank Dashboard · PrimeEstate · PropMarket · PetroCorp · PetroOps · SolarEdge · SolarQuote</p><small className="mono">Prototype and template builds are presented honestly as works in progress, not production-ready products.</small></div>
    </div></section>

    <section className="statement-section"><div className="wrap statement-grid"><span className="section-no mono">02 — APPROACH</span><div><h2>Good software is<br /><i>felt before it is explained.</i></h2><p>I sit at the intersection of engineering, design and product thinking. That means caring about architecture and interaction with the same intensity.</p></div></div></section>
    <section className="section about-section" id="about"><div className="wrap"><div className="section-intro"><div><span className="section-no mono">03 — ABOUT</span><h2>Engineer<br /><i>with designer instincts.</i></h2></div><p>My path moved from business and marketing into UI/UX, frontend development and software engineering. Today I study Computer Science alongside Economics while building practical digital products.</p></div><div className="about-detail"><div className="about-copy"><p>I care about the whole product: understanding the problem, shaping the experience, engineering the system and getting it into users&apos; hands.</p><p>My interests sit around AI and data products, fintech, commerce, economic intelligence and human-centered interfaces.</p></div><div className="facts"><div><span className="mono">EDUCATION</span><b>B.Sc. Computer Science</b><small>University of the People · 2024—2028</small></div><div><span className="mono">ALSO STUDYING</span><b>B.Sc. Economics</b><small>Caleb University · 2024—2028</small></div><div><span className="mono">DESIGN</span><b>UI/UX Training</b><small>Torilo Academy · 2021</small></div></div></div></div></section>
    <section className="section experience-section" id="experience"><div className="wrap"><div className="section-title-row"><span className="section-no mono">04 — EXPERIENCE</span><h2>A growing<br /><i>body of work.</i></h2></div><div className="timeline"><div className="timeline-row"><span className="mono date">2022 — NOW</span><div><h3>M.O.D.E <small>FULL STACK DEVELOPER</small></h3><p>Full-stack product development across Python, Django, SQL, CMS workflows, code reviews and agile delivery.</p></div><span className="mono place">LAGOS</span></div><div className="timeline-row"><span className="mono date">2026</span><div><h3>EconNext Lagos <small>FRONTEND DEVELOPER</small></h3><p>Frontend implementation, responsive interfaces and deployment workflows for a conference product.</p></div><span className="mono place">LAGOS</span></div><div className="timeline-row"><span className="mono date">2025</span><div><h3>Caleb GDG <small>MOBILE DEVELOPER</small></h3><p>React Native accommodation product exploring graph-based room matching and student housing workflows.</p></div><span className="mono place">LAGOS</span></div><div className="timeline-row"><span className="mono date">2021 — NOW</span><div><h3>Freelance <small>UI/UX DESIGNER</small></h3><p>Product design, research, prototyping and frontend collaboration for clients across different markets.</p></div><span className="mono place">REMOTE</span></div></div></div></section>
    <section className="section stack-section" id="stack"><div className="wrap"><div className="section-title-row"><span className="section-no mono">05 — TOOLKIT</span><h2>Tools I use<br /><i>to make things real.</i></h2></div><div className="stack-grid">{[["01","FRONTEND","React / Next.js / TypeScript / JavaScript / Tailwind / HTML / CSS"],["02","BACKEND","Python / Django / Node.js / REST APIs / SQL / PostgreSQL"],["03","PRODUCT","Product discovery / UX / prototyping / user flows / usability testing"],["04","DESIGN","Figma / Adobe XD / Sketch / InVision / Behance"],["05","MOBILE","React Native / mobile application development"],["06","ENGINEERING","Git / Docker / Vercel / Agile / architecture / deployment"],["07","DATA + AI","Data products / analytics / AI product concepts / economic intelligence"],["08","LANGUAGES","Python / TypeScript / JavaScript / SQL / Java / Swift / PHP"]].map(([n,t,d])=><div className="stack-card" key={t}><span className="mono">{n}</span><b>{t}</b><p>{d}</p></div>)}</div></div></section>
    <section className="contact-section" id="contact"><div className="wrap contact-wrap"><div><span className="section-no mono">06 — CONTACT</span><h2>Have a problem<br /><i>worth solving?</i></h2></div><div className="contact-right"><p>For software engineering, product design, collaboration or an ambitious digital product, let&apos;s talk.</p><a className="email" href="mailto:ayansolaoluwafemi62@gmail.com">ayansolaoluwafemi62@gmail.com <span>↗</span></a><div className="socials"><a href="https://github.com/OluwafemiAyansola62" target="_blank" rel="noreferrer">GitHub ↗</a><a href="https://www.linkedin.com/in/oluwafemi-ayansola-7b005b1b2/" target="_blank" rel="noreferrer">LinkedIn ↗</a><a href="https://www.behance.net/ayansola" target="_blank" rel="noreferrer">Behance ↗</a></div></div></div></section>
    <footer className="footer wrap"><span>© 2026 Oluwafemi Ayansola</span><span className="mono">LAGOS / NIGERIA</span><a href="#top">BACK TO TOP ↑</a></footer>
  </main>;
}
