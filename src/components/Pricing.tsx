import { useState } from 'react';
import { motion } from 'motion/react';
import { Check } from 'lucide-react';

const categories = ['Website', 'SaaS', 'CRM', 'MobileApp', 'Workflow'];

const pricingData: Record<string, any> = {
  Website: [
    {
      tier: 'Starter',
      price: '$2,999',
      description: 'Perfect for local businesses establishing a digital presence.',
      features: ['5 Pages custom design', 'Responsive development', 'Basic SEO setup', 'Contact form integration', '1 month post-launch support']
    },
    {
      tier: 'Professional',
      price: '$5,999',
      description: 'Ideal for growing brands needing higher conversion rates.',
      features: ['Up to 15 Pages', 'Advanced animations', 'CMS integration', 'E-commerce setup (basic)', 'Performance optimization', '3 months support'],
      popular: true
    },
    {
      tier: 'Enterprise',
      price: 'Custom',
      description: 'Complex web platforms with deep integrations.',
      features: ['Unlimited scalable architecture', 'Headless CMS', 'Advanced AI chatbots', 'Custom backend APIs', '24/7 dedicated support']
    }
  ],
  SaaS: [
    {
      tier: 'MVP',
      price: '$14,999',
      description: 'Build your core product and test the market quickly.',
      features: ['Core functionality development', 'User authentication', 'Payment gateway setup', 'Basic admin dashboard', 'Cloud deployment']
    },
    {
      tier: 'Scale',
      price: '$34,999',
      description: 'Ready to scale your user base and add premium features.',
      features: ['Advanced role management', 'Analytics dashboard', 'Third-party integrations', 'Scalable microservices architecture', 'Automated testing suite'],
      popular: true
    },
    {
      tier: 'Enterprise',
      price: 'Custom',
      description: 'Full-scale SaaS platforms for high-volume operations.',
      features: ['Custom AI model integration', 'Multi-tenant architecture', 'Enterprise security compliance', 'Dedicated DevSecOps pipeline']
    }
  ],
  CRM: [
    {
      tier: 'Starter',
      price: '$9,999',
      description: 'Basic customer tracking and deal management.',
      features: ['Contact management', 'Sales pipeline tracking', 'Basic reporting', 'Email integration']
    },
    {
      tier: 'AI Powered',
      price: '$24,999',
      description: 'Intelligent insights and automated follow-ups.',
      features: ['Predictive lead scoring', 'Automated data entry via AI', 'Custom workflow builder', 'Advanced analytics', 'Third-party tool sync'],
      popular: true
    },
    {
      tier: 'Enterprise',
      price: 'Custom',
      description: 'Bespoke CRM solutions tailored to your unique operations.',
      features: ['Deep ERP integration', 'Custom ML models for forecasting', 'White-labeling options', 'On-premise deployment available']
    }
  ],
  MobileApp: [
    {
      tier: 'Starter',
      price: '$12,999',
      description: 'Cross-platform app for iOS and Android.',
      features: ['React Native / Flutter build', 'Standard UI/UX', 'API integration', 'Push notifications', 'App store submission']
    },
    {
      tier: 'Pro',
      price: '$29,999',
      description: 'High-performance app with custom native modules.',
      features: ['Custom animations', 'Offline mode capabilities', 'In-app purchases', 'Real-time chat/sockets', 'Advanced analytics'],
      popular: true
    },
    {
      tier: 'Enterprise',
      price: 'Custom',
      description: 'Complex mobile ecosystems with heavy integrations.',
      features: ['Native iOS (Swift) & Android (Kotlin)', 'Hardware/Bluetooth integrations', 'AR/VR features', 'Bank-level security']
    }
  ],
  Workflow: [
    {
      tier: 'Starter',
      price: '$4,999',
      description: 'Automate repetitive tasks and data entry.',
      features: ['Zapier/Make setup', 'Up to 5 custom workflows', 'Basic error handling', 'Notification alerts']
    },
    {
      tier: 'Intelligent',
      price: '$14,999',
      description: 'AI-driven workflow automation.',
      features: ['Custom API scripts', 'LLM integration for text processing', 'Document parsing (OCR/AI)', 'Up to 20 workflows', 'Analytics dashboard'],
      popular: true
    },
    {
      tier: 'Enterprise',
      price: 'Custom',
      description: 'Full organizational digital transformation.',
      features: ['Bespoke automation engine', 'Private LLM hosting', 'Enterprise-wide sync', 'Continuous optimization consulting']
    }
  ]
};

export default function Pricing() {
  const [activeTab, setActiveTab] = useState(categories[0]);

  return (
    <section id="pricing" className="py-24 relative bg-[#050505]">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-[600px] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Transparent Pricing</h2>
          <p className="text-white/50 text-lg">
            Investment required for high-quality, scalable digital products and AI solutions. Choose a category to see packages.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-16">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all ${
                activeTab === cat 
                  ? 'bg-cyan-500 text-black shadow-[0_0_20px_rgba(34,211,238,0.3)]' 
                  : 'bg-white/5 text-white/50 hover:bg-white/10 hover:text-cyan-400'
              }`}
            >
              {cat.replace('App', ' App')}
            </button>
          ))}
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricingData[activeTab].map((plan: any, index: number) => (
            <motion.div
              key={plan.tier}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className={`relative p-8 rounded-3xl backdrop-blur-sm border ${
                plan.popular 
                  ? 'bg-gradient-to-b from-cyan-900/40 to-[#050505] border-cyan-500/30' 
                  : 'bg-white/5 border-white/5'
              } flex flex-col`}
            >
              {plan.popular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 px-4 py-1 bg-cyan-500 text-black text-[10px] font-bold uppercase tracking-wider rounded-full">
                  Premium
                </div>
              )}
              
              <div className="mb-8">
                <h3 className={`text-[10px] font-bold mb-2 uppercase tracking-[0.2em] relative top-[-5px] ${plan.popular ? 'text-cyan-400' : 'text-neutral-300'}`}>{plan.tier}</h3>
                <div className="flex items-end gap-1 mb-4">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  {plan.price !== 'Custom' && <span className="text-white/30 text-sm mb-1">/project</span>}
                </div>
                <p className="text-white/50 text-[11px] h-8 leading-relaxed max-w-[200px]">{plan.description}</p>
              </div>

              <div className="flex-grow space-y-3 mb-8 border-t border-white/5 pt-6">
                {plan.features.map((feature: string, i: number) => (
                  <div key={i} className="flex items-start gap-3">
                    <Check className="w-4 h-4 text-cyan-400 shrink-0" />
                    <span className="text-[11px] text-white/70">{feature}</span>
                  </div>
                ))}
              </div>

              <button className={`w-full py-4 rounded-xl text-xs uppercase tracking-widest font-bold transition-all ${
                plan.popular
                  ? 'bg-cyan-500 text-black hover:bg-cyan-400 shadow-[0_0_20px_rgba(34,211,238,0.3)]'
                  : 'bg-white text-black hover:bg-cyan-400 hover:text-black'
              }`}>
                {plan.price === 'Custom' ? 'Contact Sales' : 'Get Started'}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
