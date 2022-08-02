import { useEffect, useState } from 'react';
import { PayjpCheckoutService } from '../lib/payjp-service';
import { PayjpCheckoutType } from '../types';

const usePayjpCheckout = ({
  PayjpSource,
  publicToken,
  onTokenCreated,
  onTokenFailedToCreate,
  text,
  submitText,
  tokenName,
  previousToken,
  lang,
  namePlaceholder,
  tenant,
  partial,
}: PayjpCheckoutType) => {
  const [isPayjpReady, setIsPayjpReady] = useState(false);

  const payjp = new PayjpCheckoutService({
    PayjpSource,
    publicToken,
    buttonAppendTo: 'payjpService',
    onTokenCreated: () => console.info('token created'),
    onTokenFailedToCreate: () => console.info('error'),
    text,
    submitText,
    tokenName,
    previousToken,
    lang,
    namePlaceholder,
    tenant,
    partial,
  });

  useEffect(() => {
    if (isPayjpReady) {
      payjp.mountButton();
    }
  }, [isPayjpReady]);

  return { setIsPayjpReady };
};

export { usePayjpCheckout };
