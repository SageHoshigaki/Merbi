import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function WebDesignCampaignHero() {
  return (
    <section className="relative overflow-hidden bg-[#75AEEB] text-white">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="/images/color-building-campaign.jpg"
          alt="Colorful building featuring a custom digital campaign"
          loading="eager"
          fetchPriority="high"
          decoding="async"
          className="h-full w-full object-cover object-center"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-[#4C8DD7]/95 via-[#4C8DD7]/72 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#08251A]/25 via-transparent to-white/5" />
      </div>

      <div className="relative mx-auto min-h-[640px] max-w-[1600px] px-6 py-24 md:px-10 lg:px-16">
        <div className="grid min-h-[480px] items-center gap-14 lg:grid-cols-[0.82fr_1.18fr]">
          {/* Left copy */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, ease: "easeOut" }}
            viewport={{ once: true }}
            className="relative z-20 max-w-[650px]"
          >
            <p className="mb-6 text-xs font-semibold uppercase tracking-[0.3em] text-white/75">
              Tailored web design
            </p>

            <h2 className="text-5xl font-medium leading-[0.96] tracking-[-0.06em] md:text-6xl lg:text-7xl">
              Build a digital presence with a{" "}
              <span className="font-serif italic text-[#D9FF8A]">
                visual world made for your brand
              </span>
            </h2>

            <p className="mt-7 max-w-xl text-base leading-7 text-white/78 md:text-lg md:leading-8">
              We combine strategy, UX, interface design, responsive development,
              motion, and brand direction to create websites that feel distinct
              at every touchpoint.
            </p>

            <Button className="mt-9 rounded-full bg-[#D9FF8A] px-7 py-6 text-sm font-semibold text-[#08251A] hover:bg-[#FF6A00] hover:text-white">
              Start a Web Design Project
              <ArrowUpRight className="ml-2 h-4 w-4" />
            </Button>
          </motion.div>

          {/* Building billboard treatment */}
          <motion.div
            initial={{ opacity: 0, x: 45, scale: 0.97 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.85, delay: 0.12, ease: "easeOut" }}
            viewport={{ once: true }}
            className="relative hidden min-h-[500px] lg:block"
          >
            <div className="absolute right-[4%] top-[7%] w-[58%] origin-bottom-left -skew-y-[1.5deg] overflow-hidden rounded-[5px] border border-white/10 bg-[#08251A] shadow-[0_40px_100px_rgba(8,37,26,0.35)]">
              <div className="relative aspect-[0.86] overflow-hidden bg-[#08251A] p-7">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_20%,rgba(217,255,138,.28),transparent_30%),radial-gradient(circle_at_20%_80%,rgba(255,106,0,.35),transparent_38%)]" />

                <div className="relative flex h-full flex-col justify-between">
                  <div className="flex items-center justify-between">
                    <p className="text-2xl font-semibold tracking-[-0.05em]">
                      MERBI
                    </p>

                    <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-white/45">
                      Digital systems
                    </p>
                  </div>

                  <div>
                    <p className="max-w-[420px] text-5xl font-medium leading-[0.9] tracking-[-0.07em] text-[#D9FF8A] xl:text-6xl">
                      Built around your business.
                    </p>

                    <p className="mt-5 max-w-[330px] text-sm leading-6 text-white/62">
                      Strategy, interface, development, and motion working as one
                      connected experience.
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div className="rounded-[22px] bg-[#D9FF8A] p-5 text-[#08251A]">
                      <p className="text-[10px] font-semibold uppercase tracking-[0.22em] opacity-55">
                        UX direction
                      </p>
                      <p className="mt-8 text-3xl font-medium tracking-[-0.06em]">
                        Clear paths
                      </p>
                    </div>

                    <div className="rounded-[22px] bg-[#FF6A00] p-5 text-white">
                      <p className="text-[10px] font-semibold uppercase tracking-[0.22em] opacity-65">
                        Visual system
                      </p>
                      <p className="mt-8 text-3xl font-medium tracking-[-0.06em]">
                        Distinct identity
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute bottom-[6%] right-[49%] rounded-full border border-white/20 bg-black/20 px-5 py-3 text-xs font-semibold uppercase tracking-[0.22em] text-white/70 backdrop-blur-xl">
              Strategy → UX → UI → Build
            </div>
          </motion.div>
        </div>
      </div>

      {/* Mobile billboard */}
      <motion.div
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.75, ease: "easeOut" }}
        viewport={{ once: true }}
        className="relative mx-6 mb-10 overflow-hidden rounded-[24px] bg-[#08251A] p-6 shadow-2xl lg:hidden"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_15%,rgba(217,255,138,.25),transparent_30%),radial-gradient(circle_at_15%_85%,rgba(255,106,0,.35),transparent_40%)]" />

        <div className="relative">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-white/45">
            Merbi digital systems
          </p>

          <h3 className="mt-8 max-w-[360px] text-5xl font-medium leading-[0.92] tracking-[-0.07em] text-[#D9FF8A]">
            Built around your business.
          </h3>

          <p className="mt-5 max-w-sm text-sm leading-6 text-white/60">
            Strategy, UX, interface design, responsive development, and motion
            working as one system.
          </p>
        </div>
      </motion.div>
    </section>
  );
}