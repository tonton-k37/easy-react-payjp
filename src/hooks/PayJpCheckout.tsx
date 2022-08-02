import React, { useEffect, useState } from 'react';
import { PayJpCheckOutService } from '../lib/payjp-service';
import { PayJpCheckoutType } from '../types';

export const PayJpCheckOut: React.FC<PayJpCheckoutType> = ({
  payJpSource,
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
}) => {
  const [loaded, setLoaded] = useState(false);

  const usePayJpService = new PayJpCheckOutService({
    payJpSource,
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
    setLoaded(true);
  }, []);

  useEffect(() => {
    if (loaded) {
      usePayJpService.mountButton();
    }
  }, [loaded]);

  return <div id='payjpService'></div>;
};
