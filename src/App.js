import React from 'react'
import MessagesList from './MessagesList'

const messages = [
  {
    text: 'Hello',
    sender: 'Mateusz',
    date: Date.now(),
  },
  {
    text: 'hi!',
    sender: 'Mateusz',
    date: Date.now(),
  }
]

const App = () => {
  return (
    <div>
      <MessagesList messages={messages} />
    </div>
  )
}

export default App