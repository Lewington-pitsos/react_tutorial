import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Route } from 'react-router-dom';

import Layout from './components/pages/Layout';
import Archive from './components/pages/Archive';
import Featured from './components/pages/Featured';

const main = document.getElementById('main')

ReactDOM.render(
  <BrowserRouter>
    <div>
      <Layout>
        <Route exact path="/" component={Featured} />
        <Route path="/archive/:article?" component={Archive} />
      </Layout>
    </div>
  </BrowserRouter>
  , main);
