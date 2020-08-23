import React from 'react'

const NewMessageForm = () => {
  return (
    <input
      value={'New message text!'}
      onChange={(event) => console.log(event.target.value)}
    />
  )
}

export default NewMessageForm