import React from 'react'
import { PayJpCheckOut } from './component/PayJpCheckout'
import { PayJpV2 } from './';
import { PayJpV2Element } from './component/PayJpV2';

const style = {
  base: {
    color: '#198fcc',
    '::placeholder': {
      fontStyle: 'italic',
      color: 'green',
    }
  },
  invalid: {
    color: 'red',
  }
}

export const App: React.FC = () => {
  return (
    <div>
      <PayJpCheckOut
        publicToken='YOUR_PUBLIC_API_KEY'
        onTokenCreated={() => console.info('token created')}
        onTokenFailedToCreate={() => console.info('error')}
      />

      <PayJpV2 publicToken={'YOUR_PUBLIC_API_KEY'}
        buttonText={'submit'}
        onTokenCreated={() => console.log('createToken')}
        onNumberFormInputChange={() => console.log('form changed')}
      >
        <PayJpV2Element name='card' id='card' />
      </PayJpV2>
    </div>
  )
}
