import { Bot, Brain, Zap, TrendingUp, BarChart3, Wallet, Globe, Shield } from "lucide-react";

const icons = [
  { Icon: Bot, delay: "0s", top: "10%", right: "15%", size: 24 },
  { Icon: Brain, delay: "0.5s", top: "20%", right: "25%", size: 32 },
  { Icon: Zap, delay: "1s", top: "35%", right: "10%", size: 20 },
  { Icon: TrendingUp, delay: "1.5s", top: "15%", right: "35%", size: 28 },
  { Icon: BarChart3, delay: "2s", top: "45%", right: "20%", size: 24 },
  { Icon: Wallet, delay: "0.3s", top: "55%", right: "30%", size: 22 },
  { Icon: Globe, delay: "0.8s", top: "25%", right: "5%", size: 26 },
  { Icon: Shield, delay: "1.2s", top: "40%", right: "35%", size: 20 },
];

export const FloatingIcons = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {icons.map(({ Icon, delay, top, right, size }, index) => (
        <div
          key={index}
          className="absolute animate-float"
          style={{
            top,
            right,
            animationDelay: delay,
          }}
        >
          <div className="relative">
            <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl animate-pulse-glow" />
            <div className="relative p-4 rounded-full bg-card border border-border/50 backdrop-blur-sm">
              <Icon size={size} className="text-foreground/80" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
