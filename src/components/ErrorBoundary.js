import React, { Component } from 'react'

class ErrorBoundary extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         hasError:false
      }
    }

    static getDerivedStateFromError(error){
        return{
            hasError:true
        }
    }

  render() {
    if(this.state.hasError){
        return (<div>Error Encountered!</div>)
    }
    return this.props.children 
    // basically if no error then simply return the original component, since Error Boundary shall act as parent class of any child
  }
}

export default ErrorBoundary