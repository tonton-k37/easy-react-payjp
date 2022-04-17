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
