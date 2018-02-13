import React from 'react';

export default class Title extends React.Component {
  render() {
    return(
      <div className="title">
        <h1>{this.props.text}</h1>
        <p>It's a thing </p>
      </div>
    )
  }
}
