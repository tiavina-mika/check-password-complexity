# check-password-complexity

<p align="center">

<b>check-password-complexity</b>: A simple javascript utility to check password strength and complexity.

</p>

## Demo
Try it yourself in this **[CodeSandbox live demo](https://codesandbox.io/p/github/tiavina-mika/check-password-complexity-demo)**


## Installation

```shell

npm  install  check-password-complexity

```
or
```shell

yarn  add  check-password-complexity
```


## Get started

#### Simple usage

```tsx
import { checkPasswordComplexity } from "check-password-complexity";

// OR

const { checkPasswordComplexity } require("check-password-complexity");

console.log(checkPasswordComplexity("abcdefgh").value); // tooWeak

console.log(checkPasswordComplexity("abcdefg8").value); // weak

console.log(checkPasswordComplexity("abcdefgh9").value); // medium

console.log(checkPasswordComplexity("abcdefgh9F=").value); // strong

```

## Result

|property |type                          | Description |
|----------------|-------------------------------|-----------------------------|
|value|`tooWeak, weak, medium, strong`| Too Weak, Weak, Medium or Strong
|checkedRules|`(minLength, lowercase, uppercase, number, specialCharacter)[]`| List of all checked values
|length|`number`| Length of the password

```tsx
  console.log(checkPasswordComplexity("abcdefg"));
  /**
     checkedRules: ['lowercase']
      length: 7
      value: "tooWeak"
   */
  console.log(checkPasswordComplexity("abcdefg8"));
  /**
     checkedRules: ['lowercase', 'number']
      length: 8
      value: "weak"
   */
  console.log(checkPasswordComplexity("abcdefgh9"));
  /**
     checkedRules: ['minLength', 'lowercase', 'number']
      length: 9
      value: "medium"
   */
  console.log(checkPasswordComplexity("abcdefgh9F="));
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
```tsx
  console.log(checkPasswordComplexity("abcdefg", { minLength: 6 }));
  /**
     checkedRules: ['minLength', 'lowercase']
      length: 7
      value: "weak"
   */

   // example: "." is the special character to be allowed
  console.log(checkPasswordComplexity("abcdefg.", { allowedSpecialChar: "." }));
  /**
     checkedRules: ['lowercase', 'specialCharacter']
      length: 8
      value: "weak"
   */
```

## Contributing
Contributions & pull requests are welcome!
Get started [here](https://github.com/tiavina-mika/check-password-complexity/blob/main/CONTRIBUTING.md).

If you find this project useful, don't forget to give a ★ on [GitHub](https://github.com/tiavina-mika/check-password-complexity)
