import React from 'react';

class Calendar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedDate: new Date().toISOString().slice(0,10)
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    let selectedDate= event.target.value;
    this.setState({selectedDate: selectedDate});
    this.props.handleInputChange();
  }


  render() {
    console.log(this.state.selectedDate);
    return (
      <div className="dateSelect">
        <form className="dateForm" action="/action_page.php">
          <input type="date" id="dateInput" onChange={this.handleChange}/>
        </form>
      </div>
    );
  }
}

export default Calendar;


