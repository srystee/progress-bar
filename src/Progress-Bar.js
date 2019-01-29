import React , { Component } from 'react'
class ProgressBarBorder extends Component {
    constructor(props){
       super(props);
        this.state = {
            percentage : 0
        };
        this.status = this.status.bind(this);
    }

    status = () => ({
        // if(this.state.percentage === 100)
            percentage:  this.state.percentage + parseFloat(14.2857)
        
    })


    render() {
        return(
            <div>
                <ProgressBar percentage = {this.percentage} />
                <div onClick = {this.status} >Steps</div>
            </div>
        )
    }
}

const ProgressBar = (props) => {
    return (
        <div className = "progress-bar">
            <Filler percentage = {props.percentage} />
        </div>
    )
}

const Filler = (props) => {
    return (
        <div className = "filler"
            style = {{width: `${props.percentage}%`}} />
    )
}


export default ProgressBarBorder;