import Link from "next/link";

export const metadata = {
  title: "Organizations | Movemental",
  description: "Build the systems your organization has never had the capacity to build.",
};

export default function OrganizationsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative flex flex-col justify-center px-6 md:px-12 py-24 max-w-screen-2xl mx-auto overflow-hidden">
        <div className="grid grid-cols-12 gap-6 items-end">
          <div className="col-span-12 lg:col-span-8 z-10">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-headline text-on-surface leading-[1.1] mb-12">
              Build the systems your organization has{" "}
              <span className="italic text-primary-container">never had</span>{" "}
              the capacity to build.
            </h1>
          </div>
        </div>
        <div className="grid grid-cols-12 gap-6 mt-12">
          <div className="col-span-12 md:col-start-5 md:col-span-8">
            <div className="relative h-[300px] md:h-[500px] w-full bg-surface-container">
              <div className="absolute -bottom-8 -left-8 md:-bottom-12 md:-left-12 bg-primary-container p-12 text-white max-w-md hidden md:block">
                <p className="text-xl font-headline leading-relaxed italic">
                  &ldquo;Movemental bridges the gap between vision and execution through
                  deliberate digital architecture.&rdquo;
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Reality */}
      <section className="bg-surface-container-low py-32">
        <div className="max-w-screen-2xl mx-auto px-6 md:px-12 grid grid-cols-12">
          <div className="col-span-12 md:col-start-3 md:col-span-9">
            <p className="uppercase tracking-[0.3em] text-sm font-semibold text-primary mb-8">
              The Reality
            </p>
            <h2 className="text-4xl md:text-6xl text-on-surface font-headline leading-tight">
              Most nonprofits don&apos;t{" "}
              <span className="underline decoration-primary decoration-2 underline-offset-8">
                lack ideas
              </span>
              ,
              <br />
              they lack <span className="italic">capacity.</span>
            </h2>
            <div className="mt-16 grid md:grid-cols-2 gap-12 max-w-4xl">
              <p className="text-lg text-on-surface-variant leading-relaxed">
                Institutional inertia isn&apos;t a failure of will; it&apos;s a failure
                of infrastructure. We provide the technical and organizational
                scaffolding to turn high-level strategy into automated, resilient
                daily operations.
              </p>
              <p className="text-lg text-on-surface-variant leading-relaxed">
                We don&apos;t just consult. We build the literal repositories,
                dashboards, and workflows that preserve your mission&apos;s integrity
                for the next decade.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Five Builds */}
      <section className="py-32 px-6 md:px-12 max-w-screen-2xl mx-auto">
        <div className="mb-20">
          <h2 className="text-sm uppercase tracking-[0.3em] font-semibold text-primary mb-4">
            Core Infrastructure
          </h2>
          <h3 className="text-4xl font-headline italic">The Five Builds</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-0">
          {[
            { title: "Institutional Memory", desc: "Centralized knowledge repositories that survive leadership transitions." },
            { title: "Workflow Engines", desc: "Custom automation that eliminates manual data entry and recurring errors." },
            { title: "Impact Dashboards", desc: "Real-time visualization of field data for board-level transparency." },
            { title: "Security Protocol", desc: "Enterprise-grade privacy standards for sensitive constituent information." },
            { title: "Network Fabric", desc: "Digital tools for collaborative resource sharing across regional hubs." },
          ].map((build, i) => (
            <div
              key={build.title}
              className={`group p-10 hover:bg-surface-container-lowest transition-all duration-500 hover:shadow-[0_40px_80px_-20px_rgba(83,0,183,0.08)] ${
                i < 4 ? "border-b md:border-b-0 md:border-r border-outline-variant/30" : ""
              } ${i % 2 === 0 ? "bg-surface-container" : "bg-surface-container-high"}`}
            >
              <div className="text-primary-container text-4xl mb-8">&#9670;</div>
              <h4 className="text-xl font-headline mb-4">{build.title}</h4>
              <p className="text-on-surface-variant text-sm mb-12">{build.desc}</p>
              <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-xs font-bold tracking-widest text-primary uppercase">
                  Explore Output
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* How it Works */}
      <section className="py-32 bg-on-surface text-surface">
        <div className="max-w-screen-2xl mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
            <div>
              <h2 className="text-sm uppercase tracking-[0.3em] font-semibold text-primary-fixed-dim mb-4">
                Our Method
              </h2>
              <h3 className="text-5xl font-headline">Four weeks. Real outputs.</h3>
            </div>
            <p className="max-w-md text-surface-dim italic font-headline text-xl">
              We move with the speed of a startup but the discipline of an
              archival library.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            {[
              { num: "01", title: "Audit", desc: "We map every existing data point, workflow, and bottleneck in your current structure." },
              { num: "02", title: "Blueprint", desc: "A technical schematic of the custom solution designed specifically for your mission." },
              { num: "03", title: "Sprint", desc: "Rapid deployment of the infrastructure with daily technical check-ins." },
              { num: "04", title: "Transfer", desc: "Hands-on training and documentation to ensure internal ownership from day one." },
            ].map((step) => (
              <div key={step.num} className="relative">
                <div className="text-primary-fixed-dim font-headline italic text-6xl mb-6 opacity-50">
                  {step.num}
                </div>
                <h4 className="text-xl font-bold mb-4 uppercase tracking-wider">
                  {step.title}
                </h4>
                <p className="text-surface-dim">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-40 flex flex-col items-center text-center px-6">
        <div className="max-w-3xl">
          <h2 className="text-5xl md:text-7xl font-headline mb-12">
            Is your infrastructure ready for your vision?
          </h2>
          <Link
            href="/#cta"
            className="inline-block bg-linear-to-br from-primary to-primary-container text-white text-lg px-12 py-5 font-medium active:scale-95 transition-transform"
          >
            Schedule Capacity Audit
          </Link>
        </div>
      </section>
    </>
  );
}
