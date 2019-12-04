import { useLayoutEffect, useState } from 'react'

export default function useAnswerHeight(ref) {
  const [maxHeight, setMaxHeight] = useState(undefined)

  useLayoutEffect(() => {
    const answerEl = ref.current

    const originals = {
      className: answerEl.className,
      transition: answerEl.style.transition,
    }
    answerEl.style.transition = 'none'
    answerEl.className = ''
    const height = answerEl.getBoundingClientRect().height
    answerEl.className = originals.className
    answerEl.style.transition = originals.transition
    setMaxHeight(height)
  }, [ref])
  return maxHeight
}
