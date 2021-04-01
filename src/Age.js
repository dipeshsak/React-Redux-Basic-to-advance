import React from 'react'
import {connect} from'react-redux'
class Age extends React.Component{
    
    render(){
         console.log("Received data",this.props.ageHistory)
        return(
            <div>
                <h1>Hello From Age : {this.props.age}</h1>
                
        <div style={{display:"flex",justifyContent:'space-around',alignItems:'center'}}>
         <button onClick={this.props.onInc}>INCREMENT</button>
         <button onClick={this.props.onDec}>DECREMENT</button>
         </div>
                  <div>
                      <h3>History</h3>
                      <ol>
                          {
                              this.props.ageHistory.map(el=>(
                                  <li style={{backgroundColor:'teal',margin:5}} 
                                  key={el.id}
                                  onClick={()=>this.props.onHistoryDel(el.id)}
                                >{el.age}</li>
                              ))
                          }
                          
                      </ol>
                </div>
            </div>
        )
    }
}

const mapStateToProps =(state)=>{
    return{
    age:state.age,
    ageHistory:state.ageHistory
    }
}

const mapDispatchToProps =(dispatch)=>{
    return{
      onInc:()=>dispatch({type:"INC",val:5}),
      onDec :()=>dispatch({type:"DEC",val:3}),
      onHistoryDel:(id)=>dispatch({type:"HIS_DEC",key:id})
    }
  }
export default connect(mapStateToProps,mapDispatchToProps)(Age)