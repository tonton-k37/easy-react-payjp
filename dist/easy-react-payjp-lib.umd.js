var g=Object.defineProperty;var S=(o,t,s)=>t in o?g(o,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):o[t]=s;var n=(o,t,s)=>(S(o,typeof t!="symbol"?t+"":t,s),s);(function(o,t){typeof exports=="object"&&typeof module!="undefined"?t(exports,require("react")):typeof define=="function"&&define.amd?define(["exports","react"],t):(o=typeof globalThis!="undefined"?globalThis:o||self,t(o.EasyReactPayJp={},o.React))})(this,function(o,t){"use strict";function s(i){return i&&typeof i=="object"&&"default"in i?i:{default:i}}var f=s(t);class b{constructor({payJpSource:e="https://checkout.pay.jp/",publicToken:r,buttonAppendTo:a="",onTokenCreated:p=()=>console.log("token created"),onTokenFailedToCreate:l=()=>console.log("failed to create token"),text:d="\u30AB\u30FC\u30C9\u3067\u652F\u6255\u3046",submitText:c="\u30AB\u30FC\u30C9\u3067\u652F\u6255\u3046",tokenName:T="",previousToken:h="",lang:k="ja",namePlaceholder:_="TARO YAMADA",tenant:u="",partial:C=!0}){n(this,"_payJpSource");n(this,"_publicToken");n(this,"_buttonAppendTo");n(this,"_onTokenCreated");n(this,"_onTokenFailedToCreate");n(this,"_text");n(this,"_submitText");n(this,"_tokenName");n(this,"_previousToken");n(this,"_lang");n(this,"_namePlaceholder");n(this,"_tenant");n(this,"_partial");this.payJpSource=e,this.publicToken=r,this.buttonAppendTo=a,this.onTokenCreated=p,this.onTokenFailedToCreate=l,this.text=d,this.submitText=c,this.tokenName=T,this.previousToken=h,this.lang=k,this.namePlaceholder=_,this.tenant=u,this.partial=C,this.setCallBackToWindow()}get payJpSource(){return this._payJpSource}set payJpSource(e){this._payJpSource=e}get publicToken(){return this._publicToken}set publicToken(e){this._publicToken=e}get buttonAppendTo(){return this._buttonAppendTo}set buttonAppendTo(e){this._buttonAppendTo=e}get onTokenCreated(){return this._onTokenCreated}set onTokenCreated(e){this._onTokenCreated=e}get onTokenFailedToCreate(){if(!this.partial){console.warn("unable to call this callback. partial needs to be set to true");return}return this._onTokenFailedToCreate}set onTokenFailedToCreate(e){this._onTokenFailedToCreate=e}get text(){return this._text}set text(e){this._text=e}get submitText(){return this._submitText}set submitText(e){this._submitText=e}get tokenName(){return this._tokenName}set tokenName(e){this._tokenName=e}get previousToken(){return this._previousToken}set previousToken(e){this._previousToken=e}get lang(){return this._lang||"ja"}set lang(e){this._lang=e}get namePlaceholder(){return this._namePlaceholder}set namePlaceholder(e){this._namePlaceholder=e}get tenant(){return this._tenant}set tenant(e){this._tenant=e}get partial(){return this._partial}set partial(e){this._partial=e}mountButton(){var r;const e=document.createElement("script");e.src=this.payJpSource,e.classList.add("payjp-button"),this.getAttributeList().forEach(a=>{e.dataset[a]=this[a]}),e.dataset.key=this.publicToken,e.dataset.onCreated="payJpServiceOnTokenCreated",e.dataset.onFailed="payJpServiceonTokenFailedToCreate",(r=document==null?void 0:document.getElementById(this.buttonAppendTo))==null||r.appendChild(e)}setCallBackToWindow(){window.payJpServiceOnTokenCreated=this.onTokenCreated,window.payJpServiceonTokenFailedToCreate=this.onTokenFailedToCreate}getAttributeList(e=!1){const r=Object.getOwnPropertyNames(this).filter(a=>!["_payJpSource","_onTokenCreated","_onTokenFailedToCreate"].includes(a));return e?r:r.map(a=>a.replace("_",""))}}const m=({payJpSource:i,publicToken:e,onTokenCreated:r,onTokenFailedToCreate:a,text:p,submitText:l,tokenName:d,previousToken:c,lang:T,namePlaceholder:h,tenant:k,partial:_})=>{const[u,C]=t.useState(!1),y=new b({payJpSource:i,publicToken:e,buttonAppendTo:"payjpService",onTokenCreated:()=>console.info("token created"),onTokenFailedToCreate:()=>console.info("error"),text:p,submitText:l,tokenName:d,previousToken:c,lang:T,namePlaceholder:h,tenant:k,partial:_});return t.useEffect(()=>{C(!0)},[]),t.useEffect(()=>{u&&y.mountButton()},[u]),f.default.createElement("div",{id:"payjpService"})};o.PayJpCheckOut=m,Object.defineProperties(o,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});
