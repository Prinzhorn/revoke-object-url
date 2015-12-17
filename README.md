# revoke-object-url

Normalize `URL.revokeObjectURL`, `webkitURL.revokeObjectURL` and don't crash older browsers. Safe to use inside a Web Worker.

```
npm install revoke-object-url
```

```js
var revokeObjectURL = require('revoke-object-url');
revokeObjectURL(url);

```