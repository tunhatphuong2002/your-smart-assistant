import { FloatingIcons } from "./FloatingIcons";
import { Bot, Brain, Zap, TrendingUp } from "lucide-react";

const avatarIcons = [Bot, Brain, Zap, TrendingUp];

export const HeroSection = () => {
  return (
    <section className="relative min-h-[400px] py-16 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-radial" />
      
      <FloatingIcons />

      <div className="relative z-10 max-w-2xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          <span className="text-gradient">Explore AI Agent Swarm</span>
        </h1>
        
        <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
          Discover AI Agent Swarm — specialized, collaborative AI Agents
          that power Intelligence and Strategies
        </p>

        <div className="flex items-center gap-3">
          <div className="flex -space-x-2">
            {avatarIcons.map((Icon, index) => (
              <div
                key={index}
                className="w-8 h-8 rounded-full bg-card border-2 border-background flex items-center justify-center"
              >
                <Icon size={14} className="text-primary" />
              </div>
            ))}
          </div>
          <span className="text-muted-foreground">31+ Agents</span>
        </div>
      </div>
    </section>
  );
};
