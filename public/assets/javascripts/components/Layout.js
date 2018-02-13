import React from 'react'

export default class Layout extends React.Component {
  constructor() {
    super() // so that the parent obejct/class is initialized properly whenever we initialize this object/class
    this.name = "FUCK"
  }
  render() {
    return (
       <h1>{this.name}</h1>
    );
  }
}
