import { Link } from "react-router-dom";
import SEO from "../components/SEO";
import Reveal from "../components/Reveal";
import { img } from "../data/media";
import { waLink, waMessages } from "../data/business";

const wardrobeSolutions = [
  {
    n: "01",
    title: "WALK-IN WARDROBES",
    desc: "Spacious dressing environments designed around your lifestyle and storage needs.",
    image: img.wardrobe1,
  },
  {
    n: "02",
    title: "BUILT-IN WARDROBES",
    desc: "Floor-to-ceiling storage designed to integrate seamlessly with your room.",
    image: img.wardrobe2,
  },
  {
    n: "03",
    title: "SLIDING DOOR WARDROBES",
    desc: "Clean, space-efficient designs with contemporary sliding systems.",
    image: img.wardrobe3,
  },
  {
    n: "04",
    title: "HINGED WARDROBES",
    desc: "Elegant custom cabinetry with practical organization and refined finishes.",
    image: img.wardrobe2,
  },
  {
    n: "05",
    title: "MODULAR WARDROBE SYSTEMS",
    desc: "Flexible storage configurations designed for modern homes.",
    image: img.wardrobe1,
  },
];

const wardrobeFeatures = [
  { title: "Intelligent Storage", image: img.wardrobe1 },
  { title: "Soft-Close Drawers", image: img.wardrobe2 },
  { title: "Adjustable Shelving", image: img.wardrobe3 },
  { title: "Hanging Sections", image: img.wardrobe1 },
  { title: "Shoe Storage", image: img.wardrobe2 },
  { title: "Integrated LED Lighting", image: img.wardrobe3 },
];

const showcase = [
  img.wardrobe1,
  img.wardrobe2,
  img.wardrobe3,
  img.bedroom1,
  img.wardrobe1,
  img.wardrobe2,
];

export default function CustomWardrobes() {
  return (
    <>
      <SEO
        title="Custom Wardrobes in Delhi | Kohinoor Furniture House"
        description="Premium custom wardrobes in Delhi — bespoke storage, sliding doors, built-ins and luxury dressing room solutions for modern homes."
      />

      <section className="relative flex h-[72vh] min-h-[520px] items-end overflow-hidden bg-charcoal text-ivory">
        <img
          src={img.wardrobe1}
          alt="Premium modern custom wardrobe with layered cabinets and integrated lighting"
          className="absolute inset-0 h-full w-full object-cover"
          style={{ objectPosition: "center center" }}
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal/75 via-charcoal/45 to-charcoal/20" />
        <div className="container-xl relative z-10 pb-16 pt-32">
          <p className="label text-champagne">CUSTOM WARDROBES</p>
          <h1 className="mt-6 max-w-3xl font-serif text-5xl leading-[1.08] md:text-6xl">
            Custom wardrobes, designed around your space.
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-ivory/80 md:text-lg">
            Bespoke wardrobe solutions combining intelligent storage, refined finishes and contemporary design,
            crafted specifically for your home.
          </p>
          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <a href={waLink(waMessages.consultation)} target="_blank" rel="noreferrer" className="btn-primary inline-flex w-fit">
              Book a Consultation
            </a>
            <a href="#showcase" className="btn-outline inline-flex w-fit">
              View Our Wardrobes
            </a>
          </div>
        </div>
      </section>

      <section className="bg-ivory py-24 md:py-32">
        <div className="container-xl">
          <Reveal>
            <p className="label">WARDROBE SOLUTIONS</p>
            <h2 className="mt-6 max-w-3xl font-serif text-4xl leading-[1.1] text-forest md:text-5xl">
              Storage that feels as refined as the room around it.
            </h2>
          </Reveal>

          <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
            {wardrobeSolutions.map((item, index) => (
              <Reveal key={item.title} delay={index * 0.05}>
                <div className="group overflow-hidden border border-gold/35 bg-white shadow-[0_16px_28px_rgba(11,47,38,0.04)] transition-transform duration-300 hover:-translate-y-1 hover:border-gold/70">
                  <div className="relative h-[280px] overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/10 to-transparent" />
                    <span className="absolute left-5 top-5 inline-flex h-10 w-10 items-center justify-center border border-ivory/80 bg-[rgba(15,20,18,0.3)] text-[10px] font-medium tracking-[0.18em] text-ivory backdrop-blur-[2px]">
                      {item.n}
                    </span>
                  </div>
                  <div className="p-6">
                    <h3 className="font-serif text-2xl text-forest">{item.title}</h3>
                    <p className="mt-3 text-base leading-relaxed text-charcoal/70">{item.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-emerald py-24 text-ivory md:py-32">
        <div className="container-xl">
          <Reveal>
            <p className="label">WARDROBE FEATURES</p>
            <h2 className="mt-6 max-w-3xl font-serif text-4xl leading-[1.1] md:text-5xl">
              Thoughtful details that make everyday storage easier.
            </h2>
          </Reveal>

          <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
            {wardrobeFeatures.map((feature, index) => (
              <Reveal key={feature.title} delay={index * 0.05}>
                <div className="group overflow-hidden border border-ivory/15 bg-white/5 shadow-[0_16px_28px_rgba(0,0,0,0.08)]">
                  <div className="relative h-[260px] overflow-hidden">
                    <img
                      src={feature.image}
                      alt={feature.title}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-charcoal/75 via-charcoal/10 to-transparent" />
                  </div>
                  <div className="p-5">
                    <h3 className="font-serif text-2xl text-ivory">{feature.title}</h3>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="showcase" className="container-xl py-24 md:py-32">
        <Reveal>
          <p className="label">WARDROBE SHOWCASE</p>
          <h2 className="mt-6 max-w-3xl font-serif text-4xl leading-[1.1] text-forest md:text-5xl">
            A wardrobe collection built around your home.
          </h2>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
          {showcase.map((image, index) => (
            <Reveal key={`${image}-${index}`} delay={index * 0.04}>
              <div className="group relative aspect-[4/5] overflow-hidden border border-gold/30 bg-ivory">
                <img
                  src={image}
                  alt="Custom wardrobe design showcase"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-forest py-24 text-ivory md:py-32">
        <div className="container-xl">
          <Reveal>
            <h2 className="max-w-3xl font-serif text-4xl leading-[1.1] md:text-5xl">
              Create a wardrobe that fits your space perfectly.
            </h2>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-ivory/75">
              From compact built-ins to complete walk-in dressing rooms, we create storage designed around your space and lifestyle.
            </p>
            <a href={waLink(waMessages.consultation)} target="_blank" rel="noreferrer" className="btn-gold-outline mt-10 inline-flex">
              Book a Consultation
            </a>
          </Reveal>
        </div>
      </section>
    </>
  );
}
