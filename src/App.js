import React from 'react'
import './App.css'
import Age from './Age'
import {connect} from 'react-redux'

class App extends React.Component{
  
  // constructor(){
  //   super();
  //   this.state={
  //       age:5,
  //       count:0,
  //   };
  //   this.onDEC=this.onDEC.bind(this)
  // }

  // onINC =()=>{
  //   this.setState({
  //     ...this.state,
  //     age:this.state.age+1
  //   })
  // }

  // onDEC(){ 
  //   console.log("Clickeddd")
  //   this.setState({
  //     ...this.state,
  //     age:this.state.age>0?this.state.age-1:0
  //   })
    // if(this.state.age>0){
    //   this.setState({
    //     ...this.state,
    //     age:this.state.age-1
    //   })
    // }
  // }

  render(){
    console.log("APP.js history",this.props) 
    return(
      <div className="App">
         <h1>Welcome</h1>
         <Age  count="5" />
         {/* <h2>Age : {this.state.age} </h2> */}
         
      </div>
    )
  }
}

const mapStateToProps =(state)=>{
  return{
    ageHistory:StaticRange.ageHistory
  }
}
const mapDispatchToProps =(dispatch)=>{
  return{
    onInc:()=>dispatch({type:"INC",val:5}),
    onDec :()=>dispatch({type:"DEC",val:3})
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(App)