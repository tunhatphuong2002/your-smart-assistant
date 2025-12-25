import { Search, ChevronDown, Settings, Sparkles } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface FilterBarProps {
  activeFilter: string;
  onFilterChange: (filter: string) => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
  promptToDeFi: boolean;
  onPromptToDeFiChange: (enabled: boolean) => void;
}

const filters = [
  { label: "All", icon: null },
  { label: "Strategy", icon: Settings },
  { label: "Intelligence", icon: Sparkles },
];

export const FilterBar = ({
  activeFilter,
  onFilterChange,
  searchQuery,
  onSearchChange,
  promptToDeFi,
  onPromptToDeFiChange,
}: FilterBarProps) => {
  return (
    <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 py-6">
      <div className="flex items-center gap-1 p-1 bg-secondary rounded-lg">
        {filters.map((filter) => (
          <Button
            key={filter.label}
            variant={activeFilter === filter.label ? "default" : "ghost"}
            size="sm"
            onClick={() => onFilterChange(filter.label)}
            className="gap-2"
          >
            {filter.icon && <filter.icon size={14} />}
            {filter.label}
          </Button>
        ))}
      </div>

      <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
        <div className="flex items-center gap-3">
          <Label htmlFor="prompt-defi" className="text-sm text-muted-foreground flex items-center gap-2">
            <Sparkles size={14} />
            Prompt-to-DeFi supported
          </Label>
          <Switch
            id="prompt-defi"
            checked={promptToDeFi}
            onCheckedChange={onPromptToDeFiChange}
          />
        </div>

        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={16} />
          <Input
            type="text"
            placeholder="Search agent"
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            className="w-full sm:w-64 pl-9"
          />
        </div>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="gap-2">
              All Chains
              <ChevronDown size={14} />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem>All Chains</DropdownMenuItem>
            <DropdownMenuItem>Ethereum</DropdownMenuItem>
            <DropdownMenuItem>Solana</DropdownMenuItem>
            <DropdownMenuItem>Base</DropdownMenuItem>
            <DropdownMenuItem>Arbitrum</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        <Button variant="ghost" size="sm" onClick={() => {
          onFilterChange("All");
          onSearchChange("");
          onPromptToDeFiChange(false);
        }}>
          Clear Filters
        </Button>
      </div>
    </div>
  );
};
