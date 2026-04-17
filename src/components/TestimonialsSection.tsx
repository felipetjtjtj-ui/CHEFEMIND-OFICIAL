import { Star, MessageCircle } from 'lucide-react';

export default function TestimonialsSection() {
  const reviews = [
    { name: "Ricardo Silva", role: "Burger Night", text: "Depois do ChefeMind, nunca mais perdi pedido. A IA fecha tudo enquanto estou focando na chapa." },
    { name: "Ana Oliveira", role: "Bella Pizzaria", text: "Aumentei minhas vendas sem contratar ninguém. O sistema se pagou na primeira semana." }
  ];

  return (
    <section className="py-24 px-6 bg-black">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
           <h2 className="text-4xl md:text-5xl font-black mb-4 italic tracking-tighter">
             Quem usa, <span className="text-red-500">não vive sem</span>
           </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-20">
           {reviews.map((r, i) => (
             <div key={i} className="glass-card p-10 border-white/5 bg-zinc-900/40 relative group">
                <div className="flex gap-1 mb-6">
                   {[1,2,3,4,5].map(j => <Star key={j} className="w-4 h-4 text-red-600 fill-red-600" />)}
                </div>
                <p className="text-xl font-bold italic text-zinc-100 mb-8 leading-relaxed">"{r.text}"</p>
                <div className="flex items-center gap-4">
                   <div className="w-10 h-10 rounded-full bg-red-600/20" />
                   <div>
                      <div className="font-black text-white italic">{r.name}</div>
                      <div className="text-[10px] uppercase font-bold text-zinc-600">{r.role}</div>
                   </div>
                </div>
             </div>
           ))}
        </div>

        {/* Real Proof Visual */}
        <div className="max-w-2xl mx-auto glass-card p-4 border-white/10 bg-zinc-900 shadow-2xl overflow-hidden group">
           <div className="bg-black/50 p-4 border-b border-white/5 flex items-center justify-between">
              <div className="flex items-center gap-3">
                 <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                 <span className="text-[10px] font-black uppercase tracking-widest text-zinc-400">Prova Real de Conversão</span>
              </div>
              <MessageCircle className="w-4 h-4 text-zinc-600" />
           </div>
           
           <div className="p-8 space-y-6">
              <div className="flex justify-start">
                 <div className="bg-zinc-800 p-4 rounded-2xl rounded-tl-none text-xs max-w-[80%] text-zinc-300">
                    "Olá! Gostaria de uma Pizza G de Pepperoni."
                 </div>
              </div>
              <div className="flex justify-end">
                 <div className="bg-red-600/20 border border-red-500/20 p-4 rounded-2xl rounded-tr-none text-xs max-w-[80%] text-red-100 italic">
                    "Claro! Pizza G de Pepperoni saindo por R$ 54,90. Posso confirmar o endereço na Rua X?"
                 </div>
              </div>
              <div className="flex justify-start">
                 <div className="bg-zinc-800 p-4 rounded-2xl rounded-tl-none text-xs max-w-[80%] text-zinc-300">
                    "Sim, pode confirmar!"
                 </div>
              </div>
              <div className="flex justify-end">
                 <div className="bg-green-600/20 border border-green-500/20 p-4 rounded-2xl rounded-tr-none text-xs max-w-[80%] text-green-100 font-bold">
                    "Pedido #492 Confirmado! ✅ Enviado para a cozinha."
                 </div>
              </div>
           </div>
        </div>
      </div>
    </section>
  );
}
