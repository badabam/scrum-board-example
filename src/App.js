import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Create from './Create.js'
import Home from './Home.js'
import useCards from './hooks/useCards.js'
import Nav from './Nav.js'
import { patchCard } from './services.js'

function App() {
  const { cards, setCards, isLoading } = useCards()

  function toggleBookmark(id) {
    const index = cards.findIndex(card => card._id === id)
    const card = cards[index]
    patchCard({ _id: card._id, isBookmarked: !card.isBookmarked }).then(
      changedCard => {
        setCards([
          ...cards.slice(0, index),
          changedCard,
          ...cards.slice(index + 1),
        ])
      }
    )
  }

  return (
    <Router>
      <Nav
        links={[
          { path: '/', text: 'Hello' },
          { path: '/create', text: 'Create' },
        ]}
      />
      <Switch>
        <Route exact path="/">
          {isLoading ? (
            <div>... loading ...</div>
          ) : (
            <Home cards={cards} toggleBookmark={toggleBookmark} />
          )}
        </Route>
        <Route path="/create">
          <Create />
        </Route>
      </Switch>
    </Router>
  )
}

export default App
