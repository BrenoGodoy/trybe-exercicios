import logo from './logo.svg';
import './App.css';
import Poke from './pokemon';

function App() {
  return (
    <>
      <h1>POKEDEX</h1>
      <div key={'poke-areas'} className='pokemons-area'>
        <Poke />
      </div>
    </> 
  )
}

export default App;
