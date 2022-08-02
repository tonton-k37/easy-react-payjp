export type PayjpType = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  payjpServiceOnTokenCreated: <T>(args: T) => any;
  payjpServiceonTokenFailedToCreate: <T>(args: T) => any;
} & Window;

export type SupportedLanguageType = 'ja' | 'en';

export type PayjpCheckoutType = {
  PayjpSource?: string;
  publicToken: string;
  buttonAppendTo?: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
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

// for v2
export type PayjpV2Type = {
  formAppendTo?: string;
  PayjpV2Source?: string;
  publicToken: string;
  onTokenCreated?: <T>(args: T) => any;
  onNumberFormInputChange?: <T>(args: T) => any;
};

export type PayjpV2PropType = {
  buttonText: string;
  publicToken: string;
  onTokenCreated?: <T>(args: T) => any;
  onNumberFormInputChange?: <T>(args: T) => any;
  children?: React.ReactNode | React.ReactNode[];
};

type MountFormmNameType = 'card' | 'cardNumber' | 'cardExpiry' | 'cardCvc';

export type MountFormType = {
  name: MountFormmNameType;
  id: string;
  style?: any;
};
