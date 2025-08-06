import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogFooter } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { DatePicker } from "@/components/ui/date-picker"
import { Filter } from "lucide-react"

interface FilterModalProps {
  onApplyFilters: (filters: {
    dateFrom?: Date
    dateTo?: Date
    campaign?: string
    status?: string
  }) => void
}

export function FilterModal({ onApplyFilters }: FilterModalProps) {
  const [open, setOpen] = useState(false)
  const [dateFrom, setDateFrom] = useState<Date>()
  const [dateTo, setDateTo] = useState<Date>()
  const [campaign, setCampaign] = useState<string>()
  const [status, setStatus] = useState<string>()

  const handleApply = () => {
    onApplyFilters({
      dateFrom,
      dateTo,
      campaign,
      status
    })
    setOpen(false)
  }

  const handleReset = () => {
    setDateFrom(undefined)
    setDateTo(undefined)
    setCampaign(undefined)
    setStatus(undefined)
    onApplyFilters({})
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" size="sm" className="hidden sm:flex">
          <Filter className="h-4 w-4 mr-2" />
          Filters
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Filter Data</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid gap-2">
            <Label htmlFor="date-from">Date From</Label>
            <DatePicker
              date={dateFrom}
              onSelect={setDateFrom}
              placeholder="Select start date"
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="date-to">Date To</Label>
            <DatePicker
              date={dateTo}
              onSelect={setDateTo}
              placeholder="Select end date"
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="campaign">Campaign Type</Label>
            <Select value={campaign} onValueChange={setCampaign}>
              <SelectTrigger>
                <SelectValue placeholder="Select campaign type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="summer-sale">Summer Sale</SelectItem>
                <SelectItem value="black-friday">Black Friday</SelectItem>
                <SelectItem value="brand-awareness">Brand Awareness</SelectItem>
                <SelectItem value="holiday">Holiday Collection</SelectItem>
                <SelectItem value="product-launch">Product Launch</SelectItem>
                <SelectItem value="retargeting">Retargeting</SelectItem>
                <SelectItem value="video-ads">Video Ads</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="grid gap-2">
            <Label htmlFor="status">Status</Label>
            <Select value={status} onValueChange={setStatus}>
              <SelectTrigger>
                <SelectValue placeholder="Select status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="active">Active</SelectItem>
                <SelectItem value="paused">Paused</SelectItem>
                <SelectItem value="completed">Completed</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        <DialogFooter>
          <Button variant="outline" onClick={handleReset}>
            Reset
          </Button>
          <Button onClick={handleApply}>
            Apply Filters
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}