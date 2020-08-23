import React from 'react'
import Message from './Message'

const MessagesList = (props) => {
  const { messages, ...otherProps } = props

  return (
    messages.map((message, i) => {
      return (
        <Message
          key={i}
          message={message}
          {...otherProps}
        />
      )
    })
  )
}

export default MessagesList