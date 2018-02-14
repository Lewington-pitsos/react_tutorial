import React from 'react'
import Article from './Featured/Article'

export default class Featured extends React.Component {
  render() {
    const articles = [
      "dowx",
      "fdffdx",
      "doffdfswx",
      "dogsgdswx"
    ].map((title, index) => <Article key={index} title={title}/>);
    return (
       <div>
        <h2>Featured</h2>
        <div className="container">
          {articles}
        </div>
       </div>
    );
  }
}
