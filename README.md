# antd-input-password
---

password input based on [antd](https://github.com/ant-design/ant-design)'s Input.

[![NPM version][npm-image]][npm-url]
[![npm download][download-image]][download-url]

[npm-image]: https://img.shields.io/npm/v/antd-input-password.svg?style=flat-square
[npm-url]: https://www.npmjs.com/package/antd-input-password
[download-image]: https://img.shields.io/npm/dm/antd-input-password.svg?style=flat-square
[download-url]: https://www.npmjs.com/package/antd-input-password

## install

```bash
npm i antd-input-password --save
```

## Usage

```jsx
import InputPassword from 'antd-input-password';

ReactDOM.render(
  <InputPassword tooltip={{ ... }} />
, mountNode);
```

## API

### props

<table class="table table-bordered table-striped">
    <thead>
    <tr>
        <th style="width: 100px;">name</th>
        <th style="width: 50px;">type</th>
        <th style="width: 150px;">default</th>
        <th>description</th>
    </tr>
    </thead>
    <tbody>
        <tr>
          <td>tooltip</td>
          <td>Object</td>
          <td>{ show: '', hide: '' }</td>
          <td>tooltip text on icon</td>
        </tr>
    </tbody>
</table>


## Development

```
npm install
npm run start
```

## License

antd-input-password is released under the MIT license.

