import Link from "next/link";

export const metadata = {
  title: "About | Movemental",
  description: "Why Movemental exists — a response to the noise of the digital age.",
};

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="max-w-screen-2xl mx-auto px-6 md:px-12 mb-40 pt-12">
        <div className="grid grid-cols-12 gap-8 items-end">
          <div className="col-span-12 md:col-span-7">
            <h1 className="font-headline text-7xl md:text-9xl leading-[0.9] text-on-surface mb-8">
              Why <span className="italic text-primary">Movemental</span> exists
            </h1>
          </div>
          <div className="col-span-12 md:col-span-4 md:col-start-9">
            <p className="text-xl text-on-surface/80 font-body leading-relaxed border-l-2 border-primary-container pl-6 py-2">
              A response to the noise of the digital age. We curate intelligence
              into systems that move organizations forward.
            </p>
          </div>
        </div>
        <div className="mt-20 w-full h-[400px] md:h-[614px] bg-surface-container overflow-hidden" />
      </section>

      {/* Origin */}
      <section className="bg-surface-container-low py-32">
        <div className="max-w-screen-2xl mx-auto px-6 md:px-12 grid grid-cols-12 gap-8">
          <div className="col-span-12 md:col-span-5">
            <span className="font-label uppercase tracking-widest text-xs text-primary mb-4 block">
              01 / Origin
            </span>
            <h2 className="font-headline text-5xl mb-12">The Hirsch Translation</h2>
          </div>
          <div className="col-span-12 md:col-span-6 md:col-start-7">
            <div className="space-y-8 font-body text-lg leading-relaxed text-on-surface-variant">
              <p>
                Movemental began with Alan Hirsch, a visionary in organizational
                dynamics and social movements. After decades of pioneering
                research into how high-impact movements function, the challenge
                became translation.
              </p>
              <p>
                We didn&apos;t just want to write more books; we wanted to build a
                new category of structured, interactive systems. We turned static
                philosophy into dynamic architectural frameworks that groups can
                actually inhabit.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Expansion */}
      <section className="py-32 bg-surface">
        <div className="max-w-screen-2xl mx-auto px-6 md:px-12">
          <div className="mb-20">
            <span className="font-label uppercase tracking-widest text-xs text-primary mb-4 block">
              02 / Expansion
            </span>
            <h2 className="font-headline text-5xl">Universal Architecture</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="md:col-span-2 aspect-video bg-on-surface text-surface p-12 flex flex-col justify-end">
              <h3 className="font-headline text-3xl mb-4">Individuals</h3>
              <p className="opacity-70">
                Structuring personal growth and high-agency leadership through
                curated digital environments.
              </p>
            </div>
            <div className="bg-surface-container-highest p-12 flex flex-col justify-between min-h-[240px]">
              <div className="text-primary text-4xl">&#9678;</div>
              <div>
                <h3 className="font-headline text-2xl mb-2">Organizations</h3>
                <p className="text-sm opacity-80">
                  Scaling cultural DNA through systematic visual intelligence.
                </p>
              </div>
            </div>
            <div className="bg-primary-container text-on-primary-container p-12 flex flex-col justify-between min-h-[240px]">
              <div className="text-3xl">&#9763;</div>
              <div>
                <h3 className="font-headline text-2xl mb-2">Churches</h3>
                <p className="text-sm opacity-80">
                  Restoring apostolic movement patterns in faith-based
                  communities.
                </p>
              </div>
            </div>
            <div className="md:col-span-4 bg-surface-container-low p-12 flex items-center gap-12">
              <div className="flex-1">
                <h3 className="font-headline text-3xl mb-4">
                  Large-Scale Institutions
                </h3>
                <p className="text-on-surface-variant">
                  Complex systems require elegant simplification. Our
                  institutional platform provides the scaffolding for
                  multi-national structural evolution.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Approach */}
      <section className="py-32 bg-on-surface text-surface">
        <div className="max-w-screen-2xl mx-auto px-6 md:px-12 grid grid-cols-12 items-center gap-16">
          <div className="col-span-12 md:col-span-6 order-2 md:order-1">
            <div className="w-full aspect-[4/3] bg-surface-container-highest/10" />
          </div>
          <div className="col-span-12 md:col-span-6 order-1 md:order-2">
            <span className="font-label uppercase tracking-widest text-xs text-primary-fixed mb-4 block">
              03 / Our Approach
            </span>
            <h2 className="font-headline text-6xl mb-8">Grounding in the Real</h2>
            <p className="font-body text-xl opacity-80 leading-relaxed mb-8">
              We are not selling SaaS tools or generic consulting packages.
              Movemental is a workshop for system builders.
            </p>
            <div className="space-y-6">
              {[
                "Everything is grounded in real, boots-on-the-ground work.",
                "We reject \"empty curation\" in favor of intentional architectural depth.",
                "Success is measured by the movement of the organization, not the elegance of the interface.",
              ].map((text) => (
                <div key={text} className="flex gap-4 items-start">
                  <div className="w-2 h-2 mt-2 bg-primary shrink-0" />
                  <p>{text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-40 bg-surface">
        <div className="max-w-screen-2xl mx-auto px-6 md:px-12">
          <div className="flex justify-between items-end mb-24">
            <div>
              <span className="font-label uppercase tracking-widest text-xs text-primary mb-4 block">
                04 / The Team
              </span>
              <h2 className="font-headline text-5xl">The Architects</h2>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            {[
              { name: "Alan Hirsch", role: "Founder & Chief Visionary", desc: "Decades of work in movement dynamics translated into the core philosophy of Movemental.", offset: "" },
              { name: "Brad", role: "Operations & Strategy", desc: "Bridging the gap between high-level vision and operational execution across global institutions.", offset: "md:mt-20" },
              { name: "You", role: "Product & Experience", desc: "Crafting the digital canvas where theory meets practice in an immersive user experience.", offset: "md:mt-40" },
            ].map((person) => (
              <div key={person.name} className={`group ${person.offset}`}>
                <div className="aspect-[3/4] bg-surface-container mb-8 overflow-hidden" />
                <h3 className="font-headline text-3xl mb-2">{person.name}</h3>
                <p className="font-label uppercase tracking-widest text-[10px] text-primary mb-6">
                  {person.role}
                </p>
                <p className="text-on-surface-variant text-sm">{person.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-screen-2xl mx-auto px-6 md:px-12 py-32 mb-12">
        <div className="bg-primary-container p-12 md:p-24 text-center">
          <h2 className="font-headline text-5xl md:text-7xl text-white mb-12 italic">
            Ready to build your system?
          </h2>
          <Link
            href="/#cta"
            className="inline-block bg-surface text-primary-container px-12 py-5 font-body text-lg font-bold hover:bg-surface-container-highest transition-colors"
          >
            Start a Conversation
          </Link>
        </div>
      </section>
    </>
  );
}
