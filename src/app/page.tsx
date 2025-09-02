"use client";
import { useMemo, useState, useEffect } from "react";
import {
  ArrowRight, CheckCircle2, Globe, CalendarDays, Mail, Building2, Menu, X
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

/** ======= Einstellungen (bitte anpassen) ======= */
const OWNER_EMAIL = "filuma@icloud.com";            // Fallback-E-Mail für das Quiz
const FORMSPREE_ID = "xdkllwek";                             // Optional: Formspree ID einsetzen z.B. "xgebrjyo"
/** ============================================== */

const accent = "indigo-600";        // Akzentfarbe
const accentHover = "indigo-700";
const softBg = "from-indigo-50 to-white";
const ACCENT_BTN = "bg-indigo-600 hover:bg-indigo-700";
const SOFT_BG = "from-indigo-50 to-white";
const DRAWER_W = 320; // Breite des Drawers in px (w-80 = 20rem = 320px)


function MobileMenu({
  open,
  onNavigate,
}: {
  open: boolean;
  onNavigate: (id: string) => void;
}) {
  const links: [string, string][] = [
    ["Leistungen", "services"],
    ["Projekte", "work"],
    ["Partner", "partners"],
    ["Ablauf", "process"],
    ["Preise", "pricing"],
    ["FAQ", "faq"],
    ["Kontakt", "contact"],
  ];

  return (
    <AnimatePresence>
      {/* Overlay (klick schließt) */}
      {open && (
        <motion.div
          key="overlay"
          className="fixed inset-0 bg-black/30 backdrop-blur-[2px] md:hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => onNavigate("")} // schließt, weil Page setMobileOpen(false) in scrollTo macht
        />
      )}

      {/* Drawer von rechts */}
      {open && (
        <motion.aside
          key="drawer"
          id="mobile-nav"
          className="fixed right-0 top-0 z-50 h-screen w-80 max-w-[85vw] bg-white md:hidden shadow-xl border-l border-slate-200"
          initial={{ x: DRAWER_W }}
          animate={{ x: 0 }}
          exit={{ x: DRAWER_W }}
          transition={{ type: "tween", duration: 0.28 }}
          aria-modal="true"
          role="dialog"
        >
          <div className="h-16 flex items-center justify-between px-4 border-b border-slate-200">
            <span className="font-semibold">Menü</span>
            <button
              className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-slate-300"
              onClick={() => onNavigate("")}
              aria-label="Menü schließen"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          <div className="px-4 py-3">
            <div className="flex flex-col">
              {links.map(([label, id]) => (
                <button
                  key={id}
                  onClick={() => onNavigate(id)}
                  className="text-left px-2 py-3 rounded-lg hover:bg-slate-50 text-slate-700"
                >
                  {label}
                </button>
              ))}

              <a
                href="#quiz"
                onClick={() => onNavigate("quiz")}
                className={`mt-2 inline-flex items-center justify-center rounded-xl px-4 py-3 text-white ${ACCENT_BTN}`}
              >
                Projekt-Check starten
              </a>
            </div>
          </div>
        </motion.aside>
      )}
    </AnimatePresence>
  );
}


export default function Page() {
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const scrollTo = (id: string) => {
    setMobileOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <>
      {/* Alles was deine Seite enthält → in motion.div */}
      <motion.div
        animate={mobileOpen ? { x: -320 } : { x: 0 }} // -320px = Drawer-Breite
        transition={{ type: "tween", duration: 0.28 }}
        className="bg-white text-slate-900 selection:bg-slate-900 selection:text-white will-change-transform"
      >
        {/* Header */}
        <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-slate-200">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="h-7 w-7 rounded-xl bg-slate-900" />
              <span className="font-semibold tracking-wide">FILUMEDIA</span>
            </div>
                {/* Desktop Nav */}
    <nav className="hidden md:flex items-center gap-6 text-sm text-slate-600">
      {[
        ["Leistungen", "services"],
        ["Projekte", "work"],
        ["Partner", "partners"],
        ["Ablauf", "process"],
        ["Preise", "pricing"],
        ["FAQ", "faq"],
        ["Kontakt", "contact"],
      ].map(([label, id]) => (
        <button
          key={id}
          onClick={() => scrollTo(id)}
          className="hover:text-slate-900 transition"
        >
          {label}
        </button>
      ))}
      <a
        href="#quiz"
        className={`rounded-xl px-3 py-2 text-white ${ACCENT_BTN} transition`}
      >
        Projekt-Check starten
      </a>
    </nav>

    {/* Mobile Toggle */}
    <button
      className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-lg border border-slate-300"
      onClick={() => setMobileOpen((v) => !v)}
      aria-expanded={mobileOpen}
      aria-controls="mobile-nav"
      aria-label="Menü öffnen"
    >
      {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
    </button>

          </div>
        </header>

         {/* Hero */}
      <section className={`relative overflow-hidden border-b border-slate-200 ${SOFT_BG}`}>
        <div className="absolute -top-24 -right-24 h-[28rem] w-[28rem] rounded-full bg-indigo-200/30 blur-3xl"></div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24 grid md:grid-cols-12 gap-10 items-center">
          <div className="md:col-span-7">
            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="font-bold leading-tight text-[clamp(2.25rem,6vw,3.75rem)]"
            >
              Klar. Schnell. <span className="text-indigo-700">Konvertierend.</span>
            </motion.h1>
            <p className="mt-4 text-slate-600 max-w-xl">
              Websites, die Vertrauen aufbauen und Termine generieren – perfekt für
              Dienstleister, Praxen & Marken. Minimaler Lärm, maximale Wirkung.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="#work"
                className={`rounded-xl px-4 py-2 text-white ${ACCENT_BTN} inline-flex items-center`}
              >
                Referenzen ansehen <ArrowRight className="ml-2 h-4 w-4" />
              </a>
              <a
                href="#quiz"
                className="rounded-xl px-4 py-2 border border-slate-300"
              >
                Projekt-Quiz starten
              </a>
            </div>

            <ul className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-slate-700 max-w-xl">
              {[
                "Fokussierte UX & starke Calls-to-Action",
                "SEO-Basics & exzellente Performance",
                "Rechtstexte/DSGVO vorbereitet",
                "Sauberer Code, wartungsarm",
              ].map((t, i) => (
                <li key={i} className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-slate-900" />
                  {t}
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-5">
            <div className="rounded-2xl border border-slate-200 bg-white shadow-sm p-5">
              <div className="font-medium mb-3 flex items-center gap-2">
                <Globe className="h-5 w-5" /> Live-Vorschau
              </div>
              <img
                className="rounded-xl aspect-[16/10] w-full object-cover"
                src="https://images.unsplash.com/photo-1529336953121-497c3c3ab3ac?q=80&w=1600&auto=format&fit=crop"
                alt="Preview"
              />
              <p className="text-sm text-slate-600 mt-3">
                Neues, kühles Look-&-Feel mit Indigo-Akzenten und viel Weißraum.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Partner Logos */}
      <section id="partners" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-14">
        <div className="text-sm uppercase tracking-wider text-slate-500 mb-5">Vertrauen von</div>
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-6 items-center">
          {["LumaCare", "Technohaus", "Nordtax", "Boutiqua", "Praxxis", "Stellwerk"].map((name) => (
            <Logo key={name} label={name} />
          ))}
        </div>
      </section>

      {/* Services */}
      <section id="services" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 sm:py-16 border-t border-b border-slate-200">
        <h2 className="text-2xl md:text-3xl font-semibold mb-8">Leistungen</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              title: "One-Pager",
              desc: "Klare Story auf einer Seite. Schnell online, perfekt strukturiert.",
              points: ["Hero, Nutzen, Kontakt", "Termin-CTA integriert", "Impressum/Datenschutz"],
            },
            {
              title: "Business Website",
              desc: "Mehr Seiten & Inhalt – SEO-ready und ausbaufähig.",
              points: ["3–6 Seiten", "Kontakt-/Booking-Flows", "On-Page SEO"],
            },
            {
              title: "Care & Updates",
              desc: "Rundum-Sorglos-Paket. Sicherheit, Backups & kleine Änderungen.",
              points: ["Updates/Backups", "Speed & Security", "Monatlich kündbar"],
            },
          ].map((s) => (
            <Card key={s.title} title={s.title} desc={s.desc} points={s.points} />
          ))}
        </div>
      </section>

      {/* Work */}
      <section id="work" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 sm:py-16">
        <div className="flex items-end justify-between gap-3 mb-6">
          <h2 className="text-2xl md:text-3xl font-semibold">Projekte</h2>
          <a href="#quiz" className={`rounded-xl px-4 py-2 text-white ${ACCENT_BTN}`}>Projekt anfragen</a>
        </div>
        <ProjectGrid />
      </section>

      {/* Process */}
      <section id="process" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 sm:py-16 border-t border-b border-slate-200">
        <h2 className="text-2xl md:text-3xl font-semibold mb-6">So läuft’s</h2>
        <ol className="grid grid-cols-1 md:grid-cols-4 gap-4 text-sm">
          {[
            ["Kennenlernen", "15-Min Call: Ziele, Stil, Inhalte."],
            ["Design", "Entwurf minimal & markant."],
            ["Build", "Sauberer Code, SEO-Basics, Speed."],
            ["Launch", "Go-Live, Tracking, Betreuung."],
          ].map(([title, desc], i) => (
            <li key={i} className="p-5 rounded-2xl border border-slate-200 bg-white">
              <div className="text-xs text-slate-500">Schritt {i + 1}</div>
              <div className="font-medium mt-1">{title}</div>
              <p className="mt-1 text-slate-600">{desc}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* Pricing */}
      <section id="pricing" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 sm:py-16">
        <h2 className="text-2xl md:text-3xl font-semibold mb-6">Transparente Pakete</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            ["One-Pager", "ab 690€", ["1 Seite • 3 Sektionen", "Kontakt & Termin-CTA", "Impressum/Datenschutz"]],
            ["Business", "ab 1.690€", ["3–6 Seiten", "Booking & Leads", "On-Page SEO"]],
            ["Care", "ab 79€/Monat", ["Updates & Backups", "Speed & Security", "Kleine Änderungen"]],
          ].map(([name, price, features]) => (
            <PriceCard key={name as string} name={name as string} price={price as string} features={features as string[]} />
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-14 sm:py-16 border-t border-b border-slate-200">
        <h2 className="text-2xl md:text-3xl font-semibold mb-4">FAQ</h2>
        {[
          ["Wie schnell ist meine Website fertig?", "One-Pager oft in 7–10 Tagen. Mehrseitige Seiten 2–4 Wochen."],
          ["Welche Tools nutzt du?", "Next.js/Tailwind oder statisch – je nach Budget/Speed."],
          ["Rechtstexte/DSGVO?", "Impressum & Datenschutz werden integriert (Texte via Generator/Anwalt)."],
        ].map(([q, a], i) => (
          <details key={i} className="border-b border-slate-200 py-3">
            <summary className="cursor-pointer font-medium">{q}</summary>
            <p className="mt-2 text-slate-700">{a}</p>
          </details>
        ))}
      </section>

      {/* QUIZ */}
      <section id="quiz" className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-14 sm:py-16">
        <h2 className="text-2xl md:text-3xl font-semibold mb-3">Finde dein Paket</h2>
        <p className="text-slate-600 mb-6">
          3 schnelle Schritte – am Ende schicke ich dir automatisch eine passende Empfehlung.
        </p>
        <Quiz />
      </section>

      {/* Contact */}
      <section id="contact" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold">Sag kurz Hallo</h2>
            <p className="mt-2 text-slate-600">
              Schick mir eine Nachricht – ich melde mich schnell mit Vorschlägen.
            </p>
            <div className="mt-4 space-y-2 text-sm text-slate-700">
              <p className="flex items-center gap-2"><Mail className="h-4 w-4" /> {OWNER_EMAIL}</p>
              <p className="flex items-center gap-2"><CalendarDays className="h-4 w-4" /> Termin nach Wunsch</p>
              <p className="flex items-center gap-2"><Building2 className="h-4 w-4" /> Passau, Bayern</p>
            </div>
          </div>

          <div className="rounded-2xl border border-slate-200 p-6">
            <div className="font-medium mb-3">Kontaktformular</div>
            <form
  className="space-y-3"
  onSubmit={async (e) => {
    e.preventDefault();
    const form = e.currentTarget as HTMLFormElement;
    const payload = {
      _subject: "Kontaktformular (Filumedia)",
      name: (form.elements.namedItem("name") as HTMLInputElement)?.value,
      email: (form.elements.namedItem("email") as HTMLInputElement)?.value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement)?.value,
    };

    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: "POST",
        headers: { "Accept": "application/json", "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error("Formspree error");
      alert("Danke! Deine Nachricht wurde gesendet.");
      form.reset();
    } catch (err) {
      alert("Konnte nicht senden. Schreib bitte kurz an " + OWNER_EMAIL);
    }
  }}
>
  <input
    name="name"
    placeholder="Dein Name"
    className="w-full border border-slate-300 rounded-lg px-3 py-2"
    required
  />
  <input
    name="email"
    type="email"
    placeholder="E-Mail"
    className="w-full border border-slate-300 rounded-lg px-3 py-2"
    required
  />
  <textarea
    name="message"
    placeholder="Kurz dein Projekt…"
    className="w-full border border-slate-300 rounded-lg px-3 py-2 min-h-[120px]"
    required
  />
  <button
    type="submit"
    className={`w-full rounded-xl px-4 py-2 text-white ${ACCENT_BTN}`}
  >
    Absenden
  </button>
</form>

          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 text-sm text-slate-600 flex flex-col md:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} FILUMEDIA. Alle Rechte vorbehalten.</p>
          <div className="flex items-center gap-6">
            <a className="hover:text-slate-900" href="#">Impressum</a>
            <a className="hover:text-slate-900" href="#">Datenschutz</a>
          </div>
        </div>
      </footer>

      {/* Floating CTA */}
      <a
        href="#quiz"
        className={`fixed right-4 bottom-4 md:right-6 md:bottom-6 px-4 py-3 rounded-full shadow-lg border border-slate-200 ${ACCENT_BTN} text-white inline-flex items-center gap-2`}
      >
        <CalendarDays className="h-4 w-4" />
        Termin buchen
      </a>
    </div>
  );
}

        {/* >>> hier bleibt dein ganzer restlicher Content <<< */}
      </motion.div>
      
      {/* HIER: Drawer/Overlay über der Seite */}
    <MobileMenu open={mobileOpen} onNavigate={scrollTo} />
  </>
);



/* ---------- kleine UI-Bausteine ---------- */

function Card({ title, desc, points }: { title: string; desc: string; points: string[] }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6">
      <div className="font-semibold">{title}</div>
      <p className="text-slate-600 text-sm mt-2">{desc}</p>
      <ul className="mt-4 space-y-2 text-sm text-slate-800">
        {points.map((p, i) => (
          <li key={i} className="flex items-center gap-2">
            <CheckCircle2 className="h-4 w-4 text-slate-900" />
            {p}
          </li>
        ))}
      </ul>
    </div>
  );
}

function PriceCard({ name, price, features }: { name: string; price: string; features: string[] }) {
  return (
    <div className="rounded-2xl border border-slate-200 p-6">
      <div className="flex items-center justify-between">
        <span className="text-lg font-medium">{name}</span>
        <span className="text-xs px-2 py-1 rounded-full border border-slate-300 bg-slate-50">Paket</span>
      </div>
      <div className="text-2xl font-semibold mt-2">{price}</div>
      <ul className="mt-4 space-y-2 text-sm text-slate-800 list-disc list-inside">
        {features.map((f, i) => <li key={i}>{f}</li>)}
      </ul>
      <a href="#quiz" className="mt-6 inline-block rounded-xl px-4 py-2 text-white bg-indigo-600 hover:bg-indigo-700">Passt zu mir?</a>
    </div>
  );
}

function ProjectGrid() {
  const projects = useMemo(() => ([
    { title: "Aesthetic Praxis", img: "https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=1400&auto=format&fit=crop" },
    { title: "Technik & Gewerbe", img: "https://images.unsplash.com/photo-1488229297570-58520851e868?q=80&w=1400&auto=format&fit=crop" },
    { title: "Boutique & Retail", img: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?q=80&w=1400&auto=format&fit=crop" },
    { title: "Consulting", img: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1600&auto=format&fit=crop" },
    { title: "Gastro", img: "https://images.unsplash.com/photo-1521017432531-fbd92d1cf05b?q=80&w=1600&auto=format&fit=crop" },
    { title: "Immobilien", img: "https://images.unsplash.com/photo-1494526585095-c41746248156?q=80&w=1600&auto=format&fit=crop" },
  ]), []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {projects.map((p) => (
        <div key={p.title} className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-slate-50">
          <img src={p.img} alt={p.title} className="h-56 md:h-64 w-full object-cover transition group-hover:scale-[1.02]" />
          <div className="absolute inset-x-0 bottom-0 p-4 flex items-center justify-between bg-gradient-to-t from-white via-white/90 to-transparent">
            <span className="font-medium">{p.title}</span>
            <ArrowRight className="h-5 w-5 text-slate-900" />
          </div>
        </div>
      ))}
    </div>
  );
}

function Logo({ label }: { label: string }) {
  return (
    <div className="h-10 rounded-lg border border-slate-200 bg-white flex items-center justify-center text-sm text-slate-500">
      {label}
    </div>
  );
}

/* ---------- QUIZ ---------- */

function Quiz() {
  type Answers = {
    type?: "onepager" | "business" | "complex";
    purpose?: "praxis" | "dienstleistung" | "shop" | "portfolio" | "sonstiges";
    budget?: "<1000" | "1000-2500" | ">2500";
    name?: string;
    email?: string;
    company?: string;
  };

  const [step, setStep] = useState<number>(1);
  const [loading, setLoading] = useState(false);
  const [ok, setOk] = useState(false);
  const [a, setA] = useState<Answers>({});

  const next = () => setStep((s) => s + 1);
  const back = () => setStep((s) => Math.max(1, s - 1));

  async function sendLead() {
    setLoading(true);
    const summary =
      `Typ: ${a.type}\nZweck: ${a.purpose}\nBudget: ${a.budget}\n` +
      `Name: ${a.name}\nE-Mail: ${a.email}\nFirma: ${a.company}`;

    try {
      if (FORMSPREE_ID) {
        const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
          method: "POST",
          headers: { "Accept": "application/json", "Content-Type": "application/json" },
          body: JSON.stringify({
            _subject: "Neue Quiz-Anfrage (Filumedia)",
            _format: "json",
            ...a,
            summary,
          }),
        });
        if (!res.ok) throw new Error("Formspree error");
        setOk(true);
      } else {
        // Fallback: Mailto öffnen
        const subject = encodeURIComponent("Neue Anfrage über das Website-Quiz");
        const body = encodeURIComponent(summary);
        window.location.href = `mailto:${OWNER_EMAIL}?subject=${subject}&body=${body}`;
        setOk(true);
      }
    } catch {
      alert("Konnte nicht senden – bitte schreib kurz an " + OWNER_EMAIL);
    } finally {
      setLoading(false);
    }
  }

  if (ok) {
    const recommendation =
      a.type === "onepager" ? "One-Pager Essential"
      : a.type === "business" ? "Business Website"
      : "Individuelle Lösung";
    return (
      <div className="rounded-2xl border border-slate-200 p-6 bg-white">
        <div className="text-green-700 font-medium mb-2">Danke! Anfrage ist raus ✅</div>
        <p className="text-slate-700 text-sm">
          Empfehlung: <strong>{recommendation}</strong>. Ich melde mich zeitnah mit Vorschlägen.
        </p>
      </div>
    );
  }

  return (
    <div className="rounded-2xl border border-slate-200 p-6 bg-white">
      <div className="text-xs text-slate-500 mb-2">Schritt {step} von 4</div>

      {step === 1 && (
        <Step
          title="Welche Art von Website brauchst du?"
          options={[
            ["onepager", "One-Pager"],
            ["business", "Business Website"],
            ["complex", "Komplexere Lösung"],
          ]}
          value={a.type}
          onChange={(v) => setA((s) => ({ ...s, type: v as Answers["type"] }))}
        />
      )}

      {step === 2 && (
        <Step
          title="Wofür ist die Seite gedacht?"
          options={[
            ["praxis", "Praxis / Gesundheit"],
            ["dienstleistung", "Dienstleistung"],
            ["shop", "Shop / E-Commerce"],
            ["portfolio", "Portfolio"],
            ["sonstiges", "Sonstiges"],
          ]}
          value={a.purpose}
          onChange={(v) => setA((s) => ({ ...s, purpose: v as Answers["purpose"] }))}
        />
      )}

      {step === 3 && (
        <Step
          title="Welcher Budget-Korridor passt?"
          options={[
            ["<1000", "< 1.000 €"],
            ["1000-2500", "1.000 – 2.500 €"],
            [">2500", "> 2.500 €"],
          ]}
          value={a.budget}
          onChange={(v) => setA((s) => ({ ...s, budget: v as Answers["budget"] }))}
        />
      )}

      {step === 4 && (
        <div>
          <div className="font-medium mb-2">Wie kann ich dich erreichen?</div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <input
              placeholder="Name"
              className="border border-slate-300 rounded-lg px-3 py-2"
              value={a.name ?? ""}
              onChange={(e) => setA((s) => ({ ...s, name: e.target.value }))}
            />
            <input
              placeholder="E-Mail"
              className="border border-slate-300 rounded-lg px-3 py-2"
              value={a.email ?? ""}
              onChange={(e) => setA((s) => ({ ...s, email: e.target.value }))}
            />
            <input
              placeholder="Firma (optional)"
              className="border border-slate-300 rounded-lg px-3 py-2"
              value={a.company ?? ""}
              onChange={(e) => setA((s) => ({ ...s, company: e.target.value }))}
            />
          </div>
        </div>
      )}

      <div className="mt-6 flex items-center justify-between">
        <button
          onClick={back}
          className="px-4 py-2 rounded-xl border border-slate-300 disabled:opacity-40"
          disabled={step === 1}
        >
          Zurück
        </button>

        {step < 4 ? (
          <button
            onClick={next}
            className={`px-4 py-2 rounded-xl text-white ${ACCENT_BTN} disabled:opacity-40`}
            disabled={
              (step === 1 && !a.type) ||
              (step === 2 && !a.purpose) ||
              (step === 3 && !a.budget)
            }
          >
            Weiter
          </button>
        ) : (
          <button
            onClick={sendLead}
            className={`px-4 py-2 rounded-xl text-white ${ACCENT_BTN} disabled:opacity-40`}
            disabled={!a.name || !a.email || loading}
          >
            {loading ? "Sende…" : "Anfrage senden"}
          </button>
        )}
      </div>
    </div>
  );
}

function Step({
  title,
  options,
  value,
  onChange,
}: {
  title: string;
  options: [string, string][];
  value?: string;
  onChange: (v: string) => void;
}) {
  return (
    <div>
      <div className="font-medium mb-3">{title}</div>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        {options.map(([val, label]) => {
          const active = value === val;
          return (
            <button
              key={val}
              onClick={() => onChange(val)}
              className={`rounded-xl px-4 py-3 border text-sm ${
                active
                  ? "border-slate-900 bg-slate-900 text-white"
                  : "border-slate-300 hover:border-slate-400"
              }`}
            >
              {label}
            </button>
          );
        })}
      </div>
    </div>
  );
}
