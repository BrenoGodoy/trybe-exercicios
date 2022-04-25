import React from 'react';
import { Route, BrowserRouter, Link} from 'react-router-dom';
import Teste from './teste';

class Home extends React.Component {
  render() {
    return(
      <div>
        <Link to="/teste">Teste</Link>
        <h1>OPA</h1>
        <p>SAME OL SITUATUION</p>
      </div>
    )
  }
}   

export default Home;
