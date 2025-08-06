import { ThemeToggle } from "@/components/ui/theme-toggle"
import { Button } from "@/components/ui/button"
import { Calendar, RefreshCw } from "lucide-react"
import { FilterModal } from "@/components/ui/filter-modal"
import { ExportDropdown } from "@/components/ui/export-dropdown"

interface HeaderProps {
  onApplyFilters?: (filters: any) => void
  exportData?: Array<{ [key: string]: any }>
  onRefresh?: () => void
}

export function Header({ onApplyFilters, exportData = [], onRefresh }: HeaderProps) {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between px-4 sm:px-6">
        <div className="flex items-center">
          <div className="bg-gradient-primary rounded-lg p-2 mr-3">
            <div className="w-6 h-6 bg-white rounded-sm flex items-center justify-center">
              <span className="text-primary font-bold text-sm">A</span>
            </div>
          </div>
          <div>
            <h1 className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              ADmyBRAND
            </h1>
            <p className="text-xs text-muted-foreground">Insights Dashboard</p>
          </div>
        </div>
        
        <div className="flex items-center gap-1 sm:gap-2">
          <Button variant="outline" size="sm" className="hidden sm:flex">
            <Calendar className="h-4 w-4 mr-2" />
            Last 30 days
          </Button>
          {onApplyFilters && <FilterModal onApplyFilters={onApplyFilters} />}
          <ExportDropdown data={exportData} filename="admybrand-dashboard" />
          <Button variant="outline" size="sm" onClick={onRefresh} className="touch-target">
            <RefreshCw className="h-4 w-4" />
            <span className="sr-only">Refresh</span>
          </Button>
          <ThemeToggle />
        </div>
      </div>
    </header>
  )
}