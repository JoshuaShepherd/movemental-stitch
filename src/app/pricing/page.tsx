import Link from "next/link";

export const metadata = {
  title: "Pricing | Movemental",
  description: "Aligned with what this produces — pricing that reflects the velocity of movement building.",
};

export default function PricingPage() {
  return (
    <>
      {/* Hero */}
      <section className="px-6 md:px-12 lg:px-24 xl:px-48 mb-32 max-w-7xl pt-12">
        <h1 className="font-headline text-7xl md:text-8xl leading-[0.9] mb-8 text-on-surface">
          Aligned with what
          <br /> this produces
        </h1>
        <p className="font-body text-xl md:text-2xl text-on-surface-variant max-w-2xl leading-relaxed">
          We reject the hourly trap. Our pricing reflects the velocity of
          movement building, focusing on enduring infrastructure and shared
          success.
        </p>
      </section>

      {/* Movement Leaders */}
      <section className="mb-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 items-start">
          <div className="lg:col-span-5 bg-surface-container-low p-12 md:pl-24 lg:pl-48 min-h-[500px] flex flex-col justify-center">
            <span className="font-label uppercase tracking-widest text-xs text-primary mb-4 font-bold">
              Model 01
            </span>
            <h2 className="font-headline text-5xl mb-6">Movement Leaders</h2>
            <p className="font-body text-lg text-on-surface-variant leading-relaxed mb-8">
              Designed for individual visionaries who need high-fidelity
              operational support without the burden of salary or equity dilute.
            </p>
            <Link
              href="/#cta"
              className="w-fit bg-on-surface text-surface px-8 py-4 font-bold text-sm tracking-widest uppercase hover:bg-primary-container transition-colors"
            >
              Start a Conversation
            </Link>
          </div>
          <div className="lg:col-span-7 bg-surface-container-high p-12 lg:p-24 flex flex-col justify-center min-h-[500px]">
            <div className="space-y-12 max-w-lg">
              <div>
                <div className="text-6xl font-headline text-primary-container mb-2 italic">
                  $1,000
                </div>
                <p className="font-body text-sm font-bold uppercase tracking-widest opacity-60">
                  Upfront Implementation
                </p>
              </div>
              <div className="pl-12 border-l-4 border-primary">
                <h3 className="font-headline text-3xl mb-4 italic">
                  &ldquo;You keep 90%. You own your work.&rdquo;
                </h3>
                <p className="font-body text-on-surface-variant leading-relaxed">
                  We take 10% of generated revenue only. No ongoing retainer
                  fees. No management overhead. If you don&apos;t scale, we don&apos;t
                  bill.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Organizations */}
      <section className="px-6 md:px-12 lg:px-24 xl:px-48 mb-32 max-w-7xl">
        <span className="font-label uppercase tracking-widest text-xs text-primary mb-4 block font-bold">
          Model 02
        </span>
        <h2 className="font-headline text-5xl mb-16">
          Institutional Architecture
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="bg-surface-container-lowest p-12 transition-all hover:bg-white group">
            <div className="flex justify-between items-start mb-12">
              <div className="text-primary text-4xl">&#9678;</div>
              <div className="font-headline text-4xl">$5,000</div>
            </div>
            <h3 className="font-headline text-3xl mb-6">Governance & AI Lab</h3>
            <p className="font-body text-on-surface-variant leading-relaxed mb-8">
              Bespoke internal frameworks. We build the private intelligence
              layers and decision-making protocols required for modern
              institutional speed.
            </p>
            <ul className="space-y-4 font-body text-sm text-secondary">
              <li className="flex items-center gap-3">
                <span className="text-primary">&#10003;</span>
                Custom LLM Fine-tuning
              </li>
              <li className="flex items-center gap-3">
                <span className="text-primary">&#10003;</span>
                Privacy-First Infrastructure
              </li>
            </ul>
          </div>
          <div className="bg-primary-container text-on-primary p-12 mt-12 md:mt-24 transition-all hover:bg-primary">
            <div className="flex justify-between items-start mb-12">
              <div className="text-on-primary-container text-4xl">&#9733;</div>
              <div className="font-headline text-4xl text-on-primary-container">
                $10,000
              </div>
            </div>
            <h3 className="font-headline text-3xl mb-6">
              Content & Fundraising
            </h3>
            <p className="opacity-80 font-body leading-relaxed mb-8">
              The full-stack narrative engine. We synchronize high-fidelity
              content production with automated fundraising loops to ensure
              institutional solvency.
            </p>
            <ul className="space-y-4 font-body text-sm text-on-primary-container">
              <li className="flex items-center gap-3">
                <span>&#10022;</span>
                Editorial Strategy
              </li>
              <li className="flex items-center gap-3">
                <span>&#10022;</span>
                Donor Acquisition Funnels
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Rationale */}
      <section className="mb-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 bg-inverse-surface text-inverse-on-surface">
          <div className="relative h-96 lg:h-auto overflow-hidden bg-primary/20" />
          <div className="p-12 lg:p-24 flex flex-col justify-center">
            <h2 className="font-headline text-5xl mb-8 leading-tight">
              Outcomes vs. Effort
            </h2>
            <p className="font-body text-lg opacity-80 leading-relaxed mb-8">
              Traditional consulting charges for time—an incentive for
              inefficiency. Movemental charges for structural integrity and
              momentum. We believe the value of an infrastructure is found in its
              durability, not the number of hours spent drafting it.
            </p>
            <div className="flex flex-col space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-px bg-primary-container mt-4 shrink-0" />
                <p className="font-body italic text-lg text-primary-fixed-dim">
                  &ldquo;The movement is the product, not the meeting.&rdquo;
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 md:px-12 text-center max-w-4xl mx-auto py-24">
        <h2 className="font-headline text-6xl mb-12">Ready to construct?</h2>
        <Link
          href="/#cta"
          className="inline-block bg-primary-container text-on-primary px-12 py-6 font-bold text-lg hover:bg-primary transition-all active:scale-95 shadow-2xl"
        >
          Start a Conversation
        </Link>
      </section>
    </>
  );
}
