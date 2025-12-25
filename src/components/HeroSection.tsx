import { FloatingIcons } from "./FloatingIcons";
import { Bot, Brain, Zap, TrendingUp } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const avatarIcons = [Bot, Brain, Zap, TrendingUp];

export const HeroSection = () => {
  return (
    <section className="relative min-h-[400px] py-16 overflow-hidden">
      <FloatingIcons />

      <div className="relative z-10 max-w-2xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
          Explore AI Agent Swarm
        </h1>
        
        <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
          Discover AI Agent Swarm — specialized, collaborative AI Agents
          that power Intelligence and Strategies
        </p>

        <div className="flex items-center gap-3">
          <div className="flex -space-x-2">
            {avatarIcons.map((Icon, index) => (
              <Avatar key={index} className="h-8 w-8 border-2 border-background">
                <AvatarFallback className="bg-card">
                  <Icon size={14} className="text-muted-foreground" />
                </AvatarFallback>
              </Avatar>
            ))}
          </div>
          <span className="text-muted-foreground">31+ Agents</span>
        </div>
      </div>
    </section>
  );
};
