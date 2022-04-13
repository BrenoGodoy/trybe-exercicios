import React from "react";

class Fieldset1 extends React.Component {
  render() {
    return (
      <fieldset className="fieldset1">
        <label>
          nome: 
          <input type="text"></input>
        </label>
        <label>
          Email:
          <input type="text"></input>
        </label>
      </fieldset>
    )
  }
}

export default Fieldset1;
