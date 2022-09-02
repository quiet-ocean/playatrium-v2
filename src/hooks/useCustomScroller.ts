import { useEffect, useCallback, useState } from 'react'

function disableScroll() {
  document.body.style.overflowY = 'hidden'
}
function enableScroll() {
  document.body.style.overflowY = 'scroll'
}
function throttle(cb: AnyFunction, limit: number) {
  // console.log('throttle function')
  var wait = false
  return function () {
    // console.log('throttle function content')
    if (!wait) {
      cb()
      wait = true
      setTimeout(function () {
        wait = false
      }, limit)
    }
  }
}
const useCustomScroller = (callback: AnyFunction, done: boolean, index: number) => {
  // let y = 0
  // let to = 0
  // let distance: number = 0
  let wheeling = false
  let intervalId: any = 0
  const speed = 9

  const [y, setY] = useState(0)
  const [distance, setDistance] = useState(0)
  const [to, setTo] = useState(0)

  // function throttle(fn: AnyFunction, wait: any) {
  //   var time = Date.now()
  //   return function () {
  //     if (time + wait - Date.now() < 0) {
  //       fn()
  //       time = Date.now()
  //     }
  //   }
  // }
  useEffect(() => {
    applyScrollEventListener()

    return () => removeScrollEventListener()
  }, [callback, done, index])

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [to, y])

  // const doScroll = (pos) => {
  //   window.scrollTo(0, _y)
  //   callback()
  // }
  const handleScroll = useCallback(() => {
    // callback(to > y, doScroll)
    doScroll()
  }, [y, to])
  const doScroll = useCallback(() => {
    console.log('handle scroll', to, y)
    if (distance > 0 && to > y) {
      // if (to > y) {
      // y += 10
      setY((y) => {
        const _y = y + speed * 5

        throttle(() => {
          // window.scrollTo(0, _y)
          window.scrollTo({
            behavior: 'smooth',
            top: _y,
          })
        }, 10)()

        return _y
      })
      // throttle(() => {
      //   window.scrollTo(0, y)
      // }, 10)()
      // }
    } else if (distance < 0 && to < y) {
      setY((y) => {
        const _y = y - speed * 5

        throttle(() => {
          window.scrollTo({
            behavior: 'smooth',
            top: _y,
          })
        }, 10)()

        return _y
      })
    }
    // throttle(() => {
    //   window.scrollTo(0, y)
    // }, 10)()
  }, [to, y])

  // useEffect(() => {
  //   handleScroll()
  // }, [y])
  useEffect(() => {
    handleScroll()
  }, [to])
  useEffect(() => {
    // console.log('distance: ', distance)
  }, [distance])
  const scrollTo = useCallback(() => {
    // to = y + distance
    setTo(y + Number(distance) * 3)
    // to = window.scrollY + distance
    // // console.log('scroll from to', y, _y)
    // // y += _y
    // let _y = window.scrollY + distance * 3
    // y = window.scrollY
    // console.log('start scroll')
    // // window.scrollTo(window.scrollX, _y)
    // // window.scroll({ behavior: 'smooth', left: 0, top: _y }).then(() => {
    // //   console.log('The browser has finished scrolling')
    // // // })
    // // window.scroll({
    // //   behavior: 'smooth',
    // //   left: 0,
    // //   top: _y,
    // // })
    // while(_y > y)  {

    //   y += 10
    //   window.scroll({
    //     behavior: 'smooth',
    //     left: 0,
    //     top: y
    //   })
    // }
    // console.log('end scroll')/
  }, [distance, y])
  const handleWheel = useCallback(() => {
    // disableScroll()

    // throttle(() => {
    if (wheeling) {
      // console.log('handle wheel function')
      wheeling = false
      // handleScroll()
      // to = y + distance
      // setTo(y + distance)
      callback(to < y, () => {
        setTo(y + distance * 5)
      })
      // if (window.scrollY > y) {
      // callback(distance > 0, () => {

      //   throttle(() => {
      //     scrollTo()
      //   }, 100)()
      // })
      // }
      // }, 50)
    }

    // y = window.scrollY
  }, [distance, y])
  const enableWheel = (e: WheelEvent) => {
    // console.log('wheel event', e)
    e.preventDefault()
    e.stopPropagation()
    // distance = e.deltaY
    setDistance(e.deltaY)
    // console.log(e.)
    wheeling = true
  }
  const applyScrollEventListener = () => {
    window.addEventListener('wheel', enableWheel, { passive: false })

    intervalId = setInterval(handleWheel, 100)
  }
  const removeScrollEventListener = () => {
    window.addEventListener('wheel', enableWheel)
    clearInterval(intervalId)
  }
  return null
}

export default useCustomScroller
