import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Time from './components/Time.jsx';
import PartySize from './components/PartySize.jsx';
import FindATable from './components/FindATable.jsx';

class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      date: new Date(),
    }
  }


  render() {
    return (<div className="app">
        <div className="makeAReservation">Make a reservation</div>

        <div className="partySize">Party Size</div>
        <PartySize sizes={this.state.sizes}/>

        <div className="dateTime">

          <div className="dateBox">
            <div className="date">Date</div>
            <div className="dateSelect">
              <form className="dateForm" action="/action_page.php">
                <input type="date"/>
              </form>
            </div>
          </div>

          <div className="timeBox">
            <div className="time">Time</div>
            <Time value={this.state.value} times={this.state.times}/> <br/>
          </div>

        </div>

        <FindATable/>

        <div className="footer">
          <img className="footerImg" src="../../images/booked.png"/>
          <div className= "footerText">Booked 8 times today</div>

        </div>

      </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
