import React from "react";
import pokemons from "./data";

class Poke extends React.Component {
  render() {
    return pokemons.map((element, i) => {
      return (
        <div key={`pokemon${i}`} className='pokemon'>
          <img src={element.image}></img>
          <p>{element.name}</p>
          <p>{element.type}</p>
          <p>{element.averageWeight.value} {element.averageWeight.measurementUnit}</p>
        </div>
      )
    });
  }
}

export default Poke;