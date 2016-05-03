import React from "react"
import Popup from "./Popup"

export default class DatePicker extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false
        }
    }   
    handleSelectDate(date){
        this.props.onChange(date);
        this.setState({
            isOpen: false
        })
    }
    handleInputClick(){
        this.setState({
            isOpen: true
        })
    }
    render(){
        let day = this.props.value.getDate();
        let month = this.props.value.getMonth() + 1;
        let year = this.props.value.getFullYear();
        let val = `${month}/${day}/${year}`
        return  <div className="datepicker">
                    <input type="text" value={val} onClick={this.handleInputClick.bind(this)}/>                                      
                    <Popup 
                        isOpen={this.state.isOpen}
                        onSelectDate={this.handleSelectDate.bind(this)}
                        date={this.props.value}                        
                    />                   
                </div>
    }
}