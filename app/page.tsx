// "use client";

// import Image from "next/image";
// import { useState } from "react";
// import Footer from "./components/Footer";
// import Navbar from "./components/Navbar";

// const skillGroups = [
//   {
//     label: "Languages",
//     items: ["JavaScript", "TypeScript", "PHP", "Java", "Go", "Python"],
//   },
//   {
//     label: "Frameworks",
//     items: [
//       "React",
//       "Next.js",
//       "Angular",
//       "Laminas",
//       "Laravel",
//       "Gin",
//       "Django",
//       "Spring Boot",
//     ],
//   },
// ];

// const serviceHighlights = [
//   {
//     title: "Web & SaaS",
//     desc: "Full-stack web apps and SaaS products, from API to UI.",
//   },
//   {
//     title: "Android Apps",
//     desc: "Native Android applications built for real-world use.",
//   },
//   {
//     title: "Desktop & Automation",
//     desc: "Desktop tools and Windows services that run quietly in the background.",
//   },
// ];

// const navLinks = [
//   { label: "Home", href: "#home" },
//   { label: "Services", href: "./services" },
//   { label: "Projects", href: "./projects" },
//   { label: "Contact", href: "./contact" },
// ];

// function FacebookIcon() {
//   return (
//     <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
//       <path d="M22 12.06C22 6.51 17.52 2 12 2S2 6.51 2 12.06c0 5.02 3.66 9.18 8.44 9.94v-7.03H7.9v-2.9h2.54V9.85c0-2.51 1.49-3.9 3.77-3.9 1.09 0 2.23.2 2.23.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.44 2.9h-2.34V22c4.78-.76 8.44-4.92 8.44-9.94Z" />
//     </svg>
//   );
// }
// function InstagramIcon() {
//   return (
//     <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
//       <path d="M12 2.2c3.2 0 3.58.01 4.85.07 1.17.05 1.97.24 2.43.4.61.24 1.05.52 1.51.98.46.46.74.9.98 1.51.17.46.35 1.26.4 2.43.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.24 1.97-.4 2.43-.24.61-.52 1.05-.98 1.51-.46.46-.9.74-1.51.98-.46.17-1.26.35-2.43.4-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.97-.24-2.43-.4-.61-.24-1.05-.52-1.51-.98-.46-.46-.74-.9-.98-1.51-.17-.46-.35-1.26-.4-2.43C2.21 15.58 2.2 15.2 2.2 12s.01-3.58.07-4.85c.05-1.17.24-1.97.4-2.43.24-.61.52-1.05.98-1.51.46-.46.9-.74 1.51-.98.46-.17 1.26-.35 2.43-.4C8.42 2.21 8.8 2.2 12 2.2Zm0 1.8c-3.15 0-3.5.01-4.73.07-.96.04-1.48.2-1.83.34-.46.18-.79.39-1.13.74-.35.34-.56.67-.74 1.13-.14.35-.3.87-.34 1.83-.06 1.23-.07 1.58-.07 4.73s.01 3.5.07 4.73c.04.96.2 1.48.34 1.83.18.46.39.79.74 1.13.34.35.67.56 1.13.74.35.14.87.3 1.83.34 1.23.06 1.58.07 4.73.07s3.5-.01 4.73-.07c.96-.04 1.48-.2 1.83-.34.46-.18.79-.39 1.13-.74.35-.34.56-.67.74-1.13.14-.35.3-.87.34-1.83.06-1.23.07-1.58.07-4.73s-.01-3.5-.07-4.73c-.04-.96-.2-1.48-.34-1.83a3.03 3.03 0 0 0-.74-1.13 3.03 3.03 0 0 0-1.13-.74c-.35-.14-.87-.3-1.83-.34-1.23-.06-1.58-.07-4.73-.07Zm0 3.44a5.56 5.56 0 1 1 0 11.12 5.56 5.56 0 0 1 0-11.12Zm0 1.8a3.76 3.76 0 1 0 0 7.52 3.76 3.76 0 0 0 0-7.52Zm5.78-1.99a1.3 1.3 0 1 1-2.6 0 1.3 1.3 0 0 1 2.6 0Z" />
//     </svg>
//   );
// }
// function TwitterIcon() {
//   return (
//     <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
//       <path d="M22 5.9c-.74.33-1.53.55-2.36.65a4.12 4.12 0 0 0 1.8-2.27c-.8.47-1.68.82-2.62 1a4.1 4.1 0 0 0-7 3.74A11.65 11.65 0 0 1 3.4 4.7a4.1 4.1 0 0 0 1.27 5.48c-.67-.02-1.3-.2-1.86-.51v.05a4.1 4.1 0 0 0 3.29 4.02c-.6.16-1.24.19-1.85.07a4.11 4.11 0 0 0 3.83 2.85A8.24 8.24 0 0 1 2 18.57a11.62 11.62 0 0 0 6.29 1.84c7.55 0 11.68-6.26 11.68-11.68 0-.18 0-.36-.01-.53A8.35 8.35 0 0 0 22 5.9Z" />
//     </svg>
//   );
// }
// function LinkedinIcon() {
//   return (
//     <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
//       <path d="M6.94 8.5H3.56V20.5H6.94V8.5ZM5.25 3.75a1.97 1.97 0 1 0 0 3.94 1.97 1.97 0 0 0 0-3.94ZM20.5 20.5h-3.38v-6.02c0-1.44-.03-3.28-2-3.28-2 0-2.31 1.56-2.31 3.17v6.13H9.44V8.5h3.24v1.64h.05c.45-.85 1.55-1.75 3.19-1.75 3.41 0 4.04 2.25 4.04 5.17v6.94Z" />
//     </svg>
//   );
// }
// function StarIcon() {
//   return (
//     <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
//       <path d="M12 2.5l2.9 6.06 6.6.79-4.9 4.55 1.28 6.6L12 17.27l-5.88 3.23 1.28-6.6L2.5 9.35l6.6-.79L12 2.5Z" />
//     </svg>
//   );
// }

// export default function Home() {
//   const [menuOpen, setMenuOpen] = useState(false);

//   return (
//     <main id="home" className="min-h-screen bg-cream">
//       {/* Border frame like the reference */}
//       <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
//         {/* NAVBAR */}
//         <Navbar/>

//         {/* Mobile nav dropdown */}
//         {menuOpen && (
//           <div className="md:hidden flex flex-col gap-4 pb-6 font-medium text-ink">
//             {navLinks.map((link) => (
//               <a key={link.href} href={link.href} onClick={() => setMenuOpen(false)}>
//                 {link.label}
//               </a>
//             ))}
//             <a
//               href="#contact"
//               onClick={() => setMenuOpen(false)}
//               className="rounded-full bg-forest px-6 py-3 text-center text-sm font-semibold text-cream"
//             >
//               Download CV
//             </a>
//           </div>
//         )}

//         {/* HERO */}
//         <section className="relative grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] items-center gap-10 py-8 lg:py-16">
//           {/* Left column */}
//           <div className="order-2 lg:order-1 flex flex-col gap-10">
//             <div>
//               <h1 className="font-hand text-4xl sm:text-5xl leading-tight text-ink">
//                 Hy! I Am
//               </h1>
//               <h1 className="font-hand text-4xl sm:text-5xl leading-tight text-gold">
//                 Thushitha.
//               </h1>
//             </div>

//             <div className="hidden lg:block">
//               <svg width="140" height="120" viewBox="0 0 140 120" fill="none" className="text-forest">
//                 <path
//                   d="M10 60 C40 100 70 100 90 60 C105 30 120 25 130 15"
//                   stroke="currentColor"
//                   strokeWidth="2.5"
//                   strokeLinecap="round"
//                   className="dashed-arrow"
//                 />
//                 <path
//                   d="M118 12 L130 15 L124 27"
//                   stroke="currentColor"
//                   strokeWidth="2.5"
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   fill="none"
//                 />
//               </svg>
//             </div>

//             <div className="flex items-end gap-3">
//               <span className="font-hand text-4xl sm:text-5xl text-forest">03</span>
//               <span className="text-xs font-semibold uppercase leading-tight text-ink pb-1">
//                 Years
//                 <br />
//                 Experience
//               </span>
//             </div>

//             <div className="flex items-center gap-5 text-gold">
//               <a href="#" aria-label="Facebook" className="hover:opacity-70 transition-opacity">
//                 <FacebookIcon />
//               </a>
//               <a href="#" aria-label="Instagram" className="hover:opacity-70 transition-opacity">
//                 <InstagramIcon />
//               </a>
//               <a href="#" aria-label="Twitter" className="hover:opacity-70 transition-opacity">
//                 <TwitterIcon />
//               </a>
//               <a href="#" aria-label="LinkedIn" className="hover:opacity-70 transition-opacity">
//                 <LinkedinIcon />
//               </a>
//             </div>
//           </div>

//           {/* Center image */}
//           <div className="order-1 lg:order-2 flex justify-center">
//             <div className="relative h-[320px] w-[320px] sm:h-[400px] sm:w-[400px] rounded-full overflow-hidden ring-4 ring-gold bg-white">
//               <Image
//                 src="/im1.png"
//                 alt="Thushitha Senarath"
//                 fill
//                 sizes="(max-width: 640px) 320px, 400px"
//                 className="object-cover"
//                 priority
//               />
//             </div>
//           </div>

//           {/* Right column */}
//           <div className="order-3 flex flex-col items-start lg:items-end gap-8">
//             <p className="text-ink text-base sm:text-lg text-left lg:text-right max-w-xs">
//               I build reliable software across web, mobile, and desktop, and I love turning ideas into working products.
//             </p>

//             <div className="w-full sm:w-auto rounded-2xl bg-white/70 shadow-sm px-6 py-5 flex flex-col gap-3">
//               <div className="flex items-center gap-2 text-sm font-semibold text-ink">
//                 12k Reviews On
//                 <span className="flex text-gold">
//                   <StarIcon />
//                   <StarIcon />
//                   <StarIcon />
//                   <StarIcon />
//                   <StarIcon />
//                 </span>
//               </div>
//               <div className="flex items-center gap-3">
//                 <div className="flex -space-x-3">
//                   {["#E8A63A", "#2E5C50", "#C1382B", "#17403B", "#8C8C8C"].map(
//                     (c, i) => (
//                       <span
//                         key={i}
//                         className="h-8 w-8 rounded-full ring-2 ring-white"
//                         style={{ backgroundColor: c }}
//                       />
//                     )
//                   )}
//                 </div>
//                 <span className="font-semibold text-ink">4.9</span>
//               </div>
//             </div>

//             <div className="text-left lg:text-right">
//               <p className="font-script text-3xl sm:text-4xl text-forest leading-none">
//                 Software
//               </p>
//               <p className="font-hand text-xl sm:text-2xl text-gold">Engineer.</p>
//             </div>
//           </div>
//         </section>

//         {/* ABOUT */}
//         <section id="about" className="grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-10 py-16 border-t border-ink/10">
//           <div>
//             <p className="font-hand text-xl text-gold mb-2">About me</p>
//             <h2 className="font-hand text-3xl sm:text-4xl text-ink leading-tight">
//               A software engineer who ships.
//             </h2>
//           </div>
//           <div className="flex flex-col gap-6">
//             <p className="text-ink/80 text-base sm:text-lg leading-relaxed">
//               I&apos;m a software engineer with 3 years of experience building
//               products across the stack — web platforms, SaaS tools, Android
//               apps, desktop software, and background automation. I care about
//               clean architecture, readable code, and shipping things that
//               actually get used.
//             </p>
//             <p className="text-ink/80 text-base sm:text-lg leading-relaxed">
//               Whether it&apos;s a customer-facing web app or a Windows service
//               running unattended, I like picking the right tool for the job
//               rather than forcing one stack to do everything.
//             </p>
//           </div>
//         </section>

//         {/* SKILLS */}
//         <section id="skills" className="py-16 border-t border-ink/10">
//           <p className="font-hand text-xl text-gold mb-2">What I work with</p>
//           <h2 className="font-hand text-3xl sm:text-4xl text-ink leading-tight mb-10">
//             Skills.
//           </h2>

//           <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
//             {skillGroups.map((group) => (
//               <div key={group.label}>
//                 <p className="text-xs uppercase tracking-wide font-semibold text-forest mb-4">
//                   {group.label}
//                 </p>
//                 <div className="flex flex-wrap gap-3">
//                   {group.items.map((item) => (
//                     <span
//                       key={item}
//                       className="rounded-full bg-white/70 border border-ink/10 text-ink text-sm font-medium px-4 py-2"
//                     >
//                       {item}
//                     </span>
//                   ))}
//                 </div>
//               </div>
//             ))}
//           </div>
//         </section>

//         {/* SERVICES PREVIEW */}
//         <section id="services-preview" className="py-16 border-t border-ink/10">
//           <div className="flex items-end justify-between flex-wrap gap-4 mb-10">
//             <div>
//               <p className="font-hand text-xl text-gold mb-2">What I offer</p>
//               <h2 className="font-hand text-3xl sm:text-4xl text-ink leading-tight">
//                 Services.
//               </h2>
//             </div>
//             <a
//               href="/services"
//               className="text-sm font-semibold text-forest hover:opacity-70 transition-opacity"
//             >
//               View all services →
//             </a>
//           </div>

//           <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
//             {serviceHighlights.map((s) => (
//               <div
//                 key={s.title}
//                 className="rounded-2xl bg-white/70 border border-ink/5 p-6 hover:shadow-md transition-shadow"
//               >
//                 <h3 className="font-semibold text-lg text-ink mb-2">
//                   {s.title}
//                 </h3>
//                 <p className="text-sm text-ink/70 leading-relaxed">{s.desc}</p>
//               </div>
//             ))}
//           </div>
//         </section>

//         {/* CTA */}
//         <section className="py-16 border-t border-ink/10">
//           <div className="rounded-2xl bg-forest text-cream p-8 sm:p-12 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
//             <div>
//               <h3 className="font-hand text-2xl sm:text-3xl mb-2">
//                 Let&apos;s build something great.
//               </h3>
//               <p className="text-cream/80 text-sm sm:text-base max-w-md">
//                 Open to freelance projects, collaborations, and full-time
//                 opportunities.
//               </p>
//             </div>
//             <a
//               href="/contact"
//               className="rounded-full bg-gold px-8 py-3 text-sm font-semibold text-ink hover:opacity-90 transition-opacity whitespace-nowrap"
//             >
//               Get in Touch
//             </a>
//           </div>
//         </section>
//       </div>
//       <Footer/>
//     </main>
//   );
// }


"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
// import {
//   SiJavascript,
//   SiTypescript,
//   SiPhp,
//   SiGo,
//   SiPython,
//   SiReact,
//   SiNextdotjs,
//   SiAngular,
//   SiZend,
//   SiLaravel,
//   SiGin,
//   SiDjango,
//   SiSpringboot,
// } from "react-icons/si";
// import { FaJava } from "react-icons/fa";

// const skillGroups = [
//   {
//     label: "Languages",
//     items: [
//       { name: "JavaScript", icon: SiJavascript, color: "#F0DB4F" },
//       { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
//       { name: "PHP", icon: SiPhp, color: "#777BB4" },
//       { name: "Java", icon: FaJava, color: "#EA2D2E" },
//       { name: "Go", icon: SiGo, color: "#00ACD7" },
//       { name: "Python", icon: SiPython, color: "#3776AB" },
//     ],
//   },
//   {
//     label: "Frameworks",
//     items: [
//       { name: "React", icon: SiReact, color: "#61DAFB" },
//       { name: "Next.js", icon: SiNextdotjs, color: "#000000" },
//       { name: "Angular", icon: SiAngular, color: "#DD0031" },
//       { name: "Laminas", icon: SiZend, color: "#68B604" },
//       { name: "Laravel", icon: SiLaravel, color: "#FF2D20" },
//       { name: "Gin", icon: SiGin, color: "#00ACD7" },
//       { name: "Django", icon: SiDjango, color: "#0C4B33" },
//       { name: "Spring Boot", icon: SiSpringboot, color: "#6DB33F" },
//     ],
//   },
// ];
import {
  SiJavascript,
  SiTypescript,
  SiHtml5,
  SiCss,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiMui,
  SiJquery,
  SiNodedotjs,
  SiPhp,
  SiMysql,
  SiPostgresql,
  SiRedis,
  SiFirebase,
  SiInfluxdb,
  SiDocker,
  SiGithubactions,
  SiNginx,
  SiApachekafka,
  SiVite,
  SiJunit5,
  SiAngular,
  SiSpringboot,
  SiZend,
  SiGo,
  SiPython,
  SiGin,
  SiDjango,
  SiNestjs
} from "react-icons/si";
import { FaJava, FaAws } from "react-icons/fa";
import { TbDeviceDesktop, TbInfinity, TbTestPipe } from "react-icons/tb";

const skillGroups = [
  {
    label: "Languages",
    items: [
      { name: "JavaScript (ES6+)", icon: SiJavascript, color: "#F0DB4F" },
      { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
      { name: "Java", icon: FaJava, color: "#EA2D2E" },
      { name: "PHP", icon: SiPhp, color: "#777BB4" },
      { name: "Go", icon: SiGo, color: "#00ACD7" },
      { name: "Python", icon: SiPython, color: "#3776AB" },
      { name: "HTML5", icon: SiHtml5, color: "#E34F26" },
      { name: "CSS3", icon: SiCss, color: "#1572B6" },
    ],
  },
  {
    label: "Frontend",
    items: [
      { name: "React.js", icon: SiReact, color: "#61DAFB" },
      { name: "Next.js", icon: SiNextdotjs, color: "#000000" },
      { name: "Angular", icon: SiAngular, color: "#000000" },
      { name: "TailwindCSS", icon: SiTailwindcss, color: "#38BDF8" },
      { name: "Material UI", icon: SiMui, color: "#007FFF" },
      { name: "jQuery", icon: SiJquery, color: "#0769AD" },
    ],
  },
  {
    label: "Backend",
    items: [
      { name: "Node.js", icon: SiNodedotjs, color: "#5FA04E" },
      { name: "Spring Boot", icon: SiSpringboot, color: "#6DB33F" },
      { name: "JavaFX", icon: TbDeviceDesktop, color: "#EA2D2E" },
      { name: "Laminas", icon: SiZend, color: "#68B604" },
      { name: "Gin", icon: SiGin, color: "#00ACD7" },
      { name: "Django", icon: SiDjango, color: "#0C4B33" },
      { name: "Nest", icon: SiNestjs, color: "#0C4B33" },
    ],
  },
  {
    label: "Databases & Caching",
    items: [
      { name: "MySQL", icon: SiMysql, color: "#4479A1" },
      { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
      { name: "Redis", icon: SiRedis, color: "#FF4438" },
      { name: "Firebase", icon: SiFirebase, color: "#FFCA28" },
      { name: "InfluxDB", icon: SiInfluxdb, color: "#22ADF6" },
    ],
  },
  {
    label: "DevOps & Cloud",
    items: [
      { name: "AWS", icon: FaAws, color: "#FF9900" },
      { name: "Docker", icon: SiDocker, color: "#2496ED" },
      { name: "GitHub Actions", icon: SiGithubactions, color: "#2088FF" },
      { name: "Nginx", icon: SiNginx, color: "#009639" },
      { name: "CI/CD Pipelines", icon: TbInfinity, color: "#2E5C50" },
      { name: "Kafka", icon: SiApachekafka, color: "#231F20" },
      { name: "Vite", icon: SiVite, color: "#646CFF" },
    ],
  },
  {
    label: "Testing",
    items: [
      { name: "JUnit", icon: SiJunit5, color: "#25A162" },
      { name: "Mockito", icon: TbTestPipe, color: "#78A641" },
    ],
  },
]

const serviceHighlights = [
  {
    title: "Web & SaaS",
    desc: "Full-stack web apps and SaaS products, from API to UI.",
  },
  {
    title: "Android Apps",
    desc: "Native Android applications built for real-world use.",
  },
  {
    title: "Desktop & Automation",
    desc: "Desktop tools and Windows services that run quietly in the background.",
  },
];

function FacebookIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M22 12.06C22 6.51 17.52 2 12 2S2 6.51 2 12.06c0 5.02 3.66 9.18 8.44 9.94v-7.03H7.9v-2.9h2.54V9.85c0-2.51 1.49-3.9 3.77-3.9 1.09 0 2.23.2 2.23.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.44 2.9h-2.34V22c4.78-.76 8.44-4.92 8.44-9.94Z" />
    </svg>
  );
}
function InstagramIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2.2c3.2 0 3.58.01 4.85.07 1.17.05 1.97.24 2.43.4.61.24 1.05.52 1.51.98.46.46.74.9.98 1.51.17.46.35 1.26.4 2.43.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.24 1.97-.4 2.43-.24.61-.52 1.05-.98 1.51-.46.46-.9.74-1.51.98-.46.17-1.26.35-2.43.4-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.97-.24-2.43-.4-.61-.24-1.05-.52-1.51-.98-.46-.46-.74-.9-.98-1.51-.17-.46-.35-1.26-.4-2.43C2.21 15.58 2.2 15.2 2.2 12s.01-3.58.07-4.85c.05-1.17.24-1.97.4-2.43.24-.61.52-1.05.98-1.51.46-.46.9-.74 1.51-.98.46-.17 1.26-.35 2.43-.4C8.42 2.21 8.8 2.2 12 2.2Zm0 1.8c-3.15 0-3.5.01-4.73.07-.96.04-1.48.2-1.83.34-.46.18-.79.39-1.13.74-.35.34-.56.67-.74 1.13-.14.35-.3.87-.34 1.83-.06 1.23-.07 1.58-.07 4.73s.01 3.5.07 4.73c.04.96.2 1.48.34 1.83.18.46.39.79.74 1.13.34.35.67.56 1.13.74.35.14.87.3 1.83.34 1.23.06 1.58.07 4.73.07s3.5-.01 4.73-.07c.96-.04 1.48-.2 1.83-.34.46-.18.79-.39 1.13-.74.35-.34.56-.67.74-1.13.14-.35.3-.87.34-1.83.06-1.23.07-1.58.07-4.73s-.01-3.5-.07-4.73c-.04-.96-.2-1.48-.34-1.83a3.03 3.03 0 0 0-.74-1.13 3.03 3.03 0 0 0-1.13-.74c-.35-.14-.87-.3-1.83-.34-1.23-.06-1.58-.07-4.73-.07Zm0 3.44a5.56 5.56 0 1 1 0 11.12 5.56 5.56 0 0 1 0-11.12Zm0 1.8a3.76 3.76 0 1 0 0 7.52 3.76 3.76 0 0 0 0-7.52Zm5.78-1.99a1.3 1.3 0 1 1-2.6 0 1.3 1.3 0 0 1 2.6 0Z" />
    </svg>
  );
}
function TwitterIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M22 5.9c-.74.33-1.53.55-2.36.65a4.12 4.12 0 0 0 1.8-2.27c-.8.47-1.68.82-2.62 1a4.1 4.1 0 0 0-7 3.74A11.65 11.65 0 0 1 3.4 4.7a4.1 4.1 0 0 0 1.27 5.48c-.67-.02-1.3-.2-1.86-.51v.05a4.1 4.1 0 0 0 3.29 4.02c-.6.16-1.24.19-1.85.07a4.11 4.11 0 0 0 3.83 2.85A8.24 8.24 0 0 1 2 18.57a11.62 11.62 0 0 0 6.29 1.84c7.55 0 11.68-6.26 11.68-11.68 0-.18 0-.36-.01-.53A8.35 8.35 0 0 0 22 5.9Z" />
    </svg>
  );
}
function LinkedinIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M6.94 8.5H3.56V20.5H6.94V8.5ZM5.25 3.75a1.97 1.97 0 1 0 0 3.94 1.97 1.97 0 0 0 0-3.94ZM20.5 20.5h-3.38v-6.02c0-1.44-.03-3.28-2-3.28-2 0-2.31 1.56-2.31 3.17v6.13H9.44V8.5h3.24v1.64h.05c.45-.85 1.55-1.75 3.19-1.75 3.41 0 4.04 2.25 4.04 5.17v6.94Z" />
    </svg>
  );
}
function StarIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2.5l2.9 6.06 6.6.79-4.9 4.55 1.28 6.6L12 17.27l-5.88 3.23 1.28-6.6L2.5 9.35l6.6-.79L12 2.5Z" />
    </svg>
  );
}

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
};

const stagger = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12 },
  },
};

export default function Home() {
  return (
    <main id="home" className="min-h-screen bg-cream overflow-hidden">
      {/* Border frame like the reference */}
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        {/* Ambient animated background blobs — the "energy" layer */}
        <motion.div
          aria-hidden
          className="pointer-events-none absolute -top-24 -left-20 h-72 w-72 rounded-full bg-gold/25 blur-3xl"
          animate={{ x: [0, 30, 0], y: [0, 20, 0], scale: [1, 1.08, 1] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          aria-hidden
          className="pointer-events-none absolute top-40 right-0 h-80 w-80 rounded-full bg-forest/15 blur-3xl"
          animate={{ x: [0, -25, 0], y: [0, 30, 0], scale: [1, 1.1, 1] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />

        {/* NAVBAR */}
        <Navbar />

        {/* HERO */}
        <motion.section
          variants={stagger}
          initial="hidden"
          animate="show"
          className="relative grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] items-center gap-10 py-8 lg:py-16"
        >
          {/* Left column */}
          <motion.div
            variants={fadeUp}
            className="order-2 lg:order-1 flex flex-col gap-10"
          >
            <motion.div
              variants={fadeUp}
              className="inline-flex w-fit items-center gap-2 rounded-full bg-forest/10 px-4 py-1.5 text-xs font-semibold text-forest"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-forest opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-forest" />
              </span>
              Available for new projects
            </motion.div>

            <div>
              <h1 className="font-hand text-4xl sm:text-5xl leading-tight text-ink">
                Hy! I Am
              </h1>
              <h1 className="font-hand text-4xl sm:text-5xl leading-tight text-gold">
                Thushitha.
              </h1>
            </div>

            <motion.div variants={fadeUp} className="hidden lg:block">
              <motion.svg
                width="140"
                height="120"
                viewBox="0 0 140 120"
                fill="none"
                className="text-forest"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 1.4, delay: 0.6, ease: "easeInOut" }}
              >
                <motion.path
                  d="M10 60 C40 100 70 100 90 60 C105 30 120 25 130 15"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  className="dashed-arrow"
                />
                <path
                  d="M118 12 L130 15 L124 27"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                />
              </motion.svg>
            </motion.div>

            <motion.div variants={fadeUp} className="flex items-end gap-3">
              <span className="font-hand text-4xl sm:text-5xl text-forest">03+</span>
              <span className="text-xs font-semibold uppercase leading-tight text-ink pb-1">
                Years
                <br />
                Experience
              </span>
            </motion.div>

            {/* <motion.div variants={fadeUp} className="flex items-center gap-5 text-gold">
              {[FacebookIcon, InstagramIcon, TwitterIcon, LinkedinIcon].map(
                (Icon, i) => (
                  <motion.a
                    key={i}
                    href="#"
                    aria-label="social link"
                    whileHover={{ scale: 1.2, rotate: -8 }}
                    whileTap={{ scale: 0.9 }}
                    className="hover:opacity-70 transition-opacity"
                  >
                    <Icon />
                  </motion.a>
                )
              )}
            </motion.div> */}
          </motion.div>

          {/* Center image */}
          <motion.div
            variants={fadeUp}
            className="order-1 lg:order-2 flex justify-center"
          >
            <motion.div
              animate={{ y: [0, -14, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="relative h-[320px] w-[320px] sm:h-[400px] sm:w-[400px] rounded-full overflow-hidden ring-4 ring-gold bg-white"
            >
              <Image
                src="/im1.png"
                alt="Thushitha Senarath"
                fill
                sizes="(max-width: 640px) 320px, 400px"
                className="object-cover"
                priority
              />
            </motion.div>
          </motion.div>

          {/* Right column */}
          <motion.div
            variants={fadeUp}
            className="order-3 flex flex-col items-start lg:items-end gap-8"
          >
            <p className="text-ink text-base sm:text-lg text-left lg:text-right max-w-xs">
              I build reliable software across web, mobile, and desktop, and I love turning ideas into working products.
            </p>

            {/*<div className="w-full sm:w-auto rounded-2xl bg-white/70 shadow-sm px-6 py-5 flex flex-col gap-3">
              <div className="flex items-center gap-2 text-sm font-semibold text-ink">
                12k Reviews On
                <span className="flex text-gold">
                  <StarIcon />
                  <StarIcon />
                  <StarIcon />
                  <StarIcon />
                  <StarIcon />
                </span>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex -space-x-3">
                  {["#E8A63A", "#2E5C50", "#C1382B", "#17403B", "#8C8C8C"].map(
                    (c, i) => (
                      <span
                        key={i}
                        className="h-8 w-8 rounded-full ring-2 ring-white"
                        style={{ backgroundColor: c }}
                      />
                    )
                  )}
                </div>
                <span className="font-semibold text-ink">4.9</span>
              </div>
            </div>*/}

            <div className="text-left lg:text-right">
              <p className="font-script text-3xl sm:text-4xl text-forest leading-none">
                Software
              </p>
              <p className="font-hand text-xl sm:text-2xl text-gold">Engineer.</p>
            </div>
          </motion.div>
        </motion.section>

        {/* ABOUT */}
        <motion.section
          id="about"
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-10 py-16 border-t border-ink/10"
        >
          <motion.div variants={fadeUp}>
            <p className="font-hand text-xl text-gold mb-2">About me</p>
            <h2 className="font-hand text-3xl sm:text-4xl text-ink leading-tight">
              A software engineer who ships.
            </h2>
          </motion.div>
          <motion.div variants={fadeUp} className="flex flex-col gap-6">
            <p className="text-ink/80 text-base sm:text-lg leading-relaxed">
              I&apos;m a software engineer with 3+ years of experience building
              products across the stack — web platforms, SaaS tools, Android
              apps, desktop software, and background automation. I care about
              clean architecture, readable code, and shipping things that
              actually get used.
            </p>
            <p className="text-ink/80 text-base sm:text-lg leading-relaxed">
              Whether it&apos;s a customer-facing web app or a Windows service
              running unattended, I like picking the right tool for the job
              rather than forcing one stack to do everything.
            </p>
          </motion.div>
        </motion.section>

        {/* SKILLS */}
        <motion.section
          id="skills"
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="py-16 border-t border-ink/10"
        >
          <motion.p variants={fadeUp} className="font-hand text-xl text-gold mb-2">
            What I work with
          </motion.p>
          <motion.h2
            variants={fadeUp}
            className="font-hand text-3xl sm:text-4xl text-ink leading-tight mb-10"
          >
            Skills.
          </motion.h2>

          {/* <div className="grid grid-cols-1 sm:grid-cols-2 gap-10"> */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10"> 
            {skillGroups.map((group) => (
              <div key={group.label}>
                <motion.p
                  variants={fadeUp}
                  className="text-xs uppercase tracking-wide font-semibold text-forest mb-4"
                >
                  {group.label}
                </motion.p>
                <motion.div
                  variants={stagger}
                  className="flex flex-wrap gap-3"
                >
                  {group.items.map(({ name, icon: Icon, color }) => (
                    <motion.span
                      key={name}
                      variants={fadeUp}
                      whileHover={{ y: -4, scale: 1.05 }}
                      className="flex items-center gap-2 rounded-full bg-white/70 border border-ink/10 text-ink text-sm font-medium px-4 py-2 transition-shadow hover:shadow-md"
                    >
                      <Icon style={{ color }} size={16} />
                      {name}
                    </motion.span>
                  ))}
                </motion.div>
              </div>
            ))}
          </div>
        </motion.section>

        {/* SERVICES PREVIEW */}
        <motion.section
          id="services-preview"
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="py-16 border-t border-ink/10"
        >
          <motion.div
            variants={fadeUp}
            className="flex items-end justify-between flex-wrap gap-4 mb-10"
          >
            <div>
              <p className="font-hand text-xl text-gold mb-2">What I offer</p>
              <h2 className="font-hand text-3xl sm:text-4xl text-ink leading-tight">
                Services.
              </h2>
            </div>
            <a
              href="/services"
              className="text-sm font-semibold text-forest hover:opacity-70 transition-opacity"
            >
              View all services →
            </a>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {serviceHighlights.map((s) => (
              <motion.div
                key={s.title}
                variants={fadeUp}
                whileHover={{ y: -6 }}
                className="rounded-2xl bg-white/70 border border-ink/5 p-6 transition-shadow hover:shadow-lg"
              >
                <h3 className="font-semibold text-lg text-ink mb-2">
                  {s.title}
                </h3>
                <p className="text-sm text-ink/70 leading-relaxed">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* CTA */}
        <motion.section
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
          className="py-16 border-t border-ink/10"
        >
          <div className="rounded-2xl bg-forest text-cream p-8 sm:p-12 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div>
              <h3 className="font-hand text-2xl sm:text-3xl mb-2">
                Let&apos;s build something great.
              </h3>
              <p className="text-cream/80 text-sm sm:text-base max-w-md">
                Open to freelance projects, collaborations, and full-time
                opportunities.
              </p>
            </div>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="/contact"
              className="rounded-full bg-gold px-8 py-3 text-sm font-semibold text-ink hover:opacity-90 transition-opacity whitespace-nowrap"
            >
              Get in Touch
            </motion.a>
          </div>
        </motion.section>
      </div>

      <Footer />
    </main>
  );
}
