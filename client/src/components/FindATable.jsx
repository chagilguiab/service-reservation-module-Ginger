import React from 'react';
import $ from 'jquery';

class FindATable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      availableSlots: []
    };
    this.onClick = this.onClick.bind(this);
  }

  submit() {

  }


  render() {
    return (
      <button className="findATable" onClick={this.submit}>Find a Table</button>
    );
  }
}

export default FindATable;


