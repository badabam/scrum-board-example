import { useState, useEffect } from 'react'
import { getCards } from '../services'

export default function useCards() {
  const [cards, setCards] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    getCards()
      .then(loadedCards => {
        setCards(loadedCards)
      })
      .catch(err => {
        console.log(err)
        setCards([])
      })
      .finally(() => {
        setIsLoading(false)
      })
  }, [])
  return { cards, setCards, isLoading }
}
