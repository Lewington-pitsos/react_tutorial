import React from 'react'

export default class Article extends React.Component {
  render() {
    return (
        <div className="row justify-content-center">
          <div className="col-8">
            <h3>{this.props.title}</h3>
            <p>Very good tutorial series on react. I learnt not only reactjs, but this tutorial helped me understand creating a good build environment. I am implementing this on laravel framework and things are going good. Waiting for flux integration.﻿</p>
          </div>
        </div>
    );
  }
}
