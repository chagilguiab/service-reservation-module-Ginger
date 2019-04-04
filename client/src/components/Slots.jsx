import React from 'react';
import $ from 'jquery';

class Slots extends React.Component {
  constructor(props) {
    super(props);
    console.log('constructor', props.availableSlots);
    // this.state = {
    //   availableSlots: props.availableSlots
    // };
    // this.createSlots = this.createSlots.bind(this);
  }

  // componentDidMount() {
  //   this.setState({availableSlots: this.props.availableSlots});
  // }

  // componentDidUpdate() {
  //   this.setState({availableSlots: this.props.availableSlots});
  // }

  createSlots() {
    console.log(this, 'createSlots', this.props.availableSlots);
    let slots = [];
    this.props.availableSlots.forEach(slot => {
      slots.push(<button className="slot"> <img className="tableImg" src="../../images/table.png"/> {slot} </button>);
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