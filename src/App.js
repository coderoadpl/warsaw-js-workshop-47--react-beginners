import React from 'react'
import MessagesList from './MessagesList'
import NewMessageForm from './NewMessageForm'

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
  const [newMessage, setNewMessage] = React.useState('')

  return (
    <div>
      <MessagesList messages={messages} />
      <NewMessageForm
        newMessage={newMessage}
        setNewMessage={setNewMessage}
      />
    </div>
  )
}

export default App