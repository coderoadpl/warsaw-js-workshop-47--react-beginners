import React from 'react'

const NewMessageForm = (props) => {
  const {
    newMessage,
    setNewMessage,
    sendMessageHandler,
    ...otherProps
  } = props

  return (
    <form onSubmit={sendMessageHandler}>
      <input
        value={newMessage}
        onChange={(event) => setNewMessage(event.target.value)}
        {...otherProps}
      />
      <button>SEND</button>
    </form>
  )
}

export default NewMessageForm