import { LucideIcon } from "lucide-react";

interface AgentCardProps {
  icon: LucideIcon;
  name: string;
  features: string[];
  tags: { label: string; type: "strategy" | "intelligence" }[];
  chains: string[];
  extraChains?: number;
  hasPromptToDeFi?: boolean;
}

const tagStyles = {
  strategy: "border-primary/50 text-primary",
  intelligence: "border-accent/50 text-accent",
};

export const AgentCard = ({
  icon: Icon,
  name,
  features,
  tags,
  chains,
  extraChains,
  hasPromptToDeFi,
}: AgentCardProps) => {
  return (
    <div className="group relative bg-card rounded-xl border border-border/50 p-6 transition-all duration-300 hover:border-primary/30 hover:card-glow">
      {hasPromptToDeFi && (
        <div className="absolute top-4 right-4">
          <span className="px-3 py-1.5 text-xs font-medium rounded-full bg-accent/20 text-accent border border-accent/30">
            ✨ Prompt-to-DeFi
          </span>
        </div>
      )}

      <div className="p-3 w-fit rounded-xl bg-secondary border border-border/50 mb-4">
        <Icon size={24} className="text-foreground" />
      </div>

      <h3 className="text-lg font-semibold text-foreground mb-4">{name}</h3>

      <ul className="space-y-2 mb-6">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
            <span className="text-primary mt-1">•</span>
            {feature}
          </li>
        ))}
      </ul>

      <div className="flex flex-wrap gap-2 mb-6">
        {tags.map((tag, index) => (
          <span
            key={index}
            className={`px-3 py-1 text-xs font-medium rounded-full border ${tagStyles[tag.type]}`}
          >
            {tag.type === "strategy" ? "⚙️" : "✨"} {tag.label}
          </span>
        ))}
      </div>

      <div className="pt-4 border-t border-border/50">
        <div className="flex items-center justify-between">
          <span className="text-sm text-muted-foreground">Supported Chains</span>
          <div className="flex items-center gap-1">
            {chains.map((chain, index) => (
              <div
                key={index}
                className="w-6 h-6 rounded-full bg-secondary border border-border/50 flex items-center justify-center text-xs font-bold"
              >
                {chain[0]}
              </div>
            ))}
            {extraChains && extraChains > 0 && (
              <span className="text-xs text-muted-foreground ml-1">+{extraChains}</span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
