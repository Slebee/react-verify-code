# react-verify-code
A simply graphic verification code component for react.

![image.png](http://upload-images.jianshu.io/upload_images/5677873-256982071d1e9cc5.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)


# Installation
Using npm:

`$ npm i --save react-verify-code`


# Usage
**example**
```
import React from 'react'
import ReactDOM from 'react-dom';
import ReactVerifyCode from 'react-verify-code'

class App extends React.Component {
    render() {
        return (
            <div>
                <h1>Example</h1>
                <ReactVerifyCode />
            </div>
        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('app')
);
```
**Props**:

Prop | Default | Type | Description
---- |---------| ---- |-----------
width | 100 | number | canvas width
height | 30 | number | canvas height
type | "blend" | string | response validate code
numbers | [0-9] | array | -
letters | [a-z,A-Z] | array | -
onChange | value=>void | func | code change callback
len | 4 | number | response string's length
ref |"react_verify_code" | string | canvas'ref


# Development
Want to run demos locally

```bash
git clone https://github.com/Slebee/react-verify-code
npm install
npm start
open http://localhost:8080
```

# LICENSE
MIT