function EmptyState({ onAdd }) {
  return (
    <div className="empty-state">
      <p className="empty-state-message">No classes yet</p>
      <button
        type="button"
        className="btn btn-primary"
        onClick={onAdd}
        aria-label="Add your first class"
      >
        Add your first class
      </button>
    </div>
  )
}

export default EmptyState
