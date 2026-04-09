import Link from "next/link";

export const metadata = {
  title: "How It Works | Movemental",
  description: "From scattered work to structured system — the Movemental methodology.",
};

export default function HowItWorksPage() {
  return (
    <>
      {/* Hero */}
      <header className="max-w-screen-2xl mx-auto px-6 md:px-12 pt-12 mb-32">
        <div className="max-w-4xl">
          <span className="font-label uppercase tracking-widest text-xs text-primary mb-6 block font-bold">
            The Methodology
          </span>
          <h1 className="font-headline text-[3.5rem] md:text-[5.5rem] leading-[0.95] tracking-[-0.03em] mb-12">
            From scattered work to{" "}
            <span className="font-headline italic">structured system.</span>
          </h1>
          <div className="h-1 w-24 bg-primary mb-12" />
          <p className="font-body text-xl text-on-surface-variant max-w-2xl leading-relaxed">
            Movemental transforms raw creative output into durable editorial
            intelligence. We don&apos;t just store information; we architect movement.
          </p>
        </div>
      </header>

      {/* Steps */}
      <div className="max-w-screen-2xl mx-auto px-6 md:px-12 space-y-48 pb-48">
        {/* 01 Input */}
        <section className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
          <div className="md:col-span-4 md:sticky md:top-32">
            <div className="flex items-baseline gap-4 mb-8">
              <span className="text-4xl font-headline italic text-outline-variant">01</span>
              <h2 className="text-3xl font-headline">Input</h2>
            </div>
            <p className="text-on-surface-variant text-lg leading-relaxed">
              We start with what already exists. Your body of work—books, talks,
              private documents—is the raw material for the new system.
            </p>
          </div>
          <div className="md:col-span-8 bg-surface-container h-[500px] relative overflow-hidden flex flex-col justify-end p-12">
            <h3 className="font-headline text-4xl text-on-surface mb-2">
              We start with what already exists
            </h3>
            <p className="font-body text-sm uppercase tracking-widest opacity-60">
              Books · Talks · Documents
            </p>
          </div>
        </section>

        {/* 02 Analysis */}
        <section className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-7 bg-primary-container p-12 min-h-[500px] flex flex-col justify-center text-white order-2 md:order-1">
            <h3 className="font-headline text-5xl mb-6 leading-tight">
              Structure is extracted
            </h3>
            <p className="font-body text-xl opacity-80 mb-12 max-w-md">
              Our intelligence engine identifies the latent themes and frameworks
              buried within your existing content.
            </p>
            <div className="flex flex-wrap gap-4">
              {["Themes", "Frameworks", "Ontologies"].map((tag) => (
                <span
                  key={tag}
                  className="px-4 py-2 border border-on-primary-container text-sm uppercase tracking-widest"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <div className="md:col-span-5 order-1 md:order-2">
            <div className="flex items-baseline gap-4 mb-8">
              <span className="text-4xl font-headline italic text-outline-variant">02</span>
              <h2 className="text-3xl font-headline">Analysis</h2>
            </div>
            <p className="text-on-surface-variant text-lg leading-relaxed">
              Data without structure is noise. We strip away the non-essential to
              find the structural integrity of your ideas.
            </p>
          </div>
        </section>

        {/* 03 Build */}
        <section className="grid grid-cols-1 md:grid-cols-12 gap-12">
          <div className="md:col-span-4">
            <div className="flex items-baseline gap-4 mb-8">
              <span className="text-4xl font-headline italic text-outline-variant">03</span>
              <h2 className="text-3xl font-headline">Build</h2>
            </div>
          </div>
          <div className="md:col-span-8">
            <h3 className="font-headline text-5xl mb-12 leading-tight">
              The system is constructed
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-outline-variant">
              <div className="bg-surface p-12 aspect-square flex flex-col justify-between">
                <div className="text-primary text-4xl">&#9670;</div>
                <div>
                  <h4 className="text-2xl font-headline mb-4">Pathways</h4>
                  <p className="text-on-surface-variant leading-relaxed">
                    Linear journeys designed for cognitive progression and mastery.
                  </p>
                </div>
              </div>
              <div className="bg-surface p-12 aspect-square flex flex-col justify-between">
                <div className="text-primary text-4xl">&#9776;</div>
                <div>
                  <h4 className="text-2xl font-headline mb-4">Courses</h4>
                  <p className="text-on-surface-variant leading-relaxed">
                    Interactive modules that bridge the gap between theory and
                    practice.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 04 Interaction */}
        <section className="bg-surface-container-low p-12 md:p-24">
          <div className="max-w-3xl">
            <div className="flex items-baseline gap-4 mb-8">
              <span className="text-4xl font-headline italic text-outline-variant">04</span>
              <h2 className="text-3xl font-headline">Interaction</h2>
            </div>
            <h3 className="font-headline text-[3.5rem] leading-tight mb-12">
              People move through it
            </h3>
            <p className="text-xl text-on-surface-variant leading-relaxed mb-16">
              A system is only as good as the movement it inspires. We create
              interfaces that encourage active reflection, not passive consumption.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
              {["Engaging", "Reflecting", "Applying", "Sharing"].map((phase, i) => (
                <div key={phase}>
                  <p className="text-sm font-bold uppercase tracking-tighter text-primary mb-2">
                    0{i + 1}
                  </p>
                  <p className="font-headline italic text-lg">{phase}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 05 Evolution */}
        <section className="py-24 text-center max-w-2xl mx-auto">
          <span className="text-4xl font-headline italic text-outline-variant mb-6 block">
            05
          </span>
          <h2 className="text-3xl font-headline mb-8">Evolution</h2>
          <h3 className="font-headline text-5xl mb-12 leading-tight">
            It grows over time.
          </h3>
          <p className="text-lg text-on-surface-variant leading-relaxed mb-16">
            Our systems are living archives. As your body of work expands, the
            methodology adapts, ensuring your editorial intelligence never goes
            stale.
          </p>
          <Link
            href="/#cta"
            className="inline-block bg-primary text-white px-12 py-5 font-headline italic text-xl rounded-full hover:bg-primary-container transition-all duration-300 shadow-lg"
          >
            Start a Conversation
          </Link>
        </section>
      </div>
    </>
  );
}
