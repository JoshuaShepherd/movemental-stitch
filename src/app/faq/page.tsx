import Link from "next/link";

export const metadata = {
  title: "FAQ | Movemental",
  description: "Architecture, ethics, and infrastructure — questions worth answering.",
};

const faqs = [
  {
    num: "01",
    question: "What is Movemental's core mission in the digital infrastructure space?",
    answer:
      "Movemental exists to architect resilient, ethical, and human-centric digital foundations for social movements and civic organizations. We bridge the gap between radical vision and robust technical execution.",
    wide: true,
  },
  {
    num: "02",
    question: "How does your agency approach data sovereignty?",
    answer:
      "We view data as a collective resource rather than a commodity. Our designs prioritize decentralized ownership, ensuring that the organizations we serve retain total control over their intellectual and relational assets.",
    wide: false,
  },
  {
    num: "03",
    question: "Is Movemental a consultancy or a technology provider?",
    answer:
      "Both and neither. We are partners in infrastructure. While we provide bespoke technical tools, our primary value lies in the strategic alignment of technology with organizational values.",
    wide: false,
  },
  {
    num: "04",
    question: "Who are your \"Movement Leaders\"?",
    answer:
      "We work with visionaries who understand that the platform is as important as the message. From climate activists to academic researchers, our leaders are those building the scaffolds of the new era.",
    wide: true,
  },
  {
    num: "05",
    question: "What defines your \"Institutional Access\" program?",
    answer:
      "Our program allows large-scale organizations to pilot our infrastructure with tiered security protocols and dedicated archival support. It is designed for scale without compromising individual user dignity.",
    wide: false,
  },
];

export default function FAQPage() {
  return (
    <>
      {/* Hero */}
      <header className="px-6 md:px-12 mb-32 max-w-screen-2xl mx-auto pt-12">
        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-12 lg:col-span-8">
            <span className="font-label text-sm uppercase tracking-[0.3em] text-on-surface-variant mb-6 block">
              The Knowledge Base
            </span>
            <h1 className="text-7xl md:text-9xl font-headline italic tracking-tighter leading-[0.9] text-on-surface mb-12">
              Questions worth answering.
            </h1>
          </div>
          <div className="col-span-12 lg:col-span-4 flex items-end pb-4">
            <p className="text-lg font-body leading-relaxed text-on-surface-variant/80 border-l border-outline-variant pl-8">
              Architecture, ethics, and infrastructure. We explore the
              foundational inquiries that shape the digital commons of tomorrow.
            </p>
          </div>
        </div>
      </header>

      {/* FAQ Grid */}
      <section className="max-w-screen-2xl mx-auto px-6 md:px-12 pb-32">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-y-24 gap-x-12">
          {/* FAQ 1 — wide */}
          <div className="md:col-span-7 flex flex-col group">
            <div className="bg-surface-container-low p-12 md:p-16 transition-colors duration-500 hover:bg-surface-container">
              <span className="font-headline text-3xl text-primary mb-8 block">
                01.
              </span>
              <h2 className="text-4xl font-headline mb-8 leading-tight">
                {faqs[0].question}
              </h2>
              <p className="font-body text-lg leading-relaxed text-on-surface-variant mb-8">
                {faqs[0].answer}
              </p>
              <div className="flex items-center gap-2 text-primary font-medium cursor-pointer">
                <span className="font-label uppercase tracking-widest text-xs">
                  Read the full thesis
                </span>
                <span className="text-sm">&#8599;</span>
              </div>
            </div>
          </div>

          {/* Visual anchor */}
          <div className="md:col-span-5 min-h-[400px] bg-surface-container" />

          {/* FAQ 2 — staggered */}
          <div className="md:col-start-2 md:col-span-5 flex flex-col bg-surface-container-lowest p-12 shadow-sm">
            <span className="font-headline text-3xl text-primary mb-6 block">
              02.
            </span>
            <h2 className="text-3xl font-headline mb-6 leading-tight">
              {faqs[1].question}
            </h2>
            <p className="font-body leading-relaxed text-on-surface-variant">
              {faqs[1].answer}
            </p>
          </div>

          {/* FAQ 3 */}
          <div className="md:col-span-5 flex flex-col p-12">
            <span className="font-headline text-3xl text-primary mb-6 block">
              03.
            </span>
            <h2 className="text-3xl font-headline mb-6 leading-tight">
              {faqs[2].question}
            </h2>
            <p className="font-body leading-relaxed text-on-surface-variant">
              {faqs[2].answer}
            </p>
          </div>

          {/* Feature split */}
          <div className="md:col-span-12 my-12 bg-primary-container p-12 md:p-24 text-on-primary relative overflow-hidden">
            <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-5xl font-headline italic mb-8">
                  The &ldquo;Modern Archivist&rdquo; Methodology.
                </h2>
                <p className="text-xl font-body leading-relaxed opacity-90">
                  Every interaction is recorded, every voice is preserved. We
                  build systems that don&apos;t just process data, but curate history
                  in real-time.
                </p>
              </div>
              <div className="flex flex-col gap-6">
                {[
                  { title: "Collaborative Integrity", desc: "Building tools that foster genuine connection without surveillance." },
                  { title: "Radical Security", desc: "End-to-end encryption as a baseline, not a feature." },
                  { title: "Sustainable Logic", desc: "Code that lasts longer than the current hardware cycle." },
                ].map((item, i) => (
                  <div
                    key={item.title}
                    className={`flex items-start gap-4 ${
                      i < 2 ? "pb-6 border-b border-on-primary-container/30" : ""
                    }`}
                  >
                    <div className="text-lg">&#9670;</div>
                    <div>
                      <h4 className="font-label font-bold mb-1">{item.title}</h4>
                      <p className="text-sm opacity-80">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* FAQ 4 — centered */}
          <div className="md:col-start-3 md:col-span-8 flex flex-col items-center text-center py-24 border-y border-outline-variant/20">
            <span className="font-headline text-3xl text-primary mb-8 block">
              04.
            </span>
            <h2 className="text-5xl font-headline mb-12 leading-tight">
              {faqs[3].question}
            </h2>
            <p className="font-body text-xl leading-relaxed text-on-surface-variant max-w-2xl mx-auto italic">
              &ldquo;{faqs[3].answer}&rdquo;
            </p>
          </div>

          {/* FAQ 5 */}
          <div className="md:col-span-6 p-12 bg-surface-container">
            <span className="font-headline text-3xl text-primary mb-6 block">
              05.
            </span>
            <h2 className="text-3xl font-headline mb-6 leading-tight">
              {faqs[4].question}
            </h2>
            <p className="font-body leading-relaxed text-on-surface-variant">
              {faqs[4].answer}
            </p>
          </div>

          {/* CTA */}
          <div className="md:col-span-6 p-12 flex flex-col justify-center">
            <h2 className="text-4xl font-headline italic mb-8">
              Ready to define your own architecture?
            </h2>
            <Link
              href="/#cta"
              className="w-fit bg-on-surface text-surface px-10 py-4 font-label text-sm uppercase tracking-widest hover:bg-primary transition-colors"
            >
              Start a Conversation
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
