import { Bot, Brain, Zap, TrendingUp, BarChart3, Wallet, Globe, Shield } from "lucide-react";

const icons = [
  { Icon: Bot, top: "10%", right: "15%" },
  { Icon: Brain, top: "20%", right: "25%" },
  { Icon: Zap, top: "35%", right: "10%" },
  { Icon: TrendingUp, top: "15%", right: "35%" },
  { Icon: BarChart3, top: "45%", right: "20%" },
  { Icon: Wallet, top: "55%", right: "30%" },
  { Icon: Globe, top: "25%", right: "5%" },
  { Icon: Shield, top: "40%", right: "35%" },
];

export const FloatingIcons = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {icons.map(({ Icon, top, right }, index) => (
        <div
          key={index}
          className="absolute opacity-10"
          style={{ top, right }}
        >
          <Icon size={24} className="text-muted-foreground" />
        </div>
      ))}
    </div>
  );
};
