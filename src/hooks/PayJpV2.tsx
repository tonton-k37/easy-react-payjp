import { useEffect, useState } from 'react';
import { PayjpV2Service } from '../lib/payjp-service';
import { MountFormType, PayjpV2PropType } from '../types';
const isIterable = (obj: any) => {
  if (obj == null) return false;
  return typeof obj[Symbol.iterator] === 'function';
};

const payjp = new PayjpV2Service({});

const usePayjpV2 = ({
  publicToken,
  buttonText,
  onTokenCreated,
  onNumberFormInputChange,
}: PayjpV2PropType) => {
  const [isPayjpReady, setIsPayjpReady] = useState(false);
  const [isElementsReady, setIsElementsReady] = useState(false);
  const [children, setChildren] = useState<React.ReactNode | React.ReactNode[]>(
    []
  );

  useEffect(() => {
    if (isPayjpReady) {
      payjp.init({
        publicToken,
        onTokenCreated,
        onNumberFormInputChange,
      });
      (async () => {
        await payjp.createScript();
        payjp.createElements();
        setIsElementsReady(true);
      })();
    }
  }, [isPayjpReady]);

  useEffect(() => {
    if (isElementsReady) {
      if (!children) {
        console.warn('need to pass at least one card form');
        return;
      }

      const childs = isIterable(children) ? children : [children];

      (childs as []).forEach((child: any) => {
        payjp.mountForm({
          name: child.props.name,
          id: child.props.id,
          style: child.props.style,
        });
      });
    }
  }, [children, isElementsReady]);

  return { setIsPayjpReady, payjp, buttonText, setChildren };
};

export { usePayjpV2 };
