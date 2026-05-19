import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';

const projects = [
  {
    title: 'Nexus CRM AI',
    category: 'CRM Application',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop',
    link: '#'
  },
  {
    title: 'FlowState',
    category: 'Workflow Automation',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop',
    link: '#'
  },
  {
    title: 'Omni Analytics',
    category: 'SaaS Platform',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop',
    link: '#'
  },
  {
    title: 'HealthTrack Pro',
    category: 'Mobile Application',
    image: 'https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?q=80&w=2070&auto=format&fit=crop',
    link: '#'
  }
];

export default function Demo() {
  return (
    <section id="demo" className="py-24 relative overflow-hidden bg-[#111] border border-white/5 rounded-[3rem] mx-4 sm:mx-6 lg:mx-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Featured Work</h2>
            <p className="text-white/50 text-lg">
              Explore how we've helped ambitious brands transform their operations with AI-powered applications.
            </p>
          </div>
          <button className="px-6 py-3 rounded-xl border border-white/20 text-white font-medium hover:bg-cyan-400 hover:text-black hover:border-cyan-400 transition-all whitespace-nowrap">
            View All Projects
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative cursor-pointer"
            >
              <div className="overflow-hidden rounded-2xl aspect-video bg-white/5 mb-6 relative border border-white/5">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover grayscale-[50%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-[#050505]/20 group-hover:bg-transparent transition-colors duration-500" />
                <div className="absolute top-4 right-4 w-12 h-12 bg-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-xl">
                  <ArrowUpRight className="w-6 h-6 text-neutral-950" />
                </div>
              </div>
              <div>
                <p className="text-[10px] text-cyan-400 font-bold mb-2 uppercase tracking-wide">{project.category}</p>
                <h3 className="text-2xl font-bold text-white group-hover:text-cyan-300 transition-colors">{project.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
