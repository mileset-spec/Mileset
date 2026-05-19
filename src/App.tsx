/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Demo from './components/Demo';
import Pricing from './components/Pricing';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#050505] text-white overflow-x-hidden selection:bg-cyan-500/30 font-sans">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Demo />
        <Pricing />
      </main>
      <Footer />
    </div>
  );
}
