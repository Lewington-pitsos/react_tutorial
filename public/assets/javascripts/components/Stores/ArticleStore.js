import {EventEmitter} from 'events'; // 'events is like, part of nodejs'

import dispatcher from '../dispatcher'

class ArticleStore extends EventEmitter {
  constructor() {
    super()
    this.articles = [
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
    ];
  }

  getAll() {
    return this.articles;
  }

  handleActions(action) {
    console.log('lolol action', action);
    switch(action.type) {
      case "CREATE_ARTICLE": {
        this.createArticle('flooby dooby', 'helped me understand creating a good build environment. I am implementing this on')
      }
    }
  }

  createArticle(title, text) {
    this.articles.push({
      title: title,
      text: text,
      id: Date.now
    })

    this.emit('change');
  }

}

const articleStore = new ArticleStore;

dispatcher.register(articleStore.handleActions.bind(articleStore))
window.dispatcher = dispatcher
export default articleStore;
