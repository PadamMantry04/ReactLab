import React, {Component} from 'react'
import ChildComponent from './ChildComponent'

class Parent extends Component{
    constructor(props){
        super(props)
        this.state = {
            parentName:'Parent'
        }

        this.greetParent=this.greetParent.bind(this);
    }

    greetParent(){
        alert(`Hello ${this.state.parentName}`)
    }

    render(){
        return(
            <div>
                <ChildComponent greetHandler={this.greetParent}/>
            </div>
        )
    }
}

// We have succesfully sent a method defined in the parent component as a prop in the parent component to the child component

export default Parent 