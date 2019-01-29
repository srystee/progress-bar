import React from 'react'
import './Bar.css';

export default class ProgressBarExample extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            // element: [],
            // Steps_Included: [1, 2, 3, 4, 5, 6, 7],
            percentage : 0
        }
        // this.nextStep = this.nextStep.bind(this)
        this.progress = this.progress.bind(this)
        // Steps_Included = this.state.Steps_Included
        // this.Steps_Included = this.Steps_Included.bind(this)
        // this.element = this.element.bind(this)    
    }

    // nextStep() {
    //     if(this.state.percentage === 100) 
    //         return this.setState({ percentage: this.state.percentage + 14.2857 })
    // }

    progress(percentage){
        let Steps_Included = [1, 2, 3, 4, 5, 6, 7]
        Steps_Included.map((steps) => {
            console.log(steps)
            for (let index = 0; index < steps.length; index++) {
                const element = steps[index];
                if (element[0] === 1) {
                    return this.setState({percentage : 0})
                }
                else{
                    return this.setState({percentage : this.state.percentage + parseFloat(14.2857)})
                }
                
            }
            if(steps === 0)
                return this.setState({percentage : 0})
            else
                return this.setState({percentage: this.state.percentage + parseFloat(14.2857)})
        });
        
        // for (let i = 0; i < Steps_Included.length; i++) {
        //     Steps_Included.forEach((num,index) => {
        //         element[index].push(Steps_Included[i]);
        //     })
        //         // element.push(Steps_Included[i]);

        //         this.element.map()
        //     //  if(element[i] === 0)
        //     //     return this.setState({percentage : 0})                
        //     //  else 
        //     //     return this.setState({percentage: this.state.percentage + parseFloat(14.2857)})             
            
        // }
        // console.log(this.element);
        // // console.log(this.state.percentage) 
    }

    
    render() {
        return(
            <div>
                <ProgressBar percentage = {this.state.percentage} />
                {/* <div color = 'blue' onClick = {this.nextStep}> Next </div> */}
               
                <button onClick = {this.progress}>Click</button>
{/* 
                <button onClick = {this.nextStep}>Next Step</button>
                <button onClick = {() => this.setState ({percentage:0})}>Reset</button> */}
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

