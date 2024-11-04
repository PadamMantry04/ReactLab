import React, {Component} from 'react'

class MessageClick extends Component{
    // define a method to excute when the event is triggered
    buttonClick(){
        console.log('Button Clicked');
    }
    render(){
        return(
            <button onClick={this.buttonClick}>Click Me</button> // note that we want to use function and not function call
        )
    }
}

export default MessageClick