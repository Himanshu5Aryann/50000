import { Link } from "react-router-dom";
import SEO from "../components/SEO";
import Reveal from "../components/Reveal";
import { img } from "../data/media";
import { waLink, waMessages } from "../data/business";

const reasons = [
  {
    n: "01",
    title: "SMART STORAGE",
    desc: "Maximize every inch with intelligently planned cabinets, drawers and organizers.",
  },
  {
    n: "02",
    title: "PREMIUM MATERIALS",
    desc: "Quality finishes and durable materials selected for long-term everyday use.",
  },
  {
    n: "03",
    title: "FUNCTIONAL DESIGN",
    desc: "Layouts designed around your cooking habits, movement and available space.",
  },
  {
    n: "04",
    title: "CUSTOMIZED TO YOU",
    desc: "Every kitchen is planned according to your space, lifestyle and aesthetic preferences.",
  },
];

const kitchenStyles = [
  { title: "L-SHAPED KITCHENS", image: img.kitchen1 },
  { title: "U-SHAPED KITCHENS", image: img.kitchen2 },
  { title: "ISLAND KITCHENS", image: img.kitchen3 },
  { title: "STRAIGHT-LINE KITCHENS", image: img.kitchen4 },
  { title: "HANDLELESS KITCHENS", image: img.kitchen1 },
  { title: "CONTEMPORARY LUXURY KITCHENS", image: img.kitchen2 },
];

const process = [
  { n: "01", title: "CONSULTATION", desc: "Understand your space, requirements and lifestyle." },
  { n: "02", title: "DESIGN", desc: "Create the layout, finishes, storage and visual concept." },
  { n: "03", title: "CUSTOMIZATION", desc: "Finalize materials, hardware, colors and details." },
  { n: "04", title: "INSTALLATION", desc: "Professional manufacturing and installation of your finished kitchen." },
];

const showcase = [
  img.kitchen1,
  img.kitchen2,
  img.kitchen3,
  img.kitchen4,
  img.kitchen1,
  img.kitchen2,
];

export default function ModularKitchens() {
  return (
    <>
      <SEO
        title="Modular Kitchens in Delhi | Kohinoor Furniture House"
        description="Modern modular kitchens in Delhi — premium layouts, storage, finishes and installation for contemporary homes."
      />

      <section className="relative flex h-[72vh] min-h-[520px] items-end overflow-hidden bg-charcoal text-ivory">
        <img
          src="/modular-kitchen-hero.jpg"
          alt="Modern blue modular kitchen with contemporary cabinets and appliances"
          className="absolute inset-0 h-full w-full object-cover"
          style={{ objectPosition: "center center" }}
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal/70 via-charcoal/40 to-charcoal/20" />
        <div className="container-xl relative z-10 pb-16 pt-32">
          <p className="label text-champagne">MODULAR KITCHENS</p>
          <h1 className="mt-6 max-w-3xl font-serif text-5xl leading-[1.08] md:text-6xl">
            Modern modular kitchens, designed for the way you live.
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-ivory/80 md:text-lg">
            Thoughtfully designed modular kitchens combining intelligent storage, premium finishes,
            functional layouts and contemporary aesthetics.
          </p>
          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <a href={waLink(waMessages.consultation)} target="_blank" rel="noreferrer" className="btn-primary inline-flex w-fit">
              Book a Consultation
            </a>
            <a href="#showcase" className="btn-outline inline-flex w-fit">
              View Our Kitchens
            </a>
          </div>
        </div>
      </section>

      <section className="bg-ivory py-24 md:py-32">
        <div className="container-xl">
          <Reveal>
            <p className="label">WHY CHOOSE US</p>
            <h2 className="mt-6 max-w-3xl font-serif text-4xl leading-[1.1] text-forest md:text-5xl">
              More than storage — a kitchen that works beautifully every day.
            </h2>
          </Reveal>

          <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
            {reasons.map((item, index) => (
              <Reveal key={item.title} delay={index * 0.06}>
                <div className="h-full border border-gold/35 bg-white/60 p-7 shadow-[0_16px_28px_rgba(11,47,38,0.04)] transition-transform duration-300 hover:-translate-y-1 hover:border-gold/70">
                  <span className="inline-flex h-11 w-11 items-center justify-center border border-gold/50 bg-ivory font-serif text-lg text-gold">
                    {item.n}
                  </span>
                  <h3 className="mt-6 font-serif text-2xl text-forest">{item.title}</h3>
                  <p className="mt-3 text-base leading-relaxed text-charcoal/70">{item.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-emerald py-24 text-ivory md:py-32">
        <div className="container-xl">
          <Reveal>
            <p className="label">KITCHEN STYLES</p>
            <h2 className="mt-6 max-w-3xl font-serif text-4xl leading-[1.1] md:text-5xl">
              Kitchens designed around your layout and lifestyle.
            </h2>
          </Reveal>

          <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
            {kitchenStyles.map((style, index) => (
              <Reveal key={style.title} delay={index * 0.06}>
                <div className="group overflow-hidden border border-ivory/15 bg-emerald shadow-[0_16px_28px_rgba(0,0,0,0.08)]">
                  <div className="relative h-[300px] overflow-hidden">
                    <img
                      src={style.image}
                      alt={style.title}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/10 to-transparent" />
                  </div>
                  <div className="p-6">
                    <span className="text-[10px] font-medium uppercase tracking-[0.18em] text-champagne">
                      0{index + 1}
                    </span>
                    <h3 className="mt-3 font-serif text-2xl text-ivory">{style.title}</h3>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ivory py-24 md:py-32">
        <div className="container-xl">
          <Reveal>
            <p className="label">OUR PROCESS</p>
            <h2 className="mt-6 max-w-3xl font-serif text-4xl leading-[1.1] text-forest md:text-5xl">
              A streamlined process from planning to installation.
            </h2>
          </Reveal>

          <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-4">
            {process.map((step, index) => (
              <Reveal key={step.n} delay={index * 0.07}>
                <div className="h-full border border-gold/35 bg-white p-7">
                  <div className="flex items-center justify-between border-b border-gold/25 pb-4">
                    <span className="font-serif text-3xl text-gold">{step.n}</span>
                    <span className="text-[10px] uppercase tracking-[0.2em] text-forest/60">Step</span>
                  </div>
                  <h3 className="mt-5 font-serif text-2xl text-forest">{step.title}</h3>
                  <p className="mt-3 text-base leading-relaxed text-charcoal/70">{step.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="showcase" className="container-xl py-24 md:py-32">
        <Reveal>
          <p className="label">PREMIUM KITCHEN SHOWCASE</p>
          <h2 className="mt-6 max-w-3xl font-serif text-4xl leading-[1.1] text-forest md:text-5xl">
            Contemporary kitchens designed for everyday ease and lasting style.
          </h2>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
          {showcase.map((image, index) => (
            <Reveal key={`${image}-${index}`} delay={index * 0.04}>
              <div className="group relative aspect-[4/5] overflow-hidden">
                <img
                  src={image}
                  alt="Modular kitchen design showcase"
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
              Your dream kitchen starts with a better design.
            </h2>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-ivory/75">
              Let's create a modular kitchen that is beautiful, functional and built around the way you live.
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
