import { useEffect, useState } from 'react'

export function useStoredState(key, initialValue, storage = localStorage) {
  const [value, setValue] = useState(() => {
    const saved = storage.getItem(key)
    return saved === null ? initialValue : JSON.parse(saved)
  })

  useEffect(() => {
    storage.setItem(key, JSON.stringify(value))
  }, [key, value, storage])

  return [value, setValue]
}
