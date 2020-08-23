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

  // const messagesElements = []

  // for (let i = 0; i < messages.length; i++){
  //   const message = messages[i]
  //   const messageElement = <Message text={message.text} />
  //   messagesElements.push(messageElement)
  // }

  const messagesElements = messages.map((message) => {
    return <Message text={message.text} />
  })

  return (
    <div>
      {messagesElements}
    </div>
  )
}

export default App