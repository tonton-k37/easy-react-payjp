/// <reference types="react" />
export declare type PayJpType = {
    payJpServiceOnTokenCreated: <T>(args: T) => any;
    payJpServiceonTokenFailedToCreate: <T>(args: T) => any;
} & Window;
export declare type SupportedLanguageType = 'ja' | 'en';
export declare type PayJpCheckoutType = {
    payJpSource?: string;
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
export declare type PayJpV2Type = {
    formAppendTo?: string;
    payJpV2Source?: string;
    publicToken: string;
    onTokenCreated?: <T>(args: T) => any;
    onNumberFormInputChange?: <T>(args: T) => any;
};
export declare type PayJpV2PropType = {
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
