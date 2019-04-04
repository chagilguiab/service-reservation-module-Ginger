import React from 'react';
import $ from 'jquery';

class Slots extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      availableSlots: []
    };
  }


  render() {
    return (
      <div>
        <div className="selectATime">Select a time:</div>
        <div className="slots">
          <button className="slot"><img className="tableImg" src="../../images/table.png"/>7:30 PM</button>
          <button className="slot"><img className="tableImg" src="../../images/table.png"/>7:30 PM</button>
          <button className="slot"><img className="tableImg" src="../../images/table.png"/>7:30 PM</button>
          <button className="slot"><img className="tableImg" src="../../images/table.png"/>7:30 PM</button>
          <button className="slot"><img className="tableImg" src="../../images/table.png"/>7:30 PM</button>
        </div>
      </div>
    );
  }
}

export default Slots;

