import React from 'react'
import { PayJpCheckOut } from './component/PayJpCheckout'

export const App: React.FC = () => {
  return (
    <div>
      <PayJpCheckOut
        publicToken='pk_test_0383a1b8f91e8a6e3ea0e2a9'
        onTokenCreated={() => console.info('token created')}
        onTokenFailedToCreate={() => console.info('error')}
      />
    </div>
  )
}
