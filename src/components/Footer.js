import React, { Component } from "react";

class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <span>
          Made with{" "}
          <span>
            <i class="fas fa-rocket"></i>
          </span>{" "}
          and{" "}
          <span>
            <i class="fas fa-coffee"></i>
          </span>{" "}
          by AL in 2021
        </span>
      </div>
    );
  }
}

export default Footer;
