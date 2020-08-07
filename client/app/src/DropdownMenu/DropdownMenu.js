import React, { Component } from 'react';
import './DropdownMenu.css';

class DropdownMenu extends Component{
  constructor(props) {
    super(props);
    this.state = { id: '', options: [] }
  }

  static getDerivedStateFromProps(props, state) {
    return { id: props.id, options: props.options }
  }

  render() {
    return (
      <select id={this.state.id}>
        {this.state.options.map((o, index) => {
            return <option value={o}>{o}</option>;
        })}
      </select>
    );
  }
}

export default DropdownMenu;
