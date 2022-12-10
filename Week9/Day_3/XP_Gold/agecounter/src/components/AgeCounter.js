import React from 'react'
import {connect} from 'react-redux'
import {ageUp, ageDown} from '../redux/actions'

class AgeCounter extends React.Component{
    

    render(){
        return(
            this.props.isLoading ?
            <>
            <h1>Loading</h1>
            </>
             :
            <>
            <div>{this.props.age}</div>
            <button onClick={this.props.ageUp}>Age Up</button>
            <button onClick={this.props.ageDown}>Age Down</button>
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return{
        age:state.age,
        isLoading:state.isLoading
    }
}

const mapDispatchToProps = (dispach) => {
    return{
        ageUp:()=>dispach(ageUp()),
        ageDown:()=>dispach(ageDown())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(AgeCounter)