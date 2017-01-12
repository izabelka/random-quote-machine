import React, { Component } from 'react';

class Quote extends Component {

  render() {
    return (
      <div id="quote-container">
        <p id="quote">
          {this.props.quote.quote}
        </p>
        <p id="author">
          {this.props.quote.author}
        </p>
      </div>
    )
  }
}

export default Quote;
