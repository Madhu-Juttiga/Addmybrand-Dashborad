// Mock data for the analytics dashboard

export const revenueData = [
  { name: "Jan", revenue: 3750000 },
  { name: "Feb", revenue: 4340000 },
  { name: "Mar", revenue: 4000000 },
  { name: "Apr", revenue: 5085000 },
  { name: "May", revenue: 4587500 },
  { name: "Jun", revenue: 5587500 },
  { name: "Jul", revenue: 6000000 },
  { name: "Aug", revenue: 5752500 },
  { name: "Sep", revenue: 6500000 },
  { name: "Oct", revenue: 7087500 },
  { name: "Nov", revenue: 7670000 },
  { name: "Dec", revenue: 7340000 }
]

export const usersByRegion = [
  { name: "Maharashtra", users: 8520, code: "MH" },
  { name: "Karnataka", users: 6890, code: "KA" },
  { name: "Tamil Nadu", users: 5780, code: "TN" },
  { name: "Delhi", users: 4240, code: "DL" },
  { name: "Uttar Pradesh", users: 3890, code: "UP" },
  { name: "Gujarat", users: 3450, code: "GJ" },
  { name: "Rajasthan", users: 2650, code: "RJ" },
  { name: "West Bengal", users: 2340, code: "WB" },
  { name: "Andhra Pradesh", users: 1890, code: "AP" },
  { name: "Telangana", users: 1560, code: "TG" }
]

export const conversionsBySource = [
  { name: "Google Ads", value: 35, color: "hsl(var(--chart-1))" },
  { name: "Facebook", value: 28, color: "hsl(var(--chart-2))" },
  { name: "Email", value: 18, color: "hsl(var(--chart-3))" },
  { name: "Organic", value: 12, color: "hsl(var(--chart-4))" },
  { name: "Direct", value: 7, color: "hsl(var(--chart-5))" }
]

export const campaignData = [
  {
    id: 1,
    campaign: "Summer Sale 2024",
    spend: 1285000,
    clicks: 12480,
    conversions: 340,
    roi: 2.8,
    status: "Active"
  },
  {
    id: 2,
    campaign: "Black Friday Prep",
    spend: 1925000,
    clicks: 18920,
    conversions: 495,
    roi: 3.2,
    status: "Active"
  },
  {
    id: 3,
    campaign: "Brand Awareness Q4",
    spend: 742000,
    clicks: 15600,
    conversions: 180,
    roi: 1.9,
    status: "Paused"
  },
  {
    id: 4,
    campaign: "Holiday Collection",
    spend: 2600000,
    clicks: 28400,
    conversions: 720,
    roi: 4.1,
    status: "Active"
  },
  {
    id: 5,
    campaign: "New Product Launch",
    spend: 1067000,
    clicks: 9600,
    conversions: 240,
    roi: 2.5,
    status: "Active"
  },
  {
    id: 6,
    campaign: "Retargeting Campaign",
    spend: 467000,
    clicks: 8200,
    conversions: 195,
    roi: 3.8,
    status: "Active"
  },
  {
    id: 7,
    campaign: "Spring Collection",
    spend: 1575000,
    clicks: 14200,
    conversions: 380,
    roi: 2.9,
    status: "Completed"
  },
  {
    id: 8,
    campaign: "Video Ad Campaign",
    spend: 1867000,
    clicks: 31200,
    conversions: 520,
    roi: 3.6,
    status: "Active"
  },
  {
    id: 9,
    campaign: "Local Store Promotion",
    spend: 650000,
    clicks: 6400,
    conversions: 125,
    roi: 2.1,
    status: "Paused"
  },
  {
    id: 10,
    campaign: "Mobile App Install",
    spend: 1375000,
    clicks: 24800,
    conversions: 420,
    roi: 3.4,
    status: "Active"
  }
]

export const kpiMetrics = {
  revenue: {
    current: 61830000,
    trend: { value: 12.5, isPositive: true }
  },
  users: {
    current: 13770,
    trend: { value: 8.2, isPositive: true }
  },
  conversions: {
    current: 3615,
    trend: { value: 15.3, isPositive: true }
  },
  growth: {
    current: 23.7,
    trend: { value: 4.1, isPositive: true }
  }
}