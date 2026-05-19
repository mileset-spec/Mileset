import { motion } from 'motion/react';
import { 
  Monitor, 
  Smartphone, 
  Database, 
  Workflow, 
  Cloud 
} from 'lucide-react';

const services = [
  {
    title: 'Website Application',
    description: 'Custom, high-performance web applications built with modern frameworks to scale your digital presence.',
    icon: Monitor,
    color: 'text-cyan-400',
    bg: 'bg-white/5 text-cyan-400'
  },
  {
    title: 'SaaS Application',
    description: 'End-to-end SaaS platforms designed for user retention, multitenancy, and recurring revenue generation.',
    icon: Cloud,
    color: 'text-violet-400',
    bg: 'bg-white/5 text-violet-400'
  },
  {
    title: 'CRM Development',
    description: 'Tailored Customer Relationship Management systems integrated with AI to surface insights and save time.',
    icon: Database,
    color: 'text-fuchsia-400',
    bg: 'bg-white/5 text-fuchsia-400'
  },
  {
    title: 'Mobile Application',
    description: 'Native and cross-platform mobile experiences that bring your services directly to your users\' pockets.',
    icon: Smartphone,
    color: 'text-blue-400',
    bg: 'bg-white/5 text-blue-400'
  },
  {
    title: 'Workflow Automation',
    description: 'Intelligent AI-driven workflows that connect your disconnected tools and replace manual data entry.',
    icon: Workflow,
    color: 'text-cyan-400',
    bg: 'bg-white/5 text-cyan-400'
  }
];

export default function Services() {
  return (
    <section id="services" className="py-24 relative bg-[#050505]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Our Expertise</h2>
          <p className="text-white/50 text-lg">
            We deliver enterprise-grade software and intelligent systems designed to accelerate your growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group p-6 bg-white/5 border border-white/5 rounded-xl hover:bg-white/10 transition-all flex flex-col items-start"
            >
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 border border-white/5 ${service.bg}`}>
                <service.icon className={`w-6 h-6 ${service.color}`} />
              </div>
              <h3 className="text-lg font-bold mb-2 group-hover:text-white text-neutral-100 transition-colors">
                {service.title}
              </h3>
              <p className="text-white/50 text-sm leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
