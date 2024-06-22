# check-password-complexity

<p align="center">

<b>check-password-complexity</b>: A simple javascript utility to check password strength and complexity.

</p>

## Demo
- **[CodeSandbox demo](https://codesandbox.io/p/github/tiavina-mika/check-password-complexity-demo)**
- **[Live demo](https://check-password-complexity.netlify.app/)**


## Installation

```shell
npm  install check-password-complexity
```
or
```shell
yarn  add check-password-complexity
```

## Get started

#### Simple usage

```tsx
import { checkPasswordComplexity } from "check-password-complexity";

// OR

const { checkPasswordComplexity } = require("check-password-complexity");

console.log(checkPasswordComplexity("abcdefgh").value); // tooWeak

checkPasswordComplexity("abcdefg8").value; // weak

checkPasswordComplexity("abcdefgh9").value; // medium

checkPasswordComplexity("abcdefgh9F=").value; // strong

```

## Result

|Property |Type                          | Description |
|----------------|-------------------------------|-----------------------------|
|value|`tooWeak, weak, medium, strong`| Too Weak, Weak, Medium or Strong
|checkedRules|`(minLength, lowercase, uppercase, number, specialCharacter)[]`| List of all checked values
|length|`number`| Length of the password

<br />

```tsx
  checkPasswordComplexity("abcdefg");
  /**
     checkedRules: ['lowercase']
      length: 7
      value: "tooWeak"
   */

  checkPasswordComplexity("abcdefg8");
  /**
     checkedRules: ['lowercase', 'number']
      length: 8
      value: "weak"
   */

  checkPasswordComplexity("abcdefgh9");
  /**
     checkedRules: ['minLength', 'lowercase', 'number']
      length: 9
      value: "medium"
   */

  checkPasswordComplexity("abcdefgh9F=");
  /**
     checkedRules: ['minLength', 'lowercase', 'uppercase', 'number', 'specialCharacter']
      length: 11
      value: "strong"
   */
```

### Options
|property |type                          | Default value                         | Description |
|----------------|-------------------------------|-----------------------------|-----------------------------|
|minLength|`number`|8| Number of minimum character
|allowedSpecialChar|`string`|!@#$%^&*(),.?\":{}<>\\[\\]\\\\/`~;'_+=-| regex for the special character to use

<br />

```tsx
  checkPasswordComplexity("abcdefg", { minLength: 6 });
  /**
     checkedRules: ['minLength', 'lowercase']
      length: 7
      value: "weak"
   */

   // example: "." is the special character to be allowed
  checkPasswordComplexity("abcdefg.", { allowedSpecialChar: "." });
  /**
     checkedRules: ['lowercase', 'specialCharacter']
      length: 8
      value: "weak"
   */
```

## Libraries using `check-password-complexity`
- [password-strength-input](https://www.npmjs.com/package/password-strength-input)
- [mui-password-strength-input](https://www.npmjs.com/package/mui-password-strength-input)

## Contributing
Contributions & pull requests are welcome!
Get started [here](https://github.com/tiavina-mika/check-password-complexity/blob/main/CONTRIBUTING.md).

If you find this project useful, don't forget to give a ★ on [GitHub](https://github.com/tiavina-mika/check-password-complexity)
