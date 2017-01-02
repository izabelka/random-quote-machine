import React, { Component } from 'react';
import quoteList from './quotes.json';
import Quote from './Quote';
import './App.css';

class App extends Component {
    constructor(props) {
    super(props);
    this.state = {
      quotelist: [],
      randomIndex : 0
    };
  }

  componentDidMount() {
    this.setState({
      quotelist: quoteList,
      randomIndex: Math.floor(Math.random()*quoteList.length+1)
    });
  }

  render() {
    var quotelist = this.state.quotelist;

    quotelist = quotelist.map(function(quote, index) {
      return(
        <Quote key={ index }
          quote={ quote } />
      )
    })

    return (
      <div className="container">
        {quotelist[this.state.randomIndex]}
      </div>
    );
  }
}

export default App;
