import { X, Check } from 'lucide-react';

export default function TransformationSection() {
  const before = ["Bagunça total de mensagens", "Estresse com equipe", "Perda massiva de pedidos", "Cardápio desatualizado"];
  const after = ["Automação 24h por dia", "Organização impecável", "Aumento real nas vendas", "Gestão via Dashboard"];

  return (
    <section className="py-24 px-6 bg-black">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-black mb-4 italic tracking-tighter">
            De caos total para <span className="text-red-500">controle absoluto</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-px bg-white/5 rounded-[3rem] overflow-hidden border border-white/10">
          <div className="p-12 md:p-20 bg-zinc-950">
             <h4 className="text-red-500 font-black text-2xl mb-12 uppercase italic tracking-widest">Antes</h4>
             <ul className="space-y-8">
                {before.map((item, i) => (
                  <li key={i} className="flex gap-4 items-center">
                    <div className="w-8 h-8 rounded-full bg-red-600/10 flex items-center justify-center shrink-0">
                       <X className="w-4 h-4 text-red-500 mb-0.5" />
                    </div>
                    <span className="text-zinc-500 font-medium">{item}</span>
                  </li>
                ))}
             </ul>
          </div>

          <div className="p-12 md:p-20 bg-zinc-950 relative overflow-hidden">
             <div className="absolute inset-0 bg-red-600/5 pointer-events-none" />
             <h4 className="text-green-500 font-black text-2xl mb-12 uppercase italic tracking-widest">Depois</h4>
             <ul className="space-y-8 relative z-10">
                {after.map((item, i) => (
                  <li key={i} className="flex gap-4 items-center">
                    <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center shrink-0">
                       <Check className="w-4 h-4 text-green-500" />
                    </div>
                    <span className="text-zinc-100 font-bold italic">{item}</span>
                  </li>
                ))}
             </ul>
             
             {/* Abstract glow */}
             <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-red-600/10 rounded-full blur-[80px]" />
          </div>
        </div>
      </div>
    </section>
  );
}
