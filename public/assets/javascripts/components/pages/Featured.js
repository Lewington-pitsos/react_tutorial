import React from 'react'
import Article from './Featured/Article'

import articleStore from '../Stores/ArticleStore'

export default class Featured extends React.Component {
  constructor() {
    super()

    this.state = {articles: articleStore.getAll()};
  }

  render() {
    const articleComponents = this
      .state
      .articles
      .map((art) => <Article key={art.id} title={art.title} text={art.text}/>);

    return (
       <div>
        <h2>Featured</h2>
        <div className="container p-4 mb-4 mt-4">
          {articleComponents}
        </div>
       </div>
    );
  }
}
