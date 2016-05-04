import React from "react"

let monthNames = [
    "Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
]

export default class Header extends React.Component {    
    handleSelectMonth(e){        
        this.props.onSelectMonth(parseInt(e.target.value));
    }
    handleSelectYear(e){
        this.props.onSelectYear(parseInt(e.target.value));
    }
    renderMonths(){
        return monthNames.map((month, index) => <option value={index} key={month}>{month}</option>)
    }
    renderYears() {
        let values = [];
        for(let i = 0; i < 10; i++){
            let year = this.props.selectedYear - 5 + i;
            values.push(<option value={year} key={year}>{year}</option>)
        }
        return values;
    }   
    render(){
        return  <div className="header">                                    
                    <select value={this.props.selectedMonth} onChange={this.handleSelectMonth.bind(this)} >{this.renderMonths()}</select>                
                    <select value={this.props.selectedYear} onChange={this.handleSelectYear.bind(this)} >{this.renderYears()}</select>
                    <a className="left" onClick={this.props.onPrevious}><span className="glyphicon glyphicon-circle-arrow-left" />&lt;&lt;</a>                
                    <a className="right" onClick={this.props.onNext}><span className="glyphicon glyphicon-circle-arrow-right" />&gt;&gt;</a>                    
                </div>
    }
}