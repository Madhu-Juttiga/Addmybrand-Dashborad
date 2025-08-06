import { ReactNode, useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { cn } from "@/lib/utils"
import { LineChart } from "@/components/charts/LineChart"
import { BarChart } from "@/components/charts/BarChart"
import { ChevronRight, TrendingUp, TrendingDown } from "lucide-react"

interface MetricCardProps {
  title: string
  value: string | number
  description?: string
  icon: ReactNode
  trend?: {
    value: number
    isPositive: boolean
  }
  className?: string
  variant?: "default" | "primary" | "secondary" | "success"
  detailData?: {
    chartData?: Array<{ [key: string]: any }>
    chartType?: "line" | "bar"
    dataKey?: string
    color?: string
    breakdown?: Array<{ label: string; value: string | number }>
    insights?: string[]
  }
}

const variantStyles = {
  default: "bg-card border-border hover:shadow-card",
  primary: "bg-gradient-primary border-primary/20 hover:shadow-glow text-primary-foreground",
  secondary: "bg-gradient-secondary border-secondary/20 hover:shadow-glow text-secondary-foreground", 
  success: "bg-gradient-success border-success/20 hover:shadow-glow text-success-foreground"
}

export function InteractiveMetricCard({
  title,
  value,
  description,
  icon,
  trend,
  className,
  variant = "default",
  detailData
}: MetricCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleClick = () => {
    if (detailData) {
      setIsModalOpen(true)
    }
  }

  return (
    <>
      <Card 
        className={cn(
          "transition-all duration-300 hover:scale-105 backdrop-blur-sm group relative overflow-hidden",
          variantStyles[variant],
          detailData && "cursor-pointer hover:shadow-xl",
          className
        )}
        onClick={handleClick}
      >
        {/* Animated background effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
        
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 relative z-10">
          <CardTitle className="text-sm font-medium opacity-90 group-hover:opacity-100 transition-opacity">
            {title}
          </CardTitle>
          <div className="flex items-center gap-2">
            <div className="h-4 w-4 opacity-90 group-hover:opacity-100 transition-opacity">
              {icon}
            </div>
            {detailData && (
              <ChevronRight className="h-4 w-4 opacity-60 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-200" />
            )}
          </div>
        </CardHeader>
        <CardContent className="relative z-10">
          <div className="text-2xl font-bold mb-1 group-hover:scale-105 transition-transform duration-200">
            {value}
          </div>
          {(description || trend) && (
            <div className="flex items-center justify-between">
              {description && (
                <p className="text-xs opacity-75 group-hover:opacity-90 transition-opacity">
                  {description}
                </p>
              )}
              {trend && (
                <div className={cn(
                  "text-xs font-medium flex items-center transition-all duration-200",
                  trend.isPositive ? "text-success" : "text-destructive",
                  variant !== "default" && "text-current opacity-90"
                )}>
                  {trend.isPositive ? (
                    <TrendingUp className="h-3 w-3 mr-1" />
                  ) : (
                    <TrendingDown className="h-3 w-3 mr-1" />
                  )}
                  {Math.abs(trend.value)}%
                </div>
              )}
            </div>
          )}
        </CardContent>
      </Card>

      {/* Detail Modal */}
      {detailData && (
        <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
          <DialogContent className="max-w-7xl w-[95vw] h-[90vh] max-h-[90vh] overflow-y-auto bg-card/95 backdrop-blur-lg border-border/50">
            <DialogHeader>
              <DialogTitle className="flex items-center gap-2 text-xl">
                <div className="h-5 w-5">
                  {icon}
                </div>
                {title} Details
              </DialogTitle>
              <p className="text-muted-foreground text-lg">
                Detailed insights and trends for {title.toLowerCase()}
              </p>
            </DialogHeader>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 py-6">
              {/* Left Column - Chart and Main Metric */}
              <div className="space-y-6">
                {/* Main metric display */}
                <div className="bg-muted/50 rounded-lg p-6">
                  <div className="text-4xl font-bold mb-2">{value}</div>
                  <div className="flex items-center gap-4">
                    {description && (
                      <span className="text-muted-foreground">{description}</span>
                    )}
                    {trend && (
                      <div className={cn(
                        "font-medium flex items-center",
                        trend.isPositive ? "text-success" : "text-destructive"
                      )}>
                        {trend.isPositive ? (
                          <TrendingUp className="h-5 w-5 mr-2" />
                        ) : (
                          <TrendingDown className="h-5 w-5 mr-2" />
                        )}
                        {Math.abs(trend.value)}% vs last month
                      </div>
                    )}
                  </div>
                </div>

                {/* Chart */}
                {detailData.chartData && (
                  <div className="animate-fade-in">
                    <h3 className="text-xl font-semibold mb-4">Trend Analysis</h3>
                    {detailData.chartType === "line" ? (
                      <LineChart
                        data={detailData.chartData}
                        title=""
                        description=""
                        dataKey={detailData.dataKey || "value"}
                        color={detailData.color || "hsl(var(--primary))"}
                        className="h-80"
                      />
                    ) : (
                      <BarChart
                        data={detailData.chartData}
                        title=""
                        description=""
                        dataKey={detailData.dataKey || "value"}
                        color={detailData.color || "hsl(var(--primary))"}
                        className="h-80"
                      />
                    )}
                  </div>
                )}
              </div>

              {/* Right Column - Breakdown and Insights */}
              <div className="space-y-6">
                {/* Breakdown */}
                {detailData.breakdown && (
                  <div>
                    <h3 className="text-xl font-semibold mb-4">Key Metrics</h3>
                    <div className="grid grid-cols-1 gap-4 animate-fade-in [animation-delay:0.1s]">
                      {detailData.breakdown.map((item, index) => (
                        <div key={index} className="bg-card/60 rounded-lg p-4 border hover:bg-card/80 transition-colors">
                          <div className="text-sm text-muted-foreground mb-2">{item.label}</div>
                          <div className="text-2xl font-bold text-primary">{item.value}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Insights */}
                {detailData.insights && (
                  <div className="animate-fade-in [animation-delay:0.2s]">
                    <h3 className="text-xl font-semibold mb-4">Key Insights</h3>
                    <div className="space-y-4">
                      {detailData.insights.map((insight, index) => (
                        <div key={index} className="flex items-start gap-3 p-4 rounded-lg bg-muted/30 border">
                          <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                          <span className="leading-relaxed">{insight}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </DialogContent>
        </Dialog>
      )}
    </>
  )
}