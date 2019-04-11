import React from 'react';
import style from './styles';

class FindATable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      handleFindATable: props.handleFindATable,
    };
  }


  render() {
    return (
      <button className={style.findATable} onClick={this.state.handleFindATable}>Find a Table</button>
    );
  }
}

export default FindATable;


