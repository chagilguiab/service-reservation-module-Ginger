import React from 'react';

class NotAvailable extends React.Component {
  constructor(props) {
    super(props);
  }

  convertTime(time) {
    let remainder = (time / 15) % 4;
      let hour = (time / 15 - remainder) / 4;
      let minute = remainder * 15;
      if (minute === 0) {
        minute = '00';
      }
      if (hour < 12) {
        return hour + ':' + minute + 'AM';
      } else if (hour === 12) {
        return '12' + ':' + minute + 'PM';
      } else {
        return (hour - 12) + ':' + minute + 'PM';
      }
  }


  render() {
    return (
      <div className="notAvailableContainer">
        <img className="warning" src={require("../../../images/warning.png")}/>
        <div className="notAvailable" >At the moment, there’s no online availability within 1 hour of {this.convertTime(this.props.time)}. Have another time in mind?</div>
      </div>
    );
  }
}

export default NotAvailable;