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
import style from './components/styles.css';


class Reservation extends React.Component {
  constructor (props) {
    super(props);
    console.log(props.path);
    this.state = {
      availableSlots: [],
      findATableIsHidden: false
    }
    this.handleInputChange = this.handleInputChange.bind(this);
  }


  componentDidMount() {
    var date = new Date();
    document.getElementById('dateInput').value = date.toISOString().substr(0, 10);
  }


  handleInputChange() {
    this.setState({
      findATableIsHidden: false
    });
  }


  handleFindATable() {
    const restaurantId = parseInt(window.location.href.split('/').pop());
    console.log(restaurantId);
    var partySize = this.myPartySize.state.value;
    var date = document.getElementById('dateInput').value;
    var time = this.myTime.state.value;

    $.ajax({
      url: `/${restaurantId}/${partySize}/"${date}"/${time}`,
      method: "GET",
      contentType: "application/json",
      success: data => {this.setState({ availableSlots: data, findATableIsHidden: true }); console.log('inside ajax', this.state, 'date', date);},
      error: () => console.log("Fail: GET available slots!")
    });
  }


  render() {
    return (<div className={style.reservation}>
        <div className={style.makeAReservation}>Make a reservation</div>

        <div className={style.partySize}>Party Size</div>
        <PartySize sizes={this.state.sizes} handleInputChange={this.handleInputChange} ref={(ref) => this.myPartySize = ref}/>

        <div className={style.dateTime}>
          <div className={style.dateBox}>
            <div className={style.date}>Date</div>
            <Calendar handleInputChange={this.handleInputChange}/>
          </div>

          <div className={style.timeBox}>
            <div className={style.time}>Time</div>
            <Time value={this.state.value} times={this.state.times} handleInputChange={this.handleInputChange} ref={(ref) => this.myTime = ref}/> <br/>
          </div>
        </div>

        {this.state.findATableIsHidden ? null : <FindATable handleFindATable={this.handleFindATable.bind(this)}/>}
        {this.state.findATableIsHidden && this.state.availableSlots.length > 0 ? <Slots availableSlots={this.state.availableSlots}/> : null}

        {this.state.findATableIsHidden && this.state.availableSlots.length === 0 ? <NotAvailable time={this.myTime.state.value}/> : null}

        <div className={style.footer}>
          <img className={style.footerImg} src={require("../../images/booked.png")}/>
          <div className= {style.footerText}>Booked 8 times today</div>
        </div>

        {this.state.findATableIsHidden && this.state.availableSlots.length === 0 ? <ShowNextAvailable/> : null}

      </div>)
  }
}

ReactDOM.render(<Reservation />, document.getElementById('reservation'));
