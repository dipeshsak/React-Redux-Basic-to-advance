import React from 'react'
import {connect} from'react-redux'
class Age extends React.Component{
    
    render(){
        console.log("Received data",this.props)
        return(
            <div>
                <h1>Hello From Age : {this.props.age >0 ? this.props.age:0}</h1>
            </div>
        )
    }
}

const mapStateToProps =(state)=>{
    return{
    age:state.age
    }
}
export default connect(mapStateToProps)(Age)