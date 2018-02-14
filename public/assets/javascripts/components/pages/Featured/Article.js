import React from 'react'

export default class Article extends React.Component {
  render() {
    return (
        <div className="row justify-content-center">
          <div className="col-8">
            <h3>{this.props.title}</h3>
            <p>{this.props.text}﻿</p>
          </div>
        </div>
    );
  }
}
