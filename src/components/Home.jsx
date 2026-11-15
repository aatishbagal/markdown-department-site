import { ArrowRight, BookOpen, ExternalLink, MapPin, Users } from 'lucide-react'
import { site } from '../site'
import Logo from './Logo'

const sections = [
  {
    page: 'courses',
    title: 'Courses',
    description: 'Syllabus, practicals, schedule, staff, policies and resources for each course.',
    icon: BookOpen,
  },
  {
    page: 'faculty',
    title: 'Faculty',
    description: "The department's teaching staff, with links to their official profiles.",
    icon: Users,
  },
]

export default function Home({ onNavigate }) {
  return (
    <main className="page">
      <section className="hero">
        <Logo height={64} />
        <h1>{site.department}</h1>
        <p className="intro">{site.intro}</p>
      </section>

      <section className="block">
        <h2 className="section-label">About the department</h2>
        {site.about.map((text) => (
          <p key={text} className="paragraph">
            {text}
          </p>
        ))}
        {site.facts.length > 0 && (
          <div className="facts">
            {site.facts.map((fact) => (
              <div key={fact.label} className="fact">
                <span className="fact-value">{fact.value}</span>
                <span className="fact-label">{fact.label}</span>
              </div>
            ))}
          </div>
        )}
      </section>

      <section className="block">
        <h2 className="section-label">Explore</h2>
        <div className="grid">
          {sections.map((section) => {
            const Icon = section.icon
            return (
              <button key={section.page} className="card link-card" onClick={() => onNavigate(section.page)}>
                <Icon size={24} className="card-icon" />
                <span className="card-title">{section.title}</span>
                <span className="card-summary">{section.description}</span>
                <span className="card-link">
                  Read more
                  <ArrowRight size={14} />
                </span>
              </button>
            )
          })}
        </div>
      </section>

      {(site.address.length > 0 || site.links.length > 0) && (
        <section className="block">
          <h2 className="section-label">Location</h2>
          <div className="panel">
            <MapPin size={20} className="panel-icon" />
            <div>
              <address className="address">
                {site.address.map((line) => (
                  <span key={line}>{line}</span>
                ))}
              </address>
              <div className="links">
                {site.links.map((link) => (
                  <a key={link.url} href={link.url} target="_blank" rel="noreferrer">
                    {link.label}
                    <ExternalLink size={14} />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {site.committee && (
        <section className="block">
          <h2 className="section-label">{site.committee.name}</h2>
          <p className="paragraph">{site.committee.description}</p>
          <div className="links">
            <a href={site.committee.url} target="_blank" rel="noreferrer">
              {site.committee.label}
              <ExternalLink size={14} />
            </a>
          </div>
        </section>
      )}

      <section className="block">
        <h2 className="section-label">About this website</h2>
        {site.websiteAbout.map((text) => (
          <p key={text} className="paragraph">
            {text}
          </p>
        ))}
      </section>
    </main>
  )
}
