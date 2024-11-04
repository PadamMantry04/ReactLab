import React, {Component} from 'react'

// any class must extend the Component class from React
// the class must have a render method that returns a NULL or some HTML
// export the class defined in the code.

class Welcome extends Component{
    render(){
        return <h1>Good Day!</h1>
    }
}

export default Welcome;