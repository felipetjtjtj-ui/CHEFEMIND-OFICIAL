import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';
import InteractiveHero from './components/InteractiveHero';
import ProblemSection from './components/ProblemSection';
import SolutionSection from './components/SolutionSection';
import TransformationSection from './components/TransformationSection';
import TestimonialsSection from './components/TestimonialsSection';
import PricingComparison from './components/PricingComparison';
import ProfitSimulator from './components/ProfitSimulator';
import MouseSwarm from './components/MouseSwarm';
import CustomCursor from './components/CustomCursor';
import logoImg from './assets/brand/logo.png';

function App() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="bg-[#050505] min-h-screen text-white font-sans selection:bg-[#8E0B0B]/30 selection:text-white cursor-none overflow-x-hidden bg-grid">
      <CustomCursor />
      <MouseSwarm />
      
      {/* Header */}
      <header className={`fixed top-0 left-0 w-full z-[1000] border-b transition-all duration-300 ${
        isScrolled ? 'bg-black/95 backdrop-blur-xl border-white/10 h-20 shadow-2xl' : 'bg-transparent border-transparent h-24'
      }`}>
        <div className="max-w-7xl mx-auto px-6 h-full flex justify-between items-center">
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
             <div className="w-12 h-12 bg-zinc-900 rounded-2xl flex items-center justify-center border border-white/5 shadow-2xl overflow-hidden p-1.5 hover:border-[#8E0B0B]/30 transition-colors">
                <img src={logoImg} alt="ChefeMind Logo" className="w-full h-full object-contain" />
             </div>
             <div className="flex flex-col">
                <span className="text-2xl font-black tracking-tighter italic leading-none">ChefeMind</span>
                <span className="text-[8px] font-black tracking-[0.4em] text-zinc-600 uppercase mt-1">Intelligence AI</span>
             </div>
          </div>
          
          <nav className="hidden md:flex items-center gap-12">
             <a href="#solucao" onClick={(e) => scrollToSection(e, 'solucao')} className="text-zinc-500 hover:text-white transition-colors text-xs font-black uppercase tracking-widest italic">Solução</a>
             <a href="#beneficios" onClick={(e) => scrollToSection(e, 'beneficios')} className="text-zinc-500 hover:text-white transition-colors text-xs font-black uppercase tracking-widest italic">Benefícios</a>
             <a href="#precos" onClick={(e) => scrollToSection(e, 'precos')} className="text-zinc-500 hover:text-white transition-colors text-xs font-black uppercase tracking-widest italic">Preços</a>
          </nav>

          <button className="bg-green-600 hover:bg-green-500 text-white px-8 py-3 rounded-full text-xs font-black uppercase tracking-widest transition-all shadow-[0_5px_20px_rgba(37,211,102,0.2)] hover:scale-105 active:scale-95">
             Falar no WhatsApp
          </button>
        </div>
      </header>

      <main>
        <div id="home"><InteractiveHero /></div>
        <div id="problemas"><ProblemSection /></div>
        <div id="solucao"><SolutionSection /></div>
        <div id="calculadora"><ProfitSimulator /></div>
        <div id="beneficios"><TransformationSection /></div>
        <div id="depoimentos"><TestimonialsSection /></div>
        <div id="precos"><PricingComparison /></div>
        
        {/* FINAL PUSH SECTION */}
        <section className="py-40 bg-black text-center relative overflow-hidden border-t border-white/5">
           <div className="absolute inset-0 bg-[#8E0B0B]/5 blur-[120px] pointer-events-none" />
           <div className="relative z-10 max-w-4xl mx-auto px-6">
              <h2 className="text-5xl md:text-[80px] font-black mb-10 italic tracking-tighter leading-[0.9]">
                VOCÊ VAI CONTINUAR <br/> <span className="text-[#8E0B0B]">PERDENDO PEDIDOS?</span>
              </h2>
              <p className="text-xl text-zinc-400 mb-16 font-medium max-w-2xl mx-auto">Ou vai colocar agora o ChefeMind para trabalhar e recuperar cada centavo do seu lucro?</p>
              
              <button 
                className="bg-[#8E0B0B] hover:bg-[#A50D0D] text-white font-black text-3xl py-12 px-24 rounded-[3rem] transition-all hover:scale-105 shadow-[0_20px_60px_rgba(142,11,11,0.5)] active:scale-95 uppercase italic tracking-tighter flex flex-col items-center gap-2 mx-auto overflow-hidden relative group"
                onClick={() => window.open('https://wa.me/seu-numero', '_blank')}
              >
                 <span className="relative z-10">FALAR NO WHATSAPP AGORA</span>
                 <span className="text-sm font-bold opacity-40 italic relative z-10 group-hover:opacity-100 transition-opacity">Garanta sua vaga hoje</span>
                 <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              </button>
              
              <div className="mt-16 flex items-center justify-center gap-3 text-zinc-600 text-[10px] font-black uppercase tracking-[0.4em]">
                 <span className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse" />
                 Especialistas AI online agora
              </div>
           </div>
        </section>
      </main>

      <footer className="py-24 bg-[#080808] border-t border-white/10 text-center relative z-10">
        <div className="flex justify-center items-center gap-3 mb-10 opacity-70 hover:opacity-100 transition-opacity cursor-default">
           <div className="w-10 h-10 bg-zinc-950 rounded-xl flex items-center justify-center border border-white/5 shadow-2xl p-1.5">
              <img src={logoImg} alt="Logo Footer" className="w-full h-full object-contain" />
           </div>
           <span className="text-2xl font-black tracking-tighter italic">ChefeMind</span>
        </div>
        <div className="flex flex-wrap justify-center gap-x-12 gap-y-6 mb-12 text-zinc-600 text-xs font-bold uppercase tracking-widest italic">
           <a href="#" onClick={(e) => scrollToSection(e, 'home')} className="hover:text-white transition-colors">Home</a>
           <a href="#" onClick={(e) => scrollToSection(e, 'solucao')} className="hover:text-white transition-colors">Produto</a>
           <a href="#" onClick={(e) => scrollToSection(e, 'depoimentos')} className="hover:text-white transition-colors">Depoimentos</a>
           <a href="#" className="hover:text-white transition-colors">Termos de Uso</a>
           <a href="#" className="hover:text-white transition-colors">Privacidade</a>
        </div>
        <p className="text-zinc-800 text-[10px] font-black uppercase tracking-[0.5em] mb-4">A Revolução Digital do seu Delivery</p>
        <p className="text-zinc-900 text-[9px] font-bold">© 2026 ChefeMind Intelligence AI. Todos os direitos reservados.</p>
      </footer>

      {/* STICKY WHATSAPP CTA */}
      <div className="fixed bottom-12 right-12 z-[1000]">
         <motion.button 
           whileHover={{ scale: 1.1, rotate: -2 }}
           whileTap={{ scale: 0.9 }}
           onClick={() => window.open('https://wa.me/seu-numero', '_blank')}
           className="bg-green-600 text-white px-10 py-6 rounded-full font-black text-sm uppercase tracking-widest shadow-[0_20px_50px_rgba(37,211,102,0.4)] flex items-center gap-4 group"
         >
           <div className="relative">
              <MessageCircle className="w-7 h-7 fill-white/20" />
              <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 border-2 border-green-600 rounded-full animate-bounce" />
           </div>
           Falar no WhatsApp
           <span className="bg-black/10 px-2 py-0.5 rounded-md text-[9px] group-hover:bg-black/20 transition-colors">LIVE</span>
         </motion.button>
      </div>

    </div>
  );
}

export default App;
