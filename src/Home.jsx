import React, { useState } from "react";
import logoImage from "./assets/ChatGPT Image Oct 2, 2026, 01_21_54 AM.png";
import founderImage from "./assets/founder.png";
import upcomingImage from "./assets/upcoming.png";
import workImage from "./assets/7.png";
import heroImage from "./assets/6.png";
import portfolio13 from "./assets/13.jpeg";
import portfolio14 from "./assets/14.jpeg";
import portfolio16 from "./assets/16.png";
import portfolio19 from "./assets/19.png";
import portfolio20 from "./assets/20.jpeg";
import portfolio22 from "./assets/22.png";
import portfolio24 from "./assets/24.png";
import portfolio23 from "./assets/23.png";
import portfolio26 from "./assets/26.png";
import bajaoGaanaLogo from "./assets/Bajao_Gaana_Studios_logo.png";
import raagaRecordsLogo from "./assets/Raaga_Records_logo.png";
import redMusicLogo from "./assets/Red_Music_logo.png";
import sareGaMaLogo from "./assets/Sare_Ga_Ma_logo.png";
import vighnahartaLogo from "./assets/Vighnaharta_Movies_logo.png";
import vividnetLogo from "./assets/Vividnet_Music_logo.png";
import {
  ArrowUpRight,
  Camera,
  CheckCircle2,
  Globe,
  Instagram,
  Menu,
  Phone,
  Megaphone,
  Music2,
  Play,
  Sparkles,
  TrendingUp,
  X,
  Youtube,
} from "lucide-react";

const YOUTUBE_CHANNEL_URL = "https://www.youtube.com/@RkgDigitalMarketingAgency-w1c";
const INSTAGRAM_URL = "https://www.instagram.com/rkgdigital1/";

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "RKG Digital",
  url: "https://rkgdigital.com/",
  description:
    "Music, entertainment, and digital marketing agency offering music promotion, YouTube advertising, influencer marketing, and digital campaigns.",
  sameAs: [INSTAGRAM_URL, YOUTUBE_CHANNEL_URL],
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "sales",
    telephone: "+91-7566920256",
    areaServed: "IN",
    availableLanguage: ["English", "Hindi"],
  },
};

const services = [
  {
    number: "01",
    icon: TrendingUp,
    title: "YouTube Ads",
    description:
      "Audience-focused YouTube campaigns that help music releases reach listeners across relevant markets.",
  },
  {
    number: "02",
    icon: Megaphone,
    title: "Influencer Marketing",
    description:
      "Creator-led campaigns shaped around your genre, audience, and release goals.",
  },
  {
    number: "03",
    icon: Music2,
    title: "Music Promotion",
    description:
      "Release-focused promotion for artists, labels, and music projects across relevant digital channels.",
  },
  {
    number: "04",
    icon: Music2,
    title: "Spotify Promotion",
    description:
      "Digital promotion designed to support music discovery and release visibility on Spotify.",
  },
  {
    number: "05",
    icon: Camera,
    title: "Movie & Entertainment Promotion",
    description:
      "Digital campaign support for film, entertainment, and production-house releases.",
  },
  {
    number: "06",
    icon: Globe,
    title: "Digital PR & Campaigns",
    description:
      "Coordinated digital campaigns that bring creative, platforms, and audience outreach together.",
  },
];

const stats = [
  { value: "Music", label: "Entertainment Marketing" },
  { value: "Artists", label: "Labels & Creators" },
  { value: "Global", label: "Audience Targeting" },
  { value: "Digital", label: "Multi-Platform Campaigns" },
];

const reasons = [
  "Brand-first strategy",
  "Creative market positioning",
  "SEO-led visibility",
  "Short-form content systems",
  "Music and artist growth",
  "Conversion-focused campaigns",
];

const workSteps = [
  {
    phase: "01 / Strategy",
    title: "Map the market before launching the work.",
    text:
      "We study the brand, audience, competitors and market opportunity to build a sharper digital direction.",
  },
  {
    phase: "02 / Execution",
    title: "Build creative systems that stop the scroll.",
    text:
      "From social creatives to SEO content and branded campaigns, we turn strategy into execution with speed and precision.",
  },
  {
    phase: "03 / Growth",
    title: "Keep momentum with performance feedback.",
    text:
      "We optimize continuously so your campaigns improve over time, drive better reach and support long-term business growth.",
  },
];

const portfolio = [
  { id: "13", image: portfolio13 },
  { id: "14", image: portfolio14 },
  { id: "16", image: portfolio16 },
  { id: "19", image: portfolio19 },
  { id: "20", image: portfolio20 },
  { id: "22", image: portfolio22 },
  { id: "24", image: portfolio24 },
  { id: "23", image: portfolio23 },
  { id: "26", image: portfolio26 },
];

const clients = [
  { name: "Bajao Gaana Studios", image: bajaoGaanaLogo },
  { name: "Raaga Records", image: raagaRecordsLogo },
  { name: "Red Music", image: redMusicLogo },
  { name: "Saregama", image: sareGaMaLogo },
  { name: "Vighnaharta Movies", image: vighnahartaLogo },
  { name: "Vividnet Music", image: vividnetLogo },
];

function Navbar() {
  const [open, setOpen] = useState(false);

  const navItems = [
    { name: "Services", href: "#services" },
    { name: "Work", href: "#work" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-white/10 bg-black/15 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">
        <a href="#home" className="flex items-center gap-3" aria-label="RKG Digital home">
          <img
            src={logoImage}
            alt="RKG Digital logo"
            className="h-9 w-9 rounded-lg object-cover ring-1 ring-white/15"
          />

          <div>
            <p className="text-lg font-black tracking-tight text-white">
              RKG <span className="text-red-500">DIGITAL</span>
            </p>
            <p className="text-[9px] uppercase tracking-[0.28em] text-white/65">
              Marketing Agency
            </p>
          </div>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-sm font-medium text-white/75 transition hover:text-orange-400"
            >
              {item.name}
            </a>
          ))}

          <div className="flex items-center gap-3">
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white transition hover:border-orange-400/70 hover:text-orange-400"
            >
              <Instagram size={16} />
            </a>
            <a
              href={YOUTUBE_CHANNEL_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-red-600 px-5 py-2.5 text-sm font-bold text-white transition hover:bg-red-500"
            >
              <Youtube size={16} />
              YouTube
            </a>
          </div>
        </nav>

        <button
          onClick={() => setOpen(!open)}
          className="rounded-xl border border-white/15 p-2 text-white md:hidden"
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="border-t border-white/10 bg-black/90 px-6 py-6 md:hidden">
          <div className="flex flex-col gap-5">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setOpen(false)}
                className="text-sm font-medium text-white/75"
              >
                {item.name}
              </a>
            ))}

            <div className="flex flex-col gap-3">
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm font-bold text-white"
              >
                <Instagram size={17} />
                Instagram
              </a>
              <a
                href={YOUTUBE_CHANNEL_URL}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-2 rounded-full bg-red-600 px-5 py-3 text-sm font-bold"
              >
                <Youtube size={17} />
                Visit YouTube
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

function FounderSpotlight() {
  return (
    <section id="about" className="relative overflow-hidden bg-[#111111] pt-28 pb-6 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(249,115,22,0.18),_transparent_35%),radial-gradient(circle_at_bottom_right,_rgba(239,68,68,0.12),_transparent_28%)]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-8 rounded-[2rem] border border-white/10 bg-white/[0.02] p-6 shadow-[0_20px_50px_rgba(0,0,0,0.18)] lg:grid-cols-[1.15fr_0.85fr] lg:p-8">
          <div>
            <h2 className="mt-4 text-3xl font-black tracking-[-0.05em] text-white sm:text-4xl lg:text-5xl">
              WE MAKE MUSIC MOVE.
              <span className="block text-orange-400">WE MAKE BRANDS GROW.</span>
            </h2>
            <p className="mt-5 max-w-xl text-base leading-8 text-white/65">
              Music promotion, YouTube advertising, influencer marketing, and digital campaigns for artists, labels, and brands — across India and worldwide.
            </p>
          </div>

          <div className="flex flex-col items-center justify-center lg:justify-end">
            <div className="relative">
              <div className="absolute inset-4 rounded-full bg-orange-500/15 blur-2xl" />
              <img
                src={founderImage}
                alt="Mayank Gupta"
                className="relative h-[260px] w-[260px] rounded-[2rem] border border-white/10 object-cover shadow-[0_18px_40px_rgba(0,0,0,0.28)] lg:h-[300px] lg:w-[300px]"
              />
            </div>
            <p className="mt-4 text-center text-base font-bold uppercase tracking-[0.2em] text-white/85 sm:text-lg">
              Founder & CEO<br />Mayank Gupta
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-[#111111] pt-24 text-white">
      <div
        className="hero-animated-bg absolute inset-0 opacity-80"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1600&q=80')",
        }}
      />
      <div className="hero-glow absolute left-[-10%] top-[8%] h-[440px] w-[440px] rounded-full bg-orange-500/15 blur-[160px]" />
      <div className="hero-glow absolute bottom-[-8%] right-[-12%] h-[420px] w-[420px] rounded-full bg-red-600/15 blur-[170px]" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#111111] via-[#111111]/90 to-[#111111]/75" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 pb-20 pt-10 lg:grid-cols-[1.15fr_0.85fr] lg:px-8 lg:pt-20">
        <div>
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-orange-400/30 bg-orange-500/10 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.28em] text-orange-300">
            <Sparkles size={13} />
            Music • Entertainment • Digital Marketing
          </div>

          <h1 className="max-w-4xl text-5xl font-black leading-[0.9] tracking-[-0.06em] text-white sm:text-6xl lg:text-[5rem]">
            CREATE.
            <span className="block text-orange-400">PROMOTE.</span>
            <span className="block text-white/90">GROW.</span>
          </h1>

          <p className="mt-7 max-w-2xl text-lg leading-8 text-white/60">
            We help artists, labels, and entertainment brands promote releases through
            YouTube advertising, influencer marketing, and digital campaigns.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href="#contact"
              className="group inline-flex items-center justify-center gap-3 rounded-full bg-orange-500 px-7 py-4 text-sm font-bold text-black transition hover:bg-orange-400"
            >
              CONTACT US
              <ArrowUpRight
                size={18}
                className="transition group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </a>

            <a
              href="#showcase"
              className="inline-flex items-center justify-center gap-3 rounded-full border border-white/15 bg-white/3 px-7 py-4 text-sm font-bold text-white transition hover:border-white/30 hover:bg-white/5"
            >
              <Play size={18} fill="currentColor" />
              OUR WORK
            </a>
          </div>

          <div className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-4 text-sm text-white/55">
            <div className="flex items-center gap-2">
              <CheckCircle2 size={17} className="text-orange-400" />
              YouTube Ads
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 size={17} className="text-orange-400" />
              Influencer Campaigns
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 size={17} className="text-orange-400" />
              India + Worldwide
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="absolute inset-6 rounded-[2.5rem] bg-orange-500/10 blur-3xl" />
          <div className="relative overflow-hidden rounded-[2.25rem] border border-white/10 bg-white/[0.04] p-3 shadow-[0_40px_120px_rgba(0,0,0,0.55)]">
            <div className="relative overflow-hidden rounded-[1.9rem]">
              <img
                src={heroImage}
                alt="RKG Digital team planning campaign"
                className="aspect-[4/5] w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/25 to-transparent" />

              <div className="absolute bottom-5 left-5 right-5 rounded-3xl border border-white/10 bg-black/70 p-5 backdrop-blur-md">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.25em] text-white/45">
                      RKG Digital
                    </p>
                    <p className="mt-2 text-2xl font-black leading-tight text-white">
                      Create.<br />Promote.<br />Grow.
                    </p>
                  </div>

                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-orange-500 text-black">
                    <Play size={20} fill="currentColor" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Stats() {
  return (
    <section className="border-y border-black/5 bg-[#f3f3f1] py-2">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-3 px-6 lg:grid-cols-4 lg:px-8">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="rounded-[1.5rem] border border-black/5 bg-white px-6 py-8 text-center shadow-[0_12px_30px_rgba(0,0,0,0.02)]"
          >
            <p className="text-4xl font-black tracking-[-0.04em] text-black">{stat.value}</p>
            <p className="mt-2 text-[10px] uppercase tracking-[0.28em] text-black/45">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="services" className="bg-[#f3f3f1] py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.32em] text-orange-500">
            Services
          </p>
          <h2 className="text-4xl font-black tracking-[-0.05em] text-black md:text-6xl">
            MUSIC & ENTERTAINMENT
            <span className="block text-orange-500">DIGITAL MARKETING</span>
          </h2>
          <p className="mt-6 text-lg leading-8 text-black/60">
            Music promotion, release campaigns, influencer outreach, and digital promotion
            for artists, labels, and entertainment brands.
          </p>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.number}
                className="group rounded-[1.75rem] border border-black/5 bg-white p-7 shadow-[0_14px_40px_rgba(0,0,0,0.04)] transition duration-300 hover:-translate-y-1 hover:border-orange-500/30"
              >
                <div className="flex items-start justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-black/5 bg-orange-500/10 text-orange-500 transition group-hover:bg-orange-500/15">
                    <Icon size={22} />
                  </div>
                  <span className="text-xs font-bold text-black/25">{service.number}</span>
                </div>

                <h3 className="mt-8 text-2xl font-black tracking-[-0.04em] text-black">{service.title}</h3>
                <p className="mt-4 text-sm leading-7 text-black/60">{service.description}</p>

                <div className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-orange-500">
                  Explore Service
                  <ArrowUpRight size={15} />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function MusicSection() {
  return (
    <section className="bg-[#0c0c0c] py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 lg:grid-cols-2 lg:px-8">
        <div className="order-2 lg:order-1">
          <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.32em] text-orange-400">
            Featured Music Release
          </p>
          <h2 className="text-4xl font-black tracking-[-0.05em] md:text-6xl">
            HAVE A RELEASE?
            <span className="block text-orange-400">LET’S BUILD ITS CAMPAIGN.</span>
          </h2>

          <p className="mt-7 max-w-xl text-lg leading-8 text-white/60">
            From release planning to promotion across YouTube, Instagram, and creator
            channels, we build campaigns around your music and audience.
          </p>

          <div className="mt-9 grid gap-4 sm:grid-cols-2">
            {[
              "Release-Focused Strategy",
              "YouTube & Instagram",
              "Creator Campaigns",
              "Audience-First Targeting",
            ].map((item) => (
              <div key={item} className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                <CheckCircle2 size={18} className="text-orange-400" />
                <span className="text-sm font-medium text-white/70">{item}</span>
              </div>
            ))}
          </div>

          <a
            href="#showcase"
            className="mt-9 inline-flex items-center gap-3 rounded-full bg-orange-500 px-7 py-4 text-sm font-bold text-black transition hover:bg-orange-400"
          >
            VIEW SELECTED WORK
            <ArrowUpRight size={18} />
          </a>
        </div>

        <div className="order-1 lg:order-2">
          <div className="relative overflow-hidden rounded-[2.2rem] border border-white/10 bg-white/[0.02] p-3 shadow-[0_30px_80px_rgba(0,0,0,0.45)]">
            <div className="relative overflow-hidden rounded-[1.8rem]">
              <img
                src={upcomingImage}
                alt="Music release poster"
                className="h-[560px] w-full object-cover md:h-[700px]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function WorkProcess() {
  return (
    <section id="work" className="border-t border-black/5 bg-[#2d2b2a] py-28 text-white">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
        <div className="max-w-xl">
          <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.32em] text-orange-400">
            How We Work
          </p>
          <h2 className="text-4xl font-black tracking-[-0.05em] md:text-6xl">
            FROM RELEASE PLAN,
            <span className="block text-orange-400">TO CAMPAIGN DELIVERY.</span>
          </h2>
          <p className="mt-6 text-base leading-8 text-white/65">
            We plan around the release, audience, and campaign goals, then coordinate
            creative and platform execution through launch.
          </p>

          <a
            href="#contact"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-orange-500 px-6 py-3 text-sm font-bold text-black transition hover:bg-orange-400"
          >
            <Phone size={16} />
            CONTACT US FOR MORE INFO
          </a>
        </div>

        <div className="flex justify-center overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-3">
          <img
            src={workImage}
            alt="Analytics and digital growth planning"
            className="h-[520px] w-full max-w-[100%] rounded-[1.5rem] object-cover md:h-[720px]"
          />
        </div>
      </div>
    </section>
  );
}

function Showcase() {
  return (
    <section id="showcase" className="bg-[#f3f3f1] py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-12 text-center">
          <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.3em] text-orange-500">
            Selected Work
          </p>
          <h2 className="text-4xl font-black tracking-[-0.05em] text-black md:text-6xl">
            MUSIC, ENTERTAINMENT
            <span className="block text-orange-500">& BRAND CAMPAIGNS</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {portfolio.map((item) => (
            <article key={item.id} className="group overflow-hidden rounded-[1.5rem] border border-black/5 bg-white shadow-[0_14px_40px_rgba(0,0,0,0.08)]">
              <img
                src={item.image}
                alt={`Music, entertainment, and brand campaign ${item.id}`}
                className="aspect-[4/5] w-full object-cover transition duration-500 group-hover:scale-105"
              />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Clients() {
  return (
    <section className="border-t border-white/10 bg-white/[0.02] py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center">
          <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-red-400">
            Artists, Labels & Brands
          </p>
          <h2 className="mt-4 text-4xl font-black tracking-[-0.05em] md:text-6xl">
            TRUSTED BY ARTISTS,
            <span className="block text-red-500">LABELS & BRANDS</span>
          </h2>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-3 xl:grid-cols-6">
          {clients.map((client) => (
            <div key={client.name} className="flex flex-col items-center gap-2">
              <div className="flex h-24 w-24 items-center justify-center rounded-full border border-white/10 bg-white p-3">
                <img
                  src={client.image}
                  alt={client.name}
                  className="h-full w-full object-contain"
                />
              </div>
              <p className="text-center text-[10px] font-semibold uppercase tracking-[0.15em] text-white/65">
                {client.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section id="contact" className="relative overflow-hidden bg-red-600 py-24">
      <div className="absolute -left-20 -top-20 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
      <div className="absolute -bottom-20 -right-20 h-72 w-72 rounded-full bg-black/15 blur-3xl" />

      <div className="relative mx-auto max-w-5xl px-6 text-center">
        <p className="text-[11px] font-bold uppercase tracking-[0.32em] text-white/75">
          HAVE A RELEASE COMING UP?
        </p>
        <h2 className="mt-5 text-4xl font-black tracking-[-0.05em] md:text-7xl">
          LET’S BUILD A CAMPAIGN<br />THAT GETS YOUR MUSIC<br />HEARD.
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/75">
          Tell us about your next release and let’s plan a campaign for the audiences
          you want to reach.
        </p>

        <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
          <a
            href="tel:+917566920256"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-4 text-sm font-bold text-black transition hover:bg-black hover:text-white"
          >
            CONTACT US
            <ArrowUpRight size={18} />
          </a>
          <a
            href="#home"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-white/30 px-7 py-4 text-sm font-bold text-white transition hover:bg-white/10"
          >
            BACK TO TOP
            <ArrowUpRight size={18} />
          </a>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black">
      <div className="mx-auto max-w-7xl px-6 py-10 lg:px-8">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-center">
          <div className="flex items-center gap-3">
            <img
              src={logoImage}
              alt="RKG Digital logo"
              className="h-9 w-9 rounded-lg object-cover ring-1 ring-white/10"
            />
            <div>
              <p className="text-lg font-black tracking-tight">
                RKG <span className="text-red-500">DIGITAL</span>
              </p>
              <p className="text-[9px] uppercase tracking-[0.28em] text-white/35">
                Music • Entertainment • Digital Marketing
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-4 text-sm text-white/50">
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-2 transition hover:border-red-500/40 hover:text-red-400"
            >
              <Instagram size={16} />
              Instagram
            </a>
            <a
              href={YOUTUBE_CHANNEL_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-2 transition hover:border-red-500/40 hover:text-red-400"
            >
              <Youtube size={16} />
              YouTube
            </a>
            <a href="mailto:hello@rkgdigital.com" className="hover:text-red-400">Email</a>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-5 border-t border-white/10 pt-6 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-4">
            <img
              src={founderImage}
              alt="Mayank Gupta"
              className="h-14 w-14 rounded-full border border-white/10 object-cover"
            />
            <div>
              <p className="text-sm font-bold text-white">Mayank Gupta</p>
              <p className="text-[10px] uppercase tracking-[0.22em] text-white/35">Founder</p>
            </div>
          </div>

          <div className="text-xs text-white/35">
            <p>Gwalior, Madhya Pradesh</p>
            © {new Date().getFullYear()} RKG Digital. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-black text-white">
      <div className="sr-only">
        <h1>RKG Digital - Music, Entertainment and Digital Marketing</h1>
        <p>
          RKG Digital helps artists, labels, and entertainment brands with music promotion,
          YouTube advertising, influencer marketing, and digital campaigns.
        </p>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />

      <Navbar />
      <FounderSpotlight />
      <Hero />
      <MusicSection />
      <Stats />
      <Services />
      <WorkProcess />
      <Showcase />
      <Clients />
      <CTA />
      <Footer />
    </main>
  );
}
