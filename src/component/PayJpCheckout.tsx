import React from 'react'

import { useEffect, useState } from 'react'
import { PayJpCheckOutService, PayJpCheckoutType, SupportedLanguageType } from '../lib/payjp-service'

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
  partial
}) => {
  const [loaded, setLoaded] = useState(false)

  const payJpService = new PayJpCheckOutService({
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
    partial
  })

  useEffect(() => {
    setLoaded(true)
  }, [])

  useEffect(() => {
    if (loaded) {
      payJpService.mountButton()
    }
  }, [loaded])

  return <div id='payjpService'></div>
}
