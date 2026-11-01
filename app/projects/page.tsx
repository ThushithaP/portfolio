import Navbar from "../components/Navbar";
import ImageSlider from "../components/ImageSlider";
import { FiExternalLink } from "react-icons/fi";
import { FaGithub } from "react-icons/fa";


const projects = [
  {
    title: "Invoice Management System",
    category: "Web Platform",
    desc: "A modern invoice management platform designed to streamline business invoicing, customer management, and payment tracking. Features include multi-tenant architecture, sales and service management, revenue dashboards, outstanding balance tracking, and secure role-based access.",
    stack: ["Spring Boot", "React", "MySQL"],
    images: ["/projects/outlet/1.png"],
    url: "",
    github: "https://github.com/ThushithaP/ims-frontend",
  },
  {
    title: "E-Commerce Admin Panel",
    category: "SaaS Product",
    desc: "A comprehensive e-commerce administration platform for managing business operations across branches and warehouses. Includes product catalog management, inventory control, order processing, customer management, procurement, promotions, shipping configuration, and role-based access control.",
    stack: ["Django", "Angular", "PostgreSQL"],
    images: [
      "/projects/ecommerce/1.png",
      "/projects/ecommerce/2.png",
    ],
    url: "",
    github: "https://github.com/ThushithaP/ecommerce-api",
  },
  {
    title: "Simple Tools",
    category: "PWA Web App",
    desc: "An installable Progressive Web App offering interactive mathematics and science tools for students, teachers, and laboratory professionals. Includes unit-aware calculations, dilution and titration, electrolysis, wave and sound, optics, and other educational simulators.",
    stack: ["React", "TypeScript", "Math.js", "Tailwind CSS"],
    images: [
      "/projects/simpletools/1.gif",
      "/projects/simpletools/2.png",
      "/projects/simpletools/3.png",
    ],
    url: "https://simple-tools-taupe.vercel.app/",
  },
  {
    title: "Ironhour",
    category: "Website",
    desc: "A modern, responsive website built for a fitness and gym business to establish its online presence and showcase its services, facilities, and brand. Developed with Next.js and a focus on clean UI and responsive design.",
    stack: ["Next.js","TypeScript","Tailwind CSS"],
    images: [
      "/projects/gym/1.png",
      "/projects/gym/2.png",
    ],
    url: "https://ironhour-gym.vercel.app/",
  },
];


export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-cream">
      <Navbar />

      <section className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12 pb-24">
        <div className="max-w-2xl mb-14">
          <p className="font-hand text-xl text-gold mb-2">Selected work</p>
          <h1 className="font-hand text-4xl sm:text-5xl text-ink leading-tight">
            Projects.
          </h1>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {projects.map((p) => (
            <div
              key={p.title}
              className="rounded-2xl bg-white/70 border border-ink/5 overflow-hidden hover:shadow-md transition-shadow flex flex-col"
            >
              <ImageSlider images={p.images} alt={p.title} />

              <div className="p-6 flex flex-col gap-3 flex-1">
                <span className="text-xs uppercase tracking-wide font-semibold text-forest">
                  {p.category}
                </span>

                <div className="flex items-center justify-between gap-3">
                  <h2 className="font-semibold text-lg text-ink">{p.title}</h2>
                  {p.url && (
                    <a
                      href={p.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-medium text-forest hover:text-gold transition-colors shrink-0"
                    >
                      <span className="inline-flex items-center gap-1 rounded-full bg-forest/10 px-2 py-0.5 text-[10px] font-semibold text-forest">
                        <span className="relative flex h-1.5 w-1.5">
                          <span className="absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75 animate-ping" />
                          <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-green-500" />
                        </span>
                        Live
                      </span>
                      Visit
                      <FiExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}
                  {p.github && (
                      <a
                        href={p.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${p.title} source code on GitHub`}
                        className="inline-flex items-center gap-1 text-xs font-medium text-ink/70 hover:text-ink transition-colors"
                      >
                        <FaGithub className="w-4 h-4" />
                        Code
                      </a>
                    )}
                </div>

                <p className="text-sm text-ink/70 leading-relaxed">{p.desc}</p>
                <div className="mt-auto flex flex-wrap gap-2 pt-2">
                  {p.stack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full bg-forest/10 text-forest text-xs font-medium px-3 py-1"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}