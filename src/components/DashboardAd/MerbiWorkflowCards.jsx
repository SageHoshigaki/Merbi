import { motion } from "framer-motion";
import {
  Bell,
  CalendarClock,
  CheckCircle2,
  Clock3,
  MessageSquare,
  Sparkles,
  Users,
} from "lucide-react";

export default function MerbiWorkflowCards() {
  return (
    <section className="bg-[#F5F1E9] px-6 pb-28 text-[#06100C] md:px-10 lg:px-16">
      <div className="mx-auto grid max-w-[1500px] gap-6 lg:grid-cols-[1.35fr_.75fr]">
        <SchedulingCard />
        <AlertsCard />
      </div>
    </section>
  );
}

function SchedulingCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.75, ease: "easeOut" }}
      viewport={{ once: true }}
      className="relative min-h-[520px] overflow-hidden rounded-[2rem] border border-[#06100C]/10 bg-[#06100C] p-8 text-[#F9F3EA] shadow-2xl"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_55%_20%,rgba(217,255,138,.28),transparent_24%),radial-gradient(circle_at_78%_34%,rgba(255,106,0,.20),transparent_30%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(6,16,12,.08)_0%,rgba(6,16,12,.95)_82%)]" />

      <div className="absolute inset-0 opacity-[0.12] [background-image:linear-gradient(rgba(245,231,214,.28)_1px,transparent_1px),linear-gradient(90deg,rgba(245,231,214,.28)_1px,transparent_1px)] [background-size:58px_58px]" />

      <div className="relative z-10 mx-auto mt-6 grid max-w-5xl gap-4 md:grid-cols-[0.75fr_1fr]">
        <div className="rounded-[1.7rem] border border-white/10 bg-[#F5F1E9] p-6 text-[#06100C] shadow-2xl">
          <div className="mb-8 flex items-center justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#06100C]/45">
                Production meeting
              </p>
              <h3 className="mt-2 text-2xl font-semibold tracking-[-0.05em]">
                Creative sprint
              </h3>
            </div>

            <CalendarClock className="h-6 w-6 text-[#006B3A]" />
          </div>

          <div className="rounded-2xl border border-[#06100C]/10 bg-white p-4">
            <p className="text-sm text-[#06100C]/50">03:00 – 04:00 pm</p>
            <p className="mt-1 text-sm text-[#06100C]/50">
              Weekly on Monday
            </p>

            <div className="my-4 h-px bg-[#06100C]/10" />

            <p className="text-base font-medium leading-6">
              Review website progress, ad concepts, podcast clips, and launch
              blockers.
            </p>

            <button className="mt-5 rounded-full bg-[#D9FF8A] px-4 py-2 text-sm font-semibold text-[#06100C]">
              Join Review
            </button>
          </div>

          <div className="mt-5 space-y-3 text-sm text-[#06100C]/55">
            <div className="flex items-center gap-2">
              <Clock3 className="h-4 w-4" />
              10 minutes before
            </div>
            <div className="flex items-center gap-2">
              <Users className="h-4 w-4" />
              Strategy, design, development
            </div>
          </div>
        </div>

        <div className="relative hidden min-h-[330px] md:block">
          <TimelineItem
            className="left-[6%] top-[6%]"
            time="09:00"
            title="Brand direction"
            muted
          />
          <TimelineItem
            className="right-[8%] top-[32%]"
            time="11:30 – 01:00"
            title="Build homepage sections"
          />
          <TimelineItem
            className="left-[22%] bottom-[8%]"
            time="03:00 – 04:00"
            title="Creative sprint review"
            muted
          />
        </div>
      </div>

      <div className="absolute bottom-8 left-8 right-8 z-10">
        <p className="text-xl font-semibold tracking-[-0.04em]">
          Production scheduling.
          <span className="font-normal text-[#F9F3EA]/58">
            {" "}
            Turn websites, visuals, ads, and content into focused creative
            sprints with clear review cycles.
          </span>
        </p>
      </div>
    </motion.div>
  );
}

function TimelineItem({ className = "", time, title, muted }) {
  return (
    <div
      className={`absolute ${className} w-[250px] rounded-2xl border border-white/10 bg-white/[0.08] p-5 backdrop-blur-xl ${
        muted ? "opacity-35" : ""
      }`}
    >
      <p className="text-sm text-white/45">{time}</p>
      <p className="mt-2 text-lg font-semibold tracking-[-0.04em]">{title}</p>
      <div className="mt-4 flex -space-x-2">
        {[1, 2, 3].map((item) => (
          <div
            key={item}
            className="h-7 w-7 rounded-full border-2 border-[#06100C] bg-[#D9FF8A]"
          />
        ))}
      </div>
    </div>
  );
}

function AlertsCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.75, delay: 0.08, ease: "easeOut" }}
      viewport={{ once: true }}
      className="relative min-h-[520px] overflow-hidden rounded-[2rem] border border-[#06100C]/10 bg-[#06100C] p-8 text-[#F9F3EA] shadow-2xl"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_55%_42%,rgba(217,255,138,.34),transparent_18%),radial-gradient(circle_at_65%_42%,rgba(255,106,0,.35),transparent_26%),radial-gradient(circle_at_30%_25%,rgba(11,107,58,.45),transparent_32%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(6,16,12,.05)_0%,rgba(6,16,12,.94)_82%)]" />

      <div className="relative z-10 flex min-h-[330px] items-center justify-center">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
          className="absolute h-72 w-72 rounded-full border border-[#D9FF8A]/20 bg-[conic-gradient(from_90deg,rgba(217,255,138,.45),rgba(255,106,0,.42),rgba(11,107,58,.35),rgba(217,255,138,.45))] blur-[1px]"
        />

        <div className="absolute h-52 w-52 rounded-full bg-[#06100C] blur-xl" />

        <div className="relative flex h-28 w-28 items-center justify-center rounded-full border border-white/15 bg-[#06100C]/90 shadow-[0_0_80px_rgba(217,255,138,.3)] backdrop-blur-xl">
          <Bell className="h-10 w-10 text-[#F9F3EA]" />
          <span className="absolute right-5 top-4 rounded-full bg-[#FF6A00] px-2 py-1 text-xs font-bold text-white">
            26
          </span>
        </div>

        <FloatingAlert className="left-0 top-10" icon={CheckCircle2} text="Homepage approved" />
        <FloatingAlert className="right-0 top-24" icon={MessageSquare} text="Client feedback" />
        <FloatingAlert className="bottom-6 left-8" icon={Sparkles} text="New ad concept" />
      </div>

      <div className="absolute bottom-8 left-8 right-8 z-10">
        <p className="text-xl font-semibold tracking-[-0.04em]">
          Live creative alerts.
          <span className="font-normal text-[#F9F3EA]/58">
            {" "}
            Keep teams aligned when designs are approved, assets are ready,
            edits come in, or launch tasks need attention.
          </span>
        </p>
      </div>
    </motion.div>
  );
}

function FloatingAlert({ className = "", icon: Icon, text }) {
  return (
    <div
      className={`absolute ${className} hidden rounded-2xl border border-white/10 bg-white/[0.08] px-4 py-3 text-sm text-white/70 backdrop-blur-xl md:flex md:items-center md:gap-2`}
    >
      <Icon className="h-4 w-4 text-[#D9FF8A]" />
      {text}
    </div>
  );
}