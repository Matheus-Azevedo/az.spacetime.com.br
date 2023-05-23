import { BackToTimeLine } from '@/components/BackToTimeLine'
import { RegisterMemoryForm } from '@/components/RegisterMemoryForm'

export default function NewMemory() {
  return (
    <div className="flex flex-1 flex-col gap-4">
      {/* BACK TO TIMELINE */}
      <BackToTimeLine />
      {/* FORM */}
      <RegisterMemoryForm />
    </div>
  )
}
