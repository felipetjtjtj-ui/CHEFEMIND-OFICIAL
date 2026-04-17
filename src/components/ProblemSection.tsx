import { XCircle, TrendingDown, Clock, Users } from 'lucide-react';

export default function ProblemSection() {
  const problems = [
    { title: "Clientes sem resposta", icon: <Clock className="w-6 h-6 text-red-500" /> },
    { title: "Pedidos errados", icon: <XCircle className="w-6 h-6 text-red-500" /> },
    { title: "Funcionários lentos", icon: <Users className="w-6 h-6 text-red-500" /> },
    { title: "Dinheiro indo embora", icon: <TrendingDown className="w-6 h-6 text-red-500" /> }
  ];

  return (
    <section className="py-24 px-6 bg-[#0B0B0B] border-y border-white/5">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
           <h2 className="text-4xl md:text-6xl font-black mb-6 italic tracking-tighter">
             Seu WhatsApp virou um <span className="text-red-500">caos?</span>
           </h2>
           <p className="text-zinc-500 text-xl font-medium">Cada mensagem ignorada é um cliente perdido.</p>
        </div>

        <div className="grid md:grid-cols-4 gap-6 mb-16">
           {problems.map((p, i) => (
             <div key={i} className="glass-card p-10 border-white/5 bg-zinc-900/30 flex flex-col items-center text-center group hover:border-red-500/30 transition-all">
                <div className="w-16 h-16 rounded-2xl bg-black border border-white/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                   {p.icon}
                </div>
                <span className="text-lg font-bold text-white/90">{p.title}</span>
             </div>
           ))}
        </div>

        <div className="bg-red-600/5 border border-red-500/20 rounded-[2.5rem] p-12 text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 p-12 opacity-5">
               <TrendingDown className="w-64 h-64 text-red-600" />
            </div>
            <p className="text-2xl md:text-3xl font-black text-red-100 max-w-2xl mx-auto italic leading-tight">
              "Enquanto sua equipe se enrola, o faturamento do mês está escorrendo entre seus dedos. O atraso no atendimento é o maior câncer de um delivery."
            </p>
        </div>
      </div>
    </section>
  );
}
