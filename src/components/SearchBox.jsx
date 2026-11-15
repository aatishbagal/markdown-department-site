import { Search } from 'lucide-react'

export default function SearchBox({ value, onChange, placeholder }) {
  return (
    <label className="search">
      <Search size={16} />
      <input
        type="search"
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder={placeholder}
      />
    </label>
  )
}
