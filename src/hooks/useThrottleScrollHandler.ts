import { useEffect, useCallback } from 'react'

export const useThrottleScrollHandler = (
  callback: AnyFunction,
  ref: React.RefObject<HTMLDivElement>,
  delay: number
) => {
  let scrolling = false
  let intervalId: any = 0

}
