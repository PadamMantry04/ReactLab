import React, { Component } from 'react'

class RefsComp extends Component {
    constructor(props) {
      super(props)
      this.inputRef = React.createRef() // Note: It is common to create refs in the constructor so that they can be accessed/referenced to other components
    }
    // The componentDidMount method in react is used to execute some code immediately after mounting.
    componentDidMount(){
        this.inputRef.current.focus()
    }
  render() {
    return (
      <div>
        <input type="text" ref={this.inputRef}/> 
        </div>
    )
  }
}

export default RefsComp