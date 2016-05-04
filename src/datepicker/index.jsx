import React from "react"
import Popup from "./Popup"
require("./datepicker.less")

const printDate = (date) => {
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    return `${month}/${day}/${year}`
}

export default class DatePicker extends React.Component {
    constructor(props) {
        super(props);           
        
        this.state = {
            isOpen: false,
            dateInput: printDate(props.value)
        }
    }
    handleClose(){
        this.setState({
            isOpen: false
        })
    }    
    handleDirectInput(e){        
        this.setState({
            dateInput: e.target.value
        })
        let timestamp = Date.parse(e.target.value);
        if(!isNaN(timestamp)){
            this.props.onChange(new Date(timestamp));
        }
    } 
    handleSelectDate(date){
        this.props.onChange(date);
        this.setState({
            isOpen: false,
            dateInput: printDate(date)
        });
    }
    handleInputClick(){
        this.setState({
            isOpen: !this.state.isOpen
        })
    }
    render(){
        
        return  <div className="datepicker">
                    <input type="text" value={this.state.dateInput} onClick={this.handleInputClick.bind(this)} onChange={this.handleDirectInput.bind(this)}/>                                      
                    <Popup 
                        isOpen={this.state.isOpen}
                        date={this.props.value}
                        onSelectDate={this.handleSelectDate.bind(this)}
                        onClose={this.handleClose.bind(this)}                        
                    />                   
                </div>
    }
}