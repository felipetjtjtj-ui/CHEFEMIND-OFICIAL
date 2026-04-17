import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, Video, MoreVertical, CheckCheck, Smile, Mic } from 'lucide-react';
import logoImg from '../assets/brand/logo.png';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'ai';
  time: string;
}

const scenario = [
  { sender: 'user', text: 'Boa noite! Queria ver o cardápio.' },
  { sender: 'ai', text: 'Olá! Sou seu atendente virtual ChefeMind. 😊 Aqui está o nosso cardápio de hoje:\n\n🍔 Burger Clássico - R$ 25\n🥓 Burger Bacon - R$ 32\n🍟 Batata G - R$ 18\n\nQual deles você gostaria?' },
  { sender: 'user', text: 'Vou querer 2 Burger Bacon e uma Batata G.' },
  { sender: 'ai', text: 'Excelente escolha! 🥓🍟\n\n2x Burger Bacon + 1x Batata G\nTotal: R$ 82,00\n\nComo você prefere pagar? (PIX ou Cartão na entrega)' },
  { sender: 'user', text: 'Pode ser PIX.' },
  { sender: 'ai', text: 'Perfeito! Gerando sua chave PIX... ⏳\n\nChave (CNPJ): 12.345.678/0001-99\n\nAssim que pagar, o pedido entra direto em nossa cozinha! ✅' },
  { sender: 'user', text: 'Pago!' },
  { sender: 'ai', text: 'Pagamento confirmado! 🚀 Seu pedido #7742 já está sendo preparado. Tempo estimado: 35 min.' },
];

export default function WhatsAppSimulator() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const stepRef = useRef(0);
  const timeoutRef = useRef<any>(null);

  const addNextMessage = () => {
    if (stepRef.current >= scenario.length) {
      // Loop: Wait 5s and restart
      timeoutRef.current = setTimeout(() => {
        setMessages([]);
        stepRef.current = 0;
        addNextMessage();
      }, 5000);
      return;
    }

    const step = scenario[stepRef.current];
    const delay = step.sender === 'ai' ? 2000 : 1500;

    // Phase 1: If AI, show typing indicator
    if (step.sender === 'ai') {
      setIsTyping(true);
      timeoutRef.current = setTimeout(() => {
        setIsTyping(false);
        postMessage(step);
      }, delay);
    } else {
      // Phase 2: User sends message
      timeoutRef.current = setTimeout(() => {
        postMessage(step);
      }, delay);
    }
  };

  const postMessage = (step: typeof scenario[0]) => {
    const newMessage: Message = {
      id: `${stepRef.current}-${Date.now()}`,
      text: step.text,
      sender: step.sender as 'user' | 'ai',
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages(prev => [...prev, newMessage]);
    stepRef.current += 1;
    addNextMessage();
  };

  useEffect(() => {
    addNextMessage();
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({
        top: scrollRef.current.scrollHeight,
        behavior: 'smooth'
      });
    }
  }, [messages, isTyping]);

  return (
    <div className="w-full max-w-[400px] h-[600px] bg-[#0B0B0B] rounded-[2.5rem] border-[8px] border-[#1A1A1A] overflow-hidden flex flex-col shadow-2xl relative">
      
      {/* Header */}
      <div className="bg-[#1A1A1A] p-4 flex items-center justify-between z-10">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-[#050505] p-1 border border-white/5 overflow-hidden">
             <img src={logoImg} alt="AI Logo" className="w-full h-full object-contain" />
          </div>
          <div>
            <div className="text-white text-sm font-bold flex items-center gap-2">
              ChefeMind AI
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            </div>
            <div className="text-zinc-500 text-[10px]">online agora</div>
          </div>
        </div>
        <div className="flex gap-4 text-zinc-400">
           <Video size={18} />
           <Phone size={18} />
           <MoreVertical size={18} />
        </div>
      </div>

      {/* Chat Area */}
      <div 
        ref={scrollRef}
        className="flex-1 p-4 overflow-y-auto space-y-4 relative"
        style={{ scrollBehavior: 'smooth' }}
      >
        {/* Abstract Background for texture */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png')] bg-repeat" />

        <AnimatePresence>
          {messages.map((m) => (
            <motion.div
              key={m.id}
              initial={{ opacity: 0, y: 15, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.3 }}
              className={`flex relative z-10 ${m.sender === 'ai' ? 'justify-start' : 'justify-end'}`}
            >
              <div className={`max-w-[85%] p-3 rounded-2xl text-[12px] shadow-lg relative ${
                m.sender === 'ai' 
                  ? 'bg-zinc-800 text-zinc-100 rounded-tl-none' 
                  : 'bg-[#8E0B0B] text-white rounded-tr-none'
              }`}>
                <div className="whitespace-pre-line leading-relaxed">{m.text}</div>
                <div className={`text-[9px] mt-1.5 flex justify-end items-center gap-1 ${m.sender === 'ai' ? 'text-zinc-500' : 'text-red-300'}`}>
                   {m.time}
                   {m.sender === 'user' && <CheckCheck size={12} className="stroke-[3px]" />}
                </div>
              </div>
            </motion.div>
          ))}

          {isTyping && (
            <motion.div
              key="typing"
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="flex justify-start relative z-10"
            >
               <div className="bg-zinc-800 px-4 py-3 rounded-2xl rounded-tl-none flex gap-1.5 items-center">
                  <span className="w-1.5 h-1.5 bg-zinc-600 rounded-full animate-bounce [animation-duration:0.6s]" />
                  <span className="w-1.5 h-1.5 bg-zinc-600 rounded-full animate-bounce [animation-duration:0.6s] [animation-delay:0.2s]" />
                  <span className="w-1.5 h-1.5 bg-zinc-600 rounded-full animate-bounce [animation-duration:0.6s] [animation-delay:0.4s]" />
               </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Footer / Input Area */}
      <div className="bg-[#121212] p-4 flex items-center gap-3 border-t border-white/5">
         <Smile size={20} className="text-zinc-500" />
         <div className="flex-1 bg-zinc-900 border border-white/5 rounded-full py-2.5 px-4 text-[11px] text-zinc-600 italic">
            Visualizando demonstração...
         </div>
         <Mic size={20} className="text-zinc-500" />
      </div>

    </div>
  );
}
