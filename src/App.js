import React from 'react'
import Message from './Message'

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
      {
        messages.map((message) => {
          return <Message text={message.text} />
        })
      }
    </div>
  )
}

export default App