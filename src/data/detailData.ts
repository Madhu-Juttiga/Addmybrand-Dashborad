// Detail data for interactive metric cards

export const revenueDetailData = {
  chartData: [
    { name: "Jan", value: 3750000 },
    { name: "Feb", value: 4340000 },
    { name: "Mar", value: 4000000 },
    { name: "Apr", value: 5085000 },
    { name: "May", value: 4587500 },
    { name: "Jun", value: 5587500 },
    { name: "Jul", value: 6000000 },
    { name: "Aug", value: 5752500 },
    { name: "Sep", value: 6500000 },
    { name: "Oct", value: 7087500 },
    { name: "Nov", value: 7670000 },
    { name: "Dec", value: 7340000 }
  ],
  chartType: "line" as const,
  dataKey: "value",
  color: "hsl(var(--chart-1))",
  breakdown: [
    { label: "Subscription Revenue", value: "₹52,00,000" },
    { label: "One-time Purchases", value: "₹9,84,000" },
    { label: "Average Order Value", value: "₹13,000" },
    { label: "Monthly Growth Rate", value: "12.5%" }
  ],
  insights: [
    "Revenue increased by 45% compared to Q3, driven by strong holiday sales",
    "Subscription revenue now accounts for 84% of total revenue",
    "December showed the highest single-month revenue in company history",
    "Mobile purchases increased by 67% year-over-year"
  ]
}

export const usersDetailData = {
  chartData: [
    { name: "Jan", value: 8420 },
    { name: "Feb", value: 9150 },
    { name: "Mar", value: 9800 },
    { name: "Apr", value: 10200 },
    { name: "May", value: 11100 },
    { name: "Jun", value: 11800 },
    { name: "Jul", value: 12200 },
    { name: "Aug", value: 12900 },
    { name: "Sep", value: 13100 },
    { name: "Oct", value: 13500 },
    { name: "Nov", value: 13600 },
    { name: "Dec", value: 13770 }
  ],
  chartType: "bar" as const,
  dataKey: "value",
  color: "hsl(var(--chart-2))",
  breakdown: [
    { label: "New Users This Month", value: "1,247" },
    { label: "Returning Users", value: "12,523" },
    { label: "User Retention Rate", value: "87.3%" },
    { label: "Average Session Duration", value: "4m 32s" }
  ],
  insights: [
    "User base grew by 8.2% this month, exceeding growth targets",
    "Mobile users now represent 73% of total active users",
    "User engagement increased with new onboarding flow",
    "Premium subscription conversion rate improved to 23.4%"
  ]
}

export const conversionsDetailData = {
  chartData: [
    { name: "Jan", value: 245 },
    { name: "Feb", value: 289 },
    { name: "Mar", value: 312 },
    { name: "Apr", value: 378 },
    { name: "May", value: 425 },
    { name: "Jun", value: 467 },
    { name: "Jul", value: 534 },
    { name: "Aug", value: 598 },
    { name: "Sep", value: 645 },
    { name: "Oct", value: 712 },
    { name: "Nov", value: 789 },
    { name: "Dec", value: 823 }
  ],
  chartType: "bar" as const,
  dataKey: "value",
  color: "hsl(var(--chart-3))",
  breakdown: [
    { label: "Email Conversions", value: "1,247" },
    { label: "Social Media Conversions", value: "892" },
    { label: "Organic Search Conversions", value: "1,156" },
    { label: "Paid Ads Conversions", value: "320" }
  ],
  insights: [
    "Conversion rate increased by 15.3% this month, the highest growth yet",
    "Email campaigns show the strongest conversion performance at 18.4%",
    "Mobile conversions now account for 68% of total conversions",
    "A/B testing on landing pages improved conversion rates by 23%"
  ]
}

export const growthRateDetailData = {
  chartData: [
    { name: "Q1 2023", value: 12.4 },
    { name: "Q2 2023", value: 15.7 },
    { name: "Q3 2023", value: 18.2 },
    { name: "Q4 2023", value: 21.8 },
    { name: "Q1 2024", value: 23.7 },
    { name: "Q2 2024", value: 19.3 },
    { name: "Q3 2024", value: 22.1 },
    { name: "Q4 2024", value: 23.7 }
  ],
  chartType: "line" as const,
  dataKey: "value",
  color: "hsl(var(--chart-4))",
  breakdown: [
    { label: "Monthly Recurring Revenue Growth", value: "23.7%" },
    { label: "User Acquisition Growth", value: "18.4%" },
    { label: "Product Usage Growth", value: "31.2%" },
    { label: "Market Expansion Rate", value: "15.8%" }
  ],
  insights: [
    "Growth rate has remained consistently above 20% for the past 6 months",
    "Product-led growth strategies are driving 67% of new acquisitions",
    "International markets show 45% higher growth rates than domestic",
    "Customer lifetime value increased by 28% contributing to sustainable growth"
  ]
}