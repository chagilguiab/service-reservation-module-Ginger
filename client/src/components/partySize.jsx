import React from 'react';
import $ from 'jquery';

class PartySize extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 'For 2',
      sizes: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
    };
    this.handleChange = this.handleChange.bind(this);
    this.createOptions = this.createOptions.bind(this);
  }

  handleChange(event) {
    var sizes = event.target.value;
  }

  createOptions() {
    let optionedSizes = [];
    this.state.sizes.forEach(size => {
      optionedSizes.push(<option value={size}>{size}</option>);
    });
    return optionedSizes;
  }

  render() {
    return (
      <select value={this.state.value}>
        {this.createOptions()}
      </select>
    );
  }
}

export default PartySize;


