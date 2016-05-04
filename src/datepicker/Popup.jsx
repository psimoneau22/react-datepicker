import React from "react"
import Header from "./Header"
import Calendar from "./Calendar"

export default class Popup extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            selectedYear: props.date.getFullYear(),
            selectedMonth: props.date.getMonth()
        }
    }
    handleClickOutside(e) {
        if(!this.root){
            return
        }
        
        let current = e.target;
        do {
            if(current == this.root){
                return;
            }
            current = current.parentNode
        } while (current)
        
        this.props.onClose();
    }
    componentDidMount(){
        document.body.addEventListener("click", this.handleClickOutside.bind(this))
    }
    componentWillUnmount(){
        document.body.removeEventListener("click", this.handleClickOutside)
    }
    componentWillReceiveProps(props){          
        this.state = {
            selectedYear: props.date.getFullYear(),
            selectedMonth: props.date.getMonth()
        }  
    }
    handlePrevious() {
        let nextMonth = this.state.selectedMonth - 1;
        let nextYear = this.state.selectedYear;
        if(nextMonth < 0){
            nextMonth = 11;
            nextYear = nextYear - 1;
        }
        this.setState({
            selectedYear: nextYear,
            selectedMonth: nextMonth
        })
    }
    handleNext(){
        let nextMonth = this.state.selectedMonth + 1;
        let nextYear = this.state.selectedYear;
        if(nextMonth > 11){
            nextMonth = 0;
            nextYear = nextYear + 1;
        }
        this.setState({
            selectedYear: nextYear,
            selectedMonth: nextMonth
        })
    }
    handleSelectYear(year){
        this.setState({
            selectedYear: year
        })
    }
    handleSelectMonth(month){
        this.setState({
            selectedMonth: month
        })
    }
    render(){
        
        if(!this.props.isOpen ) return null;
        
        return  <div ref={(div) => {this.root = div} } className="popup" >
                    <Header 
                        selectedYear={this.state.selectedYear} 
                        selectedMonth={this.state.selectedMonth} 
                        onSelectYear={this.handleSelectYear.bind(this)} 
                        onSelectMonth={this.handleSelectMonth.bind(this)} 
                        onPrevious={this.handlePrevious.bind(this)} 
                        onNext={this.handleNext.bind(this)} />
                    <Calendar 
                        date={this.props.date} 
                        selectedMonth={this.state.selectedMonth} 
                        selectedYear={this.state.selectedYear} 
                        onSelectDate={this.props.onSelectDate} />
                    <hr/>
                    <button className="today" onClick={this.props.onSelectDate.bind(null, new Date())}>Today</button>                    
                </div>
    }
}