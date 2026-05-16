import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"

interface Props {
  open: boolean
  onOpenChange: (open: boolean) => void
  summary: string
}

export default function SummaryDialog({
  open,
  onOpenChange,
  summary,
}: Props) {
  return (
    <Dialog
      open={open}
      onOpenChange={onOpenChange}
    >
      <DialogContent className="bg-zinc-900 border-zinc-800 text-white max-w-3xl">
        <DialogHeader>
          <DialogTitle>
            AI Summary
          </DialogTitle>
        </DialogHeader>

        <div className="max-h-[500px] overflow-y-auto">
          <p className="text-zinc-300 leading-relaxed whitespace-pre-wrap">
            {summary}
          </p>
        </div>
      </DialogContent>
    </Dialog>
  )
}