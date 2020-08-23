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
      (snapshot) => console.log(snapshot.val())
    )
  }, [])

  const addMessage = (newMessageText) => {
    const newMessageObj = {
      text: newMessageText,
      sender: SENDER,
      date: Date.now(),
    }

    setMessages(messages.concat(newMessageObj))
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