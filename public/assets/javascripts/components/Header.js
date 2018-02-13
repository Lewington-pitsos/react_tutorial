import React from 'react';
import Title from './Header/Title.js'
// we store all components that are rendered b the Header component in the local Header folder

export default class Header extends React.Component {
  updateTitle(event) {
    this.props.changeTitle(event.target.value)
  }

  render() {
    return(
      <header>
        <Title text={this.props.title}/>
        <input value={this.props.title} onChange={this.updateTitle.bind(this)}/>
      </header>
    )
  }
}
