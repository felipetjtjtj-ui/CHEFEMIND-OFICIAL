import { useState } from 'react';
import { motion } from 'framer-motion';
import { TrendingDown, TrendingUp, AlertTriangle, Zap } from 'lucide-react';

export default function ProfitSimulator() {
  const [ordersPerDay, setOrdersPerDay] = useState(15);
  const avgOrderValue = 45;
  const missedRate = 0.3; // 30% missed due to delay

  const monthlyLoss = ordersPerDay * missedRate * avgOrderValue * 30;
  const annualGain = ordersPerDay * (1 + missedRate * 0.5) * avgOrderValue * 365; // Simulated growth

  return (
    <section className="py-24 px-6 bg-black border-y border-white/5 relative overflow-hidden">
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#8E0B0B]/10 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-600/10 border border-red-600/20 text-red-500 text-xs font-black uppercase tracking-widest mb-6"
          >
            <AlertTriangle size={14} /> Calculadora de Lucro Real
          </motion.div>
          <h2 className="text-4xl md:text-6xl font-black mb-6 italic tracking-tighter">
            Quanto dinheiro você está <span className="text-red-600">deixando na mesa?</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="glass-card p-10 bg-zinc-900/30 border-white/10">
            <h3 className="text-xl font-bold mb-10 italic">Simule seu movimento diário</h3>
            
            <div className="space-y-12">
              <div>
                <div className="flex justify-between items-end mb-6">
                  <span className="text-zinc-400 text-sm font-bold uppercase tracking-widest">Pedidos via WhatsApp / Dia</span>
                  <span className="text-4xl font-black text-white italic">{ordersPerDay}</span>
                </div>
                <input 
                  type="range" 
                  min="5" 
                  max="100" 
                  value={ordersPerDay}
                  onChange={(e) => setOrdersPerDay(parseInt(e.target.value))}
                  className="w-full"
                />
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div className="p-6 bg-black/40 rounded-2xl border border-white/5">
                   <div className="text-[10px] text-zinc-500 font-black uppercase mb-2">Ticket Médio</div>
                   <div className="text-xl font-bold italic text-white">R$ {avgOrderValue},00</div>
                </div>
                <div className="p-6 bg-black/40 rounded-2xl border border-white/5">
                   <div className="text-[10px] text-zinc-500 font-black uppercase mb-2">Perda por Atraso</div>
                   <div className="text-xl font-bold italic text-red-500">30%</div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid gap-6">
            <motion.div 
              key={`loss-${ordersPerDay}`}
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="glass-card p-10 border-red-500/20 bg-red-600/[0.02] relative overflow-hidden group hover:border-red-500/40 transition-colors"
            >
              <TrendingDown className="absolute -right-8 -bottom-8 w-32 h-32 text-red-600/10 group-hover:scale-110 transition-transform" />
              <div className="text-sm font-black text-red-500 uppercase tracking-widest mb-4 italic">Você está perdendo</div>
              <div className="text-5xl md:text-6xl font-black text-white italic transition-all">
                R$ {monthlyLoss.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                <span className="text-sm text-zinc-600 ml-2">/mês</span>
              </div>
              <p className="mt-6 text-zinc-500 text-sm leading-relaxed">
                Este valor é o que seus concorrentes estão faturando porque você não respondeu a tempo.
              </p>
            </motion.div>

            <motion.div 
              key={`gain-${ordersPerDay}`}
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.1 }}
              className="glass-card p-10 border-green-500/20 bg-green-500/[0.02] relative overflow-hidden group hover:border-green-500/40 transition-colors"
            >
              <TrendingUp className="absolute -right-8 -bottom-8 w-32 h-32 text-green-500/10 group-hover:scale-110 transition-transform" />
              <div className="text-sm font-black text-green-500 uppercase tracking-widest mb-4 italic">Com ChefeMind você ganha</div>
              <div className="text-5xl md:text-6xl font-black text-white italic">
                R$ {annualGain.toLocaleString('pt-BR', { maximumFractionDigits: 0 })}
                <span className="text-sm text-zinc-600 ml-2">/ano</span>
              </div>
              <p className="mt-6 text-zinc-500 text-sm leading-relaxed">
                Recupere suas vendas, automatize o processo e escale sem aumentar sua equipe.
              </p>
            </motion.div>
          </div>
        </div>

        <div className="mt-16 text-center">
           <button className="bg-white text-black font-black py-4 px-12 rounded-xl text-sm italic uppercase tracking-widest hover:bg-zinc-200 transition-all flex items-center justify-center gap-3 mx-auto shadow-xl">
              QUERO RECUPERAR MEU LUCRO AGORA <Zap size={16} fill="black" />
           </button>
        </div>
      </div>
    </section>
  );
}
