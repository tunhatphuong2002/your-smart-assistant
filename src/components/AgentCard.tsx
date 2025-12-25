import { LucideIcon, Settings, Sparkles } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

interface AgentCardProps {
  icon: LucideIcon;
  name: string;
  features: string[];
  tags: { label: string; type: "strategy" | "intelligence" }[];
  chains: string[];
  extraChains?: number;
  hasPromptToDeFi?: boolean;
}

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
    <Card className="group relative transition-all duration-300 hover:border-muted-foreground/30">
      {hasPromptToDeFi && (
        <div className="absolute top-4 right-4">
          <Badge variant="secondary" className="gap-1">
            <Sparkles size={12} />
            Prompt-to-DeFi
          </Badge>
        </div>
      )}

      <CardHeader className="pb-4">
        <div className="p-3 w-fit rounded-lg bg-secondary mb-4">
          <Icon size={24} className="text-foreground" />
        </div>
        <h3 className="text-lg font-semibold text-foreground">{name}</h3>
      </CardHeader>

      <CardContent className="space-y-6">
        <ul className="space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
              <span className="text-muted-foreground mt-0.5">•</span>
              {feature}
            </li>
          ))}
        </ul>

        <div className="flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <Badge key={index} variant="outline" className="gap-1">
              {tag.type === "strategy" ? <Settings size={12} /> : <Sparkles size={12} />}
              {tag.label}
            </Badge>
          ))}
        </div>

        <div className="pt-4 border-t border-border">
          <div className="flex items-center justify-between">
            <span className="text-sm text-muted-foreground">Supported Chains</span>
            <div className="flex items-center gap-1">
              {chains.map((chain, index) => (
                <Avatar key={index} className="h-6 w-6">
                  <AvatarFallback className="text-xs font-medium bg-secondary">
                    {chain[0]}
                  </AvatarFallback>
                </Avatar>
              ))}
              {extraChains && extraChains > 0 && (
                <span className="text-xs text-muted-foreground ml-1">+{extraChains}</span>
              )}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
