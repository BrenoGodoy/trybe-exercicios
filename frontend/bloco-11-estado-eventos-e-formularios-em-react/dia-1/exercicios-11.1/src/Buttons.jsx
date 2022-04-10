import React from 'react';

class Buttons extends React.Component {
  constructor() {
    super ()
    this.addState1 = this.addState1.bind(this);
    // this.addState2 = this.addState2.bind(this);
    // this.addState3 = this.addState3.bind(this);
    this.state = {
      numeroDeCliques1: 0,
      numeroDeCliques2: 0,
      numeroDeCliques3: 0,

    }
  }

  addState1 () {
    this.setState((anterior, _props) => ({
      numeroDeCliques1: anterior.numeroDeCliques1 + 1,
    }))
  }

  render() {
    return (
      <div>
        <button onClick={this.addState1}>{this.state.numeroDeCliques1}</button>
        {/* <button onClick={}>teste</button>
        <button onClick={}>teste</button> */}
      </div>
    )
  }
}

export default Buttons;
