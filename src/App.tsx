import React from 'react';
import { usePayjpV2, usePayjpCheckout } from './';
import { PayjpCheckout, PayjpV2, PayJpV2Element } from './components';

const style = {
  base: {
    color: '#198fcc',
    '::placeholder': {
      fontStyle: 'italic',
      color: 'green',
    },
  },
  invalid: {
    color: 'red',
  },
};

export const App: React.FC = () => {
  const checkoutProps = usePayjpCheckout({
    publicToken: 'pk_test_e411f2a3951990d74afda24d',
    onTokenCreated: () => console.info('token created'),
    onTokenFailedToCreate: () => console.error('error'),
  });

  const v2Props = usePayjpV2({
    publicToken: 'pk_test_e411f2a3951990d74afda24d',
    buttonText: 'submit',
    onTokenCreated: () => console.log('createToken'),
    onNumberFormInputChange: () => console.log('form changed'),
  });

  return (
    <div>
      <PayjpCheckout {...checkoutProps} />

      <PayjpV2 {...v2Props}>
        <PayJpV2Element name='card' id='card' />
      </PayjpV2>
    </div>
  );
};
