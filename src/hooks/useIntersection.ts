import { useState, useEffect } from 'react'

const useIntersection = (element: any, rootMargin: string) => {
  const [isVisible, setState] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setState(entry.isIntersecting)
      },
      { rootMargin, threshold: 1 }
    )

    element.current && observer.observe(element.current)

    return () => observer.unobserve(element.current)
  }, [])

  return isVisible
}

export default useIntersection
