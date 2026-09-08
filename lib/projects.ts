export type Project = {
  slug: string;
  number: string;
  title: string;
  client: string;
  year: string;
  status: string;
  type: string;
  url: string;
  hero: string;
  summary: string;
  problem: string;
  approach: string[];
  outcome: string;
  role: string;
  stack: string[];
  accent: string;
};

export const projects: Project[] = [
  {
    slug: "dealeros",
    number: "01",
    title: "DealerOS",
    client: "Independent product / MVP",
    year: "2026",
    status: "LIVE / MVP",
    type: "FULL STACK · PRODUCT",
    url: "https://dealeros-mvp.vercel.app/dashboard",
    hero: "dealer",
    summary: "A dealership operating system bringing CRM, sales workflows and service operations into one working interface.",
    problem: "Dealership operations can become fragmented across leads, customer records, vehicles, appointments and service activity. The product explores how those workflows can live in one coherent operating surface.",
    approach: ["Map the dealership workflow around the highest-frequency actions.", "Design a dashboard that makes operational state visible at a glance.", "Structure the product around reusable data and workflow patterns rather than isolated screens.", "Ship a usable MVP first, leaving room for deeper integrations and automation."],
    outcome: "A live MVP that demonstrates a focused dealership workspace with a clear path toward a broader automotive operations platform.",
    role: "Product direction · UI/UX · Full-stack implementation",
    stack: ["Next.js", "TypeScript", "React", "Product Design", "Responsive UI"],
    accent: "lime",
  },
  {
    slug: "econexus",
    number: "02",
    title: "Econexus",
    client: "Economics data & research",
    year: "2026",
    status: "LIVE / MVP",
    type: "DATA · PRODUCT",
    url: "https://econexus-data-research-platform.vercel.app/",
    hero: "data",
    summary: "A commercial economics intelligence platform for research, surveys, analytics, datasets and monetizable insight.",
    problem: "Economic information is valuable only when it can be collected, organized, interpreted and turned into decisions. Econexus explores a product layer between raw research activity and usable commercial intelligence.",
    approach: ["Frame research collection as a product workflow, not a static database.", "Create a visual language for datasets, surveys, analytics and insight.", "Make the platform feel commercially credible while keeping complex information legible.", "Leave a foundation for paid research and future intelligence services."],
    outcome: "A live MVP concept for turning economics research and data operations into a commercial digital product.",
    role: "Product strategy · UX · Frontend · Data-product concept",
    stack: ["Next.js", "TypeScript", "Data UX", "Analytics UI", "Product Strategy"],
    accent: "blue",
  },
  {
    slug: "econnext-lagos",
    number: "03",
    title: "EconNext Lagos",
    client: "NESA Lagos",
    year: "2026",
    status: "LIVE / PUBLIC",
    type: "FRONTEND · PRODUCT",
    url: "https://econnext-lagos-platform-version-2.vercel.app/",
    hero: "conference",
    summary: "A conference product designed around editorial storytelling, responsive architecture, motion and real-world event needs.",
    problem: "An event website has to do more than look polished. It needs to communicate purpose, build trust, guide visitors and make important information easy to discover across devices.",
    approach: ["Use editorial hierarchy to give the conference a stronger digital identity.", "Build responsive layouts around content priority rather than desktop-first composition.", "Use motion as wayfinding and emphasis, not decoration for its own sake.", "Keep the architecture ready for event information, registration and future iterations."],
    outcome: "A public-facing conference experience that combines a strong visual system with practical event communication.",
    role: "Frontend development · UI implementation · Product experience",
    stack: ["Next.js", "React", "TypeScript", "Motion", "Responsive Design"],
    accent: "orange",
  },
  {
    slug: "career-authority",
    number: "04",
    title: "Career Authority",
    client: "The Ornella Studio",
    year: "2026",
    status: "LIVE / MVP",
    type: "UX · WEB APP",
    url: "https://ornella-career-authority-assessment.vercel.app/",
    hero: "assessment",
    summary: "An interactive assessment translating executive presence, visibility, communication and positioning into a personalized result.",
    problem: "Assessment products often feel like forms. This experience treats the assessment itself as a guided product journey, balancing clarity, momentum and a useful result at the end.",
    approach: ["Break a complex assessment into focused, low-friction interactions.", "Create a visual rhythm that makes progress feel tangible.", "Translate responses into a result experience rather than ending at submission.", "Design the system so the assessment can evolve into a broader career product."],
    outcome: "A live interactive MVP that turns a professional self-assessment into a branded digital experience.",
    role: "UX direction · Interaction design · Frontend implementation",
    stack: ["React", "Next.js", "TypeScript", "Forms", "Interaction Design"],
    accent: "violet",
  },
  {
    slug: "mode",
    number: "05",
    title: "MODE",
    client: "M.O.D.E",
    year: "2026",
    status: "LIVE / PUBLIC",
    type: "BRAND · WEB",
    url: "https://mode-site-alpha.vercel.app/",
    hero: "mode",
    summary: "A creative technology company site built around strong brand expression, editorial composition and modern interaction.",
    problem: "A creative technology brand needs to communicate capability without looking like a generic software company. The site needed a visual voice strong enough to carry both creative and technical work.",
    approach: ["Build a brand system around bold typography and controlled contrast.", "Let the interface feel editorial while preserving clear information architecture.", "Use interaction to give the brand energy without compromising usability.", "Create a foundation that can expand as the company grows its work portfolio."],
    outcome: "A live company website with a distinct visual direction and a stronger platform for presenting technology and creative work.",
    role: "Brand direction · UI/UX · Frontend development",
    stack: ["Next.js", "React", "CSS", "Motion", "Brand Design"],
    accent: "pink",
  },
  {
    slug: "roomieconnect",
    number: "06",
    title: "RoomieConnect",
    client: "University accommodation",
    year: "2025",
    status: "PRODUCT / PRIVATE",
    type: "MOBILE · PRODUCT",
    url: "https://github.com/OluwafemiAyansola62/RoomieConnect",
    hero: "roomie",
    summary: "A student accommodation concept exploring housing allocation and intelligent room placement for university communities.",
    problem: "Student accommodation is both a logistics problem and a human matching problem. The concept explores how allocation, preferences and student information can work together.",
    approach: ["Start with the student's accommodation journey and decision points.", "Model room allocation as a matching workflow rather than a simple listing.", "Explore graph-based matching concepts for better placement decisions.", "Keep the experience understandable for students while supporting operational workflows."],
    outcome: "A private product concept demonstrating how student housing workflows can be translated into a focused digital experience.",
    role: "Product concept · UX · Mobile development",
    stack: ["React Native", "JavaScript", "UX Research", "Matching Logic"],
    accent: "cyan",
  },
];

export const getProject = (slug: string) => projects.find((project) => project.slug === slug);
