import React from 'react'

class RefEx extends React.Component {
  constructor(props) {
    super(props)
    this.input = React.createRef()
  }

  componentDidMount() {
    this.input.current.focus()
  }

  render() {
    return (
      <div>
        <input ref={this.input} />
      </div>
    )
  }
}

export default RefEx
