import Navbar from "../components/Navbar";

const services = [
  {
    title: "Web Development",
    desc: "End-to-end web apps and SaaS products — from API design to a polished, responsive front end.",
    stack: "React · Next.js · Angular · Laravel · Django · Spring Boot",
  },
  {
    title: "SaaS Products",
    desc: "Multi-tenant platforms built for scale: auth, billing, dashboards, and background jobs done right.",
    stack: "Next.js · Node · Go (Gin) · PostgreSQL",
  },
  {
    title: "Android Applications",
    desc: "Native and cross-platform Android apps, from UI to backend integration and release.",
    stack: "Java · Kotlin-ready · REST/GraphQL APIs",
  },
  {
    title: "Desktop Applications",
    desc: "Cross-platform desktop tools for internal ops, data entry, or reporting workflows.",
    stack: "Java · Python · JavaFX/Electron-style UIs",
  },
  {
    title: "Automation & Windows Services",
    desc: "Scheduled jobs, background workers, and Windows services that quietly keep processes running.",
    stack: "C#/.NET-style services · Python scripts · Task schedulers",
  },
  {
    title: "API & Backend Engineering",
    desc: "Clean, documented APIs and backend systems built for maintainability and performance.",
    stack: "PHP (Laminas/Laravel) · Go · Python (Django) · Java (Spring Boot)",
  },
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-cream">
      <Navbar />

      <section className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12 pb-24">
        <div className="max-w-2xl mb-14">
          <p className="font-hand text-xl text-gold mb-2">What I do</p>
          <h1 className="font-hand text-4xl sm:text-5xl text-ink leading-tight">
            Services.
          </h1>
          <p className="mt-4 text-ink/80 text-base sm:text-lg">
            I work across the stack — web, mobile, desktop, and automation —
            using whichever language or framework fits the problem best.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <div
              key={s.title}
              className="rounded-2xl bg-white/70 border border-ink/5 p-6 flex flex-col gap-3 hover:shadow-md transition-shadow"
            >
              <span className="font-hand text-2xl text-gold">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h2 className="font-semibold text-lg text-ink">{s.title}</h2>
              <p className="text-sm text-ink/70 leading-relaxed">{s.desc}</p>
              {/* <p className="mt-auto text-xs uppercase tracking-wide text-forest font-semibold pt-2">
                {s.stack}
              </p> */}
            </div>
          ))}
        </div>

        <div className="mt-16 rounded-2xl bg-forest text-cream p-8 sm:p-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div>
            <h3 className="font-hand text-2xl sm:text-3xl mb-1">
              Have a project in mind?
            </h3>
            <p className="text-cream/80 text-sm sm:text-base">
              Let&apos;s talk about what you&apos;re building.
            </p>
          </div>
          <a
            href="/contact"
            className="rounded-full bg-gold px-6 py-3 text-sm font-semibold text-ink hover:opacity-90 transition-opacity whitespace-nowrap"
          >
            Get in Touch
          </a>
        </div>
      </section>
    </main>
  );
}
