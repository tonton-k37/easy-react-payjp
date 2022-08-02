import React, { FC, useEffect } from 'react';

const PayjpCheckout: FC<{
  setIsPayjpReady: React.Dispatch<React.SetStateAction<boolean>>;
}> = ({ setIsPayjpReady }) => {
  useEffect(() => {
    setIsPayjpReady(true);
  }, []);
  return <div id='payjpService'></div>;
};

export { PayjpCheckout };
