import React from 'react'

const Message = (props) => {
  const { text, ...otherProps } = props

  return <div {...otherProps}>{text}</div>
}

export default Message