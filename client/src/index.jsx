import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Time from './components/Time.jsx';
import Calendar from './components/Calendar.jsx';
import PartySize from './components/PartySize.jsx';
import FindATable from './components/FindATable.jsx';
import Slots from './components/Slots.jsx';
import NotAvailable from './components/NotAvailable.jsx';
import ShowNextAvailable from './components/ShowNextAvailable.jsx';


class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      restaurantId: 1,
      availableSlots: [],
      findATableIsHidden: false
    }
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange() {
    this.setState({
      findATableIsHidden: false
    });
  }


  handleFindATable() {
    var restaurantId = this.state.restaurantId;
    var partySize = this.myPartySize.state.value;
    var date = document.getElementById('dateInput').value;
    var time = this.myTime.state.value;

    $.ajax({
      url: `api/restaurants/${restaurantId}/${partySize}/"${date}"/${time}`,
      method: "GET",
      contentType: "application/json",
      success: data => {this.setState({ availableSlots: data, findATableIsHidden: true }); console.log('inside ajax', this.state, 'date', date);},
      error: () => console.log("Fail: GET available slots!")
    });
  }


  render() {
    return (<div className="app">
        <div className="makeAReservation">Make a reservation</div>

        <div className="partySize">Party Size</div>
        <PartySize sizes={this.state.sizes} handleInputChange={this.handleInputChange} ref={(ref) => this.myPartySize = ref}/>

        <div className="dateTime">
          <div className="dateBox">
            <div className="date">Date</div>
            <Calendar handleInputChange={this.handleInputChange}/>
          </div>

          <div className="timeBox">
            <div className="time">Time</div>
            <Time value={this.state.value} times={this.state.times} handleInputChange={this.handleInputChange} ref={(ref) => this.myTime = ref}/> <br/>
          </div>
        </div>

        {this.state.findATableIsHidden ? null : <FindATable handleFindATable={this.handleFindATable.bind(this)}/>}
        {this.state.findATableIsHidden && this.state.availableSlots.length > 0 ? <Slots availableSlots={this.state.availableSlots}/> : null}

        {this.state.findATableIsHidden && this.state.availableSlots.length === 0 ? <NotAvailable/> : null}
        {this.state.findATableIsHidden && this.state.availableSlots.length === 0 ? <ShowNextAvailable/> : null}


        <div className="footer">
          <img className="footerImg" src={require("../../images/booked.png")}/>
          <div className= "footerText">Booked 8 times today</div>
        </div>

      </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
