<div align="center">
    <h1>react-tabloop-z</h1>
    <a href="https://www.npmjs.com/package/react-tabloop-z">react-tabloop-z</a>
    <br />
    <br />
    <b><a href="https://codesandbox.io/u/delpi.k">LIVE EXAMPLE</a></b>
</div>

---

[![NPM](https://img.shields.io/npm/v/react-tabloop-z.svg)](https://www.npmjs.com/package/react-tabloop-z) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)


#### Description
 * Prevents the user from tabbing outside of the popper / tooltip.
 * It creates a tabindex loop so that `Tab` (`Shift Tab`) will focus the element.
 * Support focus: `[tabindex], a, button, input, select, textarea`.
 * Wrapper @copyright beta: testing.
---

#### Usage

Install the package

```js
npm install react-tabloop-z
```

Import the module in the place you want to use:
```js
import TabLoop from "react-tabloop-z";

```
#### Snippet
```js
    <TabLoop>
      <Tooltip>
        <input type="text" >
        <input type="text" >
        <input type="text" >
        ...
      </Tooltip>
    </TabLoop>

    <TabLoop>
      <ChildComponent />
    </TabLoop>
```
---

#### Props

see <b>index.d.ts</b>

<br />

#### Note

<br />

#### Run

<b><a href="https://codesandbox.io/u/delpi.k">LIVE EXAMPLE</a>

<br />

#### License

MIT
