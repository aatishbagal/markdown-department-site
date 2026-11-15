import { useState } from 'react'
import { Bookmark } from 'lucide-react'
import { courses } from '../courses'
import { site } from '../site'
import CourseCard from './CourseCard'
import SearchBox from './SearchBox'

export default function Courses({ bookmarks, lastView, onOpen, onToggleBookmark }) {
  const [query, setQuery] = useState('')
  const [onlyBookmarked, setOnlyBookmarked] = useState(false)

  const text = query.trim().toLowerCase()

  const visible = courses.filter((course) => {
    const matchesText = `${course.title} ${course.code}`.toLowerCase().includes(text)
    const matchesBookmark = !onlyBookmarked || bookmarks.includes(course.id)
    return matchesText && matchesBookmark
  })

  const lastCourse = lastView && courses.find((course) => course.id === lastView.courseId)
  const lastSection = lastCourse && lastCourse.sections.find((section) => section.id === lastView.sectionId)

  return (
    <main className="page">
      <h1>{site.coursesHeading}</h1>
      <p className="intro">{site.coursesIntro}</p>

      {lastSection && (
        <button className="continue" onClick={() => onOpen(lastCourse.id, lastSection.id)}>
          Continue where you left off: {lastCourse.title}, {lastSection.title}
        </button>
      )}

      <div className="toolbar">
        <SearchBox value={query} onChange={setQuery} placeholder="Search courses" />
        <button
          className={onlyBookmarked ? 'toggle active' : 'toggle'}
          onClick={() => setOnlyBookmarked(!onlyBookmarked)}
          aria-pressed={onlyBookmarked}
        >
          <Bookmark size={16} fill={onlyBookmarked ? 'currentColor' : 'none'} />
          Bookmarked
        </button>
      </div>

      {visible.length === 0 ? (
        <p className="empty">No courses match your search.</p>
      ) : (
        <div className="grid">
          {visible.map((course) => (
            <CourseCard
              key={course.id}
              course={course}
              bookmarked={bookmarks.includes(course.id)}
              onOpen={onOpen}
              onToggleBookmark={onToggleBookmark}
            />
          ))}
        </div>
      )}
    </main>
  )
}
