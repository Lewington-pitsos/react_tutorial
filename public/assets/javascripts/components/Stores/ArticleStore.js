import {EventEmitter} from 'events'; // 'events is like, part of nodejs'
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

}

const articleStore = new ArticleStore;

export default articleStore;
