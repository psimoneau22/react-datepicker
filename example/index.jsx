import React from "react"
import { render } from "react-dom"
import DatePicker from "../dist/datepicker"

export default class Example extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            date: new Date()
        }
    }
    handleChange(date){
        this.setState({
            date: date
        })
    }
    render(){
        return  <div>
                    <DatePicker onChange={this.handleChange.bind(this)} value={this.state.date} />                    
                </div>
    }
}

render(
    <Example />,
    document.getElementById("example") 
)