import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Flame, ArrowRight, Play } from 'lucide-react';
import WhatsAppSimulator from './WhatsAppSimulator';

export default function InteractiveHero() {
  const [stats, setStats] = useState({ orders: 12847, restaurants: 347, revenue: 289450 });

  useEffect(() => {
    const interval = setInterval(() => {
      setStats((prev: { orders: number, restaurants: number, revenue: number }) => ({
        ...prev,
        orders: prev.orders + Math.floor(Math.random() * 2),
        revenue: prev.revenue + Math.floor(Math.random() * 40)
      }));
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative pt-32 pb-24 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        
        {/* Left Side: Aggressive Copy */}
        <div className="relative z-10">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#8E0B0B]/10 border border-[#8E0B0B]/20 text-[#8E0B0B] text-xs font-black uppercase tracking-widest mb-10"
          >
             <span className="w-2 h-2 rounded-full bg-[#8E0B0B] animate-pulse" />
             Alerta de Prejuízo Detectado
          </motion.div>

          <h1 className="text-6xl md:text-[90px] font-black leading-[0.85] mb-8 tracking-tighter">
            QUANTOS PEDIDOS <br/> 
            <span className="text-[#8E0B0B] italic">VOCÊ PERDEU</span> <br/>
            HOJE?
          </h1>

          <p className="text-zinc-400 text-xl md:text-2xl max-w-xl mb-12 font-medium leading-tight">
            Enquanto você demora para responder, seus clientes <span className="text-white">já está comprando do concorrente.</span>
          </p>

          <div className="flex flex-col sm:flex-row gap-5 mb-16">
            <button className="bg-[#8E0B0B] hover:bg-[#A50D0D] text-white font-black text-xl py-6 px-12 rounded-2xl flex items-center justify-center gap-3 transition-all hover:scale-105 shadow-[0_10px_40px_rgba(142,11,11,0.3)] group uppercase italic tracking-tighter">
               QUERO AUTOMATIZAR MEU DELIVERY
               <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-10 py-6 rounded-2xl font-bold bg-zinc-900 border border-white/5 hover:bg-zinc-800 transition-all text-white flex items-center justify-center gap-3">
               <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
                 <Play className="w-4 h-4 fill-white" />
               </div>
               Ver como funciona
            </button>
          </div>

          <div className="grid grid-cols-3 gap-8 py-8 border-t border-white/5">
             <div>
                <div className="text-2xl font-black text-white">{stats.orders.toLocaleString()}</div>
                <div className="text-[10px] uppercase font-bold text-zinc-500 tracking-widest">Pedidos Fechados</div>
             </div>
             <div className="border-x border-white/5 px-8">
                <div className="text-2xl font-black text-white">{stats.restaurants}</div>
                <div className="text-[10px] uppercase font-bold text-zinc-500 tracking-widest">Ativos Agora</div>
             </div>
             <div>
                <div className="text-2xl font-black text-white">R$ {Math.floor(stats.revenue/1000)}k</div>
                <div className="text-[10px] uppercase font-bold text-zinc-500 tracking-widest">Gerado Pela IA</div>
             </div>
          </div>
        </div>

        {/* Right Side: LIVE WHATSAPP SIMULATOR */}
        <div className="relative flex justify-center lg:justify-end">
             <div className="absolute inset-0 bg-[#8E0B0B]/10 blur-[150px] -z-10" />
             
             <motion.div 
               initial={{ opacity: 0, scale: 0.9, x: 50 }}
               animate={{ opacity: 1, scale: 1, x: 0 }}
               className="relative z-10"
             >
                <WhatsAppSimulator />
             </motion.div>

             {/* Dynamic elements around the simulator */}
             <motion.div 
               animate={{ y: [0, -15, 0] }}
               transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
               className="absolute -bottom-10 -left-5 bg-[#111] border border-white/10 p-6 rounded-3xl shadow-2xl z-20 flex items-center gap-4 hidden md:flex"
             >
                <div className="w-12 h-12 bg-[#8E0B0B] rounded-2xl flex items-center justify-center text-white">
                   <Flame className="w-6 h-6 fill-white" />
                </div>
                <div>
                   <div className="text-sm font-black text-white italic">Pico de Demanda</div>
                   <div className="text-[10px] text-zinc-500 uppercase font-black tracking-widest">IA assumindo 12 chats...</div>
                </div>
             </motion.div>
        </div>

      </div>
    </div>
  );
}
