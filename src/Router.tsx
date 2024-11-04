import {
  Route,
  Switch,
  HashRouter,
  BrowserRouter,
  useHistory
} from 'react-router-dom'
import { useConnect } from 'wagmi'

const NotFound = () => {
  const history = useHistory()

  return <>
    <h1>Not found</h1>
    <button
      onClick={() => {
        history.push('/99666')
      }}
    >GO TO TEST PAGE</button>
  </>
}

const Router = () => {
  const { connect, connectors } = useConnect()

  const coinbaseConnector = connectors.find(connector => connector.id === "coinbaseWalletSDK")

  return <BrowserRouter>
    <Switch>
      <Route path='/99666'>
        
        <button
          onClick={() => {
            if (coinbaseConnector) {
              connect({ connector: coinbaseConnector })
            }
          }}
        >CONNECT</button>
      </Route>
      
      <Route path='*'>
        <NotFound />
      </Route>
    </Switch>
  </BrowserRouter>
}

export default Router

