import { Cpu, Twitter, Linkedin, Github, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#050505] border-t border-white/5 pt-20 pb-10 text-[11px] text-white/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-gradient-to-br from-cyan-400 to-violet-600 rounded-lg flex items-center justify-center font-bold text-xs italic text-white">MT</div>
              <span className="font-display font-bold text-xl tracking-tight uppercase text-white">moment<span className="text-cyan-400">tech</span>ai</span>
            </div>
            <p className="text-white/40 max-w-sm mb-8 leading-relaxed">
              Empowering businesses with intelligent applications, workflow automation, and cutting-edge digital experiences. Let's build the future together.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/40 hover:text-cyan-400 hover:bg-white/10 transition-colors">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/40 hover:text-cyan-400 hover:bg-white/10 transition-colors">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/40 hover:text-cyan-400 hover:bg-white/10 transition-colors">
                <Github className="w-4 h-4" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold text-white/60 mb-6 uppercase tracking-widest text-[10px]">Services</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-white/40 hover:text-cyan-400 transition-colors">Website Development</a></li>
              <li><a href="#" className="text-white/40 hover:text-cyan-400 transition-colors">SaaS Platforms</a></li>
              <li><a href="#" className="text-white/40 hover:text-cyan-400 transition-colors">CRM Development</a></li>
              <li><a href="#" className="text-white/40 hover:text-cyan-400 transition-colors">Mobile Applications</a></li>
              <li><a href="#" className="text-white/40 hover:text-cyan-400 transition-colors">Workflow Automation</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white/60 mb-6 uppercase tracking-widest text-[10px]">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-white/40">
                <Mail className="w-4 h-4" />
                <a href="mailto:hello@momenttechai.com" className="hover:text-cyan-400 transition-colors">hello@momenttechai.com</a>
              </li>
              <li className="text-white/40 leading-relaxed">
                123 AI Avenue, Tech District<br />
                San Francisco, CA 94107
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/30 text-[11px]">
            &copy; {new Date().getFullYear()} momenttechai agency. All rights reserved.
          </p>
          <div className="flex gap-6 text-[11px] text-white/40">
            <a href="#" className="hover:text-cyan-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-cyan-400 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
