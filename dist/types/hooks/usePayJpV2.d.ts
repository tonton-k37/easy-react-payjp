/// <reference types="react" />
import { PayjpV2Service } from '../lib/payjp-service';
import { PayjpV2PropType } from '../types';
declare const usePayjpV2: ({ publicToken, buttonText, onTokenCreated, onNumberFormInputChange, }: PayjpV2PropType) => {
    setIsPayjpReady: import("react").Dispatch<import("react").SetStateAction<boolean>>;
    payjp: PayjpV2Service;
    buttonText: string;
    setChildren: import("react").Dispatch<import("react").SetStateAction<import("react").ReactNode | import("react").ReactNode[]>>;
};
export { usePayjpV2 };
