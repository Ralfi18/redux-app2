import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWether } from '../actions';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: '' 
    };
    // bind this to the function if not arrow function
    this.onInputChange = this.onInputChange.bind(this);
  }
  onInputChange(event) {
    this.setState({
      term: event.target.value
    })
  }
  onFormSubmit = (event) => {
    event.preventDefault();
    this.props.fetchWether(this.state.term);
    this.setState({
      term: ''
    })
  }
  render() {
    const {term} = this.state;
    
    return (
      <form 
        className="input-group"
        onSubmit={this.onFormSubmit}
      >
        <input 
          type="" 
          name="" 
          value={term}
          placeholder="Get the wether forcast."
          onChange={this.onInputChange}
        />
        <span className="input-group-btn">
          <button 
            type="submit" 
            className="btn btn-secondary"
          >
            Submit
          </button>
        </span>
      </form>
    );
  }
}

function mapDispactToProps(dispatch) {
  return bindActionCreators(
    {fetchWether}, 
    dispatch
  );
}
export default connect(null, mapDispactToProps)(SearchBar);
