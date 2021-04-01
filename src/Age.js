import React from 'react'

class Age extends React.Component{
    
    render(){
        //console.log("Received data",this.props)
        return(
            <div>
                <h1>Hello from Age : {this.props.age}</h1>
            </div>
        )
    }
}

export default Age