import React from 'react';

class Time extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 1140,
      times: {600: '10:00 AM', 630: '10:30 AM', 660: '11:00 AM', 690: '11:30 AM', 720: '12:00 PM', 750: '12:30PM', 780: '1:00 PM', 810: '1:30 PM', 840: '2:00 PM', 870: '2:30 PM', 900: '3:00 PM', 930: '3:30 PM', 960: '4:00 PM', 990: '4:30 PM', 1020: '5:00 PM', 1050: '5:30 PM', 1080: '6:00 PM', 1110: '6:30 PM', 1140: '7:00 PM', 1170: '7:30 PM', 1200: '8:00 PM', 1230: '8:30 PM', 1260: '9:00 PM', 1290: '9:30 PM', 1320: '10:00 PM', 1350: '10:30 PM', 1380: '11:00 PM', 1410: '11:30 PM'}
    };
    this.handleChange = this.handleChange.bind(this);
    this.createOptions = this.createOptions.bind(this);
  }


  handleChange(event) {
    let time = event.target.value;
    this.setState({value: time});
    this.props.handleInputChange();
  }


  createOptions() {
    let optionedTimes = [];
    for (var key in this.state.times) {
      optionedTimes.push(<option value={key}>{this.state.times[key]}</option>);
    }
    return optionedTimes;
  }

  render() {
    return (
      <div className="timeSelect">
        <select className="select" value={this.state.value} onChange={this.handleChange}>
          {this.createOptions()}
        </select>

        <svg className="arrowTime" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 8.07 5.24"><path d="M4.39 5.09l.71-.71 2.82-2.82a.5.5 0 0 0 0-.71l-.7-.7a.5.5 0 0 0-.71 0L4 2.62 1.56.15a.5.5 0 0 0-.71 0l-.7.7a.5.5 0 0 0 0 .71L3 4.39l.71.71a.5.5 0 0 0 .68-.01z"></path></svg>
      </div>
    );
  }
}
export default Time;


