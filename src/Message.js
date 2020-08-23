import React from 'react'

const Message = (props) => {
  const { message, ...otherProps } = props
  const { text } = message

  return <div {...otherProps}>{text}</div>
}

export default Message