import { BarChart as RechartsBarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Globe, Users, TrendingUp } from "lucide-react"
import { cn } from "@/lib/utils"

interface StateData {
  name: string
  users: number
  code?: string
  growth?: number
}

interface EnhancedStateChartProps {
  data: Array<StateData>
  title: string
  description?: string
  className?: string
}

const stateColors = [
  "hsl(var(--chart-1))",
  "hsl(var(--chart-2))", 
  "hsl(var(--chart-3))",
  "hsl(var(--chart-4))",
  "hsl(var(--chart-5))",
  "hsl(233 84% 70%)",
  "hsl(271 91% 65%)",
  "hsl(142 76% 45%)",
  "hsl(38 92% 60%)",
  "hsl(0 84% 70%)"
]

const stateIcons = {
  "Maharashtra": "🏭", // Industrial state
  "Karnataka": "💻", // Tech hub
  "Tamil Nadu": "🏛️", // Cultural heritage
  "Delhi": "🏛️", // Capital
  "Uttar Pradesh": "🕌", // Historical monuments
  "Gujarat": "⚡", // Industrial/Business
  "Rajasthan": "🏰", // Palaces and forts
  "West Bengal": "📚", // Cultural/Educational
  "Andhra Pradesh": "🌾", // Agriculture
  "Telangana": "🚀" // IT/Technology
}

export function EnhancedRegionChart({ 
  data, 
  title, 
  description,
  className 
}: EnhancedStateChartProps) {
  const totalUsers = data.reduce((sum, state) => sum + state.users, 0)
  const maxUsers = Math.max(...data.map(state => state.users, 0))
  
  const enhancedData = data.map((state, index) => ({
    ...state,
    percentage: ((state.users / totalUsers) * 100).toFixed(1),
    color: stateColors[index % stateColors.length],
    icon: stateIcons[state.name as keyof typeof stateIcons] || "🏢",
    code: state.code || state.name.substring(0, 2).toUpperCase()
  }))

  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      const data = payload[0].payload
      return (
        <div className="bg-popover border border-border rounded-lg p-4 shadow-lg">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-lg">{data.icon}</span>
            <p className="font-semibold text-popover-foreground">{label}</p>
            <Badge variant="outline" className="text-xs">{data.code}</Badge>
          </div>
          <div className="space-y-1">
            <p className="text-sm">
              <span className="text-muted-foreground">Users: </span>
              <span className="font-medium text-primary">{data.users.toLocaleString()}</span>
            </p>
            <p className="text-sm">
              <span className="text-muted-foreground">Share: </span>
              <span className="font-medium">{data.percentage}%</span>
            </p>
          </div>
        </div>
      )
    }
    return null
  }

  return (
    <Card className={cn(
      "bg-gradient-to-br from-card/95 to-card/50 backdrop-blur-lg border-border/50", 
      "hover:shadow-elevated transition-all duration-500 hover:scale-[1.02]",
      className
    )}>
      <CardHeader className="pb-4">
        <div className="flex items-start justify-between">
          <div className="space-y-2">
            <CardTitle className="text-xl font-bold flex items-center gap-3">
              <div className="p-2 rounded-lg bg-primary/10">
                <Globe className="h-5 w-5 text-primary" />
              </div>
              Users by Indian States
            </CardTitle>
            {description && (
              <CardDescription className="text-sm text-muted-foreground">
                {description}
              </CardDescription>
            )}
          </div>
          <Badge variant="outline" className="bg-primary/5 text-primary border-primary/20">
            <Users className="h-3 w-3 mr-1" />
            {totalUsers.toLocaleString()} Total
          </Badge>
        </div>
      </CardHeader>
      
      <CardContent className="space-y-6">
        {/* Chart */}
        <div className="h-64 sm:h-80">
          <ResponsiveContainer width="100%" height="100%">
            <RechartsBarChart 
              data={enhancedData} 
              margin={{ top: 20, right: 30, left: 20, bottom: 60 }}
              barCategoryGap="20%"
            >
              <CartesianGrid 
                strokeDasharray="3 3" 
                stroke="hsl(var(--border))" 
                opacity={0.3}
                vertical={false}
              />
              <XAxis 
                dataKey="name" 
                stroke="hsl(var(--muted-foreground))"
                fontSize={11}
                tickLine={false}
                axisLine={false}
                angle={-45}
                textAnchor="end"
                height={60}
                interval={0}
              />
              <YAxis
                stroke="hsl(var(--muted-foreground))"
                fontSize={11}
                tickLine={false}
                axisLine={false}
                tickFormatter={(value) => `${(value / 1000).toFixed(0)}K`}
              />
              <Tooltip content={<CustomTooltip />} />
              <Bar
                dataKey="users"
                radius={[6, 6, 0, 0]}
                strokeWidth={1}
                stroke="hsl(var(--border))"
              >
                {enhancedData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Bar>
            </RechartsBarChart>
          </ResponsiveContainer>
        </div>

        {/* State Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2 sm:gap-4">
          {enhancedData.map((state, index) => (
            <div
              key={state.name}
              className="relative p-2 sm:p-4 rounded-lg border bg-card/30 hover:bg-card/60 transition-all duration-300 hover:scale-105 group"
            >
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2 sm:mb-3 gap-1 sm:gap-2">
                <div className="flex items-center gap-1 sm:gap-2">
                  <span className="text-sm sm:text-lg">{state.icon}</span>
                  <div className="text-xs sm:text-sm font-medium text-foreground/80 truncate">
                    {state.name}
                  </div>
                </div>
                <Badge variant="outline" className="text-xs font-mono w-fit">
                  {state.code}
                </Badge>
              </div>
              
              <div className="space-y-1 sm:space-y-2">
                <div className="text-lg sm:text-2xl font-bold text-foreground">
                  {state.users.toLocaleString()}
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between text-xs gap-1">
                  <span className="text-muted-foreground">
                    {state.percentage}% of total
                  </span>
                  <div className="flex items-center gap-1 text-success">
                    <TrendingUp className="h-3 w-3" />
                    <span>+5.2%</span>
                  </div>
                </div>
              </div>
              
              {/* Progress bar */}
              <div className="mt-3 h-1.5 bg-muted rounded-full overflow-hidden">
                <div
                  className="h-full rounded-full transition-all duration-1000 group-hover:animate-pulse"
                  style={{ 
                    backgroundColor: state.color,
                    width: `${(state.users / maxUsers) * 100}%`
                  }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Summary Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-4 pt-4 border-t border-border/50">
          <div className="text-center space-y-1">
            <div className="text-lg font-bold text-foreground">
              {data.length}
            </div>
            <div className="text-xs text-muted-foreground">States</div>
          </div>
          <div className="text-center space-y-1">
            <div className="text-lg font-bold text-primary">
              {Math.round(totalUsers / data.length).toLocaleString()}
            </div>
            <div className="text-xs text-muted-foreground">Avg/State</div>
          </div>
          <div className="text-center space-y-1">
            <div className="text-lg font-bold text-success">
              {enhancedData[0]?.name.split(' ')[0]}
            </div>
            <div className="text-xs text-muted-foreground">Top State</div>
          </div>
          <div className="text-center space-y-1">
            <div className="text-lg font-bold text-chart-2">
              +12.3%
            </div>
            <div className="text-xs text-muted-foreground">Growth</div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}