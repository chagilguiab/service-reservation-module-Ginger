import React from 'react';

class NotAvailable extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
    return (
      <div className="notAvailableContainer">
        <img className="warning" src={require("../../../images/warning.png")}/>
        <div className="notAvailable" >At the moment, there’s no online availability. Have another time in mind?</div>
      </div>
    );
  }
}

export default NotAvailable;