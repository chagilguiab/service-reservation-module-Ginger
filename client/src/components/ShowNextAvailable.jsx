import React from 'react';
import style from './styles.css';

class ShowNextAvailable extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <button className={style.showNextAvailable} >Show next available</button>
    );
  }
}


export default ShowNextAvailable;