import React from 'react';

class FindATable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      handleFindATable: props.handleFindATable,
    };
  }


  render() {
    return (
      <button className="findATable" onClick={this.state.handleFindATable}>Find a Table</button>
    );
  }
}

export default FindATable;


