import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import CityIndexContainer from '../containers/CityIndexContainer'

export const App = (props) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component = {CityIndexContainer}/>
        <Route exact path="/cities" component = {CityIndexContainer}/>
      </Switch>
    </BrowserRouter>
  )
}

export default App
