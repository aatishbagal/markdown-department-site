import { useEffect } from 'react'
import { courses } from './courses'
import { useStoredState } from './useStoredState'
import Header from './components/Header'
import Home from './components/Home'
import Courses from './components/Courses'
import CoursePage from './components/CoursePage'
import Faculty from './components/Faculty'

export default function App() {
  const [theme, setTheme] = useStoredState('theme', 'light')
  const [bookmarks, setBookmarks] = useStoredState('bookmarks', [])
  const [lastView, setLastView] = useStoredState('lastView', null)
  const [view, setView] = useStoredState('currentView', { page: 'home' }, sessionStorage)

  useEffect(() => {
    document.documentElement.dataset.theme = theme
  }, [theme])

  const course = view.page === 'course' && courses.find((item) => item.id === view.courseId)
  const activePage = view.page === 'course' ? 'courses' : view.page

  function showPage(page) {
    setView({ page })
    window.scrollTo(0, 0)
  }

  function openCourse(courseId, sectionId = 'index') {
    setView({ page: 'course', courseId, sectionId })
    setLastView({ courseId, sectionId })
    window.scrollTo(0, 0)
  }

  function toggleTheme() {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  function toggleBookmark(courseId) {
    if (bookmarks.includes(courseId)) {
      setBookmarks(bookmarks.filter((id) => id !== courseId))
    } else {
      setBookmarks([...bookmarks, courseId])
    }
  }

  let content = <Home onNavigate={showPage} />

  if (course) {
    content = (
      <CoursePage
        course={course}
        sectionId={view.sectionId}
        bookmarked={bookmarks.includes(course.id)}
        onOpen={openCourse}
        onBack={() => showPage('courses')}
        onToggleBookmark={toggleBookmark}
      />
    )
  } else if (activePage === 'courses') {
    content = (
      <Courses
        bookmarks={bookmarks}
        lastView={lastView}
        onOpen={openCourse}
        onToggleBookmark={toggleBookmark}
      />
    )
  } else if (activePage === 'faculty') {
    content = <Faculty />
  }

  return (
    <>
      <Header
        theme={theme}
        activePage={activePage}
        onNavigate={showPage}
        onToggleTheme={toggleTheme}
      />
      {content}
    </>
  )
}
