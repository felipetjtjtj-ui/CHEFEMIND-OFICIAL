import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Trophy, Zap, AlertCircle, TrendingUp } from 'lucide-react';

interface Achievement {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

export default function GamificationLayer() {
  const [achievements, setAchievements] = useState<Achievement[]>([]);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [unlockedIds, setUnlockedIds] = useState<string[]>([]);

  const achievementPool = [
    { id: 'chaos', title: 'Caos Detectado', description: 'Você sentiu a dor de perder um pedido.', icon: <AlertCircle className="text-red-500" /> },
    { id: 'insight', title: 'Visão de Lucro', description: 'Você agora sabe quanto está deixando na mesa.', icon: <TrendingUp className="text-green-500" /> },
    { id: 'control', title: 'Mestre da Automação', description: 'Você viu o futuro do seu delivery.', icon: <Zap className="text-blue-500" /> },
    { id: 'master', title: 'Pronto para o Próximo Nível', description: 'Desconto especial desbloqueado!', icon: <Trophy className="text-yellow-500" /> },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalScroll) * 100;
      setScrollProgress(progress);

      // Simple triggers for achievements based on scroll
      if (progress > 15 && !unlockedIds.includes('chaos')) unlock('chaos');
      if (progress > 45 && !unlockedIds.includes('insight')) unlock('insight');
      if (progress > 75 && !unlockedIds.includes('control')) unlock('control');
      if (progress > 95 && !unlockedIds.includes('master')) unlock('master');
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [unlockedIds]);

  const unlock = (id: string) => {
    const ach = achievementPool.find(a => a.id === id);
    if (ach) {
      setAchievements(prev => [...prev, ach]);
      setUnlockedIds(prev => [...prev, id]);
      
      // Play sound if possible (optional - let's stick to visual for now)
      setTimeout(() => {
        setAchievements(prev => prev.filter(a => a.id !== id));
      }, 5000);
    }
  };

  return (
    <>
      {/* Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-[2px] z-[1000] bg-zinc-900">
        <motion.div 
          className="h-full bg-gradient-to-r from-red-600 via-red-500 to-white shadow-[0_0_10px_#ef4444]"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Achievement Notifications */}
      <div className="fixed top-20 right-6 z-[1000] flex flex-col gap-4">
        <AnimatePresence>
          {achievements.map((ach) => (
            <motion.div
              key={ach.id}
              initial={{ opacity: 0, x: 50, scale: 0.9 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: 50, scale: 0.9 }}
              className="glass-card p-4 border-red-500/30 flex items-center gap-4 shadow-2xl min-w-[280px]"
            >
              <div className="w-10 h-10 rounded-full bg-zinc-900 flex items-center justify-center border border-white/10">
                {ach.icon}
              </div>
              <div>
                <div className="text-[10px] font-black uppercase tracking-widest text-zinc-500 mb-1">Conquista Desbloqueada</div>
                <div className="text-sm font-black text-white italic">{ach.title}</div>
                <div className="text-[10px] text-zinc-400">{ach.description}</div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Level / Status Indicator */}
      <div className="fixed bottom-10 left-6 z-[1000] hidden md:block">
        <div className="flex items-center gap-4 glass-card px-4 py-2 border-white/5 bg-black/40">
           <div className="w-8 h-8 rounded-lg bg-red-600 flex items-center justify-center font-black italic text-xs">
              {unlockedIds.length + 1}
           </div>
           <div>
              <div className="text-[8px] font-black text-zinc-500 uppercase tracking-widest">Nível de Insight</div>
              <div className="text-[10px] font-bold text-white">
                {unlockedIds.length === 0 && "Iniciante do Caos"}
                {unlockedIds.length === 1 && "Observador Atento"}
                {unlockedIds.length === 2 && "Estrategista de Lucro"}
                {unlockedIds.length === 3 && "Mestre da Automação"}
                {unlockedIds.length === 4 && "Lenda do Delivery"}
              </div>
           </div>
        </div>
      </div>
    </>
  );
}
