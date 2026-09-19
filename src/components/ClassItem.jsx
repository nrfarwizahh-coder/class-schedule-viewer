import { useRef, useState } from 'react'

function ClassItem({ cls, onEdit, onDelete }) {
  const [swiping, setSwiping] = useState(false)
  const [offset, setOffset] = useState(0)
  const startX = useRef(0)
  const currentX = useRef(0)
  const itemRef = useRef(null)

  const SWIPE_THRESHOLD = 60

  const handleTouchStart = (e) => {
    startX.current = e.touches[0].clientX
    currentX.current = startX.current
    setSwiping(true)
  }

  const handleTouchMove = (e) => {
    if (!swiping) return
    currentX.current = e.touches[0].clientX
    const diff = startX.current - currentX.current
    if (diff > 0) {
      setOffset(Math.min(diff, 120))
    }
  }

  const handleTouchEnd = () => {
    if (offset > SWIPE_THRESHOLD) {
      onDelete(cls.id)
    } else {
      setOffset(0)
    }
    setSwiping(false)
  }

  const handleMouseDown = (e) => {
    startX.current = e.clientX
    currentX.current = startX.current
    setSwiping(true)
  }

  const handleMouseMove = (e) => {
    if (!swiping) return
    currentX.current = e.clientX
    const diff = startX.current - currentX.current
    if (diff > 0) {
      setOffset(Math.min(diff, 120))
    }
  }

  const handleMouseUp = () => {
    if (offset > SWIPE_THRESHOLD) {
      onDelete(cls.id)
    } else {
      setOffset(0)
    }
    setSwiping(false)
  }

  return (
    <div
      ref={itemRef}
      className="class-item"
      role="listitem"
      style={{
        transform: `translateX(-${offset}px)`,
        transition: swiping ? 'none' : 'transform 0.2s ease',
      }}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={() => { if (!swiping) return; setOffset(0); setSwiping(false) }}
    >
      <div className="class-item-content" style={{ opacity: offset > 0 ? 1 - offset / 200 : 1 }}>
        <h3 className="class-subject">{cls.subject}</h3>
        <p className="class-detail">{cls.dayTime}</p>
        <p className="class-detail">{cls.room}</p>
        <p className="class-detail">{cls.instructor}</p>
        <span
          className="class-color-indicator"
          style={{ backgroundColor: cls.color }}
          aria-label={`Color: ${cls.color}`}
        />
        <div className="class-actions">
          <button
            type="button"
            className="btn btn-secondary"
            onClick={() => onEdit(cls)}
            aria-label={`Edit ${cls.subject}`}
          >
            Edit
          </button>
          <button
            type="button"
            className="btn btn-danger"
            onClick={() => onDelete(cls.id)}
            aria-label={`Delete ${cls.subject}`}
          >
            Delete
          </button>
        </div>
      </div>
      {offset < SWIPE_THRESHOLD && (
        <div
          className="swipe-delete-zone"
          style={{ opacity: offset > 20 ? 1 : 0 }}
        >
          Delete
        </div>
      )}
    </div>
  )
}

export default ClassItem
