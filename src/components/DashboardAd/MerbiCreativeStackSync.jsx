import { motion } from "framer-motion";
import {
  ArrowRightLeft,
  CheckCircle2,
  Code2,
  FileImage,
  LineChart,
  Megaphone,
  Mic2,
} from "lucide-react";

const syncItems = [
  {
    icon: Code2,
    title: "Website build",
    status: "Landing page sections in progress",
    tag: "frontend",
  },
  {
    icon: FileImage,
    title: "Brand assets",
    status: "Hero visuals and campaign graphics ready",
    tag: "creative",
  },
  {
    icon: Megaphone,
    title: "Ad campaign",
    status: "Meta creative set prepared for launch",
    tag: "ads",
  },
  {
    icon: Mic2,
    title: "Podcast content",
    status: "Short-form clips queued for review",
    tag: "content",
  },
  {
    icon: LineChart,
    title: "Performance data",
    status: "Creative insights connected to next iteration",
    tag: "data",
  },
];

export default function MerbiCreativeStackSync() {
  return (
    <section className="relative overflow-hidden bg-[#06100C] px-6 py-28 text-[#F9F3EA] md:px-10 lg:px-16">
      {/* atmosphere */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_52%,rgba(255,106,0,.22),transparent_28%),radial-gradient(circle_at_72%_78%,rgba(217,255,138,.20),transparent_30%),radial-gradient(circle_at_82%_42%,rgba(11,107,58,.32),transparent_34%)]" />
      <div className="absolute inset-0 opacity-[0.08] [background-image:linear-gradient(rgba(245,231,214,.35)_1px,transparent_1px),linear-gradient(90deg,rgba(245,231,214,.35)_1px,transparent_1px)] [background-size:76px_76px]" />

      <div className="relative z-10 mx-auto max-w-[1500px]">
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, ease: "easeOut" }}
          viewport={{ once: true }}
          className="mx-auto max-w-5xl text-center"
        >
          <p className="mb-6 text-xs font-bold uppercase tracking-[0.38em] text-[#D9FF8A]/80">
            Creative stack sync
          </p>

          <h2 className="text-[clamp(4rem,8vw,8.5rem)] font-black leading-[0.86] tracking-[-0.1em]">
            Sync your brand, content, and campaigns. All ways.
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-[#F9F3EA]/62">
            Merbi connects the moving parts of creative production — websites,
            ads, visuals, podcasts, data, and launch workflows — so every asset
            supports the same business direction.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 34, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.85, delay: 0.12, ease: "easeOut" }}
          viewport={{ once: true }}
          className="relative mx-auto mt-20 max-w-5xl"
        >
          {/* glow border */}
          <div className="absolute -inset-1 rounded-[2.2rem] bg-[linear-gradient(135deg,rgba(255,106,0,.65),rgba(217,255,138,.65),rgba(11,107,58,.7))] blur-md" />

          <div className="relative overflow-hidden rounded-[2rem] border border-white/15 bg-[#0A0F0C] p-5 shadow-2xl">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_12%_0%,rgba(255,106,0,.25),transparent_26%),radial-gradient(circle_at_88%_100%,rgba(217,255,138,.20),transparent_30%)]" />

            {/* top bar */}
            <div className="relative z-10 mb-4 flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3">
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#D9FF8A] text-[#06100C]">
                  <ArrowRightLeft className="h-4 w-4" />
                </div>

                <div>
                  <p className="text-sm font-semibold">merbi/project-launch</p>
                  <p className="text-xs text-white/40">
                    brand system / website / ads / content
                  </p>
                </div>
              </div>

              <div className="hidden items-center gap-2 text-xs text-white/45 md:flex">
                <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1">
                  Strategy
                </span>
                <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1">
                  Production
                </span>
                <span className="rounded-full border border-[#D9FF8A]/20 bg-[#D9FF8A]/10 px-3 py-1 text-[#D9FF8A]">
                  Live Sync
                </span>
              </div>
            </div>

            {/* dashboard panel */}
            <div className="relative z-10 overflow-hidden rounded-[1.4rem] border border-white/10 bg-black/45">
              <div className="grid grid-cols-[0.65fr_1.35fr] border-b border-white/10 text-sm text-white/50">
                <div className="border-r border-white/10 p-4">Channels</div>
                <div className="p-4">Production queue</div>
              </div>

              <div className="grid min-h-[430px] grid-cols-1 md:grid-cols-[0.65fr_1.35fr]">
                {/* sidebar */}
                <div className="hidden border-r border-white/10 p-4 md:block">
                  {["Website", "Visuals", "Ads", "Podcast", "Analytics"].map(
                    (item, index) => (
                      <div
                        key={item}
                        className={`mb-2 rounded-xl px-4 py-3 text-sm ${
                          index === 0
                            ? "bg-[#D9FF8A] text-[#06100C]"
                            : "text-white/45 hover:bg-white/[0.04]"
                        }`}
                      >
                        {item}
                      </div>
                    )
                  )}
                </div>

                {/* rows */}
                <div className="p-4">
                  <div className="space-y-3">
                    {syncItems.map((item, index) => {
                      const Icon = item.icon;

                      return (
                        <motion.div
                          key={item.title}
                          initial={{ opacity: 0, x: -18 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{
                            duration: 0.5,
                            delay: 0.18 + index * 0.08,
                            ease: "easeOut",
                          }}
                          viewport={{ once: true }}
                          className="group grid gap-4 rounded-2xl border border-white/10 bg-white/[0.035] p-4 transition hover:bg-white/[0.06] md:grid-cols-[auto_1fr_auto]"
                        >
                          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/[0.06]">
                            <Icon className="h-5 w-5 text-[#D9FF8A]" />
                          </div>

                          <div>
                            <div className="flex flex-wrap items-center gap-2">
                              <h3 className="font-semibold tracking-[-0.03em]">
                                {item.title}
                              </h3>
                              <span className="rounded-full border border-white/10 bg-white/[0.04] px-2 py-1 text-xs text-white/35">
                                {item.tag}
                              </span>
                            </div>
                            <p className="mt-1 text-sm text-white/42">
                              {item.status}
                            </p>
                          </div>

                          <div className="flex items-center gap-2 text-sm text-[#D9FF8A]">
                            <CheckCircle2 className="h-4 w-4" />
                            Synced
                          </div>
                        </motion.div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>

            {/* bottom fade */}
            <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0A0F0C] to-transparent" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}