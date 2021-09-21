import React from "react"
import {Route, Switch, withRouter} from 'react-router-dom'
import Home from './components/Home'

const Routes = () => {
  return (
    <div>
          <Switch>
<Route path="/home">
  <Home />
</Route>

</Switch>
    </div>

  )
}

export default withRouter(Routes)

