import { useState } from 'react'
import { ExternalLink } from 'lucide-react'
import { faculty } from '../faculty'
import { site } from '../site'
import SearchBox from './SearchBox'

export default function Faculty() {
  const [query, setQuery] = useState('')

  const designations = [...new Set(faculty.map((person) => person.designation))]
  const text = query.trim().toLowerCase()
  const visible = faculty.filter((person) => person.name.toLowerCase().includes(text))

  return (
    <main className="page">
      <h1>Faculty</h1>
      <p className="intro">
        {faculty.length} faculty members of the {site.department}.
        {site.facultyProfileUrl && ' Each name opens the official profile.'}
      </p>

      <div className="toolbar">
        <SearchBox value={query} onChange={setQuery} placeholder="Search faculty" />
      </div>

      {visible.length === 0 && <p className="empty">No faculty match your search.</p>}

      {designations.map((designation) => {
        const group = visible.filter((person) => person.designation === designation)

        if (group.length === 0) {
          return null
        }

        return (
          <section key={designation} className="faculty-group">
            <h2 className="section-label">
              {designation}s ({group.length})
            </h2>
            <ul className="faculty-list">
              {group.map((person) => (
                <li key={person.id}>
                  {site.facultyProfileUrl ? (
                    <a href={`${site.facultyProfileUrl}${person.id}`} target="_blank" rel="noreferrer">
                      {person.name}
                      <ExternalLink size={14} />
                    </a>
                  ) : (
                    <span>{person.name}</span>
                  )}
                </li>
              ))}
            </ul>
          </section>
        )
      })}
    </main>
  )
}
