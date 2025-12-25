import { useState, useMemo } from "react";
import { HeroSection } from "@/components/HeroSection";
import { FilterBar } from "@/components/FilterBar";
import { AgentCard } from "@/components/AgentCard";
import { 
  Lightbulb, 
  DollarSign, 
  Users, 
  ArrowLeftRight, 
  Landmark, 
  Clock,
  Wallet,
  BarChart3
} from "lucide-react";

const agents = [
  {
    id: 1,
    icon: Lightbulb,
    name: "Insight",
    features: ["Provide detailed market summaries", "Track community sentiment"],
    tags: [{ label: "Intelligence", type: "intelligence" as const }],
    chains: ["Sol", "Eth", "Base"],
    extraChains: 7,
    hasPromptToDeFi: false,
  },
  {
    id: 2,
    icon: DollarSign,
    name: "Yield",
    features: ["Query top yield data from Defillama", "Goal-oriented yield strategies"],
    tags: [{ label: "Intelligence", type: "intelligence" as const }],
    chains: ["Arb", "Sol", "Base"],
    extraChains: 4,
    hasPromptToDeFi: false,
  },
  {
    id: 3,
    icon: Users,
    name: "Mindshare",
    features: ["Collect and process social data from X", "Deliver insights and summaries on current trends"],
    tags: [{ label: "Intelligence", type: "intelligence" as const }],
    chains: ["Sol", "Eth", "Base"],
    extraChains: 7,
    hasPromptToDeFi: false,
  },
  {
    id: 4,
    icon: ArrowLeftRight,
    name: "Uniswap",
    features: ["Swap any tokens"],
    tags: [{ label: "Intelligence", type: "intelligence" as const }],
    chains: ["Eth", "Base"],
    extraChains: 0,
    hasPromptToDeFi: false,
  },
  {
    id: 5,
    icon: Landmark,
    name: "Aave",
    features: ["Lend a token to Aave pool to earn interest", "Borrow a token from Aave pool by LTV"],
    tags: [
      { label: "Strategy", type: "strategy" as const },
      { label: "Intelligence", type: "intelligence" as const },
    ],
    chains: ["Eth", "Base", "Opt"],
    extraChains: 2,
    hasPromptToDeFi: true,
  },
  {
    id: 6,
    icon: Clock,
    name: "Pendle",
    features: [
      "Swap or Buy a Yield Token (YT) of the specified market",
      "Swap or Buy Principal Token (PT) of the specified market",
    ],
    tags: [
      { label: "Strategy", type: "strategy" as const },
      { label: "Intelligence", type: "intelligence" as const },
    ],
    chains: ["Eth", "Base", "Arb"],
    extraChains: 7,
    hasPromptToDeFi: true,
  },
  {
    id: 7,
    icon: Wallet,
    name: "Portfolio",
    features: ["Track your portfolio across chains", "Real-time value updates"],
    tags: [{ label: "Intelligence", type: "intelligence" as const }],
    chains: ["Sol", "Eth", "Base"],
    extraChains: 5,
    hasPromptToDeFi: false,
  },
  {
    id: 8,
    icon: BarChart3,
    name: "Analytics",
    features: ["Deep dive into on-chain analytics", "Historical performance tracking"],
    tags: [
      { label: "Strategy", type: "strategy" as const },
      { label: "Intelligence", type: "intelligence" as const },
    ],
    chains: ["Eth", "Arb", "Opt"],
    extraChains: 3,
    hasPromptToDeFi: true,
  },
];

const Index = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [promptToDeFi, setPromptToDeFi] = useState(false);

  const filteredAgents = useMemo(() => {
    return agents.filter((agent) => {
      const matchesFilter =
        activeFilter === "All" ||
        agent.tags.some((tag) => tag.label.toLowerCase() === activeFilter.toLowerCase());

      const matchesSearch =
        !searchQuery ||
        agent.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        agent.features.some((f) => f.toLowerCase().includes(searchQuery.toLowerCase()));

      const matchesPromptToDeFi = !promptToDeFi || agent.hasPromptToDeFi;

      return matchesFilter && matchesSearch && matchesPromptToDeFi;
    });
  }, [activeFilter, searchQuery, promptToDeFi]);

  return (
    <main className="min-h-screen bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <HeroSection />

        <FilterBar
          activeFilter={activeFilter}
          onFilterChange={setActiveFilter}
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          promptToDeFi={promptToDeFi}
          onPromptToDeFiChange={setPromptToDeFi}
        />

        <section className="py-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredAgents.map((agent) => (
              <AgentCard
                key={agent.id}
                icon={agent.icon}
                name={agent.name}
                features={agent.features}
                tags={agent.tags}
                chains={agent.chains}
                extraChains={agent.extraChains}
                hasPromptToDeFi={agent.hasPromptToDeFi}
              />
            ))}
          </div>

          {filteredAgents.length === 0 && (
            <div className="text-center py-16">
              <p className="text-muted-foreground">No agents found matching your criteria.</p>
            </div>
          )}
        </section>
      </div>
    </main>
  );
};

export default Index;
