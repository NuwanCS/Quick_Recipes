import React, {Component} from 'react'

export default class ClassComponentCounter extends Component{
  constructor(props){
    super(props)
    this.state={
      count: props.initialCount
    }
  }
  render(){
    return(
      <div>
        <button onClick={()=>this.handleCounter(-1)}>-</button>
        <span>{this.state.count}</span>
        <button onClick={()=>this.handleCounter(+1)}>+</button>
      </div>
    )
  }
//   handleCounter(input){
//     this.setState({count: this.state.count + input})
//   }

  handleCounter(input){
    this.setState(prevState=>{
      return {count: prevState.count + input}
    })
  
  }

}

