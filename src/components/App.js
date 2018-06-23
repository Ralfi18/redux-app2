import React, { Component } from 'react';
import SearchBar from '../containers/search_bar';

class App extends Component {
  constructor(props){
    super(props);
  }
  render(){
    return(
      <div className="App">
        <SearchBar />
      </div>
    );
  }
}

export default App;
