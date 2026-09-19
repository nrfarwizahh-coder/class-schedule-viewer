import { useState, useCallback } from 'react'

const STORAGE_KEY = 'class-schedule'

function readFromStorage() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return []
    return JSON.parse(raw)
  } catch {
    return []
  }
}

function writeToStorage(classes) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(classes))
  } catch {
    // storage full or unavailable — silent fail
  }
}

export function useClassSchedule() {
  const [classes, setClasses] = useState(() => readFromStorage())

  const add = useCallback((cls) => {
    const newCls = { ...cls, id: Date.now().toString() }
    setClasses((prev) => {
      const next = [...prev, newCls]
      writeToStorage(next)
      return next
    })
  }, [])

  const update = useCallback((id, updated) => {
    setClasses((prev) => {
      const next = prev.map((cls) => (cls.id === id ? { ...updated, id } : cls))
      writeToStorage(next)
      return next
    })
  }, [])

  const remove = useCallback((id) => {
    setClasses((prev) => {
      const next = prev.filter((cls) => cls.id !== id)
      writeToStorage(next)
      return next
    })
  }, [])

  return { classes, add, update, remove }
}
