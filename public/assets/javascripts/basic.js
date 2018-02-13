import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Route } from 'react-router-dom';

import Layout from './components/Layout';

const main = document.getElementById('main')

ReactDOM.render(
  <BrowserRouter>
    <div>
      <Route exact path ="/" component={Layout} />
    </div>
  </BrowserRouter>
  , main);
