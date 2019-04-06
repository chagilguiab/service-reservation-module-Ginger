import React from 'react';

class NotAvailable extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
    return (
      <div className="notAvailable" >At the moment, there’s no online availability. Have another time in mind?</div>
    );
  }
}

export default NotAvailable;