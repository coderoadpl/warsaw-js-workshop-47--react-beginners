import React from 'react'

// const NewMessageForm = () => {
//   return (
//     <input
//       value={'New message text!'}
//       onChange={(event) => console.log(event.target.value)}
//     />
//   )
// }

class NewMessageForm extends React.Component {

  constructor(props) {
    super(props)
    console.log('constructor')
    this.state = {
      newMessage: ''
    }
  }

  componentDidMount() {
    console.log('componentDidMount')
  }

  componentDidUpdate() {
    console.log('componentDidUpdate')
  }

  render() {
    console.log('render')

    return (
      <input
        value={this.state.newMessage}
        onChange={(event) => this.setState({
          newMessage: event.target.value
        })}
      />
    )
  }

}

export default NewMessageForm