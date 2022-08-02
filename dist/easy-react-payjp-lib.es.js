var C = Object.defineProperty;
var g = (o, e, t) => e in o ? C(o, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : o[e] = t;
var n = (o, e, t) => (g(o, typeof e != "symbol" ? e + "" : e, t), t);
import c, { useState as y, useEffect as m } from "react";
class b {
  constructor({
    PayjpSource: e = "https://checkout.pay.jp/",
    publicToken: t,
    buttonAppendTo: r = "",
    onTokenCreated: s = () => console.log("token created"),
    onTokenFailedToCreate: a = () => console.log("failed to create token"),
    text: p = "\u30AB\u30FC\u30C9\u3067\u652F\u6255\u3046",
    submitText: l = "\u30AB\u30FC\u30C9\u3067\u652F\u6255\u3046",
    tokenName: i = "",
    previousToken: d = "",
    lang: T = "ja",
    namePlaceholder: u = "TARO YAMADA",
    tenant: k = "",
    partial: _ = !0
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
    this.PayjpSource = e, this.publicToken = t, this.buttonAppendTo = r, this.onTokenCreated = s, this.onTokenFailedToCreate = a, this.text = p, this.submitText = l, this.tokenName = i, this.previousToken = d, this.lang = T, this.namePlaceholder = u, this.tenant = k, this.partial = _, this.setCallBackToWindow();
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
    e.src = this.PayjpSource, e.classList.add("payjp-button"), this.getAttributeList().forEach((r) => {
      e.dataset[r] = this[r];
    }), e.dataset.key = this.publicToken, e.dataset.onCreated = "payjpServiceOnTokenCreated", e.dataset.onFailed = "payjpServiceonTokenFailedToCreate", (t = document.getElementById(this.buttonAppendTo)) == null || t.appendChild(e);
  }
  setCallBackToWindow() {
    window.payjpServiceOnTokenCreated = this.onTokenCreated, window.payjpServiceonTokenFailedToCreate = this.onTokenFailedToCreate;
  }
  getAttributeList(e = !1) {
    const t = Object.getOwnPropertyNames(this).filter(
      (r) => !["_payjpSource", "_onTokenCreated", "_onTokenFailedToCreate"].includes(
        r
      )
    );
    return e ? t : t.map((r) => r.replace("_", ""));
  }
}
class P {
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
    onNumberFormInputChange: r = (s) => console.log("input changed")
  }) {
    this.publicToken = e, this.onTokenCreated = t, this.onNumberFormInputChange = r;
  }
  createScript(e) {
    return new Promise((t, r) => {
      if (document.getElementById(this.scriptId)) {
        const a = document.createElement("script");
        a.src = this.PayjpV2Source, a.id = this.scriptId, document.head.appendChild(a), a.onload = (p) => {
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
  onTokenFailedToCreate: r,
  text: s,
  submitText: a,
  tokenName: p,
  previousToken: l,
  lang: i,
  namePlaceholder: d,
  tenant: T,
  partial: u
}) => {
  const [k, _] = y(!1), j = new b({
    PayjpSource: o,
    publicToken: e,
    buttonAppendTo: "payjpService",
    onTokenCreated: () => console.info("token created"),
    onTokenFailedToCreate: () => console.info("error"),
    text: s,
    submitText: a,
    tokenName: p,
    previousToken: l,
    lang: i,
    namePlaceholder: d,
    tenant: T,
    partial: u
  });
  return m(() => {
    k && j.mountButton();
  }, [k]), { setIsPayjpReady: _ };
}, f = (o) => o == null ? !1 : typeof o[Symbol.iterator] == "function", h = new P({}), A = ({
  publicToken: o,
  buttonText: e,
  onTokenCreated: t,
  onNumberFormInputChange: r
}) => {
  const [s, a] = y(!1), [p, l] = y(!1), [i, d] = y(
    []
  );
  return m(() => {
    s && (h.init({
      publicToken: o,
      onTokenCreated: t,
      onNumberFormInputChange: r
    }), (async () => (await h.createScript(), h.createElements(), l(!0)))());
  }, [s]), m(() => {
    if (p) {
      if (!i) {
        console.warn("need to pass at least one card form");
        return;
      }
      (f(i) ? i : [i]).forEach((u) => {
        h.mountForm({
          name: u.props.name,
          id: u.props.id,
          style: u.props.style
        });
      });
    }
  }, [i, p]), { setIsPayjpReady: a, payjp: h, buttonText: e, setChildren: d };
}, E = ({ setIsPayjpReady: o }) => (m(() => {
  o(!0);
}, []), /* @__PURE__ */ c.createElement("div", {
  id: "payjpService"
})), I = ({ children: o, payjp: e, buttonText: t, setIsPayjpReady: r, setChildren: s }) => (m(() => {
  r(!0), s(o);
}, []), /* @__PURE__ */ c.createElement("div", {
  id: e.scriptId
}, /* @__PURE__ */ c.createElement("div", {
  id: "payjp-v2",
  className: "payjp-outer"
}, o, /* @__PURE__ */ c.createElement("button", {
  onClick: e.submit
}, t), /* @__PURE__ */ c.createElement("span", {
  id: "payjp-v2-token"
})))), x = ({ id: o }) => /* @__PURE__ */ c.createElement("div", {
  id: o
});
export {
  x as PayJpV2Element,
  E as PayjpCheckout,
  I as PayjpV2,
  F as usePayjpCheckout,
  A as usePayjpV2
};
