import BookmarkButton from './BookmarkButton'

export default function CourseCard({ course, bookmarked, onOpen, onToggleBookmark }) {
  return (
    <article className="card">
      <div className="card-top">
        <span className="card-code">{course.code}</span>
        <BookmarkButton active={bookmarked} onClick={() => onToggleBookmark(course.id)} />
      </div>
      <h3 className="card-title">
        <button onClick={() => onOpen(course.id)}>{course.title}</button>
      </h3>
      <p className="card-summary">{course.summary}</p>
      <div className="tags">
        <span className="tag">{course.credits} credits</span>
        <span className="tag">{course.category}</span>
      </div>
    </article>
  )
}
