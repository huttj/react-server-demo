const React = require('react');
const ReactDOM = require('react-dom');
const List = require('./list.jsx');

// Use the global 'items' state from the server
ReactDOM.render(<List items={items}/>, document.getElementById('container'));

// Alternate method: Render the whole page with react
// const Index = require('./index.jsx');
// ReactDOM.render(<Index items={items} />, document);