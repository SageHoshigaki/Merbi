import { motion } from "framer-motion";
import {
  ArrowRight,
  CircleDollarSign,
  CreditCard,
  LineChart,
  ShieldCheck,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const floatingCards = [
  {
    label: "Capital Deployed",
    value: "$1.82M",
    icon: CircleDollarSign,
    className: "left-[52%] top-[24%]",
  },
  {
    label: "Repayment Health",
    value: "96%",
    icon: ShieldCheck,
    className: "right-[8%] top-[34%]",
  },
  {
    label: "Campaign Lift",
    value: "+31%",
    icon: LineChart,
    className: "left-[58%] bottom-[24%]",
  },
  {
    label: "Receivables",
    value: "$318K",
    icon: CreditCard,
    className: "right-[14%] bottom-[14%]",
  },
];

export default function MerbiDashboardHero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#050806] text-[#F9F3EA]">
      {/* Background atmosphere */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_46%,rgba(217,255,138,.22),transparent_28%),radial-gradient(circle_at_90%_30%,rgba(255,106,0,.18),transparent_24%),radial-gradient(circle_at_50%_100%,rgba(0,107,58,.30),transparent_36%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(5,8,6,1)_0%,rgba(5,8,6,.92)_38%,rgba(5,8,6,.55)_70%,rgba(5,8,6,.9)_100%)]" />

      {/* Subtle grid */}
      <div className="absolute inset-0 opacity-[0.08] [background-image:linear-gradient(rgba(249,243,234,.4)_1px,transparent_1px),linear-gradient(90deg,rgba(249,243,234,.4)_1px,transparent_1px)] [background-size:72px_72px]" />

      {/* Central capital beam */}
      <motion.div
        initial={{ opacity: 0, scaleY: 0.65 }}
        animate={{ opacity: 1, scaleY: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="absolute bottom-[-10%] left-[67%] top-[-10%] hidden w-[3px] origin-center rounded-full bg-[#D9FF8A] shadow-[0_0_24px_rgba(217,255,138,.95),0_0_90px_rgba(255,106,0,.45)] md:block"
      />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.75 }}
        transition={{ duration: 1.2, delay: 0.25 }}
        className="absolute bottom-[-12%] left-[61%] top-[8%] hidden w-[180px] rounded-full bg-[#D9FF8A]/10 blur-3xl md:block"
      />

      {/* Nav */}
      <header className="relative z-20 flex items-center justify-between px-6 py-7 md:px-10 lg:px-16">
        <div className="text-3xl font-black tracking-[-0.08em] text-[#FF6A00]">
          merbi
        </div>

        <nav className="hidden items-center gap-9 text-sm text-[#F9F3EA]/72 md:flex">
          <a href="#platform" className="hover:text-[#D9FF8A]">
            Platform
          </a>
          <a href="#capital" className="hover:text-[#D9FF8A]">
            Capital
          </a>
          <a href="#dashboard" className="hover:text-[#D9FF8A]">
            Dashboard
          </a>
          <a href="#investors" className="hover:text-[#D9FF8A]">
            Investors
          </a>
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <Button
            variant="outline"
            className="rounded-full border-white/15 bg-white/[0.03] px-6 text-[#F9F3EA] hover:bg-white/10"
          >
            Sign in
          </Button>
          <Button className="rounded-full bg-[#D9FF8A] px-6 font-semibold text-[#08251A] hover:bg-[#FF6A00] hover:text-white">
            Book Demo
          </Button>
        </div>
      </header>

      {/* Hero content */}
      <div className="relative z-10 flex min-h-[calc(100vh-96px)] items-center px-6 md:px-10 lg:px-16">
        <div className="max-w-3xl">
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65 }}
            className="mb-7 text-xs font-semibold uppercase tracking-[0.3em] text-[#D9FF8A]/80"
          >
            Merbi OS Dashboard
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.08 }}
            className="text-6xl font-semibold leading-[0.9] tracking-[-0.08em] md:text-8xl lg:text-9xl"
          >
            One platform to deploy capital, run growth, and track returns.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.16 }}
            className="mt-8 max-w-2xl text-lg leading-8 text-[#F9F3EA]/68"
          >
            Merbi connects funding, marketing execution, repayment tracking,
            client operations, and investor visibility inside one intelligent
            dashboard.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.24 }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <Button className="rounded-full bg-[#F5E7D6] px-8 py-6 font-semibold text-[#241F1D] shadow-[0_0_34px_rgba(255,106,0,.45)] hover:bg-[#D9FF8A]">
              See the Dashboard
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>

            <Button
              variant="outline"
              className="rounded-full border-white/15 bg-white/[0.04] px-8 py-6 text-[#F9F3EA] hover:bg-white/10"
            >
              View Operating Model
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Floating dashboard cards */}
      <div className="pointer-events-none absolute inset-0 z-10 hidden md:block">
        {floatingCards.map((card, index) => {
          const Icon = card.icon;

          return (
            <motion.div
              key={card.label}
              initial={{ opacity: 0, y: 24, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{
                duration: 0.7,
                delay: 0.45 + index * 0.12,
                ease: "easeOut",
              }}
              className={`absolute ${card.className} w-[220px] rounded-3xl border border-white/10 bg-white/[0.07] p-5 shadow-2xl backdrop-blur-xl`}
            >
              <div className="mb-8 flex items-center justify-between">
                <Icon className="h-5 w-5 text-[#D9FF8A]" />
                <span className="h-2 w-2 rounded-full bg-[#D9FF8A] shadow-[0_0_14px_rgba(217,255,138,.9)]" />
              </div>

              <p className="text-sm text-[#F9F3EA]/48">{card.label}</p>
              <p className="mt-2 text-3xl font-semibold tracking-[-0.05em] text-[#F9F3EA]">
                {card.value}
              </p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}