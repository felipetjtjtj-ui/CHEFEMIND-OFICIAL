import { CheckCircle2, Zap } from 'lucide-react';
import dashboardImg from '../assets/brand/dashboard_branded_v2.png';

export default function SolutionSection() {
  const benefits = [
    { title: "Responde automaticamente", desc: "IA treinada no seu cardápio, disponível 24h sem parar." },
    { title: "Fecha pedidos sozinho", desc: "Faz a venda completa e confirma o pagamento via PIX." },
    { title: "Envia para a cozinha", desc: "Integrado com sua impressora ou sistema de painel atual." },
    { title: "Organiza tudo agora", desc: "Gestão total de vendas e clientes em um dashboard único." }
  ];

  return (
    <section className="py-32 px-6 bg-black relative">
       <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,_rgba(239,68,68,0.05)_0%,_transparent_50%)]" />
       
       <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-24 items-center relative z-10">
          
          <div className="order-2 lg:order-1">
             <div className="glass-card p-4 border-white/5 bg-zinc-900/40 relative group">
                <img src={dashboardImg} alt="Dashboard Visão Geral" className="rounded-xl w-full h-auto opacity-70 group-hover:opacity-100 transition-opacity duration-700" />
                
                {/* Visual indicator of automation */}
                <div className="absolute inset-0 flex items-center justify-center">
                   <div className="w-24 h-24 rounded-full bg-red-600/20 border border-red-500/50 flex items-center justify-center animate-pulse">
                      <Zap className="w-10 h-10 text-red-500 fill-red-500" />
                   </div>
                </div>
             </div>
          </div>

          <div className="order-1 lg:order-2">
             <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-red-600/10 text-red-500 text-[10px] font-black uppercase tracking-[0.2em] mb-6">
                A Solução Definitiva
             </div>
             <h2 className="text-5xl md:text-6xl font-black mb-8 italic tracking-tighter leading-none">
               Conheça o ChefeMind: <br/>
               <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-zinc-500">O cérebro do seu delivery</span>
             </h2>

             <div className="grid sm:grid-cols-2 gap-8">
                {benefits.map((b, i) => (
                  <div key={i} className="space-y-3">
                     <div className="flex items-center gap-3">
                        <div className="w-6 h-6 rounded-md bg-green-500/20 flex items-center justify-center">
                           <CheckCircle2 className="w-4 h-4 text-green-500" />
                        </div>
                        <h4 className="font-bold text-white italic">{b.title}</h4>
                     </div>
                     <p className="text-zinc-500 text-sm leading-relaxed">{b.desc}</p>
                  </div>
                ))}
             </div>

             <button className="mt-12 bg-white text-black font-black py-4 px-12 rounded-xl flex items-center gap-3 hover:bg-zinc-200 transition-all uppercase italic text-sm">
                VER DEMONSTRAÇÃO COMPLETA
             </button>
          </div>

       </div>
    </section>
  );
}
