import React from 'react';
import $ from 'jquery';

class Time extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '7:00 PM',
      times: ['10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM', '12:00 PM', '12:30 PM', '1:00 PM', '1:30 PM', '2:00 PM', '2:30 PM', '3:00 PM', '3:30 PM', '4:00 PM', '4:30 PM', '5:00 PM', '5:30 PM', '6:00 PM', '6:30 PM', '7:00 PM', '7:30 PM', '8:00 PM', '8:30 PM', '9:00 PM', '9:30 PM', '10:00 PM', '10:30 PM', '11:00 PM', '11:30 PM']
    };
    this.handleChange = this.handleChange.bind(this);
    this.createOptions = this.createOptions.bind(this);
  }

  handleChange(event) {
    var time = event.target.value;
    this.setState({value: time});
  }

  createOptions() {
    let optionedTimes = [];
    this.state.times.forEach(time => {
      optionedTimes.push(<option value={time}>{time}</option>);
    });
    return optionedTimes;
  }

  render() {
    return (
      <div className="timeSelect">
        <select value={this.state.value} onChange={this.handleChange}>
          {this.createOptions()}
        </select>
      </div>
    );
  }
}
export default Time;


