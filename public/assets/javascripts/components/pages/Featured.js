import React from 'react'
import Article from './Featured/Article'

import ArticleActions from '../Actions/ArticleActions'
import articleStore from '../Stores/ArticleStore'

export default class Featured extends React.Component {
  constructor() {
    super()

    this.state = {articles: articleStore.getAll()};
  }

  componentWillMount() {
    articleStore.on('change', () => {
      this.setState({articles: articleStore.getAll() })
    })
  }

  createArticle() {
    ArticleActions.createArticle('lol', 'fffffffffffdsfsd fsd sd fds fsfd ')
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
        <button onClick={this.createArticle.bind(this)}>Create Article</button>
       </div>
    );
  }
}
