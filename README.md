## Description

Dummy example of how to put together [react-boilerplate](https://github.com/mxstbr/react-boilerplate), [redux-form](https://github.com/erikras/redux-form), [semantic-ui](https://github.com/Semantic-Org/Semantic-UI), and [semantic-ui-react](https://github.com/Semantic-Org/Semantic-UI-React)

Go straight to the app folder.
* internals/webpack/webpack.base.babel.js has been modified to work around https://github.com/erikras/redux-form/issues/1637
* include semantic-ui in css loader (`webpack.base.babel.js`):
```
test: /\.css$/,
      include: [/node_modules/, /semantic/],
      loaders: ['style-loader', 'css-loader'],

```

## Installation

* npm install
* npm run build
* npm start:prod

## Thanks

* [Max Stoiber](https://twitter.com/mxstbr) for React Boilerplate.
* [Erik Rasmussen](https://twitter.com/erikras) for Redux Form
