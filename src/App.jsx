import { useState, useEffect, useRef } from 'react'
import ScheduleList from './components/ScheduleList.jsx'
import ClassForm from './components/ClassForm.jsx'
import EmptyState from './components/EmptyState.jsx'
import { useClassSchedule } from './hooks/useClassSchedule.js'

function App() {
  const { classes, add, update, remove } = useClassSchedule()
  const [editingClass, setEditingClass] = useState(null)
  const [saved, setSaved] = useState(false)
  const subjectInputRef = useRef(null)

  useEffect(() => {
    if (!saved) return
    const timer = setTimeout(() => setSaved(false), 2000)
    return () => clearTimeout(timer)
  }, [saved])

  const handleAdd = (clsData) => {
    add(clsData)
    setSaved(true)
  }

  const handleEdit = (cls) => {
    setEditingClass(cls)
  }

  const handleFormSubmit = (clsData) => {
    if (editingClass) {
      update(editingClass.id, clsData)
      setEditingClass(null)
    } else {
      add(clsData)
    }
    setSaved(true)
  }

  const handleDelete = (id) => {
    if (window.confirm('Remove this class?')) {
      remove(id)
      setSaved(true)
    }
  }

  const handleEmptyAdd = () => {
    if (subjectInputRef.current) {
      subjectInputRef.current.focus()
    }
  }

  return (
    <div className="app">
      <header className="app-header">
        <h1>Class Schedule Viewer</h1>
      </header>
      <main className="app-main">
        <section className="form-section">
          <ClassForm
            onSubmit={handleFormSubmit}
            initialData={editingClass}
            subjectInputRef={subjectInputRef}
          />
          {saved && (
            <p className="saved-indicator" role="status" aria-live="polite">
              Saved
            </p>
          )}
        </section>
        <section className="schedule-section">
          {classes.length === 0 ? (
            <EmptyState onAdd={handleEmptyAdd} />
          ) : (
            <ScheduleList
              classes={classes}
              onEdit={handleEdit}
              onDelete={handleDelete}
            />
          )}
        </section>
      </main>
    </div>
  )
}

export default App
