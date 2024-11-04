import React from 'react'

function ChildComponent(props) {
  return (
    <div>
        <button onClick={props.greetHandler}>Greet Me!</button>
    </div>
  )
}

// We are defining the child component and then using passing it to the Parent Component.
// So effectively in the App, we are using only Parent component, we might use multiple Child components in a singe Parent Component
// We are declaring the button in the Child Component and defining the eventHandler in the Parent Component.

export default ChildComponent