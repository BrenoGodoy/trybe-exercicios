import logo from './logo.svg';
import './App.css';

const Task = (value) => {
  return (
    <li>{value}</li>
  );
}

function App() {
  const array = ['acordar', 'tomar café', 'ir para o trabalho', 'almoçar'];
  return (array.map((element) => {
    return Task(element);
  }));
}

export default App;
