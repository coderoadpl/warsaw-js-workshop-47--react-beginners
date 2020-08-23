import React from 'react'
import Message from './Message'

const App = () => {
  return (
    <div>
      <Message text={'Hello!'} />
      <Message text={'Hi!'} />
      <Message text={2 + 2} />
    </div>
  )
}

export default App