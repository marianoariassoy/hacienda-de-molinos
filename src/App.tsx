import { Route } from 'wouter'
import Home from './pages/home/Index'

function App() {
  return (
    <>
      <Route
        path='/'
        component={Home}
      />
    </>
  )
}

export default App
