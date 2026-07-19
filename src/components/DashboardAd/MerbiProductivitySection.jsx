import { motion } from "framer-motion";
import {
  Command,
  Layers3,
  MousePointerClick,
  Sparkles,
  Wand2,
  CalendarDays,
} from "lucide-react";

export default function MerbiProductivitySection() {
  return (
    <section className="bg-[#F5F1E9] px-6 py-24 text-[#06100C] md:px-10 lg:px-16">
      <div className="mx-auto max-w-[1500px]">
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
          className="max-w-5xl"
        >
          <h2 className="text-[clamp(4rem,8vw,9rem)] font-black leading-[0.86] tracking-[-0.1em]">
            Unmatched creative velocity
          </h2>

          <p className="mt-8 max-w-3xl text-xl leading-8 text-[#06100C]/68">
            Merbi gives brands a full-stack creative engine for websites,
            campaigns, visuals, content, and digital systems — built to move
            fast without making the work feel cheap, scattered, or generic.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-6 lg:grid-cols-[0.8fr_1.4fr]">
          <CreativeCommandCard />
          <CreativePlannerCard />
        </div>
      </div>
    </section>
  );
}

function CreativeCommandCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.75, ease: "easeOut" }}
      viewport={{ once: true }}
      className="relative min-h-[520px] overflow-hidden rounded-[2rem] border border-[#06100C]/10 bg-[#06100C] p-8 text-[#F9F3EA] shadow-2xl"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_55%_20%,rgba(255,106,0,.45),transparent_24%),radial-gradient(circle_at_20%_80%,rgba(217,255,138,.22),transparent_28%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(6,16,12,.15)_0%,rgba(6,16,12,.94)_72%)]" />
      <div className="absolute inset-0 opacity-[0.12] [background-image:linear-gradient(rgba(245,231,214,.3)_1px,transparent_1px),linear-gradient(90deg,rgba(245,231,214,.3)_1px,transparent_1px)] [background-size:46px_46px]" />

      <div className="relative z-10">
        <div className="mx-auto mt-16 max-w-md rounded-2xl border border-white/10 bg-black/45 p-4 shadow-2xl backdrop-blur-xl">
          <div className="mb-4 flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.06] px-4 py-3 text-sm text-white/60">
            <MousePointerClick className="h-4 w-4 text-[#D9FF8A]" />
            <span>Run creative command...</span>
          </div>

          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.24em] text-white/35">
            Actions
          </p>

          <div className="space-y-2">
            {[
              ["Generate landing page concept", "L"],
              ["Build campaign asset set", "A"],
              ["Create product visual direction", "V"],
              ["Draft podcast content plan", "P"],
            ].map(([item, key], index) => (
              <div
                key={item}
                className={`flex items-center justify-between rounded-xl px-4 py-3 text-sm ${
                  index === 1
                    ? "bg-[#D9FF8A]/18 text-[#F9F3EA]"
                    : "bg-white/[0.04] text-white/50"
                }`}
              >
                <span>{item}</span>
                <span className="rounded-md border border-white/10 bg-white/[0.05] px-2 py-1 text-xs">
                  {key}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-8 right-8 z-10">
        <p className="text-xl font-semibold tracking-[-0.04em]">
          Creative command center.
          <span className="font-normal text-[#F9F3EA]/58">
            {" "}
            Move from idea to assets, pages, campaigns, and content systems
            without losing momentum.
          </span>
        </p>
      </div>
    </motion.div>
  );
}

function CreativePlannerCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.75, delay: 0.08, ease: "easeOut" }}
      viewport={{ once: true }}
      className="relative min-h-[520px] overflow-hidden rounded-[2rem] border border-[#06100C]/10 bg-[#06100C] p-8 text-[#F9F3EA] shadow-2xl"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_55%_20%,rgba(217,255,138,.35),transparent_26%),radial-gradient(circle_at_75%_30%,rgba(11,107,58,.42),transparent_34%),radial-gradient(circle_at_15%_80%,rgba(255,106,0,.22),transparent_30%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(6,16,12,.08)_0%,rgba(6,16,12,.94)_78%)]" />
      <div className="absolute inset-0 opacity-[0.1] [background-image:linear-gradient(rgba(245,231,214,.3)_1px,transparent_1px),linear-gradient(90deg,rgba(245,231,214,.3)_1px,transparent_1px)] [background-size:52px_52px]" />

      <div className="relative z-10 mx-auto mt-10 grid max-w-4xl grid-cols-1 gap-4 md:grid-cols-[1fr_0.8fr]">
        <div className="rounded-[1.6rem] border border-white/10 bg-white/[0.08] p-5 shadow-2xl backdrop-blur-xl">
          <div className="mb-5 flex items-center justify-between">
            <p className="text-sm font-semibold text-white/70">
              Creative Pipeline
            </p>
            <CalendarDays className="h-5 w-5 text-[#D9FF8A]" />
          </div>

          <div className="space-y-3">
            {[
              ["High", "Homepage rebuild", "Website"],
              ["Medium", "3D product hero visuals", "Visuals"],
              ["Medium", "Meta ad creative set", "Ads"],
              ["Low", "Podcast episode clips", "Content"],
            ].map(([priority, task, tag], index) => (
              <div
                key={task}
                className={`rounded-2xl border border-white/10 p-4 ${
                  index === 0
                    ? "bg-[#F5F1E9] text-[#06100C]"
                    : "bg-black/25 text-[#F9F3EA]"
                }`}
              >
                <div className="mb-3 flex items-center justify-between">
                  <span
                    className={`rounded-full px-2 py-1 text-xs ${
                      index === 0
                        ? "bg-[#FF6A00]/15 text-[#FF6A00]"
                        : "bg-white/10 text-white/50"
                    }`}
                  >
                    {priority}
                  </span>

                  <span className="text-xs opacity-50">{tag}</span>
                </div>

                <p className="font-semibold">{task}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          <MiniCard
            icon={Layers3}
            title="Brand systems"
            text="Visual rules, reusable sections, and campaign assets that stay consistent."
          />

          <MiniCard
            icon={Wand2}
            title="AI-assisted production"
            text="Faster creative directions, copy drafts, content variations, and asset planning."
          />

          <MiniCard
            icon={Command}
            title="Launch workflows"
            text="Clear milestones from strategy to design, build, revision, and delivery."
          />
        </div>
      </div>

      <div className="absolute bottom-8 left-8 right-8 z-10">
        <p className="text-xl font-semibold tracking-[-0.04em]">
          Creative planner.
          <span className="font-normal text-[#F9F3EA]/58">
            {" "}
            Keep websites, campaigns, visuals, podcasts, and content moving in
            one connected production flow.
          </span>
        </p>
      </div>
    </motion.div>
  );
}

function MiniCard({ icon: Icon, title, text }) {
  return (
    <div className="rounded-[1.4rem] border border-white/10 bg-white/[0.07] p-5 backdrop-blur-xl">
      <div className="mb-8 flex items-center justify-between">
        <Icon className="h-5 w-5 text-[#D9FF8A]" />
        <Sparkles className="h-4 w-4 text-[#FF6A00]" />
      </div>

      <p className="text-lg font-semibold tracking-[-0.04em]">{title}</p>
      <p className="mt-2 text-sm leading-6 text-white/52">{text}</p>
    </div>
  );
}