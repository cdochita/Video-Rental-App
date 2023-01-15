import React, { Component } from "react";
import "font-awesome/css/font-awesome.css";

class Like extends Component {
  render() {
    if (this.props.liked === true) {
      return (
        <i
          onClick={this.props.onClick}
          className="fa fa-heart"
          aria-hidden="true"
          style={{ cursor: "pointer" }}
        />
      );
    } else {
      return (
        <i
          onClick={this.props.onClick}
          className="fa fa-heart-o"
          aria-hidden="true"
          style={{ cursor: "pointer" }}
        />
      );
    }
  }
}

export default Like;
