import React from 'react'
import Header from './Header'
import Footer from './Footer'

export default class Layout extends React.Component {
  constructor() {
    super() // so that the parent obejct/class is initialized properly whenever we initialize this object/class
    this.state = {message: 'FUCK', mossage: 'lol'}
  }

  changeTitle(title) {
    this.setState({mossage: title})
  }

  render() {
    return (
       <div>
        <Header changeTitle={this.changeTitle.bind(this)} title={this.state.mossage} />
        <p>{this.state.message + 'wooot'}</p>
        <Footer />
       </div>
    );
  }
}
