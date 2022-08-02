var j = Object.defineProperty;
var C = (o, e, t) => e in o ? j(o, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : o[e] = t;
var n = (o, e, t) => (C(o, typeof e != "symbol" ? e + "" : e, t), t);
import { useState as m, useEffect as _ } from "react";
class g {
  constructor({
    PayjpSource: e = "https://checkout.pay.jp/",
    publicToken: t,
    buttonAppendTo: s = "",
    onTokenCreated: i = () => console.log("token created"),
    onTokenFailedToCreate: r = () => console.log("failed to create token"),
    text: p = "\u30AB\u30FC\u30C9\u3067\u652F\u6255\u3046",
    submitText: c = "\u30AB\u30FC\u30C9\u3067\u652F\u6255\u3046",
    tokenName: a = "",
    previousToken: l = "",
    lang: d = "ja",
    namePlaceholder: u = "TARO YAMADA",
    tenant: T = "",
    partial: k = !0
  }) {
    n(this, "_PayjpSource");
    n(this, "_publicToken");
    n(this, "_buttonAppendTo");
    n(this, "_onTokenCreated");
    n(this, "_onTokenFailedToCreate");
    n(this, "_text");
    n(this, "_submitText");
    n(this, "_tokenName");
    n(this, "_previousToken");
    n(this, "_lang");
    n(this, "_namePlaceholder");
    n(this, "_tenant");
    n(this, "_partial");
    this.PayjpSource = e, this.publicToken = t, this.buttonAppendTo = s, this.onTokenCreated = i, this.onTokenFailedToCreate = r, this.text = p, this.submitText = c, this.tokenName = a, this.previousToken = l, this.lang = d, this.namePlaceholder = u, this.tenant = T, this.partial = k, this.setCallBackToWindow();
  }
  get PayjpSource() {
    return this._PayjpSource;
  }
  set PayjpSource(e) {
    this._PayjpSource = e;
  }
  get publicToken() {
    return this._publicToken;
  }
  set publicToken(e) {
    this._publicToken = e;
  }
  get buttonAppendTo() {
    return this._buttonAppendTo;
  }
  set buttonAppendTo(e) {
    this._buttonAppendTo = e;
  }
  get onTokenCreated() {
    return this._onTokenCreated;
  }
  set onTokenCreated(e) {
    this._onTokenCreated = e;
  }
  get onTokenFailedToCreate() {
    if (!this.partial) {
      console.warn(
        "unable to call this callback. partial needs to be set to true"
      );
      return;
    }
    return this._onTokenFailedToCreate;
  }
  set onTokenFailedToCreate(e) {
    this._onTokenFailedToCreate = e;
  }
  get text() {
    return this._text;
  }
  set text(e) {
    this._text = e;
  }
  get submitText() {
    return this._submitText;
  }
  set submitText(e) {
    this._submitText = e;
  }
  get tokenName() {
    return this._tokenName;
  }
  set tokenName(e) {
    this._tokenName = e;
  }
  get previousToken() {
    return this._previousToken;
  }
  set previousToken(e) {
    this._previousToken = e;
  }
  get lang() {
    return this._lang || "ja";
  }
  set lang(e) {
    this._lang = e;
  }
  get namePlaceholder() {
    return this._namePlaceholder;
  }
  set namePlaceholder(e) {
    this._namePlaceholder = e;
  }
  get tenant() {
    return this._tenant;
  }
  set tenant(e) {
    this._tenant = e;
  }
  get partial() {
    return this._partial;
  }
  set partial(e) {
    this._partial = e;
  }
  mountButton() {
    var t;
    const e = document.createElement("script");
    e.src = this.PayjpSource, e.classList.add("payjp-button"), this.getAttributeList().forEach((s) => {
      e.dataset[s] = this[s];
    }), e.dataset.key = this.publicToken, e.dataset.onCreated = "payjpServiceOnTokenCreated", e.dataset.onFailed = "payjpServiceonTokenFailedToCreate", (t = document.getElementById(this.buttonAppendTo)) == null || t.appendChild(e);
  }
  setCallBackToWindow() {
    window.payjpServiceOnTokenCreated = this.onTokenCreated, window.payjpServiceonTokenFailedToCreate = this.onTokenFailedToCreate;
  }
  getAttributeList(e = !1) {
    const t = Object.getOwnPropertyNames(this).filter(
      (s) => !["_payjpSource", "_onTokenCreated", "_onTokenFailedToCreate"].includes(
        s
      )
    );
    return e ? t : t.map((s) => s.replace("_", ""));
  }
}
class b {
  constructor({
    formAppendTo: e = "Payjp-v2",
    PayjpV2Source: t = "https://js.pay.jp/v2/pay.js"
  }) {
    n(this, "_formAppendTo");
    n(this, "_PayjpV2Source");
    n(this, "_publicToken");
    n(this, "_onTokenCreated");
    n(this, "_onNumberFormInputChange");
    n(this, "_scriptId", "Payjp-v2-script");
    n(this, "_Payjp");
    n(this, "_elements");
    n(this, "card");
    this.formAppendTo = e, this.PayjpV2Source = t;
  }
  get formAppendTo() {
    return this._formAppendTo;
  }
  set formAppendTo(e) {
    this._formAppendTo = e;
  }
  get PayjpV2Source() {
    return this._PayjpV2Source;
  }
  set PayjpV2Source(e) {
    this._PayjpV2Source = e;
  }
  get publicToken() {
    return this._publicToken;
  }
  set publicToken(e) {
    this._publicToken = e;
  }
  get onTokenCreated() {
    return this._onTokenCreated;
  }
  set onTokenCreated(e) {
    this._onTokenCreated = e;
  }
  get onNumberFormInputChange() {
    return this._onNumberFormInputChange;
  }
  set onNumberFormInputChange(e) {
    this._onNumberFormInputChange = e;
  }
  get scriptId() {
    return this._scriptId;
  }
  set scriptId(e) {
    this._scriptId = e;
  }
  get Payjp() {
    return this._Payjp;
  }
  set Payjp(e) {
    this._Payjp = e;
  }
  get elements() {
    return this._elements;
  }
  set elements(e) {
    this._elements = e;
  }
  init({
    publicToken: e,
    onTokenCreated: t = () => console.log("token created"),
    onNumberFormInputChange: s = (i) => console.log("input changed")
  }) {
    this.publicToken = e, this.onTokenCreated = t, this.onNumberFormInputChange = s;
  }
  createScript(e) {
    return new Promise((t, s) => {
      if (document.getElementById(this.scriptId)) {
        const r = document.createElement("script");
        r.src = this.PayjpV2Source, r.id = this.scriptId, document.head.appendChild(r), r.onload = (p) => {
          e && e(), t(!0);
        };
      }
    });
  }
  createElements() {
    try {
      this.Payjp = Payjp(this.publicToken), this.elements = this.Payjp.elements();
    } catch (e) {
      console.warn(e);
    }
  }
  mountForm(e) {
    const t = this.elements.create(e.name, { style: e.style });
    t.mount(`#${e.id}`), e.name, this.card = t, t.on("change", this.onNumberFormInputChange);
  }
  submit() {
    this.Payjp.createToken(this.card).then(
      (e) => {
        const t = document == null ? void 0 : document.getElementById("Payjp-v2-token");
        t.innerText = e.error ? e.error.message : e.id;
      }
    );
  }
}
const F = ({
  PayjpSource: o,
  publicToken: e,
  onTokenCreated: t,
  onTokenFailedToCreate: s,
  text: i,
  submitText: r,
  tokenName: p,
  previousToken: c,
  lang: a,
  namePlaceholder: l,
  tenant: d,
  partial: u
}) => {
  const [T, k] = m(!1), y = new g({
    PayjpSource: o,
    publicToken: e,
    buttonAppendTo: "payjpService",
    onTokenCreated: () => console.info("token created"),
    onTokenFailedToCreate: () => console.info("error"),
    text: i,
    submitText: r,
    tokenName: p,
    previousToken: c,
    lang: a,
    namePlaceholder: l,
    tenant: d,
    partial: u
  });
  return _(() => {
    T && y.mountButton();
  }, [T]), { setIsPayjpReady: k };
}, P = (o) => o == null ? !1 : typeof o[Symbol.iterator] == "function", h = new b({}), A = ({
  publicToken: o,
  buttonText: e,
  onTokenCreated: t,
  onNumberFormInputChange: s
}) => {
  const [i, r] = m(!1), [p, c] = m(!1), [a, l] = m(
    []
  );
  return _(() => {
    i && (h.init({
      publicToken: o,
      onTokenCreated: t,
      onNumberFormInputChange: s
    }), (async () => (await h.createScript(), h.createElements(), c(!0)))());
  }, [i]), _(() => {
    if (p) {
      if (!a) {
        console.warn("need to pass at least one card form");
        return;
      }
      (P(a) ? a : [a]).forEach((u) => {
        h.mountForm({
          name: u.props.name,
          id: u.props.id,
          style: u.props.style
        });
      });
    }
  }, [a, p]), { setIsPayjpReady: r, payjp: h, buttonText: e, setChildren: l };
};
export {
  F as usePayjpCheckout,
  A as usePayjpV2
};
