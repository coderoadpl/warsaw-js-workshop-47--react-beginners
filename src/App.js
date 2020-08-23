import React from 'react'
import MessagesList from './MessagesList'
import NewMessageForm from './NewMessageForm'

import database from './firebaseConfig'

const SENDER = 'Mateusz'

const App = () => {
  const [newMessage, setNewMessage] = React.useState('')
  const [messages, setMessages] = React.useState([])

  React.useEffect(() => {
    database.ref('messages').on(
      'value',
      (snapshot) => {
        const messagesFromDb = snapshot.val()

        const messages = (
          Object.entries(messagesFromDb || {})
            .map(([key, message]) => ({
              ...message,
              key
            }))
        )

        setMessages(messages)
      }
    )
  }, [])

  const addMessage = (newMessageText) => {
    const newMessageObj = {
      text: newMessageText,
      sender: SENDER,
      date: Date.now(),
    }

    database.ref('messages').push(newMessageObj)

    setNewMessage('')
  }

  const sendMessageHandler = (event) => {
    event.preventDefault()
   
    addMessage(newMessage)
  }

  return (
    <div>
      <MessagesList messages={messages} />
      <NewMessageForm
        newMessage={newMessage}
        setNewMessage={setNewMessage}
        sendMessageHandler={sendMessageHandler}
      />
    </div>
  )
}

export default App