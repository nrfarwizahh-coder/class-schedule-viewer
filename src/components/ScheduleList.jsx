import ClassItem from './ClassItem.jsx'

function ScheduleList({ classes, onEdit, onDelete }) {
  if (classes.length === 0) {
    return <div className="schedule-list" />
  }

  return (
    <div className="schedule-list" role="list">
      {classes.map((cls) => (
        <ClassItem
          key={cls.id}
          cls={cls}
          onEdit={onEdit}
          onDelete={onDelete}
        />
      ))}
    </div>
  )
}

export default ScheduleList
