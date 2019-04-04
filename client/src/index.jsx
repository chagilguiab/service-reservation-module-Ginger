import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Time from './components/Time.jsx';
import PartySize from './components/PartySize.jsx';
import FindATable from './components/FindATable.jsx';
import Slots from './components/Slots.jsx';

class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      restaurantId: 1,
      availableSlots: []
    }
  }

  componentDidMount() {

  }

  handleFindATable() {
    console.log('myPartySize', this.myPartySize, document.getElementById('dateInput').value, this.myTime);

    var restaurantId = this.state.restaurantId;
    var partySize = this.myPartySize.state.value;
    var date = document.getElementById('dateInput').value;
    var time = this.myTime.state.value;

    $.ajax({
      url: `/api/restaurants/${restaurantId}/${partySize}/${date}/${time}`,
      method: "GET",
      contentType: "application/json",
      success: data => { this.setState({ availableSlots: data }); console.log('availableSlots', data);},
      error: () => console.log("Fail: GET available slots!")
    });


  }


  render() {
    return (<div className="app">
        <div className="makeAReservation">Make a reservation</div>

        <div className="partySize">Party Size</div>

        <PartySize sizes={this.state.sizes} ref={(ref) => this.myPartySize = ref}/>

        <div className="dateTime">

          <div className="dateBox">
            <div className="date">Date</div>
            <div className="dateSelect">
              <form className="dateForm" action="/action_page.php">
                <input type="date" id="dateInput"/>
              </form>
            </div>
          </div>

          <div className="timeBox">
            <div className="time">Time</div>
            <Time value={this.state.value} times={this.state.times} ref={(ref) => this.myTime = ref}/> <br/>
          </div>

        </div>

        <FindATable handleFindATable={this.handleFindATable.bind(this)}/>
        <Slots/>

        <div className="footer">
          <img className="footerImg" src="../../images/booked.png"/>
          <div className= "footerText">Booked 8 times today</div>

        </div>

      </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));


        // <div className="selectATime">Select a time:</div>
        // <div className="slots">
        //   <button className="slot"><img className="tableImg" src="../../images/table.png"/>7:30 PM</button>
        //   <button className="slot"><img className="tableImg" src="../../images/table.png"/>7:30 PM</button>
        //   <button className="slot"><img className="tableImg" src="../../images/table.png"/>7:30 PM</button>
        //   <button className="slot"><img className="tableImg" src="../../images/table.png"/>7:30 PM</button>
        //   <button className="slot"><img className="tableImg" src="../../images/table.png"/>7:30 PM</button>
        // </div>
