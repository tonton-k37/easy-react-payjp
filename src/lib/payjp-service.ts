import {
  MountFormType,
  PayJpCheckoutType,
  PayJpType,
  PayJpV2Type,
  SupportedLanguageType,
} from '../types';

declare const window: PayJpType;

export class PayJpCheckOutService {
  private _payJpSource!: string;

  public get payJpSource() {
    return this._payJpSource;
  }

  public set payJpSource(value) {
    this._payJpSource = value;
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
    payJpSource = 'https://checkout.pay.jp/',
    publicToken,
    buttonAppendTo = '',
    onTokenCreated = () => console.log('token created'),
    onTokenFailedToCreate = () => console.log('failed to create token'),
    text = '?????????????????????',
    submitText = '?????????????????????',
    tokenName = '',
    previousToken = '',
    lang = 'ja',
    namePlaceholder = 'TARO YAMADA',
    tenant = '',
    partial = true,
  }: PayJpCheckoutType) {
    this.payJpSource = payJpSource;
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
    script.src = this.payJpSource;
    script.classList.add('payjp-button');

    this.getAttributeList().forEach((attributeName) => {
      script.dataset[attributeName] = (this as any)[attributeName];
    });

    script.dataset.key = this.publicToken;
    script.dataset.onCreated = 'payJpServiceOnTokenCreated';
    script.dataset.onFailed = 'payJpServiceonTokenFailedToCreate';

    document?.getElementById(this.buttonAppendTo)?.appendChild(script);
  }

  private setCallBackToWindow() {
    window.payJpServiceOnTokenCreated = this.onTokenCreated;
    window.payJpServiceonTokenFailedToCreate = this.onTokenFailedToCreate;
  }

  private getAttributeList(unscored: boolean = false): string[] {
    const attributeNames = Object.getOwnPropertyNames(this).filter(
      (attribute) =>
        !['_payJpSource', '_onTokenCreated', '_onTokenFailedToCreate'].includes(
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

export class PayJpV2Service {
  private _formAppendTo!: string;

  public get formAppendTo(): string {
    return this._formAppendTo;
  }

  public set formAppendTo(value: string) {
    this._formAppendTo = value;
  }

  private _payJpV2Source!: string;

  public get payJpV2Source(): string {
    return this._payJpV2Source;
  }

  public set payJpV2Source(value: string) {
    this._payJpV2Source = value;
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

  private _scriptId = 'payjp-v2-script';

  public get scriptId() {
    return this._scriptId;
  }

  public set scriptId(value) {
    this._scriptId = value;
  }

  private _payjp: any;

  public get payjp(): any {
    return this._payjp;
  }

  public set payjp(value: any) {
    this._payjp = value;
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
    formAppendTo = 'payjp-v2',
    payJpV2Source = 'https://js.pay.jp/v2/pay.js',
    publicToken,
    onTokenCreated = () => console.log('token created'),
    onNumberFormInputChange = (event) => console.log('input changed'),
  }: PayJpV2Type) {
    this.formAppendTo = formAppendTo;
    this.payJpV2Source = payJpV2Source;
    this.publicToken = publicToken;
    this.onTokenCreated = onTokenCreated;
    this.onNumberFormInputChange = onNumberFormInputChange;

    this.submit = this.submit.bind(this);
  }

  public createScript(callbackFunction?: <T>(args?: T) => any) {
    const isScriptExist = document.getElementById(this.scriptId);

    if (!isScriptExist) {
      const script = document.createElement('script');
      script.src = this.payJpV2Source;
      script.id = this.scriptId;
      script.type = 'module';

      document.head.appendChild(script);

      script.onload = (event) => {
        if (callbackFunction) callbackFunction();
      };
    }
  }

  public createElements() {
    try {
      this.payjp = Payjp(this.publicToken);
      this.elements = this.payjp.elements();
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
    this.payjp
      .createToken(this.card)
      .then(
        (r: {
          error: { message: string | undefined };
          id: string | undefined;
        }) => {
          const v2tokenElement = document?.getElementById('payjp-v2-token');
          (v2tokenElement as any).innerText = r.error ? r.error.message : r.id;
        }
      );
  }
}
