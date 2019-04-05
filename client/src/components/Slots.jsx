import React from 'react';
import $ from 'jquery';

class Slots extends React.Component {
  constructor(props) {
    super(props);
    console.log('constructor', props.availableSlots);
    // this.state = {
    //   availableSlots: props.availableSlots
    // };
  }


  createSlots() {
    console.log(this, 'createSlots', this.props.availableSlots);
    let slots = [];

    let formatedSlots = this.props.availableSlots.map(slot => {
      let remainder = (slot / 15) % 4;
      let hour = (slot / 15 - remainder) / 4;
      let minute = remainder * 15;
      if (minute === 0) {
        minute = '00';
      }
      if (hour < 12) {
        return hour + ':' + minute + 'AM';
      } else {
        return (hour - 12) + ':' + minute + 'PM';
      }
    });

    formatedSlots = formatedSlots.reverse();

    formatedSlots.forEach(slot => {
      slots.push(<button className="slot"> <img className="tableImg" src={require("../../../images/table.png")}/> {slot} </button>);
    });
    return slots;
  }

  render() {
    console.log(this);
    return (
      <div>
        <div className="selectATime">Select a time:</div>
        <div className="slots">
          {this.createSlots()}
        </div>
      </div>
    );
  }
}

export default Slots;