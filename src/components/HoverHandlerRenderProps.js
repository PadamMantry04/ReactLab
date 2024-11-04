import React, { Component } from 'react'

class HoverHandlerRenderProps extends Component {
  render() {
    const {count, incrementCount}= this.props
    return (
      <h1 onMouseOver={incrementCount}>Hovered {count} times</h1>
    )
  }
}

export default HoverHandlerRenderProps