import Link from "next/link";

export function CTASection({
  title = "Explore Our Free Finance Tools",
  description = "Use our calculators, guides, and comparison tools to research Range Rover finance options.",
  buttonText = "Use Calculator",
  buttonHref = "/calculator",
}: {
  title?: string;
  description?: string;
  buttonText?: string;
  buttonHref?: string;
}) {
  return (
    <section className="bg-rr-black py-20 lg:py-28">
      <div className="max-w-3xl mx-auto px-6 lg:px-10 text-center">
        <h2 className="text-2xl lg:text-3xl font-light tracking-wide text-white">{title}</h2>
        <p className="text-[15px] text-white/40 mt-4 leading-relaxed">{description}</p>
        <Link
          href={buttonHref}
          className="inline-block mt-10 px-12 py-4 border border-white/20 text-[11px] tracking-[0.25em] text-white uppercase hover:bg-white hover:text-rr-black transition-all duration-500"
        >
          {buttonText}
        </Link>
      </div>
    </section>
  );
}
