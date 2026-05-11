import { useState } from "react";

const skills = [
  { name: "HTML5", level: "Expert" },
  { name: "CSS3", level: "Expert" },
  { name: "JavaScript", level: "Advanced" },
  { name: "Tailwind CSS", level: "Advanced" },
  { name: "Responsive Design", level: "Advanced" },
  { name: "UI/UX Layout", level: "Intermediate" },
];

const projects = [
  {
    name: "Portfolio Company Website",
    description:
      "Website portofolio modern dengan tata letak responsif, animasi halus, dan pengalaman pengguna yang bersih.",
    tech: ["HTML", "CSS", "JS", "Tailwind"],
    url: "#contact",
  },
  {
    name: "Landing Page Produktif",
    description:
      "Halaman arahan yang dioptimalkan untuk konversi, menonjolkan fitur dan testimonial.",
    tech: ["HTML", "CSS", "JavaScript"],
    url: "#contact",
  },
  {
    name: "Dashboard Analitik",
    description:
      "Antarmuka ringkas untuk menampilkan metrik kinerja dengan grafik dan kartu informasi.",
    tech: ["Tailwind", "Responsive"],
    url: "#contact",
  },
];

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export function Welcome() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <main className="bg-slate-50 text-slate-900 min-h-screen">
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur-lg">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-8">
          <a href="#home" className="text-xl font-semibold tracking-tight text-slate-950">
            Portofolio<span className="text-blue-600">.</span>
          </a>
          <nav className="hidden items-center gap-6 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-slate-600 transition hover:text-slate-900"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <button
            className="inline-flex items-center rounded-full border border-slate-200 bg-white p-2 text-slate-700 transition hover:bg-slate-100 md:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle navigation"
          >
            <span className="sr-only">Toggle navigation</span>
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor">
              <path d={mobileOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>
        </div>
        {mobileOpen ? (
          <div className="border-t border-slate-200 bg-white md:hidden">
            <div className="space-y-1 px-6 py-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="block rounded-xl px-4 py-3 text-sm font-medium text-slate-700 transition hover:bg-slate-100"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        ) : null}
      </header>

      <section id="home" className="mx-auto max-w-7xl px-6 py-16 md:px-8 lg:py-24">
        <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-8 animate-fade-in">
            <span className="inline-flex rounded-full bg-blue-100 px-4 py-1 text-sm font-semibold text-blue-700">
              Web Developer & Designer
            </span>
            <div className="space-y-1">
              <h1 className="max-w-3xl text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl">
                My Portofolio.
              </h1>
              <p className="max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
                Saya seorang website developer yang berfokus pada pembuatan situs web yang elegan dan responsif dan juga saya tertarik dalam Frontend.
              </p>
            </div>
            <div className="flex flex-col gap-4 sm:flex-row">
              <a
                href="#projects"
                className="inline-flex items-center justify-center rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800 animate-bounce"
              >
                Lihat Proyek
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-950 transition hover:border-slate-400 hover:bg-slate-50 animate-pulse"
              >
                Hubungi Saya
              </a>
            </div>
          </div>
          <div className="relative mx-auto max-w-md">
            <div className="absolute -right-6 top-0 h-24 w-24 rounded-full bg-blue-100 blur-3xl" />
            <div className="overflow-hidden rounded-[40px] border border-slate-200 bg-white p-8 shadow-xl shadow-slate-200/60">
              <div className="space-y-5">
                <div className="h-90 rounded-3xl bg-gradient-to-br from-blue-500 via-slate-900 to-slate-900 p-6 text-white">
                  <p className="text-sm uppercase tracking-[0.2em] text-blue-200">Hai, saya Fauzan Akmal</p>
                  <h2 className="mt-6 text-3xl font-semibold">Solusi digital yang menarik dan mudah diakses.</h2>
                  <p className="mt-4 text-sm leading-6 text-blue-100/90">
                    Fokus pada antarmuka human-centered dan teknologi web modern tanpa kehilangan kesederhanaan.
                  </p>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="rounded-3xl bg-slate-100 p-4 text-center">
                    <p className="text-3xl font-semibold text-slate-950">5+</p>
                    <p className="mt-2 text-sm text-slate-600">Proyek Berhasil</p>
                  </div>
                  <div className="rounded-3xl bg-slate-100 p-4 text-center">
                    <p className="text-3xl font-semibold text-slate-950">100%</p>
                    <p className="mt-2 text-sm text-slate-600">Responsive Design</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="border-t border-slate-200 bg-white py-16">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-600">Tentang Saya</p>
              <h2 className="mt-4 text-3xl font-bold text-slate-950 sm:text-4xl">Saya menciptakan situs yang mudah digunakan dan mudah diingat.</h2>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
                Dengan pengalaman membangun antarmuka HTML/CSS/JavaScript native yang dioptimalkan untuk semua perangkat, saya membantu brand dan pebisnis tampil meyakinkan secara online.
              </p>
            </div>
            <div className="rounded-[32px] border border-slate-200 bg-slate-50 p-8">
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-slate-950">Keunggulan saya</h3>
                  <p className="mt-3 text-slate-600">
                    Desain responsif, performa ringan, dan tampilan modern dengan komponen yang mudah dibaca.
                  </p>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="rounded-3xl bg-white p-5 shadow-sm">
                    <p className="text-xl font-semibold text-slate-950">Fokus pada detail</p>
                    <p className="mt-2 text-sm text-slate-600">Layout bersih dan navigasi intuitif.</p>
                  </div>
                  <div className="rounded-3xl bg-white p-5 shadow-sm">
                    <p className="text-xl font-semibold text-slate-950">Optimasi kecepatan</p>
                    <p className="mt-2 text-sm text-slate-600">Kode yang ringan dan mudah di-maintain.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="skills" className="py-16">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <div className="mb-12 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-600">Skill</p>
            <h2 className="mt-4 text-3xl font-bold text-slate-950 sm:text-4xl">Teknologi yang saya gunakan</h2>
            <p className="mx-auto mt-4 max-w-2xl text-slate-600">
              Saya membangun setiap halaman dengan prinsip HTML semantik, CSS terstruktur, JavaScript native, dan Tailwind CSS untuk styling cepat.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {skills.map((skill) => (
              <div key={skill.name} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
                <p className="text-lg font-semibold text-slate-950">{skill.name}</p>
                <p className="mt-3 text-sm text-slate-600">{skill.level}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="border-t border-slate-200 bg-white py-16">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <div className="mb-12 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-600">Portofolio</p>
            <h2 className="mt-4 text-3xl font-bold text-slate-950 sm:text-4xl">Proyek pilihan</h2>
          </div>
          <div className="grid gap-6 lg:grid-cols-3">
            {projects.map((project) => (
              <article key={project.name} className="flex flex-col justify-between rounded-[32px] border border-slate-200 bg-slate-50 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
                <div className="space-y-4">
                  <div className="inline-flex rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-blue-700">
                    Project
                  </div>
                  <h3 className="text-xl font-semibold text-slate-950">{project.name}</h3>
                  <p className="text-slate-600">{project.description}</p>
                </div>
                <div className="mt-6 flex flex-wrap gap-2">
                  {project.tech.map((item) => (
                    <span key={item} className="rounded-full bg-white px-3 py-1 text-xs font-medium text-slate-700 ring-1 ring-slate-200">
                      {item}
                    </span>
                  ))}
                </div>
                <a
                  href={project.url}
                  className="mt-8 inline-flex w-fit items-center gap-2 text-sm font-semibold text-blue-600 transition hover:text-blue-800"
                >
                  Selengkapnya
                  <span aria-hidden="true">→</span>
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-16">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-600">Kontak</p>
              <h2 className="mt-4 text-3xl font-bold text-slate-950 sm:text-4xl">Mari kita bangun sesuatu bersama.</h2>
              <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
                Saya siap membantu mengubah ide Anda menjadi website profesional dengan teknologi web native dan Tailwind CSS.
              </p>
              <div className="mt-10 space-y-5 rounded-[32px] bg-slate-50 p-8 shadow-sm">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500">Email</p>
                  <p className="mt-2 text-base text-slate-700">fauzanakmalrgt@students.amikom.ac.id</p>
                </div>
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500">Telepon</p>
                  <p className="mt-2 text-base text-slate-700">+628 22823 30306</p>
                </div>
              </div>
            </div>
            <form className="space-y-6 rounded-[30px] border border-slate-200 bg-white p-8 shadow-sm">
              <div>
                <label className="block text-sm font-semibold text-slate-900">Nama</label>
                <input
                  type="text"
                  placeholder="Nama Anda"
                  className="mt-3 w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-900">Email</label>
                <input
                  type="email"
                  placeholder="email@domain.com"
                  className="mt-3 w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-900">Pesan</label>
                <textarea
                  rows={5}
                  placeholder="Ceritakan proyek Anda..."
                  className="mt-3 w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                />
              </div>
              <button
                type="submit"
                className="inline-flex w-full items-center justify-center rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
              >
                Kirim Pesan
              </button>
            </form>
          </div>
        </div>
      </section>

      <footer className="border-t border-slate-200 bg-white py-8">
        <div className="mx-auto max-w-7xl px-6 md:px-8 text-center text-sm text-slate-500">
          © 2026 Portofolio. Semua hak cipta dilindungi.
        </div>
      </footer>
    </main>
  );
}
