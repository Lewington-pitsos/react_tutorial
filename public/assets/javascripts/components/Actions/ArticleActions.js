import Dispatcher from '../dispatcher'

export default {
  createArticle (title, text) {
    dispatcher.dispatch({
      type: 'CREATE_ARTICLE',
      text: text,
      title: title
    })
  }
}
