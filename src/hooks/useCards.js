import { useState, useEffect } from 'react'
import { getCards } from '../services'

export default function useCards() {
  const [cards, setCards] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    getCards().then(loadedCards => {
      setCards(loadedCards)
      setIsLoading(false)
    })
  }, [])
  return { cards, setCards, isLoading }
}
