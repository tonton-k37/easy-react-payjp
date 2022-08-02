/// <reference types="react" />
import { PayjpCheckoutType } from '../types';
declare const usePayjpCheckout: ({ PayjpSource, publicToken, onTokenCreated, onTokenFailedToCreate, text, submitText, tokenName, previousToken, lang, namePlaceholder, tenant, partial, }: PayjpCheckoutType) => {
    setIsPayjpReady: import("react").Dispatch<import("react").SetStateAction<boolean>>;
};
export { usePayjpCheckout };
