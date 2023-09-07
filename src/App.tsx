import { Route, Switch } from 'wouter'
import Home from './pages/home/Index'
import Historia from './pages/historia/Index'
import Vino from './pages/ruta-del-vino/Index'
import Beneficios from './pages/beneficios-y-promociones/Index'
import Vivi from './pages/vivi-molinos/Index'

function App() {
  return (
    <Switch>
      <Route
        path='/historia'
        component={Historia}
      />
      <Route
        path='/ruta-del-vino'
        component={Vino}
      />
      <Route
        path='/beneficios-y-promociones'
        component={Beneficios}
      />
      <Route
        path='/vivi-molinos'
        component={Vivi}
      />
      <Route component={Home} />
    </Switch>
  )
}

export default App
