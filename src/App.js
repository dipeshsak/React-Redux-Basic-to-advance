import React from 'react'
import './App.css'
import Age from './Age'


class App extends React.Component{
  
  constructor(){
    super();
    this.state={
        age:5,
        count:0,
    };
    this.onDEC=this.onDEC.bind(this)
  }

  onINC =()=>{
    this.setState({
      ...this.state,
      age:this.state.age+1
    })
  }

  onDEC(){
    this.setState({
      ...this.state,
      age:this.state.age>0?this.state.age-1:0
    })
    // if(this.state.age>0){
    //   this.setState({
    //     ...this.state,
    //     age:this.state.age-1
    //   })
    // }
  }

  render(){
    return(
      <div className="App">
         <h1>Welcome</h1>
         <Age age={this.state.age} count="5" />
         {/* <h2>Age : {this.state.age} </h2> */}
         <div style={{display:"flex",justifyContent:'space-around',alignItems:'center'}}>
         <button onClick={this.onINC}>INCREMENT</button>
         <button onClick={this.onDEC}>DECREMENT(OLD Way)</button>
         <button onClick={()=>this.onDEC()}>DECREMENT(NEW Way) </button>
         </div>
      </div>
    )
  }
}

export default App