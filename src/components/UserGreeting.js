import React, { Component } from 'react'

class UserGreeting extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
        isLoggedIn:true
      }
    }
  render() {
//     1. Approach 1: if/else based
//     if(this.state.isLoggedIn) return(<div>Hello Padam!</div>)
//     else return(<div>Hello Guest!</div>)

//     2. Approach 2: Even better, element variable based: Conditionally Assign the element value to a variable and then render it.
//     let message
//     if(this.state.isLoggedIn){
//         message=<div>Hello Padam</div>
//     }
//     else{
//         message=<div>Hello Guest</div>
//     }
//     return(<div>{message}</div>)
//   }
//     3. Approach 3: Use ternary for conditional assignment
//     return this.state.isLoggedIn? (<div>Hello Padam</div>) : (<div>Hello Guest</div>)
//     4. Approach 4: This is a short ckt, special case where you need to display some text in case of a condition being true or display nothing if not true.
    return this.state.isLoggedIn && (<div>Hello Padam</div>)
  }
}

export default UserGreeting