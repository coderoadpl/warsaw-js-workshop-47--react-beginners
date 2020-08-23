import React from 'react'
import Message from './Message'

const MessagesList = (props) => {
  const { messages } = props

  return (
    messages.map((message, i) => {
      return (
        <Message
          key={i}
          message={message}
        />
      )
    })
  )
}

export default MessagesList