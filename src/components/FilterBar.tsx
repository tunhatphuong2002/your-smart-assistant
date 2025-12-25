import { useState } from "react";
import { Search, ChevronDown } from "lucide-react";

interface FilterBarProps {
  activeFilter: string;
  onFilterChange: (filter: string) => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
  promptToDeFi: boolean;
  onPromptToDeFiChange: (enabled: boolean) => void;
}

const filters = ["All", "Strategy", "Intelligence"];

export const FilterBar = ({
  activeFilter,
  onFilterChange,
  searchQuery,
  onSearchChange,
  promptToDeFi,
  onPromptToDeFiChange,
}: FilterBarProps) => {
  const [chainDropdownOpen, setChainDropdownOpen] = useState(false);

  return (
    <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 py-6">
      <div className="flex items-center gap-2 p-1 bg-secondary rounded-full">
        {filters.map((filter) => (
          <button
            key={filter}
            onClick={() => onFilterChange(filter)}
            className={`px-4 py-2 text-sm font-medium rounded-full transition-all duration-200 ${
              activeFilter === filter
                ? "bg-card text-foreground shadow-sm"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            {filter === "Strategy" && "⚙️ "}
            {filter === "Intelligence" && "✨ "}
            {filter}
          </button>
        ))}
      </div>

      <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
        <label className="flex items-center gap-3 cursor-pointer">
          <span className="text-sm text-muted-foreground">✨ Prompt-to-DeFi supported</span>
          <button
            onClick={() => onPromptToDeFiChange(!promptToDeFi)}
            className={`relative w-12 h-6 rounded-full transition-colors duration-200 ${
              promptToDeFi ? "bg-primary" : "bg-secondary"
            }`}
          >
            <span
              className={`absolute top-1 w-4 h-4 rounded-full bg-foreground transition-transform duration-200 ${
                promptToDeFi ? "left-7" : "left-1"
              }`}
            />
          </button>
        </label>

        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
          <input
            type="text"
            placeholder="Search agent"
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            className="w-full sm:w-64 pl-10 pr-4 py-2.5 bg-secondary rounded-lg border border-border/50 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 transition-colors"
          />
        </div>

        <div className="relative">
          <button
            onClick={() => setChainDropdownOpen(!chainDropdownOpen)}
            className="flex items-center gap-2 px-4 py-2.5 bg-secondary rounded-lg border border-border/50 text-foreground hover:border-primary/30 transition-colors"
          >
            All Chains
            <ChevronDown size={16} className="text-muted-foreground" />
          </button>
        </div>

        <button className="text-sm text-muted-foreground hover:text-foreground transition-colors">
          Clear Filters
        </button>
      </div>
    </div>
  );
};
