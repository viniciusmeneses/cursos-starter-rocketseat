import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Main from './pages/main'
import Products from './pages/product'

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={Main} />
      {/* Para receber um parametro pela URL, colocamos : e o nome do parametro (:id) */}
      <Route path="/products/:id" component={Products} />
    </Switch>
  </BrowserRouter>
)

export default Routes
