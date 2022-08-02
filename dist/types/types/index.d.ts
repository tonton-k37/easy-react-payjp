/// <reference types="react" />
export declare type PayjpType = {
    payjpServiceOnTokenCreated: <T>(args: T) => any;
    payjpServiceonTokenFailedToCreate: <T>(args: T) => any;
} & Window;
export declare type SupportedLanguageType = 'ja' | 'en';
export declare type PayjpCheckoutType = {
    PayjpSource?: string;
    publicToken: string;
    buttonAppendTo?: string;
    onTokenCreated?: <T>(args: T) => any;
    onTokenFailedToCreate?: <T>(args: T) => any;
    text?: string;
    submitText?: string;
    tokenName?: string;
    previousToken?: string;
    lang?: SupportedLanguageType;
    namePlaceholder?: string;
    tenant?: string;
    partial?: boolean;
};
export declare type PayjpV2Type = {
    formAppendTo?: string;
    PayjpV2Source?: string;
    publicToken: string;
    onTokenCreated?: <T>(args: T) => any;
    onNumberFormInputChange?: <T>(args: T) => any;
};
export declare type PayjpV2PropType = {
    buttonText: string;
    publicToken: string;
    onTokenCreated?: <T>(args: T) => any;
    onNumberFormInputChange?: <T>(args: T) => any;
    children?: React.ReactNode | React.ReactNode[];
};
declare type MountFormmNameType = 'card' | 'cardNumber' | 'cardExpiry' | 'cardCvc';
export declare type MountFormType = {
    name: MountFormmNameType;
    id: string;
    style?: any;
};
export {};
