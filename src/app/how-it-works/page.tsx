import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import {
  clientExpectations,
  engagementHighlights,
  processSteps,
} from "@/data/how-it-works";
import { PRIMARY_CTA_HREF, PRIMARY_CTA_LABEL } from "@/lib/cta";

export const metadata: Metadata = {
  title: "How It Works | HVB Solutions",
  description:
    "See how HVB Solutions works with clients—from free consultation and scoped proposals to secure onboarding, delivery, and ongoing support.",
};

export default function HowItWorksPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navigation />

      <main className="flex-1">
        <section className="bg-[radial-gradient(circle_at_top_left,_rgba(212,175,55,0.14),_transparent_20%),linear-gradient(135deg,_rgba(15,23,42,0.06),_white_40%,_rgba(248,250,252,0.96)_100%)] section-space-tight">
          <div className="site-shell">
            <div className="site-shell-inner">
              <div className="max-w-2xl">
                <div className="mb-4 inline-flex items-center rounded-full border border-[#d4af37]/35 bg-white/80 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#b88b16] backdrop-blur">
                  Our Process
                </div>
                <h1 className="mb-4 text-3xl font-bold tracking-tight text-[#0f172a] sm:text-4xl xl:text-[2.8rem]">
                  How It Works
                </h1>
                <p className="max-w-xl text-base leading-7 text-[#5b6678] xl:text-lg">
                  A straightforward path from first conversation to delivered work—built
                  on clarity, confidentiality, and consistent communication.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="section-space bg-white">
          <div className="site-shell">
            <div className="site-shell-inner">
              <div className="mb-12 max-w-2xl">
                <div className="mb-4 inline-flex items-center rounded-full bg-[#f8fafc] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-[#64748b]">
                  Five Simple Steps
                </div>
                <h2 className="text-3xl font-bold tracking-tight text-[#0f172a] sm:text-4xl">
                  From consultation to confident outcomes
                </h2>
                <p className="mt-4 text-base leading-7 text-[#5b6678]">
                  Every engagement follows the same disciplined structure, whether you
                  need a one-off audit or ongoing finance support.
                </p>
              </div>

              <div className="relative">
                <div
                  className="absolute left-6 top-8 hidden h-[calc(100%-4rem)] w-px bg-gradient-to-b from-[#d4af37] via-[#e2e8f0] to-transparent lg:left-8 lg:block"
                  aria-hidden
                />
                <ol className="space-y-6 lg:space-y-8">
                  {processSteps.map((step) => {
                    const Icon = step.icon;
                    return (
                      <li key={step.id}>
                        <Card className="surface-card relative overflow-hidden border-[#d9e0ea] bg-[linear-gradient(180deg,_#ffffff_0%,_#fbfdff_100%)] transition-transform duration-300 hover:-translate-y-0.5 hover:shadow-[0_24px_60px_rgba(15,23,42,0.1)] lg:ml-4">
                          <div className="absolute right-0 top-0 h-28 w-28 rounded-bl-full bg-gradient-to-bl from-[#d4af37]/12 to-transparent" />
                          <CardContent className="flex flex-col gap-5 px-6 py-6 sm:flex-row sm:items-start sm:gap-6 sm:px-8 sm:py-8">
                            <div className="flex shrink-0 items-center gap-4 sm:flex-col sm:items-center sm:gap-3">
                              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#0f172a] text-lg font-bold text-[#d4af37] shadow-[0_14px_28px_rgba(15,23,42,0.16)] lg:h-14 lg:w-14 lg:text-xl">
                                {step.id}
                              </div>
                              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#fff8e1] text-[#0f172a] lg:h-14 lg:w-14">
                                <Icon className="h-6 w-6 lg:h-7 lg:w-7" />
                              </div>
                            </div>
                            <div className="min-w-0 flex-1">
                              <h3 className="text-xl font-semibold tracking-tight text-[#0f172a] sm:text-2xl">
                                {step.title}
                              </h3>
                              <p className="mt-2 text-base leading-7 text-[#5b6678]">
                                {step.description}
                              </p>
                              <p className="mt-3 text-sm leading-7 text-[#64748b] sm:text-[15px]">
                                {step.detail}
                              </p>
                            </div>
                          </CardContent>
                        </Card>
                      </li>
                    );
                  })}
                </ol>
              </div>
            </div>
          </div>
        </section>

        <section className="section-space bg-[#f8fafc]">
          <div className="site-shell">
            <div className="site-shell-inner grid gap-8 xl:grid-cols-2 xl:gap-10">
              <div>
                <div className="mb-4 inline-flex items-center rounded-full bg-white px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-[#64748b] shadow-sm">
                  Engagement Types
                </div>
                <h2 className="text-3xl font-bold tracking-tight text-[#0f172a] sm:text-4xl">
                  Flexible to how you operate
                </h2>
                <p className="mt-4 max-w-lg text-base leading-7 text-[#5b6678]">
                  We adapt the same process to project-based work, retained support, or
                  a mix of both—so the structure fits your team and timeline.
                </p>
                <div className="mt-8 space-y-4">
                  {engagementHighlights.map((item) => (
                    <Card
                      key={item.title}
                      className="surface-card border-[#d9e0ea] bg-white"
                    >
                      <CardHeader className="px-6 pb-2 pt-6 sm:px-8 sm:pt-8">
                        <CardTitle className="text-lg text-[#0f172a]">
                          {item.title}
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="px-6 pb-6 pt-0 sm:px-8 sm:pb-8">
                        <p className="text-sm leading-7 text-[#5b6678] sm:text-[15px]">
                          {item.description}
                        </p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              <Card className="surface-card h-fit border-[#d9e0ea] bg-[#0f172a] text-white">
                <CardHeader className="px-6 pt-6 sm:px-8 sm:pt-8">
                  <div className="mb-3 inline-flex items-center rounded-full bg-white/8 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-[#d4af37]">
                    What You Can Expect
                  </div>
                  <CardTitle className="text-2xl tracking-tight text-white sm:text-3xl">
                    Clear standards on every engagement
                  </CardTitle>
                </CardHeader>
                <CardContent className="px-6 pb-6 sm:px-8 sm:pb-8">
                  <ul className="space-y-4">
                    {clientExpectations.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#d4af37]" />
                        <span className="text-sm leading-7 text-white/85 sm:text-[15px]">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <p className="mt-8 text-sm leading-7 text-white/65">
                    Typical kickoff is within 3–5 working days after you accept a
                    proposal. Timelines for completion depend on scope and are agreed
                    upfront.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="section-space-tight bg-white">
          <div className="site-shell">
            <div className="site-shell-inner">
              <Card className="overflow-hidden rounded-[30px] border-0 bg-gradient-to-r from-[#0f172a] via-[#111c34] to-[#1e293b] text-white shadow-[0_26px_60px_rgba(15,23,42,0.18)]">
                <CardContent className="px-6 py-10 text-center sm:px-8 lg:px-12 lg:py-12">
                  <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                    Ready to get started?
                  </h2>
                  <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-white/72 sm:text-lg">
                    Book a free consultation and we&apos;ll walk you through the right
                    next step for your accounting, audit, or advisory needs.
                  </p>
                  <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                    <Link href={PRIMARY_CTA_HREF}>
                      <Button
                        size="lg"
                        className="h-12 rounded-xl px-6 text-sm font-semibold sm:px-7 sm:text-base"
                        style={{ backgroundColor: "#D4AF37", color: "#0F172A" }}
                      >
                        {PRIMARY_CTA_LABEL}
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                    <Link href="/services">
                      <Button
                        size="lg"
                        variant="outline"
                        className="h-12 rounded-xl border-white/25 bg-transparent px-6 text-sm font-semibold text-white hover:bg-white/10 sm:px-7 sm:text-base"
                      >
                        View Our Services
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
