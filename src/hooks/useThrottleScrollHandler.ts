import { useEffect, useCallback } from 'react'

export const useThrottleScrollHandler = (
  callback: AnyFunction,
  ref: React.RefObject<HTMLDivElement>,
  delay: number,
  scrollable: boolean
) => {
  let scrolling = false
  let intervalId: any = 0

  useEffect(() => {
    if (!ref.current) return

    init()

    return () => {
      clearEventListeners()
    }
  }, [callback, delay, scrollable])

  const init = useCallback(() => {
    // console.log('change callback')
    // console.log('init', ref, delay)
    clearEventListeners()
    applyScrollEventListener()
    intervalId = setInterval(() => {
      if (scrolling) {
        scrolling = false
        callback()
      }
    }, delay)
  }, [callback])
  const clearEventListeners = () => {
    removeScrollEventListener()
    clearInterval(intervalId)
  }
  const applyScrollEventListener = () => {
    ref.current?.addEventListener('wheel', handleScroll, {
      passive: false,
    })
  }
  const removeScrollEventListener = () => {
    ref.current?.removeEventListener('wheel', handleScroll)
  }
  const handleScroll = useCallback(
    (e: WheelEvent) => {
      // console.log(scrolling, intervalId)
      if (!scrollable) e.preventDefault()
      scrolling = true
    },
    [scrollable]
  )

  return null
}
