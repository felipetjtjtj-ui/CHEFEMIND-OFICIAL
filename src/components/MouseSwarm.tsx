import { useEffect, useRef } from 'react';

export default function MouseSwarm() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Particle[] = [];
    const mouse = { x: 0, y: 0, active: false };

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    class Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      color: string;
      life: number;
      maxLife: number;

      constructor(x: number, y: number) {
        this.x = x + (Math.random() - 0.5) * 5;
        this.y = y + (Math.random() - 0.5) * 5;
        
        const angle = Math.random() * Math.PI * 2;
        const force = Math.random() * 2 + 0.5;
        this.vx = Math.cos(angle) * force;
        this.vy = Math.sin(angle) * force;
        
        this.size = Math.random() * 1.5 + 0.5;
        this.maxLife = Math.random() * 30 + 30;
        this.life = this.maxLife;
        
        // Solid brand colors (no glows)
        const reds = ['#8E0B0B', '#FF3B3B', '#ffffff'];
        this.color = reds[Math.floor(Math.random() * reds.length)];
      }

      update(targetX: number, targetY: number) {
        const dx = targetX - this.x;
        const dy = targetY - this.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        
        if (dist > 2) {
          this.vx += (dx / dist) * 0.2;
          this.vy += (dy / dist) * 0.2;
        }

        this.vx *= 0.95;
        this.vy *= 0.95;

        this.x += this.vx;
        this.y += this.vy;
        this.life--;
      }

      draw() {
        if (!ctx) return;
        const alpha = (this.life / this.maxLife);
        ctx.fillStyle = this.color;
        ctx.globalAlpha = alpha;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.globalAlpha = 1;
      }
    }

    const init = () => {
      window.addEventListener('resize', resize);
      window.addEventListener('mousemove', (e) => {
        mouse.x = e.clientX;
        mouse.y = e.clientY;
        mouse.active = true;
      });
      resize();
    };

    const animate = () => {
      // FULL CLEAR to remove any 'smudge' or shadow
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      if (mouse.active && particles.length < 80) {
        particles.push(new Particle(mouse.x, mouse.y));
      }

      for (let i = 0; i < particles.length; i++) {
        particles[i].update(mouse.x, mouse.y);
        particles[i].draw();
        
        if (particles[i].life <= 0) {
          particles.splice(i, 1);
          i--;
        }
      }
      
      animationFrameId = requestAnimationFrame(animate);
    };

    init();
    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-[9999]"
    />
  );
}
