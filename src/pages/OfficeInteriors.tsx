import { Link } from "react-router-dom";
import SEO from "../components/SEO";
import Reveal from "../components/Reveal";
import { img } from "../data/media";
import { waLink, waMessages } from "../data/business";

const officeZones = [
  {
    title: "Executive Offices",
    desc: "Private, polished workspaces that inspire confidence and focus for leadership teams.",
    image: img.office1,
  },
  {
    title: "Collaborative Workstations",
    desc: "Thoughtful layouts that support teamwork, flexibility and everyday productivity.",
    image: img.corporate1,
  },
  {
    title: "Conference Rooms",
    desc: "Meeting spaces with premium finishes, natural light and a strong professional presence.",
    image: img.office2,
  },
  {
    title: "Reception & Waiting Areas",
    desc: "A warm, refined welcome experience that reflects your brand from the moment you arrive.",
    image: img.office3,
  },
];

const officeBenefits = [
  { n: "01", title: "Ergonomic Workflows", desc: "Comfort-focused layouts designed for concentration and movement throughout the day." },
  { n: "02", title: "Professional Aesthetics", desc: "Tailored finishes, tonal palettes and bespoke details that feel premium and credible." },
  { n: "03", title: "Efficient Space Planning", desc: "Smart zoning for cabins, workstations, collaboration and storage without clutter." },
  { n: "04", title: "Brand-Ready Environment", desc: "A polished office atmosphere that supports client perception, team morale and productivity." },
];

export default function OfficeInteriors() {
  return (
    <>
      <SEO
        title="Office Interiors in Delhi | Kohinoor Furniture House"
        description="Modern office interiors designed for productive spaces, including executive offices, meeting rooms, workstations and premium corporate environments."
      />

      <section className="relative flex h-[72vh] min-h-[520px] items-end overflow-hidden bg-charcoal text-ivory">
        <img
          src={img.office2}
          alt="Modern office interior workspace"
          className="absolute inset-0 h-full w-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/55 to-charcoal/30" />
        <div className="container-xl relative z-10 pb-20 pt-32">
          <p className="label text-champagne">OFFICE INTERIORS</p>
          <h1 className="mt-6 max-w-4xl font-serif text-5xl leading-[1.08] md:text-6xl">
            Modern office interiors, designed for productive spaces.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-ivory/80">
            Thoughtfully designed workplaces that balance functionality, comfort and a refined professional aesthetic.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a href={waLink(waMessages.consultation)} target="_blank" rel="noreferrer" className="btn-primary">
              BOOK A CONSULTATION
            </a>
            <Link to="/contact" className="btn-outline-light">
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      <section className="container-xl py-24 md:py-28">
        <Reveal>
          <p className="label text-forest">WORKSPACE SOLUTIONS</p>
          <h2 className="mt-6 max-w-3xl font-serif text-4xl leading-[1.15] text-forest md:text-5xl">
            Functional office spaces that support how teams actually work.
          </h2>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-4">
          {officeZones.map((zone, index) => (
            <Reveal key={zone.title} delay={index * 0.08} className="group overflow-hidden bg-ivory shadow-[0_20px_38px_rgba(15,47,38,0.06)]">
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src={zone.image}
                  alt={zone.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="space-y-4 p-6">
                <h3 className="font-serif text-2xl text-forest">{zone.title}</h3>
                <p className="text-sm leading-relaxed text-charcoal/70">{zone.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="relative overflow-hidden bg-forest text-ivory">
        <div className="container-xl grid grid-cols-1 items-center gap-12 py-24 lg:grid-cols-2 lg:gap-20 md:py-28">
          <Reveal className="order-2 lg:order-1">
            <p className="label text-champagne">WHY IT MATTERS</p>
            <h2 className="mt-6 font-serif text-4xl leading-[1.15] md:text-5xl">
              A premium workplace elevates productivity, confidence and brand perception.
            </h2>
            <p className="mt-6 max-w-lg text-ivory/75">
              We design office interiors that balance practical requirements with a polished corporate identity — from executive cabins to collaborative workstations and meeting rooms.
            </p>
          </Reveal>

          <Reveal delay={0.1} className="order-1 aspect-[4/3] overflow-hidden lg:order-2">
            <img src={img.corporate2} alt="Corporate office interior" className="h-full w-full object-cover" loading="lazy" />
          </Reveal>
        </div>
      </section>

      <section className="container-xl py-24 md:py-28">
        <Reveal>
          <p className="label">DESIGN APPROACH</p>
          <h2 className="mt-6 max-w-2xl font-serif text-4xl leading-[1.15] text-forest md:text-5xl">
            Built around comfort, flow and efficiency.
          </h2>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-4">
          {officeBenefits.map((benefit, index) => (
            <Reveal key={benefit.n} delay={index * 0.06} className="border border-gold/30 bg-ivory p-7 shadow-[0_16px_30px_rgba(11,47,38,0.04)]">
              <div className="mb-5 inline-flex h-12 w-12 items-center justify-center border border-gold text-sm font-medium tracking-[0.16em] text-forest">
                {benefit.n}
              </div>
              <h3 className="font-serif text-2xl text-forest">{benefit.title}</h3>
              <p className="mt-4 text-sm leading-relaxed text-charcoal/70">{benefit.desc}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-ivory py-24">
        <div className="container-xl text-center">
          <Reveal>
            <p className="label text-forest">START YOUR PROJECT</p>
            <h2 className="mt-6 font-serif text-4xl text-forest md:text-5xl">
              Let’s create a workspace that performs as beautifully as it looks.
            </h2>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a href={waLink(waMessages.consultation)} target="_blank" rel="noreferrer" className="btn-primary">
                BOOK A CONSULTATION
              </a>
              <Link to="/contact" className="btn-outline-dark">
                Get in Touch
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
