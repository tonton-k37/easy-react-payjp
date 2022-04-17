export type PayJpType = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  payJpServiceOnTokenCreated: <T>(args: T) => any;
  payJpServiceonTokenFailedToCreate: <T>(args: T) => any;
} & Window;

export type SupportedLanguageType = 'ja' | 'en';

export type PayJpCheckoutType = {
  payJpSource?: string;
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
export type PayJpV2Type = {
  formAppendTo?: string;
  payJpV2Source?: string;
  publicToken: string;
  onTokenCreated?: <T>(args: T) => any;
  onNumberFormInputChange?: <T>(args: T) => any;
};

export type PayJpV2PropType = {
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
