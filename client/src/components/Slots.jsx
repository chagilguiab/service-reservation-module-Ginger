import React from 'react';
import style from './styles';

class Slots extends React.Component {
  constructor(props) {
    super(props);
    console.log('constructor', props.availableSlots);
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
      } else if (hour === 12) {
        return '12' + ':' + minute + 'PM';
      } else {
        return (hour - 12) + ':' + minute + 'PM';
      }
    });

    formatedSlots = formatedSlots.reverse();

    formatedSlots.forEach(slot => {
      slots.push(<button className={style.slot}> <img className={style.tableImg} src={require("../../../images/table.png")}/> {slot} </button>);
    });
    return slots;
  }

  render() {
    console.log(this);
    return (
      <div>
        <div className={style.selectATime}>Select a time:</div>
        <div className={style.slots}>
          {this.createSlots()}
        </div>
      </div>
    );
  }
}

export default Slots;


