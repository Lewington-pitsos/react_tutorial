import React from 'react'

export default class Archive extends React.Component {
  render() {
    return (
       <div>
        <h2>Archive</h2>
        <p>{this.props.match.params.article}</p>
        <p>{this.props.location.search}</p>
       </div>
    );
  }
}
