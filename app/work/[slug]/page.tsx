import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { projects, getProject } from "@/lib/projects";

export function generateStaticParams() { return projects.map((project) => ({ slug: project.slug })); }

export function generateMetadata({ params }: { params: { slug: string } }) {
  const project = getProject(params.slug);
  if (!project) return { title: "Project not found" };
  return { title: `${project.title} | Oluwafemi Ayansola`, description: project.summary };
}

function CaseVisual({ kind }: { kind: string }) {
  return <div className={`case-visual visual-${kind}`}><div className="case-window"><div className="window-bar"><i /><i /><i /></div><div className="case-screen">
    <div className="case-grid-label mono">PRODUCT SYSTEM / VISUAL STUDY</div>
    {kind === "dealer" && <><div className="case-big">DEALER<br /><em>OPERATIONS</em></div><div className="case-panels"><span>REVENUE <b>₦12.8M</b></span><span>LEADS <b>248</b></span><span>SERVICE <b>82%</b></span></div></>}
    {kind === "data" && <><div className="case-big">ECONOMIC<br /><em>INTELLIGENCE</em></div><div className="case-chart"><i /><i /><i /><i /><i /><i /></div></>}
    {kind === "conference" && <><div className="case-big">ECON<br /><em>NEXT</em></div><div className="case-event">LAGOS · 2026<br />ECONOMICS / POLICY / FUTURES</div></>}
    {kind === "assessment" && <><div className="case-big">CAREER<br /><em>AUTHORITY</em></div><div className="case-score">78<span>%</span></div></>}
    {kind === "mode" && <><div className="case-big mode-case">M<br />O<br />D<br />E</div><div className="case-event">CREATIVE TECHNOLOGY<br />DESIGN / CODE / CULTURE</div></>}
    {kind === "roomie" && <><div className="case-big">ROOMIE<br /><em>CONNECT</em></div><div className="case-network"><i /><i /><i /><i /><i /></div></>}
  </div></div></div>;
}

export default function CaseStudy({ params }: { params: { slug: string } }) {
  const project = getProject(params.slug);
  if (!project) notFound();
  return <main className="case-page">
    <header className="case-nav wrap"><Link href="/" className="case-back"><ArrowLeft size={16} /> BACK TO INDEX</Link><span className="mono">OA / CASE STUDY</span><span className="mono">{project.number} / 06</span></header>
    <section className="case-hero wrap"><div className="case-kicker mono">{project.status} · {project.type} · {project.year}</div><h1>{project.title}<em>.</em></h1><p>{project.summary}</p><a className="case-live" href={project.url} target="_blank" rel="noreferrer">OPEN LIVE PRODUCT <ArrowUpRight size={17} /></a></section>
    <section className="case-art wrap"><CaseVisual kind={project.hero} /></section>
    <section className="case-body wrap"><aside><span className="mono">ROLE</span><b>{project.role}</b><span className="mono">STACK</span><b>{project.stack.join(" · ")}</b></aside><article><div className="case-section"><span className="mono">01 — THE PROBLEM</span><h2>Start with the<br /><em>actual friction.</em></h2><p>{project.problem}</p></div><div className="case-section"><span className="mono">02 — THE APPROACH</span><h2>Design the system,<br /><em>not just the screen.</em></h2><ol>{project.approach.map((item, i) => <li key={item}><span>0{i + 1}</span>{item}</li>)}</ol></div><div className="case-section"><span className="mono">03 — OUTCOME</span><h2>What shipped<br /><em>into the world.</em></h2><p>{project.outcome}</p></div></article></section>
    <footer className="case-footer wrap"><Link href="/">← ALL PROJECTS</Link><Link href={`/work/${projects[(projects.findIndex((p) => p.slug === project.slug) + 1) % projects.length].slug}`}>NEXT PROJECT ↗</Link></footer>
  </main>;
}
