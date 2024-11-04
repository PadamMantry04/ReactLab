import React, { Component } from 'react'
import PureComponent1 from './PureComponent'
import RegComp from './RegComp'
import MemoComp from './MemoComp'

class ParentComponent extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name:'Padam'
      }
    }

    componentDidMount(){
        setInterval( ()=>{
            this.setState({
                name:'Padam'
            })
        }, 2000 )
    }

  render() {
    return (
      <div>
        ParentComponent
        <MemoComp name={this.state.name}/>
        {/* <PureComponent1 name={this.state.name}/>
        <RegComp name={this.state.name}/> */}
      </div>
    )
  }
}

export default ParentComponent