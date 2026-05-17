import { motion } from "motion/react";
import DotPattern from "./DotPattern";
import React from "react";

const FeatureCard = ({ icon: Icon, title, description, color, index }) => {
  const getGradient = (color) => {
    switch (color) {
      case "purple":
        return "border-purple-500/30 group-hover:border-purple-500/60 shadow-[0_0_15px_rgba(168,85,247,0.1)]";
      case "blue":
        return "border-blue-500/30 group-hover:border-blue-500/60 shadow-[0_0_15px_rgba(59,130,246,0.1)]";
      case "cyan":
        return "border-cyan-400/30 group-hover:border-cyan-400/60 shadow-[0_0_15px_rgba(6,182,212,0.1)]";
      case "pink":
        return "border-pink-500/30 group-hover:border-pink-500/60 shadow-[0_0_15px_rgba(236,72,153,0.1)]";
      default:
        return "border-white/10";
    }
  };

  const getIconStyles = (color) => {
    switch (color) {
      case "purple":
        return "bg-gradient-to-br from-purple-500/30 to-purple-500/5 text-purple-500 border-t border-l border-purple-500/60 border-r border-b border-white/10";
      case "blue":
        return "bg-gradient-to-br from-blue-500/30 to-blue-500/5 text-blue-500 border-t border-l border-blue-500/60 border-r border-b border-white/10";
      case "cyan":
        return "bg-gradient-to-br from-cyan-400/30 to-cyan-400/5 text-cyan-400 border-t border-l border-cyan-400/60 border-r border-b border-white/10";
      case "pink":
        return "bg-gradient-to-br from-pink-500/30 to-pink-500/5 text-pink-500 border-t border-l border-pink-500/60 border-r border-b border-white/10";
      default:
        return "bg-white/5 text-white border-white/10";
    }
  };

  const getLineColor = (color) => {
    switch (color) {
      case "purple":
        return "bg-purple-500";
      case "blue":
        return "bg-blue-500";
      case "cyan":
        return "bg-cyan-400";
      case "pink":
        return "bg-pink-500";
      default:
        return "bg-white";
    }
  };

  return (
    <React.Fragment className="transition-transform duration-300 hover:-translate-y-2">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: index * 0.1 }}
        className={`group relative overflow-hidden rounded-3xl border-2 ${getGradient(color)} bg-[#0B0D17]/50 p-8 backdrop-blur-xl transition-all duration-300 hover:translate-y-2`}
      >
        <div className="relative z-10 flex flex-col items-center text-center">
          {/* Icon Container */}
          <div
            className={`mb-6 flex h-20 w-20 items-center justify-center rounded-2xl ${getIconStyles(color)} transition-transform duration-300 group-hover:scale-110 shadow-lg`}
          >
            <Icon className="h-10 w-10" />
          </div>

          {/* Title */}
          <h3 className="mb-4 font-display text-2xl font-bold tracking-tight text-white">
            {title}
          </h3>

          {/* Decorative Line */}
          <div
            className={`mb-6 h-1 w-12 rounded-full ${getLineColor(color)} opacity-50`}
          />

          {/* Description */}
          <p className="mb-8 text-center text-lg leading-relaxed text-slate-400">
            {description}
          </p>
        </div>

        {/* Grid Pattern at Bottom - Wave style */}
        <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-24 overflow-hidden">
          <div className="absolute -bottom-4 -left-4 opacity-30 transition-opacity group-hover:opacity-60">
            <DotPattern color={color} className="scale-125" />
          </div>
          <div className="absolute -bottom-4 -right-4 opacity-30 transition-opacity group-hover:opacity-60 rotate-180">
            <DotPattern color={color} className="scale-125" />
          </div>
        </div>
      </motion.div>
    </React.Fragment>
  );
};

export default FeatureCard;
