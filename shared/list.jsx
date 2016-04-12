'use strict';

const React = require('react');

const List = React.createClass({
  getInitialState() {
    return {
      items: this.props.items || [],
      input: this.props.input || ''
    }
  },
  _handleClick(e, i) {
    const item = this.state.items[i];
    item.completed = !item.completed;
    this.setState(this.state);
  },
  _handleInput(e) {
    this.setState({
      input: e.target.value || ''
    });
  },
  _handleKeyUp(e) {
    e.preventDefault();
    if (e.keyCode === 13 && this.state.input) {
      this.state.items.push({ text: this.state.input, completed: false });
      this.setState({ input: '' });
    }
  },
  render() {

    let items = this.state.items.map((item, i) => {
      let text = item.text;
      if (item.completed) {
        text = <strike>{text}</strike>;
      }
      return <li className="item" key={item.text} onClick={e=>this._handleClick(e, i)}>{text}</li>;
    });

    if (items.length === 0) items = <li>No items...</li>;

    return (
      <div>
        <ul>
          {items}
        </ul>
        <input
          type="text"
          value={this.state.input}
          onChange={this._handleInput}
          onKeyUp={this._handleKeyUp}
        />
      </div>
    );
  }
});

module.exports = List;