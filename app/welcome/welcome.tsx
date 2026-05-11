import { useEffect, useState } from "react";
import Foto from "../assets/Foto.jpg";

const skills = [
  "HTML5",
  "CSS3",
  "JavaScript",
  "Tailwind",
  "React",
  "Responsive Design",
];

const projects = [
  {
    name: "Portfolio Website",
    desc: "Website portofolio modern dan clean",
    github: "#",
    live: "#",
  },
];

export function Welcome() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const elements = document.querySelectorAll(".fade");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("show");
          }
        });
      },
      { threshold: 0.1 }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <main className="bg-slate-950 text-slate-200 min-h-screen">

      <header className="sticky top-0 z-50 bg-slate-950/80 backdrop-blur border-b border-slate-800">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="font-semibold text-white">Fauzan</h1>

          <nav className="hidden md:flex gap-6 text-sm text-slate-400">
            <a href="#home" className="hover:text-white transition">Home</a>
            <a href="#about" className="hover:text-white transition">About</a>
            <a href="#skills" className="hover:text-white transition">Skills</a>
            <a href="#projects" className="hover:text-white transition">Projects</a>
            <a href="#contact" className="hover:text-white transition">Contact</a>
          </nav>

          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-slate-300 text-2xl"
          >
            ☰
          </button>
        </div>

        {open && (
          <div className="md:hidden px-6 pb-4 flex flex-col gap-4 text-slate-400">
            <a href="#home" onClick={() => setOpen(false)} className="hover:text-white">Home</a>
            <a href="#about" onClick={() => setOpen(false)} className="hover:text-white">About</a>
            <a href="#skills" onClick={() => setOpen(false)} className="hover:text-white">Skills</a>
            <a href="#projects" onClick={() => setOpen(false)} className="hover:text-white">Projects</a>
            <a href="#contact" onClick={() => setOpen(false)} className="hover:text-white">Contact</a>
          </div>
        )}
      </header>

      <section id="home" className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-10 items-center fade">
        <div>
          <h1 className="text-4xl font-bold mb-4 text-white">
            Hi, I'm Fauzan 👋
          </h1>
          <p className="text-slate-400 mb-6">
            Frontend Developer yang fokus pada UI modern dan responsive.
          </p>

          <a
            href="#projects"
            className="inline-block px-6 py-3 bg-indigo-500 text-white rounded-full text-sm transition hover:scale-105 hover:bg-indigo-600"
          >
            Lihat Project
          </a>
        </div>

        <div className="flex justify-center">
          <div className="w-64 h-64 rounded-2xl overflow-hidden border border-slate-700 transition hover:scale-105">
            <img
              src={Foto}
              alt="Fauzan"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      <section id="about" className="bg-slate-900 py-16 fade">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-2xl font-semibold mb-4 text-indigo-400">
            About
          </h2>
          <p className="text-slate-400 max-w-xl">
            Saya membangun website yang clean, cepat, dan mudah digunakan dengan teknologi modern.
          </p>
        </div>
      </section>

      <section id="skills" className="bg-slate-950 py-16 fade">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-2xl font-semibold mb-6 text-cyan-400">
            Skills
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {skills.map((skill) => (
              <div
                key={skill}
                className="p-4 border border-slate-800 rounded-xl text-center transition hover:-translate-y-1 hover:bg-slate-900"
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="bg-slate-900 py-16 fade">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-2xl font-semibold mb-6 text-pink-400">
            Projects
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {projects.map((p) => (
              <div
                key={p.name}
                className="p-6 border border-slate-800 rounded-xl transition hover:-translate-y-2 hover:bg-slate-950"
              >
                <h3 className="font-semibold text-white">{p.name}</h3>
                <p className="text-sm text-slate-400 mt-2">{p.desc}</p>

                <div className="flex gap-4 mt-6 text-sm">
                  <a href={p.github} className="text-indigo-400 hover:underline">
                    GitHub
                  </a>
                  <a href={p.live} className="text-green-400 hover:underline">
                    Live
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="bg-slate-950 py-16 fade">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-2xl font-semibold mb-4 text-amber-400">
            Contact
          </h2>
          <p className="text-slate-400">
            fauzanakmalrgt@students.amikom.ac.id
          </p>
        </div>
      </section>

      <footer className="text-center py-6 text-slate-600 text-sm">
        © 2026 Fauzan
      </footer>
    </main>
  );
}