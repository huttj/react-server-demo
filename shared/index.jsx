const React = require('react');
const List  = require('./list.jsx');

const Home = React.createClass({
  getInitialState() {
    return {
      items: this.props.items || []
    };
  },
  render() {
    const script = { __html: `var items = ${JSON.stringify(this.state.items)};` };
    return (
      <html>
        <head>
          <title>Hello World</title>
        </head>
        <body>
          <div id="container">
            <List items={this.state.items}/>
          </div>
          <script dangerouslySetInnerHTML={script}></script>
          <script src="public/bundle.js"></script>
        </body>
      </html>
    );
  }
});

module.exports = Home;