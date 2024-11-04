import React, {Component} from 'react'

class Message extends Component{
    constructor() {
        super()
        this.state = {
            message : 'Welcome Visitor'
        }
    }

    changeMessage (){
        this.setState({
            message:'Hate to see you leave, love to see you go!'
        })
    }
    
    render(){
        return (
            <div>
                <h1>{this.state.message}</h1>
                <button onClick={()=>this.changeMessage()}>Click Me?</button>
            </div>
        )
    }
}

export default Message