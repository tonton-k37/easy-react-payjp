import { type } from 'os';
import React, { Children, memo, useEffect, useState } from 'react';
import { PayJpV2Service } from '../lib/payjp-service';
import { MountFormType, PayJpV2PropType } from '../types';

const isIterable = (obj: any) => {
  if (obj == null) return false
  return typeof obj[Symbol.iterator] === 'function'
}

export const PayJpV2: React.FC<PayJpV2PropType> =
  ({ children, publicToken, buttonText, onTokenCreated, onNumberFormInputChange }) => {
    const [loaded, setLoaded] = useState(false)
    const [scriptLoaded, setScriptLoaded] = useState(false)

    const payJpV2Service = new PayJpV2Service({
      publicToken: publicToken,
      onTokenCreated: onTokenCreated,
      onNumberFormInputChange: onNumberFormInputChange,
    })

    useEffect(() => {
      setLoaded(true)
      payJpV2Service.createScript(() => setScriptLoaded(true))
    }, [])

    useEffect(() => {
      if (scriptLoaded) {
        payJpV2Service.createElements();
        if (!children) {
          console.warn('need to pass at least one card form')
          return
        }

        const childs = isIterable(children) ? children : [children];

        (childs as []).forEach((child: any) => {
          payJpV2Service.mountForm({
            name: child.props.name,
            id: child.props.id,
            style: child.props.style
          })
        })
      }
    }, [scriptLoaded])

    return (
      <div id='payjp-v2' className='payjp-outer'>
        {children}
        <button onClick={payJpV2Service.submit}>{buttonText}</button>
        <span id='payjp-v2-token'></span>
      </div>
    )
  }

export const PayJpV2Element: React.FC<MountFormType> =
  ({ id }) => {
    return <div id={id}></div>
  }
