import { Moon, Sun } from 'lucide-react'
import { site } from '../site'
import Logo from './Logo'

const links = [
  { page: 'home', label: 'Home' },
  { page: 'courses', label: 'Courses' },
  { page: 'faculty', label: 'Faculty' },
]

export default function Header({ theme, activePage, onNavigate, onToggleTheme }) {
  return (
    <header className="header">
      <button className="brand" onClick={() => onNavigate('home')}>
        <Logo height={36} />
        <span className="brand-text">
          <span className="brand-title">{site.department}</span>
          <span className="brand-subtitle">{site.institute}</span>
        </span>
      </button>
      <div className="header-actions">
        <nav className="header-nav">
          {links.map((link) => (
            <button
              key={link.page}
              className={link.page === activePage ? 'header-link active' : 'header-link'}
              onClick={() => onNavigate(link.page)}
            >
              {link.label}
            </button>
          ))}
        </nav>
        <button className="icon-button" onClick={onToggleTheme} aria-label="Toggle light and dark mode">
          {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
        </button>
      </div>
    </header>
  )
}
