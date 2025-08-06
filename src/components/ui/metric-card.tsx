import { ReactNode } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { cn } from "@/lib/utils"

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
}

const variantStyles = {
  default: "bg-card border-border hover:shadow-card",
  primary: "bg-gradient-primary border-primary/20 hover:shadow-glow text-primary-foreground",
  secondary: "bg-gradient-secondary border-secondary/20 hover:shadow-glow text-secondary-foreground", 
  success: "bg-gradient-success border-success/20 hover:shadow-glow text-success-foreground"
}

export function MetricCard({
  title,
  value,
  description,
  icon,
  trend,
  className,
  variant = "default"
}: MetricCardProps) {
  return (
    <Card 
      className={cn(
        "transition-all duration-300 hover:scale-105 backdrop-blur-sm",
        variantStyles[variant],
        className
      )}
    >
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium opacity-90">
          {title}
        </CardTitle>
        <div className="h-4 w-4 opacity-90">
          {icon}
        </div>
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold mb-1">
          {value}
        </div>
        {(description || trend) && (
          <div className="flex items-center justify-between">
            {description && (
              <p className="text-xs opacity-75">
                {description}
              </p>
            )}
            {trend && (
              <div className={cn(
                "text-xs font-medium flex items-center",
                trend.isPositive ? "text-success" : "text-destructive",
                variant !== "default" && "text-current opacity-90"
              )}>
                <span className="mr-1">
                  {trend.isPositive ? "↗" : "↘"}
                </span>
                {Math.abs(trend.value)}%
              </div>
            )}
          </div>
        )}
      </CardContent>
    </Card>
  )
}