import React from 'react'

const NewMessageForm = (props) => {
  const { newMessage, setNewMessage, ...otherProps} = props

  return (
    <input
      value={newMessage}
      onChange={(event) => setNewMessage(event.target.value)}
      {...otherProps}
    />
  )
}

export default NewMessageForm