import { useLayoutEffect, useState } from 'react'

export default function useAnswerHeight(ref) {
  const [maxHeight, setMaxHeight] = useState(undefined)

  useLayoutEffect(() => {
    const answer = ref.current
    const originals = {
      className: answer.className,
      transition: answer.style.transition,
    }
    answer.style.transition = 'none'
    answer.className = ''
    const height = answer.getBoundingClientRect().height
    answer.className = originals.className
    answer.style.transition = originals.transition
    setMaxHeight(height)
  }, [])
  return maxHeight
}
