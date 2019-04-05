import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Time from './components/Time.jsx';
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
      url: `api/restaurants/${restaurantId}/${partySize}/${date}/${time}`,
      method: "GET",
      contentType: "application/json",
      success: data => {this.setState({ availableSlots: data, findATableIsHidden: true }); console.log('inside ajax', this.state);},
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
            <div className="dateSelect">
              <form className="dateForm" action="/action_page.php">
                <input type="date" value = "2019-04-05" id="dateInput"/>
              </form>
            </div>
          </div>

          <div className="timeBox">
            <div className="time">Time</div>
            <Time value={this.state.value} times={this.state.times} handleInputChange={this.handleInputChange} ref={(ref) => this.myTime = ref}/> <br/>
          </div>

        </div>

        {this.state.findATableIsHidden ? null : <FindATable handleFindATable={this.handleFindATable.bind(this)}/>}
        {console.log('inside render', this.state.availableSlots)}
        {this.state.findATableIsHidden ? <Slots availableSlots={this.state.availableSlots}/> : null}


        <div className="footer">
          <img className="footerImg" src={require("../../images/booked.png")}/>
          <div className= "footerText">Booked 2 times today</div>

        </div>

      </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
