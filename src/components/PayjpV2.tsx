import React, { useEffect } from 'react';
import { MountFormType } from '../types';
import { PayjpV2Service } from '../lib/payjp-service';

const PayjpV2: React.FC<{
  children: React.ReactNode;
  payjp: PayjpV2Service;
  buttonText: string;
  setIsPayjpReady: React.Dispatch<React.SetStateAction<boolean>>;
  setChildren: React.Dispatch<
    React.SetStateAction<React.ReactNode | React.ReactNode[]>
  >;
}> = ({ children, payjp, buttonText, setIsPayjpReady, setChildren }) => {
  useEffect(() => {
    setIsPayjpReady(true);
    setChildren(children);
  }, []);

  return (
    <div id={payjp.scriptId}>
      <div id='payjp-v2' className='payjp-outer'>
        {children}
        <button onClick={payjp.submit}>{buttonText}</button>
        <span id='payjp-v2-token'></span>
      </div>
    </div>
  );
};

const PayJpV2Element: React.FC<MountFormType> = ({ id }) => {
  return <div id={id}></div>;
};

export { PayjpV2, PayJpV2Element };
