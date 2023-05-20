import { BackToTimeLine } from '@/components/BackToTimeLine'
import { Forms } from '@/components/Forms'

export default function NewMemory() {
  return (
    <div className="flex flex-1 flex-col gap-4">
      {/* BACK TO TIMELINE */}
      <BackToTimeLine />
      {/* FORM */}
      <Forms />
    </div>
  )
}
