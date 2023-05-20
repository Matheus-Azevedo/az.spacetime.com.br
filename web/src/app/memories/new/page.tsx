import { BackToTimeLine } from '@/components/BackToTimeLine'
import { RegisterMemory } from '@/components/RegisterMemory'

export default function NewMemory() {
  return (
    <div className="flex flex-1 flex-col gap-4">
      {/* BACK TO TIMELINE */}
      <BackToTimeLine />
      {/* FORM */}
      <RegisterMemory />
    </div>
  )
}
