# react-verify-code
A simply graphic verification code component for react.

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

