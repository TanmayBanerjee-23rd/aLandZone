import React from "react";
import { motion } from "motion/react";
import { GoPeople } from "react-icons/go";
import { BsRocketTakeoff } from "react-icons/bs";
import { HiMiniUserGroup } from "react-icons/hi2";
import { LuShieldCheck } from "react-icons/lu";
import { LuArrowRight } from "react-icons/lu";

import FeatureCard from "./FeatureCard";

const features = [
  {
    title: "Senior Engineers",
    description: "Top 5% vetted developers with real production experience",
    icon: GoPeople,
    color: "purple",
  },
  {
    title: "Fast Delivery",
    description: "Rapid execution with optimized workflows",
    icon: BsRocketTakeoff,
    color: "blue",
  },
  {
    title: "Scalable Teams",
    description: "Easily scale teams based on project needs",
    icon: HiMiniUserGroup,
    color: "cyan",
  },
  {
    title: "Secure by Design",
    description: "Security-first architecture and implementation",
    icon: LuShieldCheck,
    color: "pink",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="container mx-auto my-16 py-16 px-4 md:px-8 relative">
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] h-[600px] w-[600px] rounded-full bg-purple-600/20 blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] h-[600px] w-[600px] rounded-full bg-blue-600/20 blur-[120px]" />
        <div className="absolute top-[20%] right-[-5%] h-[400px] w-[400px] rounded-full bg-pink-600/10 blur-[100px]" />

        {/* Floating Decorative Circles */}
        <motion.div
          animate={{
            y: [0, -30, 0],
            x: [0, 20, 0],
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -top-20 -left-20 h-80 w-80 rounded-full border border-purple-800/60 bg-purple-800/5 backdrop-blur-[2px]"
        />

        <motion.div
          animate={{
            y: [0, 30, 0],
            x: [0, -20, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -bottom-32 -right-32 h-[400px] w-[400px] rounded-full border border-pink-800/40 bg-pink-800/5 backdrop-blur-[2px]"
        />
      </div>

      <div className="absolute top-10 right-10 h-40 w-40 opacity-20">
        <div className="grid grid-cols-6 gap-4">
          {[...Array(36)].map((_, i) => (
            <div key={i} className="h-1.5 w-1.5 rounded-full bg-white/40" />
          ))}
        </div>
      </div>

      <div className="absolute bottom-10 left-10 h-40 w-40 opacity-20">
        <div className="grid grid-cols-6 gap-4">
          {[...Array(36)].map((_, i) => (
            <div key={i} className="h-1.5 w-1.5 rounded-full bg-white/40" />
          ))}
        </div>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-24 lg:py-32">
        {/* Header Section */}
        <div className="flex flex-col items-center justify-center text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="group relative mb-8 flex items-center justify-center overflow-hidden rounded-2xl p-[1px]"
          >
            {/* Gradient Border Mix */}
            <div className="absolute inset-0 bg-gradient-to-r from-purple-800/40 via-cyan-400/40 to-purple-500/40" />

            {/* Shining Star Revolving */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute inset-[-200%] bg-[conic-gradient(from_0deg,transparent_75%,#22d3ee_80%,transparent_85%)]"
            />

            <div className="relative flex h-full w-full items-center justify-center rounded-2xl bg-[#030014]/90 py-2 px-12 backdrop-blur-sm">
              <span className="text-xs font-bold tracking-[0.2em] text-cyan-400 uppercase">
                Why Choose Us
              </span>
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-6 font-display text-5xl font-bold text-white tracking-tight md:text-7xl"
          >
            Why Companies{" "}
            <span className="bg-gradient-to-r from-purple-800 via-pink-500 to-cyan-400 bg-clip-text text-transparent">
              Choose Us
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="mb-8 max-w-2xl text-xl text-slate-400"
          >
            We deliver scalable, secure, and future-ready solutions.
          </motion.p>

          <motion.div
            initial={{ width: 0 }}
            animate={{ width: 140 }}
            transition={{ delay: 1, duration: 1, ease: "easeInOut" }}
            className="mb-20 h-1.5 rounded-full bg-gradient-to-r from-purple-800 to-cyan-400 opacity-50"
          />
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, idx) => (
            <FeatureCard key={"feature-" + idx} {...feature} index={idx} />
          ))}
        </div>

        {/* Footer CTA Section */}
        <div className="mt-24 flex flex-col items-center justify-center text-center">
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group relative mb-8 flex items-center gap-3 overflow-hidden rounded-2xl bg-gradient-to-r from-purple-800 via-pink-450 to-pink-500 px-10 py-5 font-display text-xl text-white font-bold transition-all hover:shadow-[0_0_30px_rgba(168,85,247,0.4)]"
          >
            <span>Start Your Project</span>
            <LuArrowRight className="h-6 w-6 transition-transform group-hover:translate-x-1" />
          </motion.button>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-lg text-slate-400"
          >
            Let's build something amazing together.
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
