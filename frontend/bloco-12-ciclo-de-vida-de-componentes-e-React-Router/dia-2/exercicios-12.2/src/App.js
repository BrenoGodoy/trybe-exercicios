import logo from './logo.svg';
import './App.css';
import Home from './Home';
import Teste from './teste';
import { BrowserRouter, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Route exact path="/" component={ Home }/>
      <Route path="/teste:rockstar" render={ (props) => <Teste {...props} /> } />
    </BrowserRouter>
  );
}

export default App;
