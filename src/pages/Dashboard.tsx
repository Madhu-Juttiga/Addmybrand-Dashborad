import { useState, useEffect } from "react"
import { MetricCard } from "@/components/ui/metric-card"
import { InteractiveMetricCard } from "@/components/ui/interactive-metric-card"
import { LineChart } from "@/components/charts/LineChart"
import { BarChart } from "@/components/charts/BarChart"
import { DonutChart } from "@/components/charts/DonutChart"
import { EnhancedRegionChart } from "@/components/charts/EnhancedRegionChart"
import { DataTable } from "@/components/ui/data-table"
import { Header } from "@/components/layout/Header"
import { DollarSign, Users, Target, TrendingUp } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { revenueData, usersByRegion, conversionsBySource, campaignData, kpiMetrics } from "@/data/mockData"
import { revenueDetailData, usersDetailData, conversionsDetailData, growthRateDetailData } from "@/data/detailData"
import { Button } from "@/components/ui/button"

export default function Dashboard() {
  const [isRealTime, setIsRealTime] = useState(false)
  const [metrics, setMetrics] = useState(kpiMetrics)
  const [filteredCampaignData, setFilteredCampaignData] = useState(campaignData)

  // Simulate real-time updates
  useEffect(() => {
    if (!isRealTime) return

    const interval = setInterval(() => {
      setMetrics(prev => ({
        revenue: {
          current: prev.revenue.current + Math.floor(Math.random() * 1000),
          trend: prev.revenue.trend
        },
        users: {
          current: prev.users.current + Math.floor(Math.random() * 10),
          trend: prev.users.trend
        },
        conversions: {
          current: prev.conversions.current + Math.floor(Math.random() * 5),
          trend: prev.conversions.trend
        },
        growth: {
          current: parseFloat((prev.growth.current + (Math.random() - 0.5) * 0.1).toFixed(1)),
          trend: prev.growth.trend
        }
      }))
    }, 3000)

    return () => clearInterval(interval)
  }, [isRealTime])

  const handleApplyFilters = (filters: {
    dateFrom?: Date
    dateTo?: Date
    campaign?: string
    status?: string
  }) => {
    let filtered = [...campaignData]
    
    if (filters.status) {
      filtered = filtered.filter(campaign => 
        campaign.status.toLowerCase() === filters.status?.toLowerCase()
      )
    }
    
    if (filters.campaign) {
      filtered = filtered.filter(campaign => 
        campaign.campaign.toLowerCase().includes(filters.campaign?.toLowerCase() || '')
      )
    }
    
    setFilteredCampaignData(filtered)
  }

  const handleRefresh = () => {
    // Simulate data refresh
    setMetrics({ ...kpiMetrics })
    setFilteredCampaignData([...campaignData])
  }

  const tableColumns = [
    { key: 'campaign', label: 'Campaign', sortable: true },
    { 
      key: 'spend', 
      label: 'Spend', 
      sortable: true,
      render: (value: number) => `₹${value.toLocaleString('en-IN')}`
    },
    { 
      key: 'clicks', 
      label: 'Clicks', 
      sortable: true,
      render: (value: number) => value.toLocaleString()
    },
    { 
      key: 'conversions', 
      label: 'Conversions', 
      sortable: true,
      render: (value: number) => value.toLocaleString()
    },
    { 
      key: 'roi', 
      label: 'ROI', 
      sortable: true,
      render: (value: number) => `${value.toFixed(1)}x`
    },
    { 
      key: 'status', 
      label: 'Status',
      render: (value: string) => (
        <Badge 
          variant={value === 'Active' ? 'default' : value === 'Paused' ? 'secondary' : 'outline'}
          className={value === 'Active' ? 'bg-success text-success-foreground' : ''}
        >
          {value}
        </Badge>
      )
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20 no-overflow-x">
      <Header 
        onApplyFilters={handleApplyFilters}
        exportData={filteredCampaignData}
        onRefresh={handleRefresh}
      />
      
      <main className="container mx-auto px-4 sm:px-6 py-4 sm:py-8">
        {/* Real-time toggle */}
        <div className="mb-4 sm:mb-6 flex flex-col sm:flex-row gap-4 sm:items-center sm:justify-between">
          <div className="text-center sm:text-left">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">Analytics Overview</h2>
            <p className="text-muted-foreground mt-1 text-sm sm:text-base">Monitor your campaign performance in real-time</p>
          </div>
          <Button
            variant={isRealTime ? "default" : "outline"}
            onClick={() => setIsRealTime(!isRealTime)}
            className={`w-full sm:w-auto ${isRealTime ? "animate-pulse-glow" : ""}`}
            size="sm"
          >
            <span className="text-xs sm:text-sm">
              {isRealTime ? "🔴 Live" : "▶️ Enable Real-time"}
            </span>
          </Button>
        </div>

        {/* KPI Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-6 sm:mb-8">
          <InteractiveMetricCard
            title="Total Revenue"
            value={`₹${metrics.revenue.current.toLocaleString('en-IN')}`}
            description="vs last month"
            icon={<DollarSign className="h-4 w-4" />}
            trend={metrics.revenue.trend}
            variant="primary"
            className="animate-fade-in"
            detailData={revenueDetailData}
          />
          
          <InteractiveMetricCard
            title="Active Users"
            value={metrics.users.current.toLocaleString()}
            description="vs last month"
            icon={<Users className="h-4 w-4" />}
            trend={metrics.users.trend}
            variant="secondary"
            className="animate-fade-in [animation-delay:0.1s]"
            detailData={usersDetailData}
          />
          
          <InteractiveMetricCard
            title="Conversions"
            value={metrics.conversions.current.toLocaleString()}
            description="vs last month"
            icon={<Target className="h-4 w-4" />}
            trend={metrics.conversions.trend}
            variant="success"
            className="animate-fade-in [animation-delay:0.2s]"
            detailData={conversionsDetailData}
          />
          
          <InteractiveMetricCard
            title="Growth Rate"
            value={`${metrics.growth.current}%`}
            description="vs last month"
            icon={<TrendingUp className="h-4 w-4" />}
            trend={metrics.growth.trend}
            className="animate-fade-in [animation-delay:0.3s]"
            detailData={growthRateDetailData}
          />
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6 mb-6 sm:mb-8">
          <LineChart
            data={revenueData}
            title="Revenue Trend"
            description="Monthly revenue over the past year"
            dataKey="revenue"
            color="hsl(var(--chart-1))"
            className="xl:col-span-2 animate-scale-in"
          />
          
          <DonutChart
            data={conversionsBySource}
            title="Traffic Sources"
            description="Conversions by traffic source"
            className="animate-scale-in [animation-delay:0.1s]"
          />
          
          <EnhancedRegionChart
            data={usersByRegion}
            title="Users by Indian States"
            description="Distribution of active users across major Indian states"
            className="col-span-1 lg:col-span-2 xl:col-span-3 animate-scale-in [animation-delay:0.2s]"
          />
        </div>

        {/* Data Table */}
        <div className="animate-fade-in [animation-delay:0.4s]">
          <DataTable
            data={filteredCampaignData}
            columns={tableColumns}
            title="Campaign Performance"
            searchable={true}
            exportable={true}
            pageSize={8}
          />
        </div>
      </main>
    </div>
  )
}