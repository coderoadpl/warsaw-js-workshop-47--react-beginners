import React from 'react'

const NewMessageForm = () => {
  const [newMessage, setNewMessage] = React.useState('')

  return (
    <input
      value={newMessage}
      onChange={(event) => setNewMessage(event.target.value)}
    />
  )
}

export default NewMessageForm