import React, { Component } from "react";

class ListItem extends Component {
  render() {
    return (
      <div>
        <p>{this.props.name}</p>
      </div>
    );
  }
}

export default ListItem;
