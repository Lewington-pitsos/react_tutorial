import React from 'react'
import { Link } from 'react-router-dom'

export default class Layout extends React.Component {
  render() {
    return (
       <div>
        <h1>Big title</h1>
        <Link to="/archive">Archive</Link>
        <Link to="/">Featured</Link>
       </div>
    );
  }
}
