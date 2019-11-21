import React, { useState } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import cardsData from './cards.json'
import Create from './Create.js'
import Home from './Home.js'
import Nav from './Nav.js'

function App() {
  const [cards, setCards] = useState(cardsData)

  function toggleBookmark(index) {
    const card = cards[index]
    setCards([
      ...cards.slice(0, index),
      { ...card, isBookmarked: !card.isBookmarked },
      ...cards.slice(index + 1),
    ])
  }

  return (
    <Router>
      <Nav
        items={[
          { path: '/', text: 'Hello' },
          { path: '/create', text: 'Create' },
        ]}
      />
      <Switch>
        <Route exact path="/">
          <Home cards={cards} toggleBookmark={toggleBookmark} />
        </Route>
        <Route path="/create">
          <Create />
        </Route>
      </Switch>
    </Router>
  )
}

export default App
