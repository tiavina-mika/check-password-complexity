# check-password-complexity

<p align="center">

<b>check-password-complexity</b>: HTML parser for <a href="https://www.npmjs.com/package/mui-tiptap-editor">Tiptap editor</a> build on the of <a href="https://www.npmjs.com/package/html-react-parser">html-react-parser</a> with code syntax highlighting.

</p>


## Table of Contents

<details>

- [check-password-complexity](#check-password-complexity)
  - [Table of Contents](#table-of-contents)
  - [Motivation](#motivation)
  - [Demo](#demo)
  - [Installation](#installation)
  - [Get started](#get-started)
      - [Simple usage](#simple-usage)
      - [Content with code](#content-with-code)
      - [Customization](#customization)
  - [Props](#props)
    - [classNames Props](#classnames-props)
  - [Contributing](#contributing)

</details>

## Motivation
Tiptap editor is a text editor used mainly for blogging, and therefore in the back office.
<br />The problem is that if it's just to display the content (for example in a Next.js website), it is overkill to install <a href="https://tiptap.dev/">Tiptap</a> or <a href="https://www.npmjs.com/package/mui-tiptap-editor">mui-tiptap editor</a> (and the whole MUI library).
<br />The purpose of this library is precisely to display the contents of mui-tiptap-editor which is an html saved as text.
If you are using a dev oriented blog like Medium, this library is for you.

## Demo
Try it yourself in this **[CodeSandbox live demo](https://codesandbox.io/p/github/tiavina-mika/check-password-complexity-demo)**

<img alt="Screenshot" src="https://github.com/tiavina-mika/check-password-complexity/blob/main/screenshots/screenshot.png" />

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
import TiptapParser from "check-password-complexity";

const html = `<h1>Hello world</h1>`;

function App() {
  return (
    <TiptapParser>
      {html}
    </TiptapParser>
  );
}
```

#### Content with code

```tsx
const html = `<><h1>Hello there</h1><pre><code>console.log("Log something here")</code></pre></>`;

<TiptapParser language="typescript">
  {html}
</TiptapParser>
```

#### Customization

```tsx
const html = `<p><h1>Hello there</h1></p>`;

<TiptapParser
  containerClassName="bg-gray-100"
  classNames={{
    codeClassName: 'p-6',
    h1ClassName: 'text-xl',
    aClassName: 'underline',
    pClassName: 'text-gray-400'
  }}
/>
  {html}
</TiptapParser>
```

## Props

|props |type                          | Default value                         | Description |
|----------------|-------------------------------|-----------------------------|-----------------------------|
|containerClassName|`string`|empty| styles of the container
|classNames|`ClassNameProps`|empty| class names of each element withing the container
|language|`string`|empty| language of the code. [see the list](https://github.com/wooorm/lowlight?tab=readme-ov-file#data)

### classNames Props
|props |type                          | Default value                         | Description |
|----------------|-------------------------------|-----------------------------|-----------------------------|
|codeClassName|`string`|empty| class name of code element
|h1ClassName|`string`|empty| class name of h1 element
|h2ClassName|`string`|empty| class name of h2 element
|h3ClassName|`string`|empty| class name of h3 element
|h4ClassName|`string`|empty| class name of h4 element
|h5ClassName|`string`|empty| class name of h5 element
|h6ClassName|`string`|empty| class name of h6 element
|pClassName|`string`|empty| class name of p element
|ulClassName|`string`|empty| class name of ul element
|spanClassName|`string`|empty| class name of span element
|divClassName|`string`|empty| class name of div element
|aClassName|`string`|empty| class name of a element
|tableClassName|`string`|empty| class name of table element
|imageClassName|`string`|empty| class name of image element
|other props|`HTMLReactParserOptions`|empty| [all html-react-parser props](https://www.npmjs.com/package/html-react-parser)


## Contributing

Get started [here](https://github.com/tiavina-mika/check-password-complexity/blob/main/CONTRIBUTING.md).
