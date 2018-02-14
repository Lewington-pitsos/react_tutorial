import React from 'react'
import Article from './Featured/Article'

export default class Featured extends React.Component {
  constructor() {
    super()
    var articles = [
      {
        title: 'haopy',
        text: 'Very good tutorial series on react. I learnt not only reactjs, but this tutorial helped me understand creating a good build',
        id: 1
      },
      {
        title: 'sdhashd',
        text: 'environment. I am implementing this on laravel framework and things are going good. Waiting for flux integration.﻿',
        id: 3
      },
      {
        title: 'hasdsad dsadasds',
        text: 'Very good tutorial series on react. I learnt not only reactjs, but this tutorial helped me understand creating a good build environment. I am implementing this on laravel framework and things are going good. Waiting for flux integration.﻿',
        id: 2
      }
    ].map((art) => <Article key={art.id} title={art.title} text={art.text}/>);

    this.state = {articles: articles};
  }

  render() {
    return (
       <div>
        <h2>Featured</h2>
        <div className="container p-4 mb-4 mt-4">
          {this.state.articles}
        </div>
       </div>
    );
  }
}
