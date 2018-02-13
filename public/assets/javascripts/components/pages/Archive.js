import React from 'react'

export default class Archive extends React.Component {
  render() {
    console.log(this.props.match.params.article);
    return (
       <div>
        <h2>Archive</h2>
        <p>{this.props.match.params.article}</p>
       </div>
    );
  }
}
