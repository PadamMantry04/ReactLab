import React, {Component} from 'react'

class Increment extends Component{
    constructor(props){
        super(props)
        this.state = {
            count:0
        }
    }

    increment(){
        this.setState((prevState)=>({
            // instead of using the current state to update the current state, use the prevState to update state.
            // Advantage: It doesn't group multiple setState calls as one for asynchronous calls.
            count:prevState.count+1
        }), 
        () => {
            console.log('Count Val to be logged ::'+this.state.count)
        } // second parametre in setState is callback function
    )
    }

    incrementFive(){
        this.increment()
        this.increment()
        this.increment()
        this.increment()
        this.increment()
    }

    render(){
        return(
            <div>
                <div>Count:{this.state.count}</div>
                <button onClick={()=>{this.incrementFive()}}>Update!</button>
            </div>
        )
    }
}

export default Increment