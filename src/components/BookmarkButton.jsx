import { Bookmark } from 'lucide-react'

export default function BookmarkButton({ active, onClick }) {
  return (
    <button
      className={active ? 'icon-button active' : 'icon-button'}
      onClick={onClick}
      aria-pressed={active}
      aria-label={active ? 'Remove bookmark' : 'Bookmark course'}
    >
      <Bookmark size={18} fill={active ? 'currentColor' : 'none'} />
    </button>
  )
}
