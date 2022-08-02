import React from 'react';
import { MountFormType } from '../types';
import { PayjpV2Service } from '../lib/payjp-service';
declare const PayjpV2: React.FC<{
    children: React.ReactNode;
    payjp: PayjpV2Service;
    buttonText: string;
    setIsPayjpReady: React.Dispatch<React.SetStateAction<boolean>>;
    setChildren: React.Dispatch<React.SetStateAction<React.ReactNode | React.ReactNode[]>>;
}>;
declare const PayJpV2Element: React.FC<MountFormType>;
export { PayjpV2, PayJpV2Element };
