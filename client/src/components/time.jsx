import React from 'react';
import $ from 'jquery';

class Time extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '7:00 PM',
      times: ['10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM', '12:00 AM', '12:30 PM', '13:00 PM', '13:30 PM', '14:00 PM', '14:30 PM', '15:00 PM', '15:30 PM', '16:00 PM', '16:30 PM', '17:00 PM', '17:30 PM', '18:00 PM', '18:30 PM', '19:00 PM', '19:30 PM', '20:00 PM', '20:30 PM', '21:00 PM', '21:30 PM', '22:00 PM', '22:30 PM', '23:00 PM', '23:30 PM']
    };
    this.handleChange = this.handleChange.bind(this);
    this.createOptions = this.createOptions.bind(this);
  }

  handleChange(event) {
    var times = event.target.value;
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
      <select value={this.state.value}>
        {this.createOptions()}
      </select>
    );
  }
}

export default Time;


