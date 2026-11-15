import { ArrowLeft } from 'lucide-react'
import BookmarkButton from './BookmarkButton'
import Markdown from './Markdown'

export default function CoursePage({ course, sectionId, bookmarked, onOpen, onBack, onToggleBookmark }) {
  const section = course.sections.find((item) => item.id === sectionId) || course.sections[0]

  return (
    <div className="course">
      <aside className="sidebar">
        <button className="back" onClick={onBack}>
          <ArrowLeft size={16} />
          All courses
        </button>
        <p className="sidebar-code">{course.code}</p>
        <h2 className="sidebar-title">{course.title}</h2>
        <nav className="nav">
          {course.sections.map((item) => (
            <button
              key={item.id}
              className={item.id === section.id ? 'nav-item active' : 'nav-item'}
              onClick={() => onOpen(course.id, item.id)}
            >
              {item.title}
            </button>
          ))}
        </nav>
      </aside>
      <main className="content">
        <div className="content-actions">
          <BookmarkButton active={bookmarked} onClick={() => onToggleBookmark(course.id)} />
        </div>
        <Markdown text={section.body} />
      </main>
    </div>
  )
}
