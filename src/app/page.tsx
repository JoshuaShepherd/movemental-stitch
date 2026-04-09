import Link from "next/link";
import Image from "next/image";

export default function HomePage() {
  return (
    <>
      {/* 1. Hero */}
      <section className="min-h-[85vh] flex flex-col justify-center px-6 md:px-12 bg-surface">
        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-7 space-y-10">
            <h1 className="text-5xl md:text-7xl font-headline font-light leading-[1.1] text-on-surface">
              Turn your ideas—or your organization—into a{" "}
              <span className="italic text-primary-container">living system</span>{" "}
              that forms people and scales impact.
            </h1>
            <p className="text-lg md:text-xl text-on-surface-variant max-w-xl leading-relaxed">
              We analyze your unique content, frameworks, and cultural context to
              architect digital ecosystems where transformation happens at scale.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link
                href="#cta"
                className="bg-linear-to-br from-primary to-primary-container text-white px-10 py-5 text-base font-semibold hover:brightness-110 transition-all text-center"
              >
                Start a Conversation
              </Link>
              <Link
                href="/how-it-works"
                className="bg-secondary-container text-on-surface px-10 py-5 text-base font-semibold hover:bg-surface-container-highest transition-all text-center"
              >
                See How It Works
              </Link>
            </div>
          </div>
          <div className="lg:col-span-5 relative h-[500px] bg-surface-container flex items-center justify-center">
            {/* Geometric node visual */}
            <div className="relative w-full h-full flex items-center justify-center p-8">
              <div className="w-full aspect-square border border-primary/10 relative flex items-center justify-center max-w-[400px]">
                <div className="absolute w-4 h-4 bg-primary rounded-full" />
                <div className="absolute w-full h-px bg-primary/20 rotate-45" />
                <div className="absolute w-full h-px bg-primary/20 -rotate-45" />
                <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-primary-container/40" />
                <div className="absolute bottom-1/4 right-1/4 w-3 h-3 bg-primary-container/40" />
                <div className="w-64 h-64 border border-primary/20 animate-pulse" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Problem */}
      <section className="bg-on-surface text-surface py-32 px-6 md:px-12">
        <div className="max-w-4xl mx-auto text-center md:text-left space-y-8">
          <h2 className="text-4xl md:text-6xl font-light font-headline leading-tight">
            Most platforms distribute content.
            <br />
            <span className="opacity-50">But movements don&apos;t spread through</span>
            <br />
            content alone.
          </h2>
          <div className="h-px w-24 bg-primary-container" />
        </div>
      </section>

      {/* 3. Content → System */}
      <section className="py-32 px-6 md:px-12 bg-surface">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
          <div className="space-y-10 lg:sticky lg:top-40">
            <span className="text-primary font-bold tracking-widest text-xs uppercase">
              The Evolution
            </span>
            <h2 className="text-4xl md:text-5xl font-headline leading-tight">
              From static content to living systems
            </h2>
            <p className="text-on-surface-variant text-lg leading-relaxed">
              Static PDFs and video libraries are digital graveyards for great
              ideas. We identify your core themes and translate them into
              interactive pathways and intelligent AI interfaces that meet people
              in their specific context.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-4">
            <div className="p-12 bg-surface-container-low flex flex-col justify-between min-h-[300px]">
              <span className="text-xs font-bold uppercase tracking-widest opacity-40">
                Traditional Model
              </span>
              <h3 className="text-3xl font-headline mt-8">
                Books / PDFs / Linear Courses
              </h3>
              <p className="mt-4 text-on-surface-variant italic">
                Passive consumption, low retention, limited scale.
              </p>
            </div>
            <div className="p-12 bg-primary-container text-white flex flex-col justify-between min-h-[300px]">
              <span className="text-xs font-bold uppercase tracking-widest opacity-60">
                The Movemental Model
              </span>
              <h3 className="text-3xl font-headline mt-8">
                Platform / Pathways / Applied AI
              </h3>
              <p className="mt-4 opacity-80 italic">
                Contextual formation, active engagement, exponential growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. What you actually build */}
      <section className="py-32 px-6 md:px-12 bg-surface-container">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-headline mb-20 text-center">
            What you actually build
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px">
            {[
              { title: "A Formation Platform", desc: "A custom digital home for your movement's core DNA and developmental journey." },
              { title: "An Intelligent Layer", desc: "AI tuned to your specific frameworks, acting as a guide, not just a chatbot." },
              { title: "A Structured Ecosystem", desc: "Standardized data structures that allow diverse tools to work as one system." },
              { title: "A System That Scales", desc: "Infrastructure designed to handle thousands of leaders without losing intimacy." },
            ].map((item) => (
              <div key={item.title} className="bg-surface p-10 space-y-6">
                <h4 className="text-xl font-bold">{item.title}</h4>
                <p className="text-sm text-on-surface-variant leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Choose Your Path */}
      <section className="py-32 px-6 md:px-12 bg-surface">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-on-surface text-surface p-16 flex flex-col justify-between min-h-[500px]">
            <div className="space-y-6">
              <h3 className="text-5xl font-headline">Movement Leaders</h3>
              <p className="text-lg opacity-70 max-w-sm">
                For thinkers, authors, and pioneers looking to institutionalize
                their core message into a scalable model.
              </p>
            </div>
            <Link
              href="/movement-leaders"
              className="w-full py-5 border-2 border-surface/20 text-surface font-bold uppercase tracking-widest text-xs hover:bg-surface hover:text-on-surface transition-all text-center block"
            >
              See Movement Leader Model
            </Link>
          </div>
          <div className="bg-surface-container-highest p-16 flex flex-col justify-between min-h-[500px]">
            <div className="space-y-6">
              <h3 className="text-5xl font-headline">Organizations</h3>
              <p className="text-lg text-on-surface-variant max-w-sm">
                Churches, nonprofits, and institutions building unified systems
                for internal formation and external impact.
              </p>
            </div>
            <Link
              href="/organizations"
              className="w-full py-5 border-2 border-on-surface/10 text-on-surface font-bold uppercase tracking-widest text-xs hover:bg-on-surface hover:text-surface transition-all text-center block"
            >
              See How We Work with Organizations
            </Link>
          </div>
        </div>
      </section>

      {/* 6. The Methodology */}
      <section className="py-32 px-6 md:px-12 bg-surface">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
            <h2 className="text-4xl md:text-6xl font-headline">The Methodology</h2>
            <p className="text-on-surface-variant max-w-sm">
              A serious approach to system architecture. No shortcuts, just
              engineering for impact.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            {[
              { num: "01", title: "Analyze", desc: "Deep audit of existing content, frameworks, and cultural DNA." },
              { num: "02", title: "Extract", desc: "Distilling core logic into structured pathways and intelligent data points." },
              { num: "03", title: "Build", desc: "Architecting the custom digital ecosystem and AI deployment layer." },
              { num: "04", title: "Evolve", desc: "Continuous refinement based on user behavior and systemic feedback." },
            ].map((step) => (
              <div key={step.num} className="space-y-6">
                <span className="text-6xl font-headline italic text-primary-container/20">
                  {step.num}
                </span>
                <h4 className="text-xl font-bold uppercase tracking-tighter">
                  {step.title}
                </h4>
                <p className="text-sm text-on-surface-variant leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. AI Demystified */}
      <section className="py-32 px-6 md:px-12 bg-surface">
        <div className="max-w-4xl mx-auto space-y-12 text-center">
          <h2 className="text-4xl md:text-5xl font-headline">
            AI is part of the system—not the product
          </h2>
          <p className="text-xl text-on-surface-variant leading-relaxed">
            We don&apos;t use AI for the sake of novelty. We use it to ground your
            content in context—allowing a user to ask, &ldquo;How does this principle
            apply to my specific leadership challenge?&rdquo; and receive an answer
            rooted entirely in your wisdom.
          </p>
          <div className="pt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Contextual Engagement", desc: "Moves beyond generic responses to specific situational guidance." },
              { title: "Grounded Knowledge", desc: "The AI only knows what you've taught it. Your IP is the boundary." },
              { title: "Insight Generation", desc: "Identifies patterns across your movement that you can't see on your own." },
            ].map((item) => (
              <div key={item.title} className="p-8 bg-surface-container-low text-left">
                <h5 className="font-bold mb-2">{item.title}</h5>
                <p className="text-sm text-on-surface-variant">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Final CTA */}
      <section id="cta" className="py-48 px-6 md:px-12 bg-primary-container text-white text-center">
        <div className="max-w-3xl mx-auto space-y-12">
          <h2 className="text-5xl md:text-7xl font-headline leading-none">
            Let&apos;s build what actually works.
          </h2>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Link
              href="#cta"
              className="bg-white text-primary-container px-12 py-5 text-lg font-bold hover:bg-surface-container-lowest transition-all"
            >
              Schedule a Consultation
            </Link>
            <Link
              href="/how-it-works"
              className="border border-white/30 text-white px-12 py-5 text-lg font-bold hover:bg-white/10 transition-all"
            >
              Read the Methodology
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
