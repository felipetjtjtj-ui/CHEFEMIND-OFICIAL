import { Check, ShieldCheck, Zap } from 'lucide-react';

export default function PricingComparison() {
  return (
    <section className="py-32 px-6 bg-black border-y border-white/5 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] bg-[radial-gradient(circle_at_center,_rgba(142,11,11,0.03)_0%,_transparent_70%)] pointer-events-none" />

      <div className="max-w-6xl mx-auto text-center mb-24 relative z-10">
        <h2 className="text-4xl md:text-7xl font-black mb-8 italic tracking-tighter">
          Mais barato que <span className="text-red-600">um funcionário</span>
        </h2>
        <p className="text-zinc-500 font-medium max-w-2xl mx-auto text-lg leading-relaxed">
          Tenha um atendente de elite trabalhando 24h por dia, sem feriados, sem erros e focado 100% em vender.
        </p>
      </div>

      <div className="max-w-xl mx-auto relative z-10">
        <div className="glass-card p-12 bg-zinc-950 border-red-500/20 shadow-[0_0_100px_rgba(142,11,11,0.15)] relative overflow-hidden group hover:border-red-500/40 transition-all duration-500">
            
            {/* Best Choice Ribbon */}
            <div className="absolute top-8 -right-12 bg-red-600 text-white px-12 py-1 rotate-45 text-[10px] font-black uppercase tracking-widest shadow-xl italic">
               MAIS POPULAR
            </div>
            
            <div className="text-sm font-bold text-red-500 uppercase tracking-[0.4em] mb-10 italic flex items-center gap-2">
               <Zap size={14} fill="currentColor" /> Licença Profissional AI
            </div>
            
            <div className="flex items-center gap-3 mb-6">
               <span className="text-zinc-700 text-2xl font-black italic line-through">R$ 997</span>
               <div className="bg-green-500/10 text-green-500 px-3 py-1 rounded-lg text-[10px] font-black uppercase">50% OFF HOJE</div>
            </div>

            <div className="flex items-baseline gap-3 mb-4">
               <span className="text-8xl font-black text-white italic tracking-tighter">R$ 497</span>
               <div className="text-left">
                  <div className="text-2xl font-bold text-zinc-600 italic leading-none">/mês</div>
                  <div className="text-[10px] text-zinc-400 font-black uppercase mt-1 tracking-widest">+ 1% DAS VENDAS</div>
               </div>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 mb-12 text-zinc-400 text-xs italic leading-relaxed group-hover:bg-white/[0.08] transition-colors">
               🚀 "Investimento inteligente: Custa menos de 10% de um salário mínimo para delegar todo o estresse do seu delivery."
            </div>

            <ul className="space-y-6 text-left mb-12">
               {[
                 "Vendas Automáticas no WhatsApp",
                 "Gestão de Pedidos (Dashboard Real)",
                 "Chave PIX Automática Dinâmica",
                 "Suporte Prioritário 24/7",
                 "Relatórios de Performance Semanais",
                 "Integração com Cardápio Digital"
               ].map((item, i) => (
                 <li key={i} className="flex gap-4 items-center group/item">
                    <div className="w-5 h-5 bg-green-500/20 rounded-full flex items-center justify-center shrink-0 group-hover/item:scale-110 transition-transform">
                       <Check className="text-green-500 w-3 h-3 stroke-[4px]" />
                    </div>
                    <span className="text-sm font-bold text-zinc-200 italic">{item}</span>
                 </li>
               ))}
            </ul>

            <button className="w-full bg-red-600 hover:bg-red-500 text-white font-black py-7 rounded-2xl transition-all shadow-[0_15px_40px_rgba(142,11,11,0.3)] hover:scale-[1.02] active:scale-95 uppercase italic tracking-tighter text-2xl flex items-center justify-center gap-4 group/btn overflow-hidden relative">
                COMEÇAR AGORA
                <ShieldCheck className="w-8 h-8 opacity-20 group-hover/btn:opacity-100 transition-opacity" />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
            </button>
        </div>
        
        <div className="mt-12 flex flex-col items-center gap-6">
           <div className="flex -space-x-4">
              {[1,2,3,4].map(i => (
                <div key={i} className="w-10 h-10 rounded-full border-2 border-black bg-zinc-800 flex items-center justify-center overflow-hidden">
                   <div className="w-full h-full bg-gradient-to-br from-zinc-700 to-zinc-900" />
                </div>
              ))}
              <div className="w-10 h-10 rounded-full border-2 border-black bg-zinc-900 flex items-center justify-center text-[10px] font-black text-red-500">
                +12k
              </div>
           </div>
           <p className="text-zinc-700 text-[10px] uppercase font-black tracking-[0.4em] italic">
             +12.000 Restaurantes já migraram para a inteligência artificial
           </p>
        </div>
      </div>
    </section>
  );
}
