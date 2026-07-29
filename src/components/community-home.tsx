"use client";

import Image from "next/image";
import {
  ArrowRight,
  CalendarDays,
  Check,
  ChevronRight,
  Clock3,
  CloudRain,
  Compass,
  MapPinned,
  Menu,
  ShieldCheck,
  TrainFront,
  Users,
  X,
} from "lucide-react";
import { useEffect, useState } from "react";

const quickLinks = [
  { label: "Plan", icon: CalendarDays, target: "essentials" },
  { label: "Transport", icon: TrainFront, target: "resources" },
  { label: "Where to stay", icon: MapPinned, target: "resources" },
  { label: "Meetups", icon: Users, target: "community" },
  { label: "Safety", icon: ShieldCheck, target: "rules" },
];

const essentials = [
  {
    number: "03",
    title: "Sunday-night flight? Add a bigger buffer",
    image: "/images/kl-transit.png",
    position: "center",
  },
  {
    number: "04",
    title: "Heat, rain and what to pack",
    image: "/images/sepang-hero.png",
    position: "left",
  },
  {
    number: "05",
    title: "Meet people without oversharing",
    image: "/images/community-meetup.png",
    position: "right",
  },
  {
    number: "06",
    title: "Confirmed, reported or historical?",
    image: "/images/community-meetup.png",
    position: "left",
  },
];

const resources = [
  {
    title: "Before you go",
    text: "Dates, checklists and the key deadlines to plan ahead.",
    icon: CalendarDays,
  },
  {
    title: "Getting there",
    text: "Flights, trains, buses and road options compared.",
    icon: TrainFront,
  },
  {
    title: "Where to stay",
    text: "KL, KLIA, Putrajaya and Sepang trade-offs.",
    icon: MapPinned,
  },
  {
    title: "Around the circuit",
    text: "Transport options, walking routes and public meetups.",
    icon: Compass,
  },
  {
    title: "Weather watch",
    text: "Heat, rain and what to pack for comfort.",
    icon: CloudRain,
  },
  {
    title: "Safety first",
    text: "Stay aware, protect your details and look out for each other.",
    icon: ShieldCheck,
  },
];

const rules = [
  "Share practical tips and first-hand experiences.",
  "Be respectful. No harassment, hate speech or doxxing.",
  "No ticket scalping, counterfeit goods or unsafe offers.",
  "Keep booking references and private travel details private.",
];

function scrollToSection(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

export function CommunityHome() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [rulesOpen, setRulesOpen] = useState(false);
  const [consent, setConsent] = useState(false);
  const inviteUrl = process.env.NEXT_PUBLIC_WHATSAPP_INVITE_URL;

  useEffect(() => {
    document.body.style.overflow = rulesOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [rulesOpen]);

  const join = () => {
    if (consent && inviteUrl) {
      window.open(inviteUrl, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <main className="site-shell">
      <a className="skip-link" href="#content">
        Skip to content
      </a>

      <div className="utility-bar">
        <span><Users aria-hidden="true" /> Independent community</span>
        <span><MapPinned aria-hidden="true" /> Malaysia • 2026</span>
        <span><ShieldCheck aria-hidden="true" /> Unofficial • Fan-run</span>
      </div>

      <header className="primary-header">
        <button className="wordmark" onClick={() => scrollToSection("content")} aria-label="Back to top">
          <span>SEPANG</span>
          <span>WEEKEND</span>
          <i aria-hidden="true" />
        </button>
        <nav className="desktop-nav" aria-label="Primary navigation">
          {quickLinks.map((item) => (
            <button key={item.label} onClick={() => scrollToSection(item.target)}>
              {item.label}
            </button>
          ))}
        </nav>
        <button
          className="menu-button"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X /> : <Menu />}
        </button>
      </header>

      {menuOpen && (
        <nav className="mobile-nav" aria-label="Mobile navigation">
          {quickLinks.map((item) => (
            <button
              key={item.label}
              onClick={() => {
                scrollToSection(item.target);
                setMenuOpen(false);
              }}
            >
              {item.label}
              <ChevronRight aria-hidden="true" />
            </button>
          ))}
        </nav>
      )}

      <section className="status-strip" aria-label="Community status">
        <span className="status-accent"><MapPinned /> SEPANG • 2026</span>
        <span><i className="live-dot" /> Planning room open</span>
        <span><Clock3 /> MYT</span>
        <span><Users /> Community-led</span>
      </section>

      <section className="hero-grid" id="content">
        <article className="hero-feature">
          <Image
            src="/images/sepang-hero.png"
            alt="Travellers walking toward a tropical motorsport grandstand"
            fill
            unoptimized
            priority
            sizes="(max-width: 900px) 100vw, 68vw"
          />
          <div className="hero-shade" />
          <div className="hero-copy">
            <h1>Plan Sepang race weekend with people who are actually going.</h1>
            <p>
              Transport, stays, packing and public meetups — shared by travellers
              and local fans.
            </p>
            <div className="hero-actions">
              <button className="button button-primary" onClick={() => scrollToSection("community")}>
                Join the community <ArrowRight />
              </button>
              <button className="button button-secondary" onClick={() => scrollToSection("essentials")}>
                See how it works <ArrowRight />
              </button>
            </div>
          </div>
        </article>

        <div className="hero-side">
          <article className="side-story">
            <Image src="/images/kl-transit.png" alt="" fill unoptimized sizes="(max-width: 900px) 100vw, 32vw" />
            <div className="story-shade" />
            <h2>KL or KLIA: choose the journey you want</h2>
            <ChevronRight aria-hidden="true" />
          </article>
          <article className="side-story">
            <Image src="/images/sepang-hero.png" alt="" fill unoptimized sizes="(max-width: 900px) 100vw, 32vw" />
            <div className="story-shade" />
            <h2>Build a safer circuit transport plan</h2>
            <ChevronRight aria-hidden="true" />
          </article>
        </div>
      </section>

      <nav className="quick-nav" aria-label="Quick navigation">
        <strong>QUICK NAVIGATION <i /></strong>
        <div>
          {quickLinks.map((item) => {
            const Icon = item.icon;
            return (
              <button key={item.label} onClick={() => scrollToSection(item.target)}>
                <Icon aria-hidden="true" /> {item.label}
              </button>
            );
          })}
        </div>
      </nav>

      <section className="essentials-section" id="essentials">
        <div className="section-heading">
          <h2>WEEKEND ESSENTIALS <i /></h2>
          <p>From the community</p>
        </div>
        <div className="essential-rail">
          {essentials.map((item) => (
            <article className="essential-card" key={item.number}>
              <Image
                src={item.image}
                alt=""
                fill
                unoptimized
                loading="eager"
                sizes="(max-width: 700px) 78vw, 25vw"
                style={{ objectPosition: item.position }}
              />
              <div className="story-shade" />
              <span>{item.number}</span>
              <h3>{item.title}</h3>
              <ChevronRight aria-hidden="true" />
            </article>
          ))}
        </div>
      </section>

      <section className="resources-section" id="resources">
        <div className="section-heading section-heading-dark">
          <h2>PLAN THE WEEKEND <i /></h2>
          <p>Practical resources shared by travellers and local fans.</p>
        </div>
        <div className="resource-rail">
          {resources.map((item) => {
            const Icon = item.icon;
            return (
              <article key={item.title}>
                <Icon aria-hidden="true" />
                <h3>{item.title}</h3>
                <p>{item.text}</p>
                <ChevronRight aria-hidden="true" className="resource-arrow" />
              </article>
            );
          })}
        </div>
      </section>

      <section className="community-section" id="community">
        <Image
          src="/images/community-meetup.png"
          alt="Travellers sharing plans during a public meetup"
          fill
          unoptimized
          loading="eager"
          sizes="100vw"
        />
        <div className="community-overlay" />
        <div className="community-copy">
          <h2>One useful answer can save hours of scattered searching.</h2>
          <button className="button button-light" onClick={() => setRulesOpen(true)}>
            Read the rules &amp; join <ArrowRight />
          </button>
        </div>
      </section>

      <section className="rules-section" id="rules">
        <ShieldCheck className="rules-icon" aria-hidden="true" />
        <div>
          <h2>We keep it helpful, respectful and safe for everyone.</h2>
          <ul>
            {rules.map((rule) => (
              <li key={rule}><Check aria-hidden="true" /> {rule}</li>
            ))}
          </ul>
          <label className="consent-row">
            <input
              type="checkbox"
              checked={consent}
              onChange={(event) => setConsent(event.target.checked)}
            />
            <span>
              I understand the community rules and privacy notice. WhatsApp may show
              my profile name and phone number to participants.
            </span>
          </label>
          <button
            className="button button-primary join-button"
            disabled={!consent || !inviteUrl}
            onClick={join}
          >
            {inviteUrl ? "Open WhatsApp community" : "Invite link coming soon"}
            <ArrowRight />
          </button>
          {!inviteUrl && (
            <p className="invite-note">
              The founding WhatsApp group is not live yet. No signup is being counted as a member.
            </p>
          )}
        </div>
        <aside>
          <h3>Independent and unofficial.</h3>
          <p>
            Not affiliated with Formula 1, FIA, Sepang International Circuit, any
            team or event organiser.
          </p>
          <p>
            We do not sell member phone numbers, email addresses, message content
            or personal travel details.
          </p>
        </aside>
      </section>

      <footer>
        <div className="footer-brand">
          <div className="wordmark footer-wordmark">
            <span>SEPANG</span><span>WEEKEND</span><i />
          </div>
          <p>Independent community for travellers and local fans planning Sepang race weekend in 2026.</p>
        </div>
        <div>
          <h3>PLAN</h3>
          <a href="#essentials">Before you go</a>
          <a href="#resources">Getting there</a>
          <a href="#resources">Where to stay</a>
        </div>
        <div>
          <h3>COMMUNITY</h3>
          <a href="#community">Public meetups</a>
          <button onClick={() => setRulesOpen(true)}>Community rules</button>
          <a href="#rules">Privacy</a>
        </div>
        <div>
          <h3>SAFETY</h3>
          <a href="#rules">Staying aware</a>
          <a href="#rules">Protecting details</a>
          <a href="#rules">Report a concern</a>
        </div>
        <p className="copyright">© 2026 Sepang Weekend. Independent and unofficial.</p>
      </footer>

      {rulesOpen && (
        <div className="modal-backdrop" role="presentation" onMouseDown={() => setRulesOpen(false)}>
          <section
            className="rules-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="rules-title"
            onMouseDown={(event) => event.stopPropagation()}
          >
            <button className="modal-close" onClick={() => setRulesOpen(false)} aria-label="Close rules">
              <X />
            </button>
            <h2 id="rules-title">Community rules &amp; privacy</h2>
            <p>
              This is a practical planning group, not a ticket marketplace or an official information channel.
            </p>
            <ol>
              <li>Be helpful and respectful. No harassment or personal attacks.</li>
              <li>No ticket scalping, counterfeit goods, illegal transport or unsafe advice.</li>
              <li>Paid offers require admin approval and must be clearly labelled.</li>
              <li>Never post passports, booking references, addresses or room numbers.</li>
              <li>Use licensed providers and verify terms before paying.</li>
              <li>Meet only in public places and never pressure anyone to share private details.</li>
              <li>Label information as confirmed, reported or historical.</li>
            </ol>
            <button
              className="button button-primary"
              onClick={() => {
                setRulesOpen(false);
                scrollToSection("rules");
              }}
            >
              Continue to consent <ArrowRight />
            </button>
          </section>
        </div>
      )}
    </main>
  );
}
