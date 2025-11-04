import { useMemo } from "react";

const NAME = "Stephanie Dover";
const TAGLINE = "Senior/Staff Software Engineer — Platform, Infrastructure, and AI Systems";
const LOCATION = "Seattle, WA";
const EMAIL = "doverstephaniem@gmail.com";
const RESUME_URL = "/Stephanie Dover Resume.pdf";
const PHOTO_URL = "/images/me.png";

const COMPANIES = [
  { name: "Rad AI", url: "https://www.rad.ai", logoUrl: "", tagline: "Healthcare AI / Radiology" },
  { name: "Twitch", url: "https://www.twitch.tv", logoUrl: "", tagline: "Live Video / Commerce" },
  { name: "Amazon", url: "https://www.amazon.com", logoUrl: "", tagline: "AWS / Retail" },
  { name: "GitHub", url: "https://github.com", logoUrl: "", tagline: "Developer Platform / Authentication" },
  { name: "App Center", url: "https://appcenter.ms", logoUrl: "", tagline: "Build and Release Automation" },
  { name: "Microsoft", url: "https://www.microsoft.com", logoUrl: "", tagline: "Cloud / Developer Tools" },
  { name: "BaseMap", url: "https://www.basemap.com", logoUrl: "", tagline: "Geospatial Mapping" },
];

const DEEP_DIVES = [
  {
    title: "Decoupling a High-Throughput Engagement Service from a Monetization System",
    date: "2025",
    tags: ["Distributed Systems", "AWS DynamoDB", "Kinesis", "Lambda"],
    summary:
      "A technical deep dive into a 1M+ TPS zero-downtime migration using AWS DynamoDB, Kinesis, Lambda, and feature-flag rollouts.",
    link: "https://www.notion.so/Decoupling-a-High-Throughput-Engagement-Service-from-a-Monetization-System-2a18c30dc8ad80afb5eaeba68fb8d8db",
  },
  {
    title: "Handling High-Volume Concurrency with Goroutines and Go Channels",
    date: "2025",
    tags: ["Go", "Concurrency", "Goroutines", "Real-time Systems"],
    summary:
      "A look at how I used goroutines and Go channels to build a high-throughput, low-latency reward-selection system for tens of thousands of live users.",
    link: "https://www.notion.so/Handling-High-Volume-Concurrency-with-Goroutines-and-Go-Channels-2a18c30dc8ad800ea0b0d1e65bf17ed1?source=copy_link",
  },
];

export default function Portfolio() {
  const startYear = 2016;
  const years = useMemo(() => new Date().getFullYear() - startYear, []);

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-50">
      <Nav />
      <main className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Hero />
        <Companies />
        <DeepDives />
        <CTA />
      </main>
      <Footer years={years} />
    </div>
  );
}

function Nav() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-neutral-950/60">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-14 items-center justify-between">
          <a href="#home" className="font-semibold tracking-tight">{NAME}</a>
          <nav className="hidden gap-6 text-sm sm:flex">
            <a className="opacity-90 hover:opacity-100" href="#companies">Companies</a>
            <a className="opacity-90 hover:opacity-100" href="#deep-dives">Deep Dives</a>
            <a className="opacity-90 hover:opacity-100" href={RESUME_URL} target="_blank" rel="noopener noreferrer">Resume</a>
            <a className="opacity-90 hover:opacity-100" href="#contact">Contact</a>
          </nav>
        </div>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="home" className="py-16 sm:py-20">
      <div className="grid gap-8 md:grid-cols-5 md:items-center">
        <div className="md:col-span-3">
          <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">{NAME}</h1>
          <p className="mt-2 text-neutral-300">{TAGLINE}</p>
          <p className="mt-2 text-neutral-400">{LOCATION}</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href={`mailto:${EMAIL}`} className="rounded-2xl bg-white/10 px-4 py-2 text-sm font-medium hover:bg-white/15">Email</a>
            <a href={RESUME_URL} className="rounded-2xl border border-white/15 px-4 py-2 text-sm hover:bg-white/5" target="_blank" rel="noopener noreferrer">View Resume</a>
            <a href="#deep-dives" className="rounded-2xl border border-white/15 px-4 py-2 text-sm hover:bg-white/5">Technical Deep Dives</a>
          </div>
        </div>
        <div className="md:col-span-2 flex justify-center">
          <img
            src={PHOTO_URL}
            alt="Stephanie Dover headshot"
            className="h-56 w-56 rounded-3xl object-cover border border-white/10 shadow-xl"
          />
        </div>
      </div>
    </section>
  );
}

function Companies() {
  return (
    <section id="companies" className="py-12">
      <h2 className="text-xl font-semibold tracking-tight">Companies</h2>
      <p className="mt-2 text-sm text-neutral-400">Selected organizations and partnerships.</p>
      <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
        {COMPANIES.map((c) => (
          <a key={c.name} href={c.url} className="group rounded-2xl border border-white/10 bg-white/5 p-4 transition hover:bg-white/10" target="_blank" rel="noreferrer">
            {c.logoUrl ? (
              <img src={c.logoUrl} alt={`${c.name} logo`} className="h-8 w-auto grayscale group-hover:grayscale-0" />
            ) : (
              <span className="inline-flex h-8 items-center rounded-md bg-white/10 px-3 text-sm font-medium tracking-wide">{c.name}</span>
            )}
            <div className="mt-3 text-xs text-neutral-400">{c.tagline}</div>
          </a>
        ))}
      </div>
    </section>
  );
}

function DeepDives() {
  return (
    <section id="deep-dives" className="py-12">
      <h2 className="text-xl font-semibold tracking-tight">Technical Deep Dives</h2>
      <p className="mt-2 text-sm text-neutral-400">Selected engineering work and architectural case studies.</p>
      <div className="mt-6 grid gap-6 md:grid-cols-2">
        {DEEP_DIVES.map((p) => (
          <article key={p.title} className="rounded-2xl border border-white/10 bg-white/5 p-5">
            <div className="flex items-center justify-between text-xs text-neutral-400">
              <span>{p.date}</span>
              <span>{p.tags[0]}</span>
            </div>
            <h3 className="mt-3 text-lg font-semibold leading-snug">{p.title}</h3>
            <p className="mt-2 text-sm text-neutral-300">{p.summary}</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {p.tags.map((t) => (
                <span key={t} className="rounded-full border border-white/10 px-2 py-1 text-[11px] text-neutral-300">{t}</span>
              ))}
            </div>
            <div className="mt-4">
              <a href={p.link} className="text-sm font-medium underline underline-offset-4 hover:opacity-90">Read more</a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section id="contact" className="py-16">
      <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 to-transparent p-8">
        <h3 className="text-lg font-semibold">Professional Engagement</h3>
        <p className="mt-2 text-neutral-300">
          Open to senior and staff-level engineering roles focused on large-scale systems and infrastructure reliability. Also available for consulting engagements through Dovatech, LLC related to distributed systems and backend architecture.
        </p>
        <p className="mt-5 text-neutral-200">
          Contact: <a href={`mailto:${EMAIL}`} className="text-white hover:underline">{EMAIL}</a>
        </p>
      </div>
    </section>
  );
}

function Footer({ years }: { years: number }) {
  return (
    <footer className="border-t border-white/10 py-8">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <p className="text-xs text-neutral-500">© {new Date().getFullYear()} {NAME}. {years}+ years of software engineering experience.</p>
      </div>
    </footer>
  );
}

