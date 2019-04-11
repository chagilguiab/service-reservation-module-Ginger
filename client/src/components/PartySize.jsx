import React from 'react';
import style from './styles.css';

class PartySize extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 2,
      sizes: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
    };
    this.handleChange = this.handleChange.bind(this);
    this.createOptions = this.createOptions.bind(this);
  }

  handleChange(event) {
    let size = event.target.value;
    this.setState({value: size});
    this.props.handleInputChange();
  }

  createOptions() {
    let optionedSizes = [];
    this.state.sizes.forEach(size => {
      optionedSizes.push(<option value={size}>{size}</option>);
    });
    return optionedSizes;
  }

  render() {
    return (
      <div className={style.partySizeSelect}>
        <select className={style.select} value={this.state.value} onChange={this.handleChange}>
          {this.createOptions()}
        </select>

        <svg className={style.arrowPartySize} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 8.07 5.24"><path d="M4.39 5.09l.71-.71 2.82-2.82a.5.5 0 0 0 0-.71l-.7-.7a.5.5 0 0 0-.71 0L4 2.62 1.56.15a.5.5 0 0 0-.71 0l-.7.7a.5.5 0 0 0 0 .71L3 4.39l.71.71a.5.5 0 0 0 .68-.01z"></path></svg>
      </div>
    );
  }
}


export default PartySize;


