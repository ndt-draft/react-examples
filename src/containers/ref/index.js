import React from 'react'

class RefEx extends React.Component {
  constructor(props) {
    super(props)
    this.myRef = React.createRef()
  }

  componentDidMount() {
    this.myRef.current.innerHTML = '123'
  }

  render() {
    return <div ref={this.myRef}>Ref Example</div>
  }
}

export default RefEx
