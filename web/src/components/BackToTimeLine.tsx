import { Link } from 'lucide-react'
import { MdKeyboardArrowLeft } from 'react-icons/md'

export function BackToTimeLine() {
  return (
    <Link
      href="/"
      className="flex items-center gap-1 text-sm text-gray-200 hover:text-gray-100"
    >
      <MdKeyboardArrowLeft className="h-4 w-4" />
      voltar a timeline
    </Link>
  )
}
