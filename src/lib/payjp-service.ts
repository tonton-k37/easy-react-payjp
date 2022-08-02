import {
  MountFormType,
  PayjpCheckoutType,
  PayjpType,
  PayjpV2Type,
  SupportedLanguageType,
} from '../types';

declare const window: PayjpType;

export class PayjpCheckoutService {
  private _PayjpSource!: string;

  public get PayjpSource() {
    return this._PayjpSource;
  }

  public set PayjpSource(value) {
    this._PayjpSource = value;
  }

  private _publicToken!: string;

  public get publicToken(): string {
    return this._publicToken;
  }

  public set publicToken(value: string) {
    this._publicToken = value;
  }

  private _buttonAppendTo!: string;

  public get buttonAppendTo(): string {
    return this._buttonAppendTo;
  }

  public set buttonAppendTo(value: string) {
    this._buttonAppendTo = value;
  }

  private _onTokenCreated!: <T>(args: T) => any;

  public get onTokenCreated(): <T>(args: T) => any {
    return this._onTokenCreated;
  }

  public set onTokenCreated(value: <T>(args: T) => any) {
    this._onTokenCreated = value;
  }

  private _onTokenFailedToCreate!: <T>(args: T) => any;

  public get onTokenFailedToCreate(): any | undefined {
    if (!this.partial) {
      console.warn(
        'unable to call this callback. partial needs to be set to true'
      );

      return;
    }

    return this._onTokenFailedToCreate;
  }

  public set onTokenFailedToCreate(value: <T>(args: T) => any) {
    this._onTokenFailedToCreate = value;
  }

  private _text!: string;

  public get text(): string {
    return this._text;
  }

  public set text(value: string) {
    this._text = value;
  }

  private _submitText!: string;

  public get submitText(): string {
    return this._submitText;
  }

  public set submitText(value: string) {
    this._submitText = value;
  }

  private _tokenName!: string;

  public get tokenName(): string {
    return this._tokenName;
  }

  public set tokenName(value: string) {
    this._tokenName = value;
  }

  private _previousToken!: string;

  public get previousToken(): string {
    return this._previousToken;
  }

  public set previousToken(value: string) {
    this._previousToken = value;
  }

  private _lang!: SupportedLanguageType;

  public get lang(): SupportedLanguageType {
    return this._lang || 'ja';
  }

  public set lang(value: SupportedLanguageType) {
    this._lang = value;
  }

  private _namePlaceholder!: string;

  public get namePlaceholder(): string {
    return this._namePlaceholder;
  }

  public set namePlaceholder(value: string) {
    this._namePlaceholder = value;
  }

  private _tenant!: string;

  public get tenant(): string {
    return this._tenant;
  }

  public set tenant(value: string) {
    this._tenant = value;
  }

  private _partial!: boolean;

  public get partial(): boolean {
    return this._partial;
  }

  public set partial(value: boolean) {
    this._partial = value;
  }

  constructor({
    PayjpSource = 'https://checkout.pay.jp/',
    publicToken,
    buttonAppendTo = '',
    onTokenCreated = () => console.log('token created'),
    onTokenFailedToCreate = () => console.log('failed to create token'),
    text = 'カードで支払う',
    submitText = 'カードで支払う',
    tokenName = '',
    previousToken = '',
    lang = 'ja',
    namePlaceholder = 'TARO YAMADA',
    tenant = '',
    partial = true,
  }: PayjpCheckoutType) {
    this.PayjpSource = PayjpSource;
    this.publicToken = publicToken;
    this.buttonAppendTo = buttonAppendTo;
    this.onTokenCreated = onTokenCreated;
    this.onTokenFailedToCreate = onTokenFailedToCreate;
    this.text = text;
    this.submitText = submitText;
    this.tokenName = tokenName;
    this.previousToken = previousToken;
    this.lang = lang;
    this.namePlaceholder = namePlaceholder;
    this.tenant = tenant;
    this.partial = partial;

    this.setCallBackToWindow();
  }

  public mountButton() {
    const script = document.createElement('script');
    script.src = this.PayjpSource;
    script.classList.add('payjp-button');

    this.getAttributeList().forEach((attributeName) => {
      script.dataset[attributeName] = (this as any)[attributeName];
    });

    script.dataset.key = this.publicToken;
    script.dataset.onCreated = 'payjpServiceOnTokenCreated';
    script.dataset.onFailed = 'payjpServiceonTokenFailedToCreate';

    document.getElementById(this.buttonAppendTo)?.appendChild(script);
  }

  private setCallBackToWindow() {
    window.payjpServiceOnTokenCreated = this.onTokenCreated;
    window.payjpServiceonTokenFailedToCreate = this.onTokenFailedToCreate;
  }

  private getAttributeList(unscored: boolean = false): string[] {
    const attributeNames = Object.getOwnPropertyNames(this).filter(
      (attribute) =>
        !['_payjpSource', '_onTokenCreated', '_onTokenFailedToCreate'].includes(
          attribute
        )
    );

    if (unscored) return attributeNames;

    return attributeNames.map((name) => {
      return name.replace('_', '');
    });
  }
}

// V2

export class PayjpV2Service {
  private _formAppendTo!: string;

  public get formAppendTo(): string {
    return this._formAppendTo;
  }

  public set formAppendTo(value: string) {
    this._formAppendTo = value;
  }

  private _PayjpV2Source!: string;

  public get PayjpV2Source(): string {
    return this._PayjpV2Source;
  }

  public set PayjpV2Source(value: string) {
    this._PayjpV2Source = value;
  }

  private _publicToken!: string;

  public get publicToken(): string {
    return this._publicToken;
  }

  public set publicToken(value: string) {
    this._publicToken = value;
  }

  private _onTokenCreated!: <T>(args: T) => any;

  public get onTokenCreated(): <T>(args: T) => any {
    return this._onTokenCreated;
  }

  public set onTokenCreated(value: <T>(args: T) => any) {
    this._onTokenCreated = value;
  }

  private _onNumberFormInputChange!: <T>(args: T) => any;

  public get onNumberFormInputChange(): <T>(args: T) => any {
    return this._onNumberFormInputChange;
  }

  public set onNumberFormInputChange(value: <T>(args: T) => any) {
    this._onNumberFormInputChange = value;
  }

  private _scriptId = 'Payjp-v2-script';

  public get scriptId() {
    return this._scriptId;
  }

  public set scriptId(value) {
    this._scriptId = value;
  }

  private _Payjp: any;

  public get Payjp(): any {
    return this._Payjp;
  }

  public set Payjp(value: any) {
    this._Payjp = value;
  }

  private _elements: any;

  public get elements(): any {
    return this._elements;
  }

  public set elements(value: any) {
    this._elements = value;
  }

  card: any;

  constructor({
    formAppendTo = 'Payjp-v2',
    PayjpV2Source = 'https://js.pay.jp/v2/pay.js',
  }) {
    this.formAppendTo = formAppendTo;
    this.PayjpV2Source = PayjpV2Source;
  }

  public init({
    publicToken,
    onTokenCreated = () => console.log('token created'),
    onNumberFormInputChange = (event) => console.log('input changed'),
  }: PayjpV2Type) {
    this.publicToken = publicToken;
    this.onTokenCreated = onTokenCreated;
    this.onNumberFormInputChange = onNumberFormInputChange;
  }

  public createScript(callbackFunction?: <T>(args?: T) => any) {
    return new Promise((resolve, reject) => {
      const isScriptExist = document.getElementById(this.scriptId);

      if (isScriptExist) {
        const script = document.createElement('script');
        script.src = this.PayjpV2Source;
        script.id = this.scriptId;

        document.head.appendChild(script);

        script.onload = (event) => {
          if (callbackFunction) callbackFunction();
          resolve(true);
        };
      }
    });
  }

  public createElements() {
    try {
      this.Payjp = Payjp(this.publicToken);
      this.elements = this.Payjp.elements();
    } catch (e) {
      console.warn(e);
    }
  }

  public mountForm(form: MountFormType) {
    const element = this.elements.create(form.name, { style: form.style });
    element.mount(`#${form.id}`);

    if (form.name === 'card' || 'cardNumber') {
      this.card = element;
      element.on('change', this.onNumberFormInputChange);
    }
  }

  public submit() {
    this.Payjp.createToken(this.card).then(
      (r: {
        error: { message: string | undefined };
        id: string | undefined;
      }) => {
        const v2tokenElement = document?.getElementById('Payjp-v2-token');
        (v2tokenElement as any).innerText = r.error ? r.error.message : r.id;
      }
    );
  }
}
