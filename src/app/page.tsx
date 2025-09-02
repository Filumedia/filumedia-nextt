"use client";

import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Globe } from "lucide-react";

const beige = "#E8DFCF";
const charcoal = "#111111";

export default function Page() {
  const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <div>
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/70 backdrop-blur border-b border-neutral-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-7 w-7 rounded-xl bg-beige shadow-inset" />
            <span className="font-medium tracking-wide text-sm sm:text-base">FILUMEDIA</span>
          </div>
          <nav className="hidden md:flex items-center gap-4 lg:gap-6 text-sm text-neutral-600">
            {[
              ["Leistungen", "services"],
              ["Projekte", "work"],
              ["Ablauf", "process"],
              ["Preise", "pricing"],
              ["FAQ", "faq"],
              ["Kontakt", "contact"],
            ].map(([label, id]) => (
              <button key={id} onClick={() => scrollTo(id)} className="hover:text-neutral-900 transition">
                {label}
              </button>
            ))}
            <a href="#contact" className="rounded-xl text-white px-3 py-2 bg-charcoal">Kostenlos starten</a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="relative border-b border-neutral-200">
        <div className="absolute inset-0" style={{ background: "radial-gradient(60% 60% at 50% 0%, #f8f6f2 0%, transparent 60%)" }} />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 sm:py-20 lg:py-28 grid md:grid-cols-12 gap-8 lg:gap-10 items-center">
          <div className="md:col-span-7">
            <motion.h1 initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .5 }}
              className="font-semibold leading-tight text-[clamp(2rem,6vw,3.5rem)]">
              Websites, die <span className="underline decoration-[3px] underline-offset-4" style={{ textDecorationColor: beige }}>vertrauen</span> & verkaufen.
            </motion.h1>
            <p className="mt-4 sm:mt-6 text-neutral-600 max-w-xl text-[15px] sm:text-[16px]">
              Minimalistisch, schnell und klar. Fokus auf Nutzerführung, Terminbuchung & messbare Ergebnisse.
            </p>
            <div className="mt-6 sm:mt-8 flex flex-wrap gap-3">
              <a href="#work" className="rounded-xl px-4 sm:px-5 py-2 bg-charcoal text-white inline-flex items-center">
                Referenzen ansehen <ArrowRight className="ml-2 h-4 w-4" />
              </a>
              <a href="#pricing" className="rounded-xl px-4 sm:px-5 py-2 border border-neutral-300">Pakete & Preise</a>
            </div>
            <ul className="mt-6 sm:mt-8 grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3 text-sm text-neutral-700 max-w-lg">
              {[
                "Klares Design ohne Ablenkung",
                "Termin-CTA & Conversion-Flows",
                "SEO-Basics & schnelle Ladezeiten",
                "Rechtstexte & DSGVO-Hinweise",
              ].map((t, i) => (
                <li key={i} className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4" style={{ color: charcoal }} /> {t}
                </li>
              ))}
            </ul>
          </div>
          <div className="md:col-span-5">
            <div className="rounded-2xl border border-neutral-200 bg-gradient-to-b from-white to-[#faf8f4] p-5">
              <div className="font-medium mb-3">Marken-Site Vorschau</div>
              <img src="https://images.unsplash.com/photo-1492138786289-d35ea832da43?q=80&w=1200&auto=format&fit=crop" alt="Preview" className="rounded-xl" />
              <p className="text-sm text-neutral-700 mt-3">Eleganter Aufbau mit klarer Hierarchie und viel Weißraum.</p>
            </div>
          </div>
        </div>

        {/* marquee */}
        <div className="border-t border-neutral-200">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4 sm:py-6 overflow-hidden">
            <div className="animate-[marquee_30s_linear_infinite] whitespace-nowrap text-neutral-500 text-xs [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
              {Array.from({ length: 12 }).map((_, i) => (
                <span key={i} className="inline-flex items-center gap-2 mx-6 opacity-70">
                  <Globe className="h-3.5 w-3.5" /> performant • zugänglich • markant
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6">
          {[
            { title: "One-Pager Essential", desc: "Schneller Start: alles auf einer Seite." },
            { title: "Business Site", desc: "Mehr Seiten, mehr Wirkung – inkl. SEO-Basics." },
            { title: "Care & Updates", desc: "Monatliche Pflege, Backups & Performance-Checks." },
          ].map((s, i) => (
            <div key={i} className="rounded-2xl border border-neutral-200 bg-white p-6">
              <h3 className="font-semibold">{s.title}</h3>
              <p className="text-neutral-600 text-sm mt-3">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Work */}
      <section id="work" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 sm:py-16 border-t border-b border-neutral-200">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3 mb-6 sm:mb-8">
          <h2 className="text-2xl md:text-3xl font-semibold">Projekte & Beispiele</h2>
          <a href="#contact" className="rounded-xl self-start sm:self-auto px-4 sm:px-5 py-2 bg-charcoal text-white">Projekt anfragen</a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6">
          {[
            { title: "Aesthetic Praxis", img: "https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=1400&auto=format&fit=crop" },
            { title: "Technik & Gewerbe", img: "https://images.unsplash.com/photo-1488229297570-58520851e868?q=80&w=1400&auto=format&fit=crop" },
            { title: "Boutique & Retail", img: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?q=80&w=1400&auto=format&fit=crop" },
          ].map((p, i) => (
            <div key={i} className="group relative overflow-hidden rounded-2xl border border-neutral-200 bg-neutral-50">
              <img loading="lazy" decoding="async" src={p.img} alt={p.title} className="h-56 sm:h-60 md:h-64 w-full object-cover transition group-hover:scale-[1.02]" />
              <div className="absolute inset-x-0 bottom-0 p-3 sm:p-4 flex items-center justify-between bg-gradient-to-t from-white via-white/80 to-transparent">
                <span className="font-medium text-sm sm:text-base">{p.title}</span>
                <ArrowRight className="h-5 w-5" style={{ color: charcoal }} />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 sm:py-16 border-t border-b border-neutral-200">
        <h2 className="text-2xl md:text-3xl font-semibold mb-6 sm:mb-8">Transparente Pakete</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6">
          {[
            { name: "One-Pager", price: "ab 690€", features: ["1 Seite • 3 Sektionen", "Kontakt & Termin-CTA", "Impressum/Datenschutz"], badge: "Schnellstart" },
            { name: "Business", price: "ab 1.690€", features: ["3–6 Seiten", "Booking & Leads", "On-Page SEO"], badge: "Beliebt" },
            { name: "Care", price: "ab 79€/Monat", features: ["Updates & Backups", "Speed & Security", "Kleine Änderungen"], badge: "Wartung" },
          ].map((p, i) => (
            <div key={i} className="rounded-2xl border border-neutral-200 p-6">
              <div className="flex items-center justify-between text-base sm:text-lg">
                <span>{p.name}</span>
                <span className="text-xs sm:text-sm px-2 py-1 rounded-full border border-neutral-300 bg-[#faf8f4]">{p.badge}</span>
              </div>
              <div className="text-xl sm:text-2xl font-semibold text-charcoal mt-2">{p.price}</div>
              <ul className="mt-3 sm:mt-4 space-y-2 text-sm text-neutral-800 list-disc list-inside">
                {p.features.map((f, idx) => <li key={idx}>{f}</li>)}
              </ul>
              <a href="#contact" className="mt-5 sm:mt-6 w-full rounded-xl px-4 sm:px-5 py-2 bg-charcoal text-white inline-block text-center">Anfragen</a>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ (native <details>) */}
      <section id="faq" className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-14 sm:py-16">
        <h2 className="text-2xl md:text-3xl font-semibold mb-4 sm:mb-6">Häufige Fragen</h2>
        {[
          ["Wie schnell ist meine Website fertig?", "Ein One-Pager oft in 7–10 Tagen. Mehrseitige Seiten je nach Umfang 2–4 Wochen."],
          ["Welche Tools/Builder nutzt du?", "Tailwind/React oder Wix Studio – je nach Projekt, Geschwindigkeit & Budget."],
          ["Kümmert ihr euch um Rechtstexte?", "Wir integrieren Impressum & Datenschutz. Rechtstexte selbst oder via Generator/Anwalt."]
        ].map(([q, a], i) => (
          <details key={i} className="border-b border-neutral-200 py-3">
            <summary className="cursor-pointer font-medium">{q}</summary>
            <p className="mt-2 text-neutral-700">{a}</p>
          </details>
        ))}
      </section>

      {/* Contact */}
      <section id="contact" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 items-start">
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold">Sag kurz Hallo</h2>
            <p className="mt-2 sm:mt-3 text-neutral-600 text-[15px]">Schick mir eine kurze Nachricht – ich melde mich schnell mit Vorschlägen.</p>
            <div className="mt-5 space-y-2 text-sm text-neutral-700">
              <p>📧 hello@filumedia.de</p>
              <p>📞 +49 ••• •• ••••</p>
              <p>📍 Passau, Bayern</p>
            </div>
          </div>
          <div className="rounded-2xl border border-neutral-200 p-6">
            <div className="font-medium mb-3">Kontaktformular</div>
            <form className="space-y-3" onSubmit={(e) => { e.preventDefault(); alert('Danke!'); }}>
              <input placeholder="Dein Name" className="w-full bg-white border border-neutral-300 rounded-lg px-3 py-2" />
              <input placeholder="E-Mail" className="w-full bg-white border border-neutral-300 rounded-lg px-3 py-2" />
              <textarea placeholder="Kurz dein Projekt…" className="w-full bg-white border border-neutral-300 rounded-lg px-3 py-2 min-h-[120px]" />
              <button type="submit" className="w-full rounded-xl px-4 sm:px-5 py-2 bg-charcoal text-white">Absenden</button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-neutral-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 sm:py-10 text-sm text-neutral-600 flex flex-col md:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} FILUMEDIA. Alle Rechte vorbehalten.</p>
          <div className="flex items-center gap-6">
            <a className="hover:text-neutral-900" href="#">Impressum</a>
            <a className="hover:text-neutral-900" href="#">Datenschutz</a>
          </div>
        </div>
        <div className="fixed bottom-4 left-1/2 -translate-x-1/2 md:hidden">
          <a href="#contact" className="px-5 py-3 rounded-full shadow-lg border border-neutral-200" style={{ background: beige, color: charcoal }}>Termin buchen</a>
        </div>
      </footer>
    </div>
  );
}
