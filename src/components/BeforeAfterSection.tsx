import { Clock, AlertCircle, Users } from 'lucide-react';

export default function BeforeAfterSection() {
  const pains = [
    {
      title: "Clientes esperando",
      description: "5 minutos de demora e o cliente já desistiu. Resultado? Pedido perdido, dinheiro perdido.",
      loss: "-R$ 2.400",
      lossDetail: "/mês em média",
      icon: <Clock className="w-6 h-6 text-red-600" />
    },
    {
      title: "Pedidos esquecidos",
      description: "Mensagens perdidas na enxurrada de conversas. Dinheiro que some sem você perceber.",
      loss: "-R$ 3.100",
      lossDetail: "/mês em média",
      icon: <AlertCircle className="w-6 h-6 text-red-600" />
    },
    {
      title: "Equipe sobrecarregada",
      description: "Funcionários anotando pedido errado, confundindo troco, esquecendo itens. Estresse puro.",
      loss: "-R$ 1.800",
      lossDetail: "/mês em retrabalho",
      icon: <Users className="w-6 h-6 text-red-600" />
    }
  ];

  return (
    <section className="py-24 px-6 bg-[#0A0A0A]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-black mb-6">
            Seu WhatsApp está <span className="text-red-500">custando dinheiro.</span>
          </h2>
          <p className="text-zinc-400 text-lg max-w-3xl mx-auto">
            Cada minuto de demora é um cliente que vai para o concorrente. Veja o prejuízo:
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {pains.map((pain, i) => (
            <div key={i} className="benefit-card flex flex-col">
              <div className="w-12 h-12 bg-red-600/10 rounded-xl flex items-center justify-center mb-8">
                {pain.icon}
              </div>
              <h4 className="text-xl font-black text-white mb-4">{pain.title}</h4>
              <p className="text-zinc-500 text-sm leading-relaxed mb-auto">
                {pain.description}
              </p>
              <div className="mt-12 pt-6 border-t border-white/5">
                 <span className="text-xl font-black text-red-500">{pain.loss}</span>
                 <span className="text-xs text-zinc-600 ml-1 font-bold">{pain.lossDetail}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
