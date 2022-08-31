import type React from 'react'
import { useState, useEffect } from 'react'

export const useFocus = ({ ref }: { ref: React.RefObject<HTMLDivElement> }) => {
  const [focus, setFocus] = useState(false)

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleScroll = (event: Event) => {
    const top = ref.current?.getBoundingClientRect().top || -10000
    console.log('Top: ', top)
    setFocus(top > -100 && top < 100)
  }
  return focus
}
