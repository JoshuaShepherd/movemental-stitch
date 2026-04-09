import Link from "next/link";

export const metadata = {
  title: "Platform | Movemental",
  description: "This is not a platform you use. It's a system we build.",
};

export default function PlatformPage() {
  return (
    <>
      {/* Hero */}
      <section className="px-6 md:px-12 pt-20 pb-48 max-w-screen-2xl mx-auto grid grid-cols-12 gap-8 items-end">
        <div className="col-span-12 lg:col-span-8">
          <h1 className="font-headline text-7xl md:text-8xl lg:text-9xl leading-[0.9] tracking-[-0.04em] font-medium text-on-surface">
            This is not a platform you use. It&apos;s a{" "}
            <span className="italic text-primary-container">system</span> we build.
          </h1>
        </div>
        <div className="col-span-12 lg:col-span-4 pb-4">
          <p className="text-xl md:text-2xl font-body leading-relaxed text-on-surface-variant/90 max-w-md">
            Movemental turns bodies of work and organizations into living
            systems—integrating content, pathways, AI, and formation into a
            single coherent environment.
          </p>
        </div>
      </section>

      {/* Image break */}
      <section className="px-6 md:px-12 max-w-screen-2xl mx-auto">
        <div className="w-full h-[400px] md:h-[716px] bg-surface-container relative overflow-hidden">
          <div className="absolute inset-0 bg-primary-container/10 mix-blend-multiply" />
        </div>
      </section>

      {/* The Fragmentation */}
      <section className="px-6 md:px-12 py-32 max-w-screen-2xl mx-auto grid grid-cols-12 gap-12">
        <div className="col-span-12 lg:col-span-5 lg:sticky lg:top-32 h-fit">
          <h2 className="font-headline text-5xl leading-tight font-medium">
            Most systems weren&apos;t built as systems.
          </h2>
        </div>
        <div className="col-span-12 lg:col-span-6 lg:col-start-7 space-y-12">
          <p className="text-2xl font-body leading-relaxed text-on-surface">
            Traditional digital ecosystems are a patchwork of convenience. We
            stitch together tools that were never meant to speak to one another,
            creating a &ldquo;Frankenstein&rdquo; experience for both creator and
            participant.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-outline-variant/30">
            {[
              { num: "01", title: "Static Website", desc: "Content lives in a silo, detached from actual user progress or interaction." },
              { num: "02", title: "Course LMS", desc: "A rigid pathway that ignores the nuance of the community's real-time needs." },
              { num: "03", title: "Email Automations", desc: "One-way broadcasts that lack context of what the user is currently building." },
              { num: "04", title: "AI Add-ons", desc: "External bots that have no access to the proprietary depth of your organization's work." },
            ].map((item) => (
              <div key={item.num} className="bg-surface-container-low p-8">
                <span className="text-xs uppercase tracking-[0.2em] font-bold text-primary mb-4 block">
                  Fragmented Tool {item.num}
                </span>
                <h4 className="text-xl font-bold mb-2">{item.title}</h4>
                <p className="text-on-surface-variant">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integration */}
      <section className="px-6 md:px-12 py-32 bg-surface-container">
        <div className="max-w-screen-2xl mx-auto">
          <div className="mb-24 max-w-4xl">
            <h2 className="font-headline text-6xl leading-tight font-medium mb-8">
              A single, integrated system.
            </h2>
            <p className="text-2xl text-on-surface-variant font-light leading-relaxed">
              We replace the patchwork with a single data layer. When content,
              pathways, and AI connect, the system begins to learn and evolve
              alongside its members.
            </p>
          </div>
          <div className="grid grid-cols-12 gap-8">
            <div className="col-span-12 md:col-span-8 min-h-[500px] bg-primary-container p-12 flex flex-col justify-between text-on-primary">
              <div className="max-w-md">
                <h3 className="font-headline text-4xl mb-4">The Universal Core</h3>
                <p className="text-lg opacity-80">
                  Every interaction, from a lesson completed to a query asked,
                  informs the entire ecosystem. Your data is no longer scattered;
                  it is centralized and actionable.
                </p>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-white/10 flex items-center justify-center text-xl">
                  &#9678;
                </div>
                <div className="w-12 h-12 bg-white/10 flex items-center justify-center text-xl">
                  &#9636;
                </div>
              </div>
            </div>
            <div className="col-span-12 md:col-span-4 min-h-[500px] bg-surface-container-highest p-12">
              <div className="w-full h-48 bg-surface-container mb-8" />
              <h3 className="font-headline text-3xl mb-4">Responsive Intelligence</h3>
              <p className="text-on-surface-variant">
                AI that doesn&apos;t just answer—it navigates. It understands the
                context of the user&apos;s journey.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What's Inside */}
      <section className="px-6 md:px-12 py-48 max-w-screen-2xl mx-auto">
        <h2 className="font-headline text-6xl mb-24 text-center">What&apos;s inside</h2>
        <div className="space-y-32">
          {[
            { num: "01", title: "Content Layer", desc: "Beyond blogs and videos. This is a dynamic library where every piece of information is tagged, mapped, and ready to be summoned by the AI or triggered by a pathway." },
            { num: "02", title: "Formation Layer", desc: "Structured journeys designed for transformation. Not just passive consumption, but active formation through sequences that adapt to the user's pace and input." },
            { num: "03", title: "AI Layer", desc: "The nervous system of the platform. Our proprietary integration allows the AI to act as a mentor, librarian, and guide, trained specifically on your body of work." },
          ].map((layer, i) => (
            <div
              key={layer.num}
              className={`flex flex-col ${
                i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              } items-center gap-16 md:gap-32`}
            >
              <div className="w-full md:w-1/2">
                <div className="w-full aspect-[4/3] bg-surface-container" />
              </div>
              <div className="w-full md:w-1/3">
                <span className="text-5xl font-headline italic text-primary-container mb-6 block">
                  {layer.num}
                </span>
                <h3 className="text-4xl font-headline font-bold mb-6">
                  {layer.title}
                </h3>
                <p className="text-lg leading-relaxed text-on-surface-variant">
                  {layer.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Difference */}
      <section className="bg-on-surface text-surface px-6 md:px-12 py-32">
        <div className="grid grid-cols-12 gap-12 max-w-screen-2xl mx-auto items-center">
          <div className="col-span-12 lg:col-span-6">
            <h2 className="font-headline text-6xl leading-tight mb-8">
              What makes this different
            </h2>
            <p className="text-2xl font-light opacity-80 leading-relaxed max-w-xl">
              Integration isn&apos;t just a technical feature; it&apos;s a pedagogical
              shift. By bringing content, courses, and AI into one environment,
              we remove the friction of learning and the isolation of expertise.
            </p>
          </div>
          <div className="col-span-12 lg:col-span-6">
            <div className="border-l-4 border-primary-container pl-12 py-8 space-y-12">
              <div>
                <h4 className="text-xl font-bold uppercase tracking-widest text-primary-container mb-4">
                  The Intersection
                </h4>
                <p className="text-3xl font-headline italic">
                  &ldquo;Most tools focus on the storage of knowledge. We focus on the
                  activation of it.&rdquo;
                </p>
              </div>
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <p className="text-4xl font-bold mb-2">100%</p>
                  <p className="text-sm opacity-60 uppercase tracking-tighter">
                    Proprietary Training
                  </p>
                </div>
                <div>
                  <p className="text-4xl font-bold mb-2">Zero</p>
                  <p className="text-sm opacity-60 uppercase tracking-tighter">
                    Third-party Silos
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 md:px-12 py-48 text-center bg-surface">
        <h2 className="font-headline text-7xl md:text-8xl mb-12 leading-[0.9]">
          Ready to build <br />
          your <span className="italic">living system?</span>
        </h2>
        <div className="flex flex-col md:flex-row justify-center gap-6">
          <Link
            href="/#cta"
            className="bg-primary-container text-on-primary px-12 py-5 text-lg font-medium hover:bg-primary transition-all duration-300"
          >
            Schedule a Consultation
          </Link>
          <Link
            href="/about"
            className="bg-on-surface text-surface px-12 py-5 text-lg font-medium hover:opacity-90 transition-all duration-300"
          >
            View the Ethics Framework
          </Link>
        </div>
      </section>
    </>
  );
}
