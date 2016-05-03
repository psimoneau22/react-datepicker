import React from "react"

let days = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"]

export default class Calendar extends React.Component {
    handleClickDay(day){
        this.props.onSelectDate(new Date(this.props.selectedYear, this.props.selectedMonth, day));
    }
    renderWeek(week, isFirst){
        
        let result = week.map(day => {
            let linkClass = "";
            if(this.props.selectedYear == this.props.date.getFullYear() &&
               this.props.selectedMonth == this.props.date.getMonth() &&
               day == this.props.date.getDate() 
            ){ 
                linkClass = "selected"
            }
            return <td className="day" key={day}><a onClick={this.handleClickDay.bind(this, day)} className={linkClass}>{day}</a></td>
        });
        
        if(isFirst){
            for(let i = 0; i < 7 - week.length; i++) {
                result.unshift(<td className="blank" key={"blank_" + i}></td>)
            }
        }
        
        return result;
    }
    renderWeeks(){
        let weeks = [];
        let currentWeek = null;
        let currentDay = null;
        let daysInMonth = new Date(this.props.selectedYear, this.props.selectedMonth + 1, 0).getDate();        
        for(let i = 1; i <= daysInMonth; i++) {
            currentDay = new Date(this.props.selectedYear, this.props.selectedMonth, i);
            if(currentDay.getDay() == 0 || currentWeek == null){
                currentWeek = [];
                weeks.push(currentWeek)
            }
            currentWeek.push(i)
        }
        
        return weeks.map((week, index) => 
            <tr key={index}>
                {this.renderWeek(week, index == 0)}
            </tr>
        )
    }
    render(){
        return  <div className="calendar">
                    <table>
                            <thead>
                                <tr>
                                    {days.map(day =>
                                        <th className="dayname" key={day} >
                                            {day}
                                        </th> 
                                    )}
                                </tr>
                            </thead>
                            <tbody>
                                {this.renderWeeks()}
                            </tbody>
                        </table>
                </div>
    }
}