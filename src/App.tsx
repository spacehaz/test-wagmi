import React from 'react'
import './App.css'
import Router from './Router'

import { queryClient, config } from './connectors'
import { QueryClientProvider } from '@tanstack/react-query'
import { WagmiProvider } from 'wagmi'


function App() {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <Router />
      </QueryClientProvider>
      
    </WagmiProvider>
  )
}

export default App;
