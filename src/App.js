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

  newQuote() { 
      this.setState({
        randomIndex: Math.floor(Math.random()*quoteList.length)
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
      <div id="container">
        {quotelist[this.state.randomIndex]}
        <div id="buttons-container">
          <button id="new-quote-button" onClick={this.newQuote.bind(this)}>New Quote</button>
          <a href='https://twitter.com/share' className='twitter-share-button' data-text="custom share text">Tweet</a>
        </div>
      </div>
    );
  }

  componentDidMount() {
    this.setState({
      quotelist: quoteList,
      randomIndex: Math.floor(Math.random()*quoteList.length)
    });
  }
}

export default App;
