import React, { useState } from 'react'

function ClassForm({ onSubmit, initialData, subjectInputRef }) {
  const isEdit = initialData && initialData.id
  const [subject, setSubject] = useState(initialData?.subject || '')
  const [dayTime, setDayTime] = useState(initialData?.dayTime || '')
  const [room, setRoom] = useState(initialData?.room || '')
  const [instructor, setInstructor] = useState(initialData?.instructor || '')
  const [color, setColor] = useState(initialData?.color || '#3498db')

  const handleSubmit = (e) => {
    e.preventDefault()
    onSubmit({ subject, dayTime, room, instructor, color })
  }

  return (
    <form className="class-form" onSubmit={handleSubmit}>
      <h2 className="form-title">{isEdit ? 'Edit Class' : 'Add Class'}</h2>
      <div className="form-field">
        <label htmlFor="subject">Subject</label>
        <input
          id="subject"
          ref={subjectInputRef}
          type="text"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          placeholder="e.g. Math 101"
          required
        />
      </div>
      <div className="form-field">
        <label htmlFor="dayTime">Day / Time</label>
        <input
          id="dayTime"
          type="text"
          value={dayTime}
          onChange={(e) => setDayTime(e.target.value)}
          placeholder="e.g. Monday 9:00 AM"
          required
        />
      </div>
      <div className="form-field">
        <label htmlFor="room">Room</label>
        <input
          id="room"
          type="text"
          value={room}
          onChange={(e) => setRoom(e.target.value)}
          placeholder="e.g. Room 201"
          required
        />
      </div>
      <div className="form-field">
        <label htmlFor="instructor">Instructor</label>
        <input
          id="instructor"
          type="text"
          value={instructor}
          onChange={(e) => setInstructor(e.target.value)}
          placeholder="e.g. Dr. Smith"
          required
        />
      </div>
      <div className="form-field">
        <label htmlFor="color">Color</label>
        <input
          id="color"
          type="color"
          value={color}
          onChange={(e) => setColor(e.target.value)}
        />
      </div>
      <button type="submit" className="btn btn-primary">
        {isEdit ? 'Save Changes' : 'Add Class'}
      </button>
    </form>
  )
}

export default ClassForm
