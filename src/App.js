import React, { Component } from 'react';
import quoteList from './quotes.json';
import Quote from './Quote';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quotelist: quoteList,
      randomIndex: Math.floor(Math.random()*quoteList.length),
      quoteToShare: ''
    };
  }


  newQuote() {
    var newIndex = Math.floor(Math.random()*quoteList.length);
    var newQuoteToShare = quoteList[newIndex].quote.slice(0, 100) + '...';
    this.setState({
      randomIndex: newIndex
    });
    this.setState({
      quoteToShare: newQuoteToShare
    });
  }

  render() {

    var quotelist = this.state.quotelist;
    quotelist = quotelist.map(function(quote, index) {
      return(
        <Quote key={ index }
          quote={ quote } />
      )
    }, this)

    return (
      <div>
        <h1>Random Quote Machine</h1>
        <div id="container">
          {quotelist[this.state.randomIndex]}
          <div id="buttons-container">
            <button id="new-quote-button" onClick={this.newQuote.bind(this)}>New Quote</button>
            <a href='https://twitter.com/share' className='twitter-share-button' data-text={this.state.quoteToShare}>Tweet</a>
          </div>
        </div>
      </div>
    );
  }

  componentWillMount() {
    this.setState({
      quoteToShare: quoteList[this.state.randomIndex].quote.slice(0, 100) + '...'
    });
  }
}

export default App;
