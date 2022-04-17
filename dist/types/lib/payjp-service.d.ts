import { PayJpCheckoutType, SupportedLanguageType } from '../types';
export declare class PayJpCheckOutService {
    private _payJpSource;
    get payJpSource(): string;
    set payJpSource(value: string);
    private _publicToken;
    get publicToken(): string;
    set publicToken(value: string);
    private _buttonAppendTo;
    get buttonAppendTo(): string;
    set buttonAppendTo(value: string);
    private _onTokenCreated;
    get onTokenCreated(): <T>(args: T) => any;
    set onTokenCreated(value: <T>(args: T) => any);
    private _onTokenFailedToCreate;
    get onTokenFailedToCreate(): any | undefined;
    set onTokenFailedToCreate(value: <T>(args: T) => any);
    private _text;
    get text(): string;
    set text(value: string);
    private _submitText;
    get submitText(): string;
    set submitText(value: string);
    private _tokenName;
    get tokenName(): string;
    set tokenName(value: string);
    private _previousToken;
    get previousToken(): string;
    set previousToken(value: string);
    private _lang;
    get lang(): SupportedLanguageType;
    set lang(value: SupportedLanguageType);
    private _namePlaceholder;
    get namePlaceholder(): string;
    set namePlaceholder(value: string);
    private _tenant;
    get tenant(): string;
    set tenant(value: string);
    private _partial;
    get partial(): boolean;
    set partial(value: boolean);
    constructor({ payJpSource, publicToken, buttonAppendTo, onTokenCreated, onTokenFailedToCreate, text, submitText, tokenName, previousToken, lang, namePlaceholder, tenant, partial, }: PayJpCheckoutType);
    mountButton(): void;
    private setCallBackToWindow;
    private getAttributeList;
}
export declare class PayJpV2Service {
}
