import React from 'react'
import moment from 'moment'

const Message = (props) => {
  const { message, ...otherProps } = props
  const { text, sender, date } = message

  return (
    <div {...otherProps}>
      {sender}{' '}
      {moment(date).format('HH:mm:ss')}
      {' | '}
      {text}{' '}
    </div>
  )
}

export default Message