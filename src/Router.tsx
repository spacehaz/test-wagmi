import {
  Route,
  Switch,
  HashRouter,
  BrowserRouter
} from 'react-router-dom'
import { useConnect } from 'wagmi'

const Router = () => {
  const { connect, connectors } = useConnect()
  const coinbaseConnector = connectors.find(connector => connector.id === "coinbaseWalletSDK")

  return <BrowserRouter>
    <Switch>
      <Route path='/redeem/xxx'>
        
        <button
          onClick={() => {
            if (coinbaseConnector) {
              connect({ connector: coinbaseConnector })
            }
          }}
        >CONNECT</button>
      </Route>
      
      <Route path='*'>
        <h1>Not found</h1>
      </Route>
    </Switch>
  </BrowserRouter>
}

export default Router

