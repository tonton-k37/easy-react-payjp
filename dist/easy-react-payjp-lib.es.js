var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
import React, { useState, useEffect } from "react";
class PayJpCheckOutService {
  constructor({
    payJpSource = "https://checkout.pay.jp/",
    publicToken,
    buttonAppendTo = "",
    onTokenCreated = () => console.log("token created"),
    onTokenFailedToCreate = () => console.log("failed to create token"),
    text = "\u30AB\u30FC\u30C9\u3067\u652F\u6255\u3046",
    submitText = "\u30AB\u30FC\u30C9\u3067\u652F\u6255\u3046",
    tokenName = "",
    previousToken = "",
    lang = "ja",
    namePlaceholder = "TARO YAMADA",
    tenant = "",
    partial = true
  }) {
    __publicField(this, "_payJpSource");
    __publicField(this, "_publicToken");
    __publicField(this, "_buttonAppendTo");
    __publicField(this, "_onTokenCreated");
    __publicField(this, "_onTokenFailedToCreate");
    __publicField(this, "_text");
    __publicField(this, "_submitText");
    __publicField(this, "_tokenName");
    __publicField(this, "_previousToken");
    __publicField(this, "_lang");
    __publicField(this, "_namePlaceholder");
    __publicField(this, "_tenant");
    __publicField(this, "_partial");
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
  get payJpSource() {
    return this._payJpSource;
  }
  set payJpSource(value) {
    this._payJpSource = value;
  }
  get publicToken() {
    return this._publicToken;
  }
  set publicToken(value) {
    this._publicToken = value;
  }
  get buttonAppendTo() {
    return this._buttonAppendTo;
  }
  set buttonAppendTo(value) {
    this._buttonAppendTo = value;
  }
  get onTokenCreated() {
    return this._onTokenCreated;
  }
  set onTokenCreated(value) {
    this._onTokenCreated = value;
  }
  get onTokenFailedToCreate() {
    if (!this.partial) {
      console.warn("unable to call this callback. partial needs to be set to true");
      return;
    }
    return this._onTokenFailedToCreate;
  }
  set onTokenFailedToCreate(value) {
    this._onTokenFailedToCreate = value;
  }
  get text() {
    return this._text;
  }
  set text(value) {
    this._text = value;
  }
  get submitText() {
    return this._submitText;
  }
  set submitText(value) {
    this._submitText = value;
  }
  get tokenName() {
    return this._tokenName;
  }
  set tokenName(value) {
    this._tokenName = value;
  }
  get previousToken() {
    return this._previousToken;
  }
  set previousToken(value) {
    this._previousToken = value;
  }
  get lang() {
    return this._lang || "ja";
  }
  set lang(value) {
    this._lang = value;
  }
  get namePlaceholder() {
    return this._namePlaceholder;
  }
  set namePlaceholder(value) {
    this._namePlaceholder = value;
  }
  get tenant() {
    return this._tenant;
  }
  set tenant(value) {
    this._tenant = value;
  }
  get partial() {
    return this._partial;
  }
  set partial(value) {
    this._partial = value;
  }
  mountButton() {
    var _a;
    const script = document.createElement("script");
    script.src = this.payJpSource;
    script.classList.add("payjp-button");
    this.getAttributeList().forEach((attributeName) => {
      script.dataset[attributeName] = this[attributeName];
    });
    script.dataset.key = this.publicToken;
    script.dataset.onCreated = "payJpServiceOnTokenCreated";
    script.dataset.onFailed = "payJpServiceonTokenFailedToCreate";
    (_a = document == null ? void 0 : document.getElementById(this.buttonAppendTo)) == null ? void 0 : _a.appendChild(script);
  }
  setCallBackToWindow() {
    window.payJpServiceOnTokenCreated = this.onTokenCreated;
    window.payJpServiceonTokenFailedToCreate = this.onTokenFailedToCreate;
  }
  getAttributeList(unscored = false) {
    const attributeNames = Object.getOwnPropertyNames(this).filter((attribute) => !["_payJpSource", "_onTokenCreated", "_onTokenFailedToCreate"].includes(attribute));
    if (unscored)
      return attributeNames;
    return attributeNames.map((name) => {
      return name.replace("_", "");
    });
  }
}
class PayJpV2Service {
  constructor({
    formAppendTo = "payjp-v2",
    payJpV2Source = "https://js.pay.jp/v2/pay.js",
    publicToken,
    onTokenCreated = () => console.log("token created"),
    onNumberFormInputChange = (event) => console.log("input changed")
  }) {
    __publicField(this, "_formAppendTo");
    __publicField(this, "_payJpV2Source");
    __publicField(this, "_publicToken");
    __publicField(this, "_onTokenCreated");
    __publicField(this, "_onNumberFormInputChange");
    __publicField(this, "_scriptId", "payjp-v2-script");
    __publicField(this, "_payjp");
    __publicField(this, "_elements");
    __publicField(this, "card");
    this.formAppendTo = formAppendTo;
    this.payJpV2Source = payJpV2Source;
    this.publicToken = publicToken;
    this.onTokenCreated = onTokenCreated;
    this.onNumberFormInputChange = onNumberFormInputChange;
    this.submit = this.submit.bind(this);
  }
  get formAppendTo() {
    return this._formAppendTo;
  }
  set formAppendTo(value) {
    this._formAppendTo = value;
  }
  get payJpV2Source() {
    return this._payJpV2Source;
  }
  set payJpV2Source(value) {
    this._payJpV2Source = value;
  }
  get publicToken() {
    return this._publicToken;
  }
  set publicToken(value) {
    this._publicToken = value;
  }
  get onTokenCreated() {
    return this._onTokenCreated;
  }
  set onTokenCreated(value) {
    this._onTokenCreated = value;
  }
  get onNumberFormInputChange() {
    return this._onNumberFormInputChange;
  }
  set onNumberFormInputChange(value) {
    this._onNumberFormInputChange = value;
  }
  get scriptId() {
    return this._scriptId;
  }
  set scriptId(value) {
    this._scriptId = value;
  }
  get payjp() {
    return this._payjp;
  }
  set payjp(value) {
    this._payjp = value;
  }
  get elements() {
    return this._elements;
  }
  set elements(value) {
    this._elements = value;
  }
  createScript(callbackFunction) {
    const isScriptExist = document.getElementById(this.scriptId);
    if (!isScriptExist) {
      const script = document.createElement("script");
      script.src = this.payJpV2Source;
      script.id = this.scriptId;
      script.type = "module";
      document.head.appendChild(script);
      script.onload = (event) => {
        if (callbackFunction)
          callbackFunction();
      };
    }
  }
  createElements() {
    try {
      this.payjp = Payjp(this.publicToken);
      this.elements = this.payjp.elements();
    } catch (e) {
      console.warn(e);
    }
  }
  mountForm(form) {
    const element = this.elements.create(form.name, { style: form.style });
    element.mount(`#${form.id}`);
    if (form.name === "card" || "cardNumber") {
      this.card = element;
      element.on("change", this.onNumberFormInputChange);
    }
  }
  submit() {
    this.payjp.createToken(this.card).then((r) => {
      const v2tokenElement = document == null ? void 0 : document.getElementById("payjp-v2-token");
      v2tokenElement.innerText = r.error ? r.error.message : r.id;
    });
  }
}
const PayJpCheckOut = ({
  payJpSource,
  publicToken,
  onTokenCreated,
  onTokenFailedToCreate,
  text,
  submitText,
  tokenName,
  previousToken,
  lang,
  namePlaceholder,
  tenant,
  partial
}) => {
  const [loaded, setLoaded] = useState(false);
  const payJpService = new PayJpCheckOutService({
    payJpSource,
    publicToken,
    buttonAppendTo: "payjpService",
    onTokenCreated: () => console.info("token created"),
    onTokenFailedToCreate: () => console.info("error"),
    text,
    submitText,
    tokenName,
    previousToken,
    lang,
    namePlaceholder,
    tenant,
    partial
  });
  useEffect(() => {
    setLoaded(true);
  }, []);
  useEffect(() => {
    if (loaded) {
      payJpService.mountButton();
    }
  }, [loaded]);
  return /* @__PURE__ */ React.createElement("div", {
    id: "payjpService"
  });
};
const isIterable = (obj) => {
  if (obj == null)
    return false;
  return typeof obj[Symbol.iterator] === "function";
};
const PayJpV2 = ({ children, publicToken, buttonText, onTokenCreated, onNumberFormInputChange }) => {
  const [loaded, setLoaded] = useState(false);
  const [scriptLoaded, setScriptLoaded] = useState(false);
  const payJpV2Service = new PayJpV2Service({
    publicToken,
    onTokenCreated,
    onNumberFormInputChange
  });
  useEffect(() => {
    setLoaded(true);
    payJpV2Service.createScript(() => setScriptLoaded(true));
  }, []);
  useEffect(() => {
    if (scriptLoaded) {
      payJpV2Service.createElements();
      if (!children) {
        console.warn("need to pass at least one card form");
        return;
      }
      const childs = isIterable(children) ? children : [children];
      childs.forEach((child) => {
        payJpV2Service.mountForm({
          name: child.props.name,
          id: child.props.id,
          style: child.props.style
        });
      });
    }
  }, [scriptLoaded]);
  return /* @__PURE__ */ React.createElement("div", {
    id: "payjp-v2",
    className: "payjp-outer"
  }, children, /* @__PURE__ */ React.createElement("button", {
    onClick: payJpV2Service.submit
  }, buttonText), /* @__PURE__ */ React.createElement("span", {
    id: "payjp-v2-token"
  }));
};
const PayJpV2Element = ({ id }) => {
  return /* @__PURE__ */ React.createElement("div", {
    id
  });
};
export { PayJpCheckOut, PayJpV2, PayJpV2Element };
