import React from "react";
import { Link } from "react-router-dom";
import Home from "./Home";

class Teste extends React.Component {
  render() {
    const { rockstar } = this.props.match.params;
    return(
      <div>
        <Link to="/">About</Link>
        <div>{rockstar}</div>
      </div>
    )
  }
}

export default Teste;
