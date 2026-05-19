import { motion } from 'motion/react';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
      {/* Background gradients */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-[500px] pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl" />
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-violet-500/20 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-block px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-[10px] uppercase font-bold tracking-widest mb-8"
        >
          AI-Powered Digital Transformation
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-5xl md:text-7xl font-bold tracking-tight mb-8"
        >
          We build <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-violet-500 to-fuchsia-500">
            intelligent automation
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg md:text-xl text-white/50 max-w-2xl mx-auto mb-10"
        >
          momenttechai transforms businesses through cutting-edge SaaS, Web, Mobile applications, and robust AI integrations. We turn complex workflows into seamless automated systems.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#pricing"
            className="flex items-center gap-2 px-8 py-4 rounded-xl bg-cyan-500 text-black font-bold hover:shadow-[0_0_20px_rgba(34,211,238,0.4)] transition-all w-full sm:w-auto justify-center group"
          >
            Start Building
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#demo"
            className="flex items-center gap-2 px-8 py-4 rounded-xl bg-white/5 text-white font-bold border border-white/10 hover:bg-white/10 transition-colors w-full sm:w-auto justify-center"
          >
            View Case Studies
          </a>
        </motion.div>

        {/* Abstract UI mock or dashboard preview */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mt-20 relative mx-auto max-w-5xl rounded-2xl border border-white/10 bg-[#111] p-2 overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
        >
          <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent z-10" />
          <img 
            src="https://images.unsplash.com/photo-1618761714954-0b8cd0026356?q=80&w=2070&auto=format&fit=crop" 
            alt="AI Dashboard Preview" 
            className="w-full h-auto rounded-lg opacity-80 mix-blend-luminosity grayscale hover:grayscale-0 transition-all duration-1000"
          />
        </motion.div>
      </div>
    </section>
  );
}
