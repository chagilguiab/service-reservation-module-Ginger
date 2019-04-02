import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Time from './components/Time.jsx';
import PartySize from './components/PartySize.jsx';

class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      date: new Date(),
      availableTables: []
    }
  }
  // handlePartySize = (selectedSize) => {
  //   this.setState({partySize: selectedSize});
  // };

  // handleDate = (selectedDate) => {
  //   this.setState({date: selectedDate});
  // };

  // handleFindATable = () => {
  //   this.setState(availableTables: ?)
  // }

  render() {
    return (<div className="app">
        <h2>Make a reservation</h2>
        <h4>Party Size</h4>
        <PartySize sizes={this.state.sizes}/>
        <h4>Date</h4>
        <form action="/action_page.php">
          <input type="date"/>
        </form>
        <h4>Time</h4>
        <Time value={this.state.value} times={this.state.times}/> <br/>
        <button>Find a Table</button>
      </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));

