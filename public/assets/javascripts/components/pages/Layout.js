import React from 'react'
import Nav from './Layout/Nav'
import { Link } from 'react-router-dom'

export default class Layout extends React.Component {
  render() {
    return (
       <div>
        <Nav />
        <h1>Big title</h1>
        {this.props.children}
        <p>Let's start building single page apps with React...this is where it gets fun.  We're going to start with routing - the core of any single page application.  As you'll see, react router makes routing extremely simple.  Each route simply gets a component.</p>
       </div>
    );
  }
}
