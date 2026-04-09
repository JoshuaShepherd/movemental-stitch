import Link from "next/link";

export const metadata = {
  title: "Movement Leaders | Movemental",
  description: "Turn a lifetime's body of work into a coordinated, integrated digital system.",
};

export default function MovementLeadersPage() {
  return (
    <>
      {/* Hero */}
      <section className="min-h-[80vh] flex flex-col justify-center px-6 md:px-12 lg:px-24 bg-surface">
        <div className="max-w-5xl">
          <h1 className="text-6xl md:text-8xl font-headline font-bold leading-[1.1] tracking-tight text-on-surface mb-8 italic">
            What you&apos;ve built can now become something it{" "}
            <span className="text-primary-container">couldn&apos;t before.</span>
          </h1>
          <p className="text-xl md:text-2xl font-body text-on-surface-variant max-w-3xl leading-relaxed">
            Transformation is not additive; it is architectural. We specialize in
            turning a lifetime&apos;s body of work into a coordinated, integrated
            digital system that thinks, preserves, and expands your legacy.
          </p>
        </div>
        <div className="mt-16 flex justify-end">
          <div className="w-full md:w-2/3 h-96 bg-surface-container relative overflow-hidden">
            <div className="absolute inset-0 bg-primary-container/10 mix-blend-multiply" />
          </div>
        </div>
      </section>

      {/* The Hook */}
      <section className="py-32 px-6 md:px-12 lg:px-24 bg-surface-container-low">
        <div className="grid md:grid-cols-2 gap-24 items-start">
          <div>
            <h2 className="text-4xl md:text-5xl font-headline font-semibold mb-8 italic">
              This probably wasn&apos;t something you were looking for.
            </h2>
            <p className="text-lg font-body text-on-surface-variant leading-loose">
              True intellectual breakthroughs rarely arrive via a search query.
              They arrive when the volume of your work reaches a critical mass
              that requires a new vessel. Most systems ask you to fit into their
              boxes; we build the box around the unique geometry of your thought.
            </p>
          </div>
          <div className="pt-12 md:pt-48">
            <div className="p-12 bg-surface text-on-surface shadow-lg border-l-4 border-primary-container">
              <span className="block mb-6 font-label uppercase tracking-widest text-xs opacity-60">
                The Curator&apos;s Note
              </span>
              <p className="text-2xl font-headline italic leading-snug">
                &ldquo;The transition from content creator to movement leader requires
                a shift from publishing to platform architecture.&rdquo;
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Corpus */}
      <section className="py-32 px-6 md:px-12 lg:px-24 bg-surface">
        <div className="max-w-4xl">
          <h2 className="text-5xl font-headline mb-16 italic">
            A system built from your entire body of work.
          </h2>
          <div className="grid md:grid-cols-3 gap-16">
            {[
              { num: "01", title: "Corpus Analysis", desc: "We don't just read your books. We map the semantic DNA of every lecture, transcript, and manuscript to find the invisible threads." },
              { num: "02", title: "Extraction", desc: "The distillation of core principles into actionable intelligence. We move from 'static text' to 'dynamic logic'." },
              { num: "03", title: "Preservation", desc: "Ensuring your intellectual legacy isn't just stored, but remains functional and accessible for the next generation of leaders." },
            ].map((step, i) => (
              <div key={step.num} className={i > 0 ? `md:mt-${i * 12}` : ""}>
                <h3 className="text-xl font-headline font-bold mb-4 uppercase tracking-tighter">
                  {step.num}. {step.title}
                </h3>
                <p className="text-sm font-body text-on-surface-variant leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Outcomes */}
      <section className="py-32 px-6 md:px-12 lg:px-24 bg-on-surface text-surface">
        <h2 className="text-4xl md:text-5xl font-headline mb-16 italic">
          What you end up with.
        </h2>
        <div className="space-y-16 max-w-4xl">
          {[
            "A proprietary AI model trained exclusively on your life's work.",
            "A unified dashboard for movement-wide coordination and tracking.",
            "An immutable digital archive of your intellectual capital.",
          ].map((outcome, i) => (
            <div key={i} className="flex items-start gap-8">
              <span className="text-2xl font-headline text-primary-container">
                /0{i + 1}
              </span>
              <p className="text-2xl md:text-3xl font-headline opacity-90">
                {outcome}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* The Model */}
      <section className="py-32 px-6 md:px-12 lg:px-24 bg-surface">
        <div className="flex flex-col md:flex-row justify-between items-end gap-12">
          <div className="max-w-xl">
            <h2 className="text-5xl font-headline mb-8 italic">The Model</h2>
            <p className="text-lg text-on-surface-variant">
              We align our success with yours. This isn&apos;t a subscription;
              it&apos;s a partnership in movement building.
            </p>
          </div>
          <div className="bg-surface-container-high p-12 flex flex-col gap-4">
            <div className="flex justify-between items-baseline gap-20">
              <span className="font-label uppercase text-xs tracking-widest">
                Entry
              </span>
              <span className="text-4xl font-headline italic">$1,000 upfront</span>
            </div>
            <div className="h-px bg-outline-variant/20" />
            <div className="flex justify-between items-baseline gap-20">
              <span className="font-label uppercase text-xs tracking-widest">
                Alignment
              </span>
              <span className="text-4xl font-headline italic">10% Rev Share</span>
            </div>
          </div>
        </div>
      </section>

      {/* Why this exists */}
      <section className="py-32 px-6 md:px-12 lg:px-24 bg-surface-container-lowest">
        <div className="grid md:grid-cols-2 gap-24">
          <div className="h-[400px] md:h-[600px] bg-surface-container" />
          <div className="flex flex-col justify-center">
            <h2 className="text-4xl md:text-5xl font-headline mb-8 italic">
              Why this exists.
            </h2>
            <div className="space-y-6 text-on-surface-variant font-body text-lg leading-relaxed">
              <p>
                The digital age has prioritized speed over depth, and noise over
                wisdom. Great leaders are spending 40% of their time managing
                tools instead of stewarding their vision.
              </p>
              <p>
                We exist to reclaim that time. We exist because the world needs
                your body of work to be more than just a list of
                downloads—it needs it to be a living, breathing system.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Limitation */}
      <section className="py-32 px-6 md:px-12 lg:px-24 bg-primary text-white text-center">
        <div className="max-w-3xl mx-auto">
          <span className="inline-block px-4 py-1 border border-white/30 text-xs font-label uppercase tracking-widest mb-8">
            Notice of Availability
          </span>
          <h2 className="text-4xl md:text-6xl font-headline mb-12 italic">
            Limited to a small group of stewards.
          </h2>
          <p className="text-xl opacity-80 mb-12">
            To maintain the architectural integrity of each system we build, we
            only accept 12 leaders per cohort. This is not for everyone. It is
            for those whose work is ready to evolve.
          </p>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-48 px-6 md:px-12 lg:px-24 bg-surface flex flex-col items-center text-center">
        <h2 className="text-5xl md:text-7xl font-headline italic mb-16 leading-tight max-w-5xl">
          If this is real... it changes what your work can become.
        </h2>
        <Link
          href="/#cta"
          className="bg-on-surface text-surface px-12 py-5 text-lg font-bold tracking-widest uppercase hover:bg-primary-container transition-colors duration-500"
        >
          Apply for the Next Cohort
        </Link>
      </section>
    </>
  );
}
