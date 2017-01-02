import React, { Component } from 'react';

class Quote extends Component {

  render() {

    return (
      <div className="quote-container">
        <p className="quote">
          {this.props.quote.quote}
        </p>
        <p className="author">
          {this.props.quote.author}
        </p>
      </div>
    )
  }
}

export default Quote;
