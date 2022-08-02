# Information

EasyReactPayjp とは Payjp を React コンポーネントで利用できるようにした OSS です。
現在目下開発中でベータリリースとなります。
当ライブラリを利用して生じた責任の一切を開発者は負わないものとします。
利用にあたっては上記へ同意されたものとします。

## Usage

**Installation**

```zsh
$ npm i easy-react-payjp
```

## components

EasyReactPayjp でサポートしているコンポーネントは３種類

- PayJpCheckOut
- PayJpV2
- PayJpV2Element

**基本的な使い方**

```javascript
import React from 'react';
import {
  usePayjpCheckout,
  usePayjpV2,
  PayjpCheckout,
  PayjpV2,
  PayJpV2Element,
} from 'easy-react-payjp';

const style = {
  base: {
    color: '#198fcc',
    '::placeholder': {
      fontStyle: 'italic',
      color: 'green',
    },
  },
  invalid: {
    color: 'red',
  },
};

function App() {
  const checkoutProps = usePayjpCheckout({
    publicToken: 'YOUR_API_KEY',
    onTokenCreated: () => console.info('token created'),
    onTokenFailedToCreate: () => console.error('error'),
  });

  const v2Props = usePayjpV2({
    publicToken: 'YOUR_API_KEY',
    buttonText: 'submit',
    onTokenCreated: () => console.log('createToken'),
    onNumberFormInputChange: () => console.log('form changed'),
  });

  return (
    <div className='App'>
      <PayjpCheckout {...checkoutProps} />

      <PayjpV2 {...v2Props}>
        <PayJpV2Element name='card' id='card' style={style} />
      </PayjpV2>
    </div>
  );
}

export default App;
```

### PayJpV2Element について

このコンポーネントは、基本的な payjp の v2 エレメントをサポートしています。

name には、何の input なのかを入力します。

- name
  - card
  - cardNumber'
  - cardExpiry
  - cardCvc

## BugReports

バグがあった場合には、issue へお願いします

## Contribute

誰でも Welcome です

## Test

jest 導入予定
